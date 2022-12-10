const MENUS = [
  {
    category: 'Informasi Bot',
    menu: [
      {
        cmd: '!ping',
        desc: 'Mengetahui status bot',
      },
      {
        cmd: '!donasi',
        desc: 'Mengetahui info donasi',
      },
      {
        cmd: '!owner',
        desc: 'Mengetahui info owner',
      },
    ],
  },
  {
    category: 'Buat Sticker',
    menu: [
      {
        cmd: '!sticker',
        desc: 'Membuat sticker dari gambar',
      },
    ],
  },
  {
    category: 'Automation dan Kegunaan',
    menu: [
      {
        cmd: '!ingetin',
        desc: 'Membuat reminder atau pengingat',
      },
    ],
  },
  {
    category: 'Download dari Sosmed',
    menu: [
      {
        cmd: '!fb',
        desc: 'Download video dari facebook',
      },
      {
        cmd: '!tt',
        desc: 'Download video dari tiktok',
      },
      {
        cmd: '!ig',
        desc: 'Download post/reels dari Instagram',
      },
      {
        cmd: '!igs',
        desc: 'Download story dari Instagram. contoh _!igstory username urutanStory_',
      },
      {
        cmd: '!ytmp4',
        desc: 'Download video dari youtube',
      },
      {
        cmd: '!ytmp3',
        desc: 'Download audio dari youtube',
      },
    ],
  },
  {
    category: 'Teks dan Tulisan',
    menu: [
      {
        cmd: '!text2gif',
        desc: 'Ubah teks jadi gif',
      },
      {
        cmd: '!nulis',
        desc: 'Ubah teks jadi nulis di kertas',
      },
      {
        cmd: '!logo',
        desc: 'Ubah teks jadi logo esports',
      },
      {
        cmd: '!logoPhub',
        desc: 'Ubah teks jadi logo P*rn hub',
      },
      {
        cmd: '!hartatahta',
        desc: 'Buat teks harta tahta doinya',
      },
    ],
  },
  {
    category: 'Fitur Lainnya',
    menu: [
      {
        cmd: '!chord',
        desc: 'Cari chord lagu berdasarkan judul',
      },
      {
        cmd: '!lirik',
        desc: 'Cari lirik lagu berdasarkan judul',
      },
      {
        cmd: '!puisi',
        desc: 'Cari puisi random',
      },
      {
        cmd: '!ssweb',
        desc: 'Screenshootin website',
      },
      {
        cmd: '!buatqr',
        desc: 'Buat QRCode dari teks',
      },
      {
        cmd: '!gempa',
        desc: 'Data gempa BMKG',
      },
      {
        cmd: '!pantun',
        desc: 'Pantun random',
      },
      {
        cmd: '!quotes',
        desc: 'Kata - kata bijak random',
      },
      {
        cmd: '!resep',
        desc: 'Cari resep masakan',
      },
    ],
  },
];

const listMenu = () => {
  const prefix = '*LIST PERINTAH GEDANG BOT V1.0*\n';
  const endfix =
    '\nNote:\nKalo dirasa bot ini keren / membantu kalian bisa berdonasi yaa, kasihan ownernya sobat misqueen hihi.. \n\nLove you...';
  let temp = '';

  function _splitMenu(arr = []) {
    let temp = '';

    for (let i = 0; i < arr.length; i++) {
      temp = temp + `_*${arr[i].cmd}*_\n    --> ${arr[i].desc}\n`;
    }

    return temp;
  }

  for (let i = 0; i < MENUS.length; i++) {
    // menu\n
    temp =
      temp + `\n🔰 *${MENUS[i].category}* 🔰\n\n${_splitMenu(MENUS[i].menu)}`;
  }

  return prefix + temp + endfix;
};

module.exports = {
  listMenu,
};