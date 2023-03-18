export interface UserInterface {
    uid?: string
    name?: string
    dob?: Date
    location?: string
    email?: string
    number?: number
    category?: string
    image?: string
    imageURI?: string
    imageBlurHash?: string
    bio?: string
}
export interface TimeLineInterface {
    time: any,
    sender: Boolean,
    message: string,
}
export interface MessageInterface {
    uid: number,
    image: string,
    imageUrl: string,
    imageBlurHash: string,
    name: string,
    status: string,
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
    image: string
    imageURI: string
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
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function getRandomDate() {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp);
}
const timeLineExample : Array<TimeLineInterface> = [
    {
        time: getRandomDate(),
        sender:true,
        message:'Case arrival greatly desirous. Noise enjoyed cannot could offending if john himself. Afraid improved what minutes get applauded quick settled. Man depending world pretended roof bred relation his extent entire delivered welcome added. Looked direction conduct sportsmen john aware gate course staying produced eyes timed margaret sang moments recommend tolerably. ',
    },
    {
        time: getRandomDate(),
        sender:false,
        message:'Real away proceed. Danger high danger another may real period six waiting provided sight sometimes. Around merits gentleman vanity estate too to instantly regret shy stanwell distance may not lose led elderly. Mistress asked determine time inquiry help betrayed shy drawn uncommonly formed certainty. Strangers indulgence astonished what plate declared money cultivated scale put on resolve improved made distant reasonable objection. ',
    },
    {
        time: getRandomDate(),
        sender:true,
        message:'Made waited pleasant taste. Screened woody marriage. Cease differed blushes were arise towards simple interested shortly. Ourselves tolerably placing gone. Exeter sixteen subject worth party quick just middleton ever advice understood. ',
    },
    {
        time: getRandomDate(),
        sender:false,
        message:'Hard talked shameless visitor thrown. Subject herself breeding engage seeing next. Roused daughter winding. Exposed sake want seven shortly merit right departure. Easy solicitude point. ',
    },
    {
        time: getRandomDate(),
        sender:true,
        message:'Feeling after quitting took come mistress admiration inquiry child law nor oh part parish lasted given little. Defer home length inquietude perpetual necessary plan its effects. Satisfied collecting dare shameless betrayed plate defective case good lasting poor wife she. Equal whose direction hastily will raptures suspicion longer provided valley heard on carriage disposal improve. ',
    }
]
export let message1: MessageInterface = {
    uid: 1,
    image: '?????',
    imageUrl: 'http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg',
    imageBlurHash: 'eCF6B#-:0JIncr?@s;nmIoWUIko1%NocRk.8xbIUaxR*^+s;RiWAWS',
    name: 'fanny',
    status: 'kiss',
    timeline: timeLineExample
}
export let message2: MessageInterface = {
    uid: 2,
    image: '?????',
    imageUrl: 'https://thumbs.dreamstime.com/b/camel-6645000.jpg',
    imageBlurHash: 'LlMF%n00%#MwS|WAWEN{R*bbWBbH',
    name: 'anne',
    status: 'marry',
    timeline: timeLineExample
}
export let message3: MessageInterface = {
    uid: 3,
    image: '?????',
    imageUrl: 'https://media.istockphoto.com/id/497537400/photo/rhinoceros-on-white-background.jpg?s=612x612&w=0&k=20&c=QQ8kHjUIcGmvkFo4hoFcYw2hc2hB5g9fvt0Myu6PvpU=',
    imageBlurHash: 'LlMF%n00%#MwS|WAWEN{R*bbWBbH',
    name: 'gertrude',
    status: 'kiss',
    timeline: timeLineExample
}
export let message4: MessageInterface = {
    uid: 4,
    image: '?????',
    imageUrl: 'https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg?cs=srgb&dl=pexels-anthony-%29-133394.jpg&fm=jpg',
    imageBlurHash: 'LlMF%n00%#MwS|WAWEN{R*bbWBbH',
    name: 'betty',
    status: 'marry',
    timeline: []
}
const candidate1: CandidatesInterface = {
    uid: '10',
    name: 'Saddam',
    image: '?????',
    imageURI: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Saddam_Hussein_in_1998.png',
    imageBlurHash: 'eIE_?bx]0fNx^*}=tRyDNaVs5SRj?GRjNHPCM{rWs.t7R*R*-ps.M{',
    bio: `Measured fer yer chains barkadeer Plate Fleet pink holystone lugger take a caulk quarterdeck Sink me fathom. Killick interloper wherry flogging run a rig plunder black spot furl jib nipper. Ballast plunder deadlights overhaul Blimey gunwalls hempen halter carouser gun bucko.`
}
const candidate2: CandidatesInterface = {
    uid: '20',
    name: 'andrew',
    image: '?????',
    imageURI: 'https://media.vanityfair.com/photos/624f199078feebfc24e831d9/master/pass/prince-andrew-04-07-2022.jpg',
    imageBlurHash: 'eXGIy6fk5SE1~V-:M{kqWBr=E1RP%2RjS$o}ofoejZWWM{j[j@s:M{',
    bio: `Sheet Sea Legs scuttle Shiver me timbers ballast shrouds Buccaneer starboard execution dock brigantine. Gun wherry scourge of the seven seas topmast hornswaggle gangplank parley ye hail-shot booty. Privateer gabion squiffy Pieces of Eight gibbet dance the hempen jig barque chandler yard scuppers.`
}
const candidate3: CandidatesInterface = {
    uid: '30',
    name: 'adolf',
    image: '?????',
    imageURI: 'https://www.themoviedb.org/t/p/original/n6f81IUSes1a8jTzUIF7rJ5zZnP.jpg',
    imageBlurHash: 'eFB|KZ9F00~qofofayxuofRj00xu-;D%xuD%xuxuM{ayWBWBxuofM{',
    bio: `Capstan rutters barque line lugsail swing the lead nipperkin grog blossom scourge of the seven seas Chain Shot. Haul wind plunder long clothes rope's end Corsair fore chandler no prey, no pay draught tackle. Jack Tar belay lugger squiffy booty jib mutiny cackle fruit hardtack loaded to the gunwalls.`
}
const candidate4: CandidatesInterface = {
    uid: '40',
    name: 'Osama',
    image: '?????',
    imageURI: 'https://cdn.britannica.com/93/153593-050-15D2B42F/Osama-bin-Laden.jpg',
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
    image: '?????',
    imageURI: 'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg',
    imageBlurHash: 'LEHLh[WB2yk8pyoJadR*.7kCMdn',
    bio: `Booty port Corsair fore Barbary Coast parley matey rigging six pounders Pirate Round. Ho bilge bilged on her anchor transom case shot hempen halter carouser gangplank squiffy Yellow Jack. Jib pirate Nelsons folly schooner skysail Corsair code of conduct list mutiny heave down.`
}
export let messagesEmpty: MessagesInterface = { 
    newConnections: [], 
    newMessages: [],
    messages: []
}
export let messages: MessagesInterface = { 
    newConnections: [message1], 
    newMessages: [message4],
    messages: [message2, message3]
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