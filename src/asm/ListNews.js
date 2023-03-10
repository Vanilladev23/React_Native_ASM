import React, {useState} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import ItemListNews from './ItemListNews';

const ListNews = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.headerLogo}>
        <Image source={require('./images/Logo.png')} />
        <Image
          styles={styles.imageLogoR}
          source={require('./images/Ring.png')}
        />
      </View>
      <View style={styles.headerLogo}>
        <Text style={styles.textLa}>Lastest</Text>
        <Text style={styles.textSeeAll}>See all</Text>
      </View>
      <View style={styles.textAll}>
        <Pressable>
          <Text style={styles.textNutAll}>All</Text>
        </Pressable>
        <Text>Sports</Text>
        <Text>Politic</Text>
        <Text>Bussiness</Text>
        <Text>Helth</Text>
        <Text>Travel</Text>
      </View>
      <FlatList
        data={dataNe}
        renderItem={({item}) => (
          <ItemListNews dulieu={item} navigation={navigation} />
        )}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ListNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 25,
    marginEnd: 25,
    flexDirection: 'column',
  },
  headerLogo: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageLogoR: {
    justifyContent: 'flex-end',
  },
  textLa: {
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.12,
    lineHeight: 24,
  },
  textAll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  textNutAll: {
    borderBottomWidth: 2,
    borderColor: '#1877F2',
  },
  textSeeAll: {
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 0.12,
    lineHeight: 21,
  },
});

const dataNe = [
  {
    _id: '1',

    title: 'Europe',

    content: 'Ukraines President Zelensky to BBC: Blood money being paid',

    image:
      'https://i1-vnexpress.vnecdn.net/2023/02/02/328463889-891024988600042-6177-9136-2603-1675295134.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=BCVEDMn0Smx1XLiCRi0rrA',

    createdAt: '2023-01-12T06:26:17.539Z',

    createdBy: {
      _id: '63ac39aeedf7c80016c57a67',

      name: '',

      avatar: '',
    },
  },

  {
    _id: '2',

    title: 'L???ch thi ????nh gi?? n??ng l???c, t?? duy n??m 2023',

    content:
      'C??c k??? thi ????nh gi?? n??ng l???c, t?? duy di???n ra t??? th??ng 3 ?????n 7, th?? sinh c?? th??? tham d??? nhi???u ?????t v?? ????ng k?? t??? ?????u th??ng 2.',

    image:
      'https://i1-vnexpress.vnecdn.net/2023/01/31/117f5804708184dfdd90-162556098-1999-1999-1675148782.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=Ie6cEqbs1YL8PDAG85QrsA',

    createdAt: '2023-01-12T06:26:17.539Z',

    createdBy: {
      _id: '63ac39aeedf7c80016c57a67',

      name: '',

      avatar: '',
    },
  },

  {
    _id: '3',

    title: '?????i ph?? v???i b??i t???p T???t',

    content:
      'Ng??y ngh??? T???t cu???i c??ng, h??ng ch???c trang b??i t???p To??n, Ti???ng Vi???t v?? Ti???ng Anh c???a Anh Th?? ???????c gi???i quy???t, nh??ng do m??? v?? d?? l??m gi??p.',

    image:
      'https://i1-vnexpress.vnecdn.net/2023/01/30/4313-1662984910-1675082690-4516-1675083076.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=BnjiAv8Bq8iaZcGQ2jJC3Q',

    createdAt: '2023-01-12T06:26:17.539Z',

    createdBy: {
      _id: '63ac39aeedf7c80016c57a67',

      name: '',

      avatar: '',
    },
  },

  {
    _id: '4',

    title: '???????ng tr??? th??nh gi??o vi??n ??? M??? c???a m???t ph??? n??? Vi???t',

    content:
      'Ch??? ??inh Thu H???ng ph???i theo h???c ch????ng tr??nh ????o t???o gi??o vi??n v?? ho??n th??nh nhi???u th??? t???c ????? ???????c c???p ph??p h??nh ngh??? d???y h???c ??? M???.',

    image:
      'https://i1-vnexpress.vnecdn.net/2023/01/31/giao-vien3-7193-1674696213-167-6044-9285-1675150549.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=GJm7EfgbBZ4Pvlut0Bl1rw',

    createdAt: '2023-01-12T06:26:17.539Z',

    createdBy: {
      _id: '63ac39aeedf7c80016c57a67',

      name: '',

      avatar: '',
    },
  },

  {
    _id: '5',

    title: 'C?? gi??o ????o hai con gi???a m??a r??t, v?????t 100 km ?????n tr?????ng',

    content:
      'C?? Nguy???n Th??? H?? g??y x??c ?????ng khi ????o hai con, v?????t 100 km trong m??a l???nh ????? tr??? l???i ??i???m tr?????ng ??? x?? Tr?? D??n, huy???n Nam Tr?? My, sau T???t.',

    image:
      'https://i1-vnexpress.vnecdn.net/2023/01/31/untitled-1675115482-6811-1675116325.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=sDv36arZmV-B6KEYjStHbA',

    createdAt: '2023-01-12T06:26:17.539Z',

    createdBy: {
      _id: '63ac39aeedf7c80016c57a67',

      name: '',

      avatar: '',
    },
  },

  {
    _id: '6',

    title: 'Nam sinh tr??? l???i h??n 40 tri???u ?????ng nh???t ???????c',

    content:
      'L?? H???i Th??ng, 17 tu???i, ???????c tuy??n d????ng v?? n???p l???i t??i nylon ?????ng h??n 40 tri???u ?????ng nh???t ???????c h??m 29 T???t.',

    image:
      'https://i1-vnexpress.vnecdn.net/2023/01/30/tuyenduongnamsinh-1675076463-2581-1675077291.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=vlqGCurXgocetWe4SYl13g',

    createdAt: '2023-01-12T06:26:17.539Z',

    createdBy: {
      _id: '63ac39aeedf7c80016c57a67',

      name: '',

      avatar: '',
    },
  },

  {
    _id: '7',

    title: 'Cho con ??i ng???m tr??ng, sao t??? b??',

    content:
      'T??? khi 4 tu???i, con trai ch??? H???ng Anh ???? ???????c ????a ??i ng???m nh???t th???c, m??a sao b??ng v?? tham gia c??u l???c b??? thi??n v??n tr??? em.',

    image:
      'https://i1-vnexpress.vnecdn.net/2023/01/30/danny-kim-png-1929-1673698701-1199-6656-1675037287.png?w=300&h=180&q=100&dpr=1&fit=crop&s=uYWNW2YjIsttuhLT4s8fqQ',

    createdAt: '2023-01-12T06:26:17.539Z',

    createdBy: {
      _id: '63ac39aeedf7c80016c57a67',

      name: '',

      avatar: '',
    },
  },
];
