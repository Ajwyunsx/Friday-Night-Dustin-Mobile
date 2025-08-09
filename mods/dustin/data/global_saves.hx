//

static function load_save() {
    // if (FlxG.save.data.dustinBoughtStuff == null) FlxG.save.data.dustinBoughtStuff = ["The CD"];
    if (FlxG.save.data.bloom == null) FlxG.save.data.bloom = true;
    if (FlxG.save.data.particles == null) FlxG.save.data.particles = true;
    if (FlxG.save.data.distortion == null) FlxG.save.data.distortion = true;
    if (FlxG.save.data.godrays == null) FlxG.save.data.godrays = true;
    if (FlxG.save.data.mechanics == null) FlxG.save.data.mechanics = true;

    if (FlxG.save.data.nh == null) FlxG.save.data.nh = false;
    if (FlxG.save.data.dev == null) FlxG.save.data.dev = false;

    FlxG.save.data.dustinBoughtStuff ??= [];
    FlxG.save.data.dustinSeenUnlockAnims ??= [];
    FlxG.save.data.dustinCash ??= 0;
    FlxG.save.data.dustinBeatEverything ??= false;
}

static var FULL_VOLUME:Bool = false;

static var weekPlaylist:Array<Dynamic> = [];
static var weekDifficulty:String = "";