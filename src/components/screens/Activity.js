import React, { Component, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FriendsProfileData } from '../screenComponents/Database';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Activity = () => {
    return (
      <View style={{width: '100%', height: '100%', backgroundColor: '#fff',}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', borderBottomWidth: 0.5, borderBottomColor: '#DEDEDE', padding: 10}}> Activity Screen </Text>
        <ScrollView style={{margin: '10',}} showsVerticalScrollIndicator = {false}>
          <Text style={{fontWeight: 'bold', fontSize: 18, paddingVertical: 10}}>This Week</Text>
          <View style={{flexDirection: 'row', paddingVertical: 10}}>
            {FriendsProfileData.slice(0,3).map((data, index) =>
              {
                return(
                  <TouchableOpacity key={index}>
                    <Text>{data.name}, </Text>
                  </TouchableOpacity>
                );
              })}
              <Text> Started following you</Text>
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 18, paddingVertical: 10}}>Earlier</Text>
          {
            FriendsProfileData.slice(3,9).map((data,index) =>
            {
              const [follow, setFollow] = useState(data.follow)
              return(
                <View key={index} style={{width: '100%'}}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems:'center',paddingVertical: 20, width: '100%'}}>
                    <TouchableOpacity style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', maxWidth: '64%'}}>
                      <Image source={data.profileImage} style={{width: 45, height: 45, borderRadius: 100, marginRight: 10}}/>
                      <Text style={{fontSize: 15}}>
                        <Text style={{fontWeight: 'bold'}}>
                          {data.name}
                        </Text>
                        , who you might know ,is on instagram
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setFollow(!follow)} style={{width: follow ? 75 : 70}}>
                      <View style={{width: '100%', height: 30, borderRadius: 5, backgroundColor: follow ? null : '#3493D9', borderWidth: follow ? 1 : 0, borderColor: follow ? '#DEDEDE' : null ,justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: follow ? 'black' : '#fff' }}>{follow ? 'Following' : 'Follow'}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            })
          }
          <Text style={{fontWeight: 'bold', fontSize: 18, paddingVertical: 10}}>Suggestion for you</Text>
            {
              FriendsProfileData.slice(4,10).map((data, index) =>
              {
                const [follow, setFollow] = useState(data.follow)
                const [close, setClose] = useState(false)
                return(
                  <View key={index}>
                    {close ? null : 
                    (
                      <View style={{ paddingVertical: 10, flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                        <View>
                          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', maxWidth: '64%'}}>
                            <Image source={data.profileImage} style={{width: 45, height: 45, borderRadius: 100, marginRight: 10}}/>
                            <View style={{width: '100%'}}>
                              <Text style={{fontSize: 14, fontWeight: 'bold'}}>{data.name}</Text>
                              <Text style={{fontSize: 12, opacity: 0.5}}>{data.accountName}</Text>
                              <Text style={{fontSize: 12, opacity: 0.5}}>Suggested for you</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <TouchableOpacity onPress={() => setFollow(!follow)} style={{width: follow ? 75 : 70}}>
                            <View style={{width: '100%', height: 30, borderRadius: 5, backgroundColor: follow ? null : '#3493D9', borderWidth: follow ? 1 : 0, borderColor: follow ? '#DEDEDE' : null ,justifyContent: 'center', alignItems: 'center' }}>
                              <Text style={{ color: follow ? 'black' : '#fff' }}>{follow ? 'Following' : 'Follow'}</Text>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => setClose(true)} style={{paddingHorizontal: 10}}>
                            <AntDesign name="close" style={{fontSize: 14, color: 'black', opacity: 0.8}}/>
                          </TouchableOpacity>
                        </View>
                      </View>
                    )}
                  </View>
                )
              })
            }
        </ScrollView>
      </View>
    );
  }


export default Activity;
