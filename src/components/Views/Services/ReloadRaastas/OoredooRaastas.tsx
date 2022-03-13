import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import GradientButton from '../../../common/GradientButton';
import {Checkbox, DataTable, IconButton} from 'react-native-paper';
import TitleHorizonDivider from '../../../common/TitleHorizonDivider';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLocationArrow, faTrash} from '@fortawesome/free-solid-svg-icons';

const OoredooRaastas = () => {
  const [mobileNumber, onChangeMobileNumber] = useState<any>(null);
  const [amount, onChangeAmount] = useState<any>(null);
  const [saveName, onChangeSaveName] = useState<any>(null);
  const [checked, setChecked] = useState(false);

  return (
    <ScrollView style={styles.column}>
      <Text style={styles.firstSentence}>
        Enter the Ooredoo number and amount to send raastas.
      </Text>
      <GradientButton text={'Pick Contact'} onPress={() => {}} />
      <Text style={styles.inputText}>Mobile Number</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeMobileNumber}
          value={mobileNumber}
          placeholder="Mobile Number"
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.inputText}>Amount</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeAmount}
          value={amount}
          placeholder="Amount"
          keyboardType="numeric"
        />
      </View>
      {checked === true ? (
        <>
          <Text style={styles.inputText}>Name to save</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeSaveName}
              value={saveName}
              placeholder="Name to save"
            />
          </View>
        </>
      ) : null}

      <TouchableNativeFeedback
        onPress={() => {
          setChecked(!checked);
        }}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color={'#25BFA3'}
          />
          <Text style={styles.label}>Keep info saved</Text>
        </View>
      </TouchableNativeFeedback>
      <GradientButton text={'Send Reload'} onPress={() => {}} />
      <TitleHorizonDivider name={'Saved Numbers'} />
      <DataTable style={{paddingBottom: 40, paddingHorizontal: 20}}>
        <DataTable.Header>
          <DataTable.Title>
            <Text style={styles.dataTableHeader}>#</Text>
          </DataTable.Title>
          <DataTable.Title style={{flex: 2}}>
            <Text style={styles.dataTableHeader}>Details</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={styles.dataTableHeader}>Delete</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={styles.dataTableHeader}>Show</Text>
          </DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>1</DataTable.Cell>
          <DataTable.Cell style={{flex: 2}}>
            <View>
              <Text style={styles.dataTableCell}>777777</Text>
              <Text style={styles.dataTableCell}>Test name</Text>
            </View>
          </DataTable.Cell>
          <DataTable.Cell>
            <View style={styles.iconButton}>
              <IconButton
                icon={() => (
                  <FontAwesomeIcon icon={faTrash} size={22} color={'#25BFA3'} />
                )}
                size={22}
                onPress={() => {}}
              />
            </View>
          </DataTable.Cell>
          <DataTable.Cell>
            <View style={styles.iconButton}>
              <IconButton
                icon={() => (
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    size={22}
                    color={'#25BFA3'}
                  />
                )}
                size={22}
                onPress={() => {}}
              />
            </View>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>2</DataTable.Cell>
          <DataTable.Cell style={{flex: 2}}>
            <View>
              <Text style={styles.dataTableCell}>777777</Text>
              <Text style={styles.dataTableCell}>Test name</Text>
            </View>
          </DataTable.Cell>
          <DataTable.Cell>
            <View style={styles.iconButton}>
              <IconButton
                icon={() => (
                  <FontAwesomeIcon icon={faTrash} size={22} color={'#25BFA3'} />
                )}
                size={22}
                onPress={() => {}}
              />
            </View>
          </DataTable.Cell>
          <DataTable.Cell>
            <View style={styles.iconButton}>
              <IconButton
                icon={() => (
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    size={22}
                    color={'#25BFA3'}
                  />
                )}
                size={22}
                onPress={() => {}}
              />
            </View>
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </ScrollView>
  );
};

export default OoredooRaastas;

const styles = EStyleSheet.create({
  column: {
    flex: 1,
    backgroundColor: 'white',
  },
  firstSentence: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  inputText: {
    fontWeight: '600',
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 20,
  },
  inputWrapper: {
    paddingHorizontal: 20,
    paddingTop: 6,
    paddingBottom: 10,
  },
  input: {
    height: 46,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 150,
    marginHorizontal: 20,
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataTableHeader: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  dataTableCell: {
    color: 'black',
  },
});
