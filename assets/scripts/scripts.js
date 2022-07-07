var isProfilEmbed = 1;

var contacts = [
    {
        name: "justin",
        unread: 10
    }
]

var chatArr = [
    {
        name:"Justin",
        messages:
        [
            {
                by: 1,
                type: 'txt',
                value: 'P'
            },
            {
                by: 0,
                type: 'txt',
                value: 'Whut?'
            },
            {
                by:1,
                type:'txt',
                value:'Gk jadi'
            },
            {
                by:0,
                type:'sticker',
                value:'4'
            }
        ]
    },
    {
        name:"Kakak",
        messages:
        [
            {
                by:0,
                type:'txt',
                value:'Test',
            },
            {
                by:1,
                type:'txt',
                value:'masuk'
            },
            {
                by:0,
                type:'txt',
                value:'Oke',
            },
            {
                by:0,
                type:'sticker',
                value:'3'
            }
        ]
    },
    {
        name:"Mama",
        messages:
        [
            {
                by:0,
                type:'txt',
                value:'Maaa'
            },
            {
                by:1,
                type:'txt',
                value:'Apa ndy?'
            },
            {
                by:0,
                type:'txt',
                value:'Air e mati'
            },
            {
                by:0,
                type:'txt',
                value:'Ada bocor di Ranugrati'
            },
            {
                by:1,
                type:'txt',
                value:'Minta o orang depan, mereka pake sumur bor'
            }
        ]
    },
    {
        name:'Echo',
        messages:
        [
            {
                by:0,
                type:'sticker',
                value:'1'
            },
            {
                by:0,
                type:'url',
                value:'https://www.w3schools.com/jsref/met_node_appendchild.asp'
            },
            {
                by:0,
                type:'txt',
                value:'test123'
            }
        ]
    },
    {
        name:'Lala',
        messages:
        [
            {
                by:1,
                type:'txt',
                value:'Weh'
            },
            {
                by:1,
                type:'txt',
                value:'Sibuk a?'
            },
            {
                by:0,
                type:'txt',
                value:'Hooh'
            }
        ]
    }
]

function showChat(num) {
    const chatArea = document.getElementById("chat");
    chatArea.innerHTML = '';
    var isProfilEmbed = 1;
    document.getElementById("chatterid").innerHTML = chatArr[num][0];
    var chatLen = chatArr[num].length - 1;
    for (a = 1; a <= chatLen; a++) {
        if (chatArr[num][a][1] === 1) {// is sticker
            if (chatArr[num][a][0] === 0) {
                printChat("sticker", "you", chatArr[num][a][2])
            }
            else {
                printChat("sticker", num, chatArr[num][a][2])
            }
        }
        else if (chatArr[num][a][1] === 2) {// is url
            if (chatArr[num][a][0] === 0) {
                printChat("url", "you", chatArr[num][a][2])
            }
            else {
                printChat("url", num, chatArr[num][a][2])
            }

        }
        else {// is normal message
            if (chatArr[num][a][0] === 0) {
                printChat("normal", "you", chatArr[num][a][1])
            }
            else {
                printChat("normal", num, chatArr[num][a][1])
            }
        }
    }
}

function printChat(mode, who, message) {
    const chatArea = document.getElementById("chat");
    const parent = document.createElement("div");

    const span = document.createElement("span")

    const messageText = document.createTextNode(message);

    if (who === "you") {
        parent.setAttribute('class', 'chat ralign')
        span.setAttribute('class', 'you')
        isProfilEmbed = 1;
        decideMode()
    }
    else {
        span.setAttribute('class', 'they');
        isProfilEmbedded()
    }

    function isProfilEmbedded() {
        if (isProfilEmbed === 1) {
            const profilepict = document.createElement("img");
            profilepict.src = "assets/images/icons/" + chatArr[who][0] + ".jpg";
            profilepict.setAttribute('class', 'chatprofimg');

            parent.appendChild(profilepict);
            isProfilEmbed = 0;
            parent.setAttribute('class', 'chat lalign withprof');
            decideMode()
        }
        else {
            parent.setAttribute('class', 'chat lalign chatonly');
            decideMode()
        }
    }

    function decideMode() {
        if (mode === "normal") {
            span.appendChild(messageText);
            parent.appendChild(span);
        }
        else if (mode === "sticker") { // is sticker
            const sticker = document.createElement("img");
            sticker.src = "assets/images/stickers/" + message + ".webp"
            sticker.setAttribute('class', 'sticker');
            parent.appendChild(sticker);
        }
        else if (mode === "url") { // is url
            const anchor = document.createElement("a");
            const anchorUrl = document.createTextNode(message)
            anchor.href = message;
            anchor.appendChild(anchorUrl);
            span.appendChild(anchor);
            parent.appendChild(span);
        }
    }
    chatArea.appendChild(parent);
}

function listAllChat() {
    let len = names.length - 1;
    for (a = 0; a <= len; a++) {
        summonChat(names[a], a)
    }
}

function summonChat(name, numOnNames) {

    var lastChat;
    var chatLen = chatArr[numOnNames].length - 1

    if (chatLen === 1) {
        lastChat = "Sticker";
        createList(lastChat)
    }
    else {
        lastChat = chatArr[numOnNames][chatLen][1];
        createList(lastChat)
    }
    function createList(lastChat) {
        console.log(name + " " + chatLen + " " + lastChat)

        // Create parent
        const lists = document.createElement("div");
        lists.setAttribute('class', 'profile chats');
        lists.setAttribute('onclick', 'showChat(' + numOnNames + ')')

        // Create PP
        const chatpp = document.createElement("img");
        chatpp.src = "assets/images/icons/" + name + ".jpg";
        chatpp.setAttribute('alt', name + '-photo');

        // Create chat preview
        const chatPreviewParent = document.createElement("div");
        chatPreviewParent.setAttribute('class', 'chat-preview');

        const username = document.createElement("span");
        username.setAttribute('class', 'profile-text');

        const usernameText = document.createTextNode(name);
        username.appendChild(usernameText);

        const chatPreview = document.createElement("span");
        chatPreview.setAttribute('class', 'preview-text');

        const chatPreviewText = document.createTextNode(name);
        chatPreview.appendChild(chatPreviewText);

        const timeStamp = document.createElement("span");
        timeStamp.setAttribute('class', 'timestamp');
        const timeText = document.createTextNode("12.45");
        timeStamp.appendChild(timeText);

        // Append everything
        chatPreviewParent.appendChild(username);
        chatPreviewParent.appendChild(chatPreview);

        lists.appendChild(chatpp);
        lists.appendChild(chatPreviewParent);
        lists.appendChild(timeStamp);

        // Append to list
        document.getElementById("list").appendChild(lists);
    }
}


listAllChat();