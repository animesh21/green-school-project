angular.module("multipleChoice.services", []).factory("QuizService", function() {
    var a = [{
        id: 0,
        title: "The Tudors",
        text: "Do you know how many wives did HenryVIII have?",
        correct: !1,
        image: "henryviii.png",
        options: [{
            id: 0,
            text: "1",
            answer: !1
        }, {
            id: 1,
            text: "3",
            answer: !1
        }, {
            id: 2,
            text: "6",
            answer: !0
        }, {
            id: 3,
            text: "13",
            answer: !1
        }]
    }, {
        id: 1,
        title: "The Romans",
        text: "Which Roman Emperor built a massive wall across Northern Britain in 122 A.D.?",
        correct: !1,
        image: "hadrianswall.png",
        options: [{
            id: 0,
            text: "Marcus Aurelius",
            answer: !1
        }, {
            id: 1,
            text: "Hadrian",
            answer: !0
        }, {
            id: 2,
            text: "Nero",
            answer: !1
        }, {
            id: 3,
            text: "Augustus",
            answer: !1
        }]
    }, {
        id: 2,
        title: "The Elizabethans",
        text: "In 1594 William Shakespeare joined the company of this London theatre.",
        correct: !1,
        image: "globe.png",
        options: [{
            id: 0,
            text: "Broadway",
            answer: !1
        }, {
            id: 1,
            text: "Oxford University Theatre",
            answer: !1
        }, {
            id: 2,
            text: "The Globe",
            answer: !0
        }, {
            id: 3,
            text: "The London Palladium",
            answer: !1
        }]
    }, {
        id: 3,
        title: "The Renaissance",
        text: "The first successful printing press was developed by this man.",
        correct: !1,
        image: "gutenberg.png",
        options: [{
            id: 0,
            text: "Johannes Gutenburg",
            answer: !0
        }, {
            id: 1,
            text: "Benjamin Franklin",
            answer: !1
        }, {
            id: 2,
            text: "Sir Isaac Newton",
            answer: !1
        }, {
            id: 3,
            text: "Martin Luther",
            answer: !1
        }]
    }];
    return {
        all: function() {
            return a
        },
        get: function(b) {
            return a[b]
        },
        mark: function(b, c) {
            a[b].correct = c
        },
        getNumberOfCorrectAnswers: function() {
            for (var b, c = 0, d = 0; d < a.length; d++) b = a[d], b.correct && c++;
            return c
        },
        reset: function() {
            for (var b = 0; b < a.length; b++) a[b].correct = !1
        }
    }
});