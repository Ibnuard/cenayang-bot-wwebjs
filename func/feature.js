const MENUS = [
  {
    title: 'Informasi Bot',
    rows: [
      {
        id: '!ping',
        title: 'Ping',
        description: 'Melakukan ping ke bot',
      },
      {
        id: '!info',
        title: 'Info',
        description: 'Mengetahui info bot',
      },
      {
        title: '!donasi',
        title: 'Donasi',
        description: 'Mengetahui info donasi',
      },
      {
        title: '!owner',
        title: 'Owner',
        description: 'Mengetahui info owner',
      },
    ],
  },
  {
    title: 'Media dan Sticker',
    rows: [
      {
        id: '!sticker',
        title: 'Sticker',
        description: 'Membuat sticker dari gambar',
      },
      {
        id: '!faceswap',
        title: 'Faceswap',
        description: 'Mengganti wajah dengan tokoh random',
      },
      {
        id: '!facetoon',
        title: 'Facetoon',
        description: 'Mengubah wajah menjadi kartun',
      },
      {
        id: '!jadianime',
        title: 'Jadi Anime',
        description: 'Mengubah foto jadi anime',
      },
    ],
  },
  {
    title: 'Automation dan Kegunaan',
    rows: [
      {
        id: '!ingetin',
        title: 'Ingetin',
        description: 'Membuat reminder atau pengingat',
      },
      {
        id: '!antikasar',
        title: 'Antikasar',
        description: 'Filter kata kata kasar',
      },
    ],
  },
  {
    title: 'Download dari Sosmed',
    rows: [
      {
        id: '!fb',
        title: 'Facebook Downloader',
        description: 'Download video dari facebook',
      },
      {
        id: '!tt',
        title: 'Tiktok Downloader',
        description: 'Download video dari tiktok',
      },
      {
        id: '!ig',
        title: 'Instagram',
        description: 'Download post/reels/story dari Instagram',
      },
      {
        id: '!ytmp4',
        title: 'Youtube MP4 Downloader',
        description: 'Download video dari youtube',
      },
      {
        id: '!ytmp3',
        title: 'Youtube MP3 Downloader',
        description: 'Download audio dari youtube',
      },
    ],
  },
  {
    title: 'Teks dan Tulisan',
    rows: [
      {
        id: '!nulis',
        title: 'Nulis',
        description: 'Ubah teks jadi nulis di kertas',
      },
      {
        id: '!logo',
        title: 'Logo',
        description: 'Ubah teks jadi logo esports',
      },
    ],
  },
  {
    title: 'Fitur Lainnya',
    rows: [
      {
        id: '!ssweb',
        title: 'Screenshoot Website',
        description: 'Screenshoot website',
      },
      {
        id: '!buatqr',
        title: 'Buat QR',
        description: 'Buat QRCode dari teks',
      },
      {
        id: '!gempa',
        title: 'Gempa',
        description: 'Data gempa BMKG terbaru',
      },
    ],
  },
  {
    title: 'Fitur Grup dan Admin',
    rows: [
      {
        id: '!bye',
        title: 'Bye',
        description: 'Mengeluarkan BOT dari grup',
      },
    ],
  },
];

const listMenu = () => {
  const prefix = '*LIST PERINTAH CENAYANG BOT V1.0*\n';
  const endfix =
    '\nNote:\nKalo dirasa bot ini keren / membantu kalian bisa berdonasi yaa, kasihan ownernya sobat misqueen hihi.. \n\nLove you...';
  let temp = '';

  function _splitMenu(arr = []) {
    let temp = '';

    for (let i = 0; i < arr.length; i++) {
      temp = temp + `_*${arr[i].id}*_\n    --> ${arr[i].description}\n`;
    }

    return temp;
  }

  for (let i = 0; i < MENUS.length; i++) {
    // menu\n
    temp = temp + `\n🔰 *${MENUS[i].title}* 🔰\n\n${_splitMenu(MENUS[i].rows)}`;
  }

  return prefix + temp + endfix;
};

module.exports = {
  listMenu,
  MENUS,
};