class Cell {
    public $html: any;

    public coordinate: string;
    public id: number;

    protected flags: number;

    constructor(x: number, y: number) {
        this.$html = $(Cell.resources.layout);
        this.setCoordinate(Cell.resources.coordinate.factory(x, y));
    }

    setCoordinate(coordinate: string): Cell {
        this.coordinate = coordinate;
        this.$html.attr('data-coordinate', coordinate);

        return this;
    }

    setId(id: number): Cell {
        this.id = id;
        this.$html.attr('data-id', id);

        return this;
    }

    setFlags(flags: number): Cell {
        this.flags = flags;
        this.$html.attr('data-flags', flags);

        return this;
    }

    hasFlag(flag: number): boolean {
        return (this.flags & flag) === flag;
    }

    actAsAxisLabel(mode: string): Cell {
        const formatter = Cell.resources.coordinate.format[mode];
        this.$html.text(formatter(this));

        return this;
    }

    public static resources = {
        flags: {
            none: 0x00,
            dead: 0x01,
            ship: 0x02
        },
        layout: `<div class="col-md-1 battlefield-cell"></div>`,
        coordinate: {
            factory: (x: number, y: number): string => String.fromCharCode(97 + x).toUpperCase() + (++y),
            format: {
                letter: (cell: Cell): string => cell.coordinate.charAt(0),
                digit: (cell: Cell): string => cell.coordinate.substring(1)
            }
        }
    }
}
