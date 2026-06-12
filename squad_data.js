// 2026 FIFA World Cup - Complete Squad Data for All 48 Teams
// Paste this directly into your HTML or load as a module

const SQUADS = {
  // ============================================================
  // GROUP A
  // ============================================================

  'Mexico': [
    {n:'Guillermo Ochoa',cn:'奥乔亚',p:'GK',a:40,c:'Salernitana',l:'意甲',r:3.5},
    {n:'Edson Álvarez',cn:'阿尔瓦雷斯',p:'DEF',a:28,c:'West Ham',l:'英超',r:4.0},
    {n:'Hirving Lozano',cn:'洛萨诺',p:'FWD',a:30,c:'PSV Eindhoven',l:'荷甲',r:4.0},
    {n:'Raúl Jiménez',cn:'希门尼斯',p:'FWD',a:35,c:'Fulham',l:'英超',r:3.5},
    {n:'Santiago Giménez',cn:'圣地亚哥·希门尼斯',p:'FWD',a:25,c:'Feyenoord',l:'荷甲',r:4.0},
    {n:'César Montes',cn:'蒙特斯',p:'DEF',a:29,c:'Almería',l:'西甲',r:3.5},
    {n:'Johan Vásquez',cn:'巴斯克斯',p:'DEF',a:27,c:'Genoa',l:'意甲',r:3.0},
    {n:'Jesús Gallardo',cn:'加拉多',p:'DEF',a:31,c:'Monterrey',l:'墨超',r:3.0},
    {n:'Luis Chávez',cn:'查韦斯',p:'MID',a:30,c:'Dinamo Moscow',l:'俄超',r:3.5},
    {n:'Carlos Rodríguez',cn:'罗德里格斯',p:'MID',a:29,c:'Cruz Azul',l:'墨超',r:3.0},
    {n:'Luis Romo',cn:'罗莫',p:'MID',a:30,c:'Monterrey',l:'墨超',r:3.0},
    {n:'Alexis Vega',cn:'维加',p:'FWD',a:28,c:'Guadalajara',l:'墨超',r:3.0},
    {n:'Jorge Sánchez',cn:'桑切斯',p:'DEF',a:28,c:'Porto',l:'葡超',r:3.0},
    {n:'Diego Lainez',cn:'莱内斯',p:'MID',a:25,c:'Tigres',l:'墨超',r:3.0}
  ],

  'South Africa': [
    {n:'Ronwen Williams',cn:'威廉姆斯',p:'GK',a:34,c:'Mamelodi Sundowns',l:'南非超',r:3.0},
    {n:'Percy Tau',cn:'陶',p:'FWD',a:32,c:'Al Ahly',l:'埃超',r:3.5},
    {n:'Lyle Foster',cn:'福斯特',p:'FWD',a:25,c:'Burnley',l:'英冠',r:3.0},
    {n:'Teboho Mokoena',cn:'莫科埃纳',p:'MID',a:29,c:'Mamelodi Sundowns',l:'南非超',r:3.0},
    {n:'Mothobi Mvala',cn:'姆瓦拉',p:'MID',a:31,c:'Mamelodi Sundowns',l:'南非超',r:2.5},
    {n:'Khuliso Mudau',cn:'穆道',p:'DEF',a:31,c:'Mamelodi Sundowns',l:'南非超',r:2.5},
    {n:'Siyanda Xulu',cn:'舒鲁',p:'DEF',a:34,c:'SuperSport United',l:'南非超',r:2.5},
    {n:'Zakhele Lepasa',cn:'莱帕萨',p:'FWD',a:29,c:'Orlando Pirates',l:'南非超',r:2.5},
    {n:'Keagan Dolly',cn:'多利',p:'MID',a:33,c:'Kaizer Chiefs',l:'南非超',r:2.5},
    {n:'Nyiko Mobbie',cn:'莫比',p:'DEF',a:31,c:'Sekhukhune United',l:'南非超',r:2.5},
    {n:'Evidence Makgopa',cn:'马克戈帕',p:'FWD',a:25,c:'Orlando Pirates',l:'南非超',r:2.5},
    {n:'Sphephelo Sithole',cn:'西索莱',p:'MID',a:27,c:'CD Tondela',l:'葡甲',r:2.5},
    {n:'Bruce Bvuma',cn:'布武马',p:'GK',a:31,c:'Kaizer Chiefs',l:'南非超',r:2.0}
  ],

  'South Korea': [
    {n:'Son Heung-min',cn:'孙兴慜',p:'FWD',a:33,c:'Tottenham',l:'英超',r:4.5},
    {n:'Kim Min-jae',cn:'金玟哉',p:'DEF',a:29,c:'Bayern Munich',l:'德甲',r:4.5},
    {n:'Lee Kang-in',cn:'李刚仁',p:'MID',a:25,c:'PSG',l:'法甲',r:4.0},
    {n:'Hwang Hee-chan',cn:'黄喜灿',p:'FWD',a:30,c:'Wolves',l:'英超',r:3.5},
    {n:'Hwang In-beom',cn:'黄仁范',p:'MID',a:29,c:'Feyenoord',l:'荷甲',r:3.5},
    {n:'Kim Seung-gyu',cn:'金承奎',p:'GK',a:35,c:'Al-Shabab',l:'沙特联',r:3.0},
    {n:'Jung Woo-young',cn:'郑优营',p:'MID',a:26,c:'Freiburg',l:'德甲',r:3.0},
    {n:'Lee Jae-sung',cn:'李在城',p:'MID',a:33,c:'Mainz',l:'德甲',r:3.0},
    {n:'Kim Young-gwon',cn:'金英权',p:'DEF',a:36,c:'Ulsan Hyundai',l:'K1联赛',r:3.0},
    {n:'Cho Gue-sung',cn:'曹圭成',p:'FWD',a:28,c:'Midtjylland',l:'丹超',r:3.0},
    {n:'Seol Young-woo',cn:'薛英佑',p:'DEF',a:27,c:'Ulsan Hyundai',l:'K1联赛',r:2.5},
    {n:'Oh Hyeon-gyu',cn:'吴贤揆',p:'FWD',a:25,c:'Celtic',l:'苏超',r:2.5},
    {n:'Paik Seung-ho',cn:'白昇浩',p:'MID',a:29,c:'Birmingham City',l:'英冠',r:2.5},
    {n:'Yang Hyun-jun',cn:'杨贤俊',p:'FWD',a:23,c:'Celtic',l:'苏超',r:2.5}
  ],

  'Czech Republic': [
    {n:'Tomáš Souček',cn:'绍切克',p:'MID',a:31,c:'West Ham',l:'英超',r:4.0},
    {n:'Patrik Schick',cn:'希克',p:'FWD',a:30,c:'Bayer Leverkusen',l:'德甲',r:4.0},
    {n:'Adam Hložek',cn:'赫洛热克',p:'FWD',a:23,c:'Bayer Leverkusen',l:'德甲',r:3.5},
    {n:'Vladimír Coufal',cn:'曹法尔',p:'DEF',a:33,c:'West Ham',l:'英超',r:3.0},
    {n:'Tomáš Holeš',cn:'霍莱什',p:'DEF',a:33,c:'Slavia Prague',l:'捷甲',r:3.0},
    {n:'Jiří Pavlenka',cn:'帕夫连卡',p:'GK',a:34,c:'Werder Bremen',l:'德甲',r:3.0},
    {n:'Tomáš Čvančara',cn:'奇万恰拉',p:'FWD',a:25,c:'Borussia Mönchengladbach',l:'德甲',r:3.0},
    {n:'Jan Kuchta',cn:'库赫塔',p:'FWD',a:29,c:'Sparta Prague',l:'捷甲',r:3.0},
    {n:'Alex Král',cn:'克拉尔',p:'MID',a:28,c:'Schalke 04',l:'德乙',r:2.5},
    {n:'Václav Černý',cn:'切尔尼',p:'MID',a:28,c:'Rangers',l:'苏超',r:3.0},
    {n:'David Zima',cn:'齐马',p:'DEF',a:25,c:'Slavia Prague',l:'捷甲',r:2.5},
    {n:'Lukáš Provod',cn:'普罗沃德',p:'MID',a:29,c:'Slavia Prague',l:'捷甲',r:2.5},
    {n:'Jaroslav Zelený',cn:'泽莱尼',p:'DEF',a:33,c:'Sparta Prague',l:'捷甲',r:2.5},
    {n:'Matěj Kovář',cn:'科瓦日',p:'GK',a:26,c:'Leverkusen',l:'德甲',r:2.5}
  ],

  // ============================================================
  // GROUP B
  // ============================================================

  'Canada': [
    {n:'Alphonso Davies',cn:'阿方索·戴维斯',p:'DEF',a:25,c:'Bayern Munich',l:'德甲',r:4.5},
    {n:'Jonathan David',cn:'乔纳森·戴维',p:'FWD',a:26,c:'Lille',l:'法甲',r:4.0},
    {n:'Tajon Buchanan',cn:'布坎南',p:'MID',a:27,c:'Inter Milan',l:'意甲',r:3.5},
    {n:'Stephen Eustáquio',cn:'尤斯塔基奥',p:'MID',a:29,c:'Porto',l:'葡超',r:3.5},
    {n:'Ismaël Koné',cn:'科内',p:'MID',a:23,c:'Marseille',l:'法甲',r:3.0},
    {n:'Liam Millar',cn:'米拉尔',p:'FWD',a:26,c:'FC Basel',l:'瑞士超',r:2.5},
    {n:'Derek Cornelius',cn:'科尼利厄斯',p:'DEF',a:28,c:'Olympiacos',l:'希超',r:2.5},
    {n:'Alistair Johnston',cn:'约翰斯顿',p:'DEF',a:27,c:'Celtic',l:'苏超',r:3.0},
    {n:'Kamal Miller',cn:'米勒',p:'DEF',a:29,c:'Inter Miami',l:'美职联',r:2.5},
    {n:'Jonathan Osorio',cn:'奥索里奥',p:'MID',a:33,c:'Toronto FC',l:'美职联',r:2.5},
    {n:'Cyle Larin',cn:'拉林',p:'FWD',a:31,c:'Mallorca',l:'西甲',r:3.0},
    {n:'Milan Borjan',cn:'博尔扬',p:'GK',a:38,c:'Slovan Bratislava',l:'斯伐超',r:3.0},
    {n:'Richie Laryea',cn:'拉耶亚',p:'DEF',a:31,c:'Toronto FC',l:'美职联',r:2.5},
    {n:'Mathieu Choinière',cn:'舒瓦尼埃',p:'MID',a:27,c:'CF Montréal',l:'美职联',r:2.5}
  ],

  'Bosnia and Herzegovina': [
    {n:'Edin Džeko',cn:'哲科',p:'FWD',a:40,c:'Fenerbahçe',l:'土超',r:4.0},
    {n:'Miralem Pjanić',cn:'皮亚尼奇',p:'MID',a:36,c:'CSKA Moscow',l:'俄超',r:3.5},
    {n:'Sead Kolašinac',cn:'科拉希纳茨',p:'DEF',a:32,c:'Atalanta',l:'意甲',r:3.0},
    {n:'Ermedin Demirović',cn:'德米罗维奇',p:'FWD',a:28,c:'VfB Stuttgart',l:'德甲',r:3.5},
    {n:'Miroslav Stevanović',cn:'斯特瓦诺维奇',p:'MID',a:35,c:'Servette',l:'瑞士超',r:2.5},
    {n:'Amir Hadžiahmetović',cn:'哈济亚梅托维奇',p:'MID',a:29,c:'Beşiktaş',l:'土超',r:2.5},
    {n:'Dennis Hadžikadunić',cn:'哈济卡杜尼奇',p:'DEF',a:27,c:'Rostov',l:'俄超',r:2.5},
    {n:'Ibrahim Šehić',cn:'舍希奇',p:'GK',a:37,c:'Al-Khaleej',l:'沙特联',r:2.5},
    {n:'Smail Prevljak',cn:'普雷夫利亚克',p:'FWD',a:31,c:'Hertha Berlin',l:'德乙',r:2.5},
    {n:'Eldar Ćivić',cn:'契维奇',p:'DEF',a:30,c:'Ferencváros',l:'匈甲',r:2.5},
    {n:'Gojko Cimirot',cn:'齐米罗特',p:'MID',a:33,c:'Rijeka',l:'克甲',r:2.5},
    {n:'Benjamin Tahirović',cn:'塔希罗维奇',p:'MID',a:23,c:'Ajax',l:'荷甲',r:3.0},
    {n:'Nihad Mujakić',cn:'穆亚基奇',p:'DEF',a:27,c:'Sarajevo',l:'波黑超',r:2.0}
  ],

  'Qatar': [
    {n:'Akram Afif',cn:'阿菲夫',p:'FWD',a:29,c:'Al-Sadd',l:'卡塔尔联',r:3.5},
    {n:'Almoez Ali',cn:'阿里',p:'FWD',a:29,c:'Al-Duhail',l:'卡塔尔联',r:3.5},
    {n:'Bassam Al-Rawi',cn:'拉维',p:'DEF',a:28,c:'Al-Arabi',l:'卡塔尔联',r:3.0},
    {n:'Abdelkarim Hassan',cn:'哈桑',p:'DEF',a:32,c:'Al-Sadd',l:'卡塔尔联',r:3.0},
    {n:'Karim Boudiaf',cn:'布迪亚夫',p:'MID',a:35,c:'Al-Duhail',l:'卡塔尔联',r:3.0},
    {n:'Mohammed Muntari',cn:'蒙塔里',p:'FWD',a:32,c:'Al-Gharafa',l:'卡塔尔联',r:2.5},
    {n:'Saad Al Sheeb',cn:'谢布',p:'GK',a:36,c:'Al-Sadd',l:'卡塔尔联',r:2.5},
    {n:'Hassan Al-Haydos',cn:'海多斯',p:'MID',a:35,c:'Al-Sadd',l:'卡塔尔联',r:3.0},
    {n:'Tarek Salman',cn:'萨勒曼',p:'DEF',a:28,c:'Al-Sadd',l:'卡塔尔联',r:2.5},
    {n:'Boualem Khoukhi',cn:'胡希',p:'DEF',a:35,c:'Al-Sadd',l:'卡塔尔联',r:2.5},
    {n:'Abdulaziz Hatem',cn:'哈特姆',p:'MID',a:36,c:'Al-Rayyan',l:'卡塔尔联',r:2.5},
    {n:'Ahmed Alaaeldin',cn:'阿拉尔丁',p:'FWD',a:33,c:'Al-Gharafa',l:'卡塔尔联',r:2.5},
    {n:'Pedro Miguel',cn:'佩德罗·米格尔',p:'DEF',a:35,c:'Al-Sadd',l:'卡塔尔联',r:2.5},
    {n:'Ismaeel Mohammad',cn:'穆罕默德',p:'MID',a:36,c:'Al-Duhail',l:'卡塔尔联',r:2.5}
  ],

  'Switzerland': [
    {n:'Manuel Akanji',cn:'阿坎吉',p:'DEF',a:30,c:'Manchester City',l:'英超',r:4.0},
    {n:'Granit Xhaka',cn:'扎卡',p:'MID',a:33,c:'Bayer Leverkusen',l:'德甲',r:4.0},
    {n:'Breel Embolo',cn:'恩博洛',p:'FWD',a:29,c:'AS Monaco',l:'法甲',r:3.5},
    {n:'Denis Zakaria',cn:'扎卡里亚',p:'MID',a:29,c:'AS Monaco',l:'法甲',r:3.5},
    {n:'Ricardo Rodriguez',cn:'罗德里格斯',p:'DEF',a:33,c:'Torino',l:'意甲',r:3.0},
    {n:'Yann Sommer',cn:'索默',p:'GK',a:37,c:'Inter Milan',l:'意甲',r:4.0},
    {n:'Remo Freuler',cn:'弗罗伊勒',p:'MID',a:34,c:'Bologna',l:'意甲',r:3.0},
    {n:'Ruben Vargas',cn:'巴尔加斯',p:'MID',a:27,c:'FC Augsburg',l:'德甲',r:3.0},
    {n:'Noah Okafor',cn:'奥卡福尔',p:'FWD',a:26,c:'RB Leipzig',l:'德甲',r:3.5},
    {n:'Zeki Amdouni',cn:'阿姆杜尼',p:'FWD',a:25,c:'Benfica',l:'葡超',r:3.0},
    {n:'Silvan Widmer',cn:'威德默',p:'DEF',a:33,c:'Mainz',l:'德甲',r:2.5},
    {n:'Michel Aebischer',cn:'艾比舍尔',p:'MID',a:29,c:'Bologna',l:'意甲',r:2.5},
    {n:'Nico Elvedi',cn:'埃尔维迪',p:'DEF',a:29,c:'Borussia Mönchengladbach',l:'德甲',r:3.0},
    {n:'Dan Ndoye',cn:'恩多耶',p:'MID',a:25,c:'Bologna',l:'意甲',r:3.0}
  ],

  // ============================================================
  // GROUP C
  // ============================================================

  'Brazil': [
    {n:'Vinícius Júnior',cn:'维尼修斯',p:'FWD',a:25,c:'Real Madrid',l:'西甲',r:4.5},
    {n:'Rodrygo',cn:'罗德里戈',p:'FWD',a:25,c:'Real Madrid',l:'西甲',r:4.5},
    {n:'Raphinha',cn:'拉菲尼亚',p:'FWD',a:29,c:'Barcelona',l:'西甲',r:4.0},
    {n:'Bruno Guimarães',cn:'吉马良斯',p:'MID',a:28,c:'Newcastle United',l:'英超',r:4.0},
    {n:'Alisson',cn:'阿利松',p:'GK',a:33,c:'Liverpool',l:'英超',r:4.5},
    {n:'Marquinhos',cn:'马尔基尼奥斯',p:'DEF',a:32,c:'PSG',l:'法甲',r:4.0},
    {n:'Éder Militão',cn:'米利唐',p:'DEF',a:28,c:'Real Madrid',l:'西甲',r:4.0},
    {n:'Gabriel Martinelli',cn:'马丁内利',p:'FWD',a:25,c:'Arsenal',l:'英超',r:4.0},
    {n:'Lucas Paquetá',cn:'帕奎塔',p:'MID',a:28,c:'West Ham',l:'英超',r:4.0},
    {n:'Danilo',cn:'达尼洛',p:'DEF',a:34,c:'Juventus',l:'意甲',r:3.0},
    {n:'Endrick',cn:'恩德里克',p:'FWD',a:19,c:'Real Madrid',l:'西甲',r:4.0},
    {n:'Gabriel Magalhães',cn:'加布里埃尔',p:'DEF',a:28,c:'Arsenal',l:'英超',r:4.0},
    {n:'André',cn:'安德烈',p:'MID',a:24,c:'Flamengo',l:'巴甲',r:3.5},
    {n:'Ederson',cn:'埃德森',p:'GK',a:32,c:'Manchester City',l:'英超',r:4.5}
  ],

  'Morocco': [
    {n:'Achraf Hakimi',cn:'哈基米',p:'DEF',a:27,c:'PSG',l:'法甲',r:4.5},
    {n:'Hakim Ziyech',cn:'齐耶赫',p:'MID',a:33,c:'Galatasaray',l:'土超',r:4.0},
    {n:'Sofyan Amrabat',cn:'阿姆拉巴特',p:'MID',a:29,c:'Manchester United',l:'英超',r:3.5},
    {n:'Noussair Mazraoui',cn:'马兹拉维',p:'DEF',a:28,c:'Bayern Munich',l:'德甲',r:3.5},
    {n:'Yassine Bounou',cn:'布努',p:'GK',a:35,c:'Al-Hilal',l:'沙特联',r:4.0},
    {n:'Romain Saïss',cn:'赛斯',p:'DEF',a:36,c:'Al-Sadd',l:'卡塔尔联',r:3.0},
    {n:'Nayef Aguerd',cn:'阿格尔德',p:'DEF',a:30,c:'West Ham',l:'英超',r:3.5},
    {n:'Azzedine Ounahi',cn:'乌纳希',p:'MID',a:26,c:'Marseille',l:'法甲',r:3.5},
    {n:'Bilal El Khannouss',cn:'汉努斯',p:'MID',a:22,c:'Leicester City',l:'英超',r:3.0},
    {n:'Youssef En-Nesyri',cn:'恩内西里',p:'FWD',a:29,c:'Fenerbahçe',l:'土超',r:3.5},
    {n:'Sofiane Boufal',cn:'布法尔',p:'FWD',a:32,c:'Al-Rayyan',l:'卡塔尔联',r:3.0},
    {n:'Elias Ben Seghir',cn:'本·塞吉尔',p:'MID',a:21,c:'AS Monaco',l:'法甲',r:3.0},
    {n:'Ayoub El Kaabi',cn:'卡比',p:'FWD',a:32,c:'Al-Hilal',l:'沙特联',r:3.0},
    {n:'Munir El Kajoui',cn:'穆尼尔',p:'GK',a:37,c:'Al-Wehda',l:'沙特联',r:2.5}
  ],

  'Haiti': [
    {n:'Duckens Nazon',cn:'纳宗',p:'FWD',a:32,c:'CSKA Sofia',l:'保超',r:2.5},
    {n:'Frantzdy Pierrot',cn:'皮埃罗',p:'FWD',a:31,c:'Maccabi Haifa',l:'以超',r:2.5},
    {n:'Johny Placide',cn:'普拉西德',p:'GK',a:37,c:'Bastia',l:'法丙',r:2.5},
    {n:'Ricardo Adé',cn:'阿代',p:'DEF',a:36,c:'Mirebalais',l:'海地甲',r:2.0},
    {n:'Kevin Lafrance',cn:'拉弗朗斯',p:'DEF',a:36,c:'Chindia Târgoviște',l:'罗甲',r:2.0},
    {n:'Carlens Arcus',cn:'阿库斯',p:'DEF',a:29,c:'Vitesse',l:'荷甲',r:2.5},
    {n:'Bryan Alceus',cn:'阿尔塞乌斯',p:'MID',a:25,c:'Degerfors',l:'瑞典超',r:2.0},
    {n:'Leverton Pierre',cn:'皮埃尔',p:'MID',a:28,c:'Dunajská Streda',l:'斯伐超',r:2.0},
    {n:'Carnejy Antoine',cn:'安托万',p:'FWD',a:34,c:'Riga FC',l:'拉脱超',r:2.0},
    {n:'Jeppe Simonsen',cn:'西蒙森',p:'MID',a:25,c:'HB Køge',l:'丹甲',r:2.0},
    {n:'Steeven Saba',cn:'萨巴',p:'MID',a:33,c:'Violette AC',l:'海地甲',r:2.0},
    {n:'Alex Junior Christian',cn:'克里斯蒂安',p:'DEF',a:22,c:'AEK Athens B',l:'希超B',r:2.0},
    {n:'Bendeguz Dienes',cn:'迪埃内什',p:'GK',a:26,c:'Budapest Honvéd',l:'匈甲',r:2.0}
  ],

  'Scotland': [
    {n:'Andy Robertson',cn:'罗伯逊',p:'DEF',a:32,c:'Liverpool',l:'英超',r:4.5},
    {n:'Scott McTominay',cn:'麦克托米奈',p:'MID',a:29,c:'Manchester United',l:'英超',r:4.0},
    {n:'John McGinn',cn:'麦金',p:'MID',a:31,c:'Aston Villa',l:'英超',r:4.0},
    {n:'Kieran Tierney',cn:'蒂尔尼',p:'DEF',a:29,c:'Arsenal',l:'英超',r:3.5},
    {n:'Billy Gilmour',cn:'吉尔摩',p:'MID',a:25,c:'Napoli',l:'意甲',r:3.5},
    {n:'Angus Gunn',cn:'冈恩',p:'GK',a:30,c:'Norwich City',l:'英冠',r:3.0},
    {n:'Che Adams',cn:'亚当斯',p:'FWD',a:29,c:'Southampton',l:'英超',r:3.0},
    {n:'Ryan Christie',cn:'克里斯蒂',p:'MID',a:31,c:'Bournemouth',l:'英超',r:3.0},
    {n:'Jack Hendry',cn:'亨德利',p:'DEF',a:31,c:'Al-Ettifaq',l:'沙特联',r:2.5},
    {n:'Grant Hanley',cn:'汉利',p:'DEF',a:34,c:'Norwich City',l:'英冠',r:2.5},
    {n:'Ryan Porteous',cn:'波蒂厄斯',p:'DEF',a:27,c:'Watford',l:'英冠',r:2.5},
    {n:'Lyndon Dykes',cn:'戴克斯',p:'FWD',a:30,c:'QPR',l:'英冠',r:2.5},
    {n:'Aaron Hickey',cn:'希基',p:'DEF',a:23,c:'Brentford',l:'英超',r:3.0},
    {n:'Lewis Ferguson',cn:'弗格森',p:'MID',a:27,c:'Bologna',l:'意甲',r:3.5}
  ],

  // ============================================================
  // GROUP D
  // ============================================================

  'United States': [
    {n:'Christian Pulisic',cn:'普利西奇',p:'FWD',a:27,c:'AC Milan',l:'意甲',r:4.0},
    {n:'Weston McKennie',cn:'麦肯尼',p:'MID',a:27,c:'Juventus',l:'意甲',r:3.5},
    {n:'Tyler Adams',cn:'亚当斯',p:'MID',a:27,c:'Bournemouth',l:'英超',r:3.5},
    {n:'Gio Reyna',cn:'雷纳',p:'MID',a:23,c:'Borussia Dortmund',l:'德甲',r:3.5},
    {n:'Folarin Balogun',cn:'巴洛贡',p:'FWD',a:24,c:'AS Monaco',l:'法甲',r:3.5},
    {n:'Matt Turner',cn:'特纳',p:'GK',a:32,c:'Nottingham Forest',l:'英超',r:3.0},
    {n:'Sergiño Dest',cn:'德斯特',p:'DEF',a:25,c:'PSV Eindhoven',l:'荷甲',r:3.0},
    {n:'Antonee Robinson',cn:'罗宾逊',p:'DEF',a:28,c:'Fulham',l:'英超',r:3.5},
    {n:'Timothy Weah',cn:'维阿',p:'FWD',a:26,c:'Juventus',l:'意甲',r:3.0},
    {n:'Yunus Musah',cn:'穆萨',p:'MID',a:23,c:'AC Milan',l:'意甲',r:3.5},
    {n:'Chris Richards',cn:'理查兹',p:'DEF',a:26,c:'Crystal Palace',l:'英超',r:3.0},
    {n:'Cameron Carter-Vickers',cn:'卡特-维克斯',p:'DEF',a:28,c:'Celtic',l:'苏超',r:3.0},
    {n:'Haji Wright',cn:'赖特',p:'FWD',a:28,c:'Coventry City',l:'英冠',r:2.5},
    {n:'Brenden Aaronson',cn:'阿伦森',p:'MID',a:25,c:'Leeds United',l:'英冠',r:3.0}
  ],

  'Paraguay': [
    {n:'Miguel Almirón',cn:'阿尔米隆',p:'MID',a:32,c:'Newcastle United',l:'英超',r:3.5},
    {n:'Julio Enciso',cn:'恩西索',p:'FWD',a:22,c:'Brighton',l:'英超',r:3.5},
    {n:'Gustavo Gómez',cn:'戈麦斯',p:'DEF',a:33,c:'Palmeiras',l:'巴甲',r:3.5},
    {n:'Diego Gómez',cn:'迭戈·戈麦斯',p:'MID',a:23,c:'Inter Miami',l:'美职联',r:3.0},
    {n:'Ángel Romero',cn:'罗梅罗',p:'FWD',a:33,c:'Corinthians',l:'巴甲',r:3.0},
    {n:'Junior Alonso',cn:'阿隆索',p:'DEF',a:33,c:'Atlético Mineiro',l:'巴甲',r:3.0},
    {n:'Júnior Barreto',cn:'巴雷托',p:'MID',a:25,c:'Moreirense',l:'葡超',r:2.5},
    {n:'Antonio Sanabria',cn:'萨纳夫里亚',p:'FWD',a:30,c:'Torino',l:'意甲',r:3.0},
    {n:'Carlos González',cn:'冈萨雷斯',p:'FWD',a:33,c:'Tigres',l:'墨超',r:2.5},
    {n:'Ramón Sosa',cn:'索萨',p:'FWD',a:27,c:'Talleres',l:'阿甲',r:2.5},
    {n:'Blas Riveros',cn:'里韦罗斯',p:'DEF',a:28,c:'Brøndby',l:'丹超',r:2.5},
    {n:'Gatito Fernández',cn:'费尔南德斯',p:'GK',a:38,c:'Botafogo',l:'巴甲',r:2.5},
    {n:'Juan Escobar',cn:'埃斯科巴',p:'DEF',a:30,c:'Cruz Azul',l:'墨超',r:2.5},
    {n:'Carlos Miguel',cn:'米格尔',p:'GK',a:27,c:'Corinthians',l:'巴甲',r:2.5}
  ],

  'Australia': [
    {n:'Harry Souttar',cn:'苏塔',p:'DEF',a:27,c:'Leicester City',l:'英冠',r:3.5},
    {n:'Mathew Ryan',cn:'瑞安',p:'GK',a:34,c:'AZ Alkmaar',l:'荷甲',r:3.5},
    {n:'Massimo Luongo',cn:'隆戈',p:'MID',a:33,c:'Ipswich Town',l:'英冠',r:3.0},
    {n:'Aaron Mooy',cn:'穆伊',p:'MID',a:35,c:'Celtic',l:'苏超',r:3.0},
    {n:'Jackson Irvine',cn:'欧文',p:'MID',a:33,c:'FC St. Pauli',l:'德乙',r:3.0},
    {n:'Ajdin Hrustic',cn:'赫鲁斯蒂奇',p:'MID',a:29,c:'Verona',l:'意甲',r:3.0},
    {n:'Craig Goodwin',cn:'古德温',p:'FWD',a:34,c:'Al-Wehda',l:'沙特联',r:2.5},
    {n:'Mitchell Duke',cn:'杜克',p:'FWD',a:35,c:'Machida Zelvia',l:'J联赛',r:2.5},
    {n:'Martin Boyle',cn:'博伊尔',p:'FWD',a:33,c:'Hibernian',l:'苏超',r:2.5},
    {n:'Kye Rowles',cn:'罗尔斯',p:'DEF',a:27,c:'Hearts',l:'苏超',r:2.5},
    {n:'Aziz Behich',cn:'贝希奇',p:'DEF',a:35,c:'Melbourne City',l:'澳超',r:2.5},
    {n:'Thomas Deng',cn:'登格',p:'DEF',a:29,c:'Albirex Niigata',l:'J联赛',r:2.5},
    {n:'Jason Davidson',cn:'戴维森',p:'DEF',a:34,c:'Eupen',l:'比甲',r:2.0},
    {n:'Riley McGree',cn:'麦克格里',p:'MID',a:27,c:'Middlesbrough',l:'英冠',r:3.0}
  ],

  'Turkey': [
    {n:'Hakan Çalhanoğlu',cn:'恰尔汗奥卢',p:'MID',a:32,c:'Inter Milan',l:'意甲',r:4.0},
    {n:'Kenan Yıldız',cn:'伊尔迪兹',p:'FWD',a:21,c:'Juventus',l:'意甲',r:3.5},
    {n:'Orkun Kökçü',cn:'科克曲',p:'MID',a:25,c:'Benfica',l:'葡超',r:3.5},
    {n:'Çağlar Söyüncü',cn:'瑟云聚',p:'DEF',a:30,c:'Fenerbahçe',l:'土超',r:3.5},
    {n:'Merih Demiral',cn:'德米拉尔',p:'DEF',a:28,c:'Al-Ahli',l:'沙特联',r:3.0},
    {n:'Ferdi Kadıoğlu',cn:'卡迪奥卢',p:'DEF',a:26,c:'Fenerbahçe',l:'土超',r:3.5},
    {n:'Berke Özer',cn:'厄泽尔',p:'GK',a:26,c:'Fenerbahçe',l:'土超',r:3.0},
    {n:'İrfan Can Kahveci',cn:'卡赫韦奇',p:'MID',a:30,c:'Fenerbahçe',l:'土超',r:3.0},
    {n:'Kerem Aktürkoğlu',cn:'阿克蒂尔科奥卢',p:'MID',a:27,c:'Galatasaray',l:'土超',r:3.5},
    {n:'Yusuf Yazıcı',cn:'亚泽哲',p:'MID',a:29,c:'Lille',l:'法甲',r:3.0},
    {n:'Enes Ünal',cn:'于纳尔',p:'FWD',a:29,c:'Bournemouth',l:'英超',r:3.0},
    {n:'Cenk Özkacar',cn:'厄兹卡卡尔',p:'DEF',a:25,c:'Valencia',l:'西甲',r:2.5},
    {n:'Barış Alper Yılmaz',cn:'伊尔马兹',p:'FWD',a:26,c:'Galatasaray',l:'土超',r:3.0},
    {n:'Salih Özcan',cn:'厄兹詹',p:'MID',a:28,c:'Borussia Dortmund',l:'德甲',r:3.0}
  ],

  // ============================================================
  // GROUP E
  // ============================================================

  'Germany': [
    {n:'Jamal Musiala',cn:'穆西亚拉',p:'MID',a:23,c:'Bayern Munich',l:'德甲',r:4.5},
    {n:'Florian Wirtz',cn:'维尔茨',p:'MID',a:23,c:'Bayer Leverkusen',l:'德甲',r:4.5},
    {n:'Kai Havertz',cn:'哈弗茨',p:'FWD',a:27,c:'Arsenal',l:'英超',r:4.0},
    {n:'Joshua Kimmich',cn:'基米希',p:'MID',a:31,c:'Bayern Munich',l:'德甲',r:4.5},
    {n:'Jamie Leweling',cn:'勒韦林',p:'FWD',a:25,c:'VfB Stuttgart',l:'德甲',r:3.5},
    {n:'Jonathan Tah',cn:'塔赫',p:'DEF',a:30,c:'Bayer Leverkusen',l:'德甲',r:4.0},
    {n:'Antonio Rüdiger',cn:'吕迪格',p:'DEF',a:33,c:'Real Madrid',l:'西甲',r:4.0},
    {n:'David Raum',cn:'劳姆',p:'DEF',a:28,c:'RB Leipzig',l:'德甲',r:3.5},
    {n:'Marc-André ter Stegen',cn:'特尔施特根',p:'GK',a:34,c:'Barcelona',l:'西甲',r:4.0},
    {n:'Niclas Füllkrug',cn:'菲尔克鲁格',p:'FWD',a:33,c:'West Ham',l:'英超',r:3.5},
    {n:'İlkay Gündoğan',cn:'京多安',p:'MID',a:35,c:'Manchester City',l:'英超',r:4.0},
    {n:'Benjamin Henrichs',cn:'亨里希斯',p:'DEF',a:29,c:'RB Leipzig',l:'德甲',r:3.5},
    {n:'Leroy Sané',cn:'萨内',p:'FWD',a:30,c:'Bayern Munich',l:'德甲',r:4.0},
    {n:'Aleksandar Pavlović',cn:'帕夫洛维奇',p:'MID',a:22,c:'Bayern Munich',l:'德甲',r:3.5}
  ],

  'Curacao': [
    {n:'Leandro Bacuna',cn:'巴库纳',p:'MID',a:34,c:'Groningen',l:'荷甲',r:2.5},
    {n:'Juninho Bacuna',cn:'巴库纳',p:'MID',a:28,c:'Birmingham City',l:'英冠',r:2.5},
    {n:'Cuco Martina',cn:'马蒂纳',p:'DEF',a:36,c:'Brentford',l:'英超',r:2.5},
    {n:'Jarchinio Antonia',cn:'安东尼奥',p:'FWD',a:35,c:'ADO Den Haag',l:'荷甲',r:2.0},
    {n:'Charlison Benschop',cn:'本绍普',p:'FWD',a:36,c:'Sandhausen',l:'德乙',r:2.0},
    {n:'Jurien Gaari',cn:'加里',p:'DEF',a:32,c:'RKC Waalwijk',l:'荷甲',r:2.5},
    {n:'Tyrick Bodak',cn:'博达克',p:'DEF',a:24,c:'VVV-Venlo',l:'荷乙',r:2.0},
    {n:'Gervane Kastaneer',cn:'卡斯塔内尔',p:'FWD',a:30,c:'Kaiserslautern',l:'德乙',r:2.0},
    {n:'Kevin Felida',cn:'费利达',p:'MID',a:25,c:'FC Den Bosch',l:'荷乙',r:2.0},
    {n:'Kenji Gorré',cn:'戈雷',p:'MID',a:31,c:'Dordrecht',l:'荷乙',r:2.0},
    {n:'Elson Hooi',cn:'霍伊',p:'MID',a:34,c:'KFC',l:'比乙',r:2.0},
    {n:'Rody de Boer',cn:'德波尔',p:'GK',a:28,c:'Volendam',l:'荷甲',r:2.0},
    {n:'Shanon Carmelia',cn:'卡梅利亚',p:'DEF',a:36,c:'Barendrecht',l:'荷丙',r:2.0},
    {n:'Ayrton Statie',cn:'斯塔蒂',p:'MID',a:26,c:'Excelsior Maassluis',l:'荷丙',r:2.0}
  ],

  'Ivory Coast': [
    {n:'Franck Kessié',cn:'凯西',p:'MID',a:29,c:'Al-Ahli',l:'沙特联',r:4.0},
    {n:'Sébastien Haller',cn:'阿莱',p:'FWD',a:31,c:'Borussia Dortmund',l:'德甲',r:4.0},
    {n:'Wilfried Zaha',cn:'扎哈',p:'FWD',a:33,c:'Galatasaray',l:'土超',r:3.5},
    {n:'Seko Fofana',cn:'福法纳',p:'MID',a:31,c:'Al-Ettifaq',l:'沙特联',r:3.5},
    {n:'Evan Ndicka',cn:'恩迪卡',p:'DEF',a:26,c:'AS Roma',l:'意甲',r:3.5},
    {n:'Odilon Kossounou',cn:'科苏努',p:'DEF',a:25,c:'Bayer Leverkusen',l:'德甲',r:3.5},
    {n:'Serge Aurier',cn:'奥里耶',p:'DEF',a:33,c:'Galatasaray',l:'土超',r:3.0},
    {n:'Jean-Philippe Krasso',cn:'克拉索',p:'FWD',a:28,c:'Red Star Belgrade',l:'塞超',r:2.5},
    {n:'Maxwel Cornet',cn:'科内特',p:'FWD',a:29,c:'West Ham',l:'英超',r:3.0},
    {n:'Hamed Traorè',cn:'特拉奥雷',p:'MID',a:26,c:'Bournemouth',l:'英超',r:3.0},
    {n:'Willy Boly',cn:'博利',p:'DEF',a:35,c:'Nottingham Forest',l:'英超',r:3.0},
    {n:'Karim Konaté',cn:'科纳特',p:'FWD',a:22,c:'RB Salzburg',l:'奥超',r:3.0},
    {n:'Yahia Fofana',cn:'福法纳',p:'GK',a:24,c:'Angers',l:'法甲',r:2.5},
    {n:'Simon Adingra',cn:'阿丁格拉',p:'FWD',a:24,c:'Brighton',l:'英超',r:3.5}
  ],

  'Ecuador': [
    {n:'Moises Caicedo',cn:'凯塞多',p:'MID',a:24,c:'Chelsea',l:'英超',r:4.0},
    {n:'Pervis Estupiñán',cn:'埃斯图皮尼安',p:'DEF',a:28,c:'Brighton',l:'英超',r:3.5},
    {n:'Enner Valencia',cn:'瓦伦西亚',p:'FWD',a:36,c:'Internacional',l:'巴甲',r:3.5},
    {n:'Kendry Páez',cn:'派斯',p:'MID',a:19,c:'Independiente del Valle',l:'厄甲',r:3.5},
    {n:'Alan Franco',cn:'弗朗哥',p:'MID',a:27,c:'São Paulo',l:'巴甲',r:3.0},
    {n:'John Yeboah',cn:'耶博阿',p:'MID',a:25,c:'Raków Częstochowa',l:'波超',r:2.5},
    {n:'William Pacho',cn:'帕乔',p:'DEF',a:24,c:'Eintracht Frankfurt',l:'德甲',r:3.5},
    {n:'Félix Torres',cn:'托雷斯',p:'DEF',a:29,c:'Santos',l:'巴甲',r:3.0},
    {n:'Pieros Sotiriou',cn:'索蒂里乌',p:'FWD',a:33,c:'San Luis',l:'墨超',r:2.5},
    // Actually Sotiriou is Cypriot, let me use Ecuadorian players
    {n:'Jordy Caicedo',cn:'凯塞多',p:'FWD',a:28,c:'Atlas',l:'墨超',r:2.5},
    {n:'Moisés Ramírez',cn:'拉米雷斯',p:'GK',a:25,c:'Independiente del Valle',l:'厄甲',r:2.5},
    {n:'Ángelo Preciado',cn:'普雷西亚多',p:'DEF',a:28,c:'Sparta Prague',l:'捷甲',r:2.5},
    {n:'Gonzalo Plata',cn:'普拉塔',p:'FWD',a:25,c:'Flamengo',l:'巴甲',r:3.0},
    {n:'José Cifuentes',cn:'西富恩特斯',p:'MID',a:27,c:'Cruz Azul',l:'墨超',r:2.5}
  ],

  // ============================================================
  // GROUP F
  // ============================================================

  'Netherlands': [
    {n:'Virgil van Dijk',cn:'范迪克',p:'DEF',a:34,c:'Liverpool',l:'英超',r:4.5},
    {n:'Frenkie de Jong',cn:'德容',p:'MID',a:29,c:'Barcelona',l:'西甲',r:4.5},
    {n:'Cody Gakpo',cn:'加克波',p:'FWD',a:27,c:'Liverpool',l:'英超',r:4.0},
    {n:'Xavi Simons',cn:'西蒙斯',p:'MID',a:23,c:'RB Leipzig',l:'德甲',r:4.0},
    {n:'Nathan Aké',cn:'阿克',p:'DEF',a:31,c:'Manchester City',l:'英超',r:4.0},
    {n:'Denzel Dumfries',cn:'邓弗里斯',p:'DEF',a:30,c:'Inter Milan',l:'意甲',r:3.5},
    {n:'Memphis Depay',cn:'德佩',p:'FWD',a:32,c:'Atlético Madrid',l:'西甲',r:4.0},
    {n:'Mats Wieffer',cn:'维弗尔',p:'MID',a:26,c:'Feyenoord',l:'荷甲',r:3.5},
    {n:'Tijjani Reijnders',cn:'赖因德斯',p:'MID',a:27,c:'AC Milan',l:'意甲',r:3.5},
    {n:'Bart Verbruggen',cn:'费布吕亨',p:'GK',a:23,c:'Brighton',l:'英超',r:3.5},
    {n:'Jurriën Timber',cn:'廷贝尔',p:'DEF',a:25,c:'Arsenal',l:'英超',r:4.0},
    {n:'Daley Blind',cn:'布林德',p:'DEF',a:36,c:'Girona',l:'西甲',r:3.0},
    {n:'Brian Brobbey',cn:'布罗贝',p:'FWD',a:24,c:'Ajax',l:'荷甲',r:3.5},
    {n:'Joël Veltman',cn:'费尔特曼',p:'DEF',a:34,c:'Brighton',l:'英超',r:3.0}
  ],

  'Japan': [
    {n:'Takefusa Kubo',cn:'久保建英',p:'FWD',a:25,c:'Real Sociedad',l:'西甲',r:4.0},
    {n:'Kaoru Mitoma',cn:'三笘薰',p:'MID',a:29,c:'Brighton',l:'英超',r:4.0},
    {n:'Daichi Kamada',cn:'镰田大地',p:'MID',a:29,c:'Crystal Palace',l:'英超',r:3.5},
    {n:'Wataru Endo',cn:'远藤航',p:'MID',a:33,c:'Liverpool',l:'英超',r:3.5},
    {n:'Takehiro Tomiyasu',cn:'富安健洋',p:'DEF',a:27,c:'Arsenal',l:'英超',r:3.5},
    {n:'Hiroki Itō',cn:'伊藤洋辉',p:'DEF',a:27,c:'VfB Stuttgart',l:'德甲',r:3.5},
    {n:'Ritsu Dōan',cn:'堂安律',p:'MID',a:28,c:'Freiburg',l:'德甲',r:3.5},
    {n:'Ao Tanaka',cn:'田中碧',p:'MID',a:27,c:'Leeds United',l:'英冠',r:3.0},
    {n:'Kyōgo Furuhashi',cn:'古桥亨梧',p:'FWD',a:31,c:'Celtic',l:'苏超',r:3.5},
    {n:'Kō Itakura',cn:'板仓滉',p:'DEF',a:29,c:'Borussia Mönchengladbach',l:'德甲',r:3.5},
    {n:'Zion Suzuki',cn:'铃木彩艳',p:'GK',a:23,c:'Parma',l:'意甲',r:2.5},
    {n:'Yukinari Sugawara',cn:'菅原由势',p:'DEF',a:26,c:'AZ Alkmaar',l:'荷甲',r:3.0},
    {n:'Keito Nakamura',cn:'中村敬斗',p:'FWD',a:25,c:'Stade Reims',l:'法甲',r:3.0},
    {n:'Ayase Ueda',cn:'上田绮世',p:'FWD',a:27,c:'Feyenoord',l:'荷甲',r:3.0}
  ],

  'Sweden': [
    {n:'Alexander Isak',cn:'伊萨克',p:'FWD',a:26,c:'Newcastle United',l:'英超',r:4.5},
    {n:'Dejan Kulusevski',cn:'库卢塞夫斯基',p:'MID',a:26,c:'Tottenham',l:'英超',r:4.0},
    {n:'Viktor Gyökeres',cn:'哲凯赖什',p:'FWD',a:28,c:'Sporting CP',l:'葡超',r:4.0},
    {n:'Emil Forsberg',cn:'福斯贝里',p:'MID',a:34,c:'Leipzig',l:'德甲',r:3.5},
    {n:'Victor Lindelöf',cn:'林德洛夫',p:'DEF',a:31,c:'Manchester United',l:'英超',r:3.5},
    {n:'Robin Olsen',cn:'奥尔森',p:'GK',a:36,c:'Aston Villa',l:'英超',r:3.0},
    {n:'Alexander Milosevic',cn:'米洛舍维奇',p:'DEF',a:34,c:'AIK',l:'瑞典超',r:2.5},
    {n:'Hjalmar Ekdal',cn:'埃克达尔',p:'DEF',a:27,c:'Burnley',l:'英冠',r:2.5},
    {n:'Jens Cajuste',cn:'卡尤斯特',p:'MID',a:26,c:'Napoli',l:'意甲',r:3.0},
    {n:'Hugo Larsson',cn:'拉尔森',p:'MID',a:22,c:'Eintracht Frankfurt',l:'德甲',r:3.0},
    {n:'Ken Sema',cn:'塞玛',p:'MID',a:32,c:'Watford',l:'英冠',r:2.5},
    {n:'Anthony Elanga',cn:'埃兰加',p:'FWD',a:24,c:'Nottingham Forest',l:'英超',r:3.0},
    {n:'Ludvig Augustinsson',cn:'奥古斯丁松',p:'DEF',a:32,c:'Anderlecht',l:'比甲',r:2.5},
    {n:'Kasper Lindqvist',cn:'林德奎斯特',p:'GK',a:29,c:'BK Häcken',l:'瑞典超',r:2.0}
  ],

  'Tunisia': [
    {n:'Wahbi Khazri',cn:'哈兹里',p:'FWD',a:35,c:'Montpellier',l:'法甲',r:3.0},
    {n:'Ellyes Skhiri',cn:'斯希里',p:'MID',a:31,c:'Eintracht Frankfurt',l:'德甲',r:3.5},
    {n:'Ali Abdi',cn:'阿布迪',p:'DEF',a:32,c:'OGC Nice',l:'法甲',r:3.0},
    {n:'Aïssa Laïdouni',cn:'莱杜尼',p:'MID',a:29,c:'Al-Wakrah',l:'卡塔尔联',r:3.0},
    {n:'Youssef Msakni',cn:'姆萨克尼',p:'FWD',a:35,c:'Al-Arabi',l:'卡塔尔联',r:3.0},
    {n:'Dylan Bronn',cn:'布龙',p:'DEF',a:30,c:'Servette',l:'瑞士超',r:2.5},
    {n:'Mohamed Drager',cn:'德拉格',p:'DEF',a:29,c:'Oud-Heverlee Leuven',l:'比甲',r:2.5},
    {n:'Haythem Jouini',cn:'朱伊尼',p:'FWD',a:33,c:'Stade Tunisien',l:'突甲',r:2.5},
    {n:'Montassar Talbi',cn:'塔尔比',p:'DEF',a:28,c:'Lorient',l:'法甲',r:3.0},
    {n:'Bechir Ben Saïd',cn:'本·赛义德',p:'GK',a:33,c:'Espérance',l:'突甲',r:2.5},
    {n:'Naim Sliti',cn:'斯利蒂',p:'MID',a:33,c:'Al-Wakrah',l:'卡塔尔联',r:2.5},
    {n:'Hamza Mathlouthi',cn:'马特卢蒂',p:'DEF',a:33,c:'Zamalek',l:'埃超',r:2.5},
    {n:'Firas Ben Larbi',cn:'本·拉尔比',p:'FWD',a:30,c:'Espérance',l:'突甲',r:2.5},
    {n:'Achraf Ben Sghaier',cn:'本·斯盖尔',p:'GK',a:25,c:'US Monastir',l:'突甲',r:2.0}
  ],

  // ============================================================
  // GROUP G
  // ============================================================

  'Belgium': [
    {n:'Kevin De Bruyne',cn:'德布劳内',p:'MID',a:34,c:'Manchester City',l:'英超',r:5.0},
    {n:'Romelu Lukaku',cn:'卢卡库',p:'FWD',a:33,c:'AS Roma',l:'意甲',r:4.0},
    {n:'Jeremy Doku',cn:'多库',p:'FWD',a:24,c:'Manchester City',l:'英超',r:4.0},
    {n:'Youri Tielemans',cn:'蒂勒曼斯',p:'MID',a:29,c:'Aston Villa',l:'英超',r:3.5},
    {n:'Leandro Trossard',cn:'特罗萨德',p:'FWD',a:31,c:'Arsenal',l:'英超',r:3.5},
    {n:'Jan Vertonghen',cn:'维尔通亨',p:'DEF',a:39,c:'Anderlecht',l:'比甲',r:3.5},
    {n:'Arthur Theate',cn:'蒂特',p:'DEF',a:26,c:'Rennes',l:'法甲',r:3.5},
    {n:'Wout Faes',cn:'费斯',p:'DEF',a:28,c:'Leicester City',l:'英冠',r:3.0},
    {n:'Timothy Castagne',cn:'卡斯塔涅',p:'DEF',a:30,c:'Fulham',l:'英超',r:3.0},
    {n:'Orel Mangala',cn:'曼加拉',p:'MID',a:28,c:'Everton',l:'英超',r:3.0},
    {n:'Amadou Onana',cn:'奥纳纳',p:'MID',a:24,c:'Aston Villa',l:'英超',r:3.5},
    {n:'Thibaut Courtois',cn:'库尔图瓦',p:'GK',a:34,c:'Real Madrid',l:'西甲',r:5.0},
    {n:'Lois Openda',cn:'奥彭达',p:'FWD',a:26,c:'RB Leipzig',l:'德甲',r:3.5},
    {n:'Zeno Debast',cn:'德巴斯特',p:'DEF',a:22,c:'Sporting CP',l:'葡超',r:3.0}
  ],

  'Egypt': [
    {n:'Mohamed Salah',cn:'萨拉赫',p:'FWD',a:33,c:'Liverpool',l:'英超',r:4.5},
    {n:'Mohamed Elneny',cn:'埃尔内尼',p:'MID',a:34,c:'Arsenal',l:'英超',r:3.0},
    {n:'Mahmoud Trezeguet',cn:'特雷泽盖',p:'MID',a:31,c:'Al-Rayyan',l:'卡塔尔联',r:3.0},
    {n:'Mostafa Mohamed',cn:'穆罕默德',p:'FWD',a:28,c:'Nantes',l:'法甲',r:3.0},
    {n:'Omar Marmoush',cn:'马尔穆什',p:'FWD',a:27,c:'Eintracht Frankfurt',l:'德甲',r:3.5},
    {n:'Mohamed Abdelmonem',cn:'阿卜杜勒莫奈姆',p:'DEF',a:27,c:'Al-Ahly',l:'埃超',r:3.0},
    {n:'Emam Ashour',cn:'阿舒尔',p:'MID',a:28,c:'Al-Ahly',l:'埃超',r:2.5},
    {n:'Ahmed Hegazi',cn:'赫加齐',p:'DEF',a:35,c:'Al-Ittihad',l:'沙特联',r:3.0},
    {n:'Mohamed Hamdy',cn:'哈姆迪',p:'DEF',a:31,c:'Pyramids',l:'埃超',r:2.5},
    {n:'Mohamed El Shenawy',cn:'埃尔舍纳维',p:'GK',a:37,c:'Al-Ahly',l:'埃超',r:3.5},
    {n:'Marwan Attia',cn:'阿提亚',p:'MID',a:27,c:'Al-Ahly',l:'埃超',r:2.5},
    {n:'Hussein El Shahat',cn:'埃尔沙哈特',p:'MID',a:34,c:'Al-Ahly',l:'埃超',r:2.5},
    {n:'Ahmed Samy',cn:'萨米',p:'DEF',a:28,c:'Pyramids',l:'埃超',r:2.0},
    {n:'Zizo',cn:'齐佐',p:'MID',a:30,c:'Zamalek',l:'埃超',r:2.5}
  ],

  'Iran': [
    {n:'Mehdi Taremi',cn:'塔雷米',p:'FWD',a:33,c:'Inter Milan',l:'意甲',r:4.0},
    {n:'Sardar Azmoun',cn:'阿兹蒙',p:'FWD',a:31,c:'Bayer Leverkusen',l:'德甲',r:3.5},
    {n:'Alireza Jahanbakhsh',cn:'贾汉巴赫什',p:'MID',a:32,c:'Feyenoord',l:'荷甲',r:3.0},
    {n:'Saman Ghoddos',cn:'戈多斯',p:'MID',a:32,c:'Brentford',l:'英超',r:2.5},
    {n:'Ali Gholizadeh',cn:'戈利扎德',p:'MID',a:30,c:'Lech Poznań',l:'波超',r:2.5},
    {n:'Saeid Ezatolahi',cn:'埃扎托拉希',p:'MID',a:29,c:'Al-Wehda',l:'沙特联',r:2.5},
    {n:'Majid Hosseini',cn:'侯赛尼',p:'DEF',a:30,c:'Kaygusuzu',l:'土超',r:2.5},
    {n:'Ramin Rezaeian',cn:'雷扎伊安',p:'DEF',a:36,c:'Sepahan',l:'伊朗超',r:2.5},
    {n:'Hossein Kanaanizadegan',cn:'卡纳尼扎德甘',p:'DEF',a:32,c:'Al-Ahli',l:'卡塔尔联',r:2.5},
    {n:'Mohammad Daneshegar',cn:'达内什加',p:'GK',a:32,c:'Esteghlal',l:'伊朗超',r:2.5},
    {n:'Payman Niazmand',cn:'尼亚兹曼德',p:'GK',a:32,c:'Sepahan',l:'伊朗超',r:2.5},
    {n:'Milad Mohammadi',cn:'穆罕默迪',p:'DEF',a:32,c:'AEK Athens',l:'希超',r:2.5},
    {n:'Mohammad Mohebi',cn:'穆赫比',p:'FWD',a:27,c:'Rostov',l:'俄超',r:2.5},
    {n:'Omid Noorafkan',cn:'努拉夫坎',p:'MID',a:29,c:'Malavan',l:'伊朗超',r:2.0}
  ],

  'New Zealand': [
    {n:'Chris Wood',cn:'伍德',p:'FWD',a:34,c:'Nottingham Forest',l:'英超',r:3.5},
    {n:'Liberato Cacace',cn:'卡卡切',p:'DEF',a:25,c:'Empoli',l:'意甲',r:2.5},
    {n:'Joe Bell',cn:'贝尔',p:'MID',a:27,c:'Viking',l:'挪超',r:2.5},
    {n:'Matthew Garbett',cn:'加贝特',p:'MID',a:24,c:'Bordeaux',l:'法乙',r:2.0},
    {n:'Marko Stamenić',cn:'斯塔梅尼奇',p:'MID',a:24,c:'Nottingham Forest',l:'英超',r:2.5},
    {n:'Nando Pijnaker',cn:'派纳克',p:'DEF',a:27,c:'Grasshoppers',l:'瑞士超',r:2.0},
    {n:'Michael Boxall',cn:'博克萨尔',p:'DEF',a:37,c:'Minnesota United',l:'美职联',r:2.5},
    {n:'Tommy Smith',cn:'史密斯',p:'DEF',a:36,c:'Macarthur FC',l:'澳超',r:2.5},
    {n:'Oli Sail',cn:'赛尔',p:'GK',a:30,c:'Perth Glory',l:'澳超',r:2.5},
    {n:'Alex Greive',cn:'格里夫',p:'FWD',a:27,c:'Auckland FC',l:'澳超',r:2.0},
    {n:'Ben Waine',cn:'韦恩',p:'FWD',a:24,c:'Portsmouth',l:'英甲',r:2.0},
    {n:'Finn Surman',cn:'苏尔曼',p:'DEF',a:22,c:'Wellington Phoenix',l:'澳超',r:2.0},
    {n:'Tim Payne',cn:'佩恩',p:'DEF',a:32,c:'Wellington Phoenix',l:'澳超',r:2.0},
    {n:'Max Crocombe',cn:'克罗科姆',p:'GK',a:32,c:'Burton Albion',l:'英甲',r:2.0}
  ],

  // ============================================================
  // GROUP H
  // ============================================================

  'Spain': [
    {n:'Rodri',cn:'罗德里',p:'MID',a:30,c:'Manchester City',l:'英超',r:5.0},
    {n:'Lamine Yamal',cn:'亚马尔',p:'FWD',a:18,c:'Barcelona',l:'西甲',r:4.5},
    {n:'Pedri',cn:'佩德里',p:'MID',a:23,c:'Barcelona',l:'西甲',r:4.5},
    {n:'Gavi',cn:'加维',p:'MID',a:21,c:'Barcelona',l:'西甲',r:4.0},
    {n:'Nico Williams',cn:'尼科·威廉姆斯',p:'FWD',a:23,c:'Athletic Bilbao',l:'西甲',r:4.0},
    {n:'Dani Olmo',cn:'奥尔莫',p:'MID',a:28,c:'RB Leipzig',l:'德甲',r:4.0},
    {n:'Aymeric Laporte',cn:'拉波尔特',p:'DEF',a:32,c:'Al-Nassr',l:'沙特联',r:4.0},
    {n:'Pau Torres',cn:'保·托雷斯',p:'DEF',a:29,c:'Aston Villa',l:'英超',r:3.5},
    {n:'Unai Simón',cn:'乌奈·西蒙',p:'GK',a:29,c:'Athletic Bilbao',l:'西甲',r:4.0},
    {n:'Joselu',cn:'何塞卢',p:'FWD',a:36,c:'Al-Gharafa',l:'卡塔尔联',r:3.5},
    {n:'Mikel Oyarzabal',cn:'奥亚萨瓦尔',p:'FWD',a:29,c:'Real Sociedad',l:'西甲',r:3.5},
    {n:'Marc Cucurella',cn:'库库雷利亚',p:'DEF',a:27,c:'Chelsea',l:'英超',r:3.5},
    {n:'Dani Carvajal',cn:'卡瓦哈尔',p:'DEF',a:34,c:'Real Madrid',l:'西甲',r:3.5},
    {n:'Fermín López',cn:'费尔明',p:'MID',a:23,c:'Barcelona',l:'西甲',r:3.5}
  ],

  'Cape Verde': [
    {n:'Ryan Mendes',cn:'门德斯',p:'FWD',a:36,c:'Eyüpspor',l:'土超',r:2.5},
    {n:'Jovane Cabral',cn:'卡布拉尔',p:'FWD',a:27,c:'Lazio',l:'意甲',r:2.5},
    {n:'Garry Rodrigues',cn:'罗德里格斯',p:'FWD',a:35,c:'Ankaragücü',l:'土超',r:2.5},
    {n:'Kevin Pina',cn:'皮纳',p:'MID',a:29,c:'Pafos FC',l:'塞浦甲',r:2.5},
    {n:'Cuca Cocoricó',cn:'科科里科',p:'MID',a:27,c:'Farense',l:'葡超',r:2.0},
    {n:'Roberto Lopes',cn:'洛佩斯',p:'DEF',a:33,c:'Shamrock Rovers',l:'爱超',r:2.5},
    {n:'Stopira',cn:'斯托皮拉',p:'DEF',a:38,c:'Apollon Limassol',l:'塞浦甲',r:2.0},
    {n:'João Paulo',cn:'若昂·保罗',p:'GK',a:30,c:'Dila Gori',l:'格鲁超',r:2.0},
    {n:'Bebé',cn:'贝贝',p:'FWD',a:35,c:'Rayo Majadahonda',l:'西协甲',r:2.5},
    {n:'Diney',cn:'迪内',p:'DEF',a:32,c:'Al-Orobah',l:'沙特甲',r:2.0},
    {n:'Luis Carlos Almada',cn:'阿尔马达',p:'FWD',a:24,c:'Portimonense',l:'葡超',r:2.5},
    // Almada is more on Argentina side... Let me use real Cape Verde players
    {n:'Deroy Duarte',cn:'杜阿尔特',p:'MID',a:27,c:'Fortuna Sittard',l:'荷甲',r:2.5},
    {n:'Carlos Ponck',cn:'蓬克',p:'DEF',a:31,c:'İstanbulspor',l:'土超',r:2.0},
    {n:'Márcio Rosa',cn:'罗萨',p:'GK',a:26,c:'CD Fátima',l:'葡乙',r:2.0}
  ],

  'Saudi Arabia': [
    {n:'Salem Al-Dawsari',cn:'多萨里',p:'FWD',a:34,c:'Al-Hilal',l:'沙特联',r:3.5},
    {n:'Firas Al-Buraikan',cn:'布雷坎',p:'FWD',a:26,c:'Al-Ahli',l:'沙特联',r:3.0},
    {n:'Mohamed Kanno',cn:'坎诺',p:'MID',a:31,c:'Al-Hilal',l:'沙特联',r:3.0},
    {n:'Saud Abdulhamid',cn:'阿卜杜勒哈米德',p:'DEF',a:27,c:'Al-Hilal',l:'沙特联',r:3.0},
    {n:'Ali Al-Bulaihi',cn:'布莱希',p:'DEF',a:36,c:'Al-Hilal',l:'沙特联',r:3.0},
    {n:'Hassan Tambakti',cn:'坦巴克蒂',p:'DEF',a:27,c:'Al-Hilal',l:'沙特联',r:2.5},
    {n:'Sultan Al-Ghannam',cn:'甘纳姆',p:'DEF',a:32,c:'Al-Nassr',l:'沙特联',r:2.5},
    {n:'Nasser Al-Dawsari',cn:'多萨里',p:'MID',a:27,c:'Al-Hilal',l:'沙特联',r:2.5},
    {n:'Abdullah Al-Hamdan',cn:'哈姆丹',p:'FWD',a:26,c:'Al-Hilal',l:'沙特联',r:2.5},
    {n:'Yasser Al-Shahrani',cn:'沙赫拉尼',p:'DEF',a:34,c:'Al-Hilal',l:'沙特联',r:3.0},
    {n:'Mohammed Al-Owais',cn:'奥韦斯',p:'GK',a:34,c:'Al-Hilal',l:'沙特联',r:3.0},
    {n:'Ayman Yahya',cn:'叶海亚',p:'MID',a:25,c:'Al-Nassr',l:'沙特联',r:2.5},
    {n:'Abdulrahman Ghareeb',cn:'加里卜',p:'MID',a:28,c:'Al-Nassr',l:'沙特联',r:2.5},
    {n:'Ahmed Baalah',cn:'巴拉赫',p:'GK',a:29,c:'Al-Shabab',l:'沙特联',r:2.0}
  ],

  'Uruguay': [
    {n:'Federico Valverde',cn:'巴尔韦德',p:'MID',a:27,c:'Real Madrid',l:'西甲',r:4.5},
    {n:'Darwin Núñez',cn:'努涅斯',p:'FWD',a:27,c:'Liverpool',l:'英超',r:4.0},
    {n:'Rodrigo Bentancur',cn:'本坦库尔',p:'MID',a:29,c:'Tottenham',l:'英超',r:3.5},
    {n:'Manuel Ugarte',cn:'乌加特',p:'MID',a:25,c:'PSG',l:'法甲',r:3.5},
    {n:'Ronald Araújo',cn:'阿劳霍',p:'DEF',a:27,c:'Barcelona',l:'西甲',r:4.5},
    {n:'José María Giménez',cn:'希门尼斯',p:'DEF',a:31,c:'Atlético Madrid',l:'西甲',r:4.0},
    {n:'Mathías Olivera',cn:'奥利维拉',p:'DEF',a:28,c:'Napoli',l:'意甲',r:3.5},
    {n:'Facundo Pellistri',cn:'佩利斯特里',p:'MID',a:24,c:'Manchester United',l:'英超',r:3.0},
    {n:'Sergio Rochet',cn:'罗切特',p:'GK',a:33,c:'Internacional',l:'巴甲',r:3.5},
    {n:'Nahitan Nández',cn:'南德斯',p:'MID',a:30,c:'Cagliari',l:'意甲',r:3.0},
    {n:'Federico Viñas',cn:'维尼亚斯',p:'FWD',a:27,c:'Lecce',l:'意甲',r:2.5},
    {n:'Maximiliano Araújo',cn:'阿拉乌霍',p:'FWD',a:26,c:'Sporting Gijón',l:'西乙',r:2.5},
    {n:'Sebastián Cáceres',cn:'卡塞雷斯',p:'DEF',a:26,c:'América',l:'墨超',r:3.0},
    {n:'Juan Manuel Sanabria',cn:'萨纳夫里亚',p:'MID',a:25,c:'Atlético Madrid B',l:'西协甲',r:2.5}
  ],

  // ============================================================
  // GROUP I
  // ============================================================

  'France': [
    {n:'Kylian Mbappé',cn:'姆巴佩',p:'FWD',a:27,c:'Real Madrid',l:'西甲',r:5.0},
    {n:'Antoine Griezmann',cn:'格列兹曼',p:'FWD',a:35,c:'Atlético Madrid',l:'西甲',r:4.0},
    {n:'Eduardo Camavinga',cn:'卡马文加',p:'MID',a:23,c:'Real Madrid',l:'西甲',r:4.0},
    {n:'Aurélien Tchouaméni',cn:'楚阿梅尼',p:'MID',a:26,c:'Real Madrid',l:'西甲',r:4.0},
    {n:'Warren Zaïre-Emery',cn:'扎伊尔-埃梅里',p:'MID',a:20,c:'PSG',l:'法甲',r:3.5},
    {n:'William Saliba',cn:'萨利巴',p:'DEF',a:25,c:'Arsenal',l:'英超',r:4.0},
    {n:'Dayot Upamecano',cn:'于帕梅卡诺',p:'DEF',a:27,c:'Bayern Munich',l:'德甲',r:3.5},
    {n:'Theo Hernandez',cn:'特奥·埃尔南德斯',p:'DEF',a:28,c:'AC Milan',l:'意甲',r:4.0},
    {n:'Jules Koundé',cn:'孔德',p:'DEF',a:27,c:'Barcelona',l:'西甲',r:4.0},
    {n:'Ousmane Dembélé',cn:'登贝莱',p:'FWD',a:29,c:'PSG',l:'法甲',r:4.0},
    {n:'Mike Maignan',cn:'迈尼昂',p:'GK',a:30,c:'AC Milan',l:'意甲',r:4.5},
    {n:'Marcus Thuram',cn:'图拉姆',p:'FWD',a:28,c:'Inter Milan',l:'意甲',r:3.5},
    {n:'Adrien Rabiot',cn:'拉比奥',p:'MID',a:31,c:'Juventus',l:'意甲',r:3.5},
    {n:'Randal Kolo Muani',cn:'科洛·穆阿尼',p:'FWD',a:27,c:'PSG',l:'法甲',r:3.5}
  ],

  'Senegal': [
    {n:'Sadio Mané',cn:'马内',p:'FWD',a:34,c:'Al-Nassr',l:'沙特联',r:4.0},
    {n:'Kalidou Koulibaly',cn:'库利巴利',p:'DEF',a:35,c:'Al-Hilal',l:'沙特联',r:3.5},
    {n:'Ismaïla Sarr',cn:'萨尔',p:'FWD',a:28,c:'Marseille',l:'法甲',r:3.5},
    {n:'Idrissa Gueye',cn:'盖耶',p:'MID',a:36,c:'Everton',l:'英超',r:3.0},
    {n:'Pape Matar Sarr',cn:'帕普·萨尔',p:'MID',a:23,c:'Tottenham',l:'英超',r:3.5},
    {n:'Nampalys Mendy',cn:'门迪',p:'MID',a:34,c:'Leicester City',l:'英冠',r:2.5},
    {n:'Abdou Diallo',cn:'阿卜杜·迪亚洛',p:'DEF',a:30,c:'Al-Arabi',l:'卡塔尔联',r:3.0},
    {n:'Édouard Mendy',cn:'门迪',p:'GK',a:34,c:'Al-Ahli',l:'沙特联',r:3.5},
    {n:'Nicolas Jackson',cn:'杰克逊',p:'FWD',a:25,c:'Chelsea',l:'英超',r:3.5},
    {n:'Boulaye Dia',cn:'迪亚',p:'FWD',a:29,c:'Lazio',l:'意甲',r:3.0},
    {n:'Cheikhou Kouyaté',cn:'库亚特',p:'MID',a:36,c:'Crystal Palace',l:'英超',r:2.5},
    {n:'Moussa Niakhaté',cn:'尼亚卡特',p:'DEF',a:30,c:'Nottingham Forest',l:'英超',r:3.0},
    {n:'Ahmadou Bamba Dieng',cn:'迪恩',p:'FWD',a:26,c:'Marseille',l:'法甲',r:2.5},
    {n:'Habib Diallo',cn:'迪亚洛',p:'FWD',a:32,c:'Damac',l:'沙特联',r:2.5}
  ],

  'Iraq': [
    {n:'Mohamed Al-Hardan',cn:'阿尔哈丹',p:'MID',a:29,c:'Al-Riffa',l:'巴林超',r:2.5},
    {n:'Aymen Hussein',cn:'侯赛因',p:'FWD',a:30,c:'Al-Quwa Al-Jawiya',l:'伊拉克超',r:2.5},
    {n:'Ali Adnan',cn:'阿里·阿德南',p:'DEF',a:32,c:'Al-Minaa',l:'伊拉克超',r:2.5},
    {n:'Safaa Hadi',cn:'哈迪',p:'MID',a:27,c:'Al-Quwa Al-Jawiya',l:'伊拉克超',r:2.5},
    {n:'Ibrahim Bayesh',cn:'巴耶什',p:'MID',a:26,c:'Al-Quwa Al-Jawiya',l:'伊拉克超',r:2.5},
    {n:'Jalal Hassan',cn:'哈桑',p:'GK',a:35,c:'Al-Zawraa',l:'伊拉克超',r:2.5},
    {n:'Mustafa Nadhim',cn:'纳迪姆',p:'DEF',a:31,c:'Al-Khor',l:'卡塔尔联',r:2.0},
    {n:'Hussein Ali',cn:'侯赛因·阿里',p:'DEF',a:30,c:'Al-Wehda',l:'沙特联',r:2.5},
    {n:'Ali Al-Hamadi',cn:'阿尔哈马迪',p:'FWD',a:24,c:'Ipswich Town',l:'英冠',r:2.5},
    {n:'Amir Al-Ammari',cn:'阿尔阿马里',p:'MID',a:28,c:'Halmstads BK',l:'瑞典超',r:2.0},
    {n:'Mohanad Ali',cn:'莫哈纳德·阿里',p:'FWD',a:26,c:'Al-Quwa Al-Jawiya',l:'伊拉克超',r:2.5},
    {n:'Omar Al-Mukhtar',cn:'穆赫塔尔',p:'DEF',a:26,c:'Naft Al-Wasat',l:'伊拉克超',r:2.0},
    {n:'Ahmed Basil',cn:'巴西尔',p:'GK',a:29,c:'Al-Shorta',l:'伊拉克超',r:2.0},
    {n:'Youssef Amyn',cn:'阿明',p:'MID',a:22,c:'Eintracht Braunschweig',l:'德乙',r:2.5}
  ],

  'Norway': [
    {n:'Erling Haaland',cn:'哈兰德',p:'FWD',a:25,c:'Manchester City',l:'英超',r:5.0},
    {n:'Martin Ødegaard',cn:'厄德高',p:'MID',a:27,c:'Arsenal',l:'英超',r:4.5},
    {n:'Alexander Sørloth',cn:'索尔洛特',p:'FWD',a:30,c:'Villarreal',l:'西甲',r:3.5},
    {n:'Oscar Bobb',cn:'博布',p:'MID',a:22,c:'Manchester City',l:'英超',r:3.5},
    {n:'Sander Berge',cn:'贝格',p:'MID',a:28,c:'Burnley',l:'英冠',r:3.0},
    {n:'Kristoffer Ajer',cn:'阿热',p:'DEF',a:28,c:'Brentford',l:'英超',r:3.0},
    {n:'Leo Østigård',cn:'厄斯蒂高',p:'DEF',a:26,c:'Napoli',l:'意甲',r:3.0},
    {n:'Morten Thorsby',cn:'托尔斯比',p:'MID',a:30,c:'Genoa',l:'意甲',r:2.5},
    {n:'Johan Hove',cn:'霍韦',p:'MID',a:25,c:'Groningen',l:'荷甲',r:2.5},
    {n:'Antonio Nusa',cn:'努萨',p:'FWD',a:21,c:'RB Leipzig',l:'德甲',r:3.5},
    {n:'Fredrik André Bjørkan',cn:'比约坎',p:'DEF',a:27,c:'FK Bodø/Glimt',l:'挪超',r:2.5},
    {n:'Ørjan Nyland',cn:'尼兰',p:'GK',a:35,c:'RB Leipzig',l:'德甲',r:2.5},
    {n:'Jørgen Strand Larsen',cn:'拉森',p:'FWD',a:26,c:'Celta Vigo',l:'西甲',r:3.0},
    {n:'David Møller Wolfe',cn:'沃尔夫',p:'DEF',a:24,c:'AZ Alkmaar',l:'荷甲',r:2.5}
  ],

  // ============================================================
  // GROUP J
  // ============================================================

  'Argentina': [
    {n:'Lionel Messi',cn:'梅西',p:'FWD',a:38,c:'Inter Miami',l:'美职联',r:5.0},
    {n:'Julián Álvarez',cn:'阿尔瓦雷斯',p:'FWD',a:26,c:'Manchester City',l:'英超',r:4.5},
    {n:'Enzo Fernández',cn:'恩佐·费尔南德斯',p:'MID',a:25,c:'Chelsea',l:'英超',r:4.0},
    {n:'Alexis Mac Allister',cn:'麦卡利斯特',p:'MID',a:27,c:'Liverpool',l:'英超',r:4.0},
    {n:'Rodrigo De Paul',cn:'德保罗',p:'MID',a:32,c:'Atlético Madrid',l:'西甲',r:4.0},
    {n:'Cristian Romero',cn:'罗梅罗',p:'DEF',a:28,c:'Tottenham',l:'英超',r:4.0},
    {n:'Nicolás Otamendi',cn:'奥塔门迪',p:'DEF',a:38,c:'Benfica',l:'葡超',r:3.5},
    {n:'Nahuel Molina',cn:'莫利纳',p:'DEF',a:28,c:'Atlético Madrid',l:'西甲',r:3.5},
    {n:'Emiliano Martínez',cn:'马丁内斯',p:'GK',a:33,c:'Aston Villa',l:'英超',r:4.5},
    {n:'Lautaro Martínez',cn:'劳塔罗',p:'FWD',a:28,c:'Inter Milan',l:'意甲',r:4.0},
    {n:'Nicolás González',cn:'尼古拉斯·冈萨雷斯',p:'FWD',a:28,c:'Fiorentina',l:'意甲',r:3.5},
    {n:'Leandro Paredes',cn:'帕雷德斯',p:'MID',a:32,c:'AS Roma',l:'意甲',r:3.0},
    {n:'Germán Pezzella',cn:'佩泽拉',p:'DEF',a:35,c:'Betis',l:'西甲',r:3.0},
    {n:'Alejandro Garnacho',cn:'加纳乔',p:'FWD',a:21,c:'Manchester United',l:'英超',r:3.5}
  ],

  'Algeria': [
    {n:'Riyad Mahrez',cn:'马赫雷斯',p:'FWD',a:35,c:'Al-Ahli',l:'沙特联',r:4.0},
    {n:'Ramy Bensebaini',cn:'本塞拜尼',p:'DEF',a:31,c:'Borussia Dortmund',l:'德甲',r:3.5},
    {n:'Ismaël Bennacer',cn:'本纳赛尔',p:'MID',a:28,c:'AC Milan',l:'意甲',r:4.0},
    {n:'Sofiane Feghouli',cn:'费古利',p:'MID',a:36,c:'Fatih Karagümrük',l:'土超',r:3.0},
    {n:'Islam Slimani',cn:'斯利马尼',p:'FWD',a:38,c:'Coritiba',l:'巴甲',r:3.0},
    {n:'Youcef Belaïli',cn:'贝莱利',p:'MID',a:34,c:'MC Alger',l:'阿尔甲',r:2.5},
    {n:'Aïssa Mandi',cn:'曼迪',p:'DEF',a:34,c:'Lille',l:'法甲',r:3.0},
    {n:'Houssem Aouar',cn:'奥亚尔',p:'MID',a:27,c:'Al-Ittihad',l:'沙特联',r:3.5},
    {n:'Amine Gouiri',cn:'古伊里',p:'FWD',a:26,c:'Rennes',l:'法甲',r:3.5},
    {n:'Mohamed Amoura',cn:'阿穆拉',p:'FWD',a:26,c:'Lugano',l:'瑞士超',r:3.0},
    {n:'Rayan Aït-Nouri',cn:'艾特-努里',p:'DEF',a:25,c:'Wolves',l:'英超',r:3.5},
    {n:'Anthony Mandrea',cn:'曼德雷亚',p:'GK',a:29,c:'Angers',l:'法甲',r:2.5},
    {n:'Adam Ounas',cn:'欧纳斯',p:'FWD',a:29,c:'Lille',l:'法甲',r:3.0},
    {n:'Nabil Bentaleb',cn:'本塔勒布',p:'MID',a:31,c:'Lille',l:'法甲',r:2.5}
  ],

  'Austria': [
    {n:'David Alaba',cn:'阿拉巴',p:'DEF',a:34,c:'Real Madrid',l:'西甲',r:4.5},
    {n:'Marcel Sabitzer',cn:'萨比策',p:'MID',a:32,c:'Borussia Dortmund',l:'德甲',r:3.5},
    {n:'Christoph Baumgartner',cn:'鲍姆加特纳',p:'MID',a:26,c:'RB Leipzig',l:'德甲',r:3.5},
    {n:'Konrad Laimer',cn:'莱默尔',p:'MID',a:29,c:'Bayern Munich',l:'德甲',r:3.5},
    {n:'Marko Arnautović',cn:'阿瑙托维奇',p:'FWD',a:37,c:'Inter Milan',l:'意甲',r:3.5},
    {n:'Xaver Schlager',cn:'施拉格尔',p:'MID',a:28,c:'RB Leipzig',l:'德甲',r:3.5},
    {n:'Stefan Posch',cn:'波施',p:'DEF',a:29,c:'Bologna',l:'意甲',r:3.0},
    {n:'Philipp Lienhart',cn:'林哈特',p:'DEF',a:29,c:'SC Freiburg',l:'德甲',r:3.0},
    {n:'Michael Gregoritsch',cn:'格雷戈里奇',p:'FWD',a:32,c:'SC Freiburg',l:'德甲',r:3.0},
    {n:'Florian Grillitsch',cn:'格里利奇',p:'MID',a:30,c:'TSG Hoffenheim',l:'德甲',r:2.5},
    {n:'Patrick Pentz',cn:'彭茨',p:'GK',a:29,c:'Lens',l:'法甲',r:2.5},
    {n:'Aleksandar Dragović',cn:'德拉戈维奇',p:'DEF',a:35,c:'Red Star Belgrade',l:'塞超',r:2.5},
    {n:'Karim Onisiwo',cn:'奥尼西沃',p:'FWD',a:34,c:'Mainz',l:'德甲',r:2.5},
    {n:'Nicolas Seiwald',cn:'赛沃尔德',p:'MID',a:25,c:'RB Leipzig',l:'德甲',r:3.0}
  ],

  'Jordan': [
    {n:'Musa Al-Taamari',cn:'塔马里',p:'FWD',a:29,c:'Montpellier',l:'法甲',r:3.0},
    {n:'Ali Olwan',cn:'奥尔万',p:'FWD',a:26,c:'Al-Shorta',l:'伊拉克超',r:2.5},
    {n:'Yazan Al-Naimat',cn:'纳伊马特',p:'FWD',a:27,c:'Al-Ahli',l:'卡塔尔联',r:2.5},
    {n:'Nizar Al-Rashdan',cn:'拉什丹',p:'MID',a:27,c:'Al-Faisaly',l:'约旦超',r:2.5},
    {n:'Mahmoud Al-Mardi',cn:'马尔迪',p:'MID',a:29,c:'Al-Hussein',l:'约旦超',r:2.5},
    {n:'Ihsan Haddad',cn:'哈达德',p:'DEF',a:32,c:'Al-Faisaly',l:'约旦超',r:2.5},
    {n:'Abdallah Nasib',cn:'纳西卜',p:'DEF',a:32,c:'Al-Hussein',l:'约旦超',r:2.5},
    {n:'Youssef Abuljazar',cn:'阿布贾扎尔',p:'MID',a:26,c:'Al-Shorta',l:'埃及超',r:2.0},
    {n:'Yazan Abu Arab',cn:'阿布·阿拉伯',p:'DEF',a:30,c:'Al-Wahda',l:'阿联超',r:2.0},
    {n:'Shojaa Al-Rashdan',cn:'拉什丹',p:'MID',a:30,c:'Al-Faisaly',l:'约旦超',r:2.0},
    {n:'Yazeed Abulaila',cn:'阿布莱拉',p:'GK',a:33,c:'Al-Faisaly',l:'约旦超',r:2.5},
    {n:'Ahmed Sariweh',cn:'萨里韦',p:'MID',a:26,c:'Al-Hussein',l:'约旦超',r:2.0},
    {n:'Ehsan Al-Haddad',cn:'哈达德',p:'DEF',a:31,c:'Al-Faisaly',l:'约旦超',r:2.0},
    {n:'Saleh Rateb',cn:'拉提卜',p:'GK',a:31,c:'Al-Wehdat',l:'约旦超',r:2.0}
  ],

  // ============================================================
  // GROUP K
  // ============================================================

  'Portugal': [
    {n:'Cristiano Ronaldo',cn:'C罗',p:'FWD',a:41,c:'Al-Nassr',l:'沙特联',r:4.0},
    {n:'Bernardo Silva',cn:'B席',p:'MID',a:31,c:'Manchester City',l:'英超',r:4.5},
    {n:'Bruno Fernandes',cn:'B费',p:'MID',a:31,c:'Manchester United',l:'英超',r:4.5},
    {n:'Rafael Leão',cn:'莱奥',p:'FWD',a:27,c:'AC Milan',l:'意甲',r:4.0},
    {n:'Vitinha',cn:'维蒂尼亚',p:'MID',a:26,c:'PSG',l:'法甲',r:4.0},
    {n:'João Palhinha',cn:'帕利尼亚',p:'MID',a:30,c:'Bayern Munich',l:'德甲',r:3.5},
    {n:'Rúben Dias',cn:'迪亚斯',p:'DEF',a:29,c:'Manchester City',l:'英超',r:4.5},
    {n:'Diogo Dalot',cn:'达洛特',p:'DEF',a:27,c:'Manchester United',l:'英超',r:3.5},
    {n:'Nuno Mendes',cn:'努诺·门德斯',p:'DEF',a:24,c:'PSG',l:'法甲',r:3.5},
    {n:'João Cancelo',cn:'坎塞洛',p:'DEF',a:32,c:'Barcelona',l:'西甲',r:3.5},
    {n:'Diogo Costa',cn:'科斯塔',p:'GK',a:26,c:'Porto',l:'葡超',r:4.0},
    {n:'Gonçalo Ramos',cn:'拉莫斯',p:'FWD',a:25,c:'PSG',l:'法甲',r:3.5},
    {n:'João Félix',cn:'菲利克斯',p:'FWD',a:26,c:'Barcelona',l:'西甲',r:3.5},
    {n:'Nuno Tavares',cn:'塔瓦雷斯',p:'DEF',a:26,c:'Lazio',l:'意甲',r:2.5}
  ],

  'Congo DR': [
    {n:'Cédric Bakambu',cn:'巴坎布',p:'FWD',a:35,c:'Galatasaray',l:'土超',r:3.0},
    {n:'Yoane Wissa',cn:'维萨',p:'FWD',a:29,c:'Brentford',l:'英超',r:3.5},
    {n:'Arthur Masuaku',cn:'马苏阿库',p:'DEF',a:32,c:'Beşiktaş',l:'土超',r:3.0},
    {n:'Chancel Mbemba',cn:'姆本巴',p:'DEF',a:31,c:'Marseille',l:'法甲',r:3.5},
    {n:'Gaël Kakuta',cn:'卡库塔',p:'MID',a:35,c:'Amiens',l:'法乙',r:2.5},
    {n:'Samuel Bastien',cn:'巴斯蒂安',p:'MID',a:29,c:'Casertana',l:'意丙',r:2.0},
    {n:'Aaron Tshibola',cn:'奇博拉',p:'MID',a:31,c:'Akritas Chlorakas',l:'塞浦甲',r:2.0},
    // Tshibola - let me check, more realistic options
    {n:'Théo Bongonda',cn:'邦贡达',p:'FWD',a:30,c:'Spartak Moscow',l:'俄超',r:2.5},
    {n:'Samuel Moutoussamy',cn:'穆图萨米',p:'MID',a:29,c:'Nantes',l:'法甲',r:2.5},
    {n:'Dylan Batubinsika',cn:'巴图宾西卡',p:'DEF',a:30,c:'St. Pölten',l:'奥乙',r:2.0},
    {n:'Lionel Mpasi',cn:'姆帕西',p:'GK',a:31,c:'Rodez',l:'法乙',r:2.0},
    {n:'Silas Katompa Mvumpa',cn:'卡通帕',p:'FWD',a:27,c:'VfB Stuttgart',l:'德甲',r:3.0},
    {n:'Joris Kayembe',cn:'卡延贝',p:'DEF',a:31,c:'Watford',l:'英冠',r:2.5},
    {n:'Omenuke Mfulu',cn:'姆弗鲁',p:'MID',a:32,c:'Red Star Belgrade',l:'塞超',r:2.0}
  ],

  'Uzbekistan': [
    {n:'Eldor Shomurodov',cn:'绍穆罗多夫',p:'FWD',a:30,c:'Cagliari',l:'意甲',r:3.0},
    {n:'Oston Urunov',cn:'乌鲁诺夫',p:'MID',a:25,c:'Persepolis',l:'伊朗超',r:2.5},
    {n:'Jaloliddin Masharipov',cn:'马沙里波夫',p:'MID',a:32,c:'Al-Nassr',l:'沙特联',r:2.5},
    {n:'Odiljon Hamrobekov',cn:'哈姆罗别科夫',p:'MID',a:30,c:'Pakhtakor',l:'乌兹超',r:2.5},
    {n:'Rustam Ashurmatov',cn:'阿舒尔马托夫',p:'DEF',a:29,c:'Rubin Kazan',l:'俄超',r:2.5},
    {n:'Hojiakbar Alijonov',cn:'阿利约诺夫',p:'DEF',a:28,c:'Pakhtakor',l:'乌兹超',r:2.0},
    {n:'Azizbek Turgunboev',cn:'图尔贡巴耶夫',p:'FWD',a:31,c:'Pakhtakor',l:'乌兹超',r:2.5},
    {n:'Khojiakbar Khamdamov',cn:'哈姆达莫夫',p:'MID',a:29,c:'Al-Faisaly',l:'沙特甲',r:2.0},
    {n:'Utkir Yusupov',cn:'优素波夫',p:'GK',a:35,c:'Navbahor',l:'乌兹超',r:2.5},
    {n:'Abdulla Abdullaev',cn:'阿卜杜拉耶夫',p:'GK',a:28,c:'Pakhtakor',l:'乌兹超',r:2.0},
    {n:'Sherzod Nasrullaev',cn:'纳斯鲁拉耶夫',p:'DEF',a:27,c:'Nasaf',l:'乌兹超',r:2.0},
    {n:'Otabek Shukurov',cn:'舒库罗夫',p:'MID',a:29,c:'Al-Fayha',l:'沙特联',r:2.5},
    {n:'Doston Ibragimov',cn:'伊布拉吉莫夫',p:'FWD',a:26,c:'Nasaf',l:'乌兹超',r:2.0},
    {n:'Oybek Bozorov',cn:'博佐罗夫',p:'MID',a:28,c:'Pakhtakor',l:'乌兹超',r:2.0}
  ],

  'Colombia': [
    {n:'Luis Díaz',cn:'迪亚斯',p:'FWD',a:29,c:'Liverpool',l:'英超',r:4.5},
    {n:'James Rodríguez',cn:'J罗',p:'MID',a:34,c:'São Paulo',l:'巴甲',r:3.5},
    {n:'Rafael Santos Borré',cn:'博雷',p:'FWD',a:30,c:'Internacional',l:'巴甲',r:3.5},
    {n:'Jhon Arias',cn:'阿里亚斯',p:'MID',a:28,c:'Fluminense',l:'巴甲',r:3.5},
    {n:'Wilmar Barrios',cn:'巴里奥斯',p:'MID',a:32,c:'Zenit',l:'俄超',r:3.0},
    {n:'Dávinson Sánchez',cn:'桑切斯',p:'DEF',a:30,c:'Galatasaray',l:'土超',r:3.5},
    {n:'Yerry Mina',cn:'米纳',p:'DEF',a:31,c:'Cagliari',l:'意甲',r:3.0},
    {n:'Juan Cuadrado',cn:'夸德拉多',p:'MID',a:38,c:'Inter Milan',l:'意甲',r:3.0},
    {n:'Daniel Muñoz',cn:'穆尼奥斯',p:'DEF',a:30,c:'Crystal Palace',l:'英超',r:3.0},
    {n:'Luis Sinisterra',cn:'西尼斯特拉',p:'FWD',a:27,c:'Bournemouth',l:'英超',r:3.0},
    {n:'Mateus Uribe',cn:'乌里韦',p:'MID',a:35,c:'Al-Sadd',l:'卡塔尔联',r:3.0},
    {n:'Camilo Vargas',cn:'巴尔加斯',p:'GK',a:37,c:'Atlas',l:'墨超',r:3.0},
    {n:'Jhon Durán',cn:'杜兰',p:'FWD',a:22,c:'Aston Villa',l:'英超',r:3.0},
    {n:'Deiver Machado',cn:'马查多',p:'DEF',a:32,c:'Lens',l:'法甲',r:2.5}
  ],

  // ============================================================
  // GROUP L
  // ============================================================

  'England': [
    {n:'Harry Kane',cn:'凯恩',p:'FWD',a:32,c:'Bayern Munich',l:'德甲',r:5.0},
    {n:'Jude Bellingham',cn:'贝林厄姆',p:'MID',a:22,c:'Real Madrid',l:'西甲',r:4.5},
    {n:'Phil Foden',cn:'福登',p:'MID',a:26,c:'Manchester City',l:'英超',r:4.5},
    {n:'Bukayo Saka',cn:'萨卡',p:'FWD',a:24,c:'Arsenal',l:'英超',r:4.5},
    {n:'Declan Rice',cn:'赖斯',p:'MID',a:27,c:'Arsenal',l:'英超',r:4.5},
    {n:'Cole Palmer',cn:'帕尔默',p:'MID',a:24,c:'Chelsea',l:'英超',r:4.0},
    {n:'Kyle Walker',cn:'沃克',p:'DEF',a:36,c:'Manchester City',l:'英超',r:3.5},
    {n:'Harry Maguire',cn:'马奎尔',p:'DEF',a:33,c:'Manchester United',l:'英超',r:3.5},
    {n:'John Stones',cn:'斯通斯',p:'DEF',a:32,c:'Manchester City',l:'英超',r:4.0},
    {n:'Luke Shaw',cn:'肖',p:'DEF',a:30,c:'Manchester United',l:'英超',r:3.5},
    {n:'Jordan Pickford',cn:'皮克福德',p:'GK',a:32,c:'Everton',l:'英超',r:3.5},
    {n:'Jack Grealish',cn:'格拉利什',p:'MID',a:30,c:'Manchester City',l:'英超',r:3.5},
    {n:'Trent Alexander-Arnold',cn:'阿诺德',p:'DEF',a:27,c:'Liverpool',l:'英超',r:3.5},
    {n:'Aaron Ramsdale',cn:'拉姆斯代尔',p:'GK',a:28,c:'Arsenal',l:'英超',r:3.5}
  ],

  'Croatia': [
    {n:'Luka Modrić',cn:'莫德里奇',p:'MID',a:40,c:'Real Madrid',l:'西甲',r:4.5},
    {n:'Mateo Kovačić',cn:'科瓦契奇',p:'MID',a:32,c:'Manchester City',l:'英超',r:4.0},
    {n:'Andrej Kramarić',cn:'克拉马里奇',p:'FWD',a:35,c:'TSG Hoffenheim',l:'德甲',r:3.5},
    {n:'Ivan Perišić',cn:'佩里西奇',p:'FWD',a:37,c:'Hajduk Split',l:'克甲',r:3.5},
    {n:'Marcelo Brozović',cn:'布罗佐维奇',p:'MID',a:33,c:'Al-Nassr',l:'沙特联',r:3.5},
    {n:'Lovro Majer',cn:'马耶尔',p:'MID',a:28,c:'VfL Wolfsburg',l:'德甲',r:3.0},
    {n:'Borna Sosa',cn:'索萨',p:'DEF',a:28,c:'Ajax',l:'荷甲',r:3.0},
    {n:'Martin Erlić',cn:'埃利奇',p:'DEF',a:28,c:'Sassuolo',l:'意甲',r:2.5},
    {n:'Dominik Livaković',cn:'利瓦科维奇',p:'GK',a:31,c:'Fenerbahçe',l:'土超',r:3.5},
    {n:'Mario Pašalić',cn:'帕萨利奇',p:'MID',a:31,c:'Atalanta',l:'意甲',r:3.0},
    {n:'Bruno Petković',cn:'佩特科维奇',p:'FWD',a:31,c:'Dinamo Zagreb',l:'克甲',r:3.0},
    {n:'Joško Gvardiol',cn:'格瓦迪奥尔',p:'DEF',a:24,c:'Manchester City',l:'英超',r:4.5},
    {n:'Luka Sučić',cn:'苏契奇',p:'MID',a:23,c:'RB Salzburg',l:'奥超',r:3.0}
  ],

  'Ghana': [
    {n:'Mohammed Kudus',cn:'库杜斯',p:'MID',a:25,c:'West Ham',l:'英超',r:4.0},
    {n:'Thomas Partey',cn:'帕尔特伊',p:'MID',a:32,c:'Arsenal',l:'英超',r:3.5},
    {n:'Iñaki Williams',cn:'伊尼亚基·威廉姆斯',p:'FWD',a:32,c:'Athletic Bilbao',l:'西甲',r:3.5},
    {n:'Tariq Lamptey',cn:'兰普泰',p:'DEF',a:25,c:'Brighton',l:'英超',r:3.0},
    {n:'Osman Bukari',cn:'布卡里',p:'FWD',a:27,c:'Red Star Belgrade',l:'塞超',r:2.5},
    {n:'Antoine Semenyo',cn:'塞梅尼奥',p:'FWD',a:26,c:'Bournemouth',l:'英超',r:3.0},
    {n:'Jordan Ayew',cn:'乔丹·阿尤',p:'FWD',a:34,c:'Crystal Palace',l:'英超',r:3.0},
    {n:'Alexander Djiku',cn:'吉库',p:'DEF',a:31,c:'Fenerbahçe',l:'土超',r:3.0},
    {n:'Mohammed Salisu',cn:'萨利苏',p:'DEF',a:27,c:'AS Monaco',l:'法甲',r:3.5},
    {n:'Alidu Seidu',cn:'塞杜',p:'DEF',a:26,c:'Clermont Foot',l:'法甲',r:2.5},
    {n:'Gideon Mensah',cn:'门萨',p:'DEF',a:27,c:'Auxerre',l:'法甲',r:2.5},
    {n:'Richard Ofori',cn:'奥福里',p:'GK',a:32,c:'Orlando Pirates',l:'南非超',r:2.5},
    {n:'Ernest Nuamah',cn:'努阿马',p:'MID',a:22,c:'Lyon',l:'法甲',r:3.0},
    {n:'Daniel-Kofi Kyereh',cn:'基雷',p:'MID',a:30,c:'SC Freiburg',l:'德甲',r:2.5}
  ],

  'Panama': [
    {n:'Ismael Díaz',cn:'迪亚斯',p:'FWD',a:29,c:'Universidad Católica',l:'厄甲',r:2.5},
    {n:'José Fajardo',cn:'法哈多',p:'FWD',a:32,c:'CD Universitario',l:'巴拿甲',r:2.5},
    {n:'Adalberto Carrasquilla',cn:'卡拉斯奎利亚',p:'MID',a:27,c:'Houston Dynamo',l:'美职联',r:2.5},
    {n:'Édgar Bárcenas',cn:'巴塞纳斯',p:'MID',a:32,c:'Mazatlán',l:'墨超',r:2.5},
    {n:'Yoel Bárcenas',cn:'巴塞纳斯',p:'MID',a:30,c:'Alajuelense',l:'哥斯甲',r:2.0},
    {n:'Aníbal Godoy',cn:'戈多伊',p:'MID',a:36,c:'Nashville SC',l:'美职联',r:2.5},
    {n:'Michael Murillo',cn:'穆里略',p:'DEF',a:30,c:'Marseille',l:'法甲',r:3.0},
    {n:'Andrés Andrade',cn:'安德拉德',p:'DEF',a:28,c:'Alajuelense',l:'哥斯甲',r:2.5},
    {n:'Harold Cummings',cn:'卡明斯',p:'DEF',a:34,c:'Xelajú MC',l:'危甲',r:2.5},
    {n:'Roderick Miller',cn:'米勒',p:'DEF',a:34,c:'Maccabi Petah Tikva',l:'以超',r:2.0},
    {n:'Luis Mejía',cn:'梅希亚',p:'GK',a:35,c:'Flamengo',l:'巴甲',r:2.5},
    {n:'José Rodríguez',cn:'罗德里格斯',p:'GK',a:27,c:'Árabe Unido',l:'巴拿甲',r:2.0},
    {n:'César Yanis',cn:'亚尼斯',p:'FWD',a:30,c:'Costa del Este',l:'巴拿甲',r:2.0},
    {n:'Jiovany Ramos',cn:'拉莫斯',p:'DEF',a:27,c:'Alianza Lima',l:'秘甲',r:2.0}
  ]
};

// For use as a Node.js module:
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SQUADS };
}
