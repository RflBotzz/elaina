exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` 🙅‍♀️ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar 😒`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

• Nama : ${pushname}
• Nomor : ${sender.split("@")[0]}
• Waktu : ${time}
• Serial : ${serialUser}
• Total User : ${totalUser.length}

Thanks kak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`Wait Onii-Chann`
	}
exports.ok = () =>{
	return`Sukses!`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro Ya~
⌯ָ   ֙Nama :
⌯ָ   ֙Umur :
⌯ָ   ֙Kelamin :
⌯ָ   ֙Askot :
╰─ ᝬ _Patuhi Rules Group Ya_  >_<`
      }
exports.leave = () =>{
	return`
│
╰─ ᝬ _Sayonara, Semoga tenang di alam sana kak_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

*List Menu*
❏ ${prefix}menu
❏ ${prefix}help
❏ ${prefix}elaina
❏ ${prefix}sewabot
❏ ${prefix}bot

*Download*
❏ ${prefix}play [query]
❏ ${prefix}song [judul lagu]
❏ ${prefix}pinterest [query]
❏ ${prefix}ytmp3 [url]
❏ ${prefix}ytmp4 [url]
❏ ${prefix}tiktok [url]
❏ ${prefix}tiktoknowm [url]
❏ ${prefix}tiktokwm [url]
❏ ${prefix}tiktokaudio [url]
❏ ${prefix}soundcloud [url]
❏ ${prefix}telesticker [url]

*Convert*
❏ ${prefix}stiker [video/image]
❏ ${prefix}semoji 😎
❏ ${prefix}smeme [text]
❏ ${prefix}memegen [text|text2]
❏ ${prefix}fast [video/vn]
❏ ${prefix}tupai [video/vn]
❏ ${prefix}vibra [video/vn]
❏ ${prefix}robot [video/vn]
❏ ${prefix}slow [video/vn]
❏ ${prefix}bass [video/vn]
❏ ${prefix}nightcore [video/vn]

*Education*
❏ ${prefix}nuliskiri [text]
❏ ${prefix}nuliskanan [text]
❏ ${prefix}foliokiri [text]
❏ ${prefix}foliokanan [text]

*Game*
❏ ${prefix}tebakgambar 
❏ ${prefix}tebaklirik
❏ ${prefix}tebakkalimat
❏ ${prefix}suit

*Info*
❏ ${prefix}owner
❏ ${prefix}daftar

*Owner*
❏ ${prefix}broadcast [text]
❏ ${prefix}joingrup
❏ ${prefix}leave
❏ >
❏ $
❏  => 

*Group*
❏ ${prefix}antilink 1 / 0
❏ ${prefix}hidetag [text]
❏ ${prefix}linkgrup
❏ ${prefix}joingrup [url]
❏ ${prefix}tagall
❏ ${prefix}kick @tag
❏ ${prefix}setdesc [text] 
❏ ${prefix}setname [text] 

*QuotesMenu*
❏ ${prefix}quotes
❏ ${prefix}quotesislami
❏ ${prefix}quotesimage
❏ ${prefix}quotesanime
❏ ${prefix}quotesdilan
❏ ${prefix}faktaunik
❏ ${prefix}katabijak

*AnimeMenu*
❏ ${prefix}kusonimesearch
❏ ${prefix}wallpaperanime
❏ ${prefix}charactersearch
❏ ${prefix}animesearch
❏ ${prefix}mangasearch

*SoundMenu*
❏ ${prefix}sound1
❏ ${prefix}sound2
❏ ${prefix}sound3
❏ ${prefix}sound4
❏ ${prefix}sound5
❏ ${prefix}sound6
❏ ${prefix}sound7
❏ ${prefix}sound8
❏ ${prefix}sound9
❏ ${prefix}sound10
❏ ${prefix}sound11
❏ ${prefix}sound12
❏ ${prefix}sound13
❏ ${prefix}sound14
❏ ${prefix}sound15
❏ ${prefix}sound16
❏ ${prefix}sound17
❏ ${prefix}sound18
❏ ${prefix}sound19
❏ ${prefix}sound20
❏ ${prefix}sound21
❏ ${prefix}sound22
❏ ${prefix}sound23
❏ ${prefix}sound24
❏ ${prefix}sound25
❏ ${prefix}sound26
❏ ${prefix}sound27
❏ ${prefix}sound28
❏ ${prefix}sound29
❏ ${prefix}sound39
❏ ${prefix}sound31
❏ ${prefix}sound32
❏ ${prefix}sound33
❏ ${prefix}sound34
❏ ${prefix}sound35
❏ ${prefix}sound36
❏ ${prefix}sound37
❏ ${prefix}sound38
❏ ${prefix}sound39
❏ ${prefix}sound40
❏ ${prefix}sound41
❏ ${prefix}sound42
❏ ${prefix}sound43
❏ ${prefix}sound44
❏ ${prefix}sound45
❏ ${prefix}sound46
❏ ${prefix}sound47
❏ ${prefix}sound48
❏ ${prefix}sound49
❏ ${prefix}sound50
❏ ${prefix}sound51
❏ ${prefix}sound52
❏ ${prefix}sound53
❏ ${prefix}sound54
❏ ${prefix}sound55
❏ ${prefix}sound56
❏ ${prefix}sound57
❏ ${prefix}sound58
❏ ${prefix}sound59
❏ ${prefix}sound60
❏ ${prefix}sound61
❏ ${prefix}sound62
❏ ${prefix}sound63
❏ ${prefix}sound64
❏ ${prefix}sound65
❏ ${prefix}sound66
❏ ${prefix}sound67
❏ ${prefix}sound68
❏ ${prefix}sound69
❏ ${prefix}sound70
❏ ${prefix}sound71
❏ ${prefix}sound72
❏ ${prefix}sound73
❏ ${prefix}sound74
❏ ${prefix}sound75
❏ ${prefix}sound76
❏ ${prefix}sound77
❏ ${prefix}sound78
❏ ${prefix}sound79
❏ ${prefix}sound80
❏ ${prefix}sound81
❏ ${prefix}sound82
❏ ${prefix}sound83
❏ ${prefix}sound84
❏ ${prefix}sound85
❏ ${prefix}sound86
❏ ${prefix}sound87
❏ ${prefix}sound88
❏ ${prefix}sound89
❏ ${prefix}sound90
❏ ${prefix}sound91
❏ ${prefix}sound92
❏ ${prefix}sound93
❏ ${prefix}sound94
❏ ${prefix}sound95
❏ ${prefix}sound96
❏ ${prefix}sound96
❏ ${prefix}sound97
❏ ${prefix}sound98
❏ ${prefix}sound99
❏ ${prefix}sound100
❏ ${prefix}sound101
❏ ${prefix}sound102
❏ ${prefix}sound103
❏ ${prefix}sound104
❏ ${prefix}sound105
❏ ${prefix}sound106
❏ ${prefix}sound107
❏ ${prefix}sound108
❏ ${prefix}sound109
❏ ${prefix}sound110
❏ ${prefix}sound111
❏ ${prefix}sound112
❏ ${prefix}sound113
❏ ${prefix}sound114
❏ ${prefix}sound115
❏ ${prefix}sound116
❏ ${prefix}sound117
❏ ${prefix}sound118
❏ ${prefix}sound119

*Information*
❏ ${prefix}jadwaltv
❏ ${prefix}wikipedia
❏ ${prefix}translate
❏ ${prefix}covidglobal
❏ ${prefix}covidindo
❏ ${prefix}infogempa
❏ ${prefix}cuaca

*RandomImage*
❏ ${prefix}loli
❏ ${prefix}waifu
❏ ${prefix}elaina
❏ ${prefix}ppcouple
❏ ${prefix}shota
❏ ${prefix}husbu
❏ ${prefix}kanna
❏ ${prefix}sagiri
❏ ${prefix}shinobu
❏ ${prefix}megumin
❏ ${prefix}art
❏ ${prefix}bts

*Meme*
❏ ${prefix}randommeme
❏ ${prefix}memeindo
❏ ${prefix}darkjoke
`
	}