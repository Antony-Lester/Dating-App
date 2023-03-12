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
    image: string,
    imageUrl: string,
    imageBlurHash: string,
    name: string,
    status: string,
    timeline: Array<TimeLineInterface>,
}
export interface MessagesInterface {
    connections: Array<MessageInterface>, 
    new: Array<MessageInterface>,
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
    image: '?????',
    imageUrl: 'http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg',
    imageBlurHash: 'eCF6B#-:0JIncr?@s;nmIoWUIko1%NocRk.8xbIUaxR*^+s;RiWAWS',
    name: 'fanny',
    status: 'kiss',
    timeline: timeLineExample
}
export let message2: MessageInterface = {
    image: '?????',
    imageUrl: 'https://thumbs.dreamstime.com/b/camel-6645000.jpg',
    imageBlurHash: 'LlMF%n00%#MwS|WAWEN{R*bbWBbH',
    name: 'anne',
    status: 'marry',
    timeline: timeLineExample
}
export let message3: MessageInterface = {
    image: '?????',
    imageUrl: 'https://media.istockphoto.com/id/497537400/photo/rhinoceros-on-white-background.jpg?s=612x612&w=0&k=20&c=QQ8kHjUIcGmvkFo4hoFcYw2hc2hB5g9fvt0Myu6PvpU=',
    imageBlurHash: 'LlMF%n00%#MwS|WAWEN{R*bbWBbH',
    name: 'gertrude',
    status: 'kiss',
    timeline: timeLineExample
}
export let message4: MessageInterface = {
    image: '?????',
    imageUrl: 'https://images.pexels.com/photos/133394/pexels-photo-133394.jpeg?cs=srgb&dl=pexels-anthony-%29-133394.jpg&fm=jpg',
    imageBlurHash: 'LlMF%n00%#MwS|WAWEN{R*bbWBbH',
    name: 'betty',
    status: 'marry',
    timeline: []
}
const candidate1: CandidatesInterface = {
    uid: '10',
    name: 'apple',
    image: '?????',
    imageURI: 'https://usapple.org/wp-content/uploads/2019/10/apple-pink-lady.png',
    imageBlurHash: 'eEO,o?}@3rVa3CQ6bE#BjIr=4RIpNfKM#+S*RQw|b]kR3VS2+bso+c',
    bio: `Amateur Lego builder. Terrible cook. Aspiring snowboarder.
    Family orientated. Red Sox fan. Dog owner.
    Surfer. Book lover. Craft beer enthusiast.
    Great cook. Filmgoer. Runner.`
}
const candidate2: CandidatesInterface = {
    uid: '20',
    name: 'pear',
    image: '?????',
    imageURI: 'https://freshpointlocal.co.uk/wp-content/uploads/2018/08/PackhamPear.jpg',
    imageBlurHash: 'e;Q,X7WA?KogWA%OoMNFayWAn:f8fyj?WCawayWUaxs=ogj[axfRaf',
    bio: `I am a triathlete. I once won a regional hot dog eating competition. Christy Teigh used my banana bread recipe on her secret food blog.
    I am a professional swimmer. I asked Conan O’Brien out to prom. I don’t have a tv.
    I have been arrested in Amsterdam. I played guitar on stage with Foo Fighters. I woke up in a stranger’s house after a big night out.`
}
const candidate3: CandidatesInterface = {
    uid: '30',
    name: 'grape',
    image: '?????',
    imageURI: 'https://www.collinsdictionary.com/images/full/grape_229112122.jpg',
    imageBlurHash: 'eqOM:8R6_NxutR.7t7V]ogRj?wS0MyoMM{M{WBWBV[oyxut8RiWBt7',
    bio: `I’ve always known the secret to happiness is gratitude. I’m still surprised and humbled by how much I have in my life to be grateful for!
    I’ve always known I wanted to be a dad. I’m still surprised by how incredible being a father is and how much I love my son.
    I’ve always known I was going to be a writer. I’m still surprised to see my words in print.`
}
const candidate4: CandidatesInterface = {
    uid: '40',
    name: 'bandana',
    image: '?????',
    imageURI: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/800px-Banana-Single.jpg',
    imageBlurHash: 'egS$DRtTbcoJp0yZo$RNkCadbdVro~kEaJZ|jYWYV?o#pKkXaJofWA',
    bio: `I’d gather up all the supplies I can carry, visit the marina, steal a luxury yacht, and spend the next six months living out at sea. Then when things have died down I would return to shore and help rebuild civilization.
    Head to my nearest Costco or Walmart and barricade myself inside. Either would have all the supplies I need to survive for months
    Take car. Go to Mum’s. Kill Phil. Grab Liz, go to the Winchester, have a nice cold pint, and wait for all of this to blow over.`
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
    bio: `I love cheese, especially airedale stilton. Pecorino monterey jack say cheese melted cheese doucette hallowmas swiss cottage cheese. Brie cheese and biscuits cheesy feet melted cheese cheese strings boccherini croquet monsieur goat. Lancashire when the cheese comes out everybody's happy say cheese.`
}
export let messagesEmpty: MessagesInterface = { 
    connections: [], 
    new: [],
    messages: []
}
export let messages: MessagesInterface = { 
    connections: [message1], 
    new: [message4],
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