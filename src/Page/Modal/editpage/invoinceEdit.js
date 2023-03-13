import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";
  import { useLocation } from "react-router-dom";
  // Create Document Component
  function BasicDocument() {
    const location = useLocation()
    const datauser = localStorage.getItem("userData")
    const convert = JSON.parse(datauser)
    const data = location.state;
     console.log(convert.id)
    return (
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.body}>
                <Text style={styles.header}>Invoice</Text>
                <View style={{flexDirection:'column',fontSize:14,fontWeight:'bold',justifyContent:'space-around',}}>
                    <Text style={{margin:4,fontWeight:'bold'}}>Company Name: {convert.companyName}</Text>
                    <Text style={{margin:4,fontWeight:'bold'}}>Company phone: {convert.phone}</Text>
                    <Text style={{margin:4,fontWeight:'bold'}}>Company Tin: {convert.companyTin}</Text>
                </View>
                    <View style={{flexDirection:'column',fontSize:14,fontWeight:'bold',justifyContent:'space-around',position:'relative',left:350 }}>
                    <Text style={{margin:4,fontWeight:'bold'}}>CustomerName: {data.customer.name}</Text>
                    <Text style={{margin:4,fontWeight:'bold'}}>CustomerPhone: {data.customer.phone}</Text>
                    <Text style={{margin:4,fontWeight:'bold'}}>CustomerTin: {data.customer.customerTin}</Text>
                </View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    fontSize:12,
                    borderBottom:1,
                    marginTop:40,
                    backgroundColor:'black',
                    color:'white',
                    padding:6
                    }}>
                    <Text>Item name</Text>
                    <Text>Quantity</Text>
                    <Text>Sales price</Text>
                    <Text>Total Amount</Text>
                    <Text>Paid</Text>
                </View>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    fontSize:12,
                    borderBottom:1,
                    backgroundColor:'grey',
                    color:'white',
                    padding:6
                    }}>
                    <Text style={{flexDirection:'column'}}>{data.items.map(item => item.item?.name)}</Text>
                    <Text>{data.items.map(item => item.quantity)}</Text>
                    <Text>{data.items.map(item => item.salesPrice)}</Text>
                    <Text>{data.total}</Text>
                    <Text>Paid</Text>
                </View>

          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default BasicDocument;

  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Oswald'
    },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 40,
    },
    subtitle: {
      fontSize: 18,
      margin: 12,
      fontFamily: 'Oswald'
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: 'justify',
      fontFamily: 'Times-Roman'
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 16,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
      backgroundColor:'black',
      padding:8
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
    viewer:{
        width:400,
        height:500
    }
  });