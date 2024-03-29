import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';


const Post = () => {

    const postInfo = [
        {
            postTitle: 'nhat_tuan',
            postPersonImage: require('../../storage/images/image8.jpg'),
            postImage: require('../../storage/images/image9.jpg'),
            likes: 765,
            isLiked: false
        },
        {
            postTitle: 'user 3',
            postPersonImage: require('../../storage/images/image2.jpg'),
            postImage: require('../../storage/images/image2.jpg'),
            likes: 765,
            isLiked: false
        },{
            postTitle: 'user 4',
            postPersonImage: require('../../storage/images/image3.jpg'),
            postImage: require('../../storage/images/image3.jpg'),
            likes: 765,
            isLiked: false
        },{
            postTitle: 'user 5',
            postPersonImage: require('../../storage/images/image4.jpg'),
            postImage: require('../../storage/images/image5.jpg'),
            likes: 765,
            isLiked: false
        },
    ]

    return (
        <View>
            {
                postInfo.map((data, index) => {
                    const [like, setLike] = useState(data.isLiked)
                    return (
                        <View key={index} style={{
                            paddingBottom: 10,
                            borderBottomColor: 'gray',
                            borderBottomWidth: 0.1
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: 15,
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={data.postPersonImage} style={{ width: 40, height: 40, borderRadius: 100 }} />
                                    <View style={{ paddingLeft: 5 }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                                            {data.postTitle}
                                        </Text>
                                    </View>
                                </View>
                                <Feather name='more-vertical' style={{ fontSize: 20, }} />
                            </View>
                            <View style={{ position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={data.postImage} style={{ width: '100%', height: 400 }} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12, paddingVertical: 15 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => setLike(!like)}>
                                        <AntDesign name={like ? "heart" : "hearto"} style={{ paddingRight: 10, fontSize: 20, color: like ? 'red' : 'black', }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Ionic name="chatbubble-outline"
                                            style={{ fontSize: 20, paddingRight: 10 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Feather name="navigation"
                                            style={{ fontSize: 20 }} />
                                    </TouchableOpacity>
                                </View>
                                <Feather name="bookmark" style={{fontSize:20,}}/>
                            </View>
                            <View>
                                <Text style={{fontWeight: '700', fontSize: 14, paddingVertical: 2}}>
                                    Liked by {like ? "you and" : ''} {' '}
                                    {like ? data.likes + 1 : data.likes} others
                                </Text>
                                <Text style={{opacity: 0.4, paddingVertical: 2}}>
                                    View all comments
                                </Text>
                                <View>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Image source={data.postPersonImage} style={{width: 25, height: 25, borderRadius: 100, backgroundColor: 'orange', marginRight: 10}}/>
                                        <TextInput placeholder='Add a comment' style={{opacity: 0.5}}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    );
                })
            }
        </View>
    )
}

export default Post