window.onload = function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
}

class FlowFieldEffect {
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height) {
        this.#ctx = ctx;
        this.#ctx.strokeStyle = 'white';
        this.#height = height;
        this.#width = width;
        console.log('effect loaded');
        this.#draw(100, 100);

    }
    #draw(x, y) {
        const length = 500;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x, y);
        this.#ctx.lineTo(x + length, y + length);
        this.#ctx.stroke();
    }
}