export class Particle {
    position: { [key: string]: any } = {};

    Particle(x: number, y: number) {
        this.position.x = x;
        this.position.y = y;
    }

}