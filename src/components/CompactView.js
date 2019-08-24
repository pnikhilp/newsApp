import React, {Component} from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';

export default class CompactView extends Component {
  keyExtractor = item => item._id;
  renderItem = ({item}) => {
    return (
      <View style={styles.compactView}>
        <Image source={{uri: item.imageUrl}} style={styles.imageStyle} />
        <View style={styles.headLineView}>
          <Text style={styles.headLine} numberOfLines={2}>
            {item.headline}
          </Text>
        </View>
      </View>
    );
  };
  render() {
    const {allNews} = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={allNews}
          renderItem={this.renderItem}
          contentContainerStyle={styles.flatList}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 5,
  },
  flatList: {
    paddingBottom: 20,
  },
  imageStyle: {
    height: 60,
    width: 60,
  },
  compactView: {
    flexDirection: 'row',
    marginBottom: 15,
    height: 80,
  },
  headLineView: {
    marginLeft: 10,
    flex: 1,
  },
  headLine: {
    fontSize: 13,
    color: '#000',
    fontWeight: '600',
  },
});
