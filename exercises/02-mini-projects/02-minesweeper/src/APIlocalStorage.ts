export class Storage 
{
    static isEmpty() {
      return this.getCells() == '';
    }

    static getCells() {
        let cells = localStorage.getItem('cells');
        return cells ? JSON.parse(cells) : '';
    }

    static setCells(cells: any[]) {
        localStorage.setItem('cells', JSON.stringify(cells));
    }

    static getTicks() {
        let ticks = localStorage.getItem('ticks');
        return ticks ? parseInt(JSON.parse(ticks)) : 0;
    }

    static setTicks(ticks: number) {
        localStorage.setItem('ticks', JSON.stringify(ticks));
    }

    static getLevel() {
        let level = localStorage.getItem('level');
        return level ? JSON.parse(level) : '';
    }

    static setLevel(level: any) {
        localStorage.setItem('level', JSON.stringify(level));
    }
}