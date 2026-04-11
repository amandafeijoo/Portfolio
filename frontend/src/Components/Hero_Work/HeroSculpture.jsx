import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* =========================
   SOFT FLOATING PARTICLES
========================= */
function CoreParticles({ count = 390, spread = 2.2 }) {
  const pointsRef = useRef();

  const { positions, speeds, offsets } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const offsets = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const r = Math.random() * spread;
      const a = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * spread * 1.5;

      positions[i * 3 + 0] = Math.cos(a) * r;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(a) * r * 0.45;

      speeds[i] = 0.2 + Math.random() * 0.6;
      offsets[i] = Math.random() * Math.PI * 2;
    }

    return { positions, speeds, offsets };
  }, [count, spread]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const arr = pointsRef.current.geometry.attributes.position.array;
    const t = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const baseY = arr[i * 3 + 1];
      arr[i * 3 + 0] += Math.sin(t * speeds[i] + offsets[i]) * 0.0007;
      arr[i * 3 + 2] += Math.cos(t * speeds[i] + offsets[i]) * 0.0005;
      arr[i * 3 + 1] = baseY + Math.sin(t * speeds[i] + offsets[i]) * 0.002;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#e7c98f"
        size={0.022}
        transparent
        opacity={0.32}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* =========================
   DIAMOND 3D STRUCTURE
========================= */
function DiamondWire3D({
  outerColor = "#8fa8c9",
  innerColor = "#e7c98f",
  glowColor = "#f4efe6",
  accentBlue = "#8fa8c9",
}) {
  const group = useRef();
  const orbitGoldRef = useRef();
  const orbitBlueRef = useRef();

  const geos = useMemo(() => {
    const frontZ = 0.46;
    const backZ = -0.46;

    const outer = 1.34;
    const inner = 0.78;
    const blueInner = 0.58;

    const makeGeo = (pts) => new THREE.BufferGeometry().setFromPoints(pts);

    const frontDiamondGeo = makeGeo([
      new THREE.Vector3(0, outer, frontZ),
      new THREE.Vector3(outer, 0, frontZ),
      new THREE.Vector3(0, -outer, frontZ),
      new THREE.Vector3(-outer, 0, frontZ),
      new THREE.Vector3(0, outer, frontZ),
    ]);

    const backDiamondGeo = makeGeo([
      new THREE.Vector3(0, outer, backZ),
      new THREE.Vector3(outer, 0, backZ),
      new THREE.Vector3(0, -outer, backZ),
      new THREE.Vector3(-outer, 0, backZ),
      new THREE.Vector3(0, outer, backZ),
    ]);

    const connectorsGeo = makeGeo([
      new THREE.Vector3(0, outer, frontZ),
      new THREE.Vector3(0, outer, backZ),

      new THREE.Vector3(outer, 0, frontZ),
      new THREE.Vector3(outer, 0, backZ),

      new THREE.Vector3(0, -outer, frontZ),
      new THREE.Vector3(0, -outer, backZ),

      new THREE.Vector3(-outer, 0, frontZ),
      new THREE.Vector3(-outer, 0, backZ),
    ]);

    const crossGeo = makeGeo([
      new THREE.Vector3(0, inner, 0),
      new THREE.Vector3(0, -inner, 0),

      new THREE.Vector3(inner, 0, 0),
      new THREE.Vector3(-inner, 0, 0),
    ]);

    const innerDiamondGeo = makeGeo([
      new THREE.Vector3(0, inner, 0),
      new THREE.Vector3(inner, 0, 0),
      new THREE.Vector3(0, -inner, 0),
      new THREE.Vector3(-inner, 0, 0),
      new THREE.Vector3(0, inner, 0),
    ]);

    const blueDiamondGeo = makeGeo([
      new THREE.Vector3(0, blueInner, 0),
      new THREE.Vector3(blueInner, 0, 0),
      new THREE.Vector3(0, -blueInner, 0),
      new THREE.Vector3(-blueInner, 0, 0),
      new THREE.Vector3(0, blueInner, 0),
    ]);

    const facetGeo = makeGeo([
      new THREE.Vector3(0, outer, frontZ),
      new THREE.Vector3(inner, 0, 0),

      new THREE.Vector3(inner, 0, 0),
      new THREE.Vector3(0, -outer, frontZ),

      new THREE.Vector3(0, -outer, frontZ),
      new THREE.Vector3(-inner, 0, 0),

      new THREE.Vector3(-inner, 0, 0),
      new THREE.Vector3(0, outer, frontZ),
    ]);

    const blueFacetGeo = makeGeo([
      new THREE.Vector3(0, inner, 0),
      new THREE.Vector3(blueInner, 0, 0),

      new THREE.Vector3(blueInner, 0, 0),
      new THREE.Vector3(0, -inner, 0),

      new THREE.Vector3(0, -inner, 0),
      new THREE.Vector3(-blueInner, 0, 0),

      new THREE.Vector3(-blueInner, 0, 0),
      new THREE.Vector3(0, inner, 0),
    ]);

    const blueCrossGeo = makeGeo([
      new THREE.Vector3(-0.42, -0.42, 0),
      new THREE.Vector3(0.42, 0.42, 0),

      new THREE.Vector3(-0.42, 0.42, 0),
      new THREE.Vector3(0.42, -0.42, 0),
    ]);

    return {
      frontDiamondGeo,
      backDiamondGeo,
      connectorsGeo,
      crossGeo,
      innerDiamondGeo,
      blueDiamondGeo,
      facetGeo,
      blueFacetGeo,
      blueCrossGeo,
    };
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (group.current) {
      group.current.rotation.y += 0.003;
      group.current.rotation.x = Math.sin(t * 0.38) * 0.08;
      group.current.rotation.z = Math.sin(t * 0.22) * 0.03;
      group.current.position.y = Math.sin(t * 0.75) * 0.04;
    }

    if (orbitGoldRef.current) {
      orbitGoldRef.current.rotation.z += 0.01;
      orbitGoldRef.current.rotation.x = Math.sin(t * 0.7) * 0.2;
    }

    if (orbitBlueRef.current) {
      orbitBlueRef.current.rotation.y -= 0.008;
      orbitBlueRef.current.rotation.z = Math.sin(t * 0.55) * 0.45;
    }
  });

  return (
    <group ref={group}>
      {/* front */}
      <line geometry={geos.frontDiamondGeo}>
        <lineBasicMaterial color={outerColor} transparent opacity={0.72} />
      </line>

      {/* back */}
      <line geometry={geos.backDiamondGeo}>
        <lineBasicMaterial color={outerColor} transparent opacity={0.2} />
      </line>

      {/* connectors */}
      <lineSegments geometry={geos.connectorsGeo}>
        <lineBasicMaterial color={innerColor} transparent opacity={0.22} />
      </lineSegments>

      {/* center cross */}
      <lineSegments geometry={geos.crossGeo}>
        <lineBasicMaterial color={innerColor} transparent opacity={0.26} />
      </lineSegments>

      {/* inner diamond */}
      <line geometry={geos.innerDiamondGeo}>
        <lineBasicMaterial color={glowColor} transparent opacity={0.28} />
      </line>

      {/* inner blue diamond */}
      <line geometry={geos.blueDiamondGeo}>
        <lineBasicMaterial color={accentBlue} transparent opacity={0.22} />
      </line>

      {/* inner facets gold */}
      <lineSegments geometry={geos.facetGeo}>
        <lineBasicMaterial color={outerColor} transparent opacity={0.14} />
      </lineSegments>

      {/* inner facets blue */}
      <lineSegments geometry={geos.blueFacetGeo}>
        <lineBasicMaterial color={accentBlue} transparent opacity={0.14} />
      </lineSegments>

      {/* blue cross accents */}
      <lineSegments geometry={geos.blueCrossGeo}>
        <lineBasicMaterial color={accentBlue} transparent opacity={0.18} />
      </lineSegments>

      {/* nucleus */}
      <group>
        <mesh>
          <sphereGeometry args={[0.075, 32, 32]} />
          <meshBasicMaterial color="#8fa8c9" opacity={0.52} />
        </mesh>

        <mesh scale={[1.8, 1.8, 1.8]}>
          <sphereGeometry args={[0.075, 32, 32]} />
          <meshBasicMaterial
            color="#e7c98f"
            transparent
            opacity={0.12}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        <mesh scale={[3.1, 3.1, 3.1]}>
          <sphereGeometry args={[0.075, 32, 32]} />
          <meshBasicMaterial
            color="#aab4c8"
            transparent
            opacity={0.06}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* gold orbital ring */}
        <group ref={orbitGoldRef}>
          <mesh rotation={[Math.PI / 2.4, 0, 0]}>
            <torusGeometry args={[0.19, 0.004, 12, 100]} />
            <meshBasicMaterial color="#e7c98f" transparent opacity={0.42} />
          </mesh>
        </group>

        {/* blue orbital ring */}
        <group ref={orbitBlueRef}>
          <mesh rotation={[0.9, 0.4, 0]}>
            <torusGeometry args={[0.27, 0.003, 12, 100]} />
            <meshBasicMaterial color="#8fa8c9" transparent opacity={0.22} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

/* =========================
   MAIN HERO SCULPTURE
========================= */
export default function HeroSculpture({ enter, onProgress }) {
  const wrapper = useRef();
  const progress = useRef(0);
  const { camera, size } = useThree();

  const isMobile = size.width < 768;
  const isTablet = size.width >= 768 && size.width < 1024;

  const config = useMemo(() => {
    if (isMobile) {
      return {
        baseScale: 1.04,
        activeScale: 1.8,
        idleCameraZ: 5.9,
        activeCameraZ: 1.75,
        offsetX: 0,
        particles: 40,
      };
    }

    if (isTablet) {
      return {
        baseScale: 1.1,
        activeScale: 1.95,
        idleCameraZ: 5.25,
        activeCameraZ: 1.5,
        offsetX: -0.12,
        particles: 65,
      };
    }

    return {
      baseScale: 1.16,
      activeScale: 2.05,
      idleCameraZ: 4.85,
      activeCameraZ: 1.25,
      offsetX: -0.26,
      particles: 90,
    };
  }, [isMobile, isTablet]);

  useFrame((state) => {
    if (!wrapper.current) return;

    const enterSpeed = 0.007;
    const exitSpeed = 0.008;
    const cameraLerp = 0.095;

    progress.current = THREE.MathUtils.lerp(
      progress.current,
      enter ? 1 : 0,
      enter ? enterSpeed : exitSpeed
    );

    onProgress?.(progress.current);

    const p = progress.current;
    const t = state.clock.elapsedTime;

    const scale = THREE.MathUtils.lerp(config.baseScale, config.activeScale, p);

    wrapper.current.scale.setScalar(scale);

    // profundidad
    wrapper.current.position.z = -p * 4.2;

    // pequeño lift antes de entrar
    wrapper.current.position.y = Math.sin(t * 0.8) * 0.03 + p * 0.18;

    // WOW ROTATION
    wrapper.current.rotation.y += 0.004 + p * 0.045;

    wrapper.current.rotation.x = Math.sin(t * 0.4) * 0.06 + p * 0.35;

    wrapper.current.rotation.z = Math.sin(t * 0.25) * 0.025 + p * 0.22;

    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      THREE.MathUtils.lerp(config.idleCameraZ, config.activeCameraZ, p),
      cameraLerp
    );
  });
  return (
    <group ref={wrapper} position={[config.offsetX, 0, 0]}>
      <CoreParticles count={config.particles} />
      <DiamondWire3D />
    </group>
  );
}
