export const dataSepatu = [
    {
        id: '1mnsdlfknapfk',
        name: 'sepatu 1',
        image: 'https://firebasestorage.googleapis.com/v0/b/app-store-572fa.appspot.com/o/spt1.jpeg?alt=media&token=660b3edd-482e-4584-bfad-aec86c9dc0a2'
    },
    {
        id: '2jpouajenwqr',
        name: 'sepatu 2',
        image: 'https://firebasestorage.googleapis.com/v0/b/app-store-572fa.appspot.com/o/spt2.jpeg?alt=media&token=c1342f17-7241-4bc8-967f-aa80b8cec458'
    },
    {
        id: '3ijeiowne',
        name: 'sepatu 3',
        image: 'https://firebasestorage.googleapis.com/v0/b/app-store-572fa.appspot.com/o/spt3.jpeg?alt=media&token=b508ba94-20ff-472e-94e5-b1d24c596198'
    },
    {
        id: '4najen;wrer',
        name: 'sepatu 4',
        image: 'https://firebasestorage.googleapis.com/v0/b/app-store-572fa.appspot.com/o/spt4.jpeg?alt=media&token=0c9aca77-0a6a-4b6f-aeab-85e10b05e338'
    },
    {
        id: '5lksnva[mdef',
        name: 'sepatu 5',
        image: 'https://firebasestorage.googleapis.com/v0/b/app-store-572fa.appspot.com/o/pt5.jpeg?alt=media&token=36bfc1df-7256-4ce7-8e82-4c87d79132d4'
    },
    {
        id: '6ewk mfovim03',
        name: 'sepatu 6',
        image: 'https://firebasestorage.googleapis.com/v0/b/app-store-572fa.appspot.com/o/spt6.jpeg?alt=media&token=5886e591-5ca2-4d75-920d-8a9c6ed49f71'
    },
    {
        id: '7kvmsapdkvm3   ',
        name: 'sepatu 7',
        image: 'https://firebasestorage.googleapis.com/v0/b/app-store-572fa.appspot.com/o/spt7.jpeg?alt=media&token=02b21065-51ad-4c0e-a983-9ba4281b8343'
    },
]
const dataBanner = [
    {
        id: '1',
        eventName: 'End Year Disc',
        discount: 20,
        image: 'https://firebasestorage.googleapis.com/v0/b/app-store-572fa.appspot.com/o/pt5.jpeg?alt=media&token=36bfc1df-7256-4ce7-8e82-4c87d79132d4'
    },
    {
        id: '2',
        eventName: 'End Year Disc',
        discount: 25,
        image: 'https://firebasestorage.googleapis.com/v0/b/app-store-572fa.appspot.com/o/spt6.jpeg?alt=media&token=5886e591-5ca2-4d75-920d-8a9c6ed49f71'
    },
    {
        id: '3',
        eventName: 'End Year Disc',
        discount: 40,
        image: 'https://firebasestorage.googleapis.com/v0/b/app-store-572fa.appspot.com/o/spt7.jpeg?alt=media&token=02b21065-51ad-4c0e-a983-9ba4281b8343'
    },
]
export const initialState = {
    sepatu: dataSepatu,
    activeBanner: 3,
    banner: dataBanner,
    isMenuActive: false,
    totalCartItem: 0,
    cart: [],
    activeBanner: 0,
}