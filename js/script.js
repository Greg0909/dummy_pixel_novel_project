/* global monogatari */

monogatari.component ('main-screen').template (() => {
    return `
        <h1>Mc Donald's case</h1>
		<img src='assets/images/Mc.png' id='mainscreen_img'>
    `;
});

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	counter: 'pix_McDonald_counter.jpg',
	backdoor: 'pix_backdoor.jpg',
	security_room: 'pix_security_camera_room.jpg'
});


// Define the Characters
monogatari.characters ({
	'ronald': {
		name: 'Ronald McDonald',
		color: '#fa2828',
		directory: 'Ronald',
		sprites: {
			normal: 'pix_normal.png',
			happy: 'happy.png'
		}
	},
	'you': {
		name: '{{player.name}}',
		color: '#00a80b',
	},
	'plankton': {
		name: 'Plankton',
		color: '#00a80b',
		directory: 'Plankton',
		sprites: {
			happy: 'pix_happy.png'
		}
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene counter with fadeIn',
		'[Click on the screen or press space bar to advance the dialogue]',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					console.log("Validando el nombre...")
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					console.log("Se guardo el nombre")
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
					console.log("Se BORRO el nombre")
				},
				'Warning': 'You must enter a name!'
			}
		},
		'show character ronald normal at center with fadeIn end-fadeOut',
		'ronald Hi nice friday, Welcome to McDonald',
		//'hide character ronald with fadeOut',
		//'show character ronald happy at center with fadeIn end-fadeOut',
		'ronald Oh {{player.name}} you are finally here!',
		//'hide character ronald with fadeOut',
		//'show character ronald normal at center with fadeIn end-fadeOut',
		'ronald We need your help...',
		'jump problem'
	],

	'problem': [
		'ronald Someone is trying to steal the corporate secrets',
		'ronald We need you to investigate and identify the criminal',
		'ronald I hope you don’t have plans for this weekend because it seems like a complex case',
		'ronald But I know you are a great genius',
		'ronald Hope you the best of luck!!',
		'ronald Tell me if something shows up.',
		'jump stain_under_the_door'
	],

	'stain_under_the_door':[
		'show scene #000000 with fadeIn',
		'centered <h1>FRIDAY</h1>',
		'show scene backdoor with fadeIn',
		'<i>( Something small catch your attention )</i>',
		'<i>( You get near the back door )</i>',
		'<i>( There is a stain under the door as if something crawled underneath it )</i>',
		'jump check_the_security_cameras'
	],

	'check_the_security_cameras': [
		'show scene security_room with fadeIn',
		'<i>( You enter the security camera room and start inspecting )</i>',
		'<i>( After checking the recordings you detect missing parts, as if someone had hacked the security system )</i>',
		'<i>( Whoever was the culprit, he had elevated knowledge of computer systems )</i>',
		'jump apologize_to_ronald'
	],

	'apologize_to_ronald': [
		'show scene #000000 with fadeIn',
		'centered <h1>SUNDAY</h1>',
		'show scene counter with fadeIn',
		'show character ronald normal at center with fadeIn',
		'ronald Hi, please give me good news',
		'ronald WHAT!?',
		'ronald There is nothing on the cameras and no clues?',
		'ronald Seems like it was indeed a difficult case.',
		'ronald The culprit truly is a genius',
		'ronald Hope he doesn’t strike again',
		'you I don’t think he will',
		'you Yesterday I added more security to the secret formula room',
		'you Sorry for not being able to arrest the culprit.',
		'jump in_a_dark_room'
	],

	'in_a_dark_room': [
		'show scene #000000 with fadeIn',
		'centered <h1>In a dark room</h1>',
		'show scene #000000 with fadeIn',
		'you Finally I have it!!',
		'you I just had to pretend to be {{player.name}}',
		'you I’m truly a genius, I might not be able to steal the best hamburger under the sea, but now I have the world’s most famous burger!',
		'show character plankton happy at center with fadeIn',
		'plankton [Malicious laughter] JAJAJJAJAAJAA!!!',
		'hide character plankton with fadeOut',
		'centered <h1>The END (?)</h1>',
		'end'
	]
});