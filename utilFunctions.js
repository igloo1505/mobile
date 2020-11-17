import React, {useLayoutEffect} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';






    export const UsageWithIcons = ({ navigation }) => navigation.setOptions({
                // in your app, extract the arrow function into a separate component
                // to avoid creating a new one every time
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                    <Item title="search" iconName="ios-search" onPress={() => alert('search')} />
                    <ReusableItem onPress={() => alert('Edit')} />
                    <OverflowMenu
                    style={{ marginHorizontal: 10 }}
                    OverflowIcon={<Ionicons name="ios-more" size={23} color="blue" />}
                    >
                    <HiddenItem title="hidden1" onPress={() => alert('hidden1')} />
                    <ReusableHiddenItem onPress={() => alert('hidden2')} />
                    </OverflowMenu>
                    </HeaderButtons>
                    ),
                })
                

