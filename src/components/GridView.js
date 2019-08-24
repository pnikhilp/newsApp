import React, {Component} from 'react';
import {View, Image, FlatList, StyleSheet} from 'react-native';

export default class GridView extends Component {
  keyExtractor = item => item._id;
  renderItem = ({item}) => {
    return <Image source={{uri: item.imageUrl}} style={styles.imageStyle} />;
  };
  render() {
    const {allNews} = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={allNews}
          renderItem={this.renderItem}
          numColumns={3}
          columnWrapperStyle={styles.columnWrapperStyle}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
  },
  imageStyle: {
    height: 48,
    width: 48,
    margin: 10,
  },
  columnWrapperStyle: {
    justifyContent: 'space-around',
  },
});
