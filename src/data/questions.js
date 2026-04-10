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

] // end of questions array — more batches to be appended
