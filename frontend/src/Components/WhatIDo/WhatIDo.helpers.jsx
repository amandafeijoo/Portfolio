export const handleCardMouseMove = (e, isDesktop) => {
  if (!isDesktop) return;

  const rect = e.currentTarget.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const rotateX = (mouseY / rect.height - 0.5) * -4;
  const rotateY = (mouseX / rect.width - 0.5) * 4;

  e.currentTarget.style.transform = `
      translateY(-14px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.018)
    `;
};

export const handleCardMouseLeave = (e, isDesktop) => {
  if (!isDesktop) return;
  e.currentTarget.style.transform = "";
};
