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
import homeStyles from './styles';

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

export default Home;