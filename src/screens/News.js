import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {getAllNews} from '../api';

import GridView from '../components/GridView';
import CompactView from '../components/CompactView';
import LargeView from '../components/LargeView';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingNews: false,
      allNews: [],
      index: 0,
    };
  }
  componentDidMount = () => {
    this.setState({loadingNews: true});
    getAllNews()
      .then(response => {
        this.setState({
          loadingNews: false,
          allNews: response.data.data,
        });
      })
      .catch(error => {
        this.setState({loadingNews: false});
      });
  };
  render() {
    const {loadingNews, allNews, index} = this.state;
    return (
      <View style={styles.container}>
        {loadingNews ? (
          <View style={styles.emptyView}>
            <ActivityIndicator animating={loadingNews} size="large" />
          </View>
        ) : (
          <View style={styles.container}>
            <View style={styles.buttonView}>
              <TouchableOpacity
                onPress={() => this.setState({index: 1})}
                activeOpacity={0.7}
                style={styles.button}>
                <Text style={styles.title}>Grid</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({index: 2})}
                activeOpacity={0.7}
                style={styles.button}>
                <Text style={styles.title}>Compact</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({index: 3})}
                activeOpacity={0.7}
                style={styles.button}>
                <Text style={styles.title}>Large</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.newsDisplay}>
              {index === 1 && <GridView allNews={allNews} />}
              {index === 2 && <CompactView allNews={allNews} />}
              {index === 3 && <LargeView allNews={allNews} />}
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    textAlign: 'center',
    marginTop: 50,
    color: '#000',
  },
  title: {
    fontSize: 13,
    color: '#000',
  },
  buttonView: {
    flex: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  button: {
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 4,
  },
  newsDisplay: {flex: 85, backgroundColor: '#FFF'},
});
