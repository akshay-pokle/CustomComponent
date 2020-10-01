import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  NumericInput,
  TextInput,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon_a from 'react-native-vector-icons/dist/Ionicons';


class InputComponent extends Component {
const styles = StyleSheet.create({
  input: { 
    borderBottomColor: '#000000', 
    borderBottomWidth: 1, 
    fontSize: 18 
  },

  informationCard: {
    padding: 10,
    fontSize: 14,

  },
  yearPannel: {
    flex: 1,
    width: '100%',
    height: 25,
    marginTop: 20,
    flexDirection: 'row',
    fontSize: 15,
  },
  header: {
    height: 50,
    width: '100%'
  }

});

render() {
    return (
      <View>
        <View style={styles.informationCard}>
          <View>
            <Text style={{ fontSize: 18 }}>{this.props.amountTitle}</Text>
            <TextInput style={styles.input}
              keyboardType='number-pad' onChangeText={(val) => this.props.handleAmount(val)}
              value={String(this.props.monthlyAmount)}
            />
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18 }}>Yearly Interest Rate %</Text>
			
            <TextInput style={styles.input}
			  keyboardType='number-pad' onChangeText={(val) => this.props.handleRate(val)}
              value={String(this.props.interestRate)} />
          </View>
		  
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18 }} >Tenure: {this.state.slideVal} Years</Text>
          </View>

          <View style={styles.yearPannel}>
            
			<Text style={{ fontSize: 18 }} >1</Text>
            
					<Slider style={{ width: '90%', }}
              value={this.state.slideVal}
              minimumValue={1}
              maximumValue={60}
              step={1}
              onValueChange={val => {
                this.setState({ slideVal: val })
              }}

              onSlidingComplete={val => {
					this.setState({ slideVal: val })
					this.props.handleYears(val)
              }}
				/>
				<Text style={{ fontSize: 18 }} >60</Text>

          </View>
          <View style={{ margin: 50 }}>
            <Button
              title='Calculate'
              loading={this.state.load}
              onPress={() => this.props.calculate(true)}
            />
          </View>

        </View>
      </View>
    )
  }
}

state = {
    slideVal: this.props.years,
    load: false,
  }

  loading = async () => {
    this.setState({ load: true });
  }
export default InputComponent;