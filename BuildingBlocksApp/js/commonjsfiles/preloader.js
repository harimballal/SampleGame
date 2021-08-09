Game.preloader=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader.prototype={
	preload:function(){
		
		this.load.atlas('unity2_1_1_backbtn','assets/commonAssets/backbtn.png' ,null,game1Json.backbtnJson);
        this.load.atlas('unity2_1_1a_CommonSpeakerBtn','assets/commonAssets/speaker.png' ,null,game1Json.speakerJson);
        this.load.atlas('unity2_1_1a_starAnim','assets/commonAssets/starAnim.png',null,game1Json.starAnimJson);
        this.load.atlas('unity2_1_1a_replay','assets/commonAssets/reply.png' ,null,game1Json.replyJson);
        this.load.atlas('unity2_1_1a_btn','assets/commonAssets/btn.png',null,game1Json.btnJson);
        
        this.load.image('unity2_1_1a_tittleBar','assets/commonAssets/tittleBar.png');
        this.load.image('unity2_1_1a_background','assets/commonAssets/bg.png');
        this.load.image('unity2_1_1a_navBar','assets/commonAssets/navBar.png');
        this.load.image('unity2_1_1a_timebg','assets/commonAssets/timebg.png');
        this.load.image('unity2_1_1a_topicOutline','assets/commonAssets/topicOutline.png');

        //game assets.
        this.load.image('unity2_1_1a_BG_01', 'assets/gradeAssets/2.1.1a/BG_01.png');
        this.load.image('unity2_1_1a_practice','assets/gradeAssets/2.1.1a/practice.png');
        this.load.image('unity2_1_1a_topic','assets/gradeAssets/2.1.1a/topic.png');
        //this.load.image('Tick', 'assets/gradeAssets/2.1.1/Tick.png');
        
        this.load.image('unity2_1_1a_Caterpillar_Body1', 'assets/gradeAssets/2.1.1a/Caterpillar_Body1.png');
        this.load.image('unity2_1_1a_Caterpillar_Body2', 'assets/gradeAssets/2.1.1a/Caterpillar_Body2.png');
        
        this.load.atlas('unity2_1_1a_Tick', 'assets/gradeAssets/2.1.1a/tick.png', null,game1Json.tickJson);
        this.load.atlas('unity2_1_1a_Caterpillar_Neutral', 'assets/gradeAssets/2.1.1a/Caterpillar_Neutral.png', null,game1Json.cater_neutralJson);
        this.load.atlas('unity2_1_1a_Caterpillar_Happy', 'assets/gradeAssets/2.1.1a/Caterpillar_Happy.png', null,game1Json.cater_HappyJson);
        this.load.atlas('unity2_1_1a_Caterpillar_Sad', 'assets/gradeAssets/2.1.1a/Caterpillar_Sad.png', null,game1Json.cater_sadJson);
		
	
	},

	create:function(){
		
		this.state.start('unity2_1_1alevel1');
        
    },
}