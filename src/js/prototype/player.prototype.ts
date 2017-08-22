class Player {
    public $html: any;

    public battlefield: Battlefield;

    public id: number;
    public flags: number;
    public name: string;

    constructor(playerName: string, battlefieldSize: number, isCPUPlayer?: boolean) {
        this.$html = $(Player.resources.layout);
        /** by default: type: human (0x00) */
        this.setName(playerName)
            .setFlag(isCPUPlayer ? Player.resources.flags.ai : 0x00);

        this.battlefield = new Battlefield(this.$html.find('.player-field'), battlefieldSize);
        if (!this.isAIControlled()) {
            this.battlefield.initPlayerCells();
        }
    }

    setId(id: number): Player {
        this.id = id;
        this.$html.attr('data-player-id', id);

        return this;
    }

    setName(name: string): Player {
        this.name = name;
        this.$html.find('>.player-name').text(name);

        return this;
    }

    setFlag(flag: number): Player {
        this.flags = flag;
        this.$html.attr('data-player-flag', flag);

        return this;
    }

    isAIControlled(): boolean {
        const flag = Player.resources.flags.ai;

        return (this.flags & flag) === flag;
    }

    public static resources = {
        flags: {
            ai: 0x01
        },
        layout: ' \
            <div class="col-md-6 player-area" data-player-id="unk" data-player-type="unk"> \
                <div class="player-name">undefined</div> \
                <div class="player-field"></div> \
            </div>'
    }
}
