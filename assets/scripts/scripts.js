var isProfilEmbed = 1;
var isMobile = 0;

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
    },
    {
        name: "Stallman"
    },
    {
        name: "Yo"
    }
]

var messageJustin = [
    {
        by: 1,
        type: 'txt',
        value: 'P'
    },
    {
        by: 1,
        type: 'txt',
        value: 'P'
    },
    {
        by: 1,
        type: 'txt',
        value: 'P'
    },
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

var messageStallman = [
    {
        by: 1,
        type: 'txt',
        value: "I'd just like to interject for a moment. What you're referring to as Linux, is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX."
    },
    {
        by: 1,
        type: 'txt',
        value: "Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called \"Linux\", and many of its users are not aware that it is basically the GNU system, developed by the GNU Project."
    },
    {
        by: 1,
        type: 'txt',
        value: "There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called \"Linux\" distributions are really distributions of GNU/Linux."
    },
    {
        by: 0,
        type: 'txt',
        value: "I'd just like to interject for a moment. What you're referring to as Linux, is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX."
    },
    {
        by: 0,
        type: 'txt',
        value: "Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called \"Linux\", and many of its users are not aware that it is basically the GNU system, developed by the GNU Project."
    },
    {
        by: 0,
        type: 'txt',
        value: "There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called \"Linux\" distributions are really distributions of GNU/Linux."
    },
]

var messageYo = [
    {
        by: 1,
        type: 'txt',
        value: "I'd just like to interject for a moment. What you're referring to as Linux, is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX."
    },
    {
        by: 1,
        type: 'txt',
        value: "Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called \"Linux\", and many of its users are not aware that it is basically the GNU system, developed by the GNU Project."
    },
    {
        by: 1,
        type: 'txt',
        value: "There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called \"Linux\" distributions are really distributions of GNU/Linux."
    },
    {
        by: 0,
        type: 'txt',
        value: "I'd just like to interject for a moment. What you're referring to as Linux, is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX."
    },
    {
        by: 0,
        type: 'txt',
        value: "Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called \"Linux\", and many of its users are not aware that it is basically the GNU system, developed by the GNU Project."
    },
    {
        by: 0,
        type: 'txt',
        value: "There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called \"Linux\" distributions are really distributions of GNU/Linux."
    },
]

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */

            var x = window.matchMedia("(max-width: 530px)");
            modifyMobile(x) // Call listener function at run time
            x.addListener(modifyMobile) // Attach listener function on state changes
            listAllChat();

            return;
        }
    }
}


function moBack() {
    if (isMobile === 1) {
        document.getElementById("chat").style.opacity = "0";
        setTimeout(function () {
            document.getElementById("sidepane").style.width = "100%";
            document.getElementById("main-area").style.width = "0%";
        }, 100);
    }
}

function showChat(name) {
    if (isMobile === 1) {
        document.getElementById("sidepane").style.width = "0%";
        document.getElementById("main-area").style.width = "100%";
        setTimeout(function () { document.getElementById("chat").style.opacity = "1"; }, 300);
    }
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
        parent.setAttribute('class', 'chat alignyou')
        span.setAttribute('class', 'bg-dark you')
        if (isProfilEmbed === 0) {
            parent.setAttribute('class', 'chat alignyou chat-switch')
        }
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
            parent.setAttribute('class', 'chat chat-switch');
            decideMode()
        }
        else {
            parent.setAttribute('class', 'chat chatonly');
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
    eval("message" + name + ".map(function({by,type,value},i){ if(i === lastChatN){previewBuilder(by,type,value);}})")
    function previewBuilder(by, type, value) {
        var who = ["You : ", ""]
        if (type === 'sticker') {
            createList(who[by] + "Sticker");
        }
        else {
            createList(who[by] + value);
        }
    }
    function createList(lastChat) {

        // Create parent
        const lists = document.createElement("div");
        lists.setAttribute('class', 'clickable profile chatlists');
        lists.setAttribute('onclick', 'showChat("' + name + '")')

        // Create PP
        const chatpp = document.createElement("img");
        chatpp.src = "assets/images/icons/" + name + ".jpg";
        chatpp.setAttribute('alt', name + '-photo');
        chatpp.setAttribute('onerror', 'this.onerror=null; this.src=\'assets/images/icons/default.png\'')

        // Create chat preview
        const chatPreviewParent = document.createElement("div");
        chatPreviewParent.setAttribute('class', 'chat-preview');

        const username = document.createElement("span");
        username.setAttribute('class', 'profile-text');

        const usernameText = document.createTextNode(name);
        username.appendChild(usernameText);

        const chatPreview = document.createElement("span");
        chatPreview.setAttribute('class', 'preview-text');

        const chatPreviewText = document.createTextNode(lastChat);
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

function modifyMobile(x) {
    if (x.matches) { // If media query matches
        document.getElementById("sidepane").style.width = "100%"
        document.getElementById("main-area").style.width = "0%"
        document.getElementById("chat").style.opacity = "0"
        document.getElementById("moBack").style.width = "1em";
        document.getElementById("moBack").style.display = "inline";
        isMobile = 1;
    } else {
        document.getElementById("sidepane").style.width = "40%"
        document.getElementById("main-area").style.width = "60%"
        document.getElementById("chat").style.opacity = "1"
        document.getElementById("moBack").style.width = "0em";
        setTimeout(function () { document.getElementById("moBack").style.display = "none"; })
        isMobile = 0;
    }
}

includeHTML()

setTimeout(function () {

}, 200)