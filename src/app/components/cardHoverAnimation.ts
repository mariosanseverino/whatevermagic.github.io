export default function cardHoverAnimation(event: React.MouseEvent<HTMLDivElement>, item: HTMLElement, parent: HTMLElement): void {
    let dropShadow = 'rgba(0, 0, 0, 0.3)';
    let parentFilterColor = parent.getAttribute('data-filter-color')
    if (parentFilterColor !== null) {
        dropShadow = parentFilterColor;
    }

    parent.classList.add('animated');

    // Get the x position of the users mouse, relative to the button itself
    let x = Math.abs(item.getBoundingClientRect().x - event.clientX);
    // Get the y position relative to the button
    let y = Math.abs(item.getBoundingClientRect().y - event.clientY);

    // Calculate half the width and height
    let halfWidth  = item.getBoundingClientRect().width / 2;
    let halfHeight = item.getBoundingClientRect().height / 2;

    // Use this to create an angle. I have divided by 6 and 4 respectively so the effect looks good.
    // Changing these numbers will change the depth of the effect.
    let calcAngleX = (x - halfWidth) / 6;
    let calcAngleY = (y - halfHeight) / 14;
      
    let gX = (1 - (x / (halfWidth * 2))) * 100;
    let gY = (1 - (y / (halfHeight * 2))) * 100;

    // Add the glare at the reflection of where the user's mouse is hovering
    let glare = item.querySelector('.glare') as HTMLElement;
    glare.style.background = `radial-gradient(circle at ${gX}% ${gY}%, rgb(199 198 243), transparent)`;

    // And set its container's perspective.
    parent.style.perspective = `${halfWidth * 6}px`
    item.style.perspective = `${halfWidth * 6}px`

    // Set the items transform CSS property
    item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04)`;
    let cardBack = parent.querySelector('.card-back') as HTMLElement;
    cardBack.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04) translateZ(-4px)`;

    if(parent.getAttribute('data-custom-perspective') !== null) {
        parent.style.perspective = `${parent.getAttribute('data-custom-perspective')}`
    }

    // Reapply this to the shadow, with different dividers
    let calcShadowX = (x - halfWidth) / 3;
    let calcShadowY = (y - halfHeight) / 6;

    // Add a filter shadow - this is more performant to animate than a regular box shadow.
    item.style.filter = `drop-shadow(${-calcShadowX}px ${-calcShadowY}px 15px ${dropShadow})`;
}
