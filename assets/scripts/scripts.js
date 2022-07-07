var isProfilEmbed = 1;

var contacts = [
    {
        name: "Justin"
    },
    {
        name: "Kakak"
    },
    {
        name: "Mama"
    },
    {
        name: "Echo"
    },
    {
        name: "Lala"
    }
]

var messageJustin = [
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
        by: 1,
        type: 'txt',
        value: 'Gk jadi'
    },
    {
        by: 0,
        type: 'sticker',
        value: '4'
    }];

var messageKakak = [
    {
        by: 0,
        type: 'txt',
        value: 'Test',
    },
    {
        by: 1,
        type: 'txt',
        value: 'masuk'
    },
    {
        by: 0,
        type: 'txt',
        value: 'Oke',
    },
    {
        by: 0,
        type: 'sticker',
        value: '3'
    }
]

var messageMama = [
    {
        by: 0,
        type: 'txt',
        value: 'Maaa'
    },
    {
        by: 1,
        type: 'txt',
        value: 'Apa ndy?'
    },
    {
        by: 0,
        type: 'txt',
        value: 'Air e mati'
    },
    {
        by: 0,
        type: 'txt',
        value: 'Ada bocor di Ranugrati'
    },
    {
        by: 1,
        type: 'txt',
        value: 'Minta o orang depan, mereka pake sumur bor'
    }
]

var messageEcho = [
    {
        by: 0,
        type: 'sticker',
        value: '1'
    },
    {
        by: 0,
        type: 'url',
        value: 'https://www.w3schools.com/jsref/met_node_appendchild.asp'
    },
    {
        by: 0,
        type: 'txt',
        value: 'test123'
    }
]

var messageLala = [
    {
        by: 1,
        type: 'txt',
        value: 'Weh'
    },
    {
        by: 1,
        type: 'txt',
        value: 'Sibuk a?'
    },
    {
        by: 0,
        type: 'txt',
        value: 'Hooh'
    }
]



function showChat(name) {
    const chatArea = document.getElementById("chat");
    chatArea.innerHTML = '';
    var isProfilEmbed = 1;
    document.getElementById("chatterid").innerHTML = name;
    eval("message" + name + ".map(({value, type, by})=>printChat(by,type,value,name));")

}

function printChat(who, mode, message, name) {
    const chatArea = document.getElementById("chat");
    const parent = document.createElement("div");

    const span = document.createElement("span")

    const messageText = document.createTextNode(message);

    if (who === 0) {
        parent.setAttribute('class', 'chat ralign')
        span.setAttribute('class', 'bg-dark you')
        isProfilEmbed = 1;
        decideMode()
    }
    else {
        span.setAttribute('class', 'bg-light they');
        isProfilEmbedded()
    }

    function isProfilEmbedded() {
        if (isProfilEmbed === 1) {
            const profilepict = document.createElement("img");
            profilepict.src = "assets/images/icons/" + name + ".jpg";
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
        if (mode === 'txt') {
            span.appendChild(messageText);
            parent.appendChild(span);
        }
        else if (mode === 'sticker') { // is sticker
            const sticker = document.createElement("img");
            sticker.src = "assets/images/stickers/" + message + ".webp"
            sticker.setAttribute('class', 'sticker');
            parent.appendChild(sticker);
        }
        else if (mode === 'url') { // is url
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
    contacts.map(({ name }) => summonChat(name));
}

function summonChat(name) {
    eval("var lastChatN = message" + name + ".length - 1")
    eval("message" + name + ".map(({value, type, by},i)=> if(i === lastChatN){};")

    function createList(lastChat) {
        console.log(name + " " + chatLen + " " + lastChat)

        // Create parent
        const lists = document.createElement("div");
        lists.setAttribute('class', 'profile chats');
        lists.setAttribute('onclick', 'showChat("' + name + '")')

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