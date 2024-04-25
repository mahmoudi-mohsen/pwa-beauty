import anime from 'animejs';

export function translate(element) {
    const divAnimation = anime  ({
        targets: element,
        opacity: [1, 1],
        scale: [2.5, 1],
        // translateY:['-50%','-50%'],
        duration: 20000,
        delay: 0,
        easing: 'easeInOutSine',
        autoplay: false
    })
    const scrollPercent = () => {
        const bodyST = document.body.scrollTop;
        const docST = document.documentElement.scrollTop;
        const docSH = document.documentElement.scrollHeight;
        const docCH = document.documentElement.clientHeight;
        return (docST + bodyST) / (docSH - docCH) * 100
    }

    window.onscroll = () => {
        divAnimation.seek((scrollPercent() / 100) * divAnimation.duration);
    };

}
