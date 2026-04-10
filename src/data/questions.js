// California DMV Practice Test — 500 Questions
// Languages: en | zh (Simplified) | zhTW (Traditional) | es (Spanish)
// Categories: signs | laws | rightofway | speed | dui | parking | highway | safety

export const CATEGORIES = {
  signs:      { en: 'Road Signs',        zh: '道路标志',    zhTW: '道路標誌',    es: 'Señales de Tráfico' },
  laws:       { en: 'Traffic Laws',      zh: '交通法规',    zhTW: '交通法規',    es: 'Leyes de Tráfico' },
  rightofway: { en: 'Right of Way',      zh: '优先通行权',  zhTW: '優先通行權',  es: 'Derecho de Paso' },
  speed:      { en: 'Speed Limits',      zh: '速度限制',    zhTW: '速度限制',    es: 'Límites de Velocidad' },
  dui:        { en: 'DUI & Drugs',       zh: '酒驾与毒品',  zhTW: '酒駕與毒品',  es: 'DUI y Drogas' },
  parking:    { en: 'Parking Rules',     zh: '停车规定',    zhTW: '停車規定',    es: 'Reglas de Estacionamiento' },
  highway:    { en: 'Freeway Driving',   zh: '高速公路',    zhTW: '高速公路',    es: 'Manejo en Autopista' },
  safety:     { en: 'Safety & Emergency',zh: '安全与紧急',  zhTW: '安全與緊急',  es: 'Seguridad y Emergencias' },
}

export const questions = [

// ═══════════════════════════════════════════════════════════════
//  BATCH 1 — Road Signs (Q1–10)
// ═══════════════════════════════════════════════════════════════

{
  id: 1, cat: 'signs', sign: 'stop',
  en: {
    q: 'What must you do when you come to a STOP sign?',
    opts: ['Come to a complete stop, then proceed when safe', 'Slow to 15 mph and proceed if clear', 'Stop only if other vehicles are present', 'Yield to oncoming traffic and continue'],
    exp: 'A STOP sign requires a complete stop at the stop line (or before the crosswalk/intersection if no line). After stopping, yield to all traffic and pedestrians before proceeding.'
  },
  zh: {
    q: '遇到停车标志（STOP）时，您必须怎么做？',
    opts: ['完全停车，确认安全后再行驶', '减速至15英里/小时，如无来车则通过', '仅当有其他车辆时才停车', '让行对向车辆后继续行驶'],
    exp: '停车标志要求您在停止线处（或路口/人行横道前）完全停车。停车后，确认让行所有车辆和行人，再继续行驶。'
  },
  zhTW: {
    q: '遇到停車標誌（STOP）時，您必須怎麼做？',
    opts: ['完全停車，確認安全後再行駛', '減速至15英里/小時，如無來車則通過', '僅當有其他車輛時才停車', '讓行對向車輛後繼續行駛'],
    exp: '停車標誌要求您在停止線處（或路口/人行橫道前）完全停車。停車後，確認讓行所有車輛和行人，再繼續行駛。'
  },
  es: {
    q: '¿Qué debe hacer cuando llega a una señal de STOP (Alto)?',
    opts: ['Detenerse completamente, luego avanzar cuando sea seguro', 'Reducir a 15 mph y continuar si está despejado', 'Detenerse solo si hay otros vehículos presentes', 'Ceder el paso al tráfico y continuar'],
    exp: 'Una señal de STOP requiere una parada completa en la línea de parada (o antes del cruce peatonal/intersección). Después de detenerse, ceda el paso a todo el tráfico y peatones antes de continuar.'
  },
  ans: 0
},

{
  id: 2, cat: 'signs', sign: 'yield',
  en: {
    q: 'What does a YIELD sign require you to do?',
    opts: ['Slow down and give the right of way to cross traffic', 'Stop completely before proceeding', 'Speed up to merge with traffic', 'Proceed without slowing if no cars are visible'],
    exp: 'A YIELD sign means you must slow down and give the right of way to vehicles and pedestrians in or approaching the intersection. Stop if necessary, but a complete stop is not always required.'
  },
  zh: {
    q: '让行标志（YIELD）要求您做什么？',
    opts: ['减速，将优先权让给交叉路口的车辆', '完全停车后再通过', '加速并入交通流', '如看不到车辆可不减速通过'],
    exp: '让行标志意味着您必须减速，将优先通行权让给路口内或正在靠近路口的车辆和行人。必要时须停车，但并非总是要求完全停车。'
  },
  zhTW: {
    q: '讓行標誌（YIELD）要求您做什麼？',
    opts: ['減速，將優先權讓給交叉路口的車輛', '完全停車後再通過', '加速並入交通流', '如看不到車輛可不減速通過'],
    exp: '讓行標誌意味著您必須減速，將優先通行權讓給路口內或正在靠近路口的車輛和行人。必要時須停車，但並非總是要求完全停車。'
  },
  es: {
    q: '¿Qué le exige hacer una señal de CEDA EL PASO (YIELD)?',
    opts: ['Reducir la velocidad y dar el derecho de paso al tráfico cruzado', 'Detenerse completamente antes de continuar', 'Acelerar para fusionarse con el tráfico', 'Continuar sin reducir si no hay autos visibles'],
    exp: 'Una señal de CEDA EL PASO significa que debe reducir la velocidad y dar el derecho de paso a los vehículos y peatones en la intersección. Deténgase si es necesario, pero no siempre se requiere una parada completa.'
  },
  ans: 0
},

{
  id: 3, cat: 'signs', sign: 'do-not-enter',
  en: {
    q: 'What does a DO NOT ENTER sign mean?',
    opts: ['You are going the wrong way — do not enter', 'Road construction ahead — slow down', 'No parking beyond this point', 'Pedestrian crossing only'],
    exp: 'A DO NOT ENTER sign (red circle with white horizontal bar) means you must not proceed in that direction. It is typically posted at one-way street exits and freeway off-ramps to prevent wrong-way driving.'
  },
  zh: {
    q: '禁止进入标志（DO NOT ENTER）是什么意思？',
    opts: ['您走错方向了——禁止进入', '前方施工——减速', '此处起禁止停车', '仅供行人通行'],
    exp: '禁止进入标志（红圆圈内有白色横条）表示您不得沿该方向行驶。通常设置在单行道出口和高速公路匝道处，防止逆行。'
  },
  zhTW: {
    q: '禁止進入標誌（DO NOT ENTER）是什麼意思？',
    opts: ['您走錯方向了——禁止進入', '前方施工——減速', '此處起禁止停車', '僅供行人通行'],
    exp: '禁止進入標誌（紅圓圈內有白色橫條）表示您不得沿該方向行駛。通常設置在單行道出口和高速公路匝道處，防止逆行。'
  },
  es: {
    q: '¿Qué significa una señal de NO ENTRE (DO NOT ENTER)?',
    opts: ['Va en dirección equivocada — no entre', 'Construcción adelante — reduzca la velocidad', 'No estacionar más allá de este punto', 'Solo cruce peatonal'],
    exp: 'Una señal de NO ENTRE (círculo rojo con barra horizontal blanca) significa que no debe continuar en esa dirección. Generalmente se coloca en salidas de calles de un sentido y rampas de salida de autopistas para evitar conducir en sentido contrario.'
  },
  ans: 0
},

{
  id: 4, cat: 'signs', sign: 'wrong-way',
  en: {
    q: 'You see a WRONG WAY sign. What should you do?',
    opts: ['Pull over safely and turn around or back out', 'Continue driving — the sign is for other drivers', 'Speed up to clear the area quickly', 'Flash your headlights to warn oncoming traffic'],
    exp: 'A WRONG WAY sign means you have entered a roadway going in the wrong direction. You must pull off the road safely, stop, and then return to the correct direction. Never continue in the wrong direction.'
  },
  zh: {
    q: '您看到"错误方向"（WRONG WAY）标志。您该怎么做？',
    opts: ['安全靠边停车，然后掉头或倒车离开', '继续行驶——该标志是给其他司机看的', '加速快速通过该区域', '闪灯警告对面来车'],
    exp: '"错误方向"标志表示您正在以错误方向行驶进入道路。您必须安全驶离道路、停车，然后返回正确方向行驶。切勿继续逆行。'
  },
  zhTW: {
    q: '您看到「錯誤方向」（WRONG WAY）標誌。您該怎麼做？',
    opts: ['安全靠邊停車，然後掉頭或倒車離開', '繼續行駛——該標誌是給其他司機看的', '加速快速通過該區域', '閃燈警告對面來車'],
    exp: '「錯誤方向」標誌表示您正在以錯誤方向行駛進入道路。您必須安全駛離道路、停車，然後返回正確方向行駛。切勿繼續逆行。'
  },
  es: {
    q: 'Ve una señal de DIRECCIÓN INCORRECTA (WRONG WAY). ¿Qué debe hacer?',
    opts: ['Orillarse con seguridad y dar vuelta o retroceder', 'Continuar — la señal es para otros conductores', 'Acelerar para salir del área rápidamente', 'Hacer destellos de luz para advertir al tráfico que viene'],
    exp: 'Una señal de DIRECCIÓN INCORRECTA significa que entró a una vía en la dirección equivocada. Debe orillarse de forma segura, detenerse y luego regresar a la dirección correcta. Nunca continúe en la dirección incorrecta.'
  },
  ans: 0
},

{
  id: 5, cat: 'signs', sign: 'speed-25',
  en: {
    q: 'Where is a 25 mph speed limit most commonly posted?',
    opts: ['Residential areas and business districts', 'Open highways and freeways', 'School zones during school hours', 'Alleys and narrow lanes'],
    exp: 'In California, the prima facie (default) speed limit is 25 mph in residential districts and business districts. It is also 25 mph on roads near schools when children are present (though active school zones post 25 mph signs).'
  },
  zh: {
    q: '25英里/小时的限速标志最常见于哪里？',
    opts: ['住宅区和商业区', '开放公路和高速公路', '上学时间的学区', '小巷和狭窄道路'],
    exp: '在加州，住宅区和商业区的法定（默认）限速为25英里/小时。当儿童在场时，学校附近道路的限速也是25英里/小时。'
  },
  zhTW: {
    q: '25英里/小時的限速標誌最常見於哪裡？',
    opts: ['住宅區和商業區', '開放公路和高速公路', '上學時間的學區', '小巷和狹窄道路'],
    exp: '在加州，住宅區和商業區的法定（預設）限速為25英里/小時。當兒童在場時，學校附近道路的限速也是25英里/小時。'
  },
  es: {
    q: '¿Dónde se publica más comúnmente un límite de velocidad de 25 mph?',
    opts: ['Zonas residenciales y distritos comerciales', 'Carreteras abiertas y autopistas', 'Zonas escolares durante horas escolares', 'Callejones y carriles estrechos'],
    exp: 'En California, el límite de velocidad prima facie (predeterminado) es de 25 mph en zonas residenciales y distritos comerciales. También es de 25 mph en carreteras cerca de escuelas cuando hay niños presentes.'
  },
  ans: 0
},

{
  id: 6, cat: 'signs', sign: 'ped-crossing',
  en: {
    q: 'This yellow diamond sign with a walking figure means:',
    opts: ['Pedestrian crossing area ahead — slow down and watch for walkers', 'School zone — stop for children', 'No pedestrians allowed beyond this point', 'Crosswalk ends here'],
    exp: 'The yellow diamond pedestrian crossing sign warns drivers that a pedestrian crossing is ahead. Slow down and be prepared to stop for pedestrians. This is a warning sign, not a regulatory sign.'
  },
  zh: {
    q: '这个带行人图案的黄色菱形标志表示：',
    opts: ['前方有行人穿越区——减速注意行人', '学区——停车让儿童通过', '此处起禁止行人通行', '人行横道在此结束'],
    exp: '黄色菱形行人穿越警告标志提醒驾驶员前方有人行横道。请减速并准备为行人停车。这是警告标志，不是规定性标志。'
  },
  zhTW: {
    q: '這個帶行人圖案的黃色菱形標誌表示：',
    opts: ['前方有行人穿越區——減速注意行人', '學區——停車讓兒童通過', '此處起禁止行人通行', '人行橫道在此結束'],
    exp: '黃色菱形行人穿越警告標誌提醒駕駛員前方有人行橫道。請減速並準備為行人停車。這是警告標誌，不是規定性標誌。'
  },
  es: {
    q: 'Esta señal de diamante amarillo con una figura caminando significa:',
    opts: ['Área de cruce peatonal adelante — reduzca velocidad y esté atento', 'Zona escolar — deténgase por los niños', 'No se permiten peatones más allá de este punto', 'El cruce peatonal termina aquí'],
    exp: 'La señal de advertencia de cruce peatonal en diamante amarillo avisa a los conductores que hay un cruce peatonal adelante. Reduzca la velocidad y esté preparado para detenerse por los peatones.'
  },
  ans: 0
},

{
  id: 7, cat: 'signs', sign: 'school',
  en: {
    q: 'What does the pentagon-shaped yellow sign with children figures mean?',
    opts: ['School zone — 25 mph when children are present', 'Playground area — slow to 15 mph at all times', 'Caution: children may be crossing', 'School bus stop ahead'],
    exp: 'The pentagon-shaped yellow/fluorescent school sign marks a school zone. The speed limit is 25 mph when children are present or when the school flashing beacon is active. Fines are doubled in school zones.'
  },
  zh: {
    q: '带儿童图案的五边形黄色标志表示什么？',
    opts: ['学区——有儿童时限速25英里/小时', '游乐场区域——始终限速15英里/小时', '注意：可能有儿童穿越', '前方有校车停靠站'],
    exp: '五边形黄色（荧光色）学校标志标示学区范围。当有儿童在场或学校闪灯信号亮起时，限速为25英里/小时。学区内违规罚款加倍。'
  },
  zhTW: {
    q: '帶兒童圖案的五邊形黃色標誌表示什麼？',
    opts: ['學區——有兒童時限速25英里/小時', '遊樂場區域——始終限速15英里/小時', '注意：可能有兒童穿越', '前方有校車停靠站'],
    exp: '五邊形黃色（螢光色）學校標誌標示學區範圍。當有兒童在場或學校閃燈信號亮起時，限速為25英里/小時。學區內違規罰款加倍。'
  },
  es: {
    q: '¿Qué significa la señal amarilla pentagonal con figuras de niños?',
    opts: ['Zona escolar — 25 mph cuando hay niños presentes', 'Área de juegos — siempre 15 mph', 'Precaución: puede haber niños cruzando', 'Parada de autobús escolar adelante'],
    exp: 'La señal escolar pentagonal amarilla/fluorescente marca una zona escolar. El límite de velocidad es 25 mph cuando hay niños presentes o cuando el faro parpadeante escolar está activo. Las multas se duplican en zonas escolares.'
  },
  ans: 0
},

{
  id: 8, cat: 'signs', sign: 'railroad-advance',
  en: {
    q: 'This round yellow sign with an X means:',
    opts: ['Railroad crossing ahead — slow down and be prepared to stop', 'No entry to railroad property', 'Train tracks have been removed', 'Cross railroad tracks at full speed'],
    exp: 'The round yellow advance warning sign for a railroad crossing alerts drivers that tracks are ahead. Slow down, look and listen for trains, and be prepared to stop. Never stop on railroad tracks.'
  },
  zh: {
    q: '这个带X图案的圆形黄色标志表示：',
    opts: ['前方铁路道口——减速并准备停车', '禁止进入铁路用地', '铁轨已被移除', '以全速穿越铁轨'],
    exp: '铁路道口圆形黄色预警标志提醒驾驶员前方有铁轨。请减速，注意观察和倾听火车，并准备停车。切勿在铁轨上停车。'
  },
  zhTW: {
    q: '這個帶X圖案的圓形黃色標誌表示：',
    opts: ['前方鐵路道口——減速並準備停車', '禁止進入鐵路用地', '鐵軌已被移除', '以全速穿越鐵軌'],
    exp: '鐵路道口圓形黃色預警標誌提醒駕駛員前方有鐵軌。請減速，注意觀察和傾聽火車，並準備停車。切勿在鐵軌上停車。'
  },
  es: {
    q: 'Esta señal redonda amarilla con una X significa:',
    opts: ['Cruce ferroviario adelante — reduzca velocidad y esté preparado para detenerse', 'No entrada a propiedad ferroviaria', 'Las vías del tren han sido removidas', 'Cruce las vías a velocidad normal'],
    exp: 'La señal de advertencia redonda amarilla para cruce ferroviario alerta a los conductores que hay vías adelante. Reduzca la velocidad, mire y escuche trenes, y esté preparado para detenerse. Nunca se detenga sobre las vías del tren.'
  },
  ans: 0
},

{
  id: 9, cat: 'signs', sign: 'curve-right',
  en: {
    q: 'A yellow diamond sign with a curved arrow pointing right means:',
    opts: ['The road curves to the right ahead — adjust your speed', 'Turn right is required at the next intersection', 'Right lane ends — merge left', 'No left turns allowed'],
    exp: 'A yellow diamond sign with a curved arrow is a warning sign indicating the road ahead curves in the direction shown. Reduce your speed before entering the curve — it is dangerous to brake while in a curve.'
  },
  zh: {
    q: '带有向右弯曲箭头的黄色菱形标志表示：',
    opts: ['前方道路向右弯曲——调整速度', '下一个路口须右转', '右车道结束——向左并道', '禁止左转'],
    exp: '带有弯曲箭头的黄色菱形标志是警告标志，提示前方道路向箭头所示方向弯曲。进入弯道前应减速——在弯道中急刹车非常危险。'
  },
  zhTW: {
    q: '帶有向右彎曲箭頭的黃色菱形標誌表示：',
    opts: ['前方道路向右彎曲——調整速度', '下一個路口須右轉', '右車道結束——向左並道', '禁止左轉'],
    exp: '帶有彎曲箭頭的黃色菱形標誌是警告標誌，提示前方道路向箭頭所示方向彎曲。進入彎道前應減速——在彎道中急剎車非常危險。'
  },
  es: {
    q: 'Una señal de diamante amarillo con una flecha curva apuntando a la derecha significa:',
    opts: ['La carretera curva hacia la derecha adelante — ajuste su velocidad', 'Se requiere girar a la derecha en la próxima intersección', 'El carril derecho termina — fusiónese a la izquierda', 'No se permiten giros a la izquierda'],
    exp: 'Una señal de diamante amarillo con una flecha curva es una señal de advertencia que indica que la carretera adelante curva en la dirección mostrada. Reduzca la velocidad antes de entrar a la curva — es peligroso frenar dentro de una curva.'
  },
  ans: 0
},

{
  id: 10, cat: 'signs', sign: 'construction',
  en: {
    q: 'What does an orange diamond-shaped sign indicate?',
    opts: ['Construction or work zone — slow down, workers present', 'Warning of a dangerous curve ahead', 'School zone is active', 'Detour route in this direction'],
    exp: 'Orange diamond signs are used in construction and maintenance zones. They warn of road workers, reduced lanes, detours, and changed traffic patterns. Speed limits are reduced in work zones and fines are doubled for violations.'
  },
  zh: {
    q: '橙色菱形标志表示什么？',
    opts: ['施工或作业区——减速，有工人在场', '前方有危险弯道的警告', '学区正在运作', '沿此方向绕行'],
    exp: '橙色菱形标志用于施工和维护区域，警告前方有道路工人、车道减少、绕行路线及交通模式变化。施工区限速降低，违规罚款加倍。'
  },
  zhTW: {
    q: '橙色菱形標誌表示什麼？',
    opts: ['施工或作業區——減速，有工人在場', '前方有危險彎道的警告', '學區正在運作', '沿此方向繞行'],
    exp: '橙色菱形標誌用於施工和維護區域，警告前方有道路工人、車道減少、繞行路線及交通模式變化。施工區限速降低，違規罰款加倍。'
  },
  es: {
    q: '¿Qué indica una señal de diamante naranja?',
    opts: ['Zona de construcción o trabajo — reduzca velocidad, hay trabajadores', 'Advertencia de curva peligrosa adelante', 'La zona escolar está activa', 'Ruta de desvío en esta dirección'],
    exp: 'Las señales de diamante naranja se usan en zonas de construcción y mantenimiento. Advierten sobre trabajadores viales, carriles reducidos, desvíos y patrones de tráfico cambiados. Los límites de velocidad se reducen y las multas se duplican en zonas de trabajo.'
  },
  ans: 0
},


// ═══════════════════════════════════════════════════════════════
//  BATCH 2 — Road Signs (Q11–20)
// ═══════════════════════════════════════════════════════════════

{
  id: 11, cat: 'signs', sign: 'no-u-turn',
  en: {
    q: 'This sign with a U-turn arrow crossed out means:',
    opts: ['U-turns are prohibited at this location', 'U-turns are permitted here', 'Left turns only at this intersection', 'No reversing in this lane'],
    exp: 'The No U-Turn sign prohibits making a U-turn at that location. U-turns are also illegal in California at intersections where a traffic officer is directing traffic, in front of a fire station, and wherever a sign prohibits them.'
  },
  zh: {
    q: '这个带有被划掉的U形转弯箭头的标志表示：',
    opts: ['此处禁止掉头', '此处允许掉头', '该路口仅可左转', '此车道禁止倒车'],
    exp: '禁止掉头标志禁止在该位置掉头。在加州，以下地点的掉头也是违法的：交警指挥交通的路口、消防站前方，以及任何有禁止掉头标志的地点。'
  },
  zhTW: {
    q: '這個帶有被劃掉的U形轉彎箭頭的標誌表示：',
    opts: ['此處禁止掉頭', '此處允許掉頭', '該路口僅可左轉', '此車道禁止倒車'],
    exp: '禁止掉頭標誌禁止在該位置掉頭。在加州，以下地點的掉頭也是違法的：交警指揮交通的路口、消防站前方，以及任何有禁止掉頭標誌的地點。'
  },
  es: {
    q: 'Esta señal con una flecha de retorno en U tachada significa:',
    opts: ['Los giros en U están prohibidos en esta ubicación', 'Los giros en U están permitidos aquí', 'Solo giros a la izquierda en esta intersección', 'No dar marcha atrás en este carril'],
    exp: 'La señal de No dar Vuelta en U prohíbe hacer un giro en U en ese lugar. Los giros en U también son ilegales en California en intersecciones donde un oficial dirige el tráfico, frente a estaciones de bomberos y donde una señal lo prohíba.'
  },
  ans: 0
},

{
  id: 12, cat: 'signs', sign: 'slippery',
  en: {
    q: 'The yellow diamond sign with a skidding car means:',
    opts: ['Slippery when wet — reduce speed and increase following distance', 'Ice on road — stop and wait', 'Car wash ahead', 'Road flooding possible'],
    exp: 'The Slippery When Wet sign warns that the road surface becomes especially slippery in wet conditions. Reduce your speed, avoid sudden braking or sharp turns, and increase your following distance when you see this sign.'
  },
  zh: {
    q: '带有打滑汽车图案的黄色菱形标志表示：',
    opts: ['潮湿时路面湿滑——减速并增大跟车距离', '路面结冰——停车等待', '前方有洗车店', '可能发生道路积水'],
    exp: '路面湿滑警告标志提醒驾驶员，该路段在潮湿条件下会变得特别湿滑。看到此标志时，请减速行驶，避免急刹车或急转弯，并增大与前车的距离。'
  },
  zhTW: {
    q: '帶有打滑汽車圖案的黃色菱形標誌表示：',
    opts: ['潮濕時路面濕滑——減速並增大跟車距離', '路面結冰——停車等待', '前方有洗車店', '可能發生道路積水'],
    exp: '路面濕滑警告標誌提醒駕駛員，該路段在潮濕條件下會變得特別濕滑。看到此標誌時，請減速行駛，避免急剎車或急轉彎，並增大與前車的距離。'
  },
  es: {
    q: 'La señal de diamante amarillo con un auto patinando significa:',
    opts: ['Resbaladizo cuando está mojado — reduzca velocidad y aumente distancia', 'Hielo en la carretera — deténgase y espere', 'Lavado de autos adelante', 'Posible inundación de la carretera'],
    exp: 'La señal de Resbaladizo Cuando Está Mojado advierte que la superficie de la carretera se vuelve especialmente resbaladiza en condiciones húmedas. Reduzca la velocidad, evite frenadas bruscas o giros cerrados y aumente su distancia de seguimiento.'
  },
  ans: 0
},

{
  id: 13, cat: 'signs', sign: 'merge',
  en: {
    q: 'A yellow diamond sign showing two lanes joining into one means:',
    opts: ['Lanes are merging ahead — prepare to adjust position', 'No passing zone begins', 'Road widens ahead', 'Stay in your current lane at all times'],
    exp: 'The Merge sign warns that two lanes of traffic will merge into one. Drivers should adjust speed and position to allow for safe merging. The vehicle in the continuing lane generally has the right of way.'
  },
  zh: {
    q: '显示两条车道合并成一条的黄色菱形标志表示：',
    opts: ['前方车道合并——做好准备调整位置', '禁止超车区域开始', '前方道路变宽', '始终保持在当前车道'],
    exp: '合并标志警告驾驶员前方两条行车道将合并为一条。驾驶员应调整速度和位置，以便安全并入。通常情况下，继续行驶车道上的车辆具有优先通行权。'
  },
  zhTW: {
    q: '顯示兩條車道合併成一條的黃色菱形標誌表示：',
    opts: ['前方車道合併——做好準備調整位置', '禁止超車區域開始', '前方道路變寬', '始終保持在當前車道'],
    exp: '合併標誌警告駕駛員前方兩條行車道將合併為一條。駕駛員應調整速度和位置，以便安全並入。通常情況下，繼續行駛車道上的車輛具有優先通行權。'
  },
  es: {
    q: 'Una señal de diamante amarillo que muestra dos carriles uniéndose en uno significa:',
    opts: ['Los carriles se fusionan adelante — prepárese para ajustar su posición', 'Comienza zona de no adelantar', 'La carretera se amplía adelante', 'Permanezca en su carril actual en todo momento'],
    exp: 'La señal de Fusión advierte que dos carriles de tráfico se fusionarán en uno. Los conductores deben ajustar la velocidad y posición para permitir una fusión segura. El vehículo en el carril que continúa generalmente tiene el derecho de paso.'
  },
  ans: 0
},

{
  id: 14, cat: 'signs', sign: 'divided-begins',
  en: {
    q: 'A sign showing one road splitting into two with a barrier between them means:',
    opts: ['Divided highway begins — keep right of the divider', 'Road narrows to one lane', 'Highway ends — reduce speed', 'Two-way traffic begins'],
    exp: 'The Divided Highway Begins sign warns that the road ahead is divided by a median or barrier. You must stay to the right of the divider. Oncoming traffic will be separated from you.'
  },
  zh: {
    q: '显示一条道路分成两条且中间有隔离带的标志表示：',
    opts: ['分隔公路开始——靠隔离带右侧行驶', '道路收窄为单车道', '高速公路结束——减速', '双向交通开始'],
    exp: '分隔公路开始标志警告驾驶员前方道路被中央分隔带或护栏分成两部分。您必须在分隔带右侧行驶，对向来车将与您分开。'
  },
  zhTW: {
    q: '顯示一條道路分成兩條且中間有隔離帶的標誌表示：',
    opts: ['分隔公路開始——靠隔離帶右側行駛', '道路收窄為單車道', '高速公路結束——減速', '雙向交通開始'],
    exp: '分隔公路開始標誌警告駕駛員前方道路被中央分隔帶或護欄分成兩部分。您必須在分隔帶右側行駛，對向來車將與您分開。'
  },
  es: {
    q: 'Una señal que muestra una carretera dividiéndose en dos con una barrera entre ellas significa:',
    opts: ['Comienza autopista dividida — manténgase a la derecha del divisor', 'La carretera se estrecha a un carril', 'Termina la autopista — reduzca la velocidad', 'Comienza tráfico en dos sentidos'],
    exp: 'La señal de Inicio de Autopista Dividida advierte que la carretera adelante está dividida por una mediana o barrera. Debe mantenerse a la derecha del divisor. El tráfico en sentido contrario estará separado de usted.'
  },
  ans: 0
},

{
  id: 15, cat: 'signs', sign: 'divided-ends',
  en: {
    q: 'A sign showing two roads merging into one without a barrier means:',
    opts: ['Divided highway ends — watch for two-way traffic ahead', 'Merge left — right lane closing', 'Road narrows at bridge', 'End of one-way road'],
    exp: 'The Divided Highway Ends sign warns that the divided road ahead will become a two-way road without a median barrier. Be alert for oncoming traffic as you will be sharing the roadway.'
  },
  zh: {
    q: '显示两条道路合并为一条且没有隔离带的标志表示：',
    opts: ['分隔公路结束——注意前方双向交通', '向左合并——右车道关闭', '桥前道路变窄', '单行道结束'],
    exp: '分隔公路结束标志警告驾驶员，前方分隔道路将变为无中央护栏的双向道路。请注意对向来车，因为您将与对向车辆共用道路。'
  },
  zhTW: {
    q: '顯示兩條道路合併為一條且沒有隔離帶的標誌表示：',
    opts: ['分隔公路結束——注意前方雙向交通', '向左合併——右車道關閉', '橋前道路變窄', '單行道結束'],
    exp: '分隔公路結束標誌警告駕駛員，前方分隔道路將變為無中央護欄的雙向道路。請注意對向來車，因為您將與對向車輛共用道路。'
  },
  es: {
    q: 'Una señal que muestra dos carreteras fusionándose en una sin barrera significa:',
    opts: ['Termina la autopista dividida — cuidado con el tráfico en dos sentidos adelante', 'Fusiónese a la izquierda — cierra el carril derecho', 'La carretera se estrecha en el puente', 'Fin de carretera de un solo sentido'],
    exp: 'La señal de Fin de Autopista Dividida advierte que la carretera dividida se convertirá en una carretera de dos sentidos sin barrera mediana. Esté alerta al tráfico en sentido contrario ya que compartirá la calzada.'
  },
  ans: 0
},

{
  id: 16, cat: 'signs', sign: 'signal-ahead',
  en: {
    q: 'A yellow diamond sign with a traffic light image means:',
    opts: ['Traffic signal ahead — be prepared to stop', 'Signal is out of order — treat as 4-way stop', 'Green light only — do not slow down', 'Pedestrian signal crossing ahead'],
    exp: 'The Traffic Signal Ahead warning sign alerts drivers that a traffic signal is coming up. You should reduce speed and be prepared to stop. This sign is placed before signals that may not be immediately visible.'
  },
  zh: {
    q: '带有红绿灯图案的黄色菱形标志表示：',
    opts: ['前方有交通信号灯——准备停车', '信号灯故障——按四路停车处理', '仅限绿灯——不必减速', '前方有行人信号穿越'],
    exp: '交通信号灯预警标志提醒驾驶员前方有信号灯。您应减速并准备停车。该标志通常设置在不易直接看见信号灯的位置前方。'
  },
  zhTW: {
    q: '帶有紅綠燈圖案的黃色菱形標誌表示：',
    opts: ['前方有交通信號燈——準備停車', '信號燈故障——按四路停車處理', '僅限綠燈——不必減速', '前方有行人信號穿越'],
    exp: '交通信號燈預警標誌提醒駕駛員前方有信號燈。您應減速並準備停車。該標誌通常設置在不易直接看見信號燈的位置前方。'
  },
  es: {
    q: 'Una señal de diamante amarillo con imagen de semáforo significa:',
    opts: ['Semáforo adelante — prepárese para detenerse', 'La señal está fuera de servicio — trátelo como alto de 4 vías', 'Solo luz verde — no reduzca la velocidad', 'Cruce peatonal con señal adelante'],
    exp: 'La señal de advertencia de Semáforo Adelante alerta a los conductores que hay un semáforo próximo. Debe reducir la velocidad y estar preparado para detenerse. Esta señal se coloca antes de semáforos que pueden no ser inmediatamente visibles.'
  },
  ans: 0
},

{
  id: 17, cat: 'signs', sign: 'deer',
  en: {
    q: 'A yellow diamond sign with a deer silhouette means:',
    opts: ['Wildlife crossing area — watch for animals on the road', 'Hunting allowed beyond this point', 'Animal sanctuary — no vehicles', 'Zoo entrance ahead'],
    exp: 'The Deer Crossing sign warns drivers that deer and other wildlife frequently cross the road in that area. Be especially alert at dawn and dusk when animals are most active. Reduce speed and watch for animals on or near the road.'
  },
  zh: {
    q: '带有鹿剪影的黄色菱形标志表示：',
    opts: ['野生动物穿越区——注意路上的动物', '此处起允许狩猎', '动物保护区——禁止车辆进入', '前方动物园入口'],
    exp: '鹿穿越标志警告驾驶员该区域经常有鹿等野生动物横穿道路。在黎明和黄昏时应特别警惕，因为动物在此时段最为活跃。请减速并注意路上或路边的动物。'
  },
  zhTW: {
    q: '帶有鹿剪影的黃色菱形標誌表示：',
    opts: ['野生動物穿越區——注意路上的動物', '此處起允許狩獵', '動物保護區——禁止車輛進入', '前方動物園入口'],
    exp: '鹿穿越標誌警告駕駛員該區域經常有鹿等野生動物橫穿道路。在黎明和黃昏時應特別警惕，因為動物在此時段最為活躍。請減速並注意路上或路邊的動物。'
  },
  es: {
    q: 'Una señal de diamante amarillo con la silueta de un venado significa:',
    opts: ['Área de cruce de vida silvestre — esté atento a animales en la carretera', 'Cacería permitida más allá de este punto', 'Santuario de animales — sin vehículos', 'Entrada al zoológico adelante'],
    exp: 'La señal de Cruce de Venados advierte a los conductores que los venados y otros animales silvestres frecuentemente cruzan la carretera en esa área. Esté especialmente alerta al amanecer y al atardecer cuando los animales son más activos.'
  },
  ans: 0
},

{
  id: 18, cat: 'signs', sign: 'no-passing',
  en: {
    q: 'A triangular yellow pennant sign on the left side of the road means:',
    opts: ['No passing zone — do not attempt to pass other vehicles', 'One-way road begins', 'Left lane closed ahead', 'Yield to traffic from left'],
    exp: 'The pennant-shaped No Passing Zone sign is placed on the left side of the road to mark where passing is prohibited. It is used along with a solid yellow center line. Never pass in no-passing zones — it is extremely dangerous.'
  },
  zh: {
    q: '道路左侧的三角形黄色旗帜形状标志表示：',
    opts: ['禁止超车区——不得尝试超越其他车辆', '单行道开始', '前方左车道关闭', '让左方来车先行'],
    exp: '旗帜形状的禁止超车区标志设置在道路左侧，标示禁止超车的路段。它与实线黄色中心线配合使用。切勿在禁止超车区超车——这极其危险。'
  },
  zhTW: {
    q: '道路左側的三角形黃色旗幟形狀標誌表示：',
    opts: ['禁止超車區——不得嘗試超越其他車輛', '單行道開始', '前方左車道關閉', '讓左方來車先行'],
    exp: '旗幟形狀的禁止超車區標誌設置在道路左側，標示禁止超車的路段。它與實線黃色中心線配合使用。切勿在禁止超車區超車——這極其危險。'
  },
  es: {
    q: 'Una señal triangular amarilla en forma de banderín en el lado izquierdo de la carretera significa:',
    opts: ['Zona de no adelantar — no intente pasar a otros vehículos', 'Comienza carretera de un sentido', 'Carril izquierdo cerrado adelante', 'Ceda el paso al tráfico de la izquierda'],
    exp: 'La señal en forma de banderín de Zona de No Adelantar se coloca en el lado izquierdo de la carretera para marcar dónde está prohibido adelantar. Se usa junto con una línea central amarilla sólida. Nunca adelante en zonas de no adelantar.'
  },
  ans: 0
},

{
  id: 19, cat: 'signs', sign: 'four-way-stop',
  en: {
    q: 'A STOP sign with a plate below it reading "4-WAY" or "ALL WAY" means:',
    opts: ['All traffic from every direction must stop', 'Only cross traffic must stop — you have the right of way', 'Stop and then drive at 4 mph maximum', 'Four vehicles may proceed at the same time'],
    exp: 'At a four-way (all-way) stop, all approaching vehicles from all directions must stop. Then, vehicles proceed in the order they stopped. If two vehicles arrive simultaneously, the vehicle on the right goes first.'
  },
  zh: {
    q: '停车标志下方有"4-WAY"或"ALL WAY"铭牌，表示：',
    opts: ['所有方向的车辆均须停车', '仅横向来车须停车——您有优先通行权', '停车后以最高4英里/小时行驶', '四辆车可同时通过'],
    exp: '在四路（全路）停车路口，所有方向的来车均须停车。然后，按停车先后顺序依次通行。若两辆车同时到达，右方车辆先行。'
  },
  zhTW: {
    q: '停車標誌下方有「4-WAY」或「ALL WAY」銘牌，表示：',
    opts: ['所有方向的車輛均須停車', '僅橫向來車須停車——您有優先通行權', '停車後以最高4英里/小時行駛', '四輛車可同時通過'],
    exp: '在四路（全路）停車路口，所有方向的來車均須停車。然後，按停車先後順序依次通行。若兩輛車同時到達，右方車輛先行。'
  },
  es: {
    q: 'Una señal de STOP con una placa debajo que dice "4-WAY" o "ALL WAY" significa:',
    opts: ['Todo el tráfico de todas las direcciones debe detenerse', 'Solo el tráfico cruzado debe detenerse — usted tiene el derecho de paso', 'Deténgase y luego conduzca a un máximo de 4 mph', 'Cuatro vehículos pueden continuar al mismo tiempo'],
    exp: 'En un alto de cuatro vías (todas las vías), todos los vehículos que se aproximan desde todas las direcciones deben detenerse. Luego, los vehículos avanzan en el orden en que se detuvieron. Si dos llegan simultáneamente, el de la derecha va primero.'
  },
  ans: 0
},

{
  id: 20, cat: 'signs', sign: 'roundabout',
  en: {
    q: 'A yellow diamond sign with a circular arrow indicates:',
    opts: ['Roundabout (traffic circle) ahead — yield to circulating traffic', 'U-turns permitted here', 'Circular road under construction', 'Turn around — wrong direction'],
    exp: 'The Roundabout Ahead sign warns of an upcoming traffic circle. When entering a roundabout, yield to vehicles already in the circle. Travel counterclockwise and exit at your desired street. Roundabouts improve traffic flow and reduce severe crashes.'
  },
  zh: {
    q: '带有环形箭头的黄色菱形标志表示：',
    opts: ['前方环形交叉口——让行环形道内的车辆', '此处允许掉头', '圆形道路正在施工', '掉头——方向错误'],
    exp: '环形交叉口预警标志提示前方有环形交叉口。进入环形交叉口时，须让行已在环形道内行驶的车辆。逆时针方向行驶，并在目标出口驶出。环形交叉口有助于提升交通效率并减少严重事故。'
  },
  zhTW: {
    q: '帶有環形箭頭的黃色菱形標誌表示：',
    opts: ['前方環形交叉口——讓行環形道內的車輛', '此處允許掉頭', '圓形道路正在施工', '掉頭——方向錯誤'],
    exp: '環形交叉口預警標誌提示前方有環形交叉口。進入環形交叉口時，須讓行已在環形道內行駛的車輛。逆時針方向行駛，並在目標出口駛出。環形交叉口有助於提升交通效率並減少嚴重事故。'
  },
  es: {
    q: 'Una señal de diamante amarillo con una flecha circular indica:',
    opts: ['Glorieta (rotonda) adelante — ceda el paso al tráfico circulante', 'Se permiten giros en U aquí', 'Carretera circular en construcción', 'Dé vuelta — dirección incorrecta'],
    exp: 'La señal de Glorieta Adelante advierte de una próxima rotonda de tráfico. Al entrar a una glorieta, ceda el paso a los vehículos que ya están en el círculo. Viaje en sentido antihorario y salga en la calle deseada.'
  },
  ans: 0
},


// ═══════════════════════════════════════════════════════════════
//  BATCH 3 — Sign Shapes & Colors + Traffic Laws (Q21–30)
// ═══════════════════════════════════════════════════════════════

{
  id: 21, cat: 'signs',
  en: {
    q: 'A red octagon shape on a sign always means:',
    opts: ['Stop', 'Yield', 'Danger ahead', 'No entry'],
    exp: 'In the United States, an octagon (8-sided shape) is exclusively used for STOP signs. You can recognize the meaning of a STOP sign even if you cannot read the word — its unique shape always means stop completely.'
  },
  zh: {
    q: '红色八边形标志始终表示：',
    opts: ['停车', '让行', '前方危险', '禁止进入'],
    exp: '在美国，八边形（8边形状）专门用于停车标志。即使您看不清文字，也能通过其独特形状认出停车标志——八边形始终意味着完全停车。'
  },
  zhTW: {
    q: '紅色八邊形標誌始終表示：',
    opts: ['停車', '讓行', '前方危險', '禁止進入'],
    exp: '在美國，八邊形（8邊形狀）專門用於停車標誌。即使您看不清文字，也能通過其獨特形狀認出停車標誌——八邊形始終意味著完全停車。'
  },
  es: {
    q: 'Una forma de octágono rojo en una señal siempre significa:',
    opts: ['Alto', 'Ceda el paso', 'Peligro adelante', 'Sin entrada'],
    exp: 'En los Estados Unidos, el octágono (forma de 8 lados) se usa exclusivamente para las señales de ALTO. Puede reconocer el significado de una señal de ALTO incluso si no puede leer la palabra — su forma única siempre significa detenerse completamente.'
  },
  ans: 0
},

{
  id: 22, cat: 'signs',
  en: {
    q: 'An inverted triangle (pointing downward) shape always means:',
    opts: ['Yield', 'Stop', 'Warning', 'One way'],
    exp: 'An inverted (upside-down) triangle shape is exclusively used for YIELD signs. Like the octagon for STOP, the inverted triangle shape alone communicates "yield the right of way" even without words.'
  },
  zh: {
    q: '倒三角形（尖端朝下）标志始终表示：',
    opts: ['让行', '停车', '警告', '单向行驶'],
    exp: '倒三角形（尖端朝下）形状专门用于让行标志。就像八边形代表停车一样，倒三角形本身即可传达"让出优先通行权"的含义，即使没有文字说明。'
  },
  zhTW: {
    q: '倒三角形（尖端朝下）標誌始終表示：',
    opts: ['讓行', '停車', '警告', '單向行駛'],
    exp: '倒三角形（尖端朝下）形狀專門用於讓行標誌。就像八邊形代表停車一樣，倒三角形本身即可傳達「讓出優先通行權」的含義，即使沒有文字說明。'
  },
  es: {
    q: 'Una forma de triángulo invertido (apuntando hacia abajo) siempre significa:',
    opts: ['Ceda el paso', 'Alto', 'Advertencia', 'Un sentido'],
    exp: 'La forma de triángulo invertido (boca abajo) se usa exclusivamente para las señales de CEDA EL PASO. Al igual que el octágono para ALTO, la forma de triángulo invertido por sí sola comunica "ceda el derecho de paso" incluso sin palabras.'
  },
  ans: 0
},

{
  id: 23, cat: 'signs',
  en: {
    q: 'Yellow diamond-shaped signs are used for:',
    opts: ['Warning — alerting drivers to potential hazards ahead', 'Regulatory — telling drivers what they must do', 'Informational — providing guidance and directions', 'Construction — marking work zones'],
    exp: 'Yellow diamond-shaped signs are warning signs. They alert drivers to upcoming hazards, changes in road conditions, or situations requiring special attention. Examples include curve ahead, pedestrian crossing, and slippery when wet signs.'
  },
  zh: {
    q: '黄色菱形标志用于：',
    opts: ['警告——提醒驾驶员前方有潜在危险', '规定——告知驾驶员必须遵守的规则', '信息——提供指引和方向', '施工——标示施工区域'],
    exp: '黄色菱形标志是警告标志，提醒驾驶员前方有危险、道路条件变化或需要特别注意的情况。例如前方弯道、行人穿越和路面湿滑等标志。'
  },
  zhTW: {
    q: '黃色菱形標誌用於：',
    opts: ['警告——提醒駕駛員前方有潛在危險', '規定——告知駕駛員必須遵守的規則', '信息——提供指引和方向', '施工——標示施工區域'],
    exp: '黃色菱形標誌是警告標誌，提醒駕駛員前方有危險、道路條件變化或需要特別注意的情況。例如前方彎道、行人穿越和路面濕滑等標誌。'
  },
  es: {
    q: 'Las señales de diamante amarillo se usan para:',
    opts: ['Advertencia — alertar a los conductores sobre peligros potenciales adelante', 'Regulación — decir a los conductores lo que deben hacer', 'Información — proporcionar orientación y direcciones', 'Construcción — marcar zonas de trabajo'],
    exp: 'Las señales de diamante amarillo son señales de advertencia. Alertan a los conductores sobre peligros próximos, cambios en las condiciones de la carretera o situaciones que requieren atención especial.'
  },
  ans: 0
},

{
  id: 24, cat: 'signs',
  en: {
    q: 'White rectangular signs with black letters are used for:',
    opts: ['Regulatory information — rules and laws you must obey', 'Warnings about road hazards', 'General information and services', 'Guidance and directions'],
    exp: 'White rectangular signs with black text are regulatory signs. They inform drivers of traffic laws and regulations they must follow, such as speed limits, turn restrictions, and lane usage rules.'
  },
  zh: {
    q: '黑字白色矩形标志用于：',
    opts: ['规定信息——您必须遵守的规则和法律', '道路危险警告', '一般信息和服务', '指引和方向'],
    exp: '黑字白色矩形标志是规定性标志，告知驾驶员必须遵守的交通法律法规，例如限速、转弯限制和车道使用规定。'
  },
  zhTW: {
    q: '黑字白色矩形標誌用於：',
    opts: ['規定信息——您必須遵守的規則和法律', '道路危險警告', '一般信息和服務', '指引和方向'],
    exp: '黑字白色矩形標誌是規定性標誌，告知駕駛員必須遵守的交通法律法規，例如限速、轉彎限制和車道使用規定。'
  },
  es: {
    q: 'Las señales rectangulares blancas con letras negras se usan para:',
    opts: ['Información regulatoria — reglas y leyes que debe obedecer', 'Advertencias sobre peligros viales', 'Información general y servicios', 'Orientación y direcciones'],
    exp: 'Las señales rectangulares blancas con texto negro son señales regulatorias. Informan a los conductores sobre las leyes y regulaciones de tráfico que deben seguir, como límites de velocidad, restricciones de giro y reglas de uso de carriles.'
  },
  ans: 0
},

{
  id: 25, cat: 'signs',
  en: {
    q: 'Blue signs on California roads indicate:',
    opts: ['Motorist services such as gas, food, hospital, and lodging', 'Highway directions and route numbers', 'Warnings about road conditions', 'Recreational and cultural areas'],
    exp: 'Blue signs provide information about motorist services available nearby — including hospitals (H), rest areas, gas stations, food, and lodging. The "H" on a blue sign directs you to a hospital.'
  },
  zh: {
    q: '加州道路上的蓝色标志表示：',
    opts: ['驾驶人服务，如加油站、餐厅、医院和住宿', '公路方向和路线编号', '道路状况警告', '休闲和文化区域'],
    exp: '蓝色标志提供附近驾驶人服务的信息，包括医院（H）、休息区、加油站、餐饮和住宿。蓝色标志上的"H"指引前往医院的方向。'
  },
  zhTW: {
    q: '加州道路上的藍色標誌表示：',
    opts: ['駕駛人服務，如加油站、餐廳、醫院和住宿', '公路方向和路線編號', '道路狀況警告', '休閒和文化區域'],
    exp: '藍色標誌提供附近駕駛人服務的信息，包括醫院（H）、休息區、加油站、餐飲和住宿。藍色標誌上的「H」指引前往醫院的方向。'
  },
  es: {
    q: 'Las señales azules en las carreteras de California indican:',
    opts: ['Servicios para motoristas como gasolina, comida, hospital y alojamiento', 'Direcciones de autopista y números de ruta', 'Advertencias sobre condiciones viales', 'Áreas recreativas y culturales'],
    exp: 'Las señales azules proporcionan información sobre los servicios para motoristas disponibles cerca — incluyendo hospitales (H), áreas de descanso, gasolineras, comida y alojamiento.'
  },
  ans: 0
},

{
  id: 26, cat: 'laws',
  en: {
    q: 'When are you required to turn on your headlights in California?',
    opts: ['30 minutes after sunset until 30 minutes before sunrise, and when visibility is under 1,000 feet', 'Only after dark — nighttime hours', 'Only during rain or fog', 'When other drivers flash their lights at you'],
    exp: 'California law requires headlights from 30 minutes after sunset to 30 minutes before sunrise. You must also use headlights when visibility is less than 1,000 feet due to weather, including fog, rain, smoke, or dust.'
  },
  zh: {
    q: '在加州，什么时候必须开启车头灯？',
    opts: ['日落后30分钟至日出前30分钟，以及能见度低于1000英尺时', '仅在黑暗的夜间', '仅在下雨或有雾时', '当其他驾驶员闪灯提示您时'],
    exp: '加州法律要求在日落后30分钟至日出前30分钟期间开启车头灯。当因雾、雨、烟雾或尘土等天气原因导致能见度低于1000英尺时，也必须开启车头灯。'
  },
  zhTW: {
    q: '在加州，什麼時候必須開啟車頭燈？',
    opts: ['日落後30分鐘至日出前30分鐘，以及能見度低於1000英尺時', '僅在黑暗的夜間', '僅在下雨或有霧時', '當其他駕駛員閃燈提示您時'],
    exp: '加州法律要求在日落後30分鐘至日出前30分鐘期間開啟車頭燈。當因霧、雨、煙霧或塵土等天氣原因導致能見度低於1000英尺時，也必須開啟車頭燈。'
  },
  es: {
    q: '¿Cuándo se requiere encender los faros en California?',
    opts: ['30 minutos después del atardecer hasta 30 minutos antes del amanecer, y cuando la visibilidad es menor de 1,000 pies', 'Solo después del anochecer — horas nocturnas', 'Solo durante lluvia o niebla', 'Cuando otros conductores le hagan destellos'],
    exp: 'La ley de California requiere faros desde 30 minutos después del atardecer hasta 30 minutos antes del amanecer. También debe usar faros cuando la visibilidad es menor de 1,000 pies debido al clima, incluyendo niebla, lluvia, humo o polvo.'
  },
  ans: 0
},

{
  id: 27, cat: 'laws',
  en: {
    q: 'In California, how far in advance must you signal before turning or changing lanes?',
    opts: ['At least 100 feet before turning; signal before every lane change', 'Only when other traffic is nearby', '50 feet in cities, 200 feet on highways', 'Just as you begin to turn'],
    exp: 'California law requires you to signal at least 100 feet before making a turn. On freeways, signal at least 5 seconds before changing lanes. You must always signal regardless of whether other traffic is visible.'
  },
  zh: {
    q: '在加州，转弯或变道前需要提前多远打转向灯？',
    opts: ['转弯前至少100英尺；每次变道前均须打灯', '仅当附近有其他车辆时', '城市内50英尺，高速公路上200英尺', '开始转弯时即可'],
    exp: '加州法律要求在转弯前至少100英尺处打转向灯。在高速公路上，变道前至少需要提前5秒打灯。无论是否能看见其他车辆，您都必须打转向灯。'
  },
  zhTW: {
    q: '在加州，轉彎或變道前需要提前多遠打轉向燈？',
    opts: ['轉彎前至少100英尺；每次變道前均須打燈', '僅當附近有其他車輛時', '城市內50英尺，高速公路上200英尺', '開始轉彎時即可'],
    exp: '加州法律要求在轉彎前至少100英尺處打轉向燈。在高速公路上，變道前至少需要提前5秒打燈。無論是否能看見其他車輛，您都必須打轉向燈。'
  },
  es: {
    q: '¿Con cuánta anticipación debe señalar antes de girar o cambiar de carril en California?',
    opts: ['Al menos 100 pies antes de girar; señale antes de cada cambio de carril', 'Solo cuando hay tráfico cercano', '50 pies en ciudades, 200 pies en autopistas', 'Justo cuando comienza a girar'],
    exp: 'La ley de California requiere señalizar al menos 100 pies antes de girar. En autopistas, señalice al menos 5 segundos antes de cambiar de carril. Siempre debe señalizar independientemente de si hay otro tráfico visible.'
  },
  ans: 0
},

{
  id: 28, cat: 'laws',
  en: {
    q: 'Can you make a right turn at a red light in California?',
    opts: ['Yes, after coming to a complete stop and yielding to all traffic and pedestrians', 'No, you must always wait for a green light', 'Yes, without stopping if no traffic is present', 'Only if there is a green arrow signal'],
    exp: 'In California, you may turn right at a red light after making a complete stop, unless a sign prohibits it. You must yield to pedestrians and all other traffic before turning. Some intersections have "No Turn on Red" signs.'
  },
  zh: {
    q: '在加州，红灯时可以右转吗？',
    opts: ['可以，完全停车并让行所有车辆和行人后可以右转', '不可以，必须等绿灯', '如果没有车辆，可以不停车直接转弯', '仅当有绿色箭头信号时'],
    exp: '在加州，完全停车后，如果没有禁止转弯的标志，可以在红灯时右转。转弯前必须让行行人和所有其他车辆。某些路口设有"红灯禁止右转"标志。'
  },
  zhTW: {
    q: '在加州，紅燈時可以右轉嗎？',
    opts: ['可以，完全停車並讓行所有車輛和行人後可以右轉', '不可以，必須等綠燈', '如果沒有車輛，可以不停車直接轉彎', '僅當有綠色箭頭信號時'],
    exp: '在加州，完全停車後，如果沒有禁止轉彎的標誌，可以在紅燈時右轉。轉彎前必須讓行行人和所有其他車輛。某些路口設有「紅燈禁止右轉」標誌。'
  },
  es: {
    q: '¿Puede girar a la derecha en un semáforo en rojo en California?',
    opts: ['Sí, después de hacer una parada completa y ceder el paso a todo el tráfico y peatones', 'No, siempre debe esperar la luz verde', 'Sí, sin detenerse si no hay tráfico', 'Solo si hay una señal de flecha verde'],
    exp: 'En California, puede girar a la derecha en un semáforo en rojo después de hacer una parada completa, a menos que una señal lo prohíba. Debe ceder el paso a los peatones y a todo el tráfico antes de girar.'
  },
  ans: 0
},

{
  id: 29, cat: 'laws',
  en: {
    q: 'What is the three-second following distance rule?',
    opts: ['Choose a fixed point; when the car ahead passes it, at least 3 seconds should pass before you reach it', 'Stay at least 3 car lengths behind at all times', 'Maintain 30 mph below the car in front', 'Never drive within 3 feet of another vehicle'],
    exp: 'The 3-second rule: pick a fixed object (sign, tree) ahead. When the vehicle in front passes it, count "one-thousand-one, one-thousand-two, one-thousand-three." You should not reach that object before finishing the count. Increase to 4+ seconds in bad weather.'
  },
  zh: {
    q: '3秒跟车距离规则是什么？',
    opts: ['选择一个固定参照物；当前车经过它时，您到达它之前应该经过至少3秒', '始终保持至少3辆车身的距离', '以低于前车30英里/小时的速度行驶', '切勿在距离另一辆车3英尺以内行驶'],
    exp: '3秒规则：选择前方一个固定物体（标志、树木）。当前车经过它时，数"一千零一、一千零二、一千零三"。在数完之前，您不应到达该物体。恶劣天气下应增加到4秒以上。'
  },
  zhTW: {
    q: '3秒跟車距離規則是什麼？',
    opts: ['選擇一個固定參照物；當前車經過它時，您到達它之前應該經過至少3秒', '始終保持至少3輛車身的距離', '以低於前車30英里/小時的速度行駛', '切勿在距離另一輛車3英尺以內行駛'],
    exp: '3秒規則：選擇前方一個固定物體（標誌、樹木）。當前車經過它時，數「一千零一、一千零二、一千零三」。在數完之前，您不應到達該物體。惡劣天氣下應增加到4秒以上。'
  },
  es: {
    q: '¿Cuál es la regla de distancia de seguimiento de tres segundos?',
    opts: ['Elija un punto fijo; cuando el auto de adelante lo pase, deben pasar al menos 3 segundos antes de que usted llegue', 'Manténgase al menos 3 largos de auto detrás en todo momento', 'Mantenga 30 mph menos que el auto de adelante', 'Nunca conduzca a menos de 3 pies de otro vehículo'],
    exp: 'La regla de los 3 segundos: elija un objeto fijo adelante. Cuando el vehículo de adelante lo pase, cuente "mil uno, mil dos, mil tres." No debe llegar a ese objeto antes de terminar la cuenta. Aumente a 4+ segundos en mal clima.'
  },
  ans: 0
},

{
  id: 30, cat: 'laws',
  en: {
    q: 'What is California\'s law for using a cell phone while driving (for drivers 18 and older)?',
    opts: ['Only hands-free use is allowed — no holding the phone', 'Cell phones are completely banned while driving', 'You may use a cell phone briefly if stopped at a red light', 'Texting is allowed but talking is banned'],
    exp: 'Drivers 18 and older may only use a cell phone in hands-free mode (Bluetooth, speakerphone mounted on dash). Holding your phone while driving is illegal. Drivers under 18 may not use any wireless device while driving, even hands-free.'
  },
  zh: {
    q: '加州对18岁及以上驾驶员使用手机有什么规定？',
    opts: ['只允许免提使用——不得手持手机', '驾驶时完全禁止使用手机', '在红灯停车时可以短暂使用手机', '允许发短信但禁止通话'],
    exp: '18岁及以上的驾驶员只能以免提方式使用手机（蓝牙、固定在仪表盘上的免提设备）。驾驶时手持手机是违法的。18岁以下的驾驶员在驾驶时不得使用任何无线设备，即使是免提方式也不行。'
  },
  zhTW: {
    q: '加州對18歲及以上駕駛員使用手機有什麼規定？',
    opts: ['只允許免提使用——不得手持手機', '駕駛時完全禁止使用手機', '在紅燈停車時可以短暫使用手機', '允許發短信但禁止通話'],
    exp: '18歲及以上的駕駛員只能以免提方式使用手機（藍牙、固定在儀表板上的免提設備）。駕駛時手持手機是違法的。18歲以下的駕駛員在駕駛時不得使用任何無線設備，即使是免提方式也不行。'
  },
  es: {
    q: '¿Cuál es la ley de California para usar un teléfono celular mientras conduce (para conductores de 18 años o más)?',
    opts: ['Solo se permite el uso manos libres — no sostener el teléfono', 'Los teléfonos celulares están completamente prohibidos mientras conduce', 'Puede usar un celular brevemente si está detenido en un semáforo en rojo', 'Se permite enviar mensajes pero se prohíbe hablar'],
    exp: 'Los conductores de 18 años o más solo pueden usar un teléfono celular en modo manos libres (Bluetooth, altavoz montado en el tablero). Sostener el teléfono mientras conduce es ilegal. Los conductores menores de 18 años no pueden usar ningún dispositivo inalámbrico mientras conducen, ni siquiera manos libres.'
  },
  ans: 0
},


// ═══════════════════════════════════════════════════════════════
//  BATCH 4 — Traffic Laws (Q31–40)
// ═══════════════════════════════════════════════════════════════

{
  id: 31, cat: 'laws',
  en: {
    q: 'Are all vehicle occupants required to wear seat belts in California?',
    opts: ['Yes — driver and all passengers must be buckled at all times', 'Only the driver and front-seat passengers', 'Only children under 16', 'Seat belts are recommended but not required for adults'],
    exp: 'California\'s mandatory seat belt law requires every occupant of a vehicle to wear a seat belt, regardless of where they are seated. The driver is responsible for ensuring all passengers under 16 are buckled. Fines apply to each unbelted occupant.'
  },
  zh: { q: '在加州，车内所有人员都必须系安全带吗？', opts: ['是——司机和所有乘客随时都须系好安全带', '仅限司机和前排乘客', '仅限16岁以下儿童', '成人系安全带是建议而非强制'], exp: '加州强制安全带法要求车内每位乘员，无论坐在哪个位置，都必须系好安全带。司机有责任确保16岁以下的所有乘客已系好安全带。每位未系安全带的乘员均可被单独罚款。' },
  zhTW: { q: '在加州，車內所有人員都必須繫安全帶嗎？', opts: ['是——司機和所有乘客隨時都須繫好安全帶', '僅限司機和前排乘客', '僅限16歲以下兒童', '成人繫安全帶是建議而非強制'], exp: '加州強制安全帶法要求車內每位乘員，無論坐在哪個位置，都必須繫好安全帶。司機有責任確保16歲以下的所有乘客已繫好安全帶。每位未繫安全帶的乘員均可被單獨罰款。' },
  es: { q: '¿Todos los ocupantes del vehículo deben usar cinturón de seguridad en California?', opts: ['Sí — el conductor y todos los pasajeros deben estar abrochados en todo momento', 'Solo el conductor y los pasajeros delanteros', 'Solo niños menores de 16 años', 'Los cinturones se recomiendan pero no son obligatorios para adultos'], exp: 'La ley obligatoria de cinturón de seguridad de California requiere que todos los ocupantes del vehículo usen cinturón de seguridad, independientemente de dónde estén sentados. El conductor es responsable de que todos los pasajeros menores de 16 años estén abrochados.' },
  ans: 0
},

{
  id: 32, cat: 'laws',
  en: {
    q: 'When must you dim your high-beam headlights?',
    opts: ['Within 500 feet of an oncoming vehicle and within 300 feet when following another vehicle', 'Only in city limits — always use high beams on highways', 'Only when flashed by another driver', 'Whenever driving below 45 mph'],
    exp: 'In California, you must dim high beams (use low beams) when within 500 feet of an oncoming vehicle or within 300 feet when following another vehicle. High beams can blind other drivers, causing accidents.'
  },
  zh: { q: '什么时候必须关闭远光灯（切换为近光灯）？', opts: ['与对向来车距离500英尺以内，以及跟随其他车辆300英尺以内', '仅在市区内——在公路上始终使用远光灯', '仅当其他驾驶员闪灯时', '时速低于45英里时'], exp: '在加州，当与对向来车距离500英尺以内，或跟随其他车辆300英尺以内时，必须关闭远光灯（使用近光灯）。远光灯会使其他驾驶员眼花缭乱，从而引发事故。' },
  zhTW: { q: '什麼時候必須關閉遠光燈（切換為近光燈）？', opts: ['與對向來車距離500英尺以內，以及跟隨其他車輛300英尺以內', '僅在市區內——在公路上始終使用遠光燈', '僅當其他駕駛員閃燈時', '時速低於45英里時'], exp: '在加州，當與對向來車距離500英尺以內，或跟隨其他車輛300英尺以內時，必須關閉遠光燈（使用近光燈）。遠光燈會使其他駕駛員眼花繚亂，從而引發事故。' },
  es: { q: '¿Cuándo debe apagar las luces largas (cambiar a cortas)?', opts: ['A 500 pies de un vehículo que viene de frente y a 300 pies cuando sigue a otro vehículo', 'Solo en límites de ciudad — use luces largas en autopistas', 'Solo cuando otro conductor le haga destellos', 'Siempre que conduzca por debajo de 45 mph'], exp: 'En California, debe apagar las luces largas (usar luces cortas) cuando esté a 500 pies de un vehículo que viene de frente o a 300 pies cuando sigue a otro vehículo. Las luces largas pueden cegar a otros conductores, causando accidentes.' },
  ans: 0
},

{
  id: 33, cat: 'laws',
  en: {
    q: 'You are approaching an intersection and the traffic light turns yellow. What should you do?',
    opts: ['Stop safely if you can; if stopping would be unsafe, proceed with caution', 'Always speed up to clear the intersection before red', 'Always stop immediately — yellow means stop', 'Flash your hazard lights and proceed slowly'],
    exp: 'A yellow light means the signal is about to turn red. Stop if you can do so safely. If you are too close to stop safely, proceed through the intersection with caution. It is illegal to speed up to "beat" a yellow light.'
  },
  zh: { q: '您正驶向一个路口，此时交通灯变为黄色，您应该怎么做？', opts: ['如果能安全停车就停车；如果停车不安全，则谨慎通过', '始终加速在变红前通过路口', '始终立即停车——黄灯就是停车', '开启危险灯并缓慢通过'], exp: '黄灯表示信号即将变红。如果能安全停车，请停车。如果距离太近无法安全停车，则谨慎通过路口。加速"抢黄灯"是违法的。' },
  zhTW: { q: '您正駛向一個路口，此時交通燈變為黃色，您應該怎麼做？', opts: ['如果能安全停車就停車；如果停車不安全，則謹慎通過', '始終加速在變紅前通過路口', '始終立即停車——黃燈就是停車', '開啟危險燈並緩慢通過'], exp: '黃燈表示信號即將變紅。如果能安全停車，請停車。如果距離太近無法安全停車，則謹慎通過路口。加速「搶黃燈」是違法的。' },
  es: { q: 'Se aproxima a una intersección y el semáforo se pone amarillo. ¿Qué debe hacer?', opts: ['Detenerse con seguridad si puede; si detenerse sería inseguro, proceda con precaución', 'Siempre acelerar para cruzar antes del rojo', 'Siempre detenerse inmediatamente — el amarillo significa alto', 'Encender las luces de emergencia y avanzar despacio'], exp: 'Una luz amarilla significa que la señal está a punto de ponerse en rojo. Deténgase si puede hacerlo de forma segura. Si está demasiado cerca para detenerse con seguridad, proceda por la intersección con precaución.' },
  ans: 0
},

{
  id: 34, cat: 'laws',
  en: {
    q: 'What does a flashing red traffic light mean?',
    opts: ['Treat it as a STOP sign — come to a complete stop and proceed when safe', 'Slow down and proceed with caution', 'The signal is broken — turn around', 'Yield to cross traffic only'],
    exp: 'A flashing red light has the same meaning as a STOP sign. You must come to a complete stop, yield to all traffic and pedestrians, then proceed when it is safe to do so.'
  },
  zh: { q: '闪烁的红色交通灯是什么意思？', opts: ['按停车标志处理——完全停车，确认安全后通过', '减速并谨慎通过', '信号灯故障——掉头', '仅让横向来车先行'], exp: '闪烁红灯的含义与停车标志相同。您必须完全停车，让行所有车辆和行人，然后在确认安全后通行。' },
  zhTW: { q: '閃爍的紅色交通燈是什麼意思？', opts: ['按停車標誌處理——完全停車，確認安全後通過', '減速並謹慎通過', '信號燈故障——掉頭', '僅讓橫向來車先行'], exp: '閃爍紅燈的含義與停車標誌相同。您必須完全停車，讓行所有車輛和行人，然後在確認安全後通行。' },
  es: { q: '¿Qué significa un semáforo rojo intermitente?', opts: ['Trátelo como una señal de ALTO — deténgase completamente y avance cuando sea seguro', 'Reduzca la velocidad y proceda con precaución', 'La señal está rota — dé la vuelta', 'Ceda el paso solo al tráfico cruzado'], exp: 'Una luz roja intermitente tiene el mismo significado que una señal de ALTO. Debe detenerse completamente, ceder el paso a todo el tráfico y peatones, luego proceder cuando sea seguro.' },
  ans: 0
},

{
  id: 35, cat: 'laws',
  en: {
    q: 'What does a flashing yellow traffic light mean?',
    opts: ['Slow down and proceed with caution', 'Stop and wait for green', 'Yield to oncoming traffic before proceeding', 'Merge into the left lane'],
    exp: 'A flashing yellow light is a warning to slow down and proceed with caution. You do not need to stop, but you must be alert for cross traffic, pedestrians, and other hazards.'
  },
  zh: { q: '闪烁的黄色交通灯是什么意思？', opts: ['减速并谨慎通过', '停车等待绿灯', '让行对向车辆后再通过', '并入左车道'], exp: '闪烁黄灯警告您减速并谨慎通行。您无需停车，但必须注意横向来车、行人和其他危险。' },
  zhTW: { q: '閃爍的黃色交通燈是什麼意思？', opts: ['減速並謹慎通過', '停車等待綠燈', '讓行對向車輛後再通過', '並入左車道'], exp: '閃爍黃燈警告您減速並謹慎通行。您無需停車，但必須注意橫向來車、行人和其他危險。' },
  es: { q: '¿Qué significa un semáforo amarillo intermitente?', opts: ['Reduzca la velocidad y proceda con precaución', 'Deténgase y espere el verde', 'Ceda el paso al tráfico que viene antes de continuar', 'Fusiónese en el carril izquierdo'], exp: 'Una luz amarilla intermitente es una advertencia para reducir la velocidad y proceder con precaución. No necesita detenerse, pero debe estar alerta ante el tráfico cruzado, peatones y otros peligros.' },
  ans: 0
},

{
  id: 36, cat: 'laws',
  en: {
    q: 'A traffic signal is not working at an intersection. What should you do?',
    opts: ['Treat it as a four-way stop — all drivers stop and take turns', 'The driver on the busier road has the right of way', 'Proceed normally — signals are advisory only', 'Come to a complete stop and do not proceed'],
    exp: 'When a traffic signal is completely dark (not working), treat the intersection as a four-way stop. All vehicles from all directions must stop, then proceed in turn. This is required by California law.'
  },
  zh: { q: '路口的交通灯不工作了，您应该怎么做？', opts: ['按四路停车处理——所有驾驶员停车依次通行', '较繁忙道路上的驾驶员有优先通行权', '正常通行——信号灯仅供参考', '完全停车且不得通行'], exp: '当交通灯完全熄灭（不工作）时，应将该路口视为四路停车路口处理。所有方向的车辆均须停车，然后依次通行。这是加州法律的要求。' },
  zhTW: { q: '路口的交通燈不工作了，您應該怎麼做？', opts: ['按四路停車處理——所有駕駛員停車依次通行', '較繁忙道路上的駕駛員有優先通行權', '正常通行——信號燈僅供參考', '完全停車且不得通行'], exp: '當交通燈完全熄滅（不工作）時，應將該路口視為四路停車路口處理。所有方向的車輛均須停車，然後依次通行。這是加州法律的要求。' },
  es: { q: 'Un semáforo no funciona en una intersección. ¿Qué debe hacer?', opts: ['Trátelo como un alto de cuatro vías — todos los conductores se detienen y toman turnos', 'El conductor en la carretera más transitada tiene el derecho de paso', 'Continúe normalmente — las señales son solo de asesoramiento', 'Deténgase completamente y no avance'], exp: 'Cuando un semáforo está completamente apagado (sin funcionar), trate la intersección como un alto de cuatro vías. Todos los vehículos de todas las direcciones deben detenerse, luego proceder en turno.' },
  ans: 0
},

{
  id: 37, cat: 'laws',
  en: {
    q: 'When are you allowed to pass another vehicle on the right side?',
    opts: ['When the vehicle ahead is making or waiting to make a left turn, and there is a paved lane to the right', 'Whenever traffic is slow', 'Only on a freeway with multiple lanes', 'Passing on the right is always illegal in California'],
    exp: 'You may pass on the right when: (1) the vehicle ahead is turning left, and there is enough paved road to pass safely, or (2) on a one-way street or road wide enough for two or more lanes of traffic. Passing on the shoulder is illegal.'
  },
  zh: { q: '什么情况下允许从右侧超车？', opts: ['当前方车辆正在或等待左转，且右侧有铺装车道时', '每当交通缓慢时', '仅在多车道高速公路上', '在加州从右侧超车始终违法'], exp: '以下情况可以从右侧超车：(1) 前方车辆正在左转，且右侧有足够的铺装路面可安全超车；(2) 在单行道或有两条及以上行车道宽度的道路上。从路肩超车是违法的。' },
  zhTW: { q: '什麼情況下允許從右側超車？', opts: ['當前方車輛正在或等待左轉，且右側有鋪裝車道時', '每當交通緩慢時', '僅在多車道高速公路上', '在加州從右側超車始終違法'], exp: '以下情況可以從右側超車：(1) 前方車輛正在左轉，且右側有足夠的鋪裝路面可安全超車；(2) 在單行道或有兩條及以上行車道寬度的道路上。從路肩超車是違法的。' },
  es: { q: '¿Cuándo se le permite pasar a otro vehículo por el lado derecho?', opts: ['Cuando el vehículo de adelante está girando o esperando girar a la izquierda, y hay un carril pavimentado a la derecha', 'Siempre que el tráfico sea lento', 'Solo en una autopista con múltiples carriles', 'Adelantar por la derecha siempre es ilegal en California'], exp: 'Puede adelantar por la derecha cuando: (1) el vehículo de adelante está girando a la izquierda y hay suficiente carretera pavimentada para adelantar con seguridad, o (2) en una calle de un sentido o carretera lo suficientemente ancha para dos o más carriles.' },
  ans: 0
},

{
  id: 38, cat: 'laws',
  en: {
    q: 'What is the law regarding texting while driving in California?',
    opts: ['Texting while driving is illegal for all drivers at all times', 'Texting is allowed at red lights and stop signs', 'Only prohibited on freeways', 'Allowed if using voice-to-text'],
    exp: 'Texting while driving is illegal in California for all drivers, at all times — even when stopped at a red light or stop sign. The vehicle must be pulled safely off the road and parked to use any handheld device for texting.'
  },
  zh: { q: '加州关于驾驶时发短信的法律规定是什么？', opts: ['任何时候驾驶时发短信均为违法，适用于所有驾驶员', '在红灯和停车标志处允许发短信', '仅在高速公路上禁止', '使用语音转文字时允许'], exp: '在加州，所有驾驶员在任何时候驾驶时发短信均为违法——即使在红灯或停车标志处停车时也不行。必须将车辆安全停在路边并熄火，才能使用手持设备发短信。' },
  zhTW: { q: '加州關於駕駛時發短信的法律規定是什麼？', opts: ['任何時候駕駛時發短信均為違法，適用於所有駕駛員', '在紅燈和停車標誌處允許發短信', '僅在高速公路上禁止', '使用語音轉文字時允許'], exp: '在加州，所有駕駛員在任何時候駕駛時發短信均為違法——即使在紅燈或停車標誌處停車時也不行。必須將車輛安全停在路邊並熄火，才能使用手持設備發短信。' },
  es: { q: '¿Cuál es la ley sobre enviar mensajes de texto mientras conduce en California?', opts: ['Enviar mensajes de texto mientras conduce es ilegal para todos los conductores en todo momento', 'Se permite enviar mensajes en semáforos en rojo y señales de alto', 'Solo está prohibido en autopistas', 'Permitido si usa voz a texto'], exp: 'Enviar mensajes de texto mientras conduce es ilegal en California para todos los conductores, en todo momento — incluso cuando está detenido en un semáforo en rojo o señal de alto. El vehículo debe estar estacionado de forma segura fuera de la carretera para usar cualquier dispositivo.' },
  ans: 0
},

{
  id: 39, cat: 'laws',
  en: {
    q: 'When can you legally make a U-turn in California?',
    opts: ['At intersections where it can be done safely and no sign prohibits it', 'Anywhere on a public road if no cars are present', 'Only in residential areas', 'U-turns are always illegal on public roads'],
    exp: 'U-turns are legal where: (1) no sign prohibits them, (2) you have a clear view of 200 feet in each direction, (3) it is not at a railroad crossing, fire station entrance, or where a police officer is directing traffic, and (4) it can be done safely.'
  },
  zh: { q: '在加州什么情况下可以合法掉头？', opts: ['在没有禁止标志且可以安全完成的路口', '公共道路上任何没有车辆的地方', '仅在住宅区', '公共道路上掉头始终违法'], exp: '以下情况掉头合法：(1) 没有禁止掉头的标志；(2) 向每个方向均有200英尺的清晰视野；(3) 不在铁路道口、消防站入口处或交警指挥交通的路口；(4) 可以安全完成。' },
  zhTW: { q: '在加州什麼情況下可以合法掉頭？', opts: ['在沒有禁止標誌且可以安全完成的路口', '公共道路上任何沒有車輛的地方', '僅在住宅區', '公共道路上掉頭始終違法'], exp: '以下情況掉頭合法：(1) 沒有禁止掉頭的標誌；(2) 向每個方向均有200英尺的清晰視野；(3) 不在鐵路道口、消防站入口處或交警指揮交通的路口；(4) 可以安全完成。' },
  es: { q: '¿Cuándo puede hacer legalmente un giro en U en California?', opts: ['En intersecciones donde se puede hacer de forma segura y ninguna señal lo prohíbe', 'En cualquier lugar de una carretera pública si no hay autos', 'Solo en áreas residenciales', 'Los giros en U siempre son ilegales en carreteras públicas'], exp: 'Los giros en U son legales donde: (1) ninguna señal los prohíbe, (2) tiene una vista despejada de 200 pies en cada dirección, (3) no es en un cruce ferroviario, entrada de estación de bomberos, o donde un oficial dirige el tráfico, y (4) se puede hacer de forma segura.' },
  ans: 0
},

{
  id: 40, cat: 'laws',
  en: {
    q: 'What should you do when you hear or see an emergency vehicle with lights and sirens approaching?',
    opts: ['Pull to the right edge of the road and stop until the emergency vehicle passes', 'Speed up to get out of its way quickly', 'Stop immediately in your current lane', 'Continue driving — emergency vehicles will go around you'],
    exp: 'When an emergency vehicle with lights or siren is approaching, you must immediately pull to the right edge of the road (or curb), stop, and remain stopped until it passes. This law applies whether the vehicle is approaching from ahead or behind.'
  },
  zh: { q: '当您听到或看到带灯光和警报声的紧急车辆驶来时，您应该怎么做？', opts: ['靠右停在路边，等紧急车辆通过后再继续行驶', '加速给它让路', '立即在当前车道停车', '继续行驶——紧急车辆会绕过您'], exp: '当带有灯光或警报的紧急车辆驶来时，您必须立即靠右停在路边（或路缘），停车，并保持停车状态直到其通过。无论紧急车辆从前方还是后方驶来，此法律均适用。' },
  zhTW: { q: '當您聽到或看到帶燈光和警報聲的緊急車輛駛來時，您應該怎麼做？', opts: ['靠右停在路邊，等緊急車輛通過後再繼續行駛', '加速給它讓路', '立即在當前車道停車', '繼續行駛——緊急車輛會繞過您'], exp: '當帶有燈光或警報的緊急車輛駛來時，您必須立即靠右停在路邊（或路緣），停車，並保持停車狀態直到其通過。無論緊急車輛從前方還是後方駛來，此法律均適用。' },
  es: { q: '¿Qué debe hacer cuando escucha o ve un vehículo de emergencia con luces y sirenas aproximándose?', opts: ['Orillarse al borde derecho de la carretera y detenerse hasta que el vehículo de emergencia pase', 'Acelerar para quitarse del camino rápidamente', 'Detenerse inmediatamente en su carril actual', 'Continuar conduciendo — los vehículos de emergencia lo rodearán'], exp: 'Cuando un vehículo de emergencia con luces o sirena se aproxima, debe inmediatamente orillarse al borde derecho de la carretera (o la acera), detenerse y permanecer detenido hasta que pase. Esta ley aplica ya sea que el vehículo venga de adelante o de atrás.' },
  ans: 0
},


// ═══════════════════════════════════════════════════════════════
//  BATCH 5 — Traffic Laws (Q41–50)
// ═══════════════════════════════════════════════════════════════

{
  id: 41, cat: 'laws',
  en: {
    q: 'What is California\'s "Move Over" law?',
    opts: ['You must move over a lane (or slow to a safe speed) when passing stopped emergency vehicles, tow trucks, or Caltrans vehicles with flashing lights', 'You must move over only for police vehicles', 'Pull over whenever any vehicle has hazard lights on', 'Slow to 10 mph when passing any parked vehicle'],
    exp: 'California\'s Move Over Law requires drivers to move over one lane (when safe) or slow to a speed safe for conditions when passing any stopped emergency vehicle, tow truck, or Caltrans vehicle displaying flashing lights on the roadside. Violating this law can result in a fine.'
  },
  zh: { q: '加州的"让行"法（Move Over Law）是什么规定？', opts: ['经过停有闪灯的紧急车辆、拖车或交通部车辆时，须变换到相邻车道（或减速至安全速度）', '仅在经过警车时须变道', '任何车辆开启危险灯时均须靠边停车', '经过任何停靠车辆时减速至10英里/小时'], exp: '加州让行法要求驾驶员在经过停在路边、亮着闪灯的紧急车辆、拖车或交通部车辆时，须（在安全的情况下）向相邻车道变换，或减速至适合路况的安全速度。违反此法律可能被罚款。' },
  zhTW: { q: '加州的「讓行」法（Move Over Law）是什麼規定？', opts: ['經過停有閃燈的緊急車輛、拖車或交通部車輛時，須變換到相鄰車道（或減速至安全速度）', '僅在經過警車時須變道', '任何車輛開啟危險燈時均須靠邊停車', '經過任何停靠車輛時減速至10英里/小時'], exp: '加州讓行法要求駕駛員在經過停在路邊、亮著閃燈的緊急車輛、拖車或交通部車輛時，須（在安全的情況下）向相鄰車道變換，或減速至適合路況的安全速度。違反此法律可能被罰款。' },
  es: { q: '¿Cuál es la ley de "Ceder el Paso" (Move Over) de California?', opts: ['Debe cambiar de carril (o reducir a velocidad segura) al pasar vehículos de emergencia, grúas o vehículos de Caltrans detenidos con luces intermitentes', 'Debe ceder el paso solo para vehículos policiales', 'Orillarse cuando cualquier vehículo tenga luces de emergencia', 'Reducir a 10 mph al pasar cualquier vehículo estacionado'], exp: 'La Ley de Ceder el Paso de California requiere que los conductores cambien de carril (cuando sea seguro) o reduzcan a una velocidad segura al pasar cualquier vehículo de emergencia detenido, grúa o vehículo de Caltrans con luces intermitentes en la orilla de la carretera.' },
  ans: 0
},

{
  id: 42, cat: 'laws',
  en: {
    q: 'What must you do before changing lanes on a road or freeway?',
    opts: ['Signal, check mirrors, check blind spots by glancing over your shoulder, then change lanes smoothly', 'Signal and immediately change lanes', 'Check mirrors only — no need to look over shoulder', 'Only signal if other vehicles are nearby'],
    exp: 'Before changing lanes: (1) Signal your intent, (2) Check all mirrors, (3) Check blind spots by looking over your shoulder, (4) Make sure the lane is clear, then (5) smoothly change lanes while maintaining your speed. Never change multiple lanes at once.'
  },
  zh: { q: '在道路或高速公路上变道前，您必须做什么？', opts: ['打转向灯，查看后视镜，转头检查盲区，然后平稳变道', '打转向灯后立即变道', '仅查看后视镜——无需转头', '仅当附近有其他车辆时才打转向灯'], exp: '变道前：(1) 打转向灯示意；(2) 查看所有后视镜；(3) 转头查看盲区；(4) 确认车道畅通；(5) 保持速度平稳变道。切勿一次同时变换多条车道。' },
  zhTW: { q: '在道路或高速公路上變道前，您必須做什麼？', opts: ['打轉向燈，查看後視鏡，轉頭檢查盲區，然後平穩變道', '打轉向燈後立即變道', '僅查看後視鏡——無需轉頭', '僅當附近有其他車輛時才打轉向燈'], exp: '變道前：(1) 打轉向燈示意；(2) 查看所有後視鏡；(3) 轉頭查看盲區；(4) 確認車道暢通；(5) 保持速度平穩變道。切勿一次同時變換多條車道。' },
  es: { q: '¿Qué debe hacer antes de cambiar de carril en una carretera o autopista?', opts: ['Señalizar, revisar espejos, revisar puntos ciegos mirando sobre su hombro, luego cambiar de carril suavemente', 'Señalizar e inmediatamente cambiar de carril', 'Revisar solo los espejos — no es necesario mirar sobre el hombro', 'Solo señalizar si hay otros vehículos cerca'], exp: 'Antes de cambiar de carril: (1) Señalice su intención, (2) Revise todos los espejos, (3) Revise los puntos ciegos mirando sobre su hombro, (4) Asegúrese de que el carril esté libre, luego (5) cambie de carril suavemente manteniendo su velocidad.' },
  ans: 0
},

{
  id: 43, cat: 'laws',
  en: {
    q: 'When is it legal to pass another vehicle in a no-passing zone?',
    opts: ['It is never legal to pass in a designated no-passing zone', 'Only if the vehicle ahead is driving 10+ mph under the speed limit', 'You may pass if you can do so within 3 seconds', 'Only if the other driver signals you to pass'],
    exp: 'Passing in a no-passing zone (solid yellow line on your side, or a no-passing pennant sign) is always illegal, regardless of the other vehicle\'s speed. No-passing zones exist because sight distances are too limited to pass safely.'
  },
  zh: { q: '什么情况下在禁止超车区超车是合法的？', opts: ['在规定的禁止超车区超车永远是违法的', '仅当前方车辆速度比限速低10英里/小时以上时', '如果能在3秒内完成超车', '仅当对方驾驶员示意您超车时'], exp: '在禁止超车区（您一侧为实线黄线，或有禁止超车旗帜标志）超车永远是违法的，无论前方车辆的速度如何。禁止超车区的存在是因为视距不足以安全完成超车。' },
  zhTW: { q: '什麼情況下在禁止超車區超車是合法的？', opts: ['在規定的禁止超車區超車永遠是違法的', '僅當前方車輛速度比限速低10英里/小時以上時', '如果能在3秒內完成超車', '僅當對方駕駛員示意您超車時'], exp: '在禁止超車區（您一側為實線黃線，或有禁止超車旗幟標誌）超車永遠是違法的，無論前方車輛的速度如何。禁止超車區的存在是因為視距不足以安全完成超車。' },
  es: { q: '¿Cuándo es legal adelantar a otro vehículo en una zona de no adelantar?', opts: ['Nunca es legal adelantar en una zona de no adelantar designada', 'Solo si el vehículo de adelante conduce 10+ mph por debajo del límite', 'Puede adelantar si puede hacerlo en 3 segundos', 'Solo si el otro conductor le señala que adelante'], exp: 'Adelantar en una zona de no adelantar (línea amarilla sólida en su lado, o señal de banderín de no adelantar) siempre es ilegal, independientemente de la velocidad del otro vehículo.' },
  ans: 0
},

{
  id: 44, cat: 'laws',
  en: {
    q: 'What is California\'s "Basic Speed Law"?',
    opts: ['You must never drive faster than is safe for current conditions, regardless of the posted speed limit', 'Always drive exactly at the posted speed limit', 'Drive at the speed of surrounding traffic', 'The speed limit only applies during daytime hours'],
    exp: 'California\'s Basic Speed Law states you must never drive faster than is safe for current road, weather, and traffic conditions — even if you are at or below the posted speed limit. For example, if it is foggy, you must slow below the posted limit if conditions require it.'
  },
  zh: { q: '什么是加州的"基本速度法则"？', opts: ['无论限速标志如何规定，您都不得以超过当前路况安全速度行驶', '始终以限速标志规定的速度行驶', '以周围车辆的速度行驶', '限速仅在白天适用'], exp: '加州基本速度法则规定，无论道路限速如何，您都不得以超过当前道路、天气和交通状况所允许的安全速度行驶。例如，在有雾的情况下，如果条件需要，您必须降低到限速以下行驶。' },
  zhTW: { q: '什麼是加州的「基本速度法則」？', opts: ['無論限速標誌如何規定，您都不得以超過當前路況安全速度行駛', '始終以限速標誌規定的速度行駛', '以周圍車輛的速度行駛', '限速僅在白天適用'], exp: '加州基本速度法則規定，無論道路限速如何，您都不得以超過當前道路、天氣和交通狀況所允許的安全速度行駛。例如，在有霧的情況下，如果條件需要，您必須降低到限速以下行駛。' },
  es: { q: '¿Cuál es la "Ley Básica de Velocidad" de California?', opts: ['Nunca debe conducir más rápido de lo que es seguro para las condiciones actuales, independientemente del límite publicado', 'Siempre conduzca exactamente al límite de velocidad publicado', 'Conduzca a la velocidad del tráfico circundante', 'El límite de velocidad solo aplica durante el día'], exp: 'La Ley Básica de Velocidad de California establece que nunca debe conducir más rápido de lo que es seguro para las condiciones actuales de la carretera, el clima y el tráfico — incluso si está en el límite de velocidad o por debajo. Por ejemplo, si hay niebla, debe reducir la velocidad.' },
  ans: 0
},

{
  id: 45, cat: 'laws',
  en: {
    q: 'What must drivers do when a school bus has stopped and its red lights are flashing?',
    opts: ['Stop and remain stopped until the red lights stop flashing and the bus moves, regardless of direction of travel', 'Only stop if you are driving behind the bus', 'Slow to 15 mph and proceed carefully', 'Stop only if children are visible crossing the road'],
    exp: 'When a school bus stops with red lights flashing on a two-lane road or undivided highway, ALL traffic in both directions must stop and remain stopped. On a divided highway with a barrier, only traffic behind the bus must stop. You may proceed when the red lights stop flashing.'
  },
  zh: { q: '当校车停车且红灯闪烁时，驾驶员必须怎么做？', opts: ['无论行进方向如何，均须停车，保持停车状态直到红灯停止闪烁且校车开始移动', '只有在校车后方行驶时才须停车', '减速至15英里/小时并谨慎通过', '仅当看见儿童穿越道路时才停车'], exp: '当校车在双车道道路或无中央分隔带的公路上停车并闪烁红灯时，两个方向的所有车辆均须停车。在有护栏的分隔公路上，只有校车后方的车辆须停车。红灯停止闪烁后方可继续行驶。' },
  zhTW: { q: '當校車停車且紅燈閃爍時，駕駛員必須怎麼做？', opts: ['無論行進方向如何，均須停車，保持停車狀態直到紅燈停止閃爍且校車開始移動', '只有在校車後方行駛時才須停車', '減速至15英里/小時並謹慎通過', '僅當看見兒童穿越道路時才停車'], exp: '當校車在雙車道道路或無中央分隔帶的公路上停車並閃爍紅燈時，兩個方向的所有車輛均須停車。在有護欄的分隔公路上，只有校車後方的車輛須停車。紅燈停止閃爍後方可繼續行駛。' },
  es: { q: '¿Qué deben hacer los conductores cuando un autobús escolar se ha detenido y sus luces rojas están intermitentes?', opts: ['Detenerse y permanecer detenido hasta que las luces rojas dejen de parpadear y el autobús se mueva, independientemente de la dirección de viaje', 'Detenerse solo si va detrás del autobús', 'Reducir a 15 mph y proceder con cuidado', 'Detenerse solo si los niños son visibles cruzando la carretera'], exp: 'Cuando un autobús escolar se detiene con luces rojas intermitentes en una carretera de dos carriles o sin divisor, TODOS los vehículos en ambas direcciones deben detenerse. En una autopista dividida con barrera, solo el tráfico detrás del autobús debe detenerse.' },
  ans: 0
},

{
  id: 46, cat: 'laws',
  en: {
    q: 'What is the law for children under 2 years old riding in a vehicle?',
    opts: ['Must be in a rear-facing car seat in the back seat', 'Can ride in a forward-facing seat if over 20 pounds', 'Must sit in the back seat but can use a seat belt', 'No special requirement — regular seat belt is fine'],
    exp: 'California law requires children under 2 years old to ride in a rear-facing car seat in the back seat. This is the safest position because it distributes crash forces across the entire back, head, and neck. A rear-facing seat should never be placed in the front seat of a car with an active airbag.'
  },
  zh: { q: '加州法律对2岁以下儿童乘车有什么规定？', opts: ['必须坐在后排朝后的儿童安全座椅中', '如果体重超过20磅，可以使用朝前的座椅', '必须坐在后座但可以使用安全带', '没有特殊要求——普通安全带即可'], exp: '加州法律要求2岁以下儿童必须坐在后排朝后的儿童安全座椅中。这是最安全的位置，因为碰撞时力量会分散到整个背部、头部和颈部。朝后的安全座椅切勿放置在有安全气囊的前排座位上。' },
  zhTW: { q: '加州法律對2歲以下兒童乘車有什麼規定？', opts: ['必須坐在後排朝後的兒童安全座椅中', '如果體重超過20磅，可以使用朝前的座椅', '必須坐在後座但可以使用安全帶', '沒有特殊要求——普通安全帶即可'], exp: '加州法律要求2歲以下兒童必須坐在後排朝後的兒童安全座椅中。這是最安全的位置，因為碰撞時力量會分散到整個背部、頭部和頸部。朝後的安全座椅切勿放置在有安全氣囊的前排座位上。' },
  es: { q: '¿Cuál es la ley para niños menores de 2 años que viajan en un vehículo?', opts: ['Deben estar en un asiento de carro orientado hacia atrás en el asiento trasero', 'Pueden ir en un asiento orientado hacia adelante si pesan más de 20 libras', 'Deben sentarse en el asiento trasero pero pueden usar cinturón', 'Sin requisito especial — el cinturón regular está bien'], exp: 'La ley de California requiere que los niños menores de 2 años viajen en un asiento de carro orientado hacia atrás en el asiento trasero. Esta es la posición más segura porque distribuye las fuerzas del choque en toda la espalda, cabeza y cuello.' },
  ans: 0
},

{
  id: 47, cat: 'laws',
  en: {
    q: 'What is the legal blood alcohol concentration (BAC) limit for drivers 21 and older in California?',
    opts: ['0.08% or higher is considered driving under the influence (DUI)', '0.10% — the traditional standard', '0.05% — lower than federal standard', 'Any detectable amount of alcohol'],
    exp: 'In California, it is illegal to drive with a BAC of 0.08% or higher if you are 21 or older. For commercial drivers the limit is 0.04%. For drivers under 21, the zero tolerance law means any BAC of 0.01% or higher can result in license suspension.'
  },
  zh: { q: '在加州，21岁及以上驾驶员的合法血液酒精浓度（BAC）上限是多少？', opts: ['0.08%或以上被视为酒后驾车（DUI）', '0.10%——传统标准', '0.05%——低于联邦标准', '任何可检测到的酒精含量'], exp: '在加州，21岁及以上的驾驶员血液酒精浓度达到或超过0.08%即为违法驾车（DUI）。商业驾驶员的上限为0.04%。对于21岁以下的驾驶员，零容忍法规定BAC达到0.01%或以上即可导致驾照被吊销。' },
  zhTW: { q: '在加州，21歲及以上駕駛員的合法血液酒精濃度（BAC）上限是多少？', opts: ['0.08%或以上被視為酒後駕車（DUI）', '0.10%——傳統標準', '0.05%——低於聯邦標準', '任何可檢測到的酒精含量'], exp: '在加州，21歲及以上的駕駛員血液酒精濃度達到或超過0.08%即為違法駕車（DUI）。商業駕駛員的上限為0.04%。對於21歲以下的駕駛員，零容忍法規定BAC達到0.01%或以上即可導致駕照被吊Sales。' },
  es: { q: '¿Cuál es el límite legal de concentración de alcohol en sangre (BAC) para conductores de 21 años o más en California?', opts: ['0.08% o más se considera conducir bajo la influencia (DUI)', '0.10% — el estándar tradicional', '0.05% — menor que el estándar federal', 'Cualquier cantidad detectable de alcohol'], exp: 'En California, es ilegal conducir con un BAC de 0.08% o más si tiene 21 años o más. Para conductores comerciales el límite es 0.04%. Para conductores menores de 21, la ley de tolerancia cero significa que cualquier BAC de 0.01% o más puede resultar en suspensión de licencia.' },
  ans: 0
},

{
  id: 48, cat: 'laws',
  en: {
    q: 'What does "implied consent" mean in California driving law?',
    opts: ['By driving on California roads, you automatically consent to chemical testing (breath, blood, or urine) if lawfully arrested for DUI', 'You agree to obey all traffic laws when you get your license', 'You allow police to search your vehicle at any time', 'You consent to being recorded by traffic cameras'],
    exp: 'California\'s Implied Consent Law means that by driving in California, you have implicitly agreed to submit to a chemical test (breath or blood) if arrested for DUI. Refusing the test results in automatic license suspension of 1 year for a first offense, plus additional penalties.'
  },
  zh: { q: '加州驾驶法律中"默示同意"是什么意思？', opts: ['在加州道路上驾驶，即自动同意在因DUI被合法逮捕时接受化学检测（呼气、血液或尿液）', '获得驾照时同意遵守所有交通法规', '允许警察随时搜查您的车辆', '同意被交通摄像头记录'], exp: '加州默示同意法意味着，在加州驾车即隐含地同意在因DUI被逮捕时接受化学检测（呼气或血液）。拒绝检测将导致首次违规驾照被自动吊销1年，并附加额外处罚。' },
  zhTW: { q: '加州駕駛法律中「默示同意」是什麼意思？', opts: ['在加州道路上駕駛，即自動同意在因DUI被合法逮捕時接受化學檢測（呼氣、血液或尿液）', '獲得駕照時同意遵守所有交通法規', '允許警察隨時搜查您的車輛', '同意被交通攝像頭記錄'], exp: '加州默示同意法意味著，在加州駕車即隱含地同意在因DUI被逮捕時接受化學檢測（呼氣或血液）。拒絕檢測將導致首次違規駕照被自動吊銷1年，並附加額外處罰。' },
  es: { q: '¿Qué significa el "consentimiento implícito" en la ley de conducción de California?', opts: ['Al conducir en carreteras de California, automáticamente consiente las pruebas químicas (aliento, sangre u orina) si es arrestado legalmente por DUI', 'Acepta obedecer todas las leyes de tráfico cuando obtiene su licencia', 'Permite a la policía registrar su vehículo en cualquier momento', 'Consiente ser grabado por cámaras de tráfico'], exp: 'La Ley de Consentimiento Implícito de California significa que al conducir en California, ha aceptado implícitamente someterse a una prueba química (aliento o sangre) si es arrestado por DUI. Negarse a la prueba resulta en suspensión automática de licencia de 1 año por primera ofensa.' },
  ans: 0
},

{
  id: 49, cat: 'laws',
  en: {
    q: 'When driving in heavy fog, which lights should you use?',
    opts: ['Low-beam headlights or fog lights — not high beams', 'High-beam headlights to see further ahead', 'Hazard lights only, no headlights', 'No lights are necessary if you can see 100 feet ahead'],
    exp: 'In fog, always use low-beam headlights or fog lights. High beams reflect off the fog and reduce visibility even further. California law requires headlights when you cannot see 1,000 feet ahead. Reduce your speed significantly in heavy fog.'
  },
  zh: { q: '在浓雾中行驶时应使用哪种灯光？', opts: ['近光灯或雾灯——不要使用远光灯', '远光灯以看得更远', '仅使用危险灯，不开车头灯', '如果能看见100英尺前方，则不需要灯光'], exp: '在有雾时，应始终使用近光灯或雾灯。远光灯会被雾反射，使能见度进一步降低。加州法律规定，当前方能见度低于1000英尺时须开启车头灯。在浓雾中应大幅降低速度。' },
  zhTW: { q: '在濃霧中行駛時應使用哪種燈光？', opts: ['近光燈或霧燈——不要使用遠光燈', '遠光燈以看得更遠', '僅使用危險燈，不開車頭燈', '如果能看見100英尺前方，則不需要燈光'], exp: '在有霧時，應始終使用近光燈或霧燈。遠光燈會被霧反射，使能見度進一步降低。加州法律規定，當前方能見度低於1000英尺時須開啟車頭燈。在濃霧中應大幅降低速度。' },
  es: { q: '¿Qué luces debe usar cuando conduce en niebla densa?', opts: ['Faros de luz corta o faros antiniebla — no faros largos', 'Faros de luz larga para ver más adelante', 'Solo luces de emergencia, sin faros', 'No se necesitan luces si puede ver 100 pies adelante'], exp: 'En niebla, siempre use faros de luz corta o antiniebla. Los faros largos se reflejan en la niebla y reducen aún más la visibilidad. La ley de California requiere faros cuando no puede ver 1,000 pies adelante. Reduzca significativamente la velocidad en niebla densa.' },
  ans: 0
},

{
  id: 50, cat: 'laws',
  en: {
    q: 'What is the penalty for a first-offense DUI conviction in California?',
    opts: ['Up to 6 months in jail, fines up to $1,000, license suspension, and required DUI program', 'Only a fine — no jail time for first offense', 'License suspension only — no jail or fine', '30-day license suspension with no other penalties'],
    exp: 'A first-offense DUI in California can result in: up to 6 months in county jail, fines of $390–$1,000 (plus assessments, actual total can exceed $10,000), 6-month license suspension, 3-9 month DUI program, and possible ignition interlock device requirement.'
  },
  zh: { q: '在加州，初次DUI定罪的处罚是什么？', opts: ['最高6个月监禁、最高1000美元罚款、吊销驾照及须参加DUI课程', '仅罚款——初次不判监禁', '仅吊销驾照——无监禁或罚款', '30天驾照暂停，无其他处罚'], exp: '加州初次DUI可能导致：最高6个月县监禁、390至1000美元罚款（加上各项附加费，实际总额可能超过1万美元）、6个月驾照暂停、3至9个月DUI课程，以及可能需要安装点火互锁装置。' },
  zhTW: { q: '在加州，初次DUI定罪的處罰是什麼？', opts: ['最高6個月監禁、最高1000美元罰款、吊銷駕照及須參加DUI課程', '僅罰款——初次不判監禁', '僅吊銷駕照——無監禁或罰款', '30天駕照暫停，無其他處罰'], exp: '加州初次DUI可能導致：最高6個月縣監禁、390至1000美元罰款（加上各項附加費，實際總額可能超過1萬美元）、6個月駕照暫停、3至9個月DUI課程，以及可能需要安裝點火互鎖裝置。' },
  es: { q: '¿Cuál es la penalidad por una primera condena de DUI en California?', opts: ['Hasta 6 meses de cárcel, multas hasta $1,000, suspensión de licencia y programa de DUI requerido', 'Solo una multa — sin tiempo en cárcel por primera ofensa', 'Solo suspensión de licencia — sin cárcel ni multa', 'Suspensión de licencia de 30 días sin otras penalidades'], exp: 'Un DUI de primera ofensa en California puede resultar en: hasta 6 meses en cárcel del condado, multas de $390–$1,000 (más cargos adicionales, el total real puede superar $10,000), suspensión de licencia de 6 meses, programa de DUI de 3-9 meses, y posible dispositivo de bloqueo de encendido.' },
  ans: 0
},


// ═══════════════════════════════════════════════════════════════
//  BATCH 6 — Right of Way (Q51–60)
// ═══════════════════════════════════════════════════════════════

{
  id: 51, cat: 'rightofway',
  en: {
    q: 'At an uncontrolled intersection (no signs or signals), who has the right of way?',
    opts: ['The vehicle that arrived first; if simultaneous, the vehicle on the right', 'The vehicle traveling on the larger road', 'The vehicle traveling faster', 'The vehicle turning right always has priority'],
    exp: 'At an uncontrolled intersection, the first vehicle to arrive has the right of way. If two vehicles arrive at the same time, the driver on the left must yield to the driver on the right.'
  },
  zh: { q: '在无控制路口（无标志或信号灯），谁拥有优先通行权？', opts: ['先到达的车辆；若同时到达，右方车辆优先', '行驶在较宽道路上的车辆', '行驶速度较快的车辆', '右转车辆始终优先'], exp: '在无控制路口，先到达的车辆拥有优先通行权。若两辆车同时到达，左方驾驶员须让行右方驾驶员。' },
  zhTW: { q: '在無控制路口（無標誌或信號燈），誰擁有優先通行權？', opts: ['先到達的車輛；若同時到達，右方車輛優先', '行駛在較寬道路上的車輛', '行駛速度較快的車輛', '右轉車輛始終優先'], exp: '在無控制路口，先到達的車輛擁有優先通行權。若兩輛車同時到達，左方駕駛員須讓行右方駕駛員。' },
  es: { q: 'En una intersección sin control (sin señales ni semáforos), ¿quién tiene el derecho de paso?', opts: ['El vehículo que llegó primero; si es simultáneo, el vehículo de la derecha', 'El vehículo que viaja por la carretera más grande', 'El vehículo que viaja más rápido', 'El vehículo que gira a la derecha siempre tiene prioridad'], exp: 'En una intersección sin control, el primer vehículo en llegar tiene el derecho de paso. Si dos vehículos llegan al mismo tiempo, el conductor de la izquierda debe ceder el paso al conductor de la derecha.' },
  ans: 0
},

{
  id: 52, cat: 'rightofway',
  en: {
    q: 'You want to turn left at an intersection. Oncoming traffic is present. Who has the right of way?',
    opts: ['Oncoming traffic going straight has the right of way over your left turn', 'You have the right of way because you are turning', 'The first vehicle to enter the intersection has priority', 'Yield to pedestrians only — not oncoming vehicles'],
    exp: 'When turning left, you must yield to all oncoming traffic going straight or turning right. Left-turning drivers must wait for a safe gap in oncoming traffic before completing the turn. This is a very common cause of collisions.'
  },
  zh: { q: '您想在路口左转。有对向来车。谁拥有优先通行权？', opts: ['直行的对向车辆比您的左转拥有优先通行权', '因为您在转弯，所以您优先', '先进入路口的车辆有优先权', '只需让行行人——不需要让对向车辆'], exp: '左转时，您必须让行所有直行或右转的对向车辆。左转驾驶员必须等待对向来车出现安全间隔后，才能完成转弯。这是非常常见的碰撞原因。' },
  zhTW: { q: '您想在路口左轉。有對向來車。誰擁有優先通行權？', opts: ['直行的對向車輛比您的左轉擁有優先通行權', '因為您在轉彎，所以您優先', '先進入路口的車輛有優先權', '只需讓行行人——不需要讓對向車輛'], exp: '左轉時，您必須讓行所有直行或右轉的對向車輛。左轉駕駛員必須等待對向來車出現安全間隔後，才能完成轉彎。這是非常常見的碰撞原因。' },
  es: { q: 'Quiere girar a la izquierda en una intersección. Hay tráfico que viene de frente. ¿Quién tiene el derecho de paso?', opts: ['El tráfico que viene de frente tiene derecho de paso sobre su giro a la izquierda', 'Usted tiene derecho de paso porque está girando', 'El primer vehículo en entrar a la intersección tiene prioridad', 'Ceda el paso solo a los peatones — no a los vehículos que vienen'], exp: 'Al girar a la izquierda, debe ceder el paso a todo el tráfico que viene de frente que va recto o gira a la derecha. Los conductores que giran a la izquierda deben esperar un espacio seguro antes de completar el giro.' },
  ans: 0
},

{
  id: 53, cat: 'rightofway',
  en: {
    q: 'A pedestrian is crossing the street at a marked crosswalk. What must you do?',
    opts: ['Yield the right of way to the pedestrian and wait until they have completely crossed', 'Honk to alert the pedestrian and proceed slowly', 'Proceed if the pedestrian is on the far side of the road', 'Stop only if the pedestrian steps in front of your vehicle'],
    exp: 'California law requires drivers to yield the right of way to pedestrians in any marked or unmarked crosswalk. You must stop and wait until the pedestrian has completely crossed — not just until they are out of your lane. Failing to yield is a moving violation.'
  },
  zh: { q: '一位行人正在有标志的人行横道过街。您必须怎么做？', opts: ['让行行人，等待直到其完全穿越', '鸣笛提醒行人并缓慢通过', '如果行人在道路对侧则可通行', '仅当行人走到您车前时才停车'], exp: '加州法律要求驾驶员在任何有或无标志的人行横道处让行行人。您必须停车等待，直到行人完全穿越——不是仅离开您的车道即可。未能让行是违规行为。' },
  zhTW: { q: '一位行人正在有標誌的人行橫道過街。您必須怎麼做？', opts: ['讓行行人，等待直到其完全穿越', '鳴笛提醒行人並緩慢通過', '如果行人在道路對側則可通行', '僅當行人走到您車前時才停車'], exp: '加州法律要求駕駛員在任何有或無標誌的人行橫道處讓行行人。您必須停車等待，直到行人完全穿越——不是僅離開您的車道即可。未能讓行是違規行為。' },
  es: { q: 'Un peatón está cruzando la calle en un cruce peatonal marcado. ¿Qué debe hacer?', opts: ['Ceder el derecho de paso al peatón y esperar hasta que haya cruzado completamente', 'Tocar el claxon para alertar al peatón y avanzar despacio', 'Continuar si el peatón está en el lado lejano de la carretera', 'Detenerse solo si el peatón se coloca frente a su vehículo'], exp: 'La ley de California requiere que los conductores cedan el derecho de paso a los peatones en cualquier cruce peatonal marcado o no marcado. Debe detenerse y esperar hasta que el peatón haya cruzado completamente — no solo hasta que salga de su carril.' },
  ans: 0
},

{
  id: 54, cat: 'rightofway',
  en: {
    q: 'You are entering a roundabout. Who has the right of way?',
    opts: ['Vehicles already circulating inside the roundabout', 'Vehicles entering the roundabout from the right', 'You always have priority when entering', 'The largest vehicle has priority'],
    exp: 'When entering a roundabout, you must yield to all vehicles already circulating inside the circle. Once you are in the roundabout, you have the right of way over entering vehicles. Travel counterclockwise and exit at your desired street without stopping.'
  },
  zh: { q: '您正在进入环形交叉口。谁拥有优先通行权？', opts: ['已在环形道内行驶的车辆', '从右侧进入环形交叉口的车辆', '进入时您始终优先', '最大的车辆优先'], exp: '进入环形交叉口时，您必须让行已在圆环内行驶的所有车辆。一旦您进入环形道内，则对进入的车辆拥有优先权。逆时针方向行驶，在目标出口驶出，无需停车。' },
  zhTW: { q: '您正在進入環形交叉口。誰擁有優先通行權？', opts: ['已在環形道內行駛的車輛', '從右側進入環形交叉口的車輛', '進入時您始終優先', '最大的車輛優先'], exp: '進入環形交叉口時，您必須讓行已在圓環內行駛的所有車輛。一旦您進入環形道內，則對進入的車輛擁有優先權。逆時針方向行駛，在目標出口駛出，無需停車。' },
  es: { q: 'Está entrando a una glorieta. ¿Quién tiene el derecho de paso?', opts: ['Los vehículos que ya circulan dentro de la glorieta', 'Los vehículos que entran desde la derecha', 'Siempre tiene prioridad al entrar', 'El vehículo más grande tiene prioridad'], exp: 'Al entrar a una glorieta, debe ceder el paso a todos los vehículos que ya circulan dentro del círculo. Una vez que está en la glorieta, tiene el derecho de paso sobre los vehículos que entran. Viaje en sentido antihorario y salga en la calle deseada sin detenerse.' },
  ans: 0
},

{
  id: 55, cat: 'rightofway',
  en: {
    q: 'You are at a T-intersection on the road that ends. Who must yield?',
    opts: ['You must yield to all traffic on the through road', 'Traffic on the through road must yield to you', 'The vehicle on the right always yields', 'Whoever arrives last yields'],
    exp: 'At a T-intersection, the driver on the road that ends (the bottom of the T) must yield to all traffic on the through road (the top of the T). This applies even if there are no signs or signals.'
  },
  zh: { q: '您在T形路口的断头路一侧。谁须让行？', opts: ['您须让行贯通道路上的所有车辆', '贯通道路上的车辆须让行您', '右方车辆始终让行', '最后到达的车辆让行'], exp: '在T形路口，处于断头路一侧（T形底部）的驾驶员须让行贯通道路（T形顶部）上的所有车辆。即使没有标志或信号灯，此规则也适用。' },
  zhTW: { q: '您在T形路口的斷頭路一側。誰須讓行？', opts: ['您須讓行貫通道路上的所有車輛', '貫通道路上的車輛須讓行您', '右方車輛始終讓行', '最後到達的車輛讓行'], exp: '在T形路口，處於斷頭路一側（T形底部）的駕駛員須讓行貫通道路（T形頂部）上的所有車輛。即使沒有標誌或信號燈，此規則也適用。' },
  es: { q: 'Está en una intersección en T en la carretera que termina. ¿Quién debe ceder el paso?', opts: ['Debe ceder el paso a todo el tráfico en la carretera continua', 'El tráfico en la carretera continua debe cederle el paso', 'El vehículo de la derecha siempre cede', 'El que llega último cede'], exp: 'En una intersección en T, el conductor en la carretera que termina (la parte inferior de la T) debe ceder el paso a todo el tráfico en la carretera continua (la parte superior de la T). Esto aplica incluso si no hay señales ni semáforos.' },
  ans: 0
},

{
  id: 56, cat: 'rightofway',
  en: {
    q: 'A visually impaired person with a white cane or guide dog is crossing the street. What must you do?',
    opts: ['Come to a complete stop and wait until they have fully crossed before proceeding', 'Slow down and carefully drive around them', 'Sound your horn once to alert them, then proceed', 'They must wait for a walk signal before you need to stop'],
    exp: 'California law gives the right of way to blind pedestrians using a white cane or guide dog at all intersections. You must come to a complete stop and not proceed until the pedestrian has completely crossed the roadway and is safely on the other side.'
  },
  zh: { q: '一位使用白手杖或导盲犬的视障人士正在过街。您必须怎么做？', opts: ['完全停车，等到其完全过街后再继续行驶', '减速并小心绕过他们', '鸣笛一次提醒他们，然后继续', '他们必须等待步行信号，您才须停车'], exp: '加州法律赋予使用白手杖或导盲犬的盲人行人在所有路口的优先通行权。您必须完全停车，直到行人完全穿越道路并安全到达对侧后方可继续行驶。' },
  zhTW: { q: '一位使用白手杖或導盲犬的視障人士正在過街。您必須怎麼做？', opts: ['完全停車，等到其完全過街後再繼續行駛', '減速並小心繞過他們', '鳴笛一次提醒他們，然後繼續', '他們必須等待步行信號，您才須停車'], exp: '加州法律賦予使用白手杖或導盲犬的盲人行人在所有路口的優先通行權。您必須完全停車，直到行人完全穿越道路並安全到達對側後方可繼續行駛。' },
  es: { q: 'Una persona con discapacidad visual con bastón blanco o perro guía está cruzando la calle. ¿Qué debe hacer?', opts: ['Detenerse completamente y esperar hasta que hayan cruzado totalmente antes de continuar', 'Reducir la velocidad y conducir cuidadosamente alrededor de ellos', 'Tocar el claxon una vez para alertarlos, luego continuar', 'Deben esperar una señal de caminar antes de que usted tenga que detenerse'], exp: 'La ley de California da el derecho de paso a los peatones ciegos que usan bastón blanco o perro guía en todas las intersecciones. Debe detenerse completamente y no avanzar hasta que el peatón haya cruzado completamente la calzada.' },
  ans: 0
},

{
  id: 57, cat: 'rightofway',
  en: {
    q: 'When entering a freeway from an on-ramp, who has the right of way?',
    opts: ['Traffic already on the freeway has the right of way — you must yield and merge safely', 'You have the right of way because you are entering', 'The faster vehicle has the right of way', 'Whoever signals first has priority'],
    exp: 'Traffic already traveling on the freeway has the right of way. You must accelerate on the on-ramp to match freeway speed, find a gap in traffic, and merge smoothly. Do not stop on the ramp unless absolutely necessary, as it is extremely dangerous.'
  },
  zh: { q: '从匝道进入高速公路时，谁拥有优先通行权？', opts: ['已在高速公路上行驶的车辆拥有优先权——您须让行并安全并入', '因为您正在进入，所以您优先', '较快的车辆拥有优先权', '先打转向灯的人优先'], exp: '已在高速公路上行驶的车辆拥有优先通行权。您必须在匝道上加速以匹配高速公路速度，找到车流间隙，并平稳并入。除非绝对必要，否则不要在匝道上停车，因为这极其危险。' },
  zhTW: { q: '從匝道進入高速公路時，誰擁有優先通行權？', opts: ['已在高速公路上行駛的車輛擁有優先權——您須讓行並安全並入', '因為您正在進入，所以您優先', '較快的車輛擁有優先權', '先打轉向燈的人優先'], exp: '已在高速公路上行駛的車輛擁有優先通行權。您必須在匝道上加速以匹配高速公路速度，找到車流間隙，並平穩並入。除非絕對必要，否則不要在匝道上停車，因為這極其危險。' },
  es: { q: 'Al entrar a una autopista desde una rampa de acceso, ¿quién tiene el derecho de paso?', opts: ['El tráfico ya en la autopista tiene el derecho de paso — debe ceder el paso y fusionarse con seguridad', 'Usted tiene el derecho de paso porque está entrando', 'El vehículo más rápido tiene el derecho de paso', 'El primero en señalizar tiene prioridad'], exp: 'El tráfico que ya viaja en la autopista tiene el derecho de paso. Debe acelerar en la rampa para igualar la velocidad de la autopista, encontrar un espacio en el tráfico y fusionarse suavemente. No se detenga en la rampa a menos que sea absolutamente necesario.' },
  ans: 0
},

{
  id: 58, cat: 'rightofway',
  en: {
    q: 'You are driving on a mountain road and meet an oncoming vehicle. The road is too narrow for both. Who yields?',
    opts: ['The vehicle going downhill must yield to the vehicle going uphill', 'The vehicle going uphill must yield to the vehicle going downhill', 'The smaller vehicle always yields', 'The vehicle that arrived at the narrow section last must yield'],
    exp: 'On a narrow mountain road where two vehicles cannot pass, the vehicle going downhill must yield to the vehicle going uphill. This is because it is usually easier for the downhill driver to back up than the uphill driver. The downhill vehicle should pull aside if possible.'
  },
  zh: { q: '您在山路上行驶，遇到对向来车。道路太窄无法两车并行。谁须让行？', opts: ['下行车辆须让行上行车辆', '上行车辆须让行下行车辆', '较小的车辆始终让行', '最后到达窄路段的车辆须让行'], exp: '在两车无法并行的狭窄山路上，下行车辆须让行上行车辆。这是因为下行驾驶员通常比上行驾驶员更容易倒车。如果可能，下行车辆应靠边停让。' },
  zhTW: { q: '您在山路上行駛，遇到對向來車。道路太窄無法兩車並行。誰須讓行？', opts: ['下行車輛須讓行上行車輛', '上行車輛須讓行下行車輛', '較小的車輛始終讓行', '最後到達窄路段的車輛須讓行'], exp: '在兩車無法並行的狹窄山路上，下行車輛須讓行上行車輛。這是因為下行駕駛員通常比上行駕駛員更容易倒車。如果可能，下行車輛應靠邊停讓。' },
  es: { q: 'Conduce en una carretera de montaña y se encuentra con un vehículo que viene. La carretera es demasiado estrecha para ambos. ¿Quién cede el paso?', opts: ['El vehículo que baja debe ceder el paso al que sube', 'El vehículo que sube debe ceder el paso al que baja', 'El vehículo más pequeño siempre cede', 'El vehículo que llegó último a la sección estrecha debe ceder'], exp: 'En una carretera de montaña estrecha donde dos vehículos no pueden pasar, el vehículo que baja debe ceder el paso al que sube. Esto se debe a que generalmente es más fácil para el conductor que baja hacer marcha atrás.' },
  ans: 0
},

{
  id: 59, cat: 'rightofway',
  en: {
    q: 'You want to exit a parking lot onto a street. Who has the right of way?',
    opts: ['All traffic on the street, including pedestrians and cyclists', 'You have the right of way if you are already moving', 'The first vehicle to reach the exit has priority', 'Pedestrians only — not vehicles on the street'],
    exp: 'When exiting a parking lot, driveway, or alley, you must yield the right of way to all traffic on the public street — including pedestrians on the sidewalk, cyclists in bike lanes, and all vehicles. You are entering a public roadway and bear the responsibility to do so safely.'
  },
  zh: { q: '您想从停车场驶出到街道上。谁拥有优先通行权？', opts: ['街道上的所有交通，包括行人和骑行者', '如果您已经在移动则您优先', '先到达出口的车辆优先', '仅行人优先——街道上的车辆不计'], exp: '从停车场、车道或小巷驶出时，您必须让行公共街道上的所有交通——包括人行道上的行人、自行车道上的骑行者以及所有车辆。您正在进入公共道路，须负责安全进入。' },
  zhTW: { q: '您想從停車場駛出到街道上。誰擁有優先通行權？', opts: ['街道上的所有交通，包括行人和騎行者', '如果您已經在移動則您優先', '先到達出口的車輛優先', '僅行人優先——街道上的車輛不計'], exp: '從停車場、車道或小巷駛出時，您必須讓行公共街道上的所有交通——包括人行道上的行人、自行車道上的騎行者以及所有車輛。您正在進入公共道路，須負責安全進入。' },
  es: { q: 'Quiere salir de un estacionamiento hacia la calle. ¿Quién tiene el derecho de paso?', opts: ['Todo el tráfico en la calle, incluyendo peatones y ciclistas', 'Usted tiene el derecho de paso si ya está en movimiento', 'El primer vehículo en llegar a la salida tiene prioridad', 'Solo los peatones — no los vehículos en la calle'], exp: 'Al salir de un estacionamiento, entrada privada o callejón, debe ceder el derecho de paso a todo el tráfico en la vía pública — incluyendo peatones en la banqueta, ciclistas en carriles de bicicletas y todos los vehículos.' },
  ans: 0
},

{
  id: 60, cat: 'rightofway',
  en: {
    q: 'When may you proceed through a red light after stopping?',
    opts: ['When turning right, after stopping and yielding (unless a sign prohibits it); or turning left from a one-way onto a one-way street', 'Never — red always means stop completely', 'After waiting 30 seconds if no traffic is present', 'Only police and emergency vehicles may proceed on red'],
    exp: 'After a complete stop at a red light, you may: (1) Turn right if no sign prohibits it and after yielding to all traffic and pedestrians, or (2) Turn left from a one-way street onto another one-way street, after stopping and yielding. Proceeding straight through a red light is never permitted.'
  },
  zh: { q: '停车后，什么情况下可以在红灯时通行？', opts: ['右转时（停车让行后，且无标志禁止）；或从单行道左转进入另一条单行道时', '从不——红灯永远表示完全停车', '如果没有车辆，等待30秒后', '仅警察和紧急车辆可以闯红灯'], exp: '在红灯处完全停车后，您可以：(1) 如无禁止标志，在让行所有车辆和行人后右转；(2) 从单行道左转进入另一条单行道，停车让行后。直行闯红灯在任何情况下都是不允许的。' },
  zhTW: { q: '停車後，什麼情況下可以在紅燈時通行？', opts: ['右轉時（停車讓行後，且無標誌禁止）；或從單行道左轉進入另一條單行道時', '從不——紅燈永遠表示完全停車', '如果沒有車輛，等待30秒後', '僅警察和緊急車輛可以闖紅燈'], exp: '在紅燈處完全停車後，您可以：(1) 如無禁止標誌，在讓行所有車輛和行人後右轉；(2) 從單行道左轉進入另一條單行道，停車讓行後。直行闖紅燈在任何情況下都是不允許的。' },
  es: { q: '¿Cuándo puede avanzar a través de una luz roja después de detenerse?', opts: ['Al girar a la derecha, después de detenerse y ceder (a menos que una señal lo prohíba); o girando a la izquierda de una calle de un sentido a otra de un sentido', 'Nunca — el rojo siempre significa detenerse completamente', 'Después de esperar 30 segundos si no hay tráfico', 'Solo policías y vehículos de emergencia pueden avanzar en rojo'], exp: 'Después de una parada completa en un semáforo en rojo, puede: (1) Girar a la derecha si ninguna señal lo prohíbe y después de ceder a todo el tráfico y peatones, o (2) Girar a la izquierda desde una calle de un sentido hacia otra de un sentido, después de detenerse y ceder.' },
  ans: 0
},


// ═══════════════════════════════════════════════════════════════
//  BATCH 7 — Speed Limits (Q61–70)
// ═══════════════════════════════════════════════════════════════

{
  id: 61, cat: 'speed',
  en: {
    q: 'What is the maximum speed limit on most California freeways?',
    opts: ['65 mph, or 70 mph where posted', '55 mph statewide', '75 mph unless otherwise posted', '60 mph for all California highways'],
    exp: 'The maximum speed limit on most California freeways is 65 mph. Some freeways are posted at 70 mph. Trucks over 3 tons and vehicles towing trailers have a maximum of 55 mph on freeways, regardless of the posted speed limit.'
  },
  zh: { q: '加州大多数高速公路的最高限速是多少？', opts: ['65英里/小时，或标志标明的70英里/小时', '全州统一55英里/小时', '除非另有规定，否则为75英里/小时', '所有加州公路为60英里/小时'], exp: '加州大多数高速公路的最高限速为65英里/小时。部分高速公路标示为70英里/小时。超过3吨的卡车和拖曳拖车的车辆在高速公路上最高限速为55英里/小时，无论标志限速如何。' },
  zhTW: { q: '加州大多數高速公路的最高限速是多少？', opts: ['65英里/小時，或標誌標明的70英里/小時', '全州統一55英里/小時', '除非另有規定，否則為75英里/小時', '所有加州公路為60英里/小時'], exp: '加州大多數高速公路的最高限速為65英里/小時。部分高速公路標示為70英里/小時。超過3噸的卡車和拖曳拖車的車輛在高速公路上最高限速為55英里/小時，無論標誌限速如何。' },
  es: { q: '¿Cuál es el límite de velocidad máximo en la mayoría de las autopistas de California?', opts: ['65 mph, o 70 mph donde esté publicado', '55 mph en todo el estado', '75 mph a menos que se indique lo contrario', '60 mph para todas las autopistas de California'], exp: 'El límite de velocidad máximo en la mayoría de las autopistas de California es 65 mph. Algunas autopistas están publicadas a 70 mph. Los camiones de más de 3 toneladas y los vehículos que remolcan tienen un máximo de 55 mph en autopistas, independientemente del límite publicado.' },
  ans: 0
},

{
  id: 62, cat: 'speed',
  en: {
    q: 'What is the speed limit in a residential area when no speed limit sign is posted?',
    opts: ['25 mph — the prima facie speed limit for residential districts', '35 mph — standard urban speed', '15 mph — default for all neighborhoods', '45 mph — unless children are present'],
    exp: 'In California, the prima facie (default) speed limit in a residential district is 25 mph when no speed limit sign is posted. This applies to streets in neighborhoods where people live. You must still follow the basic speed law — drive slower if conditions require it.'
  },
  zh: { q: '在没有限速标志的住宅区，限速是多少？', opts: ['25英里/小时——住宅区的法定限速', '35英里/小时——城市标准速度', '15英里/小时——所有社区的默认速度', '45英里/小时——除非有儿童在场'], exp: '在加州，没有限速标志的住宅区的法定（默认）限速为25英里/小时。这适用于有居民居住的街道。您仍须遵守基本速度法则——如果路况需要，须降低速度。' },
  zhTW: { q: '在沒有限速標誌的住宅區，限速是多少？', opts: ['25英里/小時——住宅區的法定限速', '35英里/小時——城市標準速度', '15英里/小時——所有社區的預設速度', '45英里/小時——除非有兒童在場'], exp: '在加州，沒有限速標誌的住宅區的法定（預設）限速為25英里/小時。這適用於有居民居住的街道。您仍須遵守基本速度法則——如果路況需要，須降低速度。' },
  es: { q: '¿Cuál es el límite de velocidad en una zona residencial cuando no hay señal de velocidad publicada?', opts: ['25 mph — el límite de velocidad prima facie para zonas residenciales', '35 mph — velocidad urbana estándar', '15 mph — predeterminado para todos los vecindarios', '45 mph — a menos que haya niños presentes'], exp: 'En California, el límite de velocidad prima facie (predeterminado) en una zona residencial es 25 mph cuando no hay señal de velocidad publicada. Esto aplica a calles en vecindarios donde vive gente. Aún debe seguir la ley básica de velocidad.' },
  ans: 0
},

{
  id: 63, cat: 'speed',
  en: {
    q: 'What is the speed limit in an alley in California?',
    opts: ['15 mph', '25 mph', '20 mph', '10 mph'],
    exp: 'The prima facie speed limit in any alley in California is 15 mph. Alleys are narrow roadways between or behind buildings. The low speed limit reflects the limited visibility and the potential for pedestrians and vehicles to appear suddenly.'
  },
  zh: { q: '加州小巷（alley）的限速是多少？', opts: ['15英里/小时', '25英里/小时', '20英里/小时', '10英里/小时'], exp: '加州任何小巷的法定限速为15英里/小时。小巷是建筑物之间或后面的狭窄通道。低速限制反映了有限的能见度以及行人和车辆突然出现的可能性。' },
  zhTW: { q: '加州小巷（alley）的限速是多少？', opts: ['15英里/小時', '25英里/小時', '20英里/小時', '10英里/小時'], exp: '加州任何小巷的法定限速為15英里/小時。小巷是建築物之間或後面的狹窄通道。低速限制反映了有限的能見度以及行人和車輛突然出現的可能性。' },
  es: { q: '¿Cuál es el límite de velocidad en un callejón en California?', opts: ['15 mph', '25 mph', '20 mph', '10 mph'], exp: 'El límite de velocidad prima facie en cualquier callejón en California es 15 mph. Los callejones son vías estrechas entre o detrás de edificios. El límite de velocidad bajo refleja la visibilidad limitada y el potencial de que aparezcan peatones y vehículos de repente.' },
  ans: 0
},

{
  id: 64, cat: 'speed',
  en: {
    q: 'What is the speed limit within 100 feet of a railroad crossing when visibility is limited?',
    opts: ['15 mph', '25 mph', '10 mph', '35 mph'],
    exp: 'California law sets a 15 mph prima facie speed limit within 100 feet of a railroad crossing when you cannot see the tracks clearly in both directions for 400 feet. This lower speed gives you time to stop if a train appears.'
  },
  zh: { q: '能见度有限时，在铁路道口100英尺以内的限速是多少？', opts: ['15英里/小时', '25英里/小时', '10英里/小时', '35英里/小时'], exp: '加州法律规定，当无法在两个方向上清楚看到400英尺范围内的铁轨时，铁路道口100英尺以内的法定限速为15英里/小时。较低的速度给您足够时间在火车出现时停车。' },
  zhTW: { q: '能見度有限時，在鐵路道口100英尺以內的限速是多少？', opts: ['15英里/小時', '25英里/小時', '10英里/小時', '35英里/小時'], exp: '加州法律規定，當無法在兩個方向上清楚看到400英尺範圍內的鐵軌時，鐵路道口100英尺以內的法定限速為15英里/小時。較低的速度給您足夠時間在火車出現時停車。' },
  es: { q: '¿Cuál es el límite de velocidad dentro de 100 pies de un cruce ferroviario cuando la visibilidad es limitada?', opts: ['15 mph', '25 mph', '10 mph', '35 mph'], exp: 'La ley de California establece un límite de velocidad prima facie de 15 mph dentro de 100 pies de un cruce ferroviario cuando no puede ver las vías claramente en ambas direcciones por 400 pies. Esta velocidad más baja le da tiempo para detenerse si aparece un tren.' },
  ans: 0
},

{
  id: 65, cat: 'speed',
  en: {
    q: 'Fines for speeding in a construction zone in California are:',
    opts: ['Doubled compared to the standard fine', 'The same as a regular speeding ticket', 'Tripled if workers are present', 'Only issued to commercial drivers'],
    exp: 'California law doubles the fine for speeding violations committed in a construction zone (work zone). These enhanced fines apply whether or not workers are actually present. The same doubling applies to school zones. This serves as a strong deterrent to protect workers and children.'
  },
  zh: { q: '在加州施工区超速的罚款是：', opts: ['比标准罚款加倍', '与普通超速罚单相同', '如果有工人在场则三倍', '仅适用于商业驾驶员'], exp: '加州法律规定，在施工区（作业区）违规超速的罚款加倍。无论工人是否实际在场，这一加重罚款均适用。学区也适用同样的加倍规定。这是保护工人和儿童安全的有力震慑。' },
  zhTW: { q: '在加州施工區超速的罰款是：', opts: ['比標準罰款加倍', '與普通超速罰單相同', '如果有工人在場則三倍', '僅適用於商業駕駛員'], exp: '加州法律規定，在施工區（作業區）違規超速的罰款加倍。無論工人是否實際在場，這一加重罰款均適用。學區也適用同樣的加倍規定。這是保護工人和兒童安全的有力震懾。' },
  es: { q: 'Las multas por exceso de velocidad en una zona de construcción en California son:', opts: ['El doble en comparación con la multa estándar', 'Iguales a una multa por exceso de velocidad regular', 'El triple si hay trabajadores presentes', 'Solo se emiten a conductores comerciales'], exp: 'La ley de California duplica la multa por violaciones de velocidad cometidas en una zona de construcción (zona de trabajo). Estas multas mejoradas aplican haya o no trabajadores presentes. Lo mismo aplica para zonas escolares. Esto sirve como un fuerte disuasivo.' },
  ans: 0
},

{
  id: 66, cat: 'speed',
  en: {
    q: 'When approaching a blind intersection where visibility is less than 100 feet, what is the maximum speed?',
    opts: ['15 mph', '25 mph', '20 mph', '10 mph'],
    exp: 'At a blind intersection where you cannot see traffic approaching from either side within 100 feet, the prima facie speed limit is 15 mph. This gives you time to react and stop if cross traffic appears. A blind intersection has no stop signs or signals and has limited visibility.'
  },
  zh: { q: '接近能见度不足100英尺的盲区路口时，最高速度是多少？', opts: ['15英里/小时', '25英里/小时', '20英里/小时', '10英里/小时'], exp: '在无法看到100英尺内横向来车的盲区路口，法定限速为15英里/小时。这给您足够的时间在横向车辆出现时做出反应并停车。盲区路口没有停车标志或信号灯，且能见度有限。' },
  zhTW: { q: '接近能見度不足100英尺的盲區路口時，最高速度是多少？', opts: ['15英里/小時', '25英里/小時', '20英里/小時', '10英里/小時'], exp: '在無法看到100英尺內橫向來車的盲區路口，法定限速為15英里/小時。這給您足夠的時間在橫向車輛出現時做出反應並停車。盲區路口沒有停車標誌或信號燈，且能見度有限。' },
  es: { q: '¿Cuál es la velocidad máxima al acercarse a una intersección ciega donde la visibilidad es menor de 100 pies?', opts: ['15 mph', '25 mph', '20 mph', '10 mph'], exp: 'En una intersección ciega donde no puede ver el tráfico que se aproxima desde ninguno de los lados dentro de 100 pies, el límite de velocidad prima facie es 15 mph. Esto le da tiempo para reaccionar y detenerse si aparece tráfico cruzado.' },
  ans: 0
},

{
  id: 67, cat: 'speed',
  en: {
    q: 'If you are driving too slowly on a freeway, you can be cited for:',
    opts: ['Impeding traffic — driving unreasonably slow is illegal', 'Nothing — there is no minimum speed law', 'Only if you are below 45 mph', 'Slow driving is encouraged for fuel efficiency'],
    exp: 'California has a minimum speed law. You cannot drive so slowly that you block the normal flow of traffic, except when necessary for safety. Driving too slowly on a freeway impedes other drivers and creates hazardous conditions. Drivers can be cited for impeding traffic.'
  },
  zh: { q: '如果您在高速公路上行驶过慢，可能因为什么被开罚单？', opts: ['妨碍交通——不合理地缓慢驾驶是违法的', '没有——没有最低限速法', '仅当速度低于45英里/小时时', '慢速驾驶有利于节省燃油，被鼓励'], exp: '加州有最低限速法。除非出于安全必要，否则您不得以阻碍正常交通流的速度驾驶。在高速公路上行驶过慢会妨碍其他驾驶员，造成危险。驾驶员可能因妨碍交通而被罚款。' },
  zhTW: { q: '如果您在高速公路上行駛過慢，可能因為什麼被開罰單？', opts: ['妨礙交通——不合理地緩慢駕駛是違法的', '沒有——沒有最低限速法', '僅當速度低於45英里/小時時', '慢速駕駛有利於節省燃油，被鼓勵'], exp: '加州有最低限速法。除非出於安全必要，否則您不得以阻礙正常交通流的速度駕駛。在高速公路上行駛過慢會妨礙其他駕駛員，造成危險。駕駛員可能因妨礙交通而被罰款。' },
  es: { q: 'Si conduce demasiado lento en una autopista, puede ser citado por:', opts: ['Obstruir el tráfico — conducir de forma irrazonablemente lenta es ilegal', 'Nada — no hay ley de velocidad mínima', 'Solo si está por debajo de 45 mph', 'Conducir lento se fomenta para eficiencia de combustible'], exp: 'California tiene una ley de velocidad mínima. No puede conducir tan lento que bloquee el flujo normal del tráfico, excepto cuando sea necesario para la seguridad. Conducir demasiado lento en una autopista obstruye a otros conductores y crea condiciones peligrosas.' },
  ans: 0
},

{
  id: 68, cat: 'speed',
  en: {
    q: 'How does speed affect your stopping distance?',
    opts: ['Doubling your speed quadruples (4x) your braking distance', 'Doubling your speed doubles your braking distance', 'Speed has no effect on stopping distance', 'Doubling your speed triples your braking distance'],
    exp: 'Braking distance increases with the square of your speed. If you double your speed from 25 to 50 mph, your braking distance increases four times — not two times. At 60 mph, it takes about 180 feet to stop; at 30 mph, only about 45 feet. This is why speeding is so dangerous.'
  },
  zh: { q: '速度如何影响您的停车距离？', opts: ['速度翻倍，制动距离增加四倍', '速度翻倍，制动距离也翻倍', '速度对停车距离没有影响', '速度翻倍，制动距离增加三倍'], exp: '制动距离与速度的平方成正比。如果您将速度从25英里/小时提高到50英里/小时（翻倍），制动距离增加四倍而不是两倍。以60英里/小时行驶约需180英尺才能停下；以30英里/小时只需约45英尺。这就是超速如此危险的原因。' },
  zhTW: { q: '速度如何影響您的停車距離？', opts: ['速度翻倍，制動距離增加四倍', '速度翻倍，制動距離也翻倍', '速度對停車距離沒有影響', '速度翻倍，制動距離增加三倍'], exp: '制動距離與速度的平方成正比。如果您將速度從25英里/小時提高到50英里/小時（翻倍），制動距離增加四倍而不是兩倍。以60英里/小時行駛約需180英尺才能停下；以30英里/小時只需約45英尺。這就是超速如此危險的原因。' },
  es: { q: '¿Cómo afecta la velocidad a su distancia de frenado?', opts: ['Duplicar su velocidad cuadruplica (4x) su distancia de frenado', 'Duplicar su velocidad duplica su distancia de frenado', 'La velocidad no tiene efecto en la distancia de frenado', 'Duplicar su velocidad triplica su distancia de frenado'], exp: 'La distancia de frenado aumenta con el cuadrado de su velocidad. Si duplica su velocidad de 25 a 50 mph, su distancia de frenado aumenta cuatro veces — no dos. A 60 mph se necesitan unos 180 pies para detenerse; a 30 mph, solo unos 45 pies.' },
  ans: 0
},

{
  id: 69, cat: 'speed',
  en: {
    q: 'What is the speed limit for vehicles towing a trailer on a California freeway?',
    opts: ['55 mph maximum, regardless of the posted speed limit', '65 mph — same as regular vehicles', '70 mph if the posted limit is 70', '45 mph for all towing situations'],
    exp: 'In California, vehicles towing a trailer are limited to 55 mph on freeways, even if the posted limit is 65 or 70 mph. The same 55 mph limit applies to trucks with 3 or more axles. This lower limit accounts for reduced braking ability and stability when towing.'
  },
  zh: { q: '在加州高速公路上，拖曳拖车的车辆限速是多少？', opts: ['最高55英里/小时，无论标志限速如何', '65英里/小时——与普通车辆相同', '如果标志限速为70则为70英里/小时', '所有拖曳情况均为45英里/小时'], exp: '在加州，拖曳拖车的车辆在高速公路上限速55英里/小时，即使标志限速为65或70英里/小时。有3轴或以上的卡车也适用同样的55英里/小时限制。较低的限速考虑到拖曳时制动能力和稳定性降低的因素。' },
  zhTW: { q: '在加州高速公路上，拖曳拖車的車輛限速是多少？', opts: ['最高55英里/小時，無論標誌限速如何', '65英里/小時——與普通車輛相同', '如果標誌限速為70則為70英里/小時', '所有拖曳情況均為45英里/小時'], exp: '在加州，拖曳拖車的車輛在高速公路上限速55英里/小時，即使標誌限速為65或70英里/小時。有3軸或以上的卡車也適用同樣的55英里/小時限制。較低的限速考慮到拖曳時制動能力和穩定性降低的因素。' },
  es: { q: '¿Cuál es el límite de velocidad para vehículos que remolcan un tráiler en una autopista de California?', opts: ['55 mph máximo, independientemente del límite publicado', '65 mph — igual que los vehículos regulares', '70 mph si el límite publicado es 70', '45 mph para todas las situaciones de remolque'], exp: 'En California, los vehículos que remolcan un tráiler están limitados a 55 mph en autopistas, incluso si el límite publicado es 65 o 70 mph. El mismo límite de 55 mph aplica a camiones con 3 o más ejes. Este límite más bajo tiene en cuenta la reducción en la capacidad de frenado y estabilidad.' },
  ans: 0
},

{
  id: 70, cat: 'speed',
  en: {
    q: 'Driving 100 mph or more on a California highway results in:',
    opts: ['Mandatory license suspension and possible jail time — an immediate threat to public safety', 'A regular speeding ticket with doubled fines', 'Only a warning for a first offense', 'License suspension only if involved in a crash'],
    exp: 'Driving 100 mph or more is a serious offense in California. Penalties include: license suspension of 30 days to 6 months for a first offense, fines, possible jail time, and a point on your record. A second offense within 3 years results in a 1-year license revocation.'
  },
  zh: { q: '在加州公路上以100英里/小时或以上速度行驶的后果是：', opts: ['强制吊销驾照及可能的监禁——对公共安全构成立即威胁', '普通超速罚单，罚款加倍', '初次仅给予警告', '仅在发生事故时才吊销驾照'], exp: '以100英里/小时或以上速度行驶在加州是严重违规行为。处罚包括：初次违规驾照暂停30天至6个月、罚款、可能的监禁，以及记录一分。3年内二次违规导致驾照被吊销1年。' },
  zhTW: { q: '在加州公路上以100英里/小時或以上速度行駛的後果是：', opts: ['強制吊銷駕照及可能的監禁——對公共安全構成立即威脅', '普通超速罰單，罰款加倍', '初次僅給予警告', '僅在發生事故時才吊銷駕照'], exp: '以100英里/小時或以上速度行駛在加州是嚴重違規行為。處罰包括：初次違規駕照暫停30天至6個月、罰款、可能的監禁，以及記錄一分。3年內二次違規導致駕照被吊銷1年。' },
  es: { q: 'Conducir a 100 mph o más en una autopista de California resulta en:', opts: ['Suspensión de licencia obligatoria y posible tiempo en cárcel — una amenaza inmediata para la seguridad pública', 'Una multa de velocidad regular con multas duplicadas', 'Solo una advertencia por primera ofensa', 'Suspensión de licencia solo si hay un accidente'], exp: 'Conducir a 100 mph o más es una ofensa grave en California. Las penalidades incluyen: suspensión de licencia de 30 días a 6 meses por primera ofensa, multas, posible tiempo en cárcel y un punto en su registro. Una segunda ofensa dentro de 3 años resulta en revocación de licencia de 1 año.' },
  ans: 0
},


// ═══════════════════════════════════════════════════════════════
//  BATCH 8 — Parking Rules (Q71–80)
// ═══════════════════════════════════════════════════════════════

{
  id: 71, cat: 'parking',
  en: {
    q: 'What does a red-painted curb mean?',
    opts: ['No stopping, standing, or parking at any time', 'No parking, but you may stop briefly to load or unload', 'Parking allowed for 15 minutes maximum', 'Emergency vehicles only'],
    exp: 'A red curb means no stopping, standing, or parking at any time, for any vehicle. Not even briefly. Red curbs are typically found near fire hydrants, intersections, and other locations where stopping would create a hazard or block access.'
  },
  zh: { q: '红色路缘线是什么意思？', opts: ['任何时候均不得停车、停靠或泊车', '不得泊车，但可以短暂停车装卸', '最多停车15分钟', '仅供紧急车辆使用'], exp: '红色路缘线表示任何车辆在任何时候均不得停车、停靠或泊车，包括短暂停车。红色路缘线通常出现在消防栓、路口附近，以及其他停车会造成危险或阻碍通道的地方。' },
  zhTW: { q: '紅色路緣線是什麼意思？', opts: ['任何時候均不得停車、停靠或泊車', '不得泊車，但可以短暫停車裝卸', '最多停車15分鐘', '僅供緊急車輛使用'], exp: '紅色路緣線表示任何車輛在任何時候均不得停車、停靠或泊車，包括短暫停車。紅色路緣線通常出現在消防栓、路口附近，以及其他停車會造成危險或阻礙通道的地方。' },
  es: { q: '¿Qué significa un bordillo pintado de rojo?', opts: ['Sin parar, estar de pie o estacionar en ningún momento', 'Sin estacionar, pero puede detenerse brevemente para cargar o descargar', 'Estacionamiento permitido por un máximo de 15 minutos', 'Solo para vehículos de emergencia'], exp: 'Un bordillo rojo significa que no se puede detener, estar de pie ni estacionar en ningún momento, para ningún vehículo. Ni siquiera brevemente. Los bordillos rojos se encuentran típicamente cerca de hidrantes, intersecciones y otros lugares donde detenerse crearía un peligro.' },
  ans: 0
},

{
  id: 72, cat: 'parking',
  en: {
    q: 'What does a yellow-painted curb mean?',
    opts: ['Loading and unloading only — drivers must remain with the vehicle; time limits may apply', 'No parking but stopping is allowed', 'Parking allowed for 30 minutes', 'Commercial vehicles only may park here'],
    exp: 'A yellow curb is a loading zone for commercial vehicles. You may stop to load or unload passengers or freight, but the driver must remain with the vehicle at all times. Time limits are usually posted. In some areas yellow means a 20-minute commercial loading zone.'
  },
  zh: { q: '黄色路缘线是什么意思？', opts: ['仅允许装卸货物——司机须留守车内；可能有时间限制', '不得泊车但允许停车', '允许停车30分钟', '仅商业车辆可在此停车'], exp: '黄色路缘线是商业车辆的装卸区。您可以停车装卸乘客或货物，但驾驶员须随时留在车旁。通常会标明时间限制。在某些地区，黄色表示商业车辆20分钟装卸区。' },
  zhTW: { q: '黃色路緣線是什麼意思？', opts: ['僅允許裝卸貨物——司機須留守車內；可能有時間限制', '不得泊車但允許停車', '允許停車30分鐘', '僅商業車輛可在此停車'], exp: '黃色路緣線是商業車輛的裝卸區。您可以停車裝卸乘客或貨物，但駕駛員須隨時留在車旁。通常會標明時間限制。在某些地區，黃色表示商業車輛20分鐘裝卸區。' },
  es: { q: '¿Qué significa un bordillo pintado de amarillo?', opts: ['Solo carga y descarga — los conductores deben permanecer con el vehículo; pueden aplicar límites de tiempo', 'Sin estacionar pero se permite detener', 'Estacionamiento permitido por 30 minutos', 'Solo vehículos comerciales pueden estacionar aquí'], exp: 'Un bordillo amarillo es una zona de carga para vehículos comerciales. Puede detenerse para cargar o descargar pasajeros o mercancía, pero el conductor debe permanecer con el vehículo en todo momento. Generalmente se publican límites de tiempo.' },
  ans: 0
},

{
  id: 73, cat: 'parking',
  en: {
    q: 'What does a white-painted curb mean?',
    opts: ['Passenger loading and unloading only — usually limited to a few minutes', 'No parking at any time', 'Parking allowed for 15 minutes', 'Disabled parking — permit required'],
    exp: 'A white curb marks a passenger loading zone. Drivers may stop briefly to drop off or pick up passengers, but must remain with the vehicle. Time limits are typically 5 minutes. It is common near hotels, airports, and theaters.'
  },
  zh: { q: '白色路缘线是什么意思？', opts: ['仅限乘客上下车——通常限几分钟', '任何时候均不得停车', '允许停车15分钟', '残障停车——需要许可证'], exp: '白色路缘线标示乘客上下车区。驾驶员可短暂停车让乘客上下车，但须留在车旁。时间限制通常为5分钟。常见于酒店、机场和剧院附近。' },
  zhTW: { q: '白色路緣線是什麼意思？', opts: ['僅限乘客上下車——通常限幾分鐘', '任何時候均不得停車', '允許停車15分鐘', '殘障停車——需要許可證'], exp: '白色路緣線標示乘客上下車區。駕駛員可短暫停車讓乘客上下車，但須留在車旁。時間限制通常為5分鐘。常見於酒店、機場和劇院附近。' },
  es: { q: '¿Qué significa un bordillo pintado de blanco?', opts: ['Solo carga y descarga de pasajeros — generalmente limitado a unos minutos', 'Sin estacionar en ningún momento', 'Estacionamiento permitido por 15 minutos', 'Estacionamiento para discapacitados — se requiere permiso'], exp: 'Un bordillo blanco marca una zona de carga de pasajeros. Los conductores pueden detenerse brevemente para dejar o recoger pasajeros, pero deben permanecer con el vehículo. Los límites de tiempo son típicamente 5 minutos. Es común cerca de hoteles, aeropuertos y teatros.' },
  ans: 0
},

{
  id: 74, cat: 'parking',
  en: {
    q: 'What does a green-painted curb mean?',
    opts: ['Time-limited parking — you may park for the posted time limit only', 'Parking is free with no time limit', 'No parking — for deliveries only', 'Electric vehicle charging zone'],
    exp: 'A green curb indicates time-limited parking, usually 10 to 30 minutes. The time limit is posted on a sign nearby. Green curbs are common in front of post offices, banks, and stores where short-term customer parking is needed.'
  },
  zh: { q: '绿色路缘线是什么意思？', opts: ['限时停车——仅可在标示的时间内停车', '免费停车，无时间限制', '禁止停车——仅限送货', '电动车充电区'], exp: '绿色路缘线表示限时停车，通常为10至30分钟。附近标志会标明时间限制。绿色路缘线常见于邮局、银行和商店前，这些地方需要短时间客户停车。' },
  zhTW: { q: '綠色路緣線是什麼意思？', opts: ['限時停車——僅可在標示的時間內停車', '免費停車，無時間限制', '禁止停車——僅限送貨', '電動車充電區'], exp: '綠色路緣線表示限時停車，通常為10至30分鐘。附近標誌會標明時間限制。綠色路緣線常見於郵局、銀行和商店前，這些地方需要短時間客戶停車。' },
  es: { q: '¿Qué significa un bordillo pintado de verde?', opts: ['Estacionamiento con límite de tiempo — solo puede estacionar por el límite de tiempo publicado', 'Estacionamiento gratuito sin límite de tiempo', 'Sin estacionar — solo para entregas', 'Zona de carga de vehículos eléctricos'], exp: 'Un bordillo verde indica estacionamiento con límite de tiempo, generalmente de 10 a 30 minutos. El límite de tiempo está publicado en una señal cercana. Los bordillos verdes son comunes frente a oficinas de correos, bancos y tiendas donde se necesita estacionamiento a corto plazo.' },
  ans: 0
},

{
  id: 75, cat: 'parking',
  en: {
    q: 'How far from a fire hydrant must you park in California?',
    opts: ['At least 15 feet from either side of a fire hydrant', 'At least 10 feet', 'At least 20 feet', 'At least 5 feet'],
    exp: 'California law requires you to park at least 15 feet from a fire hydrant (unless your car is within a designated parking space or a sign indicates otherwise). Violating this can result in a fine and your vehicle being towed. Emergency responders need clear access to hydrants.'
  },
  zh: { q: '在加州，停车时与消防栓的最小距离是多少？', opts: ['消防栓两侧各至少15英尺', '至少10英尺', '至少20英尺', '至少5英尺'], exp: '加州法律要求停车时距消防栓至少15英尺（除非您的车在指定停车位内或有标志另行规定）。违规可能被罚款并被拖车。紧急救援人员需要畅通进入消防栓。' },
  zhTW: { q: '在加州，停車時與消防栓的最小距離是多少？', opts: ['消防栓兩側各至少15英尺', '至少10英尺', '至少20英尺', '至少5英尺'], exp: '加州法律要求停車時距消防栓至少15英尺（除非您的車在指定停車位內或有標誌另行規定）。違規可能被罰款並被拖車。緊急救援人員需要暢通進入消防栓。' },
  es: { q: '¿A qué distancia de una toma de agua debe estacionar en California?', opts: ['Al menos 15 pies de cualquier lado de una toma de agua', 'Al menos 10 pies', 'Al menos 20 pies', 'Al menos 5 pies'], exp: 'La ley de California requiere estacionar al menos 15 pies de una toma de agua (a menos que su auto esté dentro de un espacio de estacionamiento designado o una señal indique lo contrario). Violarlo puede resultar en una multa y que su vehículo sea remolcado.' },
  ans: 0
},

{
  id: 76, cat: 'parking',
  en: {
    q: 'When parking uphill on a street with a curb, which direction should you turn your front wheels?',
    opts: ['Turn wheels away from the curb (left, toward the road)', 'Turn wheels toward the curb (right)', 'Keep wheels straight', 'Turn wheels in whichever direction is easier'],
    exp: 'When parking uphill with a curb, turn your front wheels away from the curb (to the left). If your brakes fail, the car will roll back into the curb instead of into traffic. When parking downhill with a curb, turn wheels toward the curb. Without any curb (uphill or downhill), turn wheels toward the edge of the road.'
  },
  zh: { q: '在有路缘的街道上坡方向停车时，前轮应转向哪个方向？', opts: ['将车轮转向远离路缘的方向（向左，朝向道路）', '将车轮转向靠近路缘的方向（向右）', '车轮保持直行', '转向较容易的方向'], exp: '在有路缘的上坡处停车时，将前轮转向远离路缘的方向（向左）。如果刹车失灵，车辆会向后滚向路缘而不是滚向行车道。在有路缘的下坡处停车时，将车轮转向路缘。在没有路缘时（无论上坡或下坡），将车轮转向路边。' },
  zhTW: { q: '在有路緣的街道上坡方向停車時，前輪應轉向哪個方向？', opts: ['將車輪轉向遠離路緣的方向（向左，朝向道路）', '將車輪轉向靠近路緣的方向（向右）', '車輪保持直行', '轉向較容易的方向'], exp: '在有路緣的上坡處停車時，將前輪轉向遠離路緣的方向（向左）。如果剎車失靈，車輛會向後滾向路緣而不是滾向行車道。在有路緣的下坡處停車時，將車輪轉向路緣。在沒有路緣時（無論上坡或下坡），將車輪轉向路邊。' },
  es: { q: 'Al estacionar cuesta arriba en una calle con bordillo, ¿en qué dirección debe girar sus ruedas delanteras?', opts: ['Girar las ruedas alejándolas del bordillo (a la izquierda, hacia la carretera)', 'Girar las ruedas hacia el bordillo (a la derecha)', 'Mantener las ruedas rectas', 'Girar en la dirección que sea más fácil'], exp: 'Al estacionar cuesta arriba con bordillo, gire las ruedas delanteras alejándolas del bordillo (a la izquierda). Si los frenos fallan, el auto rodará hacia atrás hacia el bordillo en lugar de hacia el tráfico. Cuesta abajo con bordillo, gire hacia el bordillo.' },
  ans: 0
},

{
  id: 77, cat: 'parking',
  en: {
    q: 'You may not park within how many feet of a railroad crossing?',
    opts: ['50 feet from the nearest rail', '25 feet', '100 feet', '15 feet'],
    exp: 'California law prohibits parking within 7.5 feet of a railroad track (the space needed for trains to pass) and within 50 feet of a railroad crossing. Parking too close obstructs the view of train signals and may place your vehicle dangerously close to the tracks.'
  },
  zh: { q: '在铁路道口多少英尺以内不得停车？', opts: ['距最近铁轨50英尺以内', '25英尺', '100英尺', '15英尺'], exp: '加州法律禁止在铁轨7.5英尺以内（火车通过所需空间）和铁路道口50英尺以内停车。停车太近会遮挡列车信号的视线，并可能使您的车辆危险地靠近铁轨。' },
  zhTW: { q: '在鐵路道口多少英尺以內不得停車？', opts: ['距最近鐵軌50英尺以內', '25英尺', '100英尺', '15英尺'], exp: '加州法律禁止在鐵軌7.5英尺以內（火車通過所需空間）和鐵路道口50英尺以內停車。停車太近會遮擋列車信號的視線，並可能使您的車輛危險地靠近鐵軌。' },
  es: { q: '¿A cuántos pies de un cruce ferroviario no puede estacionar?', opts: ['50 pies del riel más cercano', '25 pies', '100 pies', '15 pies'], exp: 'La ley de California prohíbe estacionar dentro de 7.5 pies de una vía de tren (el espacio necesario para que pasen los trenes) y dentro de 50 pies de un cruce ferroviario. Estacionar demasiado cerca obstruye la vista de las señales del tren.' },
  ans: 0
},

{
  id: 78, cat: 'parking',
  en: {
    q: 'What is the rule for parking facing the wrong direction on a two-way street?',
    opts: ['It is illegal — you must always park in the direction of traffic flow on your side', 'It is legal if you are only stopping briefly', 'It is legal on residential streets at night only', 'It is legal anywhere as long as you signal when pulling out'],
    exp: 'Parking facing the wrong direction (against traffic) on a two-way street is illegal in California. You must always park on the right side of the road, headed in the direction of traffic. Facing traffic means you would have to cross into opposing lanes to leave the parking space.'
  },
  zh: { q: '在双向街道上逆向停车（面向来车方向）有什么规定？', opts: ['违法——您必须始终顺着您所在一侧的交通方向停车', '如果只是短暂停车则合法', '仅限住宅街道夜间合法', '只要驶出时打转向灯，任何地方均合法'], exp: '在加州，在双向街道上逆向停车（逆着交通方向）是违法的。您必须始终在道路右侧、顺着交通方向停车。逆向停车意味着您需要穿越对向车道才能驶出停车位。' },
  zhTW: { q: '在雙向街道上逆向停車（面向來車方向）有什麼規定？', opts: ['違法——您必須始終順著您所在一側的交通方向停車', '如果只是短暫停車則合法', '僅限住宅街道夜間合法', '只要駛出時打轉向燈，任何地方均合法'], exp: '在加州，在雙向街道上逆向停車（逆著交通方向）是違法的。您必須始終在道路右側、順著交通方向停車。逆向停車意味著您需要穿越對向車道才能駛出停車位。' },
  es: { q: '¿Cuál es la regla para estacionar en dirección contraria al tráfico en una calle de dos sentidos?', opts: ['Es ilegal — siempre debe estacionar en la dirección del flujo de tráfico de su lado', 'Es legal si solo se detiene brevemente', 'Es legal en calles residenciales solo de noche', 'Es legal en cualquier lugar siempre que señalice al salir'], exp: 'Estacionar en dirección contraria (contra el tráfico) en una calle de dos sentidos es ilegal en California. Siempre debe estacionar en el lado derecho de la carretera, en la dirección del tráfico. Estacionar en sentido contrario significa que tendría que cruzar a los carriles opuestos para salir.' },
  ans: 0
},

{
  id: 79, cat: 'parking',
  en: {
    q: 'You want to park in a space reserved for people with disabilities. What do you need?',
    opts: ['A valid disabled person placard (DP) or disabled veteran (DV) license plate displayed properly', 'Any vehicle may park there if no disabled person is waiting', 'Just the DP placard — you don\'t need to display it', 'A doctor\'s note is sufficient without a placard'],
    exp: 'To legally park in a disabled parking space, you must have a valid disabled person (DP) placard displayed on the rearview mirror, or a disabled veteran (DV) license plate. The placard must be issued to you (or someone in the vehicle). Misuse of a placard is a misdemeanor.'
  },
  zh: { q: '您想停在残障人士专用停车位。您需要什么？', opts: ['有效的残障人士车标（DP）或残障退伍军人（DV）牌照，并正确展示', '如果没有残障人士等待，任何车辆均可停在此处', '有DP车标即可——无需展示', '医生证明就足够，不需要车标'], exp: '要合法停在残障停车位，您必须在后视镜上展示有效的残障人士（DP）车标，或拥有残障退伍军人（DV）车牌。车标必须是您本人（或车内某人）的。滥用车标是违法行为。' },
  zhTW: { q: '您想停在殘障人士專用停車位。您需要什麼？', opts: ['有效的殘障人士車標（DP）或殘障退伍軍人（DV）牌照，並正確展示', '如果沒有殘障人士等待，任何車輛均可停在此處', '有DP車標即可——無需展示', '醫生證明就足夠，不需要車標'], exp: '要合法停在殘障停車位，您必須在後視鏡上展示有效的殘障人士（DP）車標，或擁有殘障退伍軍人（DV）車牌。車標必須是您本人（或車內某人）的。濫用車標是違法行為。' },
  es: { q: '¿Qué necesita para estacionar en un espacio reservado para personas con discapacidad?', opts: ['Un permiso de persona discapacitada (DP) válido o placa de veterano discapacitado (DV) exhibido correctamente', 'Cualquier vehículo puede estacionar si no hay una persona discapacitada esperando', 'Solo el permiso DP — no necesita exhibirlo', 'Una nota del médico es suficiente sin permiso'], exp: 'Para estacionar legalmente en un espacio de estacionamiento para discapacitados, debe tener un permiso de persona discapacitada (DP) válido exhibido en el espejo retrovisor, o una placa de veterano discapacitado (DV). El permiso debe estar emitido a usted (o a alguien en el vehículo).' },
  ans: 0
},

{
  id: 80, cat: 'parking',
  en: {
    q: 'When must you set your parking brake (emergency brake) in California?',
    opts: ['Whenever you park — it is required by law', 'Only on hills steeper than a 3% grade', 'Only when parallel parking', 'Only for vehicles without automatic transmissions'],
    exp: 'California Vehicle Code requires drivers to set the parking brake whenever they park a vehicle. In addition to the parking brake, you must turn your front wheels to curb the vehicle when parked on a hill (or toward the road edge if there is no curb). This prevents runaway vehicles.'
  },
  zh: { q: '在加州，什么时候必须拉驻车制动器（手刹）？', opts: ['每次停车时——法律要求', '仅在坡度超过3%的坡道上', '仅在平行停车时', '仅在非自动变速箱车辆上'], exp: '加州车辆法规要求驾驶员在每次停车时都要拉驻车制动器。除驻车制动器外，在坡道上停车时，您还必须将前轮转向路缘（或在没有路缘时转向路边），以防止车辆溜走。' },
  zhTW: { q: '在加州，什麼時候必須拉駐車制動器（手剎）？', opts: ['每次停車時——法律要求', '僅在坡度超過3%的坡道上', '僅在平行停車時', '僅在非自動變速箱車輛上'], exp: '加州車輛法規要求駕駛員在每次停車時都要拉駐車制動器。除駐車制動器外，在坡道上停車時，您還必須將前輪轉向路緣（或在沒有路緣時轉向路邊），以防止車輛溜走。' },
  es: { q: '¿Cuándo debe aplicar el freno de estacionamiento (freno de emergencia) en California?', opts: ['Cada vez que estacione — es requerido por la ley', 'Solo en pendientes superiores al 3% de inclinación', 'Solo al estacionar en paralelo', 'Solo para vehículos sin transmisiones automáticas'], exp: 'El Código de Vehículos de California requiere que los conductores apliquen el freno de estacionamiento cada vez que estacionen un vehículo. Además del freno, debe girar las ruedas delanteras hacia el bordillo cuando esté estacionado en una pendiente (o hacia el borde si no hay bordillo).' },
  ans: 0
},


// ═══════════════════════════════════════════════════════════════
//  BATCH 9 — Freeway Driving (Q81–90)
// ═══════════════════════════════════════════════════════════════

{
  id: 81, cat: 'highway',
  en: {
    q: 'What is an HOV lane and who may use it?',
    opts: ['High-Occupancy Vehicle lane — requires 2 or more occupants (unless otherwise posted) or a clean-air vehicle sticker', 'Any vehicle may use it when traffic is heavy', 'Only buses and carpools of 3 or more', 'Motorcycles and bicycles only'],
    exp: 'HOV (High-Occupancy Vehicle) lanes, also called carpool lanes, are marked with a diamond symbol. They generally require 2 or more people in the vehicle during posted hours. Motorcycles, buses, and vehicles with a valid Clean Air Vehicle sticker may also use HOV lanes.'
  },
  zh: { q: '什么是HOV车道，谁可以使用？', opts: ['高乘载车辆车道——需要2人或以上（除非另有标示）或清洁能源车辆贴纸', '交通拥堵时任何车辆均可使用', '仅限公共汽车和3人以上拼车', '仅限摩托车和自行车'], exp: 'HOV（高乘载车辆）车道，也称为拼车车道，以菱形符号标示。在标示时间内通常需要车内有2人或以上。摩托车、公共汽车以及有效清洁空气车辆贴纸的车辆也可以使用HOV车道。' },
  zhTW: { q: '什麼是HOV車道，誰可以使用？', opts: ['高乘載車輛車道——需要2人或以上（除非另有標示）或清潔能源車輛貼紙', '交通擁堵時任何車輛均可使用', '僅限公共汽車和3人以上拼車', '僅限摩托車和自行車'], exp: 'HOV（高乘載車輛）車道，也稱為拼車車道，以菱形符號標示。在標示時間內通常需要車內有2人或以上。摩托車、公共汽車以及有效清潔空氣車輛貼紙的車輛也可以使用HOV車道。' },
  es: { q: '¿Qué es un carril HOV y quién puede usarlo?', opts: ['Carril de alta ocupación — requiere 2 o más ocupantes (a menos que se indique lo contrario) o calcomanía de vehículo de aire limpio', 'Cualquier vehículo puede usarlo cuando el tráfico es pesado', 'Solo autobuses y carpools de 3 o más', 'Solo motocicletas y bicicletas'], exp: 'Los carriles HOV (Vehículo de Alta Ocupación), también llamados carriles de carpool, están marcados con un símbolo de diamante. Generalmente requieren 2 o más personas en el vehículo durante las horas publicadas. Las motocicletas, autobuses y vehículos con calcomanía de Vehículo de Aire Limpio válida también pueden usar carriles HOV.' },
  ans: 0
},

{
  id: 82, cat: 'highway',
  en: {
    q: 'How should you enter a freeway from an on-ramp?',
    opts: ['Accelerate to match freeway traffic speed, then merge smoothly into a gap', 'Stop at the end of the ramp and wait for a large gap', 'Enter at any speed — freeway drivers must yield to merging traffic', 'Use the shoulder to merge gradually'],
    exp: 'When entering a freeway, use the acceleration lane to build up speed matching the freeway traffic. Check mirrors and blind spots, signal, find a safe gap, and merge smoothly. Stopping on the ramp is extremely dangerous. Freeway drivers are not required to yield, but courteous drivers often adjust.'
  },
  zh: { q: '如何从入口匝道进入高速公路？', opts: ['加速到与高速公路车流速度匹配，然后平稳并入间隙', '在匝道末端停车，等待较大的间隙', '以任何速度进入——高速公路驾驶员必须给并入车辆让行', '使用路肩逐渐并入'], exp: '进入高速公路时，使用加速车道将速度提高到与高速公路车流相匹配。检查后视镜和盲区，打转向灯，找到安全间隙，平稳并入。在匝道上停车极其危险。高速公路上的驾驶员无需让行，但礼貌的驾驶员通常会适当调整。' },
  zhTW: { q: '如何從入口匝道進入高速公路？', opts: ['加速到與高速公路車流速度匹配，然後平穩並入間隙', '在匝道末端停車，等待較大的間隙', '以任何速度進入——高速公路駕駛員必須給並入車輛讓行', '使用路肩逐漸並入'], exp: '進入高速公路時，使用加速車道將速度提高到與高速公路車流相匹配。檢查後視鏡和盲區，打轉向燈，找到安全間隙，平穩並入。在匝道上停車極其危險。高速公路上的駕駛員無需讓行，但禮貌的駕駛員通常會適當調整。' },
  es: { q: '¿Cómo debe entrar a una autopista desde una rampa de acceso?', opts: ['Acelere para igualar la velocidad del tráfico de la autopista, luego fusiónese suavemente en un espacio', 'Deténgase al final de la rampa y espere un espacio grande', 'Entre a cualquier velocidad — los conductores de la autopista deben ceder al tráfico que se fusiona', 'Use el hombro para fusionarse gradualmente'], exp: 'Al entrar a una autopista, use el carril de aceleración para aumentar la velocidad igualando el tráfico. Revise espejos y puntos ciegos, señalice, encuentre un espacio seguro y fusiónese suavemente. Detenerse en la rampa es extremadamente peligroso.' },
  ans: 0
},

{
  id: 83, cat: 'highway',
  en: {
    q: 'What is the correct lane to drive in on a freeway (when not passing)?',
    opts: ['The right lane — keep right except to pass', 'The center lane for maximum safety', 'The left (fast) lane for best visibility', 'Any lane — lane choice does not matter on freeways'],
    exp: 'On a freeway, you should generally stay in the right lanes and use left lanes only for passing. California law requires drivers not to impede traffic by driving in the left lane at slow speeds. Keep right except to pass keeps traffic flowing safely.'
  },
  zh: { q: '在高速公路上（不超车时）应行驶在哪个车道？', opts: ['右侧车道——除超车外靠右行驶', '中间车道以获得最大安全性', '左侧（快速）车道以获得最佳视野', '任何车道——高速公路上车道选择无关紧要'], exp: '在高速公路上，您通常应行驶在右侧车道，仅在超车时使用左侧车道。加州法律要求驾驶员不得以低速行驶在左侧车道妨碍交通。除超车外靠右行驶可保持交通安全顺畅。' },
  zhTW: { q: '在高速公路上（不超車時）應行駛在哪個車道？', opts: ['右側車道——除超車外靠右行駛', '中間車道以獲得最大安全性', '左側（快速）車道以獲得最佳視野', '任何車道——高速公路上車道選擇無關緊要'], exp: '在高速公路上，您通常應行駛在右側車道，僅在超車時使用左側車道。加州法律要求駕駛員不得以低速行駛在左側車道妨礙交通。除超車外靠右行駛可保持交通安全順暢。' },
  es: { q: '¿En qué carril debe conducir en una autopista (cuando no está adelantando)?', opts: ['El carril derecho — manténgase a la derecha excepto para adelantar', 'El carril central para máxima seguridad', 'El carril izquierdo (rápido) para mejor visibilidad', 'Cualquier carril — la elección de carril no importa en autopistas'], exp: 'En una autopista, generalmente debe mantenerse en los carriles derechos y usar los carriles izquierdos solo para adelantar. La ley de California requiere que los conductores no obstaculicen el tráfico conduciendo en el carril izquierdo a baja velocidad.' },
  ans: 0
},

{
  id: 84, cat: 'highway',
  en: {
    q: 'Your vehicle breaks down on the freeway. What should you do?',
    opts: ['Pull as far off the road as possible, turn on hazard lights, stay behind guardrail, and call for help', 'Stop in the travel lane and raise your hood', 'Walk along the freeway to the nearest exit', 'Turn on hazard lights and remain in your vehicle in the travel lane'],
    exp: 'If your vehicle breaks down: (1) Signal and pull completely off the freeway onto the shoulder or beyond the guardrail if possible. (2) Turn on hazard lights. (3) Stay in your vehicle if safely off the road, or exit and stand behind the guardrail. (4) Call for help. Never stand behind your vehicle on the freeway.'
  },
  zh: { q: '您的车辆在高速公路上抛锚了。您应该怎么做？', opts: ['尽可能靠边停车，开启危险灯，站在护栏后方，并打电话求助', '在行车道上停车并打开引擎盖', '沿着高速公路步行到最近的出口', '开启危险灯并留在行车道上的车内'], exp: '车辆抛锚时：(1) 打转向灯并完全驶离高速公路到路肩或护栏外侧（如有可能）。(2) 开启危险灯。(3) 如果安全离开路面，可留在车内，或下车站在护栏后方。(4) 打电话求助。切勿站在高速公路上您车辆的后方。' },
  zhTW: { q: '您的車輛在高速公路上拋錨了。您應該怎麼做？', opts: ['盡可能靠邊停車，開啟危險燈，站在護欄後方，並打電話求助', '在行車道上停車並打開引擎蓋', '沿著高速公路步行到最近的出口', '開啟危險燈並留在行車道上的車內'], exp: '車輛拋錨時：(1) 打轉向燈並完全駛離高速公路到路肩或護欄外側（如有可能）。(2) 開啟危險燈。(3) 如果安全離開路面，可留在車內，或下車站在護欄後方。(4) 打電話求助。切勿站在高速公路上您車輛的後方。' },
  es: { q: 'Su vehículo se avería en la autopista. ¿Qué debe hacer?', opts: ['Orillarse lo más posible, encender las luces de emergencia, mantenerse detrás del guardacarril y pedir ayuda', 'Detenerse en el carril de tránsito y levantar el capó', 'Caminar por la autopista hasta la salida más cercana', 'Encender las luces de emergencia y permanecer en su vehículo en el carril de tránsito'], exp: 'Si su vehículo se avería: (1) Señalice y salga completamente de la autopista al hombro o más allá del guardacarril si es posible. (2) Encienda las luces de emergencia. (3) Permanezca en su vehículo si está fuera de la carretera de forma segura, o salga y párese detrás del guardacarril. (4) Pida ayuda.' },
  ans: 0
},

{
  id: 85, cat: 'highway',
  en: {
    q: 'You miss your freeway exit. What should you do?',
    opts: ['Continue to the next exit and turn around — never reverse on a freeway', 'Stop and back up on the shoulder to the exit', 'Make a U-turn at the nearest crossover', 'Cut across the painted gore area to reach the exit'],
    exp: 'If you miss your exit, continue to the next exit, leave the freeway, and find your way back. Never reverse on a freeway, back up on the shoulder, or cut across painted median areas. These actions are extremely dangerous and illegal.'
  },
  zh: { q: '您错过了高速公路出口。您应该怎么做？', opts: ['继续到下一个出口并掉头——切勿在高速公路上倒车', '在路肩倒车回到出口', '在最近的中央分隔带开口处掉头', '穿越涂色楔形区到达出口'], exp: '如果错过出口，请继续行驶到下一个出口，离开高速公路，然后找路返回。切勿在高速公路上倒车、在路肩倒车，或穿越涂色中央分隔带区域。这些行为极其危险且违法。' },
  zhTW: { q: '您錯過了高速公路出口。您應該怎麼做？', opts: ['繼續到下一個出口並掉頭——切勿在高速公路上倒車', '在路肩倒車回到出口', '在最近的中央分隔帶開口處掉頭', '穿越塗色楔形區到達出口'], exp: '如果錯過出口，請繼續行駛到下一個出口，離開高速公路，然後找路返回。切勿在高速公路上倒車、在路肩倒車，或穿越塗色中央分隔帶區域。這些行為極其危險且違法。' },
  es: { q: 'Se pierde su salida de la autopista. ¿Qué debe hacer?', opts: ['Continuar hasta la próxima salida y dar vuelta — nunca reversa en una autopista', 'Detenerse y dar marcha atrás en el hombro hasta la salida', 'Hacer un giro en U en el cruce mediano más cercano', 'Cruzar el área pintada de cuña para llegar a la salida'], exp: 'Si pierde su salida, continúe hasta la siguiente salida, salga de la autopista y encuentre su camino de regreso. Nunca dé marcha atrás en una autopista, en el hombro, ni cruce áreas medianas pintadas. Estas acciones son extremadamente peligrosas e ilegales.' },
  ans: 0
},

{
  id: 86, cat: 'highway',
  en: {
    q: 'What is a safe following distance when driving behind a large truck on the freeway?',
    opts: ['At least 4 seconds — large trucks have large blind spots and long stopping distances', '2 seconds — same as for regular vehicles', 'Stay as close as possible to reduce wind drag', '1 car length per 10 mph of speed'],
    exp: 'When following a large truck, maintain at least a 4-second following distance (more in bad weather). Large trucks have much longer stopping distances than cars and have large "no-zones" (blind spots) on all four sides. If you cannot see the truck\'s mirrors, the driver cannot see you.'
  },
  zh: { q: '在高速公路上跟在大型卡车后面行驶时，安全的跟车距离是多少？', opts: ['至少4秒——大型卡车有较大盲区和较长的停车距离', '2秒——与普通车辆相同', '尽量靠近以减少风阻', '每10英里/小时车速保持1辆车身距离'], exp: '跟在大型卡车后面时，保持至少4秒的跟车距离（恶劣天气下更长）。大型卡车的停车距离比轿车长得多，且四面都有较大的"盲区"。如果您看不到卡车的后视镜，驾驶员也看不到您。' },
  zhTW: { q: '在高速公路上跟在大型卡車後面行駛時，安全的跟車距離是多少？', opts: ['至少4秒——大型卡車有較大盲區和較長的停車距離', '2秒——與普通車輛相同', '盡量靠近以減少風阻', '每10英里/小時車速保持1輛車身距離'], exp: '跟在大型卡車後面時，保持至少4秒的跟車距離（惡劣天氣下更長）。大型卡車的停車距離比轎車長得多，且四面都有較大的「盲區」。如果您看不到卡車的後視鏡，駕駛員也看不到您。' },
  es: { q: '¿Cuál es una distancia de seguimiento segura cuando conduce detrás de un camión grande en la autopista?', opts: ['Al menos 4 segundos — los camiones grandes tienen grandes puntos ciegos y largas distancias de frenado', '2 segundos — igual que para vehículos regulares', 'Mantenerse lo más cerca posible para reducir la resistencia del viento', '1 largo de auto por cada 10 mph de velocidad'], exp: 'Cuando sigue a un camión grande, mantenga al menos 4 segundos de distancia (más en mal clima). Los camiones grandes tienen distancias de frenado mucho más largas que los autos y tienen grandes "zonas de no-visión" (puntos ciegos) en los cuatro lados.' },
  ans: 0
},

{
  id: 87, cat: 'highway',
  en: {
    q: 'Is lane splitting (riding a motorcycle between lanes of slow or stopped traffic) legal in California?',
    opts: ['Yes — California is the only US state where it is explicitly legal', 'No — it is illegal in all situations', 'Only on freeways, not city streets', 'Only when traffic is completely stopped'],
    exp: 'California is the only U.S. state where lane splitting by motorcycles is explicitly legal (AB 51, signed in 2016). The California Highway Patrol recommends motorcyclists go no more than 10 mph faster than surrounding traffic and not split lanes above 30 mph.'
  },
  zh: { q: '摩托车分道行驶（在缓行或停止的车流之间行驶）在加州合法吗？', opts: ['合法——加州是美国唯一明确允许的州', '违法——在任何情况下均违法', '仅限高速公路，不适用于城市街道', '仅当交通完全停止时'], exp: '加州是美国唯一明确允许摩托车分道行驶的州（2016年签署的AB 51法案）。加州公路巡逻队建议摩托车手行驶速度不超过周围车流10英里/小时，且分道行驶时速度不超过30英里/小时。' },
  zhTW: { q: '摩托車分道行駛（在緩行或停止的車流之間行駛）在加州合法嗎？', opts: ['合法——加州是美國唯一明確允許的州', '違法——在任何情況下均違法', '僅限高速公路，不適用於城市街道', '僅當交通完全停止時'], exp: '加州是美國唯一明確允許摩托車分道行駛的州（2016年簽署的AB 51法案）。加州公路巡邏隊建議摩托車手行駛速度不超過周圍車流10英里/小時，且分道行駛時速度不超過30英里/小時。' },
  es: { q: '¿Es legal el filtrado de carril (conducir una motocicleta entre carriles de tráfico lento o detenido) en California?', opts: ['Sí — California es el único estado de EE.UU. donde es explícitamente legal', 'No — es ilegal en todas las situaciones', 'Solo en autopistas, no en calles de ciudad', 'Solo cuando el tráfico está completamente detenido'], exp: 'California es el único estado de EE.UU. donde el filtrado de carril por motocicletas es explícitamente legal (AB 51, firmado en 2016). La CHP recomienda que los motociclistas no vayan más de 10 mph más rápido que el tráfico circundante y no filtren por encima de 30 mph.' },
  ans: 0
},

{
  id: 88, cat: 'highway',
  en: {
    q: 'What should you do when exiting a freeway?',
    opts: ['Signal early, move into the exit lane, reduce speed in the deceleration lane, not on the freeway', 'Brake hard to slow down before reaching the exit ramp', 'Exit at freeway speed and brake on the ramp', 'Change multiple lanes at once to reach the exit'],
    exp: 'When exiting a freeway: (1) Signal at least 5 seconds before moving to the exit lane. (2) Move into the exit lane early. (3) Begin slowing only after you are in the deceleration lane (not on the main freeway). (4) Obey the ramp\'s advisory speed limit. Sudden braking on the freeway is dangerous.'
  },
  zh: { q: '在高速公路上出口时应该怎么做？', opts: ['提前打转向灯，驶入出口车道，在减速车道而非高速公路上减速', '到达出口匝道前急刹车减速', '以高速公路速度驶出后在匝道上刹车', '一次变换多条车道以到达出口'], exp: '高速公路出口时：(1) 在变换到出口车道前至少5秒打转向灯。(2) 提前驶入出口车道。(3) 只在进入减速车道后才开始减速（不是在高速公路主路上）。(4) 遵守匝道建议限速。在高速公路上突然刹车非常危险。' },
  zhTW: { q: '在高速公路上出口時應該怎麼做？', opts: ['提前打轉向燈，駛入出口車道，在減速車道而非高速公路上減速', '到達出口匝道前急剎車減速', '以高速公路速度駛出後在匝道上剎車', '一次變換多條車道以到達出口'], exp: '高速公路出口時：(1) 在變換到出口車道前至少5秒打轉向燈。(2) 提前駛入出口車道。(3) 只在進入減速車道後才開始減速（不是在高速公路主路上）。(4) 遵守匝道建議限速。在高速公路上突然剎車非常危險。' },
  es: { q: '¿Qué debe hacer cuando sale de una autopista?', opts: ['Señalice con anticipación, muévase al carril de salida, reduzca la velocidad en el carril de desaceleración, no en la autopista', 'Frene fuerte para reducir la velocidad antes de llegar a la rampa de salida', 'Salga a velocidad de autopista y frene en la rampa', 'Cambie múltiples carriles a la vez para llegar a la salida'], exp: 'Al salir de una autopista: (1) Señalice al menos 5 segundos antes de moverse al carril de salida. (2) Muévase al carril de salida con anticipación. (3) Comience a frenar solo después de estar en el carril de desaceleración. (4) Respete el límite de velocidad de aviso de la rampa.' },
  ans: 0
},

{
  id: 89, cat: 'highway',
  en: {
    q: 'What does a double solid yellow line in the center of the road mean?',
    opts: ['No crossing — passing or turning left across the lines is not permitted', 'You may cross to pass if it is safe', 'The left lane is reversible during peak hours', 'Bicycle lane boundary'],
    exp: 'Double solid yellow lines indicate that crossing or passing is not permitted from either direction. You may not cross double solid yellow lines to pass another vehicle or to make a left turn. They are found where crossing would be especially dangerous, such as on curves and hills.'
  },
  zh: { q: '道路中央的双实黄线表示什么？', opts: ['禁止穿越——不允许穿越这些线超车或左转', '如果安全可以穿越超车', '左侧车道在高峰时段可以反向行驶', '自行车道边界'], exp: '双实黄线表示两个方向均不允许穿越或超车。您不得穿越双实黄线超车或左转。它们出现在穿越特别危险的地方，例如弯道和坡道。' },
  zhTW: { q: '道路中央的雙實黃線表示什麼？', opts: ['禁止穿越——不允許穿越這些線超車或左轉', '如果安全可以穿越超車', '左側車道在高峰時段可以反向行駛', '自行車道邊界'], exp: '雙實黃線表示兩個方向均不允許穿越或超車。您不得穿越雙實黃線超車或左轉。它們出現在穿越特別危險的地方，例如彎道和坡道。' },
  es: { q: '¿Qué significa una doble línea amarilla sólida en el centro de la carretera?', opts: ['Sin cruzar — no se permite adelantar ni girar a la izquierda cruzando las líneas', 'Puede cruzar para adelantar si es seguro', 'El carril izquierdo es reversible durante las horas pico', 'Límite del carril de bicicletas'], exp: 'Las líneas amarillas dobles sólidas indican que cruzar o adelantar no está permitido desde ninguna dirección. No puede cruzar líneas amarillas dobles sólidas para adelantar otro vehículo o para girar a la izquierda. Se encuentran donde cruzar sería especialmente peligroso.' },
  ans: 0
},

{
  id: 90, cat: 'highway',
  en: {
    q: 'What causes "highway hypnosis" and how can you prevent it?',
    opts: ['Monotonous driving causes drowsiness — prevent it by taking breaks, talking, or adjusting temperature', 'Bright headlights from oncoming vehicles — wear sunglasses', 'High speed causes tunnel vision — slow down', 'Road vibrations lull you to sleep — use cruise control'],
    exp: 'Highway hypnosis is a trance-like state caused by long, monotonous driving. To prevent it: take breaks every 2 hours or 100 miles, keep the car cool, listen to music or talk radio, and never drive when sleepy. If drowsy, pull off safely and rest — even a 20-minute nap helps.'
  },
  zh: { q: '什么导致"高速公路催眠"，如何预防？', opts: ['单调的驾驶导致困倦——通过休息、交谈或调节温度来预防', '对向车辆的强光——戴太阳镜', '高速行驶导致视野变窄——减速', '道路振动使您昏昏欲睡——使用定速巡航'], exp: '高速公路催眠是由于长时间单调驾驶引起的恍惚状态。预防方法：每2小时或100英里休息一次，保持车内凉爽，听音乐或谈话节目，以及在困倦时切勿驾驶。如果感到困倦，请安全停车休息——即使打20分钟盹也有帮助。' },
  zhTW: { q: '什麼導致「高速公路催眠」，如何預防？', opts: ['單調的駕駛導致困倦——通過休息、交談或調節溫度來預防', '對向車輛的強光——戴太陽眼鏡', '高速行駛導致視野變窄——減速', '道路振動使您昏昏欲睡——使用定速巡航'], exp: '高速公路催眠是由於長時間單調駕駛引起的恍惚狀態。預防方法：每2小時或100英里休息一次，保持車內涼爽，聽音樂或談話節目，以及在困倦時切勿駕駛。如果感到困倦，請安全停車休息——即使打20分鐘盹也有幫助。' },
  es: { q: '¿Qué causa la "hipnosis de autopista" y cómo puede prevenirla?', opts: ['La conducción monótona causa somnolencia — prevenirla tomando descansos, hablando o ajustando la temperatura', 'Los faros brillantes de vehículos que vienen — use gafas de sol', 'La alta velocidad causa visión de túnel — reduzca la velocidad', 'Las vibraciones de la carretera lo adormecen — use el control de crucero'], exp: 'La hipnosis de autopista es un estado de trance causado por conducción larga y monótona. Para prevenirla: tome descansos cada 2 horas o 100 millas, mantenga el auto fresco, escuche música o radio de conversación, y nunca conduzca con sueño. Si tiene sueño, deténgase y descanse.' },
  ans: 0
},


// ── Batch 10 · DUI & Drug Laws · Q91–100 ──────────────────────
{
  id:91,cat:'dui',
  en:{q:'What is the legal blood alcohol concentration (BAC) limit for drivers 21 and older in California?',opts:['0.08%','0.05%','0.10%','0.04%'],exp:'In California, it is illegal to drive with a BAC of 0.08% or higher for drivers 21 and older. At 0.08%, driving ability is significantly impaired. However, you can be cited for DUI at lower BAC levels if your driving is impaired.'},
  zh:{q:'在加州，21岁及以上驾驶员的合法血液酒精浓度（BAC）上限是多少？',opts:['0.08%','0.05%','0.10%','0.04%'],exp:'在加州，21岁及以上的驾驶员血液酒精浓度达到或超过0.08%即为违法驾驶。在0.08%时，驾驶能力已严重受损。但如果驾驶行为受到损害，即使低于此值也可能被认定为酒后驾车。'},
  zhTW:{q:'在加州，21歲及以上駕駛員的合法血液酒精濃度（BAC）上限是多少？',opts:['0.08%','0.05%','0.10%','0.04%'],exp:'在加州，21歲及以上的駕駛員血液酒精濃度達到或超過0.08%即為違法駕駛。在0.08%時，駕駛能力已嚴重受損。但如果駕駛行為受到損害，即使低於此值也可能被認定為酒後駕車。'},
  es:{q:'¿Cuál es el límite legal de concentración de alcohol en sangre (BAC) para conductores de 21 años o más en California?',opts:['0.08%','0.05%','0.10%','0.04%'],exp:'En California, es ilegal conducir con un BAC de 0.08% o más para conductores de 21 años o más. Con 0.08%, la capacidad de conducción está significativamente deteriorada. Sin embargo, puede ser citado por DUI con niveles de BAC más bajos si su conducción está deteriorada.'},
  ans:0
},
{
  id:92,cat:'dui',
  en:{q:'What BAC limit applies to drivers under 21 years old in California (Zero Tolerance Law)?',opts:['0.01%','0.02%','0.05%','0.08%'],exp:'California\'s Zero Tolerance Law makes it illegal for anyone under 21 to drive with a BAC of 0.01% or higher. This is essentially zero — even one drink can put a minor over the limit. Violation results in a 1-year license suspension.'},
  zh:{q:'加州对21岁以下驾驶员适用什么血液酒精浓度限制（零容忍法律）？',opts:['0.01%','0.02%','0.05%','0.08%'],exp:'加州零容忍法律规定，21岁以下人员血液酒精浓度达到或超过0.01%即为违法驾驶。这实际上是零——即使只喝一杯也可能超过限制。违规将导致1年驾照暂停。'},
  zhTW:{q:'加州對21歲以下駕駛員適用什麼血液酒精濃度限制（零容忍法律）？',opts:['0.01%','0.02%','0.05%','0.08%'],exp:'加州零容忍法律規定，21歲以下人員血液酒精濃度達到或超過0.01%即為違法駕駛。這實際上是零——即使只喝一杯也可能超過限制。違規將導致1年駕照暫停。'},
  es:{q:'¿Qué límite de BAC aplica a conductores menores de 21 años en California (Ley de Tolerancia Cero)?',opts:['0.01%','0.02%','0.05%','0.08%'],exp:'La Ley de Tolerancia Cero de California hace ilegal que cualquier persona menor de 21 años conduzca con un BAC de 0.01% o más. Esto es esencialmente cero — incluso una bebida puede superar el límite. La violación resulta en suspensión de licencia por 1 año.'},
  ans:0
},
{
  id:93,cat:'dui',
  en:{q:'What BAC limit applies to commercial vehicle drivers in California?',opts:['0.04%','0.08%','0.06%','0.02%'],exp:'Commercial drivers (CDL holders) are held to a stricter standard: 0.04% BAC while operating a commercial vehicle. A commercial driver can also lose their CDL for DUI even if driving a personal vehicle. A BAC of 0.08%+ results in a 1-year CDL disqualification for first offense.'},
  zh:{q:'加州对商业车辆驾驶员适用什么血液酒精浓度限制？',opts:['0.04%','0.08%','0.06%','0.02%'],exp:'商业驾驶员（持有CDL）须遵守更严格的标准：驾驶商业车辆时血液酒精浓度不得达到或超过0.04%。商业驾驶员即使驾驶私家车发生酒驾，也可能失去CDL。首次违规血液酒精浓度达0.08%以上将导致CDL被取消资格1年。'},
  zhTW:{q:'加州對商業車輛駕駛員適用什麼血液酒精濃度限制？',opts:['0.04%','0.08%','0.06%','0.02%'],exp:'商業駕駛員（持有CDL）須遵守更嚴格的標準：駕駛商業車輛時血液酒精濃度不得達到或超過0.04%。商業駕駛員即使駕駛私家車發生酒駕，也可能失去CDL。首次違規血液酒精濃度達0.08%以上將導致CDL被取消資格1年。'},
  es:{q:'¿Qué límite de BAC aplica a los conductores de vehículos comerciales en California?',opts:['0.04%','0.08%','0.06%','0.02%'],exp:'Los conductores comerciales (titulares de CDL) están sujetos a un estándar más estricto: 0.04% de BAC mientras operan un vehículo comercial. Un conductor comercial también puede perder su CDL por DUI incluso si conduce un vehículo personal.'},
  ans:0
},
{
  id:94,cat:'dui',
  en:{q:'If you refuse to take a chemical test (breath, blood, or urine) after a lawful DUI arrest in California, what happens?',opts:['Your license is automatically suspended for 1–3 years and refusal can be used against you in court','Nothing — you have the right to refuse all tests','You only lose your license for 6 months','You must pay a fine but keep your license'],exp:'California\'s Implied Consent Law means that by driving, you agree to chemical testing if lawfully arrested for DUI. Refusing results in an automatic 1-year suspension (2 years for second, 3 years for third). Refusal can also be used as evidence in court.'},
  zh:{q:'在加州，如果您在合法的酒驾逮捕后拒绝接受化学测试（呼气、血液或尿液），会发生什么？',opts:['您的驾照将自动暂停1-3年，且拒绝行为可作为不利证据在法庭使用','没有任何后果——您有权拒绝所有测试','仅吊销驾照6个月','只需缴罚款但可保留驾照'],exp:'加州的默示同意法意味着，通过驾驶您已同意在被合法逮捕时接受化学检测。拒绝将导致自动暂停驾照1年（第二次2年，第三次3年）。拒绝行为也可作为法庭证据。'},
  zhTW:{q:'在加州，如果您在合法的酒駕逮捕後拒絕接受化學測試（呼氣、血液或尿液），會發生什麼？',opts:['您的駕照將自動暫停1-3年，且拒絕行為可作為不利證據在法庭使用','沒有任何後果——您有權拒絕所有測試','僅吊銷駕照6個月','只需繳罰款但可保留駕照'],exp:'加州的默示同意法意味著，通過駕駛您已同意在被合法逮捕時接受化學檢測。拒絕將導致自動暫停駕照1年（第二次2年，第三次3年）。拒絕行為也可作為法庭證據。'},
  es:{q:'Si se niega a tomar una prueba química (aliento, sangre u orina) después de un arresto por DUI en California, ¿qué sucede?',opts:['Su licencia es suspendida automáticamente por 1–3 años y la negativa puede usarse en su contra en el tribunal','Nada — tiene derecho a negarse a todas las pruebas','Solo pierde su licencia por 6 meses','Solo paga una multa pero conserva su licencia'],exp:'La Ley de Consentimiento Implícito de California significa que al conducir, acepta las pruebas químicas si es arrestado legalmente por DUI. Negarse resulta en una suspensión automática de 1 año (2 años para segundo, 3 años para tercero).'},
  ans:0
},
{
  id:95,cat:'dui',
  en:{q:'How does alcohol affect your driving ability?',opts:['It slows reaction time, impairs judgment, reduces coordination, and narrows vision','It only affects you if you feel intoxicated','It makes you more alert and focused at low levels','Effects only begin when BAC reaches 0.08%'],exp:'Alcohol impairs driving well before the 0.08% legal limit. Even small amounts slow reaction time, impair judgment and decision-making, reduce hand-eye coordination, cause tunnel vision, and increase risk-taking behavior. There is no safe amount of alcohol for driving.'},
  zh:{q:'酒精如何影响您的驾驶能力？',opts:['减慢反应时间、损害判断力、降低协调性并缩窄视野','只有当您感到醉酒时才会影响您','低剂量时会让您更警觉专注','只有血液酒精浓度达到0.08%时才开始起效'],exp:'酒精在达到0.08%法定限制之前就已经损害驾驶能力。即使少量饮酒也会减慢反应时间、损害判断力和决策能力、降低手眼协调性、造成视野变窄，并增加冒险行为。驾驶没有安全的饮酒量。'},
  zhTW:{q:'酒精如何影響您的駕駛能力？',opts:['減慢反應時間、損害判斷力、降低協調性並縮窄視野','只有當您感到醉酒時才會影響您','低劑量時會讓您更警覺專注','只有血液酒精濃度達到0.08%時才開始起效'],exp:'酒精在達到0.08%法定限制之前就已經損害駕駛能力。即使少量飲酒也會減慢反應時間、損害判斷力和決策能力、降低手眼協調性、造成視野變窄，並增加冒險行為。駕駛沒有安全的飲酒量。'},
  es:{q:'¿Cómo afecta el alcohol su capacidad de conducción?',opts:['Enlentece el tiempo de reacción, deteriora el juicio, reduce la coordinación y estrecha la visión','Solo le afecta si se siente intoxicado','Lo hace más alerta y concentrado en niveles bajos','Los efectos solo comienzan cuando el BAC llega al 0.08%'],exp:'El alcohol deteriora la conducción mucho antes del límite legal del 0.08%. Incluso pequeñas cantidades enlentecen el tiempo de reacción, deterioran el juicio, reducen la coordinación mano-ojo, causan visión de túnel y aumentan el comportamiento de riesgo.'},
  ans:0
},
{
  id:96,cat:'dui',
  en:{q:'What is the consequence of a first-offense DUI conviction in California?',opts:['Up to 6 months in jail, fines up to $1,000, license suspension, DUI school, and possible ignition interlock device','Only a fine — no jail time for first offense','30-day license suspension with no other penalties','Automatic 1-year prison sentence'],exp:'A first DUI offense in California can result in: 96 hours to 6 months in jail (or alternative sentence), $390–$1,000 in fines (plus penalties totaling ~$2,000+), 6-month license suspension, mandatory DUI school (3–9 months), and possible ignition interlock device (IID) requirement.'},
  zh:{q:'在加州，首次酒驾定罪的后果是什么？',opts:['最多6个月监禁、最高1000美元罚款、暂停驾照、酒驾学校，以及可能安装酒精锁','仅处罚款——首次违规无需监禁','暂停驾照30天，无其他处罚','自动判处1年监禁'],exp:'在加州，首次酒驾可能导致：96小时至6个月监禁（或替代刑罚）、390至1000美元罚款（加上附加费总计约2000美元以上）、暂停驾照6个月、强制参加酒驾学校（3至9个月），以及可能需要安装酒精锁（IID）。'},
  zhTW:{q:'在加州，首次酒駕定罪的後果是什麼？',opts:['最多6個月監禁、最高1000美元罰款、暫停駕照、酒駕學校，以及可能安裝酒精鎖','僅處罰款——首次違規無需監禁','暫停駕照30天，無其他處罰','自動判處1年監禁'],exp:'在加州，首次酒駕可能導致：96小時至6個月監禁（或替代刑罰）、390至1000美元罰款（加上附加費總計約2000美元以上）、暫停駕照6個月、強制參加酒駕學校（3至9個月），以及可能需要安裝酒精鎖（IID）。'},
  es:{q:'¿Cuál es la consecuencia de una primera condena por DUI en California?',opts:['Hasta 6 meses de cárcel, multas de hasta $1,000, suspensión de licencia, escuela de DUI y posible dispositivo de interbloqueo de encendido','Solo una multa — sin tiempo en cárcel por primera ofensa','Suspensión de licencia por 30 días sin otras penalidades','Sentencia automática de 1 año de prisión'],exp:'Una primera ofensa de DUI en California puede resultar en: 96 horas a 6 meses de cárcel, $390–$1,000 en multas (más penalidades totalizando ~$2,000+), suspensión de licencia por 6 meses, escuela de DUI obligatoria (3–9 meses) y posible dispositivo de interbloqueo de encendido.'},
  ans:0
},
{
  id:97,cat:'dui',
  en:{q:'Can you be charged with DUI for driving under the influence of marijuana or prescription drugs?',opts:['Yes — DUI applies to any substance that impairs your ability to drive safely','No — DUI only applies to alcohol','Only if you are under 21','Only if the drug is illegal'],exp:'California\'s DUI law applies to any substance that impairs driving — including marijuana (even if legally obtained), prescription medications, over-the-counter drugs, and illegal drugs. Being legal to possess does not make it legal to drive impaired. A Drug Recognition Expert (DRE) can evaluate drug impairment.'},
  zh:{q:'驾驶时受大麻或处方药影响是否可被控告酒驾？',opts:['是的——酒驾法律适用于任何损害安全驾驶能力的物质','不——酒驾仅适用于酒精','仅适用于21岁以下','仅适用于非法药物'],exp:'加州的酒驾法律适用于任何损害驾驶能力的物质——包括大麻（即使合法获得）、处方药、非处方药和非法药物。合法持有不等于合法在受影响状态下驾驶。药物识别专家（DRE）可以评估药物损害情况。'},
  zhTW:{q:'駕駛時受大麻或處方藥影響是否可被控告酒駕？',opts:['是的——酒駕法律適用於任何損害安全駕駛能力的物質','不——酒駕僅適用於酒精','僅適用於21歲以下','僅適用於非法藥物'],exp:'加州的酒駕法律適用於任何損害駕駛能力的物質——包括大麻（即使合法獲得）、處方藥、非處方藥和非法藥物。合法持有不等於合法在受影響狀態下駕駛。'},
  es:{q:'¿Puede ser acusado de DUI por conducir bajo la influencia de marihuana o medicamentos recetados?',opts:['Sí — DUI aplica a cualquier sustancia que deteriore su capacidad de conducir con seguridad','No — DUI solo aplica al alcohol','Solo si tiene menos de 21 años','Solo si la droga es ilegal'],exp:'La ley de DUI de California aplica a cualquier sustancia que deteriore la conducción — incluyendo marihuana (incluso si se obtuvo legalmente), medicamentos recetados, medicamentos de venta libre y drogas ilegales.'},
  ans:0
},
{
  id:98,cat:'dui',
  en:{q:'What does an ignition interlock device (IID) do?',opts:['Prevents the car from starting unless the driver provides a breath sample showing BAC below the set limit','Locks the steering wheel after a DUI conviction permanently','Calls the police if it detects alcohol in the vehicle','Limits the vehicle\'s top speed after a DUI'],exp:'An Ignition Interlock Device (IID) is a breathalyzer connected to a vehicle\'s ignition. The driver must blow into it before starting the car. If BAC is above the set limit (usually 0.02%), the car will not start. Random rolling retests are also required while driving.'},
  zh:{q:'酒精锁（IID）的作用是什么？',opts:['除非驾驶员提供血液酒精浓度低于设定限制的呼气样本，否则阻止车辆启动','酒驾定罪后永久锁住方向盘','检测到车内有酒精时通知警察','酒驾后限制车辆最高速度'],exp:'酒精锁（IID）是一种连接到车辆点火装置的呼气测试仪。驾驶员在启动汽车前必须吹入装置。如果血液酒精浓度超过设定限制（通常为0.02%），汽车将无法启动。行驶过程中还需要随机复测。'},
  zhTW:{q:'酒精鎖（IID）的作用是什麼？',opts:['除非駕駛員提供血液酒精濃度低於設定限制的呼氣樣本，否則阻止車輛啟動','酒駕定罪後永久鎖住方向盤','檢測到車內有酒精時通知警察','酒駕後限制車輛最高速度'],exp:'酒精鎖（IID）是一種連接到車輛點火裝置的呼氣測試儀。駕駛員在啟動汽車前必須吹入裝置。如果血液酒精濃度超過設定限制（通常為0.02%），汽車將無法啟動。行駛過程中還需要隨機複測。'},
  es:{q:'¿Qué hace un dispositivo de interbloqueo de encendido (IID)?',opts:['Evita que el auto arranque a menos que el conductor proporcione una muestra de aliento que muestre BAC por debajo del límite establecido','Bloquea permanentemente el volante después de una condena por DUI','Llama a la policía si detecta alcohol en el vehículo','Limita la velocidad máxima del vehículo después de un DUI'],exp:'Un Dispositivo de Interbloqueo de Encendido (IID) es un alcoholímetro conectado al encendido del vehículo. El conductor debe soplar antes de arrancar el auto. Si el BAC está por encima del límite establecido (generalmente 0.02%), el auto no arrancará.'},
  ans:0
},
{
  id:99,cat:'dui',
  en:{q:'Drinking coffee, eating food, or taking a cold shower after drinking alcohol will:',opts:['Not lower your BAC — only time eliminates alcohol from your body','Quickly reduce your BAC significantly','Prevent you from feeling the effects of alcohol','Make it safe to drive within 30 minutes'],exp:'Nothing lowers BAC except time. Your liver processes approximately one standard drink per hour. Coffee, food, water, exercise, and cold showers do not speed up this process — they may make you feel more alert, but your BAC and driving impairment remain the same.'},
  zh:{q:'饮酒后喝咖啡、进食或洗冷水澡：',opts:['不会降低您的血液酒精浓度——只有时间才能消除体内酒精','会显著快速降低血液酒精浓度','会防止您感受到酒精的影响','30分钟内即可安全驾驶'],exp:'只有时间才能降低血液酒精浓度。您的肝脏每小时大约处理一标准饮品的酒精。咖啡、食物、水、运动和冷水澡都不会加快这个过程——它们可能让您感觉更清醒，但您的血液酒精浓度和驾驶损害程度保持不变。'},
  zhTW:{q:'飲酒後喝咖啡、進食或洗冷水澡：',opts:['不會降低您的血液酒精濃度——只有時間才能消除體內酒精','會顯著快速降低血液酒精濃度','會防止您感受到酒精的影響','30分鐘內即可安全駕駛'],exp:'只有時間才能降低血液酒精濃度。您的肝臟每小時大約處理一標準飲品的酒精。咖啡、食物、水、運動和冷水澡都不會加快這個過程——它們可能讓您感覺更清醒，但您的血液酒精濃度和駕駛損害程度保持不變。'},
  es:{q:'Tomar café, comer o darse una ducha fría después de beber alcohol:',opts:['No bajará su BAC — solo el tiempo elimina el alcohol de su cuerpo','Reducirá significativamente su BAC rápidamente','Evitará que sienta los efectos del alcohol','Lo hará seguro para conducir en 30 minutos'],exp:'Nada baja el BAC excepto el tiempo. Su hígado procesa aproximadamente una bebida estándar por hora. El café, la comida, el agua, el ejercicio y las duchas frías no aceleran este proceso — pueden hacerle sentir más alerta, pero su BAC y deterioro de conducción permanecen iguales.'},
  ans:0
},
{
  id:100,cat:'dui',
  en:{q:'A DUI conviction in California stays on your driving record for how long?',opts:['10 years','3 years','5 years','Permanently'],exp:'A DUI conviction remains on your California driving record for 10 years. During this time, prior DUI convictions count as "priors" and result in harsher penalties for any subsequent DUI. After 10 years, the conviction is removed from the DMV record but may remain on criminal records.'},
  zh:{q:'在加州，酒驾定罪会在您的驾驶记录上保留多长时间？',opts:['10年','3年','5年','永久'],exp:'酒驾定罪在加州驾驶记录上保留10年。在此期间，之前的酒驾定罪被视为"前科"，将导致任何后续酒驾受到更严厉的处罚。10年后，定罪记录从DMV记录中删除，但可能仍存在于刑事记录中。'},
  zhTW:{q:'在加州，酒駕定罪會在您的駕駛記錄上保留多長時間？',opts:['10年','3年','5年','永久'],exp:'酒駕定罪在加州駕駛記錄上保留10年。在此期間，之前的酒駕定罪被視為「前科」，將導致任何後續酒駕受到更嚴厲的處罰。10年後，定罪記錄從DMV記錄中刪除，但可能仍存在於刑事記錄中。'},
  es:{q:'¿Cuánto tiempo permanece una condena por DUI en su historial de conducción de California?',opts:['10 años','3 años','5 años','Permanentemente'],exp:'Una condena por DUI permanece en su historial de conducción de California por 10 años. Durante este tiempo, las condenas previas por DUI cuentan como "antecedentes" y resultan en penalidades más severas para cualquier DUI posterior.'},
  ans:0
},


// ── Batch 11 · Right of Way · Q101–110 ───────────────────────
{
  id:101,cat:'rightofway',
  en:{q:'At an uncontrolled intersection (no signs or signals), who has the right of way?',opts:['The vehicle that arrived first; if simultaneous, the vehicle on the right','The vehicle traveling at a higher speed','The larger vehicle always goes first','The vehicle going straight always has priority'],exp:'At an uncontrolled intersection, the first vehicle to arrive has the right of way. If two vehicles arrive at the same time, the vehicle on the LEFT must yield to the vehicle on the RIGHT. This is the "yield to the right" rule.'},
  zh:{q:'在无控制路口（无标志或信号灯），谁有优先通行权？',opts:['先到的车辆；同时到达时，右侧车辆优先','行驶速度较快的车辆','较大的车辆始终先行','直行车辆始终具有优先权'],exp:'在无控制路口，先到的车辆有优先通行权。如果两辆车同时到达，左侧车辆必须让右侧车辆先行。这就是"让右侧车辆先行"规则。'},
  zhTW:{q:'在無控制路口（無標誌或信號燈），誰有優先通行權？',opts:['先到的車輛；同時到達時，右側車輛優先','行駛速度較快的車輛','較大的車輛始終先行','直行車輛始終具有優先權'],exp:'在無控制路口，先到的車輛有優先通行權。如果兩輛車同時到達，左側車輛必須讓右側車輛先行。這就是「讓右側車輛先行」規則。'},
  es:{q:'En una intersección no controlada (sin señales o semáforos), ¿quién tiene el derecho de paso?',opts:['El vehículo que llegó primero; si es simultáneo, el vehículo de la derecha','El vehículo que viaja a mayor velocidad','El vehículo más grande siempre va primero','El vehículo que va recto siempre tiene prioridad'],exp:'En una intersección no controlada, el primer vehículo en llegar tiene el derecho de paso. Si dos vehículos llegan al mismo tiempo, el vehículo de la IZQUIERDA debe ceder el paso al vehículo de la DERECHA. Esta es la regla de "ceder a la derecha".'},
  ans:0
},
{
  id:102,cat:'rightofway',
  en:{q:'When must you yield to pedestrians?',opts:['Always — in crosswalks (marked or unmarked), and whenever a pedestrian is in your path','Only in marked crosswalks with a walk signal','Only when a traffic officer is present','Only in school zones'],exp:'You must yield to pedestrians in all crosswalks — marked and unmarked. An unmarked crosswalk exists at every intersection where sidewalks meet the street. You must also yield to pedestrians you may have endangered by turning. Pedestrians always have the right of way in crosswalks.'},
  zh:{q:'您何时必须让行人先行？',opts:['始终——在人行横道（有标线或无标线）中，以及任何行人在您行进路线上时','仅在有行人通行信号的标线人行横道中','仅在有交警在场时','仅在学区内'],exp:'您必须在所有人行横道——有标线和无标线的——让行人先行。每个路口人行道与街道相交处都存在无标线人行横道。您还必须让您可能因转弯而置于危险中的行人先行。行人在人行横道中始终具有优先权。'},
  zhTW:{q:'您何時必須讓行人先行？',opts:['始終——在人行橫道（有標線或無標線）中，以及任何行人在您行進路線上時','僅在有行人通行信號的標線人行橫道中','僅在有交警在場時','僅在學區內'],exp:'您必須在所有人行橫道——有標線和無標線的——讓行人先行。每個路口人行道與街道相交處都存在無標線人行橫道。您還必須讓您可能因轉彎而置於危險中的行人先行。行人在人行橫道中始終具有優先權。'},
  es:{q:'¿Cuándo debe ceder el paso a los peatones?',opts:['Siempre — en cruces peatonales (marcados o no marcados), y cuando un peatón está en su camino','Solo en cruces marcados con señal de cruce','Solo cuando hay un oficial de tráfico presente','Solo en zonas escolares'],exp:'Debe ceder el paso a los peatones en todos los cruces — marcados y no marcados. Un cruce no marcado existe en cada intersección donde las aceras se encuentran con la calle. También debe ceder el paso a los peatones que pueda haber puesto en peligro al girar.'},
  ans:0
},
{
  id:103,cat:'rightofway',
  en:{q:'When a school bus displays flashing red lights and a STOP arm, what must you do?',opts:['Stop — traffic from both directions must stop and wait until the lights stop flashing and the arm is retracted','Only stop if you are behind the bus','Slow to 15 mph and proceed with caution','Stop only on two-lane roads'],exp:'When a school bus has its red lights flashing and STOP arm extended, ALL traffic in BOTH directions must stop at least 25 feet from the bus — unless on a divided highway with a physical barrier, where only traffic behind the bus must stop. Wait until lights stop and arm retracts.'},
  zh:{q:'当校车亮起闪烁红灯并展开停车臂时，您必须怎么做？',opts:['停车——两个方向的车辆均须停车，直到红灯停止闪烁且停车臂收回','仅当您在校车后方时才需停车','减速至15英里/小时并谨慎通过','仅在双车道道路上停车'],exp:'当校车亮起闪烁红灯并展开停车臂时，两个方向的所有车辆均须在距校车至少25英尺处停车——除非在有实体隔离带的分隔公路上，此时仅校车后方的车辆须停车。等待红灯停止闪烁且停车臂收回。'},
  zhTW:{q:'當校車亮起閃爍紅燈並展開停車臂時，您必須怎麼做？',opts:['停車——兩個方向的車輛均須停車，直到紅燈停止閃爍且停車臂收回','僅當您在校車後方時才需停車','減速至15英里/小時並謹慎通過','僅在雙車道道路上停車'],exp:'當校車亮起閃爍紅燈並展開停車臂時，兩個方向的所有車輛均須在距校車至少25英尺處停車——除非在有實體隔離帶的分隔公路上，此時僅校車後方的車輛須停車。等待紅燈停止閃爍且停車臂收回。'},
  es:{q:'Cuando un autobús escolar muestra luces rojas intermitentes y un brazo de STOP, ¿qué debe hacer?',opts:['Detenerse — el tráfico de ambas direcciones debe parar y esperar hasta que las luces dejen de parpadear y el brazo se retraiga','Solo detenerse si está detrás del autobús','Reducir a 15 mph y proceder con precaución','Detenerse solo en carreteras de dos carriles'],exp:'Cuando un autobús escolar tiene sus luces rojas intermitentes y el brazo de STOP extendido, TODO el tráfico en AMBAS direcciones debe detenerse a al menos 25 pies del autobús — a menos que esté en una autopista dividida con barrera física.'},
  ans:0
},
{
  id:104,cat:'rightofway',
  en:{q:'When an emergency vehicle (police, fire, ambulance) approaches with lights and sirens, you must:',opts:['Pull over to the right edge of the road and stop until it passes','Speed up to get out of its way quickly','Stop in your lane immediately','Continue driving — emergency vehicles will go around you'],exp:'When an emergency vehicle approaches from any direction with lights and/or siren, you must pull over to the right edge and stop. If you are in an intersection, pull through the intersection first then pull over. Stay stopped until the emergency vehicle passes. Do not block intersections.'},
  zh:{q:'当警车、消防车或救护车等紧急车辆开着灯光和警报器接近时，您必须：',opts:['靠右停在路边，直到它通过','加速让路','立即在您的车道内停车','继续行驶——紧急车辆会绕过您'],exp:'当紧急车辆从任何方向开着灯光和/或警报器接近时，您必须靠右停在路边。如果您正在路口内，先通过路口再靠边停车。保持停车直到紧急车辆通过。不要堵塞路口。'},
  zhTW:{q:'當警車、消防車或救護車等緊急車輛開著燈光和警報器接近時，您必須：',opts:['靠右停在路邊，直到它通過','加速讓路','立即在您的車道內停車','繼續行駛——緊急車輛會繞過您'],exp:'當緊急車輛從任何方向開著燈光和/或警報器接近時，您必須靠右停在路邊。如果您正在路口內，先通過路口再靠邊停車。保持停車直到緊急車輛通過。不要堵塞路口。'},
  es:{q:'Cuando un vehículo de emergencia (policía, bomberos, ambulancia) se aproxima con luces y sirenas, debe:',opts:['Orillarse al borde derecho de la carretera y detenerse hasta que pase','Acelerar para quitarse del camino rápidamente','Detenerse en su carril inmediatamente','Continuar conduciendo — los vehículos de emergencia lo rodearán'],exp:'Cuando un vehículo de emergencia se aproxima desde cualquier dirección con luces y/o sirena, debe orillarse al borde derecho y detenerse. Si está en una intersección, pase por ella primero y luego orillese. Permanezca detenido hasta que el vehículo de emergencia pase.'},
  ans:0
},
{
  id:105,cat:'rightofway',
  en:{q:'California\'s "Move Over" law requires you to do what when passing a stationary emergency or work vehicle with flashing lights on the freeway?',opts:['Move over one lane away from the vehicle, or slow to a safe speed if you cannot change lanes','Speed up to pass the scene quickly','Stop your vehicle on the freeway until the vehicle moves','Flash your headlights and honk as a warning'],exp:'The Move Over law requires drivers to move over one lane away from stationary emergency vehicles, tow trucks, and Caltrans vehicles with flashing lights. If moving over is not safe or possible, you must slow to a safe and reasonable speed. Violation is a traffic infraction with significant fines.'},
  zh:{q:'加州的"让道"法律要求您在高速公路上经过有闪烁灯光的静止紧急或施工车辆时怎么做？',opts:['向远离车辆的方向变换一条车道，如无法变道则降低至安全速度','加速快速通过现场','在高速公路上停车直到该车辆移开','闪灯并鸣笛作为警告'],exp:'"让道"法律要求驾驶员在静止的紧急车辆、拖车和有闪烁灯光的加州交通部车辆旁边变换一条车道远离这些车辆。如果变道不安全或不可能，您必须降低到安全合理的速度。违规属于交通违规行为，罚款金额较高。'},
  zhTW:{q:'加州的「讓道」法律要求您在高速公路上經過有閃爍燈光的靜止緊急或施工車輛時怎麼做？',opts:['向遠離車輛的方向變換一條車道，如無法變道則降低至安全速度','加速快速通過現場','在高速公路上停車直到該車輛移開','閃燈並鳴笛作為警告'],exp:'「讓道」法律要求駕駛員在靜止的緊急車輛、拖車和有閃爍燈光的加州交通部車輛旁邊變換一條車道遠離這些車輛。如果變道不安全或不可能，您必須降低到安全合理的速度。違規屬於交通違規行為，罰款金額較高。'},
  es:{q:'La ley de "Ceder el Paso" de California le requiere qué hacer cuando pasa un vehículo de emergencia o de trabajo estacionario con luces intermitentes en la autopista?',opts:['Cambie un carril alejándose del vehículo, o reduzca a una velocidad segura si no puede cambiar de carril','Acelere para pasar la escena rápidamente','Detenga su vehículo en la autopista hasta que el vehículo se mueva','Haga destellos de luz y toque la bocina como advertencia'],exp:'La ley de Ceder el Paso requiere que los conductores se muevan un carril alejándose de vehículos de emergencia estacionarios, grúas y vehículos de Caltrans con luces intermitentes. Si moverse no es seguro o posible, debe reducir a una velocidad segura y razonable.'},
  ans:0
},
{
  id:106,cat:'rightofway',
  en:{q:'You are turning left at a green light. Who has the right of way?',opts:['Oncoming traffic going straight or turning right — you must yield before turning left','You do — the green light gives you the right of way','Pedestrians only — all vehicles must yield to you','You do, since you signaled your turn'],exp:'When turning left at a green light (not a green arrow), you must yield to oncoming traffic and pedestrians. Oncoming vehicles going straight or turning right have the right of way. Wait for a safe gap before turning. A green arrow means the intersection is clear and you may turn.'},
  zh:{q:'您在绿灯时左转。谁有优先通行权？',opts:['直行或右转的对向车辆——您在左转前必须让行','您有——绿灯赋予您优先通行权','仅行人——所有车辆必须让您先行','您有——因为您已打了转向灯'],exp:'在绿灯时左转（不是绿色箭头），您必须让行对向车辆和行人。直行或右转的对向车辆具有优先通行权。等待安全间隙后再转弯。绿色箭头意味着路口已清空，您可以转弯。'},
  zhTW:{q:'您在綠燈時左轉。誰有優先通行權？',opts:['直行或右轉的對向車輛——您在左轉前必須讓行','您有——綠燈賦予您優先通行權','僅行人——所有車輛必須讓您先行','您有——因為您已打了轉向燈'],exp:'在綠燈時左轉（不是綠色箭頭），您必須讓行對向車輛和行人。直行或右轉的對向車輛具有優先通行權。等待安全間隙後再轉彎。綠色箭頭意味著路口已清空，您可以轉彎。'},
  es:{q:'Está girando a la izquierda en un semáforo verde. ¿Quién tiene el derecho de paso?',opts:['El tráfico que viene en sentido contrario yendo recto o girando a la derecha — debe ceder antes de girar a la izquierda','Usted — la luz verde le da el derecho de paso','Solo los peatones — todos los vehículos deben cederle el paso','Usted — porque señalizó su giro'],exp:'Al girar a la izquierda en un semáforo verde (no una flecha verde), debe ceder el paso al tráfico en sentido contrario y a los peatones. Los vehículos que vienen en sentido contrario yendo recto o girando a la derecha tienen el derecho de paso.'},
  ans:0
},
{
  id:107,cat:'rightofway',
  en:{q:'A blind pedestrian with a white cane or guide dog is at an intersection. What must you do?',opts:['Come to a complete stop and wait until the pedestrian has completely crossed','Slow down and proceed carefully past them','Honk lightly to alert them of your presence','Proceed normally — they will hear your engine'],exp:'California law gives blind pedestrians the absolute right of way. When a person with a white cane or guide dog is at or in a crosswalk, all vehicles must come to a complete stop and remain stopped until the pedestrian has completely crossed the road. Violating this law carries significant penalties.'},
  zh:{q:'一位持白色手杖或导盲犬的盲人行人站在路口。您必须怎么做？',opts:['完全停车并等待行人完全穿过道路','减速并小心地经过他们','轻按喇叭提醒他们您的存在','正常通行——他们会听到您的引擎声'],exp:'加州法律赋予盲人行人绝对优先权。当持白色手杖或导盲犬的人站在或位于人行横道时，所有车辆必须完全停车并保持停止，直到行人完全穿过道路。违反此法律将受到严重处罚。'},
  zhTW:{q:'一位持白色手杖或導盲犬的盲人行人站在路口。您必須怎麼做？',opts:['完全停車並等待行人完全穿過道路','減速並小心地經過他們','輕按喇叭提醒他們您的存在','正常通行——他們會聽到您的引擎聲'],exp:'加州法律賦予盲人行人絕對優先權。當持白色手杖或導盲犬的人站在或位於人行橫道時，所有車輛必須完全停車並保持停止，直到行人完全穿過道路。違反此法律將受到嚴重處罰。'},
  es:{q:'Un peatón ciego con bastón blanco o perro guía está en una intersección. ¿Qué debe hacer?',opts:['Detenerse completamente y esperar hasta que el peatón haya cruzado completamente','Reducir la velocidad y pasar con cuidado','Tocar el claxon suavemente para alertarles de su presencia','Proceder normalmente — escucharán su motor'],exp:'La ley de California otorga a los peatones ciegos el derecho de paso absoluto. Cuando una persona con bastón blanco o perro guía está en o en un cruce peatonal, todos los vehículos deben detenerse completamente y permanecer detenidos hasta que el peatón haya cruzado completamente la carretera.'},
  ans:0
},
{
  id:108,cat:'rightofway',
  en:{q:'At a T-intersection (where one road ends), who yields?',opts:['The driver on the road that ends must yield to traffic on the through road','The driver on the through road must yield to entering traffic','Whoever arrives last yields','The driver on the left always yields'],exp:'At a T-intersection, the driver on the terminating road (the one that dead-ends) must yield to all traffic on the through road. This applies even if there are no signs. Think of it as entering a stream of traffic — you yield to what\'s already flowing.'},
  zh:{q:'在T形路口（其中一条路终止），谁必须让行？',opts:['终止道路上的驾驶员必须让通行道路上的车辆先行','通行道路上的驾驶员必须让进入的车辆先行','最后到达的驾驶员让行','左侧驾驶员始终让行'],exp:'在T形路口，终止道路（死路）上的驾驶员必须让通行道路上的所有车辆先行。即使没有标志，这一规则也适用。可以将其理解为进入车流——您须让正在行驶的车辆先行。'},
  zhTW:{q:'在T形路口（其中一條路終止），誰必須讓行？',opts:['終止道路上的駕駛員必須讓通行道路上的車輛先行','通行道路上的駕駛員必須讓進入的車輛先行','最後到達的駕駛員讓行','左側駕駛員始終讓行'],exp:'在T形路口，終止道路（死路）上的駕駛員必須讓通行道路上的所有車輛先行。即使沒有標誌，這一規則也適用。可以將其理解為進入車流——您須讓正在行駛的車輛先行。'},
  es:{q:'En una intersección en T (donde una carretera termina), ¿quién cede el paso?',opts:['El conductor en la carretera que termina debe ceder al tráfico en la carretera continua','El conductor en la carretera continua debe ceder al tráfico que entra','El que llega último cede el paso','El conductor de la izquierda siempre cede'],exp:'En una intersección en T, el conductor en la carretera que termina (la que es un callejón sin salida) debe ceder el paso a todo el tráfico en la carretera continua. Esto aplica incluso si no hay señales. Piénselo como entrar a una corriente de tráfico — usted cede a lo que ya fluye.'},
  ans:0
},
{
  id:109,cat:'rightofway',
  en:{q:'When entering a roundabout (traffic circle), who has the right of way?',opts:['Vehicles already circulating inside the roundabout','Vehicles entering from the right','The first vehicle to reach the yield line','Larger vehicles always have priority'],exp:'When entering a roundabout, you must yield to all traffic already circulating inside. Look left for approaching vehicles, yield if necessary, then enter the roundabout and travel counterclockwise. Signal when you plan to exit. Never stop inside the roundabout unless forced to by traffic.'},
  zh:{q:'进入环形交叉口（转盘）时，谁有优先通行权？',opts:['已在环形道内行驶的车辆','右侧进入的车辆','第一个到达让行线的车辆','较大车辆始终具有优先权'],exp:'进入环形交叉口时，您必须让行已在环形道内行驶的所有车辆。向左查看接近的车辆，必要时让行，然后进入环形交叉口并逆时针行驶。计划驶出时打转向灯。除非被交通迫使，否则切勿在环形交叉口内停车。'},
  zhTW:{q:'進入環形交叉口（轉盤）時，誰有優先通行權？',opts:['已在環形道內行駛的車輛','右側進入的車輛','第一個到達讓行線的車輛','較大車輛始終具有優先權'],exp:'進入環形交叉口時，您必須讓行已在環形道內行駛的所有車輛。向左查看接近的車輛，必要時讓行，然後進入環形交叉口並逆時針行駛。計劃駛出時打轉向燈。除非被交通迫使，否則切勿在環形交叉口內停車。'},
  es:{q:'Al entrar a una glorieta (círculo de tráfico), ¿quién tiene el derecho de paso?',opts:['Los vehículos que ya circulan dentro de la glorieta','Los vehículos que entran desde la derecha','El primer vehículo en llegar a la línea de ceda el paso','Los vehículos más grandes siempre tienen prioridad'],exp:'Al entrar a una glorieta, debe ceder el paso a todo el tráfico que ya circula dentro. Mire a la izquierda para vehículos que se aproximan, ceda si es necesario, luego entre a la glorieta y viaje en sentido antihorario. Señalice cuando planee salir.'},
  ans:0
},
{
  id:110,cat:'rightofway',
  en:{q:'You are backing out of a driveway onto a street. Who has the right of way?',opts:['All traffic on the street and pedestrians on the sidewalk — you must yield','You do — you were there first','Traffic coming from the left only','Only vehicles coming at high speed'],exp:'When backing out of a driveway or alley, you must yield to all pedestrians on the sidewalk and all traffic on the street. Check all mirrors and blind spots, and proceed slowly. It is your responsibility to ensure the path is clear before and during backing.'},
  zh:{q:'您从车道倒车进入街道。谁有优先通行权？',opts:['街道上的所有车辆和人行道上的行人——您必须让行','您有——您先到那里','仅来自左侧的车辆','仅高速行驶的车辆'],exp:'从车道或小巷倒车时，您必须让行人行道上的所有行人和街道上的所有车辆。检查所有后视镜和盲区，缓慢行进。在倒车前和倒车过程中确保路径畅通是您的责任。'},
  zhTW:{q:'您從車道倒車進入街道。誰有優先通行權？',opts:['街道上的所有車輛和人行道上的行人——您必須讓行','您有——您先到那裡','僅來自左側的車輛','僅高速行駛的車輛'],exp:'從車道或小巷倒車時，您必須讓行人行道上的所有行人和街道上的所有車輛。檢查所有後視鏡和盲區，緩慢行進。在倒車前和倒車過程中確保路徑暢通是您的責任。'},
  es:{q:'Está retrocediendo desde una entrada hacia una calle. ¿Quién tiene el derecho de paso?',opts:['Todo el tráfico en la calle y los peatones en la acera — debe ceder el paso','Usted — usted llegó primero','Solo el tráfico que viene desde la izquierda','Solo los vehículos que vienen a alta velocidad'],exp:'Al retroceder desde una entrada o callejón, debe ceder el paso a todos los peatones en la acera y a todo el tráfico en la calle. Revise todos los espejos y puntos ciegos, y proceda lentamente. Es su responsabilidad asegurarse de que el camino esté despejado.'},
  ans:0
},


// ── Batch 12 · Speed Limits · Q111–120 ───────────────────────
{
  id:111,cat:'speed',
  en:{q:'What is the maximum speed limit on most California freeways?',opts:['65 mph (70 mph where posted)','55 mph at all times','75 mph on rural freeways','60 mph statewide'],exp:'The maximum speed limit on most California freeways is 65 mph. On some rural freeways and highways that are posted, the limit may be 70 mph. Always obey posted speed limit signs — they override the default limits.'},
  zh:{q:'加州大多数高速公路的最高限速是多少？',opts:['65英里/小时（有标示处为70英里/小时）','始终为55英里/小时','乡村高速公路为75英里/小时','全州统一60英里/小时'],exp:'加州大多数高速公路的最高限速为65英里/小时。在某些已标示的乡村高速公路上，限速可能为70英里/小时。请始终遵守标示的限速标志——它们覆盖默认限速。'},
  zhTW:{q:'加州大多數高速公路的最高限速是多少？',opts:['65英里/小時（有標示處為70英里/小時）','始終為55英里/小時','鄉村高速公路為75英里/小時','全州統一60英里/小時'],exp:'加州大多數高速公路的最高限速為65英里/小時。在某些已標示的鄉村高速公路上，限速可能為70英里/小時。請始終遵守標示的限速標誌——它們覆蓋預設限速。'},
  es:{q:'¿Cuál es el límite de velocidad máximo en la mayoría de las autopistas de California?',opts:['65 mph (70 mph donde está señalizado)','55 mph en todo momento','75 mph en autopistas rurales','60 mph en todo el estado'],exp:'El límite de velocidad máximo en la mayoría de las autopistas de California es de 65 mph. En algunas autopistas rurales señalizadas, el límite puede ser de 70 mph. Siempre obedezca las señales de límite de velocidad publicadas — anulan los límites predeterminados.'},
  ans:0
},
{
  id:112,cat:'speed',
  en:{q:'What is the speed limit in an alley in California?',opts:['15 mph','25 mph','10 mph','20 mph'],exp:'The prima facie speed limit in any alley in California is 15 mph. Alleys are narrow roads typically found between or behind buildings. The same 15 mph limit applies when visibility is limited to less than 100 feet (on curves, at rail crossings, and near blind intersections).'},
  zh:{q:'在加州小巷中的限速是多少？',opts:['15英里/小时','25英里/小时','10英里/小时','20英里/小时'],exp:'加州任何小巷内的法定限速为15英里/小时。小巷是通常位于建筑物之间或后面的狭窄道路。同样的15英里/小时限速适用于能见度低于100英尺的情况（弯道处、铁路道口附近及盲交叉路口附近）。'},
  zhTW:{q:'在加州小巷中的限速是多少？',opts:['15英里/小時','25英里/小時','10英里/小時','20英里/小時'],exp:'加州任何小巷內的法定限速為15英里/小時。小巷是通常位於建築物之間或後面的狹窄道路。同樣的15英里/小時限速適用於能見度低於100英尺的情況（彎道處、鐵路道口附近及盲交叉路口附近）。'},
  es:{q:'¿Cuál es el límite de velocidad en un callejón en California?',opts:['15 mph','25 mph','10 mph','20 mph'],exp:'El límite de velocidad prima facie en cualquier callejón en California es de 15 mph. Los callejones son carreteras estrechas que generalmente se encuentran entre o detrás de los edificios. El mismo límite de 15 mph aplica cuando la visibilidad es menor de 100 pies.'},
  ans:0
},
{
  id:113,cat:'speed',
  en:{q:'What does California\'s "Basic Speed Law" mean?',opts:['You must never drive faster than is safe for current conditions, regardless of the posted speed limit','You must always drive at the posted speed limit','The speed limit is always 65 mph unless posted otherwise','You may exceed the speed limit by 10% without penalty'],exp:'The Basic Speed Law states that you may never drive faster than is safe for existing conditions — regardless of the posted limit. If road conditions (rain, fog, heavy traffic, icy roads) make it unsafe to drive at the posted speed, you must slow down. You can be cited even below the posted limit.'},
  zh:{q:'加州的"基本速度法则"是什么意思？',opts:['无论标示的限速如何，在当前条件下行驶速度不得超过安全速度','必须始终以标示的限速行驶','除非另有标示，否则限速始终为65英里/小时','可以在不受处罚的情况下超速10%'],exp:'基本速度法则规定，在现有条件下，无论标示的限速如何，您的行驶速度都不得超过安全速度。如果道路条件（雨天、雾天、交通拥堵、结冰道路）使得以标示速度行驶不安全，您必须减速。即使低于标示限速，您也可能被罚款。'},
  zhTW:{q:'加州的「基本速度法則」是什麼意思？',opts:['無論標示的限速如何，在當前條件下行駛速度不得超過安全速度','必須始終以標示的限速行駛','除非另有標示，否則限速始終為65英里/小時','可以在不受處罰的情況下超速10%'],exp:'基本速度法則規定，在現有條件下，無論標示的限速如何，您的行駛速度都不得超過安全速度。如果道路條件（雨天、霧天、交通擁堵、結冰道路）使得以標示速度行駛不安全，您必須減速。即使低於標示限速，您也可能被罰款。'},
  es:{q:'¿Qué significa la "Ley de Velocidad Básica" de California?',opts:['Nunca debe conducir más rápido de lo que es seguro para las condiciones actuales, independientemente del límite publicado','Siempre debe conducir al límite de velocidad publicado','El límite de velocidad siempre es 65 mph a menos que se indique lo contrario','Puede exceder el límite de velocidad en un 10% sin penalidad'],exp:'La Ley de Velocidad Básica establece que nunca puede conducir más rápido de lo que es seguro para las condiciones existentes — independientemente del límite publicado. Si las condiciones viales hacen que sea inseguro conducir al límite publicado, debe reducir la velocidad.'},
  ans:0
},
{
  id:114,cat:'speed',
  en:{q:'What is the speed limit in a school zone when children are present?',opts:['25 mph','15 mph','35 mph','The same as the surrounding road'],exp:'The speed limit in a school zone is 25 mph when children are present or when the school flashing beacon is active, typically on school days between approximately 7–8 AM and 2–4 PM. The zone is posted with school zone signs. Fines are doubled in school zones.'},
  zh:{q:'有儿童在场时，学区内的限速是多少？',opts:['25英里/小时','15英里/小时','35英里/小时','与周边道路相同'],exp:'当有儿童在场或学校闪灯信号亮起时（通常在上学日早上7-8点和下午2-4点左右），学区内限速为25英里/小时。该区域设有学区标志。学区内违规罚款加倍。'},
  zhTW:{q:'有兒童在場時，學區內的限速是多少？',opts:['25英里/小時','15英里/小時','35英里/小時','與周邊道路相同'],exp:'當有兒童在場或學校閃燈信號亮起時（通常在上學日早上7-8點和下午2-4點左右），學區內限速為25英里/小時。該區域設有學區標誌。學區內違規罰款加倍。'},
  es:{q:'¿Cuál es el límite de velocidad en una zona escolar cuando hay niños presentes?',opts:['25 mph','15 mph','35 mph','El mismo que la carretera circundante'],exp:'El límite de velocidad en una zona escolar es de 25 mph cuando hay niños presentes o cuando el faro parpadeante escolar está activo, típicamente en días escolares entre aproximadamente las 7–8 AM y las 2–4 PM. Las multas se duplican en zonas escolares.'},
  ans:0
},
{
  id:115,cat:'speed',
  en:{q:'Fines for speeding are doubled in which zones?',opts:['Construction/work zones and school zones','Only school zones','Only construction zones','Residential zones and school zones'],exp:'In California, fines for all moving violations — including speeding — are doubled in active construction/work zones (when workers are present) and school zones. This applies to the base fine, before penalty assessments. These zones are clearly posted with signs.'},
  zh:{q:'在哪些区域超速罚款加倍？',opts:['施工/作业区和学区','仅学区','仅施工区','住宅区和学区'],exp:'在加州，所有行驶违规行为（包括超速）的罚款在活跃施工/作业区（有工人在场时）和学区内加倍。这适用于罚款基数，不包括附加费。这些区域有明确的标志标示。'},
  zhTW:{q:'在哪些區域超速罰款加倍？',opts:['施工/作業區和學區','僅學區','僅施工區','住宅區和學區'],exp:'在加州，所有行駛違規行為（包括超速）的罰款在活躍施工/作業區（有工人在場時）和學區內加倍。這適用於罰款基數，不包括附加費。這些區域有明確的標誌標示。'},
  es:{q:'Las multas por exceso de velocidad se duplican en qué zonas?',opts:['Zonas de construcción/trabajo y zonas escolares','Solo zonas escolares','Solo zonas de construcción','Zonas residenciales y zonas escolares'],exp:'En California, las multas por todas las infracciones en movimiento — incluyendo exceso de velocidad — se duplican en zonas de construcción/trabajo activas (cuando hay trabajadores presentes) y en zonas escolares. Esto aplica a la multa base, antes de evaluaciones de penalidades.'},
  ans:0
},
{
  id:116,cat:'speed',
  en:{q:'If you drive 100 mph or more on a California highway, what is the minimum penalty?',opts:['Mandatory court appearance, fine up to $500, and 30-day license suspension for first offense','Just a speeding ticket like any other','Automatic arrest and 1 year in prison','$100 fine and warning'],exp:'Driving 100 mph or more (excessive speed) is a serious offense in California. For a first offense: mandatory court appearance, fine of $35–$500 (plus penalty assessments, total ~$900+), and the court may suspend your license for 30 days. Subsequent offenses result in longer suspensions.'},
  zh:{q:'如果您在加州公路上以100英里/小时或以上的速度行驶，最低处罚是什么？',opts:['强制出庭，最高500美元罚款，首次违规暂停驾照30天','与其他超速罚单相同','自动逮捕并判处1年监禁','100美元罚款和警告'],exp:'在加州以100英里/小时以上速度行驶（超速）是严重违规行为。首次违规：强制出庭，罚款35至500美元（加附加费总计约900美元以上），法院可能暂停您的驾照30天。后续违规将导致更长时间的暂停。'},
  zhTW:{q:'如果您在加州公路上以100英里/小時或以上的速度行駛，最低處罰是什麼？',opts:['強制出庭，最高500美元罰款，首次違規暫停駕照30天','與其他超速罰單相同','自動逮捕並判處1年監禁','100美元罰款和警告'],exp:'在加州以100英里/小時以上速度行駛（超速）是嚴重違規行為。首次違規：強制出庭，罰款35至500美元（加附加費總計約900美元以上），法院可能暫停您的駕照30天。後續違規將導致更長時間的暫停。'},
  es:{q:'Si conduce a 100 mph o más en una autopista de California, ¿cuál es la penalidad mínima?',opts:['Comparecencia obligatoria ante el tribunal, multa de hasta $500 y suspensión de licencia por 30 días para primera ofensa','Solo un ticket de velocidad como cualquier otro','Arresto automático y 1 año de prisión','Multa de $100 y advertencia'],exp:'Conducir a 100 mph o más (velocidad excesiva) es una infracción grave en California. Para primera ofensa: comparecencia obligatoria ante el tribunal, multa de $35–$500 (más evaluaciones de penalidades, total ~$900+), y el tribunal puede suspender su licencia por 30 días.'},
  ans:0
},
{
  id:117,cat:'speed',
  en:{q:'What is the prima facie speed limit near a railroad crossing when you cannot see the tracks clearly in both directions for 400 feet?',opts:['15 mph','25 mph','10 mph','35 mph'],exp:'When approaching a railroad crossing where you cannot see the tracks clearly for at least 400 feet in both directions, the prima facie speed limit is 15 mph. Always slow down and look and listen for trains before crossing tracks, even if there are no signals or gates.'},
  zh:{q:'当您无法清楚地看到铁路道口两个方向400英尺范围内的铁轨时，法定限速是多少？',opts:['15英里/小时','25英里/小时','10英里/小时','35英里/小时'],exp:'在接近无法清楚看到两个方向至少400英尺范围内铁轨的铁路道口时，法定限速为15英里/小时。即使没有信号灯或栏杆，在穿越铁轨前也应始终减速并观察和倾听火车。'},
  zhTW:{q:'當您無法清楚地看到鐵路道口兩個方向400英尺範圍內的鐵軌時，法定限速是多少？',opts:['15英里/小時','25英里/小時','10英里/小時','35英里/小時'],exp:'在接近無法清楚看到兩個方向至少400英尺範圍內鐵軌的鐵路道口時，法定限速為15英里/小時。即使沒有信號燈或欄杆，在穿越鐵軌前也應始終減速並觀察和傾聽火車。'},
  es:{q:'¿Cuál es el límite de velocidad prima facie cerca de un cruce ferroviario cuando no puede ver las vías claramente en ambas direcciones por 400 pies?',opts:['15 mph','25 mph','10 mph','35 mph'],exp:'Al acercarse a un cruce ferroviario donde no puede ver las vías claramente por al menos 400 pies en ambas direcciones, el límite de velocidad prima facie es de 15 mph. Siempre reduzca la velocidad y mire y escuche trenes antes de cruzar las vías, incluso si no hay señales o barreras.'},
  ans:0
},
{
  id:118,cat:'speed',
  en:{q:'What is the minimum speed law on California freeways?',opts:['You must not drive so slowly that you impede the normal flow of traffic','You must drive at least 45 mph at all times','You must drive at least 35 mph in the right lane','There is no minimum speed on California freeways'],exp:'California law prohibits driving so slowly on a freeway that you block or impede the normal flow of traffic. Signs posting a minimum speed limit (e.g., 45 mph) make this explicit. Driving 15–20 mph below traffic flow is dangerous and can be cited as impeding traffic.'},
  zh:{q:'加州高速公路上的最低速度法律是什么？',opts:['您的驾驶速度不得慢到妨碍正常交通流','始终至少以45英里/小时行驶','右车道至少以35英里/小时行驶','加州高速公路没有最低速度限制'],exp:'加州法律禁止在高速公路上行驶速度过慢而阻碍正常交通流。标示最低限速（如45英里/小时）的标志使这一点更加明确。行驶速度比交通流低15-20英里/小时是危险的，可能被认定为妨碍交通。'},
  zhTW:{q:'加州高速公路上的最低速度法律是什麼？',opts:['您的駕駛速度不得慢到妨礙正常交通流','始終至少以45英里/小時行駛','右車道至少以35英里/小時行駛','加州高速公路沒有最低速度限制'],exp:'加州法律禁止在高速公路上行駛速度過慢而阻礙正常交通流。標示最低限速（如45英里/小時）的標誌使這一點更加明確。行駛速度比交通流低15-20英里/小時是危險的，可能被認定為妨礙交通。'},
  es:{q:'¿Cuál es la ley de velocidad mínima en las autopistas de California?',opts:['No debe conducir tan lento que obstaculice el flujo normal del tráfico','Debe conducir al menos 45 mph en todo momento','Debe conducir al menos 35 mph en el carril derecho','No hay velocidad mínima en las autopistas de California'],exp:'La ley de California prohíbe conducir tan lentamente en una autopista que bloquee o impida el flujo normal del tráfico. Los letreros que publican un límite de velocidad mínimo (por ejemplo, 45 mph) hacen esto explícito.'},
  ans:0
},
{
  id:119,cat:'speed',
  en:{q:'How does speed affect your total stopping distance?',opts:['Doubling your speed more than doubles your stopping distance — it roughly quadruples it','Doubling speed doubles stopping distance proportionally','Speed has little effect on stopping distance in modern cars','Stopping distance only depends on brakes, not speed'],exp:'Stopping distance = reaction distance + braking distance. Reaction distance increases linearly with speed. Braking distance increases with the SQUARE of speed (kinetic energy). So doubling speed from 30 to 60 mph roughly quadruples braking distance. At 60 mph, total stopping distance is about 240 feet.'},
  zh:{q:'速度如何影响您的总停车距离？',opts:['速度加倍使停车距离增加超过两倍——大约增加四倍','速度加倍使停车距离成比例地加倍','速度对现代汽车的停车距离影响不大','停车距离仅取决于刹车，与速度无关'],exp:'停车距离=反应距离+制动距离。反应距离与速度成线性关系。制动距离与速度的平方成正比（动能）。因此，速度从30英里/小时加倍到60英里/小时，制动距离大约增加四倍。在60英里/小时时，总停车距离约为240英尺。'},
  zhTW:{q:'速度如何影響您的總停車距離？',opts:['速度加倍使停車距離增加超過兩倍——大約增加四倍','速度加倍使停車距離成比例地加倍','速度對現代汽車的停車距離影響不大','停車距離僅取決於刹車，與速度無關'],exp:'停車距離=反應距離+制動距離。反應距離與速度成線性關係。制動距離與速度的平方成正比（動能）。因此，速度從30英里/小時加倍到60英里/小時，制動距離大約增加四倍。在60英里/小時時，總停車距離約為240英尺。'},
  es:{q:'¿Cómo afecta la velocidad su distancia total de frenado?',opts:['Duplicar su velocidad más que duplica su distancia de frenado — aproximadamente la cuadruplica','Duplicar la velocidad duplica la distancia de frenado proporcionalmente','La velocidad tiene poco efecto en la distancia de frenado en autos modernos','La distancia de frenado solo depende de los frenos, no de la velocidad'],exp:'Distancia de parada = distancia de reacción + distancia de frenado. La distancia de reacción aumenta linealmente con la velocidad. La distancia de frenado aumenta con el CUADRADO de la velocidad (energía cinética). Duplicar la velocidad de 30 a 60 mph aproximadamente cuadruplica la distancia de frenado.'},
  ans:0
},
{
  id:120,cat:'speed',
  en:{q:'When visibility is reduced to less than 100 feet due to fog, smoke, or other conditions, what speed limit applies?',opts:['15 mph — you must slow to a speed where you can stop within your sight distance','25 mph — the residential speed limit applies','35 mph — moderate speed for reduced visibility','The posted speed limit still applies regardless of visibility'],exp:'When your visibility ahead is less than 100 feet due to any condition (fog, smoke, dust, rain), California law limits you to 15 mph. This is because you must always be able to stop within the distance you can see ahead. Driving faster in such conditions is extremely dangerous.'},
  zh:{q:'当因雾、烟或其他条件导致能见度低于100英尺时，适用什么限速？',opts:['15英里/小时——您必须将速度降低到可以在视线范围内停车的速度','25英里/小时——适用住宅区限速','35英里/小时——能见度降低时的适中速度','无论能见度如何，仍适用标示的限速'],exp:'当因任何条件（雾、烟、尘、雨）导致前方能见度低于100英尺时，加州法律将您的速度限制为15英里/小时。这是因为您必须始终能够在您能看到的距离内停车。在此类条件下以更快速度行驶极其危险。'},
  zhTW:{q:'當因霧、煙或其他條件導致能見度低於100英尺時，適用什麼限速？',opts:['15英里/小時——您必須將速度降低到可以在視線範圍內停車的速度','25英里/小時——適用住宅區限速','35英里/小時——能見度降低時的適中速度','無論能見度如何，仍適用標示的限速'],exp:'當因任何條件（霧、煙、塵、雨）導致前方能見度低於100英尺時，加州法律將您的速度限制為15英里/小時。這是因為您必須始終能夠在您能看到的距離內停車。在此類條件下以更快速度行駛極其危險。'},
  es:{q:'Cuando la visibilidad se reduce a menos de 100 pies debido a niebla, humo u otras condiciones, ¿qué límite de velocidad aplica?',opts:['15 mph — debe reducir a una velocidad donde pueda detenerse dentro de su distancia de visión','25 mph — aplica el límite de velocidad residencial','35 mph — velocidad moderada para visibilidad reducida','El límite de velocidad publicado aún aplica independientemente de la visibilidad'],exp:'Cuando su visibilidad es menor de 100 pies debido a cualquier condición (niebla, humo, polvo, lluvia), la ley de California lo limita a 15 mph. Esto se debe a que siempre debe poder detenerse dentro de la distancia que puede ver hacia adelante.'},
  ans:0
},


// ── Batch 13 · Parking Rules · Q121–130 ──────────────────────
{
  id:121,cat:'parking',
  en:{q:'What does a red curb mean?',opts:['No stopping, standing, or parking at any time','No parking between certain hours','Loading and unloading only','30-minute parking limit'],exp:'A red curb means no stopping, standing, or parking at any time — not even briefly. Red curbs are used near fire hydrants, fire stations, bus stops, and other locations where stopping would be hazardous. You cannot stop at a red curb even just to drop someone off.'},
  zh:{q:'红色路缘代表什么？',opts:['任何时候均禁止停驻车、驻留或停车','仅在特定时间段内禁止停车','仅限上下货物','30分钟停车限制'],exp:'红色路缘表示任何时候均禁止停驻车、驻留或停车——即使是短暂停车也不行。红色路缘用于消防栓、消防站、公共汽车站附近以及其他停车会造成危险的地点。即使只是短暂让乘客下车，也不得在红色路缘停车。'},
  zhTW:{q:'紅色路緣代表什麼？',opts:['任何時候均禁止停驻車、駐留或停車','僅在特定時間段內禁止停車','僅限上下貨物','30分鐘停車限制'],exp:'紅色路緣表示任何時候均禁止停駐車、駐留或停車——即使是短暫停車也不行。紅色路緣用於消防栓、消防站、公共汽車站附近以及其他停車會造成危險的地點。即使只是短暫讓乘客下車，也不得在紅色路緣停車。'},
  es:{q:'¿Qué significa un bordillo rojo?',opts:['No detenerse, estacionarse ni pararse en ningún momento','No estacionar entre ciertas horas','Solo carga y descarga','Límite de estacionamiento de 30 minutos'],exp:'Un bordillo rojo significa que no se puede detener, estacionar ni pararse en ningún momento — ni siquiera brevemente. Los bordillos rojos se usan cerca de hidrantes de incendio, estaciones de bomberos, paradas de autobús y otros lugares donde detenerse sería peligroso.'},
  ans:0
},
{
  id:122,cat:'parking',
  en:{q:'What does a yellow curb indicate?',opts:['Loading and unloading of passengers or freight only — driver must stay with vehicle','No parking anytime','15-minute parking for commercial vehicles','Parking for disabled persons only'],exp:'A yellow curb means the area is for loading and unloading only. Commercial vehicles may stop to load or unload freight. Non-commercial drivers may stop to load or unload passengers or freight, but must stay with the vehicle. Time limits may be posted. Yellow curbs are typically in business districts.'},
  zh:{q:'黄色路缘代表什么？',opts:['仅限乘客或货物上下——司机必须留在车旁','任何时候均禁止停车','商业车辆15分钟停车','仅供残障人士停车'],exp:'黄色路缘表示该区域仅限上下客或装卸货物。商业车辆可以停车装卸货物。非商业驾驶员可以停车接送乘客或装卸货物，但必须留在车旁。可能会标示时间限制。黄色路缘通常出现在商业区。'},
  zhTW:{q:'黃色路緣代表什麼？',opts:['僅限乘客或貨物上下——司機必須留在車旁','任何時候均禁止停車','商業車輛15分鐘停車','僅供殘障人士停車'],exp:'黃色路緣表示該區域僅限上下客或裝卸貨物。商業車輛可以停車裝卸貨物。非商業駕駛員可以停車接送乘客或裝卸貨物，但必須留在車旁。可能會標示時間限制。黃色路緣通常出現在商業區。'},
  es:{q:'¿Qué indica un bordillo amarillo?',opts:['Solo carga y descarga de pasajeros o carga — el conductor debe permanecer con el vehículo','No estacionar en ningún momento','Estacionamiento de 15 minutos para vehículos comerciales','Estacionamiento solo para personas con discapacidad'],exp:'Un bordillo amarillo significa que el área es solo para carga y descarga. Los vehículos comerciales pueden detenerse para cargar o descargar carga. Los conductores no comerciales pueden detenerse para cargar o descargar pasajeros o carga, pero deben permanecer con el vehículo.'},
  ans:0
},
{
  id:123,cat:'parking',
  en:{q:'What does a white curb indicate?',opts:['Passenger loading and unloading only — usually 5 minutes maximum','No parking for commercial vehicles','Disabled parking only','Temporary construction zone'],exp:'A white curb is for passenger loading and unloading only — typically limited to 5 minutes. The driver may need to stay with the vehicle. White curbs are common in front of hotels, airports, and other pickup/drop-off areas. Do not leave the vehicle unattended at a white curb.'},
  zh:{q:'白色路缘代表什么？',opts:['仅限乘客上下——通常最多5分钟','商业车辆禁止停车','仅供残障人士停车','临时施工区'],exp:'白色路缘仅供乘客上下使用——通常限制为5分钟。司机可能需要留在车旁。白色路缘常见于酒店、机场和其他接送区前方。不得在白色路缘处让车辆无人看管。'},
  zhTW:{q:'白色路緣代表什麼？',opts:['僅限乘客上下——通常最多5分鐘','商業車輛禁止停車','僅供殘障人士停車','臨時施工區'],exp:'白色路緣僅供乘客上下使用——通常限制為5分鐘。司機可能需要留在車旁。白色路緣常見於酒店、機場和其他接送區前方。不得在白色路緣處讓車輛無人看管。'},
  es:{q:'¿Qué indica un bordillo blanco?',opts:['Solo carga y descarga de pasajeros — generalmente 5 minutos máximo','No estacionar para vehículos comerciales','Estacionamiento solo para discapacitados','Zona de construcción temporal'],exp:'Un bordillo blanco es solo para carga y descarga de pasajeros — típicamente limitado a 5 minutos. El conductor puede necesitar permanecer con el vehículo. Los bordillos blancos son comunes frente a hoteles, aeropuertos y otras áreas de recogida/entrega.'},
  ans:0
},
{
  id:124,cat:'parking',
  en:{q:'What does a blue curb indicate?',opts:['Parking reserved for disabled persons with a valid placard or disabled license plate','Police vehicles only','15-minute limit for all drivers','Overnight parking for residents'],exp:'A blue curb designates parking reserved exclusively for persons with disabilities. You must display a valid Disabled Person (DP) placard or have disabled person license plates to park there. Parking in a blue curb space without authorization carries very high fines.'},
  zh:{q:'蓝色路缘代表什么？',opts:['为持有效停车证或残障车牌的残障人士保留的停车位','仅限警察车辆','所有驾驶员15分钟限制','居民过夜停车'],exp:'蓝色路缘指定仅为残障人士保留的停车位。您必须展示有效的残障人士（DP）停车证或拥有残障人士车牌方可在此停车。未经授权在蓝色路缘停车将受到高额罚款。'},
  zhTW:{q:'藍色路緣代表什麼？',opts:['為持有效停車證或殘障車牌的殘障人士保留的停車位','僅限警察車輛','所有駕駛員15分鐘限制','居民過夜停車'],exp:'藍色路緣指定僅為殘障人士保留的停車位。您必須展示有效的殘障人士（DP）停車證或擁有殘障人士車牌方可在此停車。未經授權在藍色路緣停車將受到高額罰款。'},
  es:{q:'¿Qué indica un bordillo azul?',opts:['Estacionamiento reservado para personas con discapacidad con placa o permiso válido','Solo para vehículos policiales','Límite de 15 minutos para todos los conductores','Estacionamiento nocturno para residentes'],exp:'Un bordillo azul designa estacionamiento reservado exclusivamente para personas con discapacidades. Debe mostrar un Permiso de Persona con Discapacidad (DP) válido o tener placas de persona con discapacidad para estacionarse allí. Estacionarse en un espacio de bordillo azul sin autorización conlleva multas muy altas.'},
  ans:0
},
{
  id:125,cat:'parking',
  en:{q:'How far must you park from a fire hydrant in California?',opts:['15 feet','10 feet','25 feet','5 feet'],exp:'California law requires you to park no closer than 15 feet from a fire hydrant. This clearance is needed so fire trucks can connect hoses quickly in an emergency. Parking within 15 feet of a fire hydrant is illegal and your vehicle may be cited and towed.'},
  zh:{q:'在加州，停车时必须距消防栓多远？',opts:['15英尺','10英尺','25英尺','5英尺'],exp:'加州法律要求停车时距消防栓不得少于15英尺。这一间距是必要的，以便消防车在紧急情况下能快速连接水带。在消防栓15英尺范围内停车是违法的，您的车辆可能被罚款并拖走。'},
  zhTW:{q:'在加州，停車時必須距消防栓多遠？',opts:['15英尺','10英尺','25英尺','5英尺'],exp:'加州法律要求停車時距消防栓不得少於15英尺。這一間距是必要的，以便消防車在緊急情況下能快速連接水帶。在消防栓15英尺範圍內停車是違法的，您的車輛可能被罰款並拖走。'},
  es:{q:'¿A qué distancia debe estacionar de un hidrante de incendio en California?',opts:['15 pies','10 pies','25 pies','5 pies'],exp:'La ley de California requiere que se estacione a no menos de 15 pies de un hidrante de incendio. Este espacio es necesario para que los camiones de bomberos puedan conectar mangueras rápidamente en una emergencia. Estacionarse dentro de 15 pies de un hidrante es ilegal y su vehículo puede ser multado y remolcado.'},
  ans:0
},
{
  id:126,cat:'parking',
  en:{q:'When parking uphill with a curb, which way should you turn your front wheels?',opts:['Away from the curb (left, into traffic)','Toward the curb (right)','Straight ahead','It does not matter which direction'],exp:'When parking uphill with a curb: turn your wheels AWAY from the curb (to the left). If your brakes fail, the car will roll backward and the front of the tire will hit the curb, stopping the car. When parking downhill (with or without a curb), turn wheels TOWARD the curb.'},
  zh:{q:'在有路缘石的上坡停车时，您应该将前轮转向哪个方向？',opts:['离开路缘石方向（向左，朝向车流方向）','朝向路缘石（向右）','直线前进','方向无关紧要'],exp:'在有路缘石的上坡停车时：将车轮转向远离路缘石的方向（向左）。如果刹车失灵，车辆会向后滑动，前轮会抵住路缘石，从而停住车辆。在下坡停车时（有无路缘石均适用），将车轮转向路缘石方向。'},
  zhTW:{q:'在有路緣石的上坡停車時，您應該將前輪轉向哪個方向？',opts:['離開路緣石方向（向左，朝向車流方向）','朝向路緣石（向右）','直線前進','方向無關緊要'],exp:'在有路緣石的上坡停車時：將車輪轉向遠離路緣石的方向（向左）。如果剎車失靈，車輛會向後滑動，前輪會抵住路緣石，從而停住車輛。在下坡停車時（有無路緣石均適用），將車輪轉向路緣石方向。'},
  es:{q:'Al estacionarse cuesta arriba con bordillo, ¿hacia dónde debe girar sus ruedas delanteras?',opts:['Alejándose del bordillo (a la izquierda, hacia el tráfico)','Hacia el bordillo (a la derecha)','Recto hacia adelante','No importa la dirección'],exp:'Al estacionarse cuesta arriba con bordillo: gire las ruedas ALEJÁNDOSE del bordillo (a la izquierda). Si fallan los frenos, el auto rodará hacia atrás y el frente del neumático golpeará el bordillo, deteniendo el auto. Al estacionarse cuesta abajo (con o sin bordillo), gire las ruedas HACIA el bordillo.'},
  ans:0
},
{
  id:127,cat:'parking',
  en:{q:'How far must you park from a stop sign or traffic signal?',opts:['At least 25 feet','At least 10 feet','At least 50 feet','At least 15 feet'],exp:'California law prohibits parking within 25 feet of a stop sign or traffic control signal at the side of a road. This distance ensures drivers can see the sign or signal and other vehicles can be seen approaching the intersection. Always look for posted signs that may specify different distances.'},
  zh:{q:'您必须距停车标志或交通信号灯多远停车？',opts:['至少25英尺','至少10英尺','至少50英尺','至少15英尺'],exp:'加州法律禁止在道路侧面的停车标志或交通信号灯25英尺范围内停车。这一距离确保驾驶员能够看到标志或信号灯，其他车辆也能看到接近路口的车辆。请始终查看可能规定不同距离的标示标志。'},
  zhTW:{q:'您必須距停車標誌或交通信號燈多遠停車？',opts:['至少25英尺','至少10英尺','至少50英尺','至少15英尺'],exp:'加州法律禁止在道路側面的停車標誌或交通信號燈25英尺範圍內停車。這一距離確保駕駛員能夠看到標誌或信號燈，其他車輛也能看到接近路口的車輛。請始終查看可能規定不同距離的標示標誌。'},
  es:{q:'¿A qué distancia debe estacionar de una señal de alto o semáforo?',opts:['Al menos 25 pies','Al menos 10 pies','Al menos 50 pies','Al menos 15 pies'],exp:'La ley de California prohíbe estacionar dentro de 25 pies de una señal de alto o señal de control de tráfico al lado de una carretera. Esta distancia garantiza que los conductores puedan ver la señal o semáforo y otros vehículos puedan ser vistos acercándose a la intersección.'},
  ans:0
},
{
  id:128,cat:'parking',
  en:{q:'Is it legal to park in a bicycle lane?',opts:['No — parking in a bicycle lane is prohibited except where signs allow temporary stops','Yes, if you stay less than 5 minutes','Yes, if no bicyclists are present','Only during non-peak hours'],exp:'Parking in a bicycle lane is generally prohibited. You may not stop, stand, or park in a bicycle lane unless signs indicate it is permitted for loading or unloading. Blocking bicycle lanes forces cyclists into traffic, creating a dangerous situation.'},
  zh:{q:'在自行车道内停车是否合法？',opts:['不合法——禁止在自行车道内停车，除非有标志允许临时停靠','合法，如果停留不超过5分钟','合法，如果没有骑自行车者在场','仅在非高峰时段合法'],exp:'在自行车道内停车通常是被禁止的。除非标志指示允许上下客，否则您不得在自行车道内停驻车或停车。堵塞自行车道会迫使骑行者进入车行道，造成危险情况。'},
  zhTW:{q:'在自行車道內停車是否合法？',opts:['不合法——禁止在自行車道內停車，除非有標誌允許臨時停靠','合法，如果停留不超過5分鐘','合法，如果沒有騎自行車者在場','僅在非高峰時段合法'],exp:'在自行車道內停車通常是被禁止的。除非標誌指示允許上下客，否則您不得在自行車道內停駐車或停車。堵塞自行車道會迫使騎行者進入車行道，造成危險情況。'},
  es:{q:'¿Es legal estacionar en un carril de bicicletas?',opts:['No — estacionar en un carril de bicicletas está prohibido excepto donde señales permiten paradas temporales','Sí, si permanece menos de 5 minutos','Sí, si no hay ciclistas presentes','Solo durante horas no pico'],exp:'Estacionar en un carril de bicicletas generalmente está prohibido. No puede detenerse, pararse ni estacionarse en un carril de bicicletas a menos que las señales indiquen que está permitido para carga o descarga. Bloquear carriles de bicicletas obliga a los ciclistas al tráfico.'},
  ans:0
},
{
  id:129,cat:'parking',
  en:{q:'You want to park on a two-way street with your car facing in the same direction as traffic. How close to the curb must you park?',opts:['Within 18 inches of the right-side curb','Within 12 inches of the right-side curb','Within 24 inches of the curb','You can park anywhere in the lane'],exp:'When parallel parking on the right side of a two-way street, California law requires you to park within 18 inches of the right curb. This ensures your vehicle does not protrude into the traffic lane dangerously. When parking on a one-way street, you may also park on the left side within 18 inches of that curb.'},
  zh:{q:'您想在双向街道上靠右停车，车头朝向与交通方向相同。您必须距路缘石多近停车？',opts:['在右侧路缘石18英寸以内','在右侧路缘石12英寸以内','在路缘石24英寸以内','可以停在车道的任何位置'],exp:'在双向街道右侧平行停车时，加州法律要求您停在右侧路缘石18英寸以内。这确保您的车辆不会危险地突入车行道。在单向街道上停车时，您也可以在左侧路缘石18英寸以内停车。'},
  zhTW:{q:'您想在雙向街道上靠右停車，車頭朝向與交通方向相同。您必須距路緣石多近停車？',opts:['在右側路緣石18英寸以內','在右側路緣石12英寸以內','在路緣石24英寸以內','可以停在車道的任何位置'],exp:'在雙向街道右側平行停車時，加州法律要求您停在右側路緣石18英寸以內。這確保您的車輛不會危險地突入車行道。在單向街道上停車時，您也可以在左側路緣石18英寸以內停車。'},
  es:{q:'Quiere estacionar en una calle de dos sentidos con su auto en la misma dirección que el tráfico. ¿Qué tan cerca del bordillo debe estacionar?',opts:['Dentro de 18 pulgadas del bordillo derecho','Dentro de 12 pulgadas del bordillo derecho','Dentro de 24 pulgadas del bordillo','Puede estacionar en cualquier parte del carril'],exp:'Al estacionar en paralelo en el lado derecho de una calle de dos sentidos, la ley de California requiere que se estacione dentro de 18 pulgadas del bordillo derecho. Esto asegura que su vehículo no sobresalga peligrosamente en el carril de tráfico.'},
  ans:0
},
{
  id:130,cat:'parking',
  en:{q:'Under what circumstances may you park in front of a public or private driveway?',opts:['Never — parking in front of a driveway is always illegal','Only if the driveway owner gives permission','Only for 5 minutes or less','Only if you remain in the vehicle'],exp:'Parking in front of any driveway — public or private — is always illegal. It blocks access for the property owner and emergency vehicles. Your vehicle may be ticketed and towed. Even if you remain in the vehicle, you cannot block a driveway for any length of time.'},
  zh:{q:'在什么情况下可以在公共或私人车道前停车？',opts:['永远不行——在车道前停车始终违法','仅当车道所有者允许时','仅停留5分钟或更短时间','仅当您留在车内时'],exp:'在任何车道——公共或私人——前停车始终是违法的。这会阻碍业主和紧急车辆的通行。您的车辆可能被罚款并拖走。即使您留在车内，也不得以任何方式堵塞车道。'},
  zhTW:{q:'在什麼情況下可以在公共或私人車道前停車？',opts:['永遠不行——在車道前停車始終違法','僅當車道所有者允許時','僅停留5分鐘或更短時間','僅當您留在車內時'],exp:'在任何車道——公共或私人——前停車始終是違法的。這會阻礙業主和緊急車輛的通行。您的車輛可能被罰款並拖走。即使您留在車內，也不得以任何方式堵塞車道。'},
  es:{q:'¿Bajo qué circunstancias puede estacionar frente a una entrada pública o privada?',opts:['Nunca — estacionar frente a una entrada siempre es ilegal','Solo si el propietario de la entrada da permiso','Solo por 5 minutos o menos','Solo si permanece en el vehículo'],exp:'Estacionar frente a cualquier entrada — pública o privada — siempre es ilegal. Bloquea el acceso para el propietario de la propiedad y los vehículos de emergencia. Su vehículo puede ser multado y remolcado. Incluso si permanece en el vehículo, no puede bloquear una entrada por ningún período de tiempo.'},
  ans:0
},


// ── Batch 14 · Safety & Emergency · Q131–140 ─────────────────
{
  id:131,cat:'safety',
  en:{q:'Who is required to wear a seat belt in California?',opts:['All occupants of any age in every seating position','Only the driver and front-seat passengers','Only children under 16','Only the driver'],exp:'California law requires all occupants — driver and all passengers — to wear seat belts regardless of where they are sitting. Infants and young children must be in approved child safety seats. The driver is responsible for ensuring all passengers under 16 are properly restrained.'},
  zh:{q:'在加州，谁必须系安全带？',opts:['所有乘员，不论年龄，任何座位上均须系安全带','仅驾驶员和前排乘客','仅16岁以下儿童','仅驾驶员'],exp:'加州法律要求所有乘员——驾驶员和所有乘客——无论坐在哪个位置都必须系安全带。婴幼儿必须坐在经批准的儿童安全座椅中。驾驶员负责确保所有16岁以下乘客正确使用约束装置。'},
  zhTW:{q:'在加州，誰必須繫安全帶？',opts:['所有乘員，不論年齡，任何座位上均須繫安全帶','僅駕駛員和前排乘客','僅16歲以下兒童','僅駕駛員'],exp:'加州法律要求所有乘員——駕駛員和所有乘客——無論坐在哪個位置都必須繫安全帶。嬰幼兒必須坐在經批准的兒童安全座椅中。駕駛員負責確保所有16歲以下乘客正確使用約束裝置。'},
  es:{q:'¿Quién debe usar cinturón de seguridad en California?',opts:['Todos los ocupantes de cualquier edad en cada posición de asiento','Solo el conductor y los pasajeros del asiento delantero','Solo los niños menores de 16 años','Solo el conductor'],exp:'La ley de California requiere que todos los ocupantes — conductor y todos los pasajeros — usen cinturones de seguridad independientemente de dónde estén sentados. Los bebés y niños pequeños deben estar en sillas de seguridad para niños aprobadas. El conductor es responsable de asegurarse de que todos los pasajeros menores de 16 estén correctamente restringidos.'},
  ans:0
},
{
  id:132,cat:'safety',
  en:{q:'Children under what age must be secured in a rear-facing car seat in the back seat?',opts:['Under 2 years old, or until they reach the maximum height/weight for the seat','Under 4 years old','Under 1 year old','Under 3 years old'],exp:'California law requires children under 2 years old to be in a rear-facing car seat in the back seat unless the child weighs 40 pounds or more or is 40 inches or taller. Rear-facing seats provide the best protection for infants in a crash by distributing crash forces over the whole body.'},
  zh:{q:'几岁以下的儿童必须在后排座位的后向儿童安全座椅中？',opts:['2岁以下，或直到超过座椅的最大身高/体重限制','4岁以下','1岁以下','3岁以下'],exp:'加州法律要求2岁以下的儿童必须坐在后排座位的后向儿童安全座椅中，除非儿童体重达到40磅或身高达到40英寸以上。后向安全座椅通过将碰撞力分散到整个身体，为婴儿提供最好的碰撞保护。'},
  zhTW:{q:'幾歲以下的兒童必須在後排座位的後向兒童安全座椅中？',opts:['2歲以下，或直到超過座椅的最大身高/體重限制','4歲以下','1歲以下','3歲以下'],exp:'加州法律要求2歲以下的兒童必須坐在後排座位的後向兒童安全座椅中，除非兒童體重達到40磅或身高達到40英寸以上。後向安全座椅通過將碰撞力分散到整個身體，為嬰兒提供最好的碰撞保護。'},
  es:{q:'¿Los niños menores de qué edad deben estar asegurados en una silla de auto orientada hacia atrás en el asiento trasero?',opts:['Menores de 2 años, o hasta que alcancen la altura/peso máximo para la silla','Menores de 4 años','Menores de 1 año','Menores de 3 años'],exp:'La ley de California requiere que los niños menores de 2 años estén en una silla de auto orientada hacia atrás en el asiento trasero, a menos que el niño pese 40 libras o más o tenga 40 pulgadas o más de altura. Las sillas orientadas hacia atrás ofrecen la mejor protección en un choque.'},
  ans:0
},
{
  id:133,cat:'safety',
  en:{q:'What should you do if your accelerator sticks while driving?',opts:['Shift to neutral, apply brakes firmly, keep eyes on the road, and pull safely off — do not turn off ignition while moving','Immediately turn off the ignition','Keep pressing the accelerator and hope it unsticks','Pump the brakes rapidly'],exp:'If your accelerator sticks: (1) Keep your eyes on the road. (2) Shift to neutral (N) — this disconnects engine power from the wheels. (3) Apply firm, steady braking. (4) Pull off the road safely. (5) Turn off the engine only after you are stopped. Never turn off a moving car — you lose power steering and brakes.'},
  zh:{q:'如果在驾驶时油门卡住了，您应该怎么做？',opts:['换到空挡，用力踩刹车，保持眼睛盯着路面，安全靠边停车——行驶时不要关闭点火开关','立即关闭点火开关','继续踩油门希望它自行恢复','快速地泵踩刹车'],exp:'如果油门卡住：(1) 保持眼睛盯着路面。(2) 换到空挡(N)——这会断开发动机动力与车轮的连接。(3) 施加稳定有力的制动。(4) 安全靠边停车。(5) 停车后再关闭发动机。切勿关闭正在行驶的车辆——您将失去助力转向和刹车功能。'},
  zhTW:{q:'如果在駕駛時油門卡住了，您應該怎麼做？',opts:['換到空檔，用力踩剎車，保持眼睛盯著路面，安全靠邊停車——行駛時不要關閉點火開關','立即關閉點火開關','繼續踩油門希望它自行恢復','快速地泵踩剎車'],exp:'如果油門卡住：(1) 保持眼睛盯著路面。(2) 換到空檔(N)——這會斷開發動機動力與車輪的連接。(3) 施加穩定有力的制動。(4) 安全靠邊停車。(5) 停車後再關閉發動機。切勿關閉正在行駛的車輛——您將失去助力轉向和剎車功能。'},
  es:{q:'¿Qué debe hacer si su acelerador se atasca mientras conduce?',opts:['Cambie a punto muerto, aplique los frenos firmemente, mantenga los ojos en la carretera y salga con seguridad — no apague el motor mientras está en movimiento','Apague el encendido inmediatamente','Siga presionando el acelerador con la esperanza de que se desatasque','Bombee los frenos rápidamente'],exp:'Si su acelerador se atasca: (1) Mantenga los ojos en la carretera. (2) Cambie a punto muerto (N). (3) Aplique frenado firme y constante. (4) Salga de la carretera con seguridad. (5) Apague el motor solo después de detenerse. Nunca apague un auto en movimiento — pierde la dirección asistida y los frenos.'},
  ans:0
},
{
  id:134,cat:'safety',
  en:{q:'What should you do if your brakes suddenly fail while driving?',opts:['Pump the brakes, downshift, use the emergency/parking brake gradually, and steer to safety','Immediately steer off the road at full speed','Turn off the engine immediately','Slam into a barrier to stop the car'],exp:'If your brakes fail: (1) Pump the brakes rapidly — this can sometimes restore hydraulic pressure. (2) Downshift to a lower gear to slow the engine. (3) Gradually apply the emergency/parking brake. (4) Look for an escape route — a runaway truck ramp, uphill grade, or soft shoulder. (5) Steer to safety and signal for help.'},
  zh:{q:'驾驶时刹车突然失灵，您应该怎么做？',opts:['快速泵踩刹车，降低档位，逐渐使用手刹，并向安全方向驾驶','立即全速驾离道路','立即关闭发动机','撞入护栏使车辆停下'],exp:'如果刹车失灵：(1) 快速泵踩刹车——这有时可以恢复液压。(2) 降低到更低档位以减慢发动机转速。(3) 逐渐施加手刹/驻车制动。(4) 寻找逃生路线——失控卡车坡道、上坡路段或松软路肩。(5) 向安全方向驾驶并发信号求助。'},
  zhTW:{q:'駕駛時剎車突然失靈，您應該怎麼做？',opts:['快速泵踩剎車，降低檔位，逐漸使用手剎，並向安全方向駕駛','立即全速駕離道路','立即關閉發動機','撞入護欄使車輛停下'],exp:'如果剎車失靈：(1) 快速泵踩剎車——這有時可以恢復液壓。(2) 降低到更低檔位以減慢發動機轉速。(3) 逐漸施加手剎/駐車制動。(4) 尋找逃生路線——失控卡車坡道、上坡路段或鬆軟路肩。(5) 向安全方向駕駛並發信號求助。'},
  es:{q:'¿Qué debe hacer si sus frenos fallan repentinamente mientras conduce?',opts:['Bombee los frenos, reduzca la marcha, use el freno de emergencia/estacionamiento gradualmente y dirija hacia la seguridad','Inmediatamente dirija el auto fuera de la carretera a toda velocidad','Apague el motor inmediatamente','Choque contra una barrera para detener el auto'],exp:'Si fallan sus frenos: (1) Bombee los frenos rápidamente. (2) Reduzca a una marcha más baja para frenar el motor. (3) Aplique gradualmente el freno de emergencia/estacionamiento. (4) Busque una ruta de escape. (5) Dirija hacia la seguridad y señalice pidiendo ayuda.'},
  ans:0
},
{
  id:135,cat:'safety',
  en:{q:'If you have a tire blowout while driving, what should you do?',opts:['Hold the steering wheel firmly, ease off the gas, let the car slow gradually, then pull over safely','Brake hard immediately to stop quickly','Turn sharply to the shoulder','Accelerate briefly to maintain control'],exp:'If a tire blows out: (1) Grip the steering wheel firmly — the car will pull toward the flat tire. (2) Do NOT brake hard — this can cause a spinout. (3) Ease off the accelerator gradually. (4) Let the car slow down on its own. (5) When speed is low enough (~30 mph), gently steer to the shoulder and stop.'},
  zh:{q:'行驶中发生爆胎，您应该怎么做？',opts:['紧握方向盘，轻松松开油门，让车辆逐渐减速，然后安全靠边停车','立即用力刹车以快速停车','急转向路肩','短暂加速以保持控制'],exp:'如果发生爆胎：(1) 紧握方向盘——车辆会朝爆胎方向偏转。(2) 不要用力刹车——这可能导致车辆失控打转。(3) 逐渐松开油门。(4) 让车辆自行减速。(5) 当速度降至足够低（约30英里/小时）时，轻轻转向路肩并停车。'},
  zhTW:{q:'行駛中發生爆胎，您應該怎麼做？',opts:['緊握方向盤，輕鬆鬆開油門，讓車輛逐漸減速，然後安全靠邊停車','立即用力剎車以快速停車','急轉向路肩','短暫加速以保持控制'],exp:'如果發生爆胎：(1) 緊握方向盤——車輛會朝爆胎方向偏轉。(2) 不要用力剎車——這可能導致車輛失控打轉。(3) 逐漸鬆開油門。(4) 讓車輛自行減速。(5) 當速度降至足夠低（約30英里/小時）時，輕輕轉向路肩並停車。'},
  es:{q:'Si tiene un reventón de llanta mientras conduce, ¿qué debe hacer?',opts:['Sostenga el volante firmemente, suelte el gas gradualmente, deje que el auto se desacelere y luego orillese con seguridad','Frene fuerte inmediatamente para detenerse rápido','Gire bruscamente hacia el hombro','Acelere brevemente para mantener el control'],exp:'Si una llanta explota: (1) Agarre el volante firmemente. (2) NO frene fuerte — esto puede causar un trompo. (3) Suelte el acelerador gradualmente. (4) Deje que el auto se desacelere solo. (5) Cuando la velocidad sea suficientemente baja (~30 mph), dirija suavemente hacia el hombro y deténgase.'},
  ans:0
},
{
  id:136,cat:'safety',
  en:{q:'What should you do if you start to skid on a slippery surface?',opts:['Steer in the direction the rear of the car is skidding, ease off the gas, and avoid hard braking','Brake hard and turn the wheel sharply in the opposite direction','Accelerate to regain traction','Turn the wheel opposite to the skid and brake firmly'],exp:'If your rear end skids (oversteer): steer in the direction the rear is sliding (steer into the skid) and ease off the gas. Do not brake hard — this worsens the skid. On cars with ABS, if braking is needed, apply steady pressure. If the front skids (understeer), ease off the gas and avoid sharp steering.'},
  zh:{q:'在湿滑路面上开始打滑时，您应该怎么做？',opts:['向车尾打滑的方向转动方向盘，轻踩油门，避免用力刹车','用力刹车并向相反方向急转方向盘','加速以重新获得抓地力','向打滑相反方向转动方向盘并用力刹车'],exp:'如果车尾打滑（转向过度）：向车尾滑动的方向转动方向盘（顺着打滑方向）并轻踩油门。不要用力刹车——这会使打滑更严重。在配备ABS的车辆上，如果需要制动，施加稳定的压力。如果前轮打滑（转向不足），轻踩油门并避免急转方向盘。'},
  zhTW:{q:'在濕滑路面上開始打滑時，您應該怎麼做？',opts:['向車尾打滑的方向轉動方向盤，輕踩油門，避免用力剎車','用力剎車並向相反方向急轉方向盤','加速以重新獲得抓地力','向打滑相反方向轉動方向盤並用力剎車'],exp:'如果車尾打滑（轉向過度）：向車尾滑動的方向轉動方向盤（順著打滑方向）並輕踩油門。不要用力剎車——這會使打滑更嚴重。在配備ABS的車輛上，如果需要制動，施加穩定的壓力。如果前輪打滑（轉向不足），輕踩油門並避免急轉方向盤。'},
  es:{q:'¿Qué debe hacer si comienza a patinar en una superficie resbaladiza?',opts:['Dirija en la dirección en que la parte trasera del auto está patinando, suelte el gas y evite frenar fuerte','Frene fuerte y gire el volante bruscamente en la dirección opuesta','Acelere para recuperar la tracción','Gire el volante opuesto al patinaje y frene firmemente'],exp:'Si la parte trasera patea (sobreviraje): dirija en la dirección en que el trasero está deslizándose (dirija hacia el patinaje) y suelte el gas. No frene fuerte — esto empeora el patinaje. En autos con ABS, si se necesita frenar, aplique presión constante.'},
  ans:0
},
{
  id:137,cat:'safety',
  en:{q:'When should you use your hazard (emergency flasher) lights?',opts:['When your vehicle is stopped or disabled on the road, or moving very slowly due to an emergency','Whenever it is raining heavily','To thank another driver for letting you in','While legally parked on a city street'],exp:'Hazard lights (four-way flashers) should be used when your vehicle is stopped or broken down on the roadway or shoulder, creating a hazard for other drivers. They may also be used if you must drive very slowly in an emergency. Do not use them while normally parked or to signal thanks.'},
  zh:{q:'何时应该使用危险警报灯（双闪灯）？',opts:['当您的车辆在道路上停止或抛锚，或因紧急情况行驶非常缓慢时','每当大雨时','感谢另一位驾驶员让您并入时','在城市街道上合法停车时'],exp:'危险警报灯（四路闪烁灯）应在您的车辆在路面或路肩上停止或抛锚，对其他驾驶员构成危险时使用。在紧急情况下必须非常缓慢行驶时也可以使用。不要在正常停车时或用来表示感谢时使用。'},
  zhTW:{q:'何時應該使用危險警報燈（雙閃燈）？',opts:['當您的車輛在道路上停止或拋錨，或因緊急情況行駛非常緩慢時','每當大雨時','感謝另一位駕駛員讓您並入時','在城市街道上合法停車時'],exp:'危險警報燈（四路閃爍燈）應在您的車輛在路面或路肩上停止或拋錨，對其他駕駛員構成危險時使用。在緊急情況下必須非常緩慢行駛時也可以使用。不要在正常停車時或用來表示感謝時使用。'},
  es:{q:'¿Cuándo debe usar las luces de emergencia (destelladores de cuatro vías)?',opts:['Cuando su vehículo está detenido o averiado en la carretera, o moviéndose muy lento debido a una emergencia','Cuando llueve intensamente','Para agradecer a otro conductor por dejarlo pasar','Mientras está estacionado legalmente en una calle de la ciudad'],exp:'Las luces de emergencia (destelladores de cuatro vías) deben usarse cuando su vehículo está detenido o averiado en la calzada o el hombro, creando un peligro para otros conductores. También pueden usarse si debe conducir muy lentamente en una emergencia.'},
  ans:0
},
{
  id:138,cat:'safety',
  en:{q:'What is the law in California regarding texting while driving?',opts:['Texting while driving is completely illegal for all drivers — no exceptions','Texting is allowed only at red lights','Texting is allowed on the freeway but not in cities','Only voice texting is banned'],exp:'Texting while driving is illegal for ALL drivers in California regardless of age. Even reading a text is illegal. For drivers under 18, NO use of any electronic device is permitted while driving — hands-free or not. Fines start at $162 for the first offense and increase significantly for subsequent violations.'},
  zh:{q:'加州关于驾驶时发短信的法律是什么？',opts:['驾驶时发短信对所有驾驶员完全违法——无例外','仅在红灯时可以发短信','在高速公路上可以发短信，但在城市内不行','仅语音短信被禁止'],exp:'在加州，无论年龄如何，驾驶时发短信对所有驾驶员均属违法。即使只是阅读短信也是违法的。18岁以下的驾驶员在驾驶时不得使用任何电子设备——无论是否免提。首次违规罚款从162美元起，后续违规罚款大幅增加。'},
  zhTW:{q:'加州關於駕駛時發短信的法律是什麼？',opts:['駕駛時發短信對所有駕駛員完全違法——無例外','僅在紅燈時可以發短信','在高速公路上可以發短信，但在城市內不行','僅語音短信被禁止'],exp:'在加州，無論年齡如何，駕駛時發短信對所有駕駛員均屬違法。即使只是閱讀短信也是違法的。18歲以下的駕駛員在駕駛時不得使用任何電子設備——無論是否免提。首次違規罰款從162美元起，後續違規罰款大幅增加。'},
  es:{q:'¿Cuál es la ley en California sobre enviar mensajes de texto mientras conduce?',opts:['Enviar mensajes de texto mientras conduce es completamente ilegal para todos los conductores — sin excepciones','Enviar mensajes está permitido solo en semáforos en rojo','Enviar mensajes está permitido en la autopista pero no en ciudades','Solo los mensajes de texto por voz están prohibidos'],exp:'Enviar mensajes de texto mientras conduce es ilegal para TODOS los conductores en California independientemente de la edad. Incluso leer un texto es ilegal. Para conductores menores de 18, NO se permite el uso de ningún dispositivo electrónico mientras se conduce. Las multas comienzan en $162 para la primera infracción.'},
  ans:0
},
{
  id:139,cat:'safety',
  en:{q:'What should you do if you feel drowsy while driving on the highway?',opts:['Pull off safely at the next exit or rest area and rest — do not try to fight drowsiness','Open your window and turn up the radio','Drive faster to reach your destination sooner','Drink coffee and continue driving'],exp:'Drowsy driving is as dangerous as drunk driving. If you feel sleepy: pull off the road safely at a rest area, parking lot, or safe shoulder. Take a short nap (20–30 minutes), then get out and stretch. Caffeine provides only temporary relief. Never try to fight sleep while driving — you can fall asleep in seconds without warning.'},
  zh:{q:'在高速公路上驾驶时感到困倦，您应该怎么做？',opts:['在下一个出口或休息区安全停车休息——不要试图对抗困倦','打开车窗并调高收音机音量','加速以更快到达目的地','喝咖啡后继续驾驶'],exp:'疲劳驾驶与醉酒驾驶一样危险。如果感到困倦：在休息区、停车场或安全路肩安全靠边停车。小睡片刻（20-30分钟），然后下车伸展肢体。咖啡因只能提供暂时的缓解。切勿在驾驶时试图对抗睡意——您可能会毫无预警地在数秒内睡着。'},
  zhTW:{q:'在高速公路上駕駛時感到困倦，您應該怎麼做？',opts:['在下一個出口或休息區安全停車休息——不要試圖對抗困倦','打開車窗並調高收音機音量','加速以更快到達目的地','喝咖啡後繼續駕駛'],exp:'疲勞駕駛與醉酒駕駛一樣危險。如果感到困倦：在休息區、停車場或安全路肩安全靠邊停車。小睡片刻（20-30分鐘），然後下車伸展肢體。咖啡因只能提供暫時的緩解。切勿在駕駛時試圖對抗睡意——您可能會毫無預警地在數秒內睡著。'},
  es:{q:'¿Qué debe hacer si se siente somnoliento mientras conduce en la autopista?',opts:['Salirse con seguridad en la próxima salida o área de descanso y descansar — no intente luchar contra la somnolencia','Abra su ventana y suba el radio','Conduzca más rápido para llegar a su destino antes','Tome café y continúe conduciendo'],exp:'Conducir con sueño es tan peligroso como conducir ebrio. Si se siente somnoliento: salga de la carretera con seguridad en un área de descanso, estacionamiento o hombro seguro. Duerma una siesta corta (20–30 minutos). La cafeína solo proporciona alivio temporal. Nunca intente luchar contra el sueño mientras conduce.'},
  ans:0
},
{
  id:140,cat:'safety',
  en:{q:'What should you do if an object falls from your vehicle onto the highway?',opts:['Pull over safely and call 911 — never attempt to retrieve the object yourself from the freeway','Stop in the lane and quickly retrieve it','Continue driving — the object is not your responsibility once it falls','Turn on hazard lights and back up to retrieve it'],exp:'If cargo falls from your vehicle, pull over safely and call 911 to report the road hazard. Never attempt to retrieve items from a freeway yourself — this is extremely dangerous. You may be liable for any accidents caused by the fallen debris. Secure your load properly before driving to prevent this.'},
  zh:{q:'如果物品从您的车辆掉落到高速公路上，您应该怎么做？',opts:['安全靠边停车并拨打911——切勿自己尝试从高速公路捡回物品','在车道内停车并快速捡回','继续行驶——物品掉落后与您无关','开启危险灯并倒车捡回'],exp:'如果货物从您的车辆掉落，请安全靠边停车并拨打911报告道路危险。切勿自己尝试从高速公路上捡回物品——这极其危险。因掉落碎片造成的任何事故，您可能承担责任。驾驶前请妥善固定您的货物以防止此类情况发生。'},
  zhTW:{q:'如果物品從您的車輛掉落到高速公路上，您應該怎麼做？',opts:['安全靠邊停車並撥打911——切勿自己嘗試從高速公路撿回物品','在車道內停車並快速撿回','繼續行駛——物品掉落後與您無關','開啟危險燈並倒車撿回'],exp:'如果貨物從您的車輛掉落，請安全靠邊停車並撥打911報告道路危險。切勿自己嘗試從高速公路上撿回物品——這極其危險。因掉落碎片造成的任何事故，您可能承擔責任。駕駛前請妥善固定您的貨物以防止此類情況發生。'},
  es:{q:'¿Qué debe hacer si un objeto cae de su vehículo en la autopista?',opts:['Orillese con seguridad y llame al 911 — nunca intente recuperar el objeto usted mismo en la autopista','Deténgase en el carril y recupérelo rápidamente','Continúe conduciendo — el objeto no es su responsabilidad una vez que cae','Encienda las luces de emergencia y dé marcha atrás para recuperarlo'],exp:'Si la carga cae de su vehículo, orillese con seguridad y llame al 911 para reportar el peligro vial. Nunca intente recuperar artículos de una autopista usted mismo — esto es extremadamente peligroso. Puede ser responsable de cualquier accidente causado por los escombros caídos.'},
  ans:0
},

// ── Batch 15 · Advanced Traffic Laws · Q141–150 ──────────────────────────────
{
  id:141, cat:'laws',
  en:{q:'When is it legal to make a U-turn in California?',opts:['At any intersection unless a sign prohibits it','Only on a divided highway with a break in the median','When no vehicle is close enough to be a hazard and it is not prohibited by a sign','U-turns are never legal in California'],exp:'U-turns are legal in California when no vehicle approaching is close enough to be a hazard AND a sign does not prohibit it. They are always illegal at railroad crossings, on divided highways without a median opening, and in many business districts.'},
  zh:{q:'在加州什么情况下可以合法调头？',opts:['在任何路口，除非有标志禁止','只在有中间隔离带开口的隔离公路上','在没有足够近的来车构成危险且没有禁止标志时','加州任何情况下都不允许调头'],exp:'在加州，只要没有足够近的来车构成危险，且没有标志禁止，调头是合法的。在铁路道口、无中央隔离带开口的隔离公路以及许多商业区，调头始终是非法的。'},
  zhTW:{q:'在加州什麼情況下可以合法迴轉？',opts:['在任何路口，除非有標誌禁止','只在有中間隔離帶開口的隔離公路上','在沒有足夠近的來車構成危險且沒有禁止標誌時','加州任何情況下都不允許迴轉'],exp:'在加州，只要沒有足夠近的來車構成危險，且沒有標誌禁止，迴轉是合法的。在鐵路道口、無中央隔離帶開口的隔離公路以及許多商業區，迴轉始終是非法的。'},
  es:{q:'¿Cuándo es legal dar vuelta en U en California?',opts:['En cualquier intersección a menos que un letrero lo prohíba','Solo en una autopista dividida con una apertura en el separador','Cuando ningún vehículo se aproxima lo suficiente para ser un peligro y no lo prohíbe ningún letrero','Las vueltas en U nunca son legales en California'],exp:'Las vueltas en U son legales en California cuando ningún vehículo que se aproxima está lo suficientemente cerca para ser un peligro Y un letrero no lo prohíbe. Siempre son ilegales en cruces de ferrocarril, en autopistas divididas sin apertura mediana, y en muchos distritos comerciales.'},
  ans:2
},
{
  id:142, cat:'laws',
  en:{q:'How many feet before a turn must you signal in a business or residential district?',opts:['50 feet','100 feet','200 feet','300 feet'],exp:'In a business or residential district, you must signal at least 100 feet before turning. On a highway or open road, you must signal at least 100 feet before turning as well, but always signal far enough in advance to give other drivers time to react.'},
  zh:{q:'在商业区或住宅区，转弯前至少需要提前多少英尺打转向灯？',opts:['50英尺','100英尺','200英尺','300英尺'],exp:'在商业区或住宅区，转弯前至少需要提前100英尺打转向灯。在高速公路或开放道路上，同样需要提前至少100英尺发出转向信号，以便给其他驾驶者足够的反应时间。'},
  zhTW:{q:'在商業區或住宅區，轉彎前至少需要提前多少英尺打方向燈？',opts:['50英尺','100英尺','200英尺','300英尺'],exp:'在商業區或住宅區，轉彎前至少需要提前100英尺打方向燈。在高速公路或開放道路上，同樣需要提前至少100英尺發出轉向信號，以便給其他駕駛者足夠的反應時間。'},
  es:{q:'¿Cuántos pies antes de un giro debe señalizar en un distrito comercial o residencial?',opts:['50 pies','100 pies','200 pies','300 pies'],exp:'En un distrito comercial o residencial, debe señalizar al menos 100 pies antes de girar. En una autopista o camino abierto, también debe señalizar al menos 100 pies antes de girar, pero siempre señalice con suficiente anticipación para dar tiempo a reaccionar a otros conductores.'},
  ans:1
},
{
  id:143, cat:'laws',
  en:{q:'What must you do when an emergency vehicle with lights and siren approaches?',opts:['Speed up to get out of its way','Pull to the right edge of the road and stop','Maintain speed but move to the right lane','Stop in the center of the road'],exp:'When an emergency vehicle with flashing lights or siren approaches, you must pull over to the right edge of the road and stop — regardless of which direction the emergency vehicle is traveling. Stay stopped until the emergency vehicle has passed.'},
  zh:{q:'当有警灯和警报声的紧急车辆靠近时，你必须怎么做？',opts:['加速让路','靠右停在路边','保持车速但移到右侧车道','停在道路中央'],exp:'当有闪灯或警报声的紧急车辆靠近时，无论紧急车辆行驶方向如何，您必须靠右停在路边。保持停车直到紧急车辆通过。'},
  zhTW:{q:'當有警燈和警報聲的緊急車輛靠近時，你必須怎麼做？',opts:['加速讓路','靠右停在路邊','保持車速但移到右側車道','停在道路中央'],exp:'當有閃燈或警報聲的緊急車輛靠近時，無論緊急車輛行駛方向如何，您必須靠右停在路邊。保持停車直到緊急車輛通過。'},
  es:{q:'¿Qué debe hacer cuando se aproxima un vehículo de emergencia con luces y sirena?',opts:['Acelere para quitarse del camino','Orillese al borde derecho de la carretera y detenga','Mantenga la velocidad pero muévase al carril derecho','Deténgase en el centro de la carretera'],exp:'Cuando se aproxima un vehículo de emergencia con luces destellantes o sirena, debe orillarse al borde derecho de la carretera y detenerse, independientemente de la dirección en que viaje el vehículo de emergencia. Permanezca detenido hasta que el vehículo de emergencia haya pasado.'},
  ans:1
},
{
  id:144, cat:'laws',
  en:{q:'In California, what does "Move Over" law require when passing a stopped emergency vehicle?',opts:['Slow down to 25 mph','Change to an adjacent lane if safe, or slow to a safe speed if you cannot','Flash your headlights as a warning','Honk your horn to alert the workers'],exp:'California\'s "Move Over" law requires you to move one lane away from a stopped emergency or maintenance vehicle with flashing lights. If you cannot safely change lanes (due to traffic), you must slow to a speed that is safe for existing weather, road, and traffic conditions.'},
  zh:{q:'在加州，"移道"法律在经过停靠的紧急车辆时有什么要求？',opts:['减速到25英里/小时','如果安全则换到相邻车道，如果不能则减速到安全速度','闪烁大灯以示警告','鸣喇叭提醒工作人员'],exp:'加州的"移道"法律要求您从有闪灯的停靠紧急或维护车辆旁移开一个车道。如果由于交通状况无法安全变道，您必须减速到适合当前天气、道路和交通状况的安全速度。'},
  zhTW:{q:'在加州，"移道"法律在經過停靠的緊急車輛時有什麼要求？',opts:['減速到25英里/小時','如果安全則換到相鄰車道，如果不能則減速到安全速度','閃爍大燈以示警告','鳴喇叭提醒工作人員'],exp:'加州的"移道"法律要求您從有閃燈的停靠緊急或維護車輛旁移開一個車道。如果由於交通狀況無法安全變道，您必須減速到適合當前天氣、道路和交通狀況的安全速度。'},
  es:{q:'En California, ¿qué requiere la ley "Muévase" al pasar un vehículo de emergencia detenido?',opts:['Reduzca a 25 mph','Cambie a un carril adyacente si es seguro, o reduzca a una velocidad segura si no puede','Destelle sus faros como advertencia','Toque su bocina para alertar a los trabajadores'],exp:'La ley "Muévase" de California requiere que se mueva un carril alejándose de un vehículo de emergencia o mantenimiento detenido con luces destellantes. Si no puede cambiar de carril de forma segura (por el tráfico), debe reducir la velocidad a una velocidad que sea segura para las condiciones climáticas, viales y de tráfico existentes.'},
  ans:1
},
{
  id:145, cat:'laws',
  en:{q:'What is the penalty for a first offense of driving without a valid license in California?',opts:['Warning only','Fine up to $1,000 and possible vehicle impoundment','Immediate jail time','License suspension for 5 years'],exp:'Driving without a valid license in California is a misdemeanor. For a first offense, you can face a fine of up to $1,000 and your vehicle may be impounded for up to 30 days. You may also face increased insurance rates and other consequences.'},
  zh:{q:'在加州无证驾驶初犯的处罚是什么？',opts:['仅警告','罚款最高$1,000并可能扣车','立即监禁','吊销驾照5年'],exp:'在加州无证驾驶是轻罪。初犯可能面临最高$1,000的罚款，车辆可能被扣押最多30天。您还可能面临保险费上涨和其他后果。'},
  zhTW:{q:'在加州無照駕駛初犯的處罰是什麼？',opts:['僅警告','罰款最高$1,000並可能扣車','立即監禁','吊銷駕照5年'],exp:'在加州無照駕駛是輕罪。初犯可能面臨最高$1,000的罰款，車輛可能被扣押最多30天。您還可能面臨保險費上漲和其他後果。'},
  es:{q:'¿Cuál es la penalización por una primera infracción de conducir sin licencia válida en California?',opts:['Solo advertencia','Multa hasta $1,000 y posible incautación del vehículo','Tiempo en cárcel inmediato','Suspensión de licencia por 5 años'],exp:'Conducir sin licencia válida en California es un delito menor. Por una primera infracción, puede enfrentar una multa de hasta $1,000 y su vehículo puede ser incautado hasta 30 días. También puede enfrentar tasas de seguro aumentadas y otras consecuencias.'},
  ans:1
},
{
  id:146, cat:'laws',
  en:{q:'You are involved in a collision with property damage over $1,000. What must you do?',opts:['Leave a note and drive away','Report the accident to DMV within 10 days','Call the police immediately regardless of damage amount','Nothing if all parties agree to handle it privately'],exp:'In California, if a collision causes property damage over $1,000 or any injury, you must report it to the DMV within 10 days using a SR-1 form. Failing to report can result in license suspension. You should also exchange information with other involved parties.'},
  zh:{q:'您发生了财产损失超过$1,000的碰撞事故。您必须怎么做？',opts:['留下便条然后离开','10天内向DMV上报事故','立即报警，无论损失金额多少','如果各方同意私下解决则什么都不用做'],exp:'在加州，如果碰撞造成超过$1,000的财产损失或任何伤亡，您必须在10天内使用SR-1表格向DMV报告。未报告可能导致吊销驾照。您还应与其他涉事方交换信息。'},
  zhTW:{q:'您發生了財產損失超過$1,000的碰撞事故。您必須怎麼做？',opts:['留下便條然後離開','10天內向DMV上報事故','立即報警，無論損失金額多少','如果各方同意私下解決則什麼都不用做'],exp:'在加州，如果碰撞造成超過$1,000的財產損失或任何傷亡，您必須在10天內使用SR-1表格向DMV報告。未報告可能導致吊銷駕照。您還應與其他涉事方交換信息。'},
  es:{q:'Está involucrado en una colisión con daños a la propiedad de más de $1,000. ¿Qué debe hacer?',opts:['Dejar una nota y conducir','Reportar el accidente al DMV dentro de 10 días','Llamar a la policía inmediatamente independientemente del monto del daño','Nada si todas las partes acuerdan manejarlo de forma privada'],exp:'En California, si una colisión causa daños a la propiedad de más de $1,000 o cualquier lesión, debe reportarlo al DMV dentro de 10 días usando el formulario SR-1. No reportar puede resultar en suspensión de licencia. También debe intercambiar información con otras partes involucradas.'},
  ans:1
},
{
  id:147, cat:'laws',
  en:{q:'When can you legally pass another vehicle on the right?',opts:['Whenever you want to go faster','When the vehicle ahead is making a left turn and there is a paved shoulder or extra lane','On any two-lane road','Passing on the right is never legal'],exp:'You may pass on the right only when the vehicle ahead is making a left turn and there is a paved road or extra lane to the right. You may also pass on the right on one-way streets or roads wide enough for two lanes of traffic. Never pass on the right on a narrow shoulder.'},
  zh:{q:'什么情况下可以合法从右侧超车？',opts:['任何时候想超车就可以','前车在左转且有铺装路肩或额外车道时','在任何双车道道路上','从右侧超车永远不合法'],exp:'只有当前车在左转且右侧有铺装路面或额外车道时，才可以从右侧超车。在单行道或足够宽容纳两条车道的道路上也可以从右侧超车。切勿在狭窄路肩上从右侧超车。'},
  zhTW:{q:'什麼情況下可以合法從右側超車？',opts:['任何時候想超車就可以','前車在左轉且有鋪裝路肩或額外車道時','在任何雙車道道路上','從右側超車永遠不合法'],exp:'只有當前車在左轉且右側有鋪裝路面或額外車道時，才可以從右側超車。在單行道或足夠寬容納兩條車道的道路上也可以從右側超車。切勿在狹窄路肩上從右側超車。'},
  es:{q:'¿Cuándo puede legalmente adelantar a otro vehículo por la derecha?',opts:['Cuando quiera ir más rápido','Cuando el vehículo de adelante gira a la izquierda y hay un arcén pavimentado o carril extra','En cualquier carretera de dos carriles','Adelantar por la derecha nunca es legal'],exp:'Puede adelantar por la derecha solo cuando el vehículo de adelante gira a la izquierda y hay una carretera pavimentada o carril extra a la derecha. También puede adelantar por la derecha en calles de sentido único o carreteras lo suficientemente anchas para dos carriles de tráfico. Nunca adelante por la derecha en un arcén estrecho.'},
  ans:1
},
{
  id:148, cat:'laws',
  en:{q:'What does a flashing red traffic light mean?',opts:['Slow down and proceed with caution','Stop completely, then proceed when safe — treat it like a stop sign','The light is broken — proceed through the intersection','Yield to cross traffic'],exp:'A flashing red light means the same as a stop sign: you must come to a complete stop, check for traffic and pedestrians, then proceed when it is safe. This applies at all times, not just when traffic is present.'},
  zh:{q:'红色闪烁交通灯意味着什么？',opts:['减速谨慎通行','完全停车，确认安全后通行——视同停车标志','信号灯故障——直接通过路口','让行对向车辆'],exp:'红色闪烁灯与停车标志含义相同：您必须完全停车，检查交通和行人情况，然后在安全时通行。这适用于任何时候，不仅仅是有交通时。'},
  zhTW:{q:'紅色閃爍交通燈意味著什麼？',opts:['減速謹慎通行','完全停車，確認安全後通行——視同停車標誌','信號燈故障——直接通過路口','讓行對向車輛'],exp:'紅色閃爍燈與停車標誌含義相同：您必須完全停車，檢查交通和行人情況，然後在安全時通行。這適用於任何時候，不僅僅是有交通時。'},
  es:{q:'¿Qué significa una luz de tráfico roja intermitente?',opts:['Reduzca la velocidad y proceda con precaución','Detenga completamente, luego proceda cuando sea seguro — trátelo como una señal de stop','El semáforo está roto — proceda por la intersección','Ceda el paso al tráfico cruzado'],exp:'Una luz roja intermitente significa lo mismo que una señal de stop: debe detenerse completamente, verificar el tráfico y los peatones, luego proceder cuando sea seguro. Esto aplica en todo momento, no solo cuando hay tráfico.'},
  ans:1
},
{
  id:149, cat:'laws',
  en:{q:'What does a flashing yellow traffic light mean?',opts:['Stop and wait for a green light','The light is about to turn red — stop if safe','Slow down and proceed with caution','Yield to all cross traffic'],exp:'A flashing yellow traffic light means slow down and proceed with caution. Unlike a flashing red light, you do not have to stop — but you should reduce your speed, look for hazards, and be prepared to stop if necessary.'},
  zh:{q:'黄色闪烁交通灯意味着什么？',opts:['停车等待绿灯','即将变红——如果安全则停车','减速谨慎通行','让行所有横向交通'],exp:'黄色闪烁交通灯意味着减速并谨慎通行。与红色闪烁灯不同，您无需停车，但应降低车速，注意危险，并在必要时准备停车。'},
  zhTW:{q:'黃色閃爍交通燈意味著什麼？',opts:['停車等待綠燈','即將變紅——如果安全則停車','減速謹慎通行','讓行所有橫向交通'],exp:'黃色閃爍交通燈意味著減速並謹慎通行。與紅色閃爍燈不同，您無需停車，但應降低車速，注意危險，並在必要時準備停車。'},
  es:{q:'¿Qué significa una luz de tráfico amarilla intermitente?',opts:['Detenga y espere una luz verde','El semáforo está a punto de ponerse rojo — detenga si es seguro','Reduzca la velocidad y proceda con precaución','Ceda el paso a todo el tráfico cruzado'],exp:'Una luz de tráfico amarilla intermitente significa reducir la velocidad y proceder con precaución. A diferencia de una luz roja intermitente, no tiene que detenerse, pero debe reducir su velocidad, buscar peligros y estar preparado para detenerse si es necesario.'},
  ans:2
},
{
  id:150, cat:'laws',
  en:{q:'What is required by law when you park on a hill with a curb facing downhill?',opts:['Turn wheels away from curb (left)','Turn wheels toward curb (right)','Keep wheels straight','Park only in a designated lot'],exp:'When parking downhill with a curb, turn your front wheels toward the curb (right). This way, if the car rolls, it will roll into the curb and stop. When parking uphill with a curb, turn wheels away from the curb. Without a curb, always turn wheels toward the right shoulder.'},
  zh:{q:'在有路缘石的下坡停车时，法律要求如何转动车轮？',opts:['车轮偏离路缘（向左）','车轮朝向路缘（向右）','车轮保持直行','只能停在指定停车场'],exp:'在有路缘石的下坡停车时，将前轮转向路缘（向右）。这样，如果车辆滑动，会滚向路缘并停下。在有路缘石的上坡停车时，车轮偏离路缘。没有路缘石时，车轮始终朝向右侧路肩。'},
  zhTW:{q:'在有路緣石的下坡停車時，法律要求如何轉動車輪？',opts:['車輪偏離路緣（向左）','車輪朝向路緣（向右）','車輪保持直行','只能停在指定停車場'],exp:'在有路緣石的下坡停車時，將前輪轉向路緣（向右）。這樣，如果車輛滑動，會滾向路緣並停下。在有路緣石的上坡停車時，車輪偏離路緣。沒有路緣石時，車輪始終朝向右側路肩。'},
  es:{q:'¿Qué requiere la ley cuando estaciona en una colina con bordillo cuesta abajo?',opts:['Gire las ruedas alejadas del bordillo (izquierda)','Gire las ruedas hacia el bordillo (derecha)','Mantenga las ruedas rectas','Estacione solo en un lote designado'],exp:'Cuando estacione cuesta abajo con bordillo, gire sus ruedas delanteras hacia el bordillo (derecha). De esta manera, si el auto rueda, rodará hacia el bordillo y se detendrá. Al estacionar cuesta arriba con bordillo, gire las ruedas alejadas del bordillo. Sin bordillo, siempre gire las ruedas hacia el hombro derecho.'},
  ans:1
},

] // end of questions array — more batches to be appended
