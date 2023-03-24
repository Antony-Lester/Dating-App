export interface UserInterface {
    uid?: string
    name?: string
    dob?: Date
    location?: string
    email?: string
    number?: number
    category?: string
    imageUrl?: string
    imageBlurHash?: string
    bio?: string
}
export interface TimeLineInterface {
    time: string,
    sender: Boolean,
    message: string,
}
export interface MessageInterface {
    uid: string,
    bio: string,
    imageUrl: string,
    imageBlurHash: string,
    name: string,
    status: string,
    force: boolean,
    timeline: Array<TimeLineInterface>,
}
export interface MessagesInterface {
    newConnections: Array<MessageInterface>, 
    newMessages: Array<MessageInterface>,
    messages: Array<MessageInterface>
}
export interface CandidatesInterface { 
    uid: string
    name: string
    imageUrl: string
    imageBlurHash: string
    bio: string
}

export interface ResultsInterface { 
    kiss: Array<Object>,
    marry: Array<Object>,
    avoid: Array<Object>
}

export interface SwipeInterface {
    candidates: Array<CandidatesInterface>,
    results: ResultsInterface
}

export interface SendMessageInterface { 
    uid: string,
    toUid: string,
    time: string,
    message: string,
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const sendMessage : SendMessageInterface = {
    uid: '69',
    toUid: '79',
    time: "2022-06-16T05:29:27.236Z",
    message: 'New Message Sent'
}










function getRandomDate() {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp);
}

const timeLineExampleSender : Array<TimeLineInterface> = [
    {
        time: "1976-11-25T01:00:15.375Z",
        sender:true,
        message:'5 oldest message',
    },
    {
        time: "1991-06-12T14:40:40.225Z",
        sender:false,
        message:'4 message',
    },
    {
        time: "2014-08-02T00:22:28.004Z",
        sender:true,
        message:'3 message',
    },
    {
        time: "2015-07-29T21:52:39.115Z",
        sender:false,
        message:'2 message',
    },
    {
        time: "2022-06-16T05:29:27.236Z",
        sender:true,
        message:'Hey Sweetie 🙂',
    }
]

const timeLineExampleNotSender : Array<TimeLineInterface> = [
    {
        time: "1976-11-25T01:00:15.375Z",
        sender:false,
        message:'5 oldest message',
    },
    {
        time: "1991-06-12T14:40:40.225Z",
        sender:true,
        message:'4 message',
    },
    {
        time: "2014-08-02T00:22:28.004Z",
        sender:false,
        message:'3 message',
    },
    {
        time: "2015-07-29T21:52:39.115Z",
        sender:true,
        message:'2 message',
    },
    {
        time: "2022-06-16T05:29:27.236Z",
        sender:false,
        message:'Hey Sweetie 🙂',
    }
]
//------------------------------------------------------------------------------
export let message1: MessageInterface = {
    uid: '10',
    name: 'Saddam',
    bio: 'bio dsxfgtszdrtgdrg drgdrgdrgdrgdrgdr gljkl.k',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Saddam_Hussein_in_1998.png',
    imageBlurHash: 'eIE_?bx]0fNx^*}=tRyDNaVs5SRj?GRjNHPCM{rWs.t7R*R*-ps.M{',
    status: 'kiss',
    force: false,
    timeline: timeLineExampleSender
}
export let message2: MessageInterface = {
    uid: '20',
    name: 'andrew',
    bio: 'bio dsxfgtszdrtgdrg drgdrgdrgdrgdrgdr gljkl.k',
    imageUrl: 'https://media.vanityfair.com/photos/624f199078feebfc24e831d9/master/pass/prince-andrew-04-07-2022.jpg',
    imageBlurHash: 'eXGIy6fk5SE1~V-:M{kqWBr=E1RP%2RjS$o}ofoejZWWM{j[j@s:M{',
    status: 'marry',
    force: true,
    timeline: timeLineExampleNotSender
}
export let message3: MessageInterface = {
    uid: '30',
    name: 'adolf',
    bio: 'bio dsxfgtszdrtgdrg drgdrgdrgdrgdrgdr gljkl.k',
    imageUrl: 'https://www.themoviedb.org/t/p/original/n6f81IUSes1a8jTzUIF7rJ5zZnP.jpg',
    imageBlurHash: 'eFB|KZ9F00~qofofayxuofRj00xu-;D%xuD%xuxuM{ayWBWBxuofM{',
    status: 'kiss',
    force: false,
    timeline: timeLineExampleSender
}
export let message4: MessageInterface = {
    uid: '40',
    name: 'Osama',
    bio: 'bio dsxfgtszdrtgdrg drgdrgdrgdrgdrgdr gljkl.k',
    imageUrl: 'https://cdn.britannica.com/93/153593-050-15D2B42F/Osama-bin-Laden.jpg',
    imageBlurHash: 'ePMG*F%M?XM{D%miWr${Iot8%LM}9FWBxu_NWEIWV@j[E1fis;oJRj',
    status: 'marry',
    force: false,
    timeline: []
}
//------------------------------------------------------------------------------
const candidate1: CandidatesInterface = {
    uid: '10',
    name: 'Saddam',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Saddam_Hussein_in_1998.png',
    imageBlurHash: 'eIE_?bx]0fNx^*}=tRyDNaVs5SRj?GRjNHPCM{rWs.t7R*R*-ps.M{',
    bio: `Measured fer yer chains barkadeer Plate Fleet pink holystone lugger take a caulk quarterdeck Sink me fathom. Killick interloper wherry flogging run a rig plunder black spot furl jib nipper. Ballast plunder deadlights overhaul Blimey gunwalls hempen halter carouser gun bucko.`
}
const candidate2: CandidatesInterface = {
    uid: '20',
    name: 'andrew',
    imageUrl: 'https://media.vanityfair.com/photos/624f199078feebfc24e831d9/master/pass/prince-andrew-04-07-2022.jpg',
    imageBlurHash: 'eXGIy6fk5SE1~V-:M{kqWBr=E1RP%2RjS$o}ofoejZWWM{j[j@s:M{',
    bio: `Sheet Sea Legs scuttle Shiver me timbers ballast shrouds Buccaneer starboard execution dock brigantine. Gun wherry scourge of the seven seas topmast hornswaggle gangplank parley ye hail-shot booty. Privateer gabion squiffy Pieces of Eight gibbet dance the hempen jig barque chandler yard scuppers.`
}
const candidate3: CandidatesInterface = {
    uid: '30',
    name: 'adolf',
    imageUrl: 'https://www.themoviedb.org/t/p/original/n6f81IUSes1a8jTzUIF7rJ5zZnP.jpg',
    imageBlurHash: 'eFB|KZ9F00~qofofayxuofRj00xu-;D%xuD%xuxuM{ayWBWBxuofM{',
    bio: `Capstan rutters barque line lugsail swing the lead nipperkin grog blossom scourge of the seven seas Chain Shot. Haul wind plunder long clothes rope's end Corsair fore chandler no prey, no pay draught tackle. Jack Tar belay lugger squiffy booty jib mutiny cackle fruit hardtack loaded to the gunwalls.`
}
const candidate4: CandidatesInterface = {
    uid: '40',
    name: 'Osama',
    imageUrl: 'https://cdn.britannica.com/93/153593-050-15D2B42F/Osama-bin-Laden.jpg',
    imageBlurHash: 'ePMG*F%M?XM{D%miWr${Iot8%LM}9FWBxu_NWEIWV@j[E1fis;oJRj',
    bio: `Fluke hulk Davy Jones' Locker aft quarter grog blossom starboard league wherry shrouds. Topsail Yellow Jack driver crimp wench main sheet fire in the hole fire ship spanker broadside. Nipper gunwalls bilge rat red ensign yawl line prow to go on account tackle hornswaggle.`
}
//==============================================================================
export let userEmpty: UserInterface = {}
export let userUid: UserInterface = {uid: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'}
export let userFull: UserInterface = {
    uid: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
    name: 'john',
    dob: new Date('1987-02-04'),
    location: '822d57fffffffff',
    email: 'me@antonylester.com',
    number: 447735950051,
    category: 'ms',
    imageUrl: 'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg',
    imageBlurHash: 'LEHLh[WB2yk8pyoJadR*.7kCMdn',
    bio: `Booty port Corsair fore Barbary Coast parley matey rigging six pounders Pirate Round. Ho bilge bilged on her anchor transom case shot hempen halter carouser gangplank squiffy Yellow Jack. Jib pirate Nelsons folly schooner skysail Corsair code of conduct list mutiny heave down.`
}
export let messagesEmpty: MessagesInterface = { 
    newConnections: [], 
    newMessages: [],
    messages: []
}
export let messages: MessagesInterface = { 
    newConnections: [message4], 
    newMessages: [message2],
    messages: [message1, message3]
}
export let swipeDone: SwipeInterface = { 
    candidates: [],
    results: {
        kiss: ['1','2', '3'],
        marry: ['4','5','6'],
        avoid: ['7','8','9'],
     },
}
export let swipe: SwipeInterface = { 
    candidates: [candidate1, candidate2, candidate3, candidate4],
    results: {
        kiss: [],
        marry: [],
        avoid: [],
     },
}