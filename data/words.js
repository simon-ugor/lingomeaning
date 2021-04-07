const words = [
    {
        "word": "A bag of cats",
        'meaning1': 'The noise two women make when they argue/engrossed in an enthusiast conversation.',
        'meaning2': 'A bag of 2 or more cats, which is very noisy due to the cats fighting to escape the bag.',
        'meaning3': 'Default term for when you need to reference an unknown, undetermined, or wildly irregular fetish. To be used as a placeholder and/or euphemism for said fetish.  Also known used in the long form punching a bag of cats',
        'example1': 'Shut up the pair of you, you’re like a bag of cats',
        'example2': 'Hey, what the hell is that noisy thing moving around on the ground? Person A  Oh that? It’s just a bag of cats Person B  Huh... that’s a little odd don’t you think? Person A  ... yeah... I guess a little... Person B',
        'example3': 'Jane: To have a good relationship you need to be open about everything that you’re into.  Tom: But what if you’re into punching a bag of cats?  Jane: Well that’s something your partner would need to consider, isn’t it?',
        "link": "word/a-bag-of-cats-meaning",
        "favorite": true
    },
    {
        "word": "Homie",
        "meaning1": "A really good friend.",
        "meaning2": "Someone who will always be your favorite person.",
        "example1": "Johnny is my homie.",
        "example2": "I really love my homies.",
        "link": "word/homie-meaning",
        "favorite": true
    },
    {
        "word": "Swag",
        "meaning1": "Free things that you are given, for example at an event.",
        "meaning2": "A fashionable and confident appearance or way of behaving.",
        "example1": "The bag was full of swag from the conference: coupons, samples, pens, etc.",
        "example2": "That boy's got swag!",
        "link": "word/swag-meaning",
        "favorite": true
    },
    {
        "word": "Guap",
        "meaning1": "Guap is a slang word referring to a lot of money.",
        "meaning2": "A slang term for money. It can mean that you have money in your hands.",
        "example1": "Damn he really has some guap!",
        "example2": "Take a moment, count my guap.",
        "link": "word/guap-meaning",
        "favorite": true
    },
    {
        "word": "Thot",
        "meaning1": "A woman who has many casual sexual encounters or relationships.",
        "meaning2": "A girl who is looked at as a hoe or slut.",
        "example1": "I really don't care about her anymore.. she is a thot.",
        "example2": "That girl a thot from the block .",
        "link": "word/thot-meaning",
        "favorite": true
    },
    {
        "word": "Dog shot",
        "meaning1": "Aussie definition - to be hit when you are not looking",
        "meaning2": "Hit from the back of the head",
        "example1": "A girl asked for a hug and then her boyfriend came and dog shot me.",
        "example2": "Someone dog shot me in a fight.",
        "link": "word/dog-shot-meaning",
        "favorite": true
    },
    {
        "word": "Ghetto",
        "meaning1": "A run down area of any town or city, but most often used in terms of the inner city. Any area with low or non-existent property value. May or may not refer to a high-crime area, but often does.",
        "meaning2": "An area of a city, especially a very poor area, where people of a particular race or religion live closely together and apart from other people",
        "example1": "Pine Manor is a ghetto so full of drug dealers and other criminals.",
        "example2": "As a child she lived in one of New York's poorest ghettos.",
        "link": "word/ghetto-meaning",
        "favorite": true
    },
    {
        "word": "Smoking gas",
        "meaning1": "Smoking strong weed.",
        "meaning2": "Smoking loud marijuana.",
        "example1": "I was at this party and we were smoking gas!",
        "example2": "Paul Shawn is always smoking gas!",
        "link": "word/smoking-gas-meaning",
        "favorite": true
    },
    {
        "word": "Guala",
        "meaning1": "Guala is Latin-American Spanish slang used for someone who shows their Latin heritage through clothes, mannerisms, and language.",
        "meaning2": "A fortune or a very large sums of money",
        "example1": "Stop beign such a guala!",
        "example2": "I need my guala.",
        "link": "word/guala-meaning",
        "favorite": true
    },
    {
        "word": "V Files",
        "meaning1": "V Files is a store based in New York",
        "example1": "I took her shopping at V Files.",
        "link": "word/v-files-meaning",
        "new": true
    },
    {
        "word": "Suicide doors",
        "meaning1": "A suicide door is the slang term for an automobile door hinged at its rear rather than the front.",
        "meaning2": "Suicide doors refer to car doors that open in the opposite of the regular direction.",
        "example1": "My doors are suicide.",
        "example2": "Suicide doors on my new whip.",
        "link": "word/suicide-doors-meaning",
        "favorite": true
    },
    {
        "word": "Danny Ocean",
        "meaning1": "Daniel Danny Ocean is a character in Ocean's Eleven film. He is the leader of the crew and recruits its members to pull off a heist",
        "example1": "On a mission to get rich like Danny Ocean.",
        "link": "word/danny-ocean-meaning",
        "new": true
    },
    {
        "word": "Milli",
        "meaning1": "Is the most beautiful person u will ever meet she is so sweet and kind.",
        "meaning2": "A million dollars.",
        "example1": "Is that milli she is soooo pretty.",
        "example2": "Two milli, four milli, nah I need more money.",
        "link": "word/milli-meaning",
        "new": true
    },
    {
        "word": "A big bag of beans",
        'meaning1': 'An annoying or otherwise less-than-ideal situation; an undesirable state for one to be in.',
        'example1': '“Man, this new project is really making class a big bag of beans.”',
        "link": "word/a-big-bag-of-beans-meaning",
    },
    {
        "word": "A Big Decision",
        'meaning1': 'When the choice between two objects has either equally positive or negative effects, and so is really, really hard to make.',
        'example1': 'Tomorrow I have to make a big decision.',
        "link": "word/a-big-decision-meaning",
    },
    {
        "word": "A big hand",
        'meaning1': 'Enthusiastic round of applause',
        'example1': "Let’s give him a big hand.",
        "link": "word/a-big-hand-meaning",
        "new": true
    },
    {
        "word": "A Big Rest",
        'meaning1': 'To have a big rest is very similar to cotch. It is basically resting for a large amount of time with disregard to other activitys that may need attending to.  Big Rest’s are enhanced by any type of entoxicant.',
        'meaning2': 'Dead. A dirt nap. The Long Sleep.',
        'example1': 'We’ve been walking for minutes lets have A Big Rest  It’s time for A Big Rest',
        'example2': 'You mess with Luthor’s girlfriend, you’ll be taking a Big Rest.',
        "link": "word/a-big-rest-meaning",
    },
    {
        "word": "A bigger fish",
        'meaning1': 'A bigger fish is something that always exists.',
        'example1': 'person 1 : It says that the biggest fish in the ocean is the Rhincodon typus person 2 : That’s impossible. There’s always a bigger fish',
        "link": "word/a-bigger-fish-meaning",
        "new": true
    },
    {
        "word": "A Birkett",
        'meaning1': 'Completing a 5k run in under 25 minutes.',
        'example1': 'Dude I just ran a 5k in 24.07, can’t believe I did a birkett',
        "link": "word/a-birkett-meaning",
    },
    {
        "word": "A Bishop",
        'meaning1': 'To go to a place with the intention and expectation to do something. Then doing something completely different that has little to no correlation to the original task and then complaining when it doesn’t work out.',
        'example1': 'He’s gone and done a bishop. I’m just gonna do a bishop.',
        "link": "word/a-bishop-meaning",
    },
    {
        "word": "A bit downey",
        'meaning1': 'When something is described as silly, stupid or messed up.',
        'example1': '‘Well, that was a bit downey!’',
        "link": "word/a-bit-downey-meaning",
    },
    {
        "word": "A bit of a handful",
        'meaning1': 'difficult to look after, especially children and animals.',
        'meaning2': 'When your kid is allowed to misbehave, but you choose to find it adorable.',
        'example1': 'Your son can be a bit of a handful at times.',
        'example2': 'Veronica can be a bit of a handful at times.',
        "link": "word/a-bit-of-a-handful-meaning",
    },
    {
        "word": "A bit willy",
        'meaning1': 'A phrase used to describe something that doesn’t quite meet your expectations.',
        'example1': 'Joe: What did you think of the trip? Ross: It was a bit willy',
        "link": "word/a-bit-willy-meaning",
    },
    {
        "word": "A bit windy",
        'meaning1': 'Been annoyed by someone in a room or place and want to tell someone with out offending the person. Can use the direction of the wind to identify the person.',
        'example1': 'Its a bit windy in here. Theres a wind coming from that direction.',
        "link": "word/a-bit-windy-meaning",
    },
    {
        "word": "A blonde on a quiz show",
        'meaning1': 'A phrase that means someone is very stupid.',
        'example1': 'On that spelling test i was like a blonde on a quiz show.',
        "link": "word/a-blonde-on-a-quiz-show-meaning",
    },
    {
        "word": "Boily",
        'meaning1': 'A person who doesn’t really help anyone and acts as if he’s been doing a lot .',
        'example1': 'Don’t count on him to help you through these tough times, he’s such a boily.',
        "link": "word/boily-meaning",
    },
    {
        "word": "A bondy",
        'meaning1': 'When a job takes twice as long as you expected and turns out rubbish',
        'meaning2': 'A poor quality job that has taken twice as long as it would to do a good job',
        'example1': 'Oh my god it’s took all day to do that and it’s rubbish I just did a bondy',
        'example2': 'Look at the state of that looks like a bondy',
        "link": "word/a-bondy-meaning",
    },
    {
        "word": "A bonnie",
        'meaning1': 'Used to describe someone who is terribly useless',
        'example1': 'That girl is such a Bonnie.',
        "link": "word/a-bonnie-meaning",
    },
    {
        "word": "A Bowman",
        'meaning1': 'A Bowman is a socially awkward person, who is not good around new people, and generally takes a long time to become comfortable around others. A Bowman normally speaks in a monotone and takes longer to complete simple tasks.',
        'meaning2': 'Making a decision with zero thought or regard of possible repercussions to yourself or others.',
        'example1': 'did you take an hour to do that work? yep, i guess you’re a Bowman',
        'example2': 'Tom was on patrol, a lowly tech walks across his area he sends his attack dog in to absolutely fucking destroy him! Fuck Tom what a bowman!',
        "link": "word/a-bowman-meaning",
    },
    {
        "word": "Box of hair",
        'meaning1': 'Used to describe someone with a remarkable lack of intelligence.',
        'example1': 'That girl is dumber than a box of hair.',
        "link": "word/box-of-hair-meaning",
    },
    {
        "word": "A Box of Matches",
        'meaning1': 'Used for when a person, place or thing is cool, hip or neat. Because it/they are fire.',
        'example1': 'Hey, it was nice to meet you, you’re a box of matches!',
        "link": "word/a-box-of-matches-meaning",
    },
    {
        "word": "a brick away",
        'meaning1': 'a unit of measurement to mean a large distance, any distance too far that you don’t feel like driving',
        'example1': 'Man people come all the way up here to ski, geez it’s a brick away.',
        "link": "word/a-brick-away-meaning",
    },
    {
        "word": "Bumble",
        'meaning1': 'A chill. A meet-up.',
        'example1': 'Hey wanna come for a bumble? I’ll pick you up in 10.',
        "link": "word/bumble-meaning",
    },
    {
        "word": "A bump in the road",
        'meaning1': 'a small problem that can be solved.',
        'example1': 'Misunderstanding was just a bump in the road on the way to success.',
        "link": "word/a-bump-in-the-road-meaning",
    },
    {
        "word": "Cader",
        'meaning1': 'A person who wants you to feel sorry for them. They think the world is after them and everyone hates them. When something goes wrong they think it’s the worse possibly think and think the world revolves around them and everyone should pay attention to them.',
        'example1': 'Person 1: My car broke down and it was so difficult to fix it and no one wanted to help me. They all hate me. They want me to die. They wouldn’t care if I commited suicide. Person 2: Oh don’t be such a Cader!',
        "link": "word/cader-meaning",
    },
    {
        "word": "A carla",
        'meaning1': 'someone who believes they are an expert in everything',
        'example1': 'Bob: look at that photograph i mean the lighting is all wrong, the image isn’t even in focus and they don’t know how to use the f- stop.  Bill: dude stop being a carla.',
        "link": "word/a-carla-meaning",
    },
    {
        "word": "Abasement",
        'meaning1': 'Action of humbling or degrading',
        'example1': 'The abasement.',
        "link": "word/abasement-meaning",
    },
    {
        "word": "Abashful",
        'meaning1': 'When someone is purposely trying to embarrass you, they are being abashful.',
        'example1': 'Don’t do that in public! Your being so abashful.',
        "link": "word/abashful-meaning",
    },
    {
        "word": "Abattoir",
        'meaning1': 'A fancy word for slaughterhouse.',
        'meaning2': 'A slaughter house usually for cattle and sheep',
        'example1': 'There was so much blood it was reminiscent of an abattoir.',
        'example2': '1st guy:hey man wats that disgusting smell 2nd guy: its the abattoir',
        "link": "word/abattoir-meaning",
    },
    {
        "word": "Abbarnan",
        'meaning1': 'A great guy who always loves everyone. Every girl wants him.',
        'example1': 'Girl 1:I want a Abbarnan Girl 2:me too',
        "link": "word/abbarnan-meaning",
    },
    {
        "word": "Goyard",
        'meaning1': 'Goyard is a French trunk and leather goods maker. The brand is known for a certain amount of secrecy, with little knowing where the iconic interlocking Chevron pattern, seen on many Goyard bags, originates from.',
        'example1': 'Goyard bags full of hundreds.',
        "link": "word/goyard-meaning",
        "new": true
    },
    {
        "word": "La familia",
        'meaning1': 'The family in Spanish.',
        'example1': 'My la familia go hard.',
        "link": "word/la-familia-meaning",
    },
    {
        "word": "Abbington",
        'meaning1': 'Hood. Very ghetto. Scary.',
        'example1': 'He lives in abbington.',
        "link": "word/abbington-meaning",
    },

]

export default words