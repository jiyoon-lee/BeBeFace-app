import React from 'react';
import {Text, View} from 'react-native';
import {useQuery} from 'react-query';
import {getArticles} from '../api/articles';

export default function ArticlesScreen() {
  const {data, isLoading} = useQuery('article', getArticles);

  console.log({data, isLoading});
  return (
    <View>
      <Text>Article</Text>
    </View>
  );
}
