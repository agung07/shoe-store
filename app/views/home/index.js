import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';
import { initialState } from './constants';
import Carousel from 'react-native-snap-carousel';
import Hamburger from 'react-native-animated-hamburger';

export class Home extends Component {
    static navigationOptions = {
      tabBarVisible: false
    };
    _carousel;
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    toggleMenu = () => this.setState({ isMenuActive: !this.state.isMenuActive })

    addToCart = (item) => {
        const selectedItem = this.state.cart.find((it) => it.id === item.id);
        let newCart = this.state.cart;
        if(selectedItem) {
            newCart = newCart.map((it) => ({
                ...it,
                totalItem: it.id === selectedItem.id ? it.totalItem + 1 : it.totalItem,
            }))
        } else {
            newCart.push({...item, totalItem: 1})
        }
        console.log("newCart: ", newCart)
        this.setState({ totalCartItem: this.state.totalCartItem + 1, cart: newCart}, () => {
            ToastAndroid.show(`added ${item.name}`, 
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            1000);
        })
    }

    renderBanner = ({item}) => {
        return(
            <View style={homeStyles.bannerCard}>
                <Image resizeMode="cover" style={homeStyles.bannerImg} source={{ uri: item.image }} />
                <View style={homeStyles.bannerInfoWrapper}>
                    <Text style={homeStyles.bannerInfoText}>{item.eventName + ' ' + item.discount + '%'}</Text>
                </View>
            </View>
        )
    }

    renderShoesCard = ({item}) => {
        return(
            <View style={homeStyles.shoeCard}>
                <Image style={homeStyles.SheoImage} source={{ uri: item.image}} />
                <View style={homeStyles.buttonAdd} >
                    <TouchableOpacity onPress={() => this.addToCart(item)} style={homeStyles.addWrapper}>
                        <Text style={homeStyles.addText}>+</Text>
                    </TouchableOpacity>
                    <Text style={homeStyles.sheaName}>{item.name}</Text>
                </View>
            </View>
        )
    }

    renderPagination = () => {
        const { activeBanner, banner } = this.state;
        return (
            <View style={homeStyles.paginWrapper}>
            {banner.map((item, index) => (
                    <TouchableOpacity
                        style={index === activeBanner ? homeStyles.dotActive : homeStyles.dotInActive}
                        key={index}
                        onPress={() => this._carousel._snapToItem(this._carousel._getPositionIndex(index))}
                    />
            ))}
            </View>
        )
    }
    
    render() {
        const SheoCard = this.renderShoesCard;
        const { banner } = this.state;
        return (
            <View style={homeStyles.container}>
                <View style={homeStyles.backgroundRadius} />
                <View style={homeStyles.top}>
                    <Hamburger 
                        type="cross" 
                        active={this.state.isMenuActive} 
                        onPress={this.toggleMenu}
                        underlayColor="transparent"
                    />
                    <View  style={[homeStyles.cartWrapper]}>
                        <Image style={homeStyles.cartIcn} source={require('../../assets/icons/icn-cart.png')} />
                        {this.state.totalCartItem > 0 &&
                            <View style={homeStyles.notifWrapper}>
                                <Text style={homeStyles.notifText}>{this.state.totalCartItem}</Text>
                            </View>
                        }
                    </View>
                </View>
                <View style={homeStyles.ph}>
                    <Text style={homeStyles.title}>Nike App Store</Text>
                </View>
                <View style={homeStyles.bannerWrapper}>
                    <Carousel
                        layout={'default'}  
                        ref={(c) => { this._carousel = c; }}
                        data={banner}
                        renderItem={this.renderBanner}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={Dimensions.get('window').width}
                        activeSlideAlignment={'center'}
                        onSnapToItem={(index) => this.setState({ activeBanner: index }) }
                        loop
                        firstItem={0}
                    />  
                </View>
                {this.renderPagination()}
                <View>
                    <ScrollView
                        style={homeStyles.shoesWrapper}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {this.state.sepatu.map((it, i) => <SheoCard item={it} key={i} />)}
                    </ScrollView>
                </View>
            </View>
        )
    } 
}

const homeStyles = StyleSheet.create({
    backgroundRadius: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#f2f2f2',
        position: 'absolute',
        borderTopRightRadius: Dimensions.get('window').width * 0.8,
        zIndex: 0
    },
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#fff',
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Dimensions.get('window').height * 0.08,
        paddingHorizontal: 10,
    },
    ph:{
        paddingHorizontal: 15,
    },
    title: {
       fontSize: 20,
       fontWeight: 'bold' ,
       paddingBottom: 10,
    },
    bannerWrapper: {
        width: Dimensions.get('window').width,
        height: 200,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    bannerCard: {
        height: 170,
        width: Dimensions.get('window').width * 0.8,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginLeft: Dimensions.get('window').width * 0.12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    bannerInfoWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: Dimensions.get('window').width * 0.75,
    },
    bannerInfoText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    bannerImg: {
        height: 120,
        width: Dimensions.get('window').width * 0.75,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    shoeCard: {
        height: 180,
        width: Dimensions.get('window').width * 0.37,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },  
    shoesWrapper: {
        marginTop: 50,
        paddingVertical: 10,
        height: 200
    },
    SheoImage: {
        height: 140,
        width: Dimensions.get('window').width * 0.37,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    buttonAdd: {
        backgroundColor: '#84878c',
        height: 40,
        width: Dimensions.get('window').width * 0.37,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    addWrapper: {
        height: 25,
        width: 25,
        borderRadius: 5,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: 'center'
    },
    addText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: -3
    },
    sheaName: {
        fontSize: 15,
        color: '#fff',
        marginLeft: 10,
        marginTop: -5
    },
    notifWrapper: {
        height: 20,
        width:20,
        borderRadius: 20,
        backgroundColor: 'rgba(240, 27, 12, 0.6)',
        position: 'absolute',
        top: 3,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notifText: {
        color: '#fff',
    },
    cartWrapper: {
        height: '100%',
        justifyContent: 'center'
    },
    cartIcn: {
        marginRight: 10,
        color: '#fff',
        fontWeight: 'bold',
    },
    dotActive: {
        width: 12,
        height: 12,
        borderRadius: 12,
        marginHorizontal: 8,
        backgroundColor: '#000',

    },
    dotInActive: {
        width: 12,
        height: 12,
        borderRadius: 12,
        marginHorizontal: 8,
        borderColor: '#000',
        backgroundColor: '#fff',
        borderWidth: 2,
    },
    paginWrapper: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default Home;