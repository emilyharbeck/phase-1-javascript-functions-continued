saturdayFun()
function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`);
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

const defaultPrompt = wrapAdjective();
console.log(defaultPrompt());

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("incredible"));

const percentPrompt = wrapAdjective("%");
console.log(percentPrompt("a dedicated programmer"));
    