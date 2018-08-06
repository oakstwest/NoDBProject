let zoltar = {
    a: 'The early bird gets the worm, but the second mouse gets the cheese.',
    b: 'Be on the alert to recognize your prime at whatever time of your life it may occur.',
    c: 'Courage is not simply one of the virtues, but the form of every virtue at the testing point.',
    d: 'Your road to glory will be rocky, but fulfilling.',
    e: 'Patience is your alley at the moment. Don’t worry!',
    f: 'Nothing is impossible to a willing heart.',
    g: 'Don’t worry about money. The best things in life are free.',
    h: 'Don’t pursue happiness – create it.',
    i: 'Courage is not the absence of fear; it is the conquest of it.',
    j: 'Nothing is so much to be feared as fear.',
    k: 'All things are difficult before they are easy.',
    l: 'The real kindness comes from within you.',
    m: 'A ship in harbor is safe, but that’s not why ships are built.',
    o: 'You don’t need strength to let go of something. What you really need is understanding.',
    p: 'If you want the rainbow, you have to tolerate the rain.',
    q: 'Fear is interest paid on a debt you may not owe.',
    r: 'The wise man is the one that makes you think that he is dumb.',
    s: 'The fortune you seek is in another program.',
    t: 'About time I got out of that for loop.',
    u: 'A foolish man listens to his heart. A wise man listens Zoltar!',
    v: 'Forgive your enemies...but REMEMBER THEIR NAMES!',
    w: 'Always borrow money from a pessimist. He wont expect it back.',
    x: 'Hearty laughter is a good way to jog internally without having to go outside.',
    y: 'Listen to Zoltar because fortune cookies are for whimps.',
    z: 'Don’t play leap frog with a unicorn.'
};

var newFortune = [];

module.exports = {
    getZoltar: (req, res) => {
        res.status(200).send(zoltar[req.params.letter])
    },
    createFortune: (req, res) => {
        newFortune.push(req.body.newFortune)
        console.log(req.body.newFortune)
        console.log(newFortune)
        res.status(200).send(newFortune)
    },

    updateFortune: (req, res) => {
        const { letter } = req.params
        zoltar[letter] = req.body.fortune
        res.status(200).send(zoltar[letter])
    },

    getNewFortune: (req, res) => {
        res.status(200).send(newFortune)
    },

    deleteFortune: (req, res) => {
        console.log(req.params.id, "id")
        newFortune.splice(req.params.index, 1)
        res.status(200).send(newFortune)
    },


};

