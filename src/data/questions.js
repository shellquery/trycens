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

// ── Batch 16 · Right of Way (Advanced) · Q151–160 ───────────────────────────
{
  id:151, cat:'rightofway',
  en:{q:'At a four-way stop, two vehicles arrive at the same time. Who has the right of way?',opts:['The vehicle on the left','The vehicle on the right','The larger vehicle','The vehicle going straight'],exp:'When two vehicles arrive at a four-way stop at the same time, the vehicle on the RIGHT has the right of way. This is the fundamental "right-of-way to the right" rule. Always yield to the vehicle on your right when arriving simultaneously.'},
  zh:{q:'在四路停车标志路口，两辆车同时到达。谁有优先通行权？',opts:['左侧车辆','右侧车辆','较大的车辆','直行车辆'],exp:'当两辆车同时到达四路停车路口时，右侧的车辆有优先通行权。这是基本的"右侧优先"规则。同时到达时，始终让右侧车辆先行。'},
  zhTW:{q:'在四路停車標誌路口，兩輛車同時到達。誰有優先通行權？',opts:['左側車輛','右側車輛','較大的車輛','直行車輛'],exp:'當兩輛車同時到達四路停車路口時，右側的車輛有優先通行權。這是基本的「右側優先」規則。同時到達時，始終讓右側車輛先行。'},
  es:{q:'En una parada de cuatro vías, dos vehículos llegan al mismo tiempo. ¿Quién tiene el derecho de paso?',opts:['El vehículo de la izquierda','El vehículo de la derecha','El vehículo más grande','El vehículo que va recto'],exp:'Cuando dos vehículos llegan a una parada de cuatro vías al mismo tiempo, el vehículo de la DERECHA tiene el derecho de paso. Esta es la regla fundamental de "derecho de paso a la derecha". Siempre ceda al vehículo de su derecha cuando lleguen simultáneamente.'},
  ans:1
},
{
  id:152, cat:'rightofway',
  en:{q:'Who must yield when a vehicle enters a roundabout?',opts:['Vehicles already inside the roundabout','Vehicles entering the roundabout','Vehicles exiting the roundabout','Emergency vehicles always have priority'],exp:'When entering a roundabout, you must yield to vehicles already circulating inside. Roundabouts flow counterclockwise, and entering traffic always yields to circulating traffic. Look to your left as you approach and enter only when there is a safe gap.'},
  zh:{q:'进入环形交叉路口时，谁必须让行？',opts:['已在环形路内的车辆','正在进入环形路的车辆','正在驶出环形路的车辆','紧急车辆始终有优先权'],exp:'进入环形交叉路口时，必须让行给已在环内行驶的车辆。环形交叉路口逆时针行驶，进入的车辆始终让行给环内行驶的车辆。靠近时向左看，仅在有安全间隙时进入。'},
  zhTW:{q:'進入環形交叉路口時，誰必須讓行？',opts:['已在環形路內的車輛','正在進入環形路的車輛','正在駛出環形路的車輛','緊急車輛始終有優先權'],exp:'進入環形交叉路口時，必須讓行給已在環內行駛的車輛。環形交叉路口逆時針行駛，進入的車輛始終讓行給環內行駛的車輛。靠近時向左看，僅在有安全間隙時進入。'},
  es:{q:'¿Quién debe ceder cuando un vehículo entra a una rotonda?',opts:['Vehículos ya dentro de la rotonda','Vehículos entrando a la rotonda','Vehículos saliendo de la rotonda','Los vehículos de emergencia siempre tienen prioridad'],exp:'Al entrar a una rotonda, debe ceder a los vehículos que ya circulan dentro. Las rotondas fluyen en sentido contrario a las agujas del reloj, y el tráfico entrante siempre cede al tráfico circulante. Mire a su izquierda al aproximarse y entre solo cuando haya un espacio seguro.'},
  ans:1
},
{
  id:153, cat:'rightofway',
  en:{q:'A pedestrian is crossing at an unmarked crosswalk. What must you do?',opts:['Honk to warn the pedestrian and proceed','Stop and wait for the pedestrian to cross','Slow down only if the pedestrian is in your lane','Pedestrians must wait for traffic'],exp:'In California, pedestrians have the right of way at all crosswalks — marked or unmarked. An unmarked crosswalk exists at every intersection where sidewalks meet the roadway. You must stop and yield to pedestrians crossing, even if there are no painted lines.'},
  zh:{q:'一名行人正在无标志人行横道过街。您必须怎么做？',opts:['鸣喇叭警告行人后通过','停车等待行人通过','仅当行人在您的车道时减速','行人必须等待车辆'],exp:'在加州，行人在所有人行横道（有标志或无标志）均享有优先通行权。在每个有人行道与路面相交的路口都有无标志人行横道。即使没有画线，您也必须停车让行人通过。'},
  zhTW:{q:'一名行人正在無標誌人行橫道過街。您必須怎麼做？',opts:['鳴喇叭警告行人後通過','停車等待行人通過','僅當行人在您的車道時減速','行人必須等待車輛'],exp:'在加州，行人在所有人行橫道（有標誌或無標誌）均享有優先通行權。在每個有人行道與路面相交的路口都有無標誌人行橫道。即使沒有畫線，您也必須停車讓行人通過。'},
  es:{q:'Un peatón está cruzando en un cruce peatonal sin marcar. ¿Qué debe hacer?',opts:['Toque el claxon para advertir al peatón y proceda','Detenga y espere a que el peatón cruce','Reduzca la velocidad solo si el peatón está en su carril','Los peatones deben esperar al tráfico'],exp:'En California, los peatones tienen el derecho de paso en todos los cruces peatonales, marcados o sin marcar. Un cruce peatonal sin marcar existe en cada intersección donde las aceras se encuentran con la calzada. Debe detenerse y ceder a los peatones que cruzan, incluso si no hay líneas pintadas.'},
  ans:1
},
{
  id:154, cat:'rightofway',
  en:{q:'You are turning left at a green light. Who has the right of way?',opts:['You do, because you signaled','Oncoming traffic going straight or turning right','Pedestrians only','You and oncoming traffic share equal right of way'],exp:'When turning left on a green light (not a dedicated left-turn arrow), you must yield to oncoming traffic going straight and to pedestrians in the crosswalk. You may complete the turn only when there is a safe gap in traffic.'},
  zh:{q:'在绿灯时您正在左转。谁有优先通行权？',opts:['您，因为您打了转向灯','直行或右转的对向车辆','仅行人','您和对向车辆平等分享优先通行权'],exp:'在绿灯左转时（非专用左转箭头灯），您必须让行直行对向车辆和人行横道上的行人。只有当交通中有安全间隙时，才可以完成转弯。'},
  zhTW:{q:'在綠燈時您正在左轉。誰有優先通行權？',opts:['您，因為您打了方向燈','直行或右轉的對向車輛','僅行人','您和對向車輛平等分享優先通行權'],exp:'在綠燈左轉時（非專用左轉箭頭燈），您必須讓行直行對向車輛和人行橫道上的行人。只有當交通中有安全間隙時，才可以完成轉彎。'},
  es:{q:'Está girando a la izquierda en una luz verde. ¿Quién tiene el derecho de paso?',opts:['Usted, porque señalizó','El tráfico que viene en sentido contrario yendo recto o girando a la derecha','Solo los peatones','Usted y el tráfico en sentido contrario comparten igual derecho de paso'],exp:'Al girar a la izquierda en una luz verde (no una flecha de giro izquierdo dedicada), debe ceder al tráfico en sentido contrario que va recto y a los peatones en el paso peatonal. Puede completar el giro solo cuando hay un espacio seguro en el tráfico.'},
  ans:1
},
{
  id:155, cat:'rightofway',
  en:{q:'A blind pedestrian with a white cane is waiting to cross. What must you do?',opts:['Proceed if the light is green','Stop and wait until the pedestrian has completely crossed','Slow down and pass carefully','Honk to let them know you are there'],exp:'Visually impaired pedestrians using a white cane or guide dog have full right of way and extra legal protections. You must stop and remain stopped until they have completely crossed to the other side — do not start moving again while they are still in the roadway.'},
  zh:{q:'一名使用白色手杖的盲人行人在等待过马路。您必须怎么做？',opts:['如果绿灯就通行','停车等待直到行人完全过街','减速小心通过','鸣喇叭让他们知道您在这里'],exp:'使用白色手杖或导盲犬的视障行人享有完全优先通行权和额外法律保护。您必须停车并保持停车状态直到他们完全走到对面——在他们仍在路面时不得再次开始移动。'},
  zhTW:{q:'一名使用白色手杖的盲人行人在等待過馬路。您必須怎麼做？',opts:['如果綠燈就通行','停車等待直到行人完全過街','減速小心通過','鳴喇叭讓他們知道您在這裡'],exp:'使用白色手杖或導盲犬的視障行人享有完全優先通行權和額外法律保護。您必須停車並保持停車狀態直到他們完全走到對面——在他們仍在路面時不得再次開始移動。'},
  es:{q:'Un peatón ciego con un bastón blanco está esperando cruzar. ¿Qué debe hacer?',opts:['Proceda si el semáforo está en verde','Detenga y espere hasta que el peatón haya cruzado completamente','Reduzca la velocidad y pase con cuidado','Toque el claxon para hacerle saber que está ahí'],exp:'Los peatones con discapacidad visual que usan bastón blanco o perro guía tienen pleno derecho de paso y protecciones legales adicionales. Debe detenerse y permanecer detenido hasta que hayan cruzado completamente al otro lado — no comience a moverse nuevamente mientras aún estén en la calzada.'},
  ans:1
},
{
  id:156, cat:'rightofway',
  en:{q:'You are on a two-lane highway and want to pass a bicyclist. What is required?',opts:['Sound horn once and pass at full speed','Give at least 3 feet of clearance when passing','Pass as close as possible to minimize time in oncoming lane','Bicyclists must move to the shoulder before you can pass'],exp:'California law requires drivers to give bicyclists at least 3 feet of clearance when passing. If there is not enough room, you must slow down and wait until it is safe to pass. This "Three Feet for Safety" law applies on all roads.'},
  zh:{q:'在双车道公路上您想超越一名骑自行车者。需要什么要求？',opts:['鸣一声喇叭后全速通过','超车时至少保持3英尺的间距','尽可能近地通过以减少在对向车道的时间','骑自行车者必须先移到路肩，您才能超车'],exp:'加州法律要求驾驶员超越骑自行车者时至少保持3英尺间距。如果空间不足，必须减速等待安全时机再超车。这条"安全三英尺"法律适用于所有道路。'},
  zhTW:{q:'在雙車道公路上您想超越一名騎自行車者。需要什麼要求？',opts:['鳴一聲喇叭後全速通過','超車時至少保持3英尺的間距','儘可能近地通過以減少在對向車道的時間','騎自行車者必須先移到路肩，您才能超車'],exp:'加州法律要求駕駛員超越騎自行車者時至少保持3英尺間距。如果空間不足，必須減速等待安全時機再超車。這條「安全三英尺」法律適用於所有道路。'},
  es:{q:'Está en una autopista de dos carriles y quiere adelantar a un ciclista. ¿Qué se requiere?',opts:['Toque el claxon una vez y pase a toda velocidad','Dé al menos 3 pies de distancia al adelantar','Pase lo más cerca posible para minimizar el tiempo en el carril contrario','Los ciclistas deben moverse al arcén antes de que pueda adelantarlos'],exp:'La ley de California requiere que los conductores den a los ciclistas al menos 3 pies de distancia al adelantarlos. Si no hay suficiente espacio, debe reducir la velocidad y esperar hasta que sea seguro adelantar. Esta ley de "Tres Pies para Seguridad" aplica en todas las carreteras.'},
  ans:1
},
{
  id:157, cat:'rightofway',
  en:{q:'At a T-intersection (without signs or signals), who has the right of way?',opts:['The vehicle on the through road','The vehicle approaching from the left','The vehicle that arrived first','All vehicles have equal right of way'],exp:'At a T-intersection without signs or signals, vehicles on the through road (the road that continues) have the right of way over vehicles on the terminating road (the road that ends). If you are on the road that ends, yield to all traffic on the through road.'},
  zh:{q:'在T形路口（无标志或信号灯），谁有优先通行权？',opts:['在通行道路上的车辆','来自左侧的车辆','最先到达的车辆','所有车辆平等享有通行权'],exp:'在无标志或信号灯的T形路口，通行道路（继续延伸的道路）上的车辆对终止道路（结束的道路）上的车辆享有优先通行权。如果您在结束的道路上，需让行通行道路上的所有交通。'},
  zhTW:{q:'在T形路口（無標誌或信號燈），誰有優先通行權？',opts:['在通行道路上的車輛','來自左側的車輛','最先到達的車輛','所有車輛平等享有通行權'],exp:'在無標誌或信號燈的T形路口，通行道路（繼續延伸的道路）上的車輛對終止道路（結束的道路）上的車輛享有優先通行權。如果您在結束的道路上，需讓行通行道路上的所有交通。'},
  es:{q:'En una intersección en T (sin señales o semáforos), ¿quién tiene el derecho de paso?',opts:['El vehículo en la carretera de paso','El vehículo que se aproxima desde la izquierda','El vehículo que llegó primero','Todos los vehículos tienen igual derecho de paso'],exp:'En una intersección en T sin señales o semáforos, los vehículos en la carretera de paso (la carretera que continúa) tienen el derecho de paso sobre los vehículos en la carretera que termina. Si está en la carretera que termina, ceda a todo el tráfico en la carretera de paso.'},
  ans:0
},
{
  id:158, cat:'rightofway',
  en:{q:'When must you yield to a school bus that has stopped with flashing red lights?',opts:['Only when behind it','Only when approaching from the front','In both directions on a two-lane road; only when behind it on a divided highway','Only when children are visibly getting on or off'],exp:'On a two-lane road, you must stop in both directions when a school bus has its red lights flashing. On a divided highway (with a raised median), only traffic behind the bus must stop — oncoming traffic may continue. Always wait until the lights stop flashing and the bus moves.'},
  zh:{q:'当一辆有红色闪烁灯的校车停靠时，您何时必须让行？',opts:['仅当在其后方时','仅当从正面靠近时','在双车道道路上两个方向都要停；在隔离公路上仅后方需停','仅当明显有孩子上下车时'],exp:'在双车道道路上，当校车闪烁红灯时，两个方向都必须停车。在隔离公路（有隔离带）上，只有校车后方的交通需要停车——对向交通可以继续。始终等到灯停止闪烁且校车开走。'},
  zhTW:{q:'當一輛有紅色閃爍燈的校車停靠時，您何時必須讓行？',opts:['僅當在其後方時','僅當從正面靠近時','在雙車道道路上兩個方向都要停；在隔離公路上僅後方需停','僅當明顯有孩子上下車時'],exp:'在雙車道道路上，當校車閃爍紅燈時，兩個方向都必須停車。在隔離公路（有隔離帶）上，只有校車後方的交通需要停車——對向交通可以繼續。始終等到燈停止閃爍且校車開走。'},
  es:{q:'¿Cuándo debe ceder a un autobús escolar que se ha detenido con luces rojas intermitentes?',opts:['Solo cuando está detrás de él','Solo cuando se aproxima desde el frente','En ambas direcciones en una carretera de dos carriles; solo cuando está detrás en una autopista dividida','Solo cuando los niños están visiblemente subiendo o bajando'],exp:'En una carretera de dos carriles, debe detenerse en ambas direcciones cuando un autobús escolar tiene sus luces rojas intermitentes. En una autopista dividida (con mediana elevada), solo el tráfico detrás del autobús debe detenerse — el tráfico en sentido contrario puede continuar. Siempre espere hasta que las luces dejen de parpadear y el autobús se mueva.'},
  ans:2
},
{
  id:159, cat:'rightofway',
  en:{q:'A funeral procession is moving through an intersection against a red light. What should you do?',opts:['Proceed through — the red light applies to everyone','Yield and let the procession pass before proceeding','Honk to alert the procession of the red light','Call 911 to report the traffic violation'],exp:'Funeral processions have special legal right of way in California. They may proceed through intersections against signals when led by a police escort or with the lead vehicle having passed through legally. You must yield and wait for the entire procession to pass.'},
  zh:{q:'一支葬礼车队正在闯红灯通过路口。您该怎么做？',opts:['继续通行——红灯对所有人都适用','让行等待车队通过后再通行','鸣喇叭提醒车队闯红灯','拨打911报告交通违规'],exp:'在加州，葬礼车队享有特殊法定优先通行权。当有警车引导或领头车辆合法通过时，车队可以在信号灯反对的情况下通过路口。您必须让行并等待整个车队通过。'},
  zhTW:{q:'一支葬禮車隊正在闖紅燈通過路口。您該怎麼做？',opts:['繼續通行——紅燈對所有人都適用','讓行等待車隊通過後再通行','鳴喇叭提醒車隊闖紅燈','撥打911報告交通違規'],exp:'在加州，葬禮車隊享有特殊法定優先通行權。當有警車引導或領頭車輛合法通過時，車隊可以在信號燈反對的情況下通過路口。您必須讓行並等待整個車隊通過。'},
  es:{q:'Una procesión fúnebre se mueve por una intersección contra una luz roja. ¿Qué debe hacer?',opts:['Proceda — la luz roja aplica para todos','Ceda y deje pasar la procesión antes de proceder','Toque el claxon para alertar a la procesión de la luz roja','Llame al 911 para reportar la infracción de tráfico'],exp:'Las procesiones fúnebres tienen derecho de paso legal especial en California. Pueden proceder por intersecciones contra señales cuando son guiadas por escolta policial o con el vehículo líder habiendo pasado legalmente. Debe ceder y esperar a que pase toda la procesión.'},
  ans:1
},
{
  id:160, cat:'rightofway',
  en:{q:'You are exiting a parking lot onto a street. Who has the right of way?',opts:['You do, if you signal','Traffic already on the street','Whoever reaches the curb first','The person who has been waiting longer'],exp:'When exiting a parking lot, driveway, or alley onto a public street, you must yield to all traffic already on the street, including pedestrians on the sidewalk. The street traffic has the right of way and you must wait for a safe gap before entering.'},
  zh:{q:'您正从停车场驶出上街道。谁有优先通行权？',opts:['如果您打了转向灯则您有','街道上已有的车辆','先到达路缘的人','等待时间较长的人'],exp:'从停车场、车道或小巷驶入公共街道时，必须让行街道上所有已有的交通，包括人行道上的行人。街道交通享有优先通行权，您必须等待安全间隙后再进入。'},
  zhTW:{q:'您正從停車場駛出上街道。誰有優先通行權？',opts:['如果您打了方向燈則您有','街道上已有的車輛','先到達路緣的人','等待時間較長的人'],exp:'從停車場、車道或小巷駛入公共街道時，必須讓行街道上所有已有的交通，包括人行道上的行人。街道交通享有優先通行權，您必須等待安全間隙後再進入。'},
  es:{q:'Está saliendo de un estacionamiento hacia una calle. ¿Quién tiene el derecho de paso?',opts:['Usted, si señaliza','El tráfico ya en la calle','Quien llegue al bordillo primero','La persona que ha esperado más tiempo'],exp:'Al salir de un estacionamiento, entrada de auto o callejón hacia una calle pública, debe ceder a todo el tráfico ya en la calle, incluyendo peatones en la acera. El tráfico de la calle tiene el derecho de paso y debe esperar un espacio seguro antes de entrar.'},
  ans:1
},

// ── Batch 17 · Speed Limits (Advanced) · Q161–170 ───────────────────────────
{
  id:161, cat:'speed',
  en:{q:'What is the maximum speed limit in California when not posted?',opts:['55 mph on all roads','65 mph on all roads','65 mph on highways; 25 mph in residential areas','70 mph on freeways; 55 mph elsewhere'],exp:'California uses a "Basic Speed Law": you must never drive faster than is safe for current conditions. The maximum speed limit is 65 mph on most highways (70 mph only where posted). On two-lane undivided highways, the maximum is 55 mph unless posted otherwise.'},
  zh:{q:'在加州没有标志时，最高速度限制是多少？',opts:['所有道路55英里/小时','所有道路65英里/小时','高速公路65英里/小时；住宅区25英里/小时','高速公路70英里/小时；其他地方55英里/小时'],exp:'加州使用"基本速度法"：您永远不得以超过当前条件下安全速度行驶。大多数高速公路的最高速度限制为65英里/小时（只有在有标志的地方才有70英里/小时）。在无分隔线的双车道公路上，除非另有规定，最高为55英里/小时。'},
  zhTW:{q:'在加州沒有標誌時，最高速度限制是多少？',opts:['所有道路55英里/小時','所有道路65英里/小時','高速公路65英里/小時；住宅區25英里/小時','高速公路70英里/小時；其他地方55英里/小時'],exp:'加州使用「基本速度法」：您永遠不得以超過當前條件下安全速度行駛。大多數高速公路的最高速度限制為65英里/小時（只有在有標誌的地方才有70英里/小時）。在無分隔線的雙車道公路上，除非另有規定，最高為55英里/小時。'},
  es:{q:'¿Cuál es el límite de velocidad máximo en California cuando no está publicado?',opts:['55 mph en todas las carreteras','65 mph en todas las carreteras','65 mph en autopistas; 25 mph en áreas residenciales','70 mph en autopistas; 55 mph en otros lugares'],exp:'California usa la "Ley de Velocidad Básica": nunca debe conducir más rápido de lo que es seguro para las condiciones actuales. El límite de velocidad máximo es 65 mph en la mayoría de las autopistas (70 mph solo donde esté publicado). En autopistas de dos carriles sin división, el máximo es 55 mph a menos que se indique lo contrario.'},
  ans:3
},
{
  id:162, cat:'speed',
  en:{q:'What is the speed limit in an alley in California?',opts:['15 mph','20 mph','25 mph','10 mph'],exp:'The speed limit in any alley in California is 15 mph. This is a prima facie (assumed) speed limit — meaning it is assumed to be the correct speed unless you can prove otherwise. Alleys are narrow, have limited visibility, and often have pedestrians, so this low limit is critical.'},
  zh:{q:'在加州小巷中的速度限制是多少？',opts:['15英里/小时','20英里/小时','25英里/小时','10英里/小时'],exp:'加州任何小巷中的速度限制为15英里/小时。这是初步表面（假定）速度限制——意味着假定这是正确速度，除非您能证明否则。小巷狭窄，能见度有限，且经常有行人，因此这个低限制非常重要。'},
  zhTW:{q:'在加州小巷中的速度限制是多少？',opts:['15英里/小時','20英里/小時','25英里/小時','10英里/小時'],exp:'加州任何小巷中的速度限制為15英里/小時。這是初步表面（假定）速度限制——意味著假定這是正確速度，除非您能證明否則。小巷狹窄，能見度有限，且經常有行人，因此這個低限制非常重要。'},
  es:{q:'¿Cuál es el límite de velocidad en un callejón en California?',opts:['15 mph','20 mph','25 mph','10 mph'],exp:'El límite de velocidad en cualquier callejón en California es 15 mph. Este es un límite de velocidad prima facie (asumido) — lo que significa que se asume que es la velocidad correcta a menos que pueda demostrar lo contrario. Los callejones son estrechos, tienen visibilidad limitada y frecuentemente tienen peatones, por lo que este límite bajo es crítico.'},
  ans:0
},
{
  id:163, cat:'speed',
  en:{q:'When must you drive below the posted speed limit?',opts:['Only when road signs indicate lower speeds','Only in rain or fog','Whenever conditions make it unsafe to drive at the posted speed','The posted limit is always the correct speed'],exp:'The Basic Speed Law requires you to drive at a speed that is safe for current conditions — even if that is below the posted limit. In heavy rain, fog, ice, or heavy traffic, you may need to drive well below the posted speed. The posted limit is a maximum, not a target.'},
  zh:{q:'什么时候必须以低于标志速度行驶？',opts:['仅当道路标志指示更低速度时','仅在雨天或雾天','当条件使以标志速度行驶不安全时','标志限速始终是正确速度'],exp:'基本速度法要求您以适合当前条件的安全速度行驶——即使低于标志限速。在大雨、浓雾、结冰或大堵车中，您可能需要远低于标志速度行驶。标志限速是最高限速，不是目标速度。'},
  zhTW:{q:'什麼時候必須以低於標誌速度行駛？',opts:['僅當道路標誌指示更低速度時','僅在雨天或霧天','當條件使以標誌速度行駛不安全時','標誌限速始終是正確速度'],exp:'基本速度法要求您以適合當前條件的安全速度行駛——即使低於標誌限速。在大雨、濃霧、結冰或大堵車中，您可能需要遠低於標誌速度行駛。標誌限速是最高限速，不是目標速度。'},
  es:{q:'¿Cuándo debe conducir por debajo del límite de velocidad publicado?',opts:['Solo cuando las señales viales indican velocidades más bajas','Solo en lluvia o niebla','Siempre que las condiciones hagan inseguro conducir a la velocidad publicada','El límite publicado es siempre la velocidad correcta'],exp:'La Ley de Velocidad Básica requiere que conduzca a una velocidad que sea segura para las condiciones actuales — incluso si eso está por debajo del límite publicado. En lluvia intensa, niebla, hielo o tráfico pesado, puede necesitar conducir muy por debajo de la velocidad publicada. El límite publicado es un máximo, no un objetivo.'},
  ans:2
},
{
  id:164, cat:'speed',
  en:{q:'What is the speed limit within 500 feet of a school while children are present?',opts:['15 mph','20 mph','25 mph','35 mph'],exp:'The prima facie speed limit within 500–1,000 feet of a school while children are present or going to/from school is 25 mph. Near many schools, you will see a posted 25 mph school zone sign. Always watch for children and be prepared to stop.'},
  zh:{q:'在有儿童时，学校500英尺范围内的速度限制是多少？',opts:['15英里/小时','20英里/小时','25英里/小时','35英里/小时'],exp:'在有儿童上下学时，学校500-1,000英尺范围内的初步表面速度限制为25英里/小时。在许多学校附近，您会看到标示25英里/小时的学校区域标志。始终注意儿童并准备停车。'},
  zhTW:{q:'在有兒童時，學校500英尺範圍內的速度限制是多少？',opts:['15英里/小時','20英里/小時','25英里/小時','35英里/小時'],exp:'在有兒童上下學時，學校500-1,000英尺範圍內的初步表面速度限制為25英里/小時。在許多學校附近，您會看到標示25英里/小時的學校區域標誌。始終注意兒童並準備停車。'},
  es:{q:'¿Cuál es el límite de velocidad dentro de 500 pies de una escuela mientras hay niños presentes?',opts:['15 mph','20 mph','25 mph','35 mph'],exp:'El límite de velocidad prima facie dentro de 500–1,000 pies de una escuela mientras hay niños presentes o yendo a/desde la escuela es 25 mph. Cerca de muchas escuelas, verá una señal de zona escolar publicada de 25 mph. Siempre esté atento a los niños y prepárese para detenerse.'},
  ans:2
},
{
  id:165, cat:'speed',
  en:{q:'How far should you be able to stop when driving at night using low beams?',opts:['Within 150 feet','Within 200 feet','Within the distance your headlights illuminate — about 200 feet','Within 300 feet'],exp:'Your headlights on low beam illuminate about 200 feet ahead. You should never drive so fast that you cannot stop within the distance you can see ahead — this is called "overdriving your headlights." At night with low beams, you should be able to stop within 200 feet.'},
  zh:{q:'夜间使用近光灯行驶时，您应该能在多远距离内停车？',opts:['150英尺以内','200英尺以内','在您的车头灯照射范围内——大约200英尺','300英尺以内'],exp:'近光灯大约照射前方200英尺。您驾驶时应该永远不要超过能在前方能见范围内停车的速度——这称为"超越车灯行驶"。夜间使用近光灯时，应能在200英尺内停车。'},
  zhTW:{q:'夜間使用近光燈行駛時，您應該能在多遠距離內停車？',opts:['150英尺以內','200英尺以內','在您的車頭燈照射範圍內——大約200英尺','300英尺以內'],exp:'近光燈大約照射前方200英尺。您駕駛時應該永遠不要超過能在前方能見範圍內停車的速度——這稱為「超越車燈行駛」。夜間使用近光燈時，應能在200英尺內停車。'},
  es:{q:'¿A qué distancia debe poder detenerse al conducir de noche usando luces bajas?',opts:['Dentro de 150 pies','Dentro de 200 pies','Dentro de la distancia que iluminan sus faros — alrededor de 200 pies','Dentro de 300 pies'],exp:'Sus faros en luces bajas iluminan unos 200 pies hacia adelante. Nunca debe conducir tan rápido que no pueda detenerse dentro de la distancia que puede ver hacia adelante — esto se llama "superar sus faros". De noche con luces bajas, debe poder detenerse dentro de 200 pies.'},
  ans:2
},
{
  id:166, cat:'speed',
  en:{q:'You are driving on a highway with a posted 65 mph speed limit during a dense fog. What speed should you drive?',opts:['65 mph — the posted limit','55 mph — a safe reduction','Whatever speed is safe for current visibility and road conditions','50 mph — the recommended fog speed'],exp:'The Basic Speed Law requires you to drive at a speed safe for conditions, regardless of the posted limit. In dense fog, you may need to drive much slower than the posted limit. Use low beams, increase following distance, and reduce speed until you can see and stop safely.'},
  zh:{q:'您在浓雾中在标志限速65英里/小时的高速公路上行驶。您应该以什么速度行驶？',opts:['65英里/小时——标志限速','55英里/小时——安全降速','适合当前能见度和路况的安全速度','50英里/小时——推荐雾天速度'],exp:'基本速度法要求您以适合条件的安全速度行驶，无论标志限速如何。在浓雾中，您可能需要远低于标志限速行驶。使用近光灯，增加跟车距离，降低速度直到您能安全看到和停车。'},
  zhTW:{q:'您在濃霧中在標誌限速65英里/小時的高速公路上行駛。您應該以什麼速度行駛？',opts:['65英里/小時——標誌限速','55英里/小時——安全降速','適合當前能見度和路況的安全速度','50英里/小時——推薦霧天速度'],exp:'基本速度法要求您以適合條件的安全速度行駛，無論標誌限速如何。在濃霧中，您可能需要遠低於標誌限速行駛。使用近光燈，增加跟車距離，降低速度直到您能安全看到和停車。'},
  es:{q:'Está conduciendo en una autopista con límite publicado de 65 mph durante niebla densa. ¿A qué velocidad debe conducir?',opts:['65 mph — el límite publicado','55 mph — una reducción segura','Cualquier velocidad que sea segura para la visibilidad actual y condiciones de carretera','50 mph — la velocidad recomendada para niebla'],exp:'La Ley de Velocidad Básica requiere que conduzca a una velocidad segura para las condiciones, independientemente del límite publicado. En niebla densa, puede necesitar conducir mucho más despacio que el límite publicado. Use luces bajas, aumente la distancia de seguimiento y reduzca la velocidad hasta que pueda ver y detenerse de forma segura.'},
  ans:2
},
{
  id:167, cat:'speed',
  en:{q:'What is the minimum speed law in California?',opts:['You must drive at least 15 mph on any road','You must not drive so slowly that you block traffic without a legitimate reason','There is no minimum speed law','You must drive at least half the posted speed limit'],exp:'California has a "Minimum Speed Law" — you must not drive so slowly that you impede or block normal traffic flow, unless conditions require it (weather, safety, etc.). Driving too slowly can be as dangerous as speeding, as it creates unpredictable situations for other drivers.'},
  zh:{q:'加州的最低速度法律是什么？',opts:['在任何道路上必须至少行驶15英里/小时','没有合理原因不得行驶得太慢以至于阻塞交通','没有最低速度法律','必须至少以标志限速的一半行驶'],exp:'加州有"最低速度法"——没有正当原因（天气、安全等），不得行驶得过于缓慢而妨碍或阻塞正常交通流。行驶太慢可能与超速同样危险，因为它会给其他驾驶者创造不可预测的情况。'},
  zhTW:{q:'加州的最低速度法律是什麼？',opts:['在任何道路上必須至少行駛15英里/小時','沒有合理原因不得行駛得太慢以至於阻塞交通','沒有最低速度法律','必須至少以標誌限速的一半行駛'],exp:'加州有「最低速度法」——沒有正當原因（天氣、安全等），不得行駛得過於緩慢而妨礙或阻塞正常交通流。行駛太慢可能與超速同樣危險，因為它會給其他駕駛者創造不可預測的情況。'},
  es:{q:'¿Cuál es la ley de velocidad mínima en California?',opts:['Debe conducir al menos 15 mph en cualquier carretera','No debe conducir tan lentamente que bloquee el tráfico sin una razón legítima','No hay ley de velocidad mínima','Debe conducir al menos la mitad del límite de velocidad publicado'],exp:'California tiene una "Ley de Velocidad Mínima" — no debe conducir tan lentamente que impida o bloquee el flujo normal de tráfico, a menos que las condiciones lo requieran (clima, seguridad, etc.). Conducir demasiado lento puede ser tan peligroso como exceder la velocidad, ya que crea situaciones impredecibles para otros conductores.'},
  ans:1
},
{
  id:168, cat:'speed',
  en:{q:'What does "prima facie speed limit" mean in California?',opts:['The absolute maximum speed you may travel','A presumed speed limit that may be exceeded when safe','A speed limit set by local government','A speed limit only enforced during school hours'],exp:'A "prima facie" speed limit is one that is presumed to be safe under normal conditions, but you can exceed it if you can prove it was safe to do so. For example, the 25 mph residential limit is prima facie — in an empty street at 3 AM you might safely drive 30 mph, but you would have to prove it was safe if stopped.'},
  zh:{q:'在加州"初步表面速度限制"是什么意思？',opts:['您可以行驶的绝对最高速度','在安全时可以超过的推定速度限制','由地方政府设定的速度限制','仅在上学时间执行的速度限制'],exp:'"初步表面"速度限制是在正常条件下推定为安全的速度限制，但如果您能证明超速是安全的，可以超过它。例如，住宅区25英里/小时限制是初步表面的——在凌晨3点的空街道上，您可能安全地行驶30英里/小时，但如果被拦截需要证明是安全的。'},
  zhTW:{q:'在加州「初步表面速度限制」是什麼意思？',opts:['您可以行駛的絕對最高速度','在安全時可以超過的推定速度限制','由地方政府設定的速度限制','僅在上學時間執行的速度限制'],exp:'"初步表面"速度限制是在正常條件下推定為安全的速度限制，但如果您能證明超速是安全的，可以超過它。例如，住宅區25英里/小時限制是初步表面的——在凌晨3點的空街道上，您可能安全地行駛30英里/小時，但如果被攔截需要證明是安全的。'},
  es:{q:'¿Qué significa "límite de velocidad prima facie" en California?',opts:['La velocidad máxima absoluta que puede viajar','Un límite de velocidad presumido que puede excederse cuando es seguro','Un límite de velocidad establecido por el gobierno local','Un límite de velocidad solo aplicado durante horas escolares'],exp:'Un límite de velocidad "prima facie" es uno que se presume seguro en condiciones normales, pero puede excederlo si puede demostrar que era seguro hacerlo. Por ejemplo, el límite residencial de 25 mph es prima facie — en una calle vacía a las 3 AM podría conducir de forma segura a 30 mph, pero tendría que demostrar que era seguro si lo detienen.'},
  ans:1
},
{
  id:169, cat:'speed',
  en:{q:'On a two-lane undivided highway in California without a posted limit, what is the maximum speed?',opts:['65 mph','60 mph','55 mph','70 mph'],exp:'On a two-lane undivided highway in California, the maximum speed is 55 mph unless otherwise posted. This is lower than the 65 mph limit on multi-lane highways because two-lane roads have less margin for error and more potential for head-on collisions.'},
  zh:{q:'在加州没有标志限速的双车道无分隔公路上，最高速度是多少？',opts:['65英里/小时','60英里/小时','55英里/小时','70英里/小时'],exp:'在加州的双车道无分隔公路上，除非另有规定，最高速度为55英里/小时。这低于多车道公路的65英里/小时限制，因为双车道道路的容错空间较少，正面碰撞的可能性更高。'},
  zhTW:{q:'在加州沒有標誌限速的雙車道無分隔公路上，最高速度是多少？',opts:['65英里/小時','60英里/小時','55英里/小時','70英里/小時'],exp:'在加州的雙車道無分隔公路上，除非另有規定，最高速度為55英里/小時。這低於多車道公路的65英里/小時限制，因為雙車道道路的容錯空間較少，正面碰撞的可能性更高。'},
  es:{q:'En una autopista de dos carriles sin dividir en California sin límite publicado, ¿cuál es la velocidad máxima?',opts:['65 mph','60 mph','55 mph','70 mph'],exp:'En una autopista de dos carriles sin dividir en California, la velocidad máxima es 55 mph a menos que se indique lo contrario. Esto es menor que el límite de 65 mph en autopistas de múltiples carriles porque las carreteras de dos carriles tienen menos margen de error y más potencial de colisiones frontales.'},
  ans:2
},
{
  id:170, cat:'speed',
  en:{q:'You are cited for speeding 15 mph over the limit on a highway. What is the approximate base fine in California?',opts:['$35','$70','$250 or more','$500'],exp:'Speeding fines in California can be surprisingly high due to penalty assessments and surcharges added on top of the base fine. A citation for going 16–25 mph over the limit typically has a base fine of about $250–$360, but with all assessments the total can exceed $500–$600. Fines increase with higher speeds.'},
  zh:{q:'您在高速公路上被罚款超速15英里/小时。在加州大致的基本罚款是多少？',opts:['$35','$70','$250或更多','$500'],exp:'由于附加评估和附加费，加州的超速罚款可能出乎意料地高。超速16-25英里/小时的罚单基本罚款约为$250-$360，但加上所有评估后总额可超过$500-$600。速度越高，罚款越重。'},
  zhTW:{q:'您在高速公路上被罰款超速15英里/小時。在加州大致的基本罰款是多少？',opts:['$35','$70','$250或更多','$500'],exp:'由於附加評估和附加費，加州的超速罰款可能出乎意料地高。超速16-25英里/小時的罰單基本罰款約為$250-$360，但加上所有評估後總額可超過$500-$600。速度越高，罰款越重。'},
  es:{q:'Le citan por exceso de velocidad de 15 mph sobre el límite en una autopista. ¿Cuál es la multa base aproximada en California?',opts:['$35','$70','$250 o más','$500'],exp:'Las multas por exceso de velocidad en California pueden ser sorprendentemente altas debido a las evaluaciones de penalidad y recargos que se agregan sobre la multa base. Una citación por ir 16–25 mph sobre el límite típicamente tiene una multa base de aproximadamente $250–$360, pero con todas las evaluaciones el total puede superar $500–$600. Las multas aumentan con velocidades más altas.'},
  ans:2
},

// ── Batch 18 · DUI & Drugs (Advanced) · Q171–180 ────────────────────────────
{
  id:171, cat:'dui',
  en:{q:'At what BAC (blood alcohol content) is it illegal to drive a vehicle if you are under 21?',opts:['0.08%','0.05%','0.04%','0.01%'],exp:'California has a "Zero Tolerance" law for drivers under 21. Any measurable BAC of 0.01% or higher will result in a license suspension. For drivers 21 and over, the legal limit is 0.08%. Commercial drivers have a limit of 0.04%.'},
  zh:{q:'21岁以下驾驶员，血液酒精含量（BAC）达到多少就是非法驾驶？',opts:['0.08%','0.05%','0.04%','0.01%'],exp:'加州对21岁以下驾驶员实行"零容忍"法律。任何0.01%或以上的可测量BAC都将导致驾照被暂停。21岁及以上驾驶员的合法限制为0.08%。商业驾驶员的限制为0.04%。'},
  zhTW:{q:'21歲以下駕駛員，血液酒精含量（BAC）達到多少就是非法駕駛？',opts:['0.08%','0.05%','0.04%','0.01%'],exp:'加州對21歲以下駕駛員實行「零容忍」法律。任何0.01%或以上的可測量BAC都將導致駕照被暫停。21歲及以上駕駛員的合法限制為0.08%。商業駕駛員的限制為0.04%。'},
  es:{q:'¿A qué BAC (contenido de alcohol en sangre) es ilegal conducir un vehículo si tiene menos de 21 años?',opts:['0.08%','0.05%','0.04%','0.01%'],exp:'California tiene una ley de "Tolerancia Cero" para conductores menores de 21 años. Cualquier BAC medible de 0.01% o superior resultará en suspensión de licencia. Para conductores de 21 años o más, el límite legal es 0.08%. Los conductores comerciales tienen un límite de 0.04%.'},
  ans:3
},
{
  id:172, cat:'dui',
  en:{q:'What is the minimum license suspension for a first DUI conviction in California?',opts:['1 month','6 months','1 year','2 years'],exp:'For a first DUI conviction in California, your license is suspended for 6 months. Additionally, you may face fines, DUI school, probation, and possibly jail time. If your BAC was 0.16% or higher, penalties are enhanced. Refusing a chemical test results in a separate 1-year suspension.'},
  zh:{q:'在加州首次DUI定罪的最低驾照暂停期是多久？',opts:['1个月','6个月','1年','2年'],exp:'在加州首次DUI定罪后，您的驾照将被暂停6个月。此外，您可能面临罚款、DUI课程、缓刑及可能的监禁时间。如果您的BAC为0.16%或更高，处罚将加重。拒绝化学测试将导致单独的1年暂停。'},
  zhTW:{q:'在加州首次DUI定罪的最低駕照暫停期是多久？',opts:['1個月','6個月','1年','2年'],exp:'在加州首次DUI定罪後，您的駕照將被暫停6個月。此外，您可能面臨罰款、DUI課程、緩刑及可能的監禁時間。如果您的BAC為0.16%或更高，處罰將加重。拒絕化學測試將導致單獨的1年暫停。'},
  es:{q:'¿Cuál es la suspensión mínima de licencia por una primera condena por DUI en California?',opts:['1 mes','6 meses','1 año','2 años'],exp:'Por una primera condena por DUI en California, su licencia se suspende por 6 meses. Además, puede enfrentar multas, escuela de DUI, libertad condicional y posiblemente tiempo en cárcel. Si su BAC fue 0.16% o más alto, las penalizaciones se incrementan. Rechazar una prueba química resulta en una suspensión separada de 1 año.'},
  ans:1
},
{
  id:173, cat:'dui',
  en:{q:'What is "implied consent" in California driving law?',opts:['Your consent to let police search your vehicle','Your agreement to follow all traffic laws','Your automatic consent to chemical testing when lawfully arrested for DUI','Your permission for insurance companies to access your records'],exp:'"Implied consent" means that by holding a California driver\'s license and driving on public roads, you have automatically agreed to submit to a chemical test (breath, blood, or urine) if lawfully arrested for DUI. Refusing the test results in automatic license suspension and enhanced penalties.'},
  zh:{q:'加州驾驶法律中的"默示同意"是什么？',opts:['您同意警察搜查您的车辆','您同意遵守所有交通法律','在因DUI被合法逮捕时，您自动同意接受化学测试','您允许保险公司查阅您的记录'],exp:'"默示同意"意味着通过持有加州驾驶执照并在公共道路上驾驶，您已自动同意在因DUI被合法逮捕时接受化学测试（呼气、血液或尿液）。拒绝测试会导致驾照自动暂停和加重处罚。'},
  zhTW:{q:'加州駕駛法律中的「默示同意」是什麼？',opts:['您同意警察搜查您的車輛','您同意遵守所有交通法律','在因DUI被合法逮捕時，您自動同意接受化學測試','您允許保險公司查閱您的記錄'],exp:'"默示同意"意味著通過持有加州駕駛執照並在公共道路上駕駛，您已自動同意在因DUI被合法逮捕時接受化學測試（呼氣、血液或尿液）。拒絕測試會導致駕照自動暫停和加重處罰。'},
  es:{q:'¿Qué es el "consentimiento implícito" en la ley de conducción de California?',opts:['Su consentimiento para dejar que la policía registre su vehículo','Su acuerdo de seguir todas las leyes de tráfico','Su consentimiento automático a las pruebas químicas cuando es arrestado legalmente por DUI','Su permiso para que las compañías de seguros accedan a sus registros'],exp:'"Consentimiento implícito" significa que al tener una licencia de conducir de California y conducir en carreteras públicas, ha acordado automáticamente someterse a una prueba química (aliento, sangre u orina) si es arrestado legalmente por DUI. Rechazar la prueba resulta en suspensión automática de licencia y penalizaciones mejoradas.'},
  ans:2
},
{
  id:174, cat:'dui',
  en:{q:'How does marijuana (cannabis) affect your ability to drive?',opts:['It improves reaction time and focus','It has no effect on driving ability','It can impair judgment, reaction time, and coordination — making driving dangerous','It only affects driving if combined with alcohol'],exp:'Marijuana impairs driving just as alcohol does. THC affects judgment, reaction time, coordination, and concentration. In California, it is illegal to drive under the influence of marijuana. You can be arrested for DUI even if you have a medical marijuana card.'},
  zh:{q:'大麻（cannabis）如何影响您的驾驶能力？',opts:['它改善反应时间和注意力','对驾驶能力没有影响','它可以损害判断力、反应时间和协调能力——使驾驶变得危险','只有与酒精结合时才影响驾驶'],exp:'大麻与酒精一样会损害驾驶能力。THC影响判断力、反应时间、协调能力和注意力。在加州，在大麻影响下驾驶是非法的。即使您持有医疗大麻卡，也可能因DUI被捕。'},
  zhTW:{q:'大麻（cannabis）如何影響您的駕駛能力？',opts:['它改善反應時間和注意力','對駕駛能力沒有影響','它可以損害判斷力、反應時間和協調能力——使駕駛變得危險','只有與酒精結合時才影響駕駛'],exp:'大麻與酒精一樣會損害駕駛能力。THC影響判斷力、反應時間、協調能力和注意力。在加州，在大麻影響下駕駛是非法的。即使您持有醫療大麻卡，也可能因DUI被捕。'},
  es:{q:'¿Cómo afecta la marihuana (cannabis) su capacidad de conducir?',opts:['Mejora el tiempo de reacción y el enfoque','No tiene efecto en la capacidad de conducir','Puede deteriorar el juicio, el tiempo de reacción y la coordinación — haciendo peligroso conducir','Solo afecta la conducción si se combina con alcohol'],exp:'La marihuana deteriora la conducción igual que el alcohol. El THC afecta el juicio, el tiempo de reacción, la coordinación y la concentración. En California, es ilegal conducir bajo la influencia de marihuana. Puede ser arrestado por DUI incluso si tiene una tarjeta de marihuana medicinal.'},
  ans:2
},
{
  id:175, cat:'dui',
  en:{q:'If convicted of DUI and someone was killed, what charge could you face?',opts:['Misdemeanor DUI only','Felony DUI with mandatory prison time','Traffic infraction','Civil liability only'],exp:'If you drive under the influence and kill someone, you can be charged with second-degree murder or vehicular manslaughter with gross negligence in California. This can result in 15 years to life in prison. California has a "Watson Murder" rule — once convicted of DUI, you are notified that future DUI causing death may result in murder charges.'},
  zh:{q:'如果DUI定罪且有人死亡，您可能面临什么指控？',opts:['仅轻罪DUI','强制监禁的重罪DUI','交通违规','仅民事责任'],exp:'如果您在酒驾影响下驾驶并导致他人死亡，在加州可能被指控为二级谋杀罪或严重过失车辆伤亡罪。这可能导致15年至终身监禁。加州有"沃森谋杀"规则——一旦DUI定罪，您将被通知未来导致死亡的DUI可能导致谋杀指控。'},
  zhTW:{q:'如果DUI定罪且有人死亡，您可能面臨什麼指控？',opts:['僅輕罪DUI','強制監禁的重罪DUI','交通違規','僅民事責任'],exp:'如果您在酒駕影響下駕駛並導致他人死亡，在加州可能被指控為二級謀殺罪或嚴重過失車輛傷亡罪。這可能導致15年至終身監禁。加州有「沃森謀殺」規則——一旦DUI定罪，您將被通知未來導致死亡的DUI可能導致謀殺指控。'},
  es:{q:'Si es condenado por DUI y alguien murió, ¿qué cargo podría enfrentar?',opts:['Solo DUI de delito menor','DUI de delito grave con tiempo obligatorio en prisión','Infracción de tráfico','Solo responsabilidad civil'],exp:'Si conduce bajo la influencia y mata a alguien, puede ser acusado de asesinato en segundo grado o homicidio vehicular con negligencia grave en California. Esto puede resultar en 15 años a cadena perpetua en prisión. California tiene una regla de "Asesinato Watson" — una vez condenado por DUI, se le notifica que futuros DUI que causen muerte pueden resultar en cargos de asesinato.'},
  ans:1
},
{
  id:176, cat:'dui',
  en:{q:'Does drinking coffee or eating food help sober you up after drinking alcohol?',opts:['Yes — coffee counteracts alcohol','Yes — food absorbs alcohol in your stomach','No — only time allows your body to process alcohol','Yes — exercise speeds up alcohol metabolism'],exp:'Nothing speeds up the metabolism of alcohol in your body — only time works. Coffee may make you feel more alert but does not lower your BAC or improve your driving ability. Food eaten before drinking slows alcohol absorption, but once alcohol is in your blood, only time will reduce it.'},
  zh:{q:'饮酒后喝咖啡或吃东西能帮助清醒吗？',opts:['是的——咖啡能抵消酒精','是的——食物会吸收胃中的酒精','不——只有时间才能让您的身体代谢酒精','是的——运动加速酒精代谢'],exp:'没有任何东西能加速您体内酒精的代谢——只有时间有效。咖啡可能让您感觉更清醒，但不会降低您的BAC或改善驾驶能力。饮酒前吃东西会减慢酒精吸收，但一旦酒精进入血液，只有时间才能降低它。'},
  zhTW:{q:'飲酒後喝咖啡或吃東西能幫助清醒嗎？',opts:['是的——咖啡能抵消酒精','是的——食物會吸收胃中的酒精','不——只有時間才能讓您的身體代謝酒精','是的——運動加速酒精代謝'],exp:'沒有任何東西能加速您體內酒精的代謝——只有時間有效。咖啡可能讓您感覺更清醒，但不會降低您的BAC或改善駕駛能力。飲酒前吃東西會減慢酒精吸收，但一旦酒精進入血液，只有時間才能降低它。'},
  es:{q:'¿Beber café o comer alimentos ayuda a sobriarse después de beber alcohol?',opts:['Sí — el café contrarresta el alcohol','Sí — los alimentos absorben el alcohol en su estómago','No — solo el tiempo permite que su cuerpo procese el alcohol','Sí — el ejercicio acelera el metabolismo del alcohol'],exp:'Nada acelera el metabolismo del alcohol en su cuerpo — solo el tiempo funciona. El café puede hacerle sentir más alerta pero no reduce su BAC ni mejora su capacidad de conducir. Los alimentos comidos antes de beber ralentizan la absorción del alcohol, pero una vez que el alcohol está en su sangre, solo el tiempo lo reducirá.'},
  ans:2
},
{
  id:177, cat:'dui',
  en:{q:'Can prescription medications cause you to be charged with DUI in California?',opts:['No — prescription drugs are legal','Only if combined with alcohol','Yes — any drug that impairs driving can result in a DUI charge','Only illegal drugs can cause a DUI charge'],exp:'In California, DUI laws apply to any substance that impairs your ability to drive — including legal prescription medications. If a prescription drug impairs your judgment, reaction time, or coordination, you can be charged with DUI under Vehicle Code 23152(f) even though the medication was prescribed.'},
  zh:{q:'处方药会导致您在加州被指控DUI吗？',opts:['不——处方药是合法的','只有与酒精结合时','是的——任何损害驾驶的药物都可能导致DUI指控','只有非法药物才能导致DUI指控'],exp:'在加州，DUI法律适用于任何损害驾驶能力的物质——包括合法处方药。如果处方药损害了您的判断力、反应时间或协调能力，即使药物是处方的，您也可能根据《车辆法典》23152(f)被指控DUI。'},
  zhTW:{q:'處方藥會導致您在加州被指控DUI嗎？',opts:['不——處方藥是合法的','只有與酒精結合時','是的——任何損害駕駛的藥物都可能導致DUI指控','只有非法藥物才能導致DUI指控'],exp:'在加州，DUI法律適用於任何損害駕駛能力的物質——包括合法處方藥。如果處方藥損害了您的判斷力、反應時間或協調能力，即使藥物是處方的，您也可能根據《車輛法典》23152(f)被指控DUI。'},
  es:{q:'¿Los medicamentos recetados pueden causarle ser acusado de DUI en California?',opts:['No — los medicamentos recetados son legales','Solo si se combinan con alcohol','Sí — cualquier droga que deteriore la conducción puede resultar en un cargo de DUI','Solo las drogas ilegales pueden causar un cargo de DUI'],exp:'En California, las leyes de DUI aplican a cualquier sustancia que deteriore su capacidad de conducir — incluyendo medicamentos recetados legales. Si un medicamento recetado deteriora su juicio, tiempo de reacción o coordinación, puede ser acusado de DUI bajo el Código de Vehículos 23152(f) aunque el medicamento haya sido recetado.'},
  ans:2
},
{
  id:178, cat:'dui',
  en:{q:'What happens to your car insurance after a DUI conviction in California?',opts:['Nothing changes','Rates may increase slightly for 1 year','Rates typically increase dramatically and you may need an SR-22 for 3 years','Insurance is automatically cancelled'],exp:'After a DUI conviction in California, you will likely need to file an SR-22 form (proof of insurance) with the DMV for 3 years. Your insurance rates will typically increase significantly — often 50–100% or more. Some insurers may cancel your policy, and you may need to obtain high-risk insurance.'},
  zh:{q:'在加州DUI定罪后，您的汽车保险会发生什么？',opts:['什么都不变','费率可能稍微上涨1年','费率通常大幅上涨，您可能需要提供SR-22保险3年','保险会自动取消'],exp:'在加州DUI定罪后，您可能需要向DMV提交SR-22表格（保险证明）3年。您的保险费率通常会大幅上涨——通常增加50-100%或更多。一些保险公司可能取消您的保单，您可能需要获得高风险保险。'},
  zhTW:{q:'在加州DUI定罪後，您的汽車保險會發生什麼？',opts:['什麼都不變','費率可能稍微上漲1年','費率通常大幅上漲，您可能需要提供SR-22保險3年','保險會自動取消'],exp:'在加州DUI定罪後，您可能需要向DMV提交SR-22表格（保險證明）3年。您的保險費率通常會大幅上漲——通常增加50-100%或更多。一些保險公司可能取消您的保單，您可能需要獲得高風險保險。'},
  es:{q:'¿Qué le sucede a su seguro de automóvil después de una condena por DUI en California?',opts:['Nada cambia','Las tasas pueden aumentar ligeramente por 1 año','Las tasas típicamente aumentan dramáticamente y puede necesitar un SR-22 por 3 años','El seguro se cancela automáticamente'],exp:'Después de una condena por DUI en California, probablemente necesitará presentar un formulario SR-22 (prueba de seguro) con el DMV por 3 años. Sus tasas de seguro típicamente aumentarán significativamente — a menudo 50–100% o más. Algunos aseguradores pueden cancelar su póliza y puede necesitar obtener seguro de alto riesgo.'},
  ans:2
},
{
  id:179, cat:'dui',
  en:{q:'What is an Ignition Interlock Device (IID)?',opts:['A GPS tracker installed after a DUI','A breathalyzer connected to your ignition that prevents starting the car if alcohol is detected','A device that limits your maximum speed after a DUI','A dash camera required after a DUI conviction'],exp:'An Ignition Interlock Device (IID) is a breathalyzer connected to your car\'s ignition. You must blow into it before starting the car. If alcohol above a set threshold is detected, the car will not start. In California, IIDs are often required after DUI convictions.'},
  zh:{q:'什么是点火互锁装置（IID）？',opts:['DUI后安装的GPS追踪器','连接到点火装置的呼气测试仪，如果检测到酒精则阻止启动汽车','DUI后限制您最高速度的设备','DUI定罪后要求安装的行车记录仪'],exp:'点火互锁装置（IID）是连接到汽车点火系统的呼气测试仪。您必须在启动汽车前吹气测试。如果检测到超过设定阈值的酒精，汽车将无法启动。在加州，DUI定罪后通常需要安装IID。'},
  zhTW:{q:'什麼是點火互鎖裝置（IID）？',opts:['DUI後安裝的GPS追蹤器','連接到點火裝置的呼氣測試儀，如果檢測到酒精則阻止啟動汽車','DUI後限制您最高速度的設備','DUI定罪後要求安裝的行車記錄儀'],exp:'點火互鎖裝置（IID）是連接到汽車點火系統的呼氣測試儀。您必須在啟動汽車前吹氣測試。如果檢測到超過設定閾值的酒精，汽車將無法啟動。在加州，DUI定罪後通常需要安裝IID。'},
  es:{q:'¿Qué es un Dispositivo Interbloqueo de Encendido (IID)?',opts:['Un rastreador GPS instalado después de un DUI','Un alcoholímetro conectado a su encendido que evita arrancar el auto si se detecta alcohol','Un dispositivo que limita su velocidad máxima después de un DUI','Una cámara del tablero requerida después de una condena por DUI'],exp:'Un Dispositivo Interbloqueo de Encendido (IID) es un alcoholímetro conectado al encendido de su auto. Debe soplar en él antes de arrancar el auto. Si se detecta alcohol por encima de un umbral establecido, el auto no arrancará. En California, los IID a menudo se requieren después de condenas por DUI.'},
  ans:1
},
{
  id:180, cat:'dui',
  en:{q:'What is the legal BAC limit for operating a commercial vehicle in California?',opts:['0.08%','0.04%','0.02%','0.01%'],exp:'The legal BAC limit for commercial vehicle operators in California is 0.04% — half the regular 0.08% limit. This lower limit applies because commercial drivers operate larger, heavier vehicles that are harder to control. A conviction at 0.04% will result in loss of commercial driving privileges.'},
  zh:{q:'在加州驾驶商业车辆的合法BAC限制是多少？',opts:['0.08%','0.04%','0.02%','0.01%'],exp:'加州商业车辆驾驶员的合法BAC限制为0.04%——是常规0.08%限制的一半。这个较低的限制适用是因为商业驾驶员驾驶更大、更重的车辆，更难控制。在0.04%下被定罪将导致失去商业驾驶特权。'},
  zhTW:{q:'在加州駕駛商業車輛的合法BAC限制是多少？',opts:['0.08%','0.04%','0.02%','0.01%'],exp:'加州商業車輛駕駛員的合法BAC限制為0.04%——是常規0.08%限制的一半。這個較低的限制適用是因為商業駕駛員駕駛更大、更重的車輛，更難控制。在0.04%下被定罪將導致失去商業駕駛特權。'},
  es:{q:'¿Cuál es el límite legal de BAC para operar un vehículo comercial en California?',opts:['0.08%','0.04%','0.02%','0.01%'],exp:'El límite legal de BAC para operadores de vehículos comerciales en California es 0.04% — la mitad del límite regular de 0.08%. Este límite más bajo aplica porque los conductores comerciales operan vehículos más grandes y pesados que son más difíciles de controlar. Una condena a 0.04% resultará en pérdida de privilegios de conducción comercial.'},
  ans:1
},

// ── Batch 19 · Parking (Advanced) · Q181–190 ────────────────────────────────
{
  id:181, cat:'parking',
  en:{q:'How far from a fire hydrant must you park in California?',opts:['10 feet','15 feet','20 feet','25 feet'],exp:'You must park at least 15 feet away from a fire hydrant in California. This distance is required on both sides of the hydrant to ensure fire fighters can access it quickly in an emergency. Parking closer than 15 feet is illegal even briefly.'},
  zh:{q:'在加州必须距离消防栓多远才能停车？',opts:['10英尺','15英尺','20英尺','25英尺'],exp:'在加州，您必须在消防栓至少15英尺外停车。这个距离要求适用于消防栓两侧，以确保消防员在紧急情况下能快速访问。即使是短暂停车，距离15英尺以内也是非法的。'},
  zhTW:{q:'在加州必須距離消防栓多遠才能停車？',opts:['10英尺','15英尺','20英尺','25英尺'],exp:'在加州，您必須在消防栓至少15英尺外停車。這個距離要求適用於消防栓兩側，以確保消防員在緊急情況下能快速訪問。即使是短暫停車，距離15英尺以內也是非法的。'},
  es:{q:'¿A qué distancia de un hidrante de incendios debe estacionar en California?',opts:['10 pies','15 pies','20 pies','25 pies'],exp:'Debe estacionar al menos 15 pies de distancia de un hidrante de incendios en California. Esta distancia se requiere en ambos lados del hidrante para asegurar que los bomberos puedan acceder a él rápidamente en una emergencia. Estacionar a menos de 15 pies es ilegal incluso brevemente.'},
  ans:1
},
{
  id:182, cat:'parking',
  en:{q:'How far from a crosswalk must you park at an intersection?',opts:['5 feet','10 feet','15 feet','20 feet'],exp:'You must not park within 20 feet of a crosswalk at an intersection. This keeps the area clear so drivers can see pedestrians who are about to cross, and so pedestrians can see approaching traffic. Parking closer can block sight lines and create dangerous conditions.'},
  zh:{q:'在路口，您必须距离人行横道多远才能停车？',opts:['5英尺','10英尺','15英尺','20英尺'],exp:'在路口，您不得在人行横道20英尺以内停车。这是为了保持区域畅通，使驾驶者能看到即将过街的行人，行人也能看到靠近的车辆。停车过近会阻塞视线并造成危险情况。'},
  zhTW:{q:'在路口，您必須距離人行橫道多遠才能停車？',opts:['5英尺','10英尺','15英尺','20英尺'],exp:'在路口，您不得在人行橫道20英尺以內停車。這是為了保持區域暢通，使駕駛者能看到即將過街的行人，行人也能看到靠近的車輛。停車過近會阻塞視線並造成危險情況。'},
  es:{q:'¿A qué distancia de un cruce peatonal debe estacionar en una intersección?',opts:['5 pies','10 pies','15 pies','20 pies'],exp:'No debe estacionar dentro de 20 pies de un cruce peatonal en una intersección. Esto mantiene el área despejada para que los conductores puedan ver a los peatones que están a punto de cruzar, y para que los peatones puedan ver el tráfico que se aproxima. Estacionar más cerca puede bloquear las líneas de visión y crear condiciones peligrosas.'},
  ans:3
},
{
  id:183, cat:'parking',
  en:{q:'What do yellow curb markings indicate?',opts:['No parking at any time','Loading zone — stop only for loading/unloading','Parking for disabled persons only','Parking for 30 minutes'],exp:'Yellow curb markings indicate a loading zone. You may stop only for loading or unloading of passengers or freight. The time limit may vary. In most areas, you cannot park and leave the vehicle — a driver must remain with the vehicle. Commercial vehicles may have longer time allowances.'},
  zh:{q:'黄色路缘标志表示什么？',opts:['任何时候都不能停车','装卸区——仅限装卸停车','仅限残障人士停车','允许停车30分钟'],exp:'黄色路缘标志表示装卸区。您只能在装卸乘客或货物时停车。时间限制可能有所不同。在大多数地区，您不能停车离开车辆——驾驶者必须留在车辆旁边。商业车辆可能有更长的允许时间。'},
  zhTW:{q:'黃色路緣標誌表示什麼？',opts:['任何時候都不能停車','裝卸區——僅限裝卸停車','僅限殘障人士停車','允許停車30分鐘'],exp:'黃色路緣標誌表示裝卸區。您只能在裝卸乘客或貨物時停車。時間限制可能有所不同。在大多數地區，您不能停車離開車輛——駕駛者必須留在車輛旁邊。商業車輛可能有更長的允許時間。'},
  es:{q:'¿Qué indican las marcas de bordillo amarillas?',opts:['Sin estacionamiento en ningún momento','Zona de carga — detenga solo para cargar/descargar','Estacionamiento solo para personas discapacitadas','Estacionamiento por 30 minutos'],exp:'Las marcas de bordillo amarillas indican una zona de carga. Solo puede detenerse para cargar o descargar pasajeros o carga. El límite de tiempo puede variar. En la mayoría de las áreas, no puede estacionar y dejar el vehículo — un conductor debe permanecer con el vehículo. Los vehículos comerciales pueden tener permisos de tiempo más largos.'},
  ans:1
},
{
  id:184, cat:'parking',
  en:{q:'What do red curb markings mean?',opts:['Fire lane — no stopping at any time','Loading zone for emergency vehicles only','Parking for 15 minutes only','No parking from 7am to 6pm'],exp:'Red curb markings mean absolutely no stopping, standing, or parking at any time. Red curbs typically mark fire lanes, bus stops, and other critical no-stop zones. They apply 24 hours a day, 7 days a week, regardless of whether there are signs.'},
  zh:{q:'红色路缘标志意味着什么？',opts:['消防通道——任何时候都不能停靠','仅限紧急车辆的装卸区','仅限停车15分钟','早7点到下午6点禁止停车'],exp:'红色路缘标志意味着任何时候都绝对禁止停车、站立或停放。红色路缘通常标记消防通道、公交站和其他关键禁止停靠区域。它们全天24小时、每周7天都有效，无论是否有标志。'},
  zhTW:{q:'紅色路緣標誌意味著什麼？',opts:['消防通道——任何時候都不能停靠','僅限緊急車輛的裝卸區','僅限停車15分鐘','早7點到下午6點禁止停車'],exp:'紅色路緣標誌意味著任何時候都絕對禁止停車、站立或停放。紅色路緣通常標記消防通道、公交站和其他關鍵禁止停靠區域。它們全天24小時、每週7天都有效，無論是否有標誌。'},
  es:{q:'¿Qué significan las marcas de bordillo rojo?',opts:['Carril de incendios — sin detención en ningún momento','Zona de carga solo para vehículos de emergencia','Estacionamiento solo por 15 minutos','Sin estacionamiento de 7am a 6pm'],exp:'Las marcas de bordillo rojo significan absolutamente ninguna detención, parada o estacionamiento en ningún momento. Los bordillos rojos típicamente marcan carriles de incendios, paradas de autobús y otras zonas críticas de no detenerse. Aplican 24 horas al día, 7 días a la semana, independientemente de si hay señales.'},
  ans:0
},
{
  id:185, cat:'parking',
  en:{q:'What do blue curb markings indicate?',opts:['Bus stop area','Police parking only','Parking reserved for disabled persons with a placard or plate','Permit parking only'],exp:'Blue curb markings indicate parking reserved for persons with disabilities who have a disabled person placard (DP) or disabled veteran (DV) license plate. You must display a valid placard or qualifying plate to park in these spaces. Parking illegally in a blue zone carries heavy fines.'},
  zh:{q:'蓝色路缘标志表示什么？',opts:['公交站区域','仅限警察停车','为持有残障证或车牌的残障人士保留的停车位','仅限许可证停车'],exp:'蓝色路缘标志表示为持有残障人士标牌（DP）或残障退伍军人（DV）车牌的残障人士保留的停车位。您必须展示有效标牌或符合条件的车牌才能在这些位置停车。在蓝色区域违规停车面临高额罚款。'},
  zhTW:{q:'藍色路緣標誌表示什麼？',opts:['公交站區域','僅限警察停車','為持有殘障證或車牌的殘障人士保留的停車位','僅限許可證停車'],exp:'藍色路緣標誌表示為持有殘障人士標牌（DP）或殘障退伍軍人（DV）車牌的殘障人士保留的停車位。您必須展示有效標牌或符合條件的車牌才能在這些位置停車。在藍色區域違規停車面臨高額罰款。'},
  es:{q:'¿Qué indican las marcas de bordillo azul?',opts:['Área de parada de autobús','Estacionamiento solo para policías','Estacionamiento reservado para personas discapacitadas con placa o matrícula','Solo estacionamiento con permiso'],exp:'Las marcas de bordillo azul indican estacionamiento reservado para personas con discapacidades que tienen una placa de persona discapacitada (DP) o matrícula de veterano discapacitado (DV). Debe mostrar una placa válida o matrícula que califique para estacionar en estos espacios. Estacionar ilegalmente en una zona azul conlleva fuertes multas.'},
  ans:2
},
{
  id:186, cat:'parking',
  en:{q:'How far from a stop sign must you park?',opts:['10 feet','20 feet','30 feet','50 feet'],exp:'You must not park within 30 feet of a stop sign (or traffic signal or yield sign) at an intersection. This distance is required to ensure drivers approaching the intersection can see the sign clearly and have time to respond. It also allows pedestrians and other drivers to see traffic.'},
  zh:{q:'您必须距离停车标志多远才能停车？',opts:['10英尺','20英尺','30英尺','50英尺'],exp:'在路口，您不得在停车标志（或交通信号或让行标志）30英尺以内停车。这个距离是为了确保靠近路口的驾驶者能清楚看到标志并有时间反应。它也让行人和其他驾驶者能看到交通情况。'},
  zhTW:{q:'您必須距離停車標誌多遠才能停車？',opts:['10英尺','20英尺','30英尺','50英尺'],exp:'在路口，您不得在停車標誌（或交通信號或讓行標誌）30英尺以內停車。這個距離是為了確保靠近路口的駕駛者能清楚看到標誌並有時間反應。它也讓行人和其他駕駛者能看到交通情況。'},
  es:{q:'¿A qué distancia de una señal de stop debe estacionar?',opts:['10 pies','20 pies','30 pies','50 pies'],exp:'No debe estacionar dentro de 30 pies de una señal de stop (o semáforo o señal de ceder el paso) en una intersección. Esta distancia se requiere para asegurar que los conductores que se aproximan a la intersección puedan ver la señal claramente y tengan tiempo para responder. También permite a los peatones y otros conductores ver el tráfico.'},
  ans:2
},
{
  id:187, cat:'parking',
  en:{q:'You park on a steep uphill grade without a curb. Which way do you turn your wheels?',opts:['Toward the right (toward the road edge)','To the left','Straight ahead','It does not matter'],exp:'When parking uphill WITHOUT a curb, turn your wheels toward the right (toward the edge of the road/shoulder). If the car rolls, it will roll off the road rather than into traffic. This is the opposite of parking uphill WITH a curb, where you turn wheels away from the curb.'},
  zh:{q:'您在没有路缘的陡坡上坡处停车。您将车轮转向哪边？',opts:['向右（朝向路边缘）','向左','直行','无所谓'],exp:'在没有路缘的上坡停车时，将车轮转向右（朝向路面边缘/路肩）。如果车辆滑动，它将滚向路边而不是滚入交通中。这与在有路缘的上坡停车相反，有路缘时车轮偏离路缘。'},
  zhTW:{q:'您在沒有路緣的陡坡上坡處停車。您將車輪轉向哪邊？',opts:['向右（朝向路邊緣）','向左','直行','無所謂'],exp:'在沒有路緣的上坡停車時，將車輪轉向右（朝向路面邊緣/路肩）。如果車輛滑動，它將滾向路邊而不是滾入交通中。這與在有路緣的上坡停車相反，有路緣時車輪偏離路緣。'},
  es:{q:'Estaciona en una pendiente empinada cuesta arriba sin bordillo. ¿En qué dirección gira sus ruedas?',opts:['Hacia la derecha (hacia el borde de la carretera)','Hacia la izquierda','Recto hacia adelante','No importa'],exp:'Al estacionar cuesta arriba SIN bordillo, gire sus ruedas hacia la derecha (hacia el borde de la carretera/arcén). Si el auto rueda, rodará fuera de la carretera en lugar de hacia el tráfico. Esto es lo opuesto a estacionar cuesta arriba CON bordillo, donde gira las ruedas alejadas del bordillo.'},
  ans:0
},
{
  id:188, cat:'parking',
  en:{q:'When is it legal to double-park in California?',opts:['When you are only staying for 5 minutes','When hazard lights are on','When picking up or dropping off passengers in a business district','Double-parking is never legal'],exp:'Double-parking (parking alongside an already-parked vehicle) is never legal in California. It blocks traffic flow, limits visibility, and creates dangerous conditions. Even if you are only stopping briefly, you must find a legal parking space or use a loading zone.'},
  zh:{q:'在加州什么情况下双排停车是合法的？',opts:['只待5分钟时','开着危险警告灯时','在商业区接送乘客时','双排停车永远不合法'],exp:'双排停车（停靠在已停放车辆旁边）在加州永远不合法。它阻塞交通流、限制能见度并造成危险情况。即使您只是短暂停留，您也必须找到合法停车位或使用装卸区。'},
  zhTW:{q:'在加州什麼情況下雙排停車是合法的？',opts:['只待5分鐘時','開著危險警告燈時','在商業區接送乘客時','雙排停車永遠不合法'],exp:'雙排停車（停靠在已停放車輛旁邊）在加州永遠不合法。它阻塞交通流、限制能見度並造成危險情況。即使您只是短暫停留，您也必須找到合法停車位或使用裝卸區。'},
  es:{q:'¿Cuándo es legal el estacionamiento en doble fila en California?',opts:['Cuando solo se queda 5 minutos','Cuando las luces de emergencia están encendidas','Al recoger o dejar pasajeros en un distrito comercial','El estacionamiento en doble fila nunca es legal'],exp:'El estacionamiento en doble fila (estacionar junto a un vehículo ya estacionado) nunca es legal en California. Bloquea el flujo de tráfico, limita la visibilidad y crea condiciones peligrosas. Incluso si solo se detiene brevemente, debe encontrar un espacio de estacionamiento legal o usar una zona de carga.'},
  ans:3
},
{
  id:189, cat:'parking',
  en:{q:'What does a white curb marking indicate?',opts:['No parking at any time','Passenger loading zone only — 5-minute limit','Reserved for electric vehicles','Bus stop only'],exp:'White curb markings indicate a passenger loading and unloading zone. You may stop only briefly (typically 5 minutes) to pick up or drop off passengers. The driver must stay with the vehicle. White curbs are common near airports, hotels, schools, and transit stations.'},
  zh:{q:'白色路缘标志表示什么？',opts:['任何时候都不能停车','仅限乘客上下车区域——5分钟限制','为电动车保留','仅限公共汽车站'],exp:'白色路缘标志表示乘客上下车区域。您只能短暂停车（通常5分钟）以接送乘客。驾驶者必须留在车辆旁边。白色路缘常见于机场、酒店、学校和公共交通站附近。'},
  zhTW:{q:'白色路緣標誌表示什麼？',opts:['任何時候都不能停車','僅限乘客上下車區域——5分鐘限制','為電動車保留','僅限公共汽車站'],exp:'白色路緣標誌表示乘客上下車區域。您只能短暫停車（通常5分鐘）以接送乘客。駕駛者必須留在車輛旁邊。白色路緣常見於機場、酒店、學校和公共交通站附近。'},
  es:{q:'¿Qué indica una marca de bordillo blanco?',opts:['Sin estacionamiento en ningún momento','Zona de carga de pasajeros solo — límite de 5 minutos','Reservado para vehículos eléctricos','Solo parada de autobús'],exp:'Las marcas de bordillo blanco indican una zona de carga y descarga de pasajeros. Solo puede detenerse brevemente (típicamente 5 minutos) para recoger o dejar pasajeros. El conductor debe permanecer con el vehículo. Los bordillos blancos son comunes cerca de aeropuertos, hoteles, escuelas y estaciones de tránsito.'},
  ans:1
},
{
  id:190, cat:'parking',
  en:{q:'How far from a railroad crossing must you park?',opts:['7½ feet','15 feet','50 feet','100 feet'],exp:'You must not park within 7½ feet of the nearest rail on a railroad track. This distance ensures that your car does not interfere with the safe passage of trains. Always park well away from railroad crossings and never block the tracks.'},
  zh:{q:'您必须距离铁路道口多远才能停车？',opts:['7.5英尺','15英尺','50英尺','100英尺'],exp:'您不得在铁路轨道最近轨道的7.5英尺以内停车。这个距离确保您的车不会干扰火车安全通过。始终在远离铁路道口处停车，切勿阻塞轨道。'},
  zhTW:{q:'您必須距離鐵路道口多遠才能停車？',opts:['7.5英尺','15英尺','50英尺','100英尺'],exp:'您不得在鐵路軌道最近軌道的7.5英尺以內停車。這個距離確保您的車不會干擾火車安全通過。始終在遠離鐵路道口處停車，切勿阻塞軌道。'},
  es:{q:'¿A qué distancia de un cruce ferroviario debe estacionar?',opts:['7½ pies','15 pies','50 pies','100 pies'],exp:'No debe estacionar dentro de 7½ pies del riel más cercano en una vía ferroviaria. Esta distancia asegura que su auto no interfiera con el paso seguro de los trenes. Siempre estacione bien alejado de los cruces ferroviarios y nunca bloquee las vías.'},
  ans:0
},

// ── Batch 20 · Highway Driving (Advanced) · Q191–200 ────────────────────────
{
  id:191, cat:'highway',
  en:{q:'What is the recommended following distance on a freeway in good conditions?',opts:['1 second','2 seconds','3 seconds','5 seconds'],exp:'The recommended following distance on a freeway is at least 3 seconds in good conditions. At higher freeway speeds, stopping distances are much longer. In bad weather, low visibility, or heavy trucks ahead, increase to 4–6 seconds. Use the "3-second rule" by picking a fixed object and counting seconds after the vehicle ahead passes it.'},
  zh:{q:'在良好条件下，在高速公路上推荐的跟车距离是多少？',opts:['1秒','2秒','3秒','5秒'],exp:'在高速公路上，在良好条件下推荐的跟车距离至少为3秒。在较高的高速公路速度下，制动距离要长得多。在恶劣天气、低能见度或前方有大型卡车时，增加到4-6秒。使用"3秒规则"：选择一个固定物体，在前方车辆通过它后开始计数秒数。'},
  zhTW:{q:'在良好條件下，在高速公路上推薦的跟車距離是多少？',opts:['1秒','2秒','3秒','5秒'],exp:'在高速公路上，在良好條件下推薦的跟車距離至少為3秒。在較高的高速公路速度下，制動距離要長得多。在惡劣天氣、低能見度或前方有大型卡車時，增加到4-6秒。使用「3秒規則」：選擇一個固定物體，在前方車輛通過它後開始計數秒數。'},
  es:{q:'¿Cuál es la distancia de seguimiento recomendada en una autopista en buenas condiciones?',opts:['1 segundo','2 segundos','3 segundos','5 segundos'],exp:'La distancia de seguimiento recomendada en una autopista es de al menos 3 segundos en buenas condiciones. A velocidades más altas de autopista, las distancias de frenado son mucho más largas. En mal tiempo, baja visibilidad o camiones pesados adelante, aumente a 4–6 segundos. Use la "regla de los 3 segundos" eligiendo un objeto fijo y contando segundos después de que el vehículo de adelante lo pase.'},
  ans:2
},
{
  id:192, cat:'highway',
  en:{q:'When merging onto a freeway, what should you do?',opts:['Stop at the end of the on-ramp and wait for a gap','Slow down and yield to freeway traffic from a stopped position','Accelerate to match freeway traffic speed in the acceleration lane, then merge safely','Force your way into traffic using the shoulder'],exp:'Use the acceleration lane to build speed matching freeway traffic, then look for a safe gap and merge smoothly. Never stop on an on-ramp unless absolutely necessary — a stopped car on an on-ramp is a serious hazard. Check mirrors and blind spots before merging.'},
  zh:{q:'驶入高速公路时，您应该怎么做？',opts:['在匝道末端停车等待间隙','从停止位置慢行让高速公路车辆先行','在加速车道上加速与高速公路车速匹配，然后安全并入','用路肩强行进入交通'],exp:'使用加速车道将速度提升到与高速公路交通匹配，然后寻找安全间隙平稳并入。除非绝对必要，切勿在匝道上停车——在匝道上停车是严重危险。并入前检查后视镜和盲点。'},
  zhTW:{q:'駛入高速公路時，您應該怎麼做？',opts:['在匝道末端停車等待間隙','從停止位置慢行讓高速公路車輛先行','在加速車道上加速與高速公路車速匹配，然後安全並入','用路肩強行進入交通'],exp:'使用加速車道將速度提升到與高速公路交通匹配，然後尋找安全間隙平穩並入。除非絕對必要，切勿在匝道上停車——在匝道上停車是嚴重危險。並入前檢查後視鏡和盲點。'},
  es:{q:'Al incorporarse a una autopista, ¿qué debe hacer?',opts:['Detenga al final de la rampa de acceso y espere un hueco','Reduzca la velocidad y ceda al tráfico de la autopista desde una posición detenida','Acelere para igualar la velocidad del tráfico de la autopista en el carril de aceleración, luego incorpore con seguridad','Forzar su camino al tráfico usando el arcén'],exp:'Use el carril de aceleración para alcanzar la velocidad del tráfico de la autopista, luego busque un hueco seguro e incorpórese suavemente. Nunca se detenga en una rampa de acceso a menos que sea absolutamente necesario — un auto detenido en una rampa de acceso es un peligro grave. Revise los espejos y los puntos ciegos antes de incorporarse.'},
  ans:2
},
{
  id:193, cat:'highway',
  en:{q:'On a freeway, which lane is generally best for through traffic?',opts:['The far left lane','The far right lane','The center lane(s)','Any lane — they are all equal'],exp:'On multi-lane freeways, the center lanes are generally best for through traffic. The far right lane is often used for entering and exiting. The far left lane (fast lane) is for passing. Staying in a center lane minimizes interactions with merging traffic and gives you more options for maneuvering.'},
  zh:{q:'在高速公路上，哪条车道通常最适合直行交通？',opts:['最左车道','最右车道','中间车道','任何车道——它们都一样'],exp:'在多车道高速公路上，中间车道通常最适合直行交通。最右车道通常用于进出。最左车道（快车道）用于超车。保持在中间车道可最大限度减少与合并交通的互动，并给您更多的机动选择。'},
  zhTW:{q:'在高速公路上，哪條車道通常最適合直行交通？',opts:['最左車道','最右車道','中間車道','任何車道——它們都一樣'],exp:'在多車道高速公路上，中間車道通常最適合直行交通。最右車道通常用於進出。最左車道（快車道）用於超車。保持在中間車道可最大限度減少與合併交通的互動，並給您更多的機動選擇。'},
  es:{q:'En una autopista, ¿qué carril es generalmente el mejor para el tráfico de paso?',opts:['El carril del extremo izquierdo','El carril del extremo derecho','Los carriles del centro','Cualquier carril — todos son iguales'],exp:'En autopistas de múltiples carriles, los carriles del centro son generalmente los mejores para el tráfico de paso. El carril del extremo derecho a menudo se usa para entrar y salir. El carril del extremo izquierdo (carril rápido) es para adelantar. Permanecer en un carril central minimiza las interacciones con el tráfico que se incorpora y le da más opciones de maniobra.'},
  ans:2
},
{
  id:194, cat:'highway',
  en:{q:'What should you do if you miss your freeway exit?',opts:['Stop on the freeway and back up to the exit','Make a sudden lane change to exit','Continue to the next exit and find another route','Drive on the shoulder to reach the exit'],exp:'If you miss your freeway exit, do not stop or back up — this is extremely dangerous. Continue driving to the next exit and find an alternate route. Never drive on the shoulder to reach a missed exit. Plan ahead by reading signs early and positioning yourself in the correct lane.'},
  zh:{q:'如果您错过了高速公路出口，您应该怎么做？',opts:['在高速公路上停车并倒退回出口','突然变道出去','继续到下一个出口并寻找另一条路线','在路肩上行驶到达出口'],exp:'如果您错过了高速公路出口，不要停车或倒退——这极其危险。继续行驶到下一个出口并寻找替代路线。切勿在路肩上行驶以到达错过的出口。提前阅读标志并在正确车道就位，为出口做好计划。'},
  zhTW:{q:'如果您錯過了高速公路出口，您應該怎麼做？',opts:['在高速公路上停車並倒退回出口','突然變道出去','繼續到下一個出口並尋找另一條路線','在路肩上行駛到達出口'],exp:'如果您錯過了高速公路出口，不要停車或倒退——這極其危險。繼續行駛到下一個出口並尋找替代路線。切勿在路肩上行駛以到達錯過的出口。提前閱讀標誌並在正確車道就位，為出口做好計劃。'},
  es:{q:'¿Qué debe hacer si se pierde su salida de la autopista?',opts:['Detenga en la autopista y retroceda a la salida','Haga un cambio de carril repentino para salir','Continúe hasta la próxima salida y encuentre otra ruta','Conduzca en el arcén para llegar a la salida'],exp:'Si se pierde su salida de la autopista, no se detenga ni retroceda — esto es extremadamente peligroso. Continúe conduciendo hasta la próxima salida y encuentre una ruta alternativa. Nunca conduzca en el arcén para alcanzar una salida perdida. Planifique con anticipación leyendo señales temprano y posicionándose en el carril correcto.'},
  ans:2
},
{
  id:195, cat:'highway',
  en:{q:'On a freeway, you must NOT drive in the carpool/HOV lane unless:',opts:['You are in a hurry','Your vehicle has the required number of occupants (or qualifies as a single-occupant clean vehicle)','You are passing a slow vehicle','You are driving a newer car'],exp:'HOV (High Occupancy Vehicle) or carpool lanes require a minimum number of occupants (usually 2 or 3+), unless your vehicle is an approved clean-air vehicle with a special decal allowing solo use. Fines for unauthorized HOV lane use are significant ($490+).'},
  zh:{q:'在高速公路上，您不得在拼车/HOV车道行驶，除非：',opts:['您很赶时间','您的车辆有所需的乘员数量（或符合单人洁净车辆资格）','您在超越慢车','您驾驶的是较新的车辆'],exp:'HOV（高载客量）或拼车车道要求最低乘员数量（通常为2人或3人以上），除非您的车辆是获批的清洁能源车辆，带有允许单人使用的特殊贴纸。未授权使用HOV车道的罚款相当高（$490+）。'},
  zhTW:{q:'在高速公路上，您不得在拼車/HOV車道行駛，除非：',opts:['您很趕時間','您的車輛有所需的乘員數量（或符合單人潔淨車輛資格）','您在超越慢車','您駕駛的是較新的車輛'],exp:'HOV（高載客量）或拼車車道要求最低乘員數量（通常為2人或3人以上），除非您的車輛是獲批的清潔能源車輛，帶有允許單人使用的特殊貼紙。未授權使用HOV車道的罰款相當高（$490+）。'},
  es:{q:'En una autopista, NO debe conducir en el carril de vehículo de alta ocupación/HOV a menos que:',opts:['Tenga prisa','Su vehículo tenga el número requerido de ocupantes (o califique como vehículo limpio de un solo ocupante)','Esté adelantando un vehículo lento','Esté conduciendo un auto más nuevo'],exp:'Los carriles HOV (Vehículo de Alta Ocupación) o de vehículos compartidos requieren un número mínimo de ocupantes (generalmente 2 o 3+), a menos que su vehículo sea un vehículo de aire limpio aprobado con una calcomanía especial que permita el uso individual. Las multas por uso no autorizado del carril HOV son significativas ($490+).'},
  ans:1
},
{
  id:196, cat:'highway',
  en:{q:'What should you do when a large truck passes you on the freeway?',opts:['Speed up to get away from its turbulence','Slow down and hold your steering wheel firmly to stabilize your vehicle','Move to the shoulder temporarily','Match the truck\'s speed exactly'],exp:'When a large truck passes, you may feel turbulence and buffeting from air displacement. Slow down slightly, hold your steering wheel firmly with both hands, and stay in your lane. Do not make sudden steering corrections. The disturbance is brief — maintain a steady course.'},
  zh:{q:'当大型卡车在高速公路上超越您时，您应该怎么做？',opts:['加速以离开其气流扰动','减速并紧握方向盘以稳定车辆','暂时移到路肩','完全匹配卡车的速度'],exp:'当大型卡车超越时，您可能会感受到气流置换带来的湍流和颠簸。稍微减速，用双手紧握方向盘，保持在您的车道内。不要做突然的转向修正。扰动是短暂的——保持稳定行驶。'},
  zhTW:{q:'當大型卡車在高速公路上超越您時，您應該怎麼做？',opts:['加速以離開其氣流擾動','減速並緊握方向盤以穩定車輛','暫時移到路肩','完全匹配卡車的速度'],exp:'當大型卡車超越時，您可能會感受到氣流置換帶來的湍流和顛簸。稍微減速，用雙手緊握方向盤，保持在您的車道內。不要做突然的轉向修正。擾動是短暫的——保持穩定行駛。'},
  es:{q:'¿Qué debe hacer cuando un camión grande lo adelanta en la autopista?',opts:['Acelere para alejarse de su turbulencia','Reduzca la velocidad y sostenga el volante firmemente para estabilizar su vehículo','Muévase al arcén temporalmente','Iguale la velocidad del camión exactamente'],exp:'Cuando un camión grande lo adelanta, puede sentir turbulencia y sacudidas por el desplazamiento de aire. Reduzca ligeramente la velocidad, sostenga el volante firmemente con ambas manos y permanezca en su carril. No haga correcciones repentinas de dirección. La perturbación es breve — mantenga un curso estable.'},
  ans:1
},
{
  id:197, cat:'highway',
  en:{q:'What is a "weave lane" on a freeway?',opts:['A lane that allows high-speed weaving between cars','A shared section of road used by both entering and exiting traffic simultaneously','A dedicated lane for motorcycles','A lane that narrows at intersections'],exp:'A weave lane is a short section of freeway where an on-ramp and off-ramp overlap, creating a shared lane where vehicles are both entering and exiting at the same time. Extra caution is needed here — yield to traffic with less room to maneuver and watch for vehicles crossing your path.'},
  zh:{q:'高速公路上的"交织车道"是什么？',opts:['允许车辆之间高速穿梭的车道','进出匝道交叠、进入和离开交通同时使用的道路共享路段','摩托车专用车道','在路口变窄的车道'],exp:'交织车道是高速公路的短路段，在此上匝道和下匝道重叠，形成车辆同时进入和离开的共享车道。在这里需要格外小心——让行给空间较少的车辆，并注意穿越您路线的车辆。'},
  zhTW:{q:'高速公路上的「交織車道」是什麼？',opts:['允許車輛之間高速穿梭的車道','進出匝道交疊、進入和離開交通同時使用的道路共享路段','摩托車專用車道','在路口變窄的車道'],exp:'交織車道是高速公路的短路段，在此上匝道和下匝道重疊，形成車輛同時進入和離開的共享車道。在這裡需要格外小心——讓行給空間較少的車輛，並注意穿越您路線的車輛。'},
  es:{q:'¿Qué es un "carril de entrelazado" en una autopista?',opts:['Un carril que permite entrelazarse a alta velocidad entre autos','Una sección corta de carretera usada simultáneamente por el tráfico que entra y sale','Un carril dedicado para motocicletas','Un carril que se estrecha en las intersecciones'],exp:'Un carril de entrelazado es una sección corta de autopista donde una rampa de entrada y una rampa de salida se superponen, creando un carril compartido donde los vehículos están entrando y saliendo al mismo tiempo. Se necesita precaución adicional aquí — ceda al tráfico con menos espacio para maniobrar y esté atento a los vehículos que cruzan su camino.'},
  ans:1
},
{
  id:198, cat:'highway',
  en:{q:'How far in advance must you signal before changing lanes on a freeway?',opts:['50 feet','100 feet','5 seconds at freeway speed','There is no requirement — just check mirrors'],exp:'On a freeway, you should signal far enough in advance to give other drivers time to react — generally at least 5 seconds at freeway speeds (about 500 feet at 65 mph). Check your mirrors and blind spots, signal, check again, and then change lanes smoothly. Abrupt lane changes without adequate signal cause many accidents.'},
  zh:{q:'在高速公路上变道前需要提前多远打转向灯？',opts:['50英尺','100英尺','在高速公路速度下提前5秒','没有要求——只需检查后视镜'],exp:'在高速公路上，您应该提前足够远发出信号，以给其他驾驶者反应时间——通常在高速公路速度下至少5秒（在65英里/小时时约500英尺）。检查后视镜和盲点，打转向灯，再次检查，然后平稳变道。没有足够信号的突然变道导致很多事故。'},
  zhTW:{q:'在高速公路上變道前需要提前多遠打方向燈？',opts:['50英尺','100英尺','在高速公路速度下提前5秒','沒有要求——只需檢查後視鏡'],exp:'在高速公路上，您應該提前足夠遠發出信號，以給其他駕駛者反應時間——通常在高速公路速度下至少5秒（在65英里/小時時約500英尺）。檢查後視鏡和盲點，打方向燈，再次檢查，然後平穩變道。沒有足夠信號的突然變道導致很多事故。'},
  es:{q:'¿Con cuánta anticipación debe señalizar antes de cambiar de carril en una autopista?',opts:['50 pies','100 pies','5 segundos a velocidad de autopista','No hay requisito — solo revise los espejos'],exp:'En una autopista, debe señalizar con suficiente anticipación para dar tiempo a los demás conductores para reaccionar — generalmente al menos 5 segundos a velocidades de autopista (aproximadamente 500 pies a 65 mph). Revise sus espejos y puntos ciegos, señalice, revise nuevamente, luego cambie de carril suavemente. Los cambios de carril abruptos sin señal adecuada causan muchos accidentes.'},
  ans:2
},
{
  id:199, cat:'highway',
  en:{q:'What should you do if your vehicle breaks down on a freeway?',opts:['Stop in the travel lane and put on your hazard lights','Try to coast to the nearest exit or pull onto the right shoulder as far as possible','Stop in the fast lane where drivers can see you easily','Call 911 and wait in your vehicle in the traffic lane'],exp:'If you break down on a freeway, steer to the right shoulder as far from traffic as possible. Turn on hazard lights. If safe, exit the vehicle from the right side and move away from traffic. Call for help. Never stand between your car and traffic. If you must stay in the car, keep your seatbelt on.'},
  zh:{q:'如果您的车辆在高速公路上抛锚，您应该怎么做？',opts:['停在行车道中并打开危险警告灯','设法滑行到最近出口或尽量靠右停到路肩上','停在快车道让驾驶者容易看到您','打911并在交通车道内的车里等待'],exp:'如果您在高速公路上抛锚，将车转向右侧路肩，尽量远离交通。打开危险警告灯。如果安全，从右侧下车并远离交通。呼叫帮助。切勿站在您的车和交通之间。如果必须留在车里，保持系好安全带。'},
  zhTW:{q:'如果您的車輛在高速公路上拋錨，您應該怎麼做？',opts:['停在行車道中並打開危險警告燈','設法滑行到最近出口或盡量靠右停到路肩上','停在快車道讓駕駛者容易看到您','打911並在交通車道內的車裡等待'],exp:'如果您在高速公路上拋錨，將車轉向右側路肩，盡量遠離交通。打開危險警告燈。如果安全，從右側下車並遠離交通。呼叫幫助。切勿站在您的車和交通之間。如果必須留在車裡，保持繫好安全帶。'},
  es:{q:'¿Qué debe hacer si su vehículo se avería en una autopista?',opts:['Detenga en el carril de circulación y encienda las luces de emergencia','Intente deslizarse hasta la salida más cercana o orillese al arcén derecho tanto como sea posible','Detenga en el carril rápido donde los conductores puedan verlo fácilmente','Llame al 911 y espere en su vehículo en el carril de tráfico'],exp:'Si se avería en una autopista, dirija hacia el arcén derecho lo más lejos posible del tráfico. Encienda las luces de emergencia. Si es seguro, salga del vehículo por el lado derecho y aléjese del tráfico. Llame para pedir ayuda. Nunca se pare entre su auto y el tráfico. Si debe quedarse en el auto, mantenga el cinturón de seguridad abrochado.'},
  ans:1
},
{
  id:200, cat:'highway',
  en:{q:'What is the purpose of rumble strips on the highway shoulder?',opts:['To slow down vehicles merging onto the highway','To alert drivers who are drifting off the roadway','To mark the lane boundaries for visibility in rain','To provide traction for emergency stops'],exp:'Rumble strips are raised or grooved patterns in the pavement that create a loud noise and vibration when a vehicle\'s tires roll over them. They are designed to alert drowsy or distracted drivers who are drifting off the roadway onto the shoulder, giving them a wake-up warning to correct their course.'},
  zh:{q:'公路路肩上震动带的目的是什么？',opts:['减慢并入公路的车辆','提醒正在偏离道路的驾驶者','在雨天为车道边界提供可见度标记','为紧急停车提供牵引力'],exp:'震动带是路面上凸起或凹槽的图案，当车辆轮胎滚过时会产生响亮的噪音和振动。它们旨在提醒正在向路肩偏离的困倦或分心驾驶者，给他们一个唤醒警告以纠正行驶方向。'},
  zhTW:{q:'公路路肩上震動帶的目的是什麼？',opts:['減慢並入公路的車輛','提醒正在偏離道路的駕駛者','在雨天為車道邊界提供可見度標記','為緊急停車提供牽引力'],exp:'震動帶是路面上凸起或凹槽的圖案，當車輛輪胎滾過時會產生響亮的噪音和振動。它們旨在提醒正在向路肩偏離的困倦或分心駕駛者，給他們一個喚醒警告以糾正行駛方向。'},
  es:{q:'¿Cuál es el propósito de las bandas de vibración en el arcén de la autopista?',opts:['Para reducir la velocidad de los vehículos que se incorporan a la autopista','Para alertar a los conductores que se están desviando de la calzada','Para marcar los límites del carril para visibilidad en lluvia','Para proporcionar tracción para paradas de emergencia'],exp:'Las bandas de vibración son patrones elevados o ranurados en el pavimento que crean un ruido fuerte y vibración cuando los neumáticos de un vehículo ruedan sobre ellos. Están diseñadas para alertar a los conductores somnolientos o distraídos que se están desviando de la calzada hacia el arcén, dándoles una advertencia de alerta para corregir su curso.'},
  ans:1
},

// ── Batch 21 · Road Signs (More) · Q201–210 ─────────────────────────────────
{
  id:201, cat:'signs', sign:'curve-right',
  en:{q:'What does this sign warn drivers about?',opts:['A sharp right turn ahead','A slight curve to the right ahead','A right lane ending soon','Traffic merging from the right'],exp:'This yellow warning sign indicates a curve to the right ahead. Slow down before entering the curve. The advisory speed (if shown) tells the maximum safe speed for this curve. Do not brake in the curve — brake before entering it.'},
  zh:{q:'这个标志提醒驾驶者注意什么？',opts:['前方急右转','前方有向右弯道','右侧车道即将结束','车辆从右侧汇入'],exp:'这个黄色警告标志表示前方有向右弯道。在进入弯道前减速。咨询速度（如有显示）告知该弯道的最大安全速度。不要在弯道中制动——在进入弯道前制动。'},
  zhTW:{q:'這個標誌提醒駕駛者注意什麼？',opts:['前方急右轉','前方有向右彎道','右側車道即將結束','車輛從右側匯入'],exp:'這個黃色警告標誌表示前方有向右彎道。在進入彎道前減速。諮詢速度（如有顯示）告知該彎道的最大安全速度。不要在彎道中制動——在進入彎道前制動。'},
  es:{q:'¿De qué advierte esta señal a los conductores?',opts:['Una curva brusca a la derecha adelante','Una curva suave a la derecha adelante','Un carril derecho que termina pronto','Tráfico incorporándose desde la derecha'],exp:'Esta señal de advertencia amarilla indica una curva a la derecha adelante. Reduzca la velocidad antes de entrar a la curva. La velocidad recomendada (si se muestra) indica la velocidad máxima segura para esta curva. No frene en la curva — frene antes de entrar.'},
  ans:0
},
{
  id:202, cat:'signs', sign:'winding-road',
  en:{q:'This sign indicates:',opts:['Multiple curves ahead in a winding road','Road construction ahead','A scenic road suitable for slow driving','Slippery road conditions'],exp:'The winding road sign warns of a series of curves ahead. Reduce your speed, do not pass, and stay alert for the full length of the winding section. This sign is common in mountain roads and coastal highways.'},
  zh:{q:'这个标志表示：',opts:['前方蜿蜒路段有多处弯道','前方有道路施工','适合慢速行驶的风景道路','滑溜路面状况'],exp:'蜿蜒道路标志警告前方有一系列弯道。降低速度，不要超车，在整个蜿蜒路段保持警觉。这个标志常见于山路和海岸公路。'},
  zhTW:{q:'這個標誌表示：',opts:['前方蜿蜒路段有多處彎道','前方有道路施工','適合慢速行駛的風景道路','滑溜路面狀況'],exp:'蜿蜒道路標誌警告前方有一系列彎道。降低速度，不要超車，在整個蜿蜒路段保持警覺。這個標誌常見於山路和海岸公路。'},
  es:{q:'Esta señal indica:',opts:['Múltiples curvas adelante en una carretera sinuosa','Construcción de carretera adelante','Una carretera escénica adecuada para conducción lenta','Condiciones de carretera resbaladiza'],exp:'La señal de carretera sinuosa advierte de una serie de curvas adelante. Reduzca su velocidad, no adelante y manténgase alerta durante toda la longitud de la sección sinuosa. Esta señal es común en carreteras de montaña y autopistas costeras.'},
  ans:0
},
{
  id:203, cat:'signs', sign:'slippery',
  en:{q:'What should you do when you see this sign?',opts:['Check your tires for wear before proceeding','Reduce speed and avoid sudden braking or steering','Come to a complete stop and wait for conditions to improve','Turn on high-beam headlights'],exp:'The slippery when wet sign (a car with wavy skid marks) warns that the road surface may become very slippery when wet. Slow down, increase following distance, and avoid sudden braking, accelerating, or steering. This sign is often posted near bridges, shaded areas, and roads with special surfaces.'},
  zh:{q:'看到这个标志时您应该怎么做？',opts:['继续前行前检查轮胎磨损','减速并避免急刹车或急转向','完全停车等待条件改善','打开远光灯'],exp:'"湿滑"标志（带波浪形轮胎痕迹的汽车图案）警告路面在湿润时可能变得非常滑。减速，增加跟车距离，避免急刹车、急加速或急转向。这个标志常见于桥梁、阴影区域和特殊路面道路旁。'},
  zhTW:{q:'看到這個標誌時您應該怎麼做？',opts:['繼續前行前檢查輪胎磨損','減速並避免急剎車或急轉向','完全停車等待條件改善','打開遠光燈'],exp:'"濕滑"標誌（帶波浪形輪胎痕跡的汽車圖案）警告路面在濕潤時可能變得非常滑。減速，增加跟車距離，避免急剎車、急加速或急轉向。這個標誌常見於橋梁、陰影區域和特殊路面道路旁。'},
  es:{q:'¿Qué debe hacer cuando ve esta señal?',opts:['Revise el desgaste de sus neumáticos antes de proceder','Reduzca la velocidad y evite frenado o dirección repentinos','Detenga completamente y espere a que mejoren las condiciones','Encienda los faros de luz alta'],exp:'La señal de resbaladizo cuando está mojado (un auto con marcas de patinaje onduladas) advierte que la superficie de la carretera puede volverse muy resbaladiza cuando está mojada. Reduzca la velocidad, aumente la distancia de seguimiento y evite frenado, aceleración o dirección repentinos. Esta señal a menudo se publica cerca de puentes, áreas sombreadas y carreteras con superficies especiales.'},
  ans:1
},
{
  id:204, cat:'signs', sign:'merge',
  en:{q:'This sign means:',opts:['Two lanes of traffic merging into one','Your lane is ending — move to the right','Road under construction — merge left','Two roads splitting in opposite directions'],exp:'The merge sign indicates that two lanes of traffic are coming together into one lane ahead. Be prepared to adjust your speed and position. Yield to traffic already in the lane you are merging into, and do not force your way in.'},
  zh:{q:'这个标志意味着：',opts:['两条车道的交通向前合并为一条','您的车道结束——向右移动','道路施工——向左合并','两条道路向相反方向分叉'],exp:'合并标志表示前方两条车道的交通合并为一条。准备好调整速度和位置。让行您正在合并进入的车道中已有的交通，不要强行插入。'},
  zhTW:{q:'這個標誌意味著：',opts:['兩條車道的交通向前合併為一條','您的車道結束——向右移動','道路施工——向左合併','兩條道路向相反方向分叉'],exp:'合併標誌表示前方兩條車道的交通合併為一條。準備好調整速度和位置。讓行您正在合併進入的車道中已有的交通，不要強行插入。'},
  es:{q:'Esta señal significa:',opts:['Dos carriles de tráfico fusionándose en uno','Su carril termina — muévase a la derecha','Carretera en construcción — fusiónese a la izquierda','Dos carreteras dividiéndose en direcciones opuestas'],exp:'La señal de fusión indica que dos carriles de tráfico se están juntando en un carril adelante. Esté preparado para ajustar su velocidad y posición. Ceda al tráfico ya en el carril al que se está fusionando y no se fuerce a entrar.'},
  ans:0
},
{
  id:205, cat:'signs', sign:'lane-ends',
  en:{q:'What must you do when you see this sign?',opts:['Stop — the road ends ahead','Your lane is ending — merge safely into the adjacent lane','One lane is closed due to construction — use alternate route','Traffic must yield to on-ramp traffic'],exp:'This sign warns that your current lane ends ahead and you must merge into the adjacent lane. Begin merging early, signal your intention, and yield to traffic already in that lane. Do not race to the merge point and force your way in — merge cooperatively.'},
  zh:{q:'看到这个标志时您必须怎么做？',opts:['停车——前方道路结束','您的车道结束——安全并入相邻车道','由于施工一条车道关闭——使用替代路线','交通必须让行上匝道交通'],exp:'这个标志警告您的当前车道前方结束，您必须并入相邻车道。尽早开始合并，发出意图信号，并让行已在该车道的交通。不要飞速行驶到合并点并强行插入——合作地合并。'},
  zhTW:{q:'看到這個標誌時您必須怎麼做？',opts:['停車——前方道路結束','您的車道結束——安全並入相鄰車道','由於施工一條車道關閉——使用替代路線','交通必須讓行上匝道交通'],exp:'這個標誌警告您的當前車道前方結束，您必須並入相鄰車道。儘早開始合併，發出意圖信號，並讓行已在該車道的交通。不要飛速行駛到合併點並強行插入——合作地合併。'},
  es:{q:'¿Qué debe hacer cuando ve esta señal?',opts:['Detenga — la carretera termina adelante','Su carril termina — fusiónese de forma segura al carril adyacente','Un carril está cerrado debido a construcción — use ruta alternativa','El tráfico debe ceder al tráfico de la rampa de acceso'],exp:'Esta señal advierte que su carril actual termina adelante y debe fusionarse al carril adyacente. Comience a fusionarse temprano, señalice su intención y ceda al tráfico ya en ese carril. No corra hasta el punto de fusión y se fuerce a entrar — fusiónese de manera cooperativa.'},
  ans:1
},
{
  id:206, cat:'signs', sign:'ped-crossing',
  en:{q:'This sign warns that:',opts:['Pedestrians are not allowed to cross here','A pedestrian crosswalk is ahead — watch for people crossing','A school zone begins here','Walking trail crosses the road ahead'],exp:'The pedestrian crossing sign (a figure of a person walking) warns that a crosswalk is nearby and pedestrians may be crossing. Slow down, be prepared to stop, and scan for pedestrians — including those who may not be visible yet. These signs are common near parks, malls, and senior centers.'},
  zh:{q:'这个标志警告：',opts:['行人不允许在此过马路','前方有人行横道——注意过街的人','学校区域从这里开始','步行道穿越前方道路'],exp:'行人过街标志（行走的人物图案）警告附近有人行横道，行人可能正在过街。减速，准备停车，并扫视行人——包括那些可能还不可见的人。这些标志常见于公园、购物中心和老年人中心附近。'},
  zhTW:{q:'這個標誌警告：',opts:['行人不允許在此過馬路','前方有人行橫道——注意過街的人','學校區域從這裡開始','步行道穿越前方道路'],exp:'行人過街標誌（行走的人物圖案）警告附近有人行橫道，行人可能正在過街。減速，準備停車，並掃視行人——包括那些可能還不可見的人。這些標誌常見於公園、購物中心和老年人中心附近。'},
  es:{q:'Esta señal advierte que:',opts:['Los peatones no pueden cruzar aquí','Hay un cruce peatonal adelante — esté atento a personas cruzando','Comienza una zona escolar aquí','Un sendero peatonal cruza la carretera adelante'],exp:'La señal de cruce peatonal (figura de una persona caminando) advierte que hay un cruce peatonal cerca y los peatones pueden estar cruzando. Reduzca la velocidad, prepárese para detenerse y escanee los peatones — incluyendo los que pueden no ser visibles todavía. Estas señales son comunes cerca de parques, centros comerciales y centros para personas mayores.'},
  ans:1
},
{
  id:207, cat:'signs', sign:'deer',
  en:{q:'What does this sign warn about?',opts:['A wildlife sanctuary area — no hunting','Deer or other animals frequently cross this road','Deer meat sold ahead','Farm animals may be on the road'],exp:'The deer crossing sign warns that deer (and other wildlife) frequently cross the road in this area. Be especially cautious at dawn and dusk when deer are most active. If you see one deer, watch for more — they rarely travel alone. Slow down and scan the roadside carefully.'},
  zh:{q:'这个标志警告什么？',opts:['野生动物保护区——禁止狩猎','鹿或其他动物经常穿越这条道路','前方有鹿肉出售','农场动物可能在道路上'],exp:'鹿穿越标志警告鹿（和其他野生动物）在此区域经常穿越道路。在黎明和黄昏时尤其要小心，因为那时鹿最为活跃。如果您看到一只鹿，注意更多的——它们很少单独行动。减速并仔细扫视路旁。'},
  zhTW:{q:'這個標誌警告什麼？',opts:['野生動物保護區——禁止狩獵','鹿或其他動物經常穿越這條道路','前方有鹿肉出售','農場動物可能在道路上'],exp:'鹿穿越標誌警告鹿（和其他野生動物）在此區域經常穿越道路。在黎明和黃昏時尤其要小心，因為那時鹿最為活躍。如果您看到一隻鹿，注意更多的——它們很少單獨行動。減速並仔細掃視路旁。'},
  es:{q:'¿De qué advierte esta señal?',opts:['Un área de santuario de vida silvestre — sin caza','Los ciervos u otros animales cruzan frecuentemente esta carretera','Carne de venado vendida adelante','Animales de granja pueden estar en la carretera'],exp:'La señal de cruce de ciervos advierte que los ciervos (y otros animales salvajes) cruzan frecuentemente la carretera en esta área. Sea especialmente cauteloso al amanecer y al anochecer cuando los ciervos son más activos. Si ve un ciervo, esté atento a más — rara vez viajan solos. Reduzca la velocidad y escanee el costado de la carretera cuidadosamente.'},
  ans:1
},
{
  id:208, cat:'signs', sign:'construction',
  en:{q:'What does an orange sign with a worker symbol indicate?',opts:['Road closed permanently','Construction or maintenance work zone ahead — slow down','Detour route for heavy trucks','Orange is a background color with no special meaning'],exp:'Orange signs indicate construction and maintenance work zones. Speed limits are reduced in work zones and fines are doubled for violations. Workers and equipment may be present. Pay close attention to flaggers (people with flags directing traffic) who have the same authority as traffic signals.'},
  zh:{q:'带有工人符号的橙色标志表示什么？',opts:['道路永久关闭','前方有建筑或维护工作区——减速','重型卡车绕行路线','橙色是没有特殊含义的背景色'],exp:'橙色标志表示建筑和维护工作区。工作区内的速度限制降低，违规罚款翻倍。工人和设备可能在场。密切关注旗手（持旗指挥交通的人），他们与交通信号具有同等权威。'},
  zhTW:{q:'帶有工人符號的橙色標誌表示什麼？',opts:['道路永久關閉','前方有建築或維護工作區——減速','重型卡車繞行路線','橙色是沒有特殊含義的背景色'],exp:'橙色標誌表示建築和維護工作區。工作區內的速度限制降低，違規罰款翻倍。工人和設備可能在場。密切關注旗手（持旗指揮交通的人），他們與交通信號具有同等權威。'},
  es:{q:'¿Qué indica una señal naranja con símbolo de trabajador?',opts:['Carretera cerrada permanentemente','Zona de trabajo de construcción o mantenimiento adelante — reduzca la velocidad','Ruta de desvío para camiones pesados','Naranja es un color de fondo sin significado especial'],exp:'Las señales naranjas indican zonas de trabajo de construcción y mantenimiento. Los límites de velocidad se reducen en las zonas de trabajo y las multas se duplican por infracciones. Trabajadores y equipos pueden estar presentes. Preste mucha atención a los abanderadores (personas con banderas que dirigen el tráfico) que tienen la misma autoridad que las señales de tráfico.'},
  ans:1
},
{
  id:209, cat:'signs', sign:'divided-begins',
  en:{q:'This sign means:',opts:['You are entering a divided highway — keep right','A divided highway is ending ahead','Two-way traffic begins here','Passing is prohibited ahead'],exp:'The "Divided Highway Begins" sign warns that you are approaching a divided highway (with a median or barrier separating opposing traffic). Keep to the right side. You will no longer have oncoming traffic in your lane, but pay attention to the median openings for turning vehicles.'},
  zh:{q:'这个标志意味着：',opts:['您正在进入分隔公路——靠右行驶','前方分隔公路结束','双向交通从这里开始','前方禁止超车'],exp:'"分隔公路开始"标志警告您正在接近分隔公路（中间有隔离带或隔离物分隔对向交通）。靠右行驶。您的车道将不再有对向交通，但注意转弯车辆的隔离带开口。'},
  zhTW:{q:'這個標誌意味著：',opts:['您正在進入分隔公路——靠右行駛','前方分隔公路結束','雙向交通從這裡開始','前方禁止超車'],exp:'"分隔公路開始"標誌警告您正在接近分隔公路（中間有隔離帶或隔離物分隔對向交通）。靠右行駛。您的車道將不再有對向交通，但注意轉彎車輛的隔離帶開口。'},
  es:{q:'Esta señal significa:',opts:['Está entrando a una autopista dividida — manténgase a la derecha','Una autopista dividida termina adelante','El tráfico de dos vías comienza aquí','Adelantar está prohibido adelante'],exp:'La señal "Comienza Autopista Dividida" advierte que se está aproximando a una autopista dividida (con una mediana o barrera que separa el tráfico opuesto). Manténgase a la derecha. Ya no tendrá tráfico en sentido contrario en su carril, pero preste atención a las aperturas medianas para los vehículos que giran.'},
  ans:0
},
{
  id:210, cat:'signs', sign:'two-way',
  en:{q:'What does this sign warn you about?',opts:['Road splits into two separate one-way roads ahead','Two-way traffic — be prepared for oncoming vehicles','Passing is allowed in both directions','Two lanes are available in your direction'],exp:'The "Two-Way Traffic" sign warns that you are entering or returning to a two-way road with traffic coming from both directions. This sign is common where a one-way road or divided highway transitions to a two-way road. Stay right and watch for oncoming traffic.'},
  zh:{q:'这个标志警告您什么？',opts:['前方道路分为两条单行道','双向交通——准备好面对对向车辆','双向都允许超车','您方向有两条车道'],exp:'"双向交通"标志警告您正在进入或返回到有双向交通的双向道路。这个标志常见于单行道或分隔公路转变为双向道路的地方。靠右行驶，注意对向交通。'},
  zhTW:{q:'這個標誌警告您什麼？',opts:['前方道路分為兩條單行道','雙向交通——準備好面對對向車輛','雙向都允許超車','您方向有兩條車道'],exp:'"雙向交通"標誌警告您正在進入或返回到有雙向交通的雙向道路。這個標誌常見於單行道或分隔公路轉變為雙向道路的地方。靠右行駛，注意對向交通。'},
  es:{q:'¿De qué le advierte esta señal?',opts:['La carretera se divide en dos carreteras de sentido único adelante','Tráfico de dos vías — prepárese para vehículos que vienen en sentido contrario','Adelantar está permitido en ambas direcciones','Dos carriles están disponibles en su dirección'],exp:'La señal de "Tráfico de Dos Vías" advierte que está entrando o regresando a una carretera de dos vías con tráfico viniendo de ambas direcciones. Esta señal es común donde una carretera de sentido único o autopista dividida transiciona a una carretera de dos vías. Manténgase a la derecha y esté atento al tráfico en sentido contrario.'},
  ans:1
},

// ── Batch 22 · Vehicle Safety & Equipment · Q211–220 ────────────────────────
{
  id:211, cat:'safety',
  en:{q:'When must you turn on your headlights in California?',opts:['Only at night when it is completely dark','From 30 minutes after sunset to 30 minutes before sunrise, and whenever visibility is under 1,000 feet','Only in heavy rain or fog','Whenever the wipers are on'],exp:'California law requires headlights from 30 minutes after sunset to 30 minutes before sunrise. You must also use headlights any time visibility is less than 1,000 feet due to weather, smoke, or other conditions. Additionally, when you use your windshield wipers in rain, you must also use your headlights.'},
  zh:{q:'在加州什么时候必须打开车头灯？',opts:['只有在完全黑暗的夜间','从日落后30分钟到日出前30分钟，以及在能见度低于1,000英尺时','只有在大雨或浓雾中','无论何时使用雨刷'],exp:'加州法律要求从日落后30分钟到日出前30分钟使用车头灯。当由于天气、烟雾或其他条件导致能见度低于1,000英尺时，您也必须使用车头灯。此外，当您在雨中使用挡风玻璃雨刷时，您也必须使用车头灯。'},
  zhTW:{q:'在加州什麼時候必須打開車頭燈？',opts:['只有在完全黑暗的夜間','從日落後30分鐘到日出前30分鐘，以及在能見度低於1,000英尺時','只有在大雨或濃霧中','無論何時使用雨刷'],exp:'加州法律要求從日落後30分鐘到日出前30分鐘使用車頭燈。當由於天氣、煙霧或其他條件導致能見度低於1,000英尺時，您也必須使用車頭燈。此外，當您在雨中使用擋風玻璃雨刷時，您也必須使用車頭燈。'},
  es:{q:'¿Cuándo debe encender sus faros en California?',opts:['Solo de noche cuando está completamente oscuro','Desde 30 minutos después del atardecer hasta 30 minutos antes del amanecer, y cuando la visibilidad es inferior a 1,000 pies','Solo en lluvia intensa o niebla','Cada vez que use los limpiaparabrisas'],exp:'La ley de California requiere faros desde 30 minutos después del atardecer hasta 30 minutos antes del amanecer. También debe usar faros cuando la visibilidad sea inferior a 1,000 pies debido al clima, humo u otras condiciones. Además, cuando use sus limpiaparabrisas en la lluvia, también debe usar sus faros.'},
  ans:1
},
{
  id:212, cat:'safety',
  en:{q:'When should you use your high-beam headlights?',opts:['Always at night for maximum visibility','On open roads with no oncoming traffic or vehicles ahead within 500 feet','Only in fog or rain','Only on unlit country roads'],exp:'Use high beams on open roads where there is no oncoming traffic or vehicles ahead within 500 feet. Dim your headlights to low beams when within 500 feet of an oncoming vehicle (approaching) or 300 feet behind another vehicle (following). High beams can blind other drivers.'},
  zh:{q:'什么时候应该使用远光灯？',opts:['夜间始终使用以获得最大能见度','在500英尺内没有对向车辆或前方车辆的开放道路上','只在雾天或雨天','只在没有灯光的乡村道路上'],exp:'在500英尺内没有对向车辆或前方车辆的开放道路上使用远光灯。当距对向车辆500英尺以内（接近）或在另一辆车300英尺后方（跟随）时，将车头灯调暗为近光灯。远光灯可能使其他驾驶者致盲。'},
  zhTW:{q:'什麼時候應該使用遠光燈？',opts:['夜間始終使用以獲得最大能見度','在500英尺內沒有對向車輛或前方車輛的開放道路上','只在霧天或雨天','只在沒有燈光的鄉村道路上'],exp:'在500英尺內沒有對向車輛或前方車輛的開放道路上使用遠光燈。當距對向車輛500英尺以內（接近）或在另一輛車300英尺後方（跟隨）時，將車頭燈調暗為近光燈。遠光燈可能使其他駕駛者致盲。'},
  es:{q:'¿Cuándo debe usar sus faros de luz alta?',opts:['Siempre de noche para máxima visibilidad','En carreteras abiertas sin tráfico en sentido contrario ni vehículos adelante dentro de 500 pies','Solo en niebla o lluvia','Solo en carreteras rurales sin iluminación'],exp:'Use luces altas en carreteras abiertas donde no haya tráfico en sentido contrario ni vehículos adelante dentro de 500 pies. Reduzca sus faros a luces bajas cuando esté a 500 pies de un vehículo que se aproxima (encontrando) o a 300 pies detrás de otro vehículo (siguiendo). Las luces altas pueden cegar a otros conductores.'},
  ans:1
},
{
  id:213, cat:'safety',
  en:{q:'What does California law require regarding window tinting?',opts:['No restrictions on any windows','Front side windows must allow at least 70% of light to pass through','All windows may be completely blacked out','Only the rear window can be tinted'],exp:'California law requires that front side windows must allow at least 70% of visible light to pass through (70% VLT). The windshield may have a 4-inch tint strip at the top. Rear windows can have any level of tinting if the vehicle has dual side mirrors. Violations can result in fix-it tickets.'},
  zh:{q:'加州法律对车窗贴膜有什么要求？',opts:['对任何车窗没有限制','前侧车窗必须至少允许70%的光线通过','所有车窗可以完全变黑','只有后窗可以贴膜'],exp:'加州法律要求前侧车窗必须至少允许70%的可见光通过（70% VLT）。挡风玻璃顶部可以有4英寸的贴膜条。如果车辆有双侧后视镜，后窗可以有任意程度的贴膜。违规可能导致整改传票。'},
  zhTW:{q:'加州法律對車窗貼膜有什麼要求？',opts:['對任何車窗沒有限制','前側車窗必須至少允許70%的光線通過','所有車窗可以完全變黑','只有後窗可以貼膜'],exp:'加州法律要求前側車窗必須至少允許70%的可見光通過（70% VLT）。擋風玻璃頂部可以有4英寸的貼膜條。如果車輛有雙側後視鏡，後窗可以有任意程度的貼膜。違規可能導致整改傳票。'},
  es:{q:'¿Qué requiere la ley de California con respecto al tintado de ventanas?',opts:['Sin restricciones en ninguna ventana','Las ventanas laterales delanteras deben permitir al menos el 70% de la luz pasar','Todas las ventanas pueden estar completamente ennegrecidas','Solo la ventana trasera puede tintarse'],exp:'La ley de California requiere que las ventanas laterales delanteras permitan al menos el 70% de la luz visible pasar (70% VLT). El parabrisas puede tener una tira de tinte de 4 pulgadas en la parte superior. Las ventanas traseras pueden tener cualquier nivel de tintado si el vehículo tiene espejos laterales duales. Las violaciones pueden resultar en multas de reparación.'},
  ans:1
},
{
  id:214, cat:'safety',
  en:{q:'What is the legal tread depth minimum for tires in California?',opts:['1/32 inch','2/32 inch (1/16 inch)','4/32 inch','6/32 inch'],exp:'California requires a minimum tire tread depth of 1/32 inch for the rear tires and 2/32 inch for the front tires. However, safety experts recommend replacing tires when tread depth reaches 4/32 inch, especially in wet conditions. Worn tires dramatically increase stopping distances and risk of hydroplaning.'},
  zh:{q:'在加州轮胎的最小法定花纹深度是多少？',opts:['1/32英寸','2/32英寸（1/16英寸）','4/32英寸','6/32英寸'],exp:'加州要求后轮最小轮胎花纹深度为1/32英寸，前轮为2/32英寸。但安全专家建议当花纹深度达到4/32英寸时更换轮胎，尤其是在潮湿条件下。磨损的轮胎会大幅增加制动距离和水漂风险。'},
  zhTW:{q:'在加州輪胎的最小法定花紋深度是多少？',opts:['1/32英寸','2/32英寸（1/16英寸）','4/32英寸','6/32英寸'],exp:'加州要求後輪最小輪胎花紋深度為1/32英寸，前輪為2/32英寸。但安全專家建議當花紋深度達到4/32英寸時更換輪胎，尤其是在潮濕條件下。磨損的輪胎會大幅增加制動距離和水漂風險。'},
  es:{q:'¿Cuál es la profundidad mínima legal de la banda de rodadura de los neumáticos en California?',opts:['1/32 de pulgada','2/32 de pulgada (1/16 de pulgada)','4/32 de pulgada','6/32 de pulgada'],exp:'California requiere una profundidad mínima de banda de rodadura de 1/32 de pulgada para los neumáticos traseros y 2/32 de pulgada para los neumáticos delanteros. Sin embargo, los expertos en seguridad recomiendan reemplazar los neumáticos cuando la profundidad de la banda llegue a 4/32 de pulgada, especialmente en condiciones húmedas. Los neumáticos desgastados aumentan dramáticamente las distancias de frenado y el riesgo de hidroplaneo.'},
  ans:1
},
{
  id:215, cat:'safety',
  en:{q:'When is it illegal to use your horn in California?',opts:['When passing another vehicle','When a pedestrian is blocking traffic','As a sound device for playing music or as a show of anger','When warning of brake failure'],exp:'In California, horns are only legal for use when reasonably necessary to ensure safe operation — to warn pedestrians or other drivers of danger. Using your horn to express frustration, play music, or as a general greeting is illegal. Excessive or unnecessary horn use can result in a citation.'},
  zh:{q:'在加州什么情况下使用喇叭是非法的？',opts:['在超越另一辆车时','当行人阻塞交通时','作为播放音乐的声音设备或表达愤怒','当警告刹车失灵时'],exp:'在加州，喇叭只有在为确保安全驾驶合理必要时才合法使用——用于警告行人或其他驾驶者存在危险。使用喇叭表达沮丧、播放音乐或作为一般问候是非法的。过度或不必要地使用喇叭可能导致罚款。'},
  zhTW:{q:'在加州什麼情況下使用喇叭是非法的？',opts:['在超越另一輛車時','當行人阻塞交通時','作為播放音樂的聲音設備或表達憤怒','當警告剎車失靈時'],exp:'在加州，喇叭只有在為確保安全駕駛合理必要時才合法使用——用於警告行人或其他駕駛者存在危險。使用喇叭表達沮喪、播放音樂或作為一般問候是非法的。過度或不必要地使用喇叭可能導致罰款。'},
  es:{q:'¿Cuándo es ilegal usar su bocina en California?',opts:['Al adelantar a otro vehículo','Cuando un peatón bloquea el tráfico','Como dispositivo de sonido para reproducir música o como muestra de enojo','Al advertir de falla de frenos'],exp:'En California, las bocinas solo son legales para usarse cuando sea razonablemente necesario para garantizar la operación segura — para advertir a peatones u otros conductores del peligro. Usar su bocina para expresar frustración, reproducir música o como saludo general es ilegal. El uso excesivo o innecesario de bocina puede resultar en una citación.'},
  ans:2
},
{
  id:216, cat:'safety',
  en:{q:'What is the purpose of ABS (Anti-lock Braking System)?',opts:['It automatically applies brakes when you exceed the speed limit','It prevents wheels from locking during hard braking, allowing you to steer','It increases the vehicle\'s maximum braking force by 50%','It monitors tire pressure and adjusts braking automatically'],exp:'ABS prevents wheel lock-up during emergency or hard braking, which allows you to maintain steering control while braking. Without ABS, locked wheels cause skidding and loss of steering. With ABS, you should apply firm, continuous brake pressure — do not pump the brakes, which is a technique for non-ABS vehicles.'},
  zh:{q:'ABS（防抱死制动系统）的目的是什么？',opts:['当您超过速度限制时自动刹车','在紧急刹车时防止车轮锁死，允许您转向','将车辆最大制动力增加50%','监测轮胎压力并自动调节制动'],exp:'ABS在紧急或重刹车时防止车轮锁死，使您在刹车时保持转向控制。没有ABS时，锁死的车轮会导致打滑和失去方向控制。有ABS时，您应施加持续稳定的刹车压力——不要点刹，那是没有ABS车辆的技术。'},
  zhTW:{q:'ABS（防抱死制動系統）的目的是什麼？',opts:['當您超過速度限制時自動剎車','在緊急剎車時防止車輪鎖死，允許您轉向','將車輛最大制動力增加50%','監測輪胎壓力並自動調節制動'],exp:'ABS在緊急或重剎車時防止車輪鎖死，使您在剎車時保持轉向控制。沒有ABS時，鎖死的車輪會導致打滑和失去方向控制。有ABS時，您應施加持續穩定的剎車壓力——不要點剎，那是沒有ABS車輛的技術。'},
  es:{q:'¿Cuál es el propósito del ABS (Sistema de Frenos Antibloqueo)?',opts:['Aplica los frenos automáticamente cuando excede el límite de velocidad','Previene que las ruedas se bloqueen durante el frenado fuerte, permitiéndole dirigir','Aumenta la fuerza máxima de frenado del vehículo en un 50%','Monitorea la presión de los neumáticos y ajusta el frenado automáticamente'],exp:'El ABS previene el bloqueo de ruedas durante el frenado de emergencia o fuerte, lo que le permite mantener el control de dirección mientras frena. Sin ABS, las ruedas bloqueadas causan patinaje y pérdida de dirección. Con ABS, debe aplicar presión de freno firme y continua — no bombee los frenos, que es una técnica para vehículos sin ABS.'},
  ans:1
},
{
  id:217, cat:'safety',
  en:{q:'How often should you check your tire pressure?',opts:['Once a year','Before every long trip and at least monthly','Only when a tire looks flat','Only when a warning light appears'],exp:'Tire pressure should be checked at least once a month and before long trips. Check pressure when tires are "cold" (not driven for 3+ hours) for accurate readings. Proper pressure (found in owner\'s manual or door sticker, not on the tire sidewall) improves fuel economy, handling, and prevents blowouts.'},
  zh:{q:'您应该多频繁检查轮胎气压？',opts:['每年一次','每次长途旅行前及至少每月一次','只有当轮胎看起来瘪时','只有当警告灯出现时'],exp:'轮胎气压应至少每月检查一次，长途旅行前也要检查。在轮胎"冷"时（未行驶超过3小时）检查气压以获得准确读数。适当的气压（在车主手册或车门贴纸中找到，不在轮胎侧面）可改善燃油经济性、操控性并防止爆胎。'},
  zhTW:{q:'您應該多頻繁檢查輪胎氣壓？',opts:['每年一次','每次長途旅行前及至少每月一次','只有當輪胎看起來癟時','只有當警告燈出現時'],exp:'輪胎氣壓應至少每月檢查一次，長途旅行前也要檢查。在輪胎「冷」時（未行駛超過3小時）檢查氣壓以獲得準確讀數。適當的氣壓（在車主手冊或車門貼紙中找到，不在輪胎側面）可改善燃油經濟性、操控性並防止爆胎。'},
  es:{q:'¿Con qué frecuencia debe revisar la presión de sus neumáticos?',opts:['Una vez al año','Antes de cada viaje largo y al menos mensualmente','Solo cuando un neumático parece desinflado','Solo cuando aparece una luz de advertencia'],exp:'La presión de los neumáticos debe revisarse al menos una vez al mes y antes de viajes largos. Revise la presión cuando los neumáticos estén "fríos" (no conducidos por 3+ horas) para lecturas precisas. La presión adecuada (encontrada en el manual del propietario o la pegatina de la puerta, no en la pared lateral del neumático) mejora la economía de combustible, el manejo y previene los reventones.'},
  ans:1
},
{
  id:218, cat:'safety',
  en:{q:'What should you do before backing up your vehicle?',opts:['Sound your horn once and back up slowly','Check all mirrors and look behind by turning your head — then back up slowly','Only check rearview mirror and back up','Back up quickly to avoid keeping other drivers waiting'],exp:'Before backing up, check all mirrors AND physically turn your head to look behind the vehicle. Mirrors have blind spots and cannot show everything behind you. Back up slowly. Children and small obstacles can be invisible in mirrors. Modern backup cameras help but do not replace physical checks.'},
  zh:{q:'倒车前您应该怎么做？',opts:['鸣一声喇叭然后慢慢倒车','检查所有后视镜并转头向后看——然后慢慢倒车','只检查倒后镜然后倒车','快速倒车以避免让其他驾驶者等待'],exp:'倒车前，检查所有后视镜并实际转头向车辆后方看。后视镜有盲点，无法显示您身后的一切。慢慢倒车。儿童和小障碍物在后视镜中可能不可见。现代倒车摄像头有帮助但不能替代实体检查。'},
  zhTW:{q:'倒車前您應該怎麼做？',opts:['鳴一聲喇叭然後慢慢倒車','檢查所有後視鏡並轉頭向後看——然後慢慢倒車','只檢查倒後鏡然後倒車','快速倒車以避免讓其他駕駛者等待'],exp:'倒車前，檢查所有後視鏡並實際轉頭向車輛後方看。後視鏡有盲點，無法顯示您身後的一切。慢慢倒車。兒童和小障礙物在後視鏡中可能不可見。現代倒車攝像頭有幫助但不能替代實體檢查。'},
  es:{q:'¿Qué debe hacer antes de dar marcha atrás con su vehículo?',opts:['Toque la bocina una vez y dé marcha atrás lentamente','Revise todos los espejos y mire hacia atrás girando su cabeza — luego dé marcha atrás lentamente','Solo revise el espejo retrovisor y dé marcha atrás','Dé marcha atrás rápidamente para evitar hacer esperar a otros conductores'],exp:'Antes de dar marcha atrás, revise todos los espejos Y físicamente gire su cabeza para mirar detrás del vehículo. Los espejos tienen puntos ciegos y no pueden mostrar todo lo que hay detrás de usted. Dé marcha atrás lentamente. Los niños y pequeños obstáculos pueden ser invisibles en los espejos. Las cámaras de visión trasera modernas ayudan pero no reemplazan las revisiones físicas.'},
  ans:1
},
{
  id:219, cat:'safety',
  en:{q:'What should you do if your accelerator pedal becomes stuck while driving?',opts:['Turn off the ignition immediately','Shift to neutral, apply brakes firmly, pull to safety, and turn off engine','Press the brake pedal as hard as possible while leaving gear in drive','Pump the accelerator to free it'],exp:'If your accelerator sticks: 1) Shift to neutral — this disconnects engine power. 2) Apply brakes firmly and steer to safety. 3) Turn off the ignition (don\'t lock the steering). 4) Do not turn off the ignition while moving in drive — use neutral first. Modern vehicles also have brake override systems.'},
  zh:{q:'驾驶时油门踏板卡住，您应该怎么做？',opts:['立即关闭点火','换入空档，大力制动，靠边停车，关闭发动机','在保持前进档的同时尽力踩刹车','泵踩油门使其松动'],exp:'如果油门卡住：1) 换入空档——这断开发动机动力。2) 大力制动并驾车到安全位置。3) 关闭点火（不要锁定方向盘）。4) 在前进档行驶时不要关闭点火——先换入空档。现代车辆还有制动优先系统。'},
  zhTW:{q:'駕駛時油門踏板卡住，您應該怎麼做？',opts:['立即關閉點火','換入空擋，大力制動，靠邊停車，關閉發動機','在保持前進擋的同時盡力踩剎車','泵踩油門使其鬆動'],exp:'如果油門卡住：1) 換入空擋——這斷開發動機動力。2) 大力制動並駕車到安全位置。3) 關閉點火（不要鎖定方向盤）。4) 在前進擋行駛時不要關閉點火——先換入空擋。現代車輛還有制動優先系統。'},
  es:{q:'¿Qué debe hacer si el pedal del acelerador se queda atascado mientras conduce?',opts:['Apague el encendido inmediatamente','Cambie a neutral, aplique los frenos firmemente, diríjase a un lugar seguro y apague el motor','Presione el pedal de freno lo más fuerte posible mientras deja la marcha en conducción','Bombee el acelerador para liberarlo'],exp:'Si su acelerador se atasca: 1) Cambie a neutral — esto desconecta la potencia del motor. 2) Aplique los frenos firmemente y diríjase a un lugar seguro. 3) Apague el encendido (no bloquee la dirección). 4) No apague el encendido mientras se mueve en conducción — use neutral primero. Los vehículos modernos también tienen sistemas de anulación de frenos.'},
  ans:1
},
{
  id:220, cat:'safety',
  en:{q:'What is the safest way to adjust your mirrors before driving?',opts:['Adjust them while driving to fine-tune your view','Adjust all mirrors while parked — side mirrors should show just a sliver of your car and the lanes behind','Point side mirrors downward to see the ground next to your car','Keep mirrors in the position set by the last driver'],exp:'Adjust mirrors before driving. For side mirrors, tilt them outward enough that you can barely see the side of your own car — this maximizes your view of adjacent lanes and reduces blind spots. The rearview mirror should frame the entire rear window. Then check for blind spots by physically turning your head.'},
  zh:{q:'驾驶前调整后视镜的最安全方式是什么？',opts:['在行驶中调整以微调视野','在停车时调整所有后视镜——侧镜应仅能看到您的车身极小部分和后方车道','将侧镜向下倾斜以看到车旁的地面','保持上一位驾驶者设置的镜子位置'],exp:'在驾驶前调整后视镜。对于侧镜，向外倾斜到几乎看不到自己车身边缘——这最大化了您对相邻车道的视野并减少盲点。倒后镜应框住整个后窗。然后通过实际转头检查盲点。'},
  zhTW:{q:'駕駛前調整後視鏡的最安全方式是什麼？',opts:['在行駛中調整以微調視野','在停車時調整所有後視鏡——側鏡應僅能看到您的車身極小部分和後方車道','將側鏡向下傾斜以看到車旁的地面','保持上一位駕駛者設置的鏡子位置'],exp:'在駕駛前調整後視鏡。對於側鏡，向外傾斜到幾乎看不到自己車身邊緣——這最大化了您對相鄰車道的視野並減少盲點。倒後鏡應框住整個後窗。然後通過實際轉頭檢查盲點。'},
  es:{q:'¿Cuál es la forma más segura de ajustar sus espejos antes de conducir?',opts:['Ajústelos mientras conduce para afinar su vista','Ajuste todos los espejos mientras está estacionado — los espejos laterales deben mostrar solo una pizca de su auto y los carriles de atrás','Apunte los espejos laterales hacia abajo para ver el suelo junto a su auto','Mantenga los espejos en la posición establecida por el último conductor'],exp:'Ajuste los espejos antes de conducir. Para los espejos laterales, inclínelos hacia afuera lo suficiente para que apenas pueda ver el lado de su propio auto — esto maximiza su vista de los carriles adyacentes y reduce los puntos ciegos. El espejo retrovisor debe enmarcar toda la ventana trasera. Luego revise los puntos ciegos girando físicamente su cabeza.'},
  ans:1
},

// ── Batch 23 · Traffic Laws (More) · Q221–230 ───────────────────────────────
{
  id:221, cat:'laws',
  en:{q:'What does it mean when a school bus displays flashing amber (yellow) lights?',opts:['The bus is already stopped — stop your vehicle','The bus is about to stop — slow down and prepare to stop','Proceed normally — amber means caution only','Amber lights have no legal significance'],exp:'Flashing amber lights on a school bus mean the bus is about to stop to load or unload children. Slow down and prepare to stop. When the bus then activates flashing red lights and extends its stop arm, you must stop completely and remain stopped.'},
  zh:{q:'当校车显示闪烁琥珀色（黄色）灯光时意味着什么？',opts:['车辆已经停止——停下您的车','车辆即将停止——减速准备停车','正常通行——琥珀色只表示谨慎','琥珀色灯没有法律意义'],exp:'校车上闪烁的琥珀色灯意味着车辆即将停止以接送儿童。减速并准备停车。当校车随后激活闪烁红灯并伸出停止臂时，您必须完全停车并保持停车状态。'},
  zhTW:{q:'當校車顯示閃爍琥珀色（黃色）燈光時意味著什麼？',opts:['車輛已經停止——停下您的車','車輛即將停止——減速準備停車','正常通行——琥珀色只表示謹慎','琥珀色燈沒有法律意義'],exp:'校車上閃爍的琥珀色燈意味著車輛即將停止以接送兒童。減速並準備停車。當校車隨後激活閃爍紅燈並伸出停止臂時，您必須完全停車並保持停車狀態。'},
  es:{q:'¿Qué significa cuando un autobús escolar muestra luces ámbar (amarillas) intermitentes?',opts:['El autobús ya se detuvo — detenga su vehículo','El autobús está a punto de detenerse — reduzca la velocidad y prepárese para detenerse','Proceda normalmente — ámbar solo significa precaución','Las luces ámbar no tienen significado legal'],exp:'Las luces ámbar intermitentes en un autobús escolar significan que el autobús está a punto de detenerse para cargar o descargar niños. Reduzca la velocidad y prepárese para detenerse. Cuando el autobús luego activa luces rojas intermitentes y extiende su brazo de pare, debe detenerse completamente y permanecer detenido.'},
  ans:1
},
{
  id:222, cat:'laws',
  en:{q:'When is it legal to drive on a bicycle lane?',opts:['When passing a slow vehicle','Only when within 200 feet of making a right turn and when entering or exiting a driveway','Whenever there is no bicycle traffic','Never — bicycle lanes are always off-limits to motor vehicles'],exp:'Motorists may enter a bicycle lane only when: (1) making a right turn within 200 feet of the intersection, (2) entering or exiting a driveway, or (3) parking where permitted. You should never travel long distances in a bike lane. Look for cyclists before entering.'},
  zh:{q:'什么时候可以合法行驶在自行车道上？',opts:['超越慢速车辆时','仅当在右转200英尺以内且进出车道时','当没有自行车交通时','永远不合法——自行车道对机动车始终禁止'],exp:'驾驶者只能在以下情况进入自行车道：(1) 在路口200英尺内右转，(2) 进出车道，或(3) 在允许的地方停车。您不应该在自行车道长距离行驶。进入前查看自行车。'},
  zhTW:{q:'什麼時候可以合法行駛在自行車道上？',opts:['超越慢速車輛時','僅當在右轉200英尺以內且進出車道時','當沒有自行車交通時','永遠不合法——自行車道對機動車始終禁止'],exp:'駕駛者只能在以下情況進入自行車道：(1) 在路口200英尺內右轉，(2) 進出車道，或(3) 在允許的地方停車。您不應該在自行車道長距離行駛。進入前查看自行車。'},
  es:{q:'¿Cuándo es legal conducir en un carril para bicicletas?',opts:['Al adelantar a un vehículo lento','Solo cuando esté dentro de 200 pies de hacer un giro a la derecha y al entrar o salir de una entrada de auto','Cuando no hay tráfico de bicicletas','Nunca — los carriles para bicicletas siempre están prohibidos para vehículos de motor'],exp:'Los conductores solo pueden entrar a un carril para bicicletas cuando: (1) hacen un giro a la derecha dentro de 200 pies de la intersección, (2) entran o salen de una entrada de auto, o (3) estacionan donde está permitido. Nunca debe viajar largas distancias en un carril de bicicletas. Busque ciclistas antes de entrar.'},
  ans:1
},
{
  id:223, cat:'laws',
  en:{q:'What must you do when you see a "Yield" sign?',opts:['Stop completely before proceeding','Slow down and give right-of-way to crossing traffic — stop if necessary','Honk to warn cross traffic that you are approaching','Proceed normally — yield signs are advisory only'],exp:'A yield sign means you must slow down and be prepared to stop. You must give the right of way to traffic already in the intersection or approaching closely. You do not have to stop unless it is necessary for safety. If there is no conflicting traffic, you may proceed without stopping.'},
  zh:{q:'看到"让行"标志时您必须怎么做？',opts:['在继续前完全停车','减速并给予正在穿越的交通优先权——必要时停车','鸣喇叭警告横向交通您正在靠近','正常通行——让行标志只是建议性的'],exp:'让行标志意味着您必须减速并准备停车。您必须给已经在路口或正在靠近的交通让行。除非为了安全需要，您不必停车。如果没有冲突的交通，您可以不停车继续通行。'},
  zhTW:{q:'看到「讓行」標誌時您必須怎麼做？',opts:['在繼續前完全停車','減速並給予正在穿越的交通優先權——必要時停車','鳴喇叭警告橫向交通您正在靠近','正常通行——讓行標誌只是建議性的'],exp:'讓行標誌意味著您必須減速並準備停車。您必須給已經在路口或正在靠近的交通讓行。除非為了安全需要，您不必停車。如果沒有衝突的交通，您可以不停車繼續通行。'},
  es:{q:'¿Qué debe hacer cuando ve una señal de "Ceder"?',opts:['Detenga completamente antes de proceder','Reduzca la velocidad y dé el derecho de paso al tráfico que cruza — detenga si es necesario','Toque la bocina para advertir al tráfico cruzado que se está aproximando','Proceda normalmente — las señales de ceder son solo de aviso'],exp:'Una señal de ceder significa que debe reducir la velocidad y estar preparado para detenerse. Debe dar el derecho de paso al tráfico ya en la intersección o que se aproxima de cerca. No tiene que detenerse a menos que sea necesario para la seguridad. Si no hay tráfico en conflicto, puede proceder sin detenerse.'},
  ans:1
},
{
  id:224, cat:'laws',
  en:{q:'How close to a driveway entrance can you legally park?',opts:['5 feet','10 feet','Within 3 feet of a driveway — no parking within the driveway itself','You can park directly in front of a driveway if you are within line of sight'],exp:'You must not park within 3 feet of a public or private driveway entrance. Parking in front of a driveway can block residents or business from entering or exiting, and it is illegal. This applies even if the driveway belongs to your own home — you can be ticketed.'},
  zh:{q:'在加州您可以合法地距离车道入口多近停车？',opts:['5英尺','10英尺','车道3英尺以内——不得在车道内停车','如果在视线范围内可以直接停在车道前面'],exp:'您不得在公共或私人车道入口3英尺以内停车。在车道前面停车会阻碍居民或企业进出，这是违法的。即使车道属于您自己的家——您也可能被开罚单。'},
  zhTW:{q:'在加州您可以合法地距離車道入口多近停車？',opts:['5英尺','10英尺','車道3英尺以內——不得在車道內停車','如果在視線範圍內可以直接停在車道前面'],exp:'您不得在公共或私人車道入口3英尺以內停車。在車道前面停車會阻礙居民或企業進出，這是違法的。即使車道屬於您自己的家——您也可能被開罰單。'},
  es:{q:'¿A qué distancia de una entrada de acceso puede estacionar legalmente?',opts:['5 pies','10 pies','Dentro de 3 pies de una entrada — sin estacionamiento dentro de la entrada misma','Puede estacionar directamente frente a una entrada si está en línea de vista'],exp:'No debe estacionar dentro de 3 pies de una entrada de acceso pública o privada. Estacionar frente a una entrada puede bloquear a los residentes o negocios para entrar o salir, y es ilegal. Esto aplica incluso si la entrada pertenece a su propia casa — puede recibir una multa.'},
  ans:2
},
{
  id:225, cat:'laws',
  en:{q:'What must you do when you approach a railroad crossing with flashing red lights and ringing bells?',opts:['Slow down and proceed if no train is visible','Stop at least 15 feet from the nearest rail and wait until the signals stop','Stop and proceed only if the crossing arms are up','Yield to the train and proceed when there is a gap'],exp:'When a railroad crossing shows flashing red lights and bells, you must stop at least 15 feet from the nearest rail and remain stopped until the signals stop and it is safe to proceed. Never try to beat a train — trains cannot stop quickly and are much heavier than they appear.'},
  zh:{q:'靠近有闪烁红灯和响铃的铁路道口时，您必须怎么做？',opts:['减速，如果没有可见火车则继续通行','停在最近轨道至少15英尺处等待信号停止','停车，仅当道口栏杆升起时继续通行','让行火车，在有间隙时继续通行'],exp:'当铁路道口出现闪烁红灯和铃声时，您必须停在最近轨道至少15英尺处，并保持停车状态直到信号停止且可以安全通行。永远不要试图抢在火车前面——火车无法快速停下，而且比看起来重得多。'},
  zhTW:{q:'靠近有閃爍紅燈和響鈴的鐵路道口時，您必須怎麼做？',opts:['減速，如果沒有可見火車則繼續通行','停在最近軌道至少15英尺處等待信號停止','停車，僅當道口欄杆升起時繼續通行','讓行火車，在有間隙時繼續通行'],exp:'當鐵路道口出現閃爍紅燈和鈴聲時，您必須停在最近軌道至少15英尺處，並保持停車狀態直到信號停止且可以安全通行。永遠不要試圖搶在火車前面——火車無法快速停下，而且比看起來重得多。'},
  es:{q:'¿Qué debe hacer cuando se aproxima a un cruce ferroviario con luces rojas intermitentes y campanas?',opts:['Reduzca la velocidad y proceda si no hay tren visible','Detenga al menos 15 pies del riel más cercano y espere hasta que las señales paren','Detenga y proceda solo si los brazos del cruce están levantados','Ceda al tren y proceda cuando haya un hueco'],exp:'Cuando un cruce ferroviario muestra luces rojas intermitentes y campanas, debe detenerse al menos 15 pies del riel más cercano y permanecer detenido hasta que las señales paren y sea seguro proceder. Nunca intente adelantarse al tren — los trenes no pueden detenerse rápidamente y son mucho más pesados de lo que parecen.'},
  ans:1
},
{
  id:226, cat:'laws',
  en:{q:'What is a "Basic Speed Law" violation?',opts:['Exceeding a posted speed limit','Driving at any speed that is unsafe for current conditions, regardless of the posted limit','Driving under the minimum speed','Exceeding 65 mph on any California road'],exp:'California\'s Basic Speed Law states that no person shall drive a vehicle at a speed greater than is reasonable or prudent, having due regard for weather, visibility, traffic, and road conditions. You can be cited for a Basic Speed Law violation even if you are driving at or below the posted limit.'},
  zh:{q:'什么是"基本速度法"违规？',opts:['超过标志速度限制','在任何对当前条件不安全的速度下驾驶，无论标志限速如何','以低于最低速度行驶','在加州任何道路超过65英里/小时'],exp:'加州的基本速度法规定，任何人不得以超过合理或谨慎速度驾驶车辆，要适当考虑天气、能见度、交通和路况。即使您以标志限速或以下驾驶，也可能因违反基本速度法而被引证。'},
  zhTW:{q:'什麼是「基本速度法」違規？',opts:['超過標誌速度限制','在任何對當前條件不安全的速度下駕駛，無論標誌限速如何','以低於最低速度行駛','在加州任何道路超過65英里/小時'],exp:'加州的基本速度法規定，任何人不得以超過合理或謹慎速度駕駛車輛，要適當考慮天氣、能見度、交通和路況。即使您以標誌限速或以下駕駛，也可能因違反基本速度法而被引證。'},
  es:{q:'¿Qué es una violación de la "Ley de Velocidad Básica"?',opts:['Exceder un límite de velocidad publicado','Conducir a cualquier velocidad que sea insegura para las condiciones actuales, independientemente del límite publicado','Conducir por debajo de la velocidad mínima','Exceder 65 mph en cualquier carretera de California'],exp:'La Ley de Velocidad Básica de California establece que ninguna persona conducirá un vehículo a una velocidad mayor de lo que es razonable o prudente, teniendo debida consideración por el clima, visibilidad, tráfico y condiciones de la carretera. Puede ser citado por una violación de la Ley de Velocidad Básica incluso si conduce al límite publicado o por debajo de él.'},
  ans:1
},
{
  id:227, cat:'laws',
  en:{q:'At what age can children legally sit in the front seat of a vehicle in California?',opts:['5 years','8 years or 57 inches tall','13 years — children under 13 must sit in back','Any age if properly restrained'],exp:'California law requires children under 8 years old to be secured in a child passenger restraint system (car seat or booster seat) in the rear seat. Once a child is 8 years old OR 57 inches (4\'9") tall, they may use an adult safety belt and ride in the front seat.'},
  zh:{q:'在加州，儿童可以合法坐在车辆前排的年龄是多少？',opts:['5岁','8岁或57英寸高','13岁——13岁以下儿童必须坐后排','任何年龄，只要正确使用束缚装置'],exp:'加州法律要求8岁以下儿童在后排座位使用儿童安全约束系统（儿童座椅或增高椅）。一旦儿童年满8岁或身高达到57英寸（4英尺9英寸），可以使用成人安全带并坐前排。'},
  zhTW:{q:'在加州，兒童可以合法坐在車輛前排的年齡是多少？',opts:['5歲','8歲或57英寸高','13歲——13歲以下兒童必須坐後排','任何年齡，只要正確使用束縛裝置'],exp:'加州法律要求8歲以下兒童在後排座位使用兒童安全約束系統（兒童座椅或增高椅）。一旦兒童年滿8歲或身高達到57英寸（4英尺9英寸），可以使用成人安全帶並坐前排。'},
  es:{q:'¿A qué edad pueden los niños sentarse legalmente en el asiento delantero de un vehículo en California?',opts:['5 años','8 años o 57 pulgadas de altura','13 años — los niños menores de 13 deben sentarse atrás','Cualquier edad si están correctamente sujetos'],exp:'La ley de California requiere que los niños menores de 8 años estén asegurados en un sistema de sujeción de pasajeros infantiles (silla de auto o asiento elevador) en el asiento trasero. Una vez que el niño tiene 8 años O mide 57 pulgadas (4\'9"), pueden usar un cinturón de seguridad para adultos y viajar en el asiento delantero.'},
  ans:1
},
{
  id:228, cat:'laws',
  en:{q:'What should you do when being tailgated?',opts:['Brake suddenly to teach the tailgater a lesson','Speed up to create more distance in front','Gradually slow down to increase your following distance and encourage the tailgater to pass','Maintain your speed and ignore the tailgater'],exp:'When tailgated, gradually ease up on the gas to create more distance between you and the vehicle ahead — this gives you a larger buffer if you need to brake. It may also encourage the tailgater to pass. Never brake suddenly when being tailgated — this can cause a rear-end collision.'},
  zh:{q:'当被紧跟时您应该怎么做？',opts:['突然刹车以给紧跟者一个教训','加速以在前方创造更多距离','逐渐减速以增加跟车距离并鼓励紧跟者超车','保持速度并无视紧跟者'],exp:'当被紧跟时，逐渐松开油门以在您和前方车辆之间创造更多距离——这在您需要刹车时提供更大的缓冲。这也可能鼓励紧跟者超车。被紧跟时切勿突然刹车——这可能导致追尾碰撞。'},
  zhTW:{q:'當被緊跟時您應該怎麼做？',opts:['突然剎車以給緊跟者一個教訓','加速以在前方創造更多距離','逐漸減速以增加跟車距離並鼓勵緊跟者超車','保持速度並無視緊跟者'],exp:'當被緊跟時，逐漸鬆開油門以在您和前方車輛之間創造更多距離——這在您需要剎車時提供更大的緩衝。這也可能鼓勵緊跟者超車。被緊跟時切勿突然剎車——這可能導致追尾碰撞。'},
  es:{q:'¿Qué debe hacer cuando lo están siguiendo de cerca?',opts:['Frene repentinamente para enseñarle una lección al que lo sigue','Acelere para crear más distancia adelante','Reduzca gradualmente la velocidad para aumentar su distancia de seguimiento y alentar al que lo sigue a adelantar','Mantenga su velocidad e ignore al que lo sigue'],exp:'Cuando lo siguen de cerca, afloje gradualmente el acelerador para crear más distancia entre usted y el vehículo de adelante — esto le da un mayor margen si necesita frenar. También puede alentar al que lo sigue a adelantar. Nunca frene repentinamente cuando lo siguen de cerca — esto puede causar una colisión trasera.'},
  ans:2
},
{
  id:229, cat:'laws',
  en:{q:'What is "road rage" and what should you do if confronted by an aggressive driver?',opts:['A minor traffic violation — respond calmly by honking','Dangerous behavior by an angry driver — avoid eye contact, do not respond, and call 911 if threatened','Normal behavior in traffic — match their behavior to establish boundaries','Illegal only if the other driver causes an accident'],exp:'Road rage involves dangerous driving behavior triggered by anger. If confronted by an aggressive driver: avoid eye contact, do not respond to gestures or honking, do not pull over unless necessary, drive to a busy public place or police station if followed, and call 911 if you feel threatened.'},
  zh:{q:'"路怒"是什么，如果遇到攻击性驾驶者您应该怎么做？',opts:['轻微的交通违规——平静地回应鸣喇叭','愤怒驾驶者的危险行为——避免眼神接触，不要回应，如果受到威胁拨打911','正常交通行为——匹配他们的行为以建立界限','仅当其他驾驶者造成事故时才违法'],exp:'"路怒"涉及愤怒引发的危险驾驶行为。如果遇到攻击性驾驶者：避免眼神接触，不要回应手势或喇叭，非必要不要靠边停车，如果被跟踪则驾车到繁忙的公共场所或警察局，如果感到受威胁拨打911。'},
  zhTW:{q:'「路怒」是什麼，如果遇到攻擊性駕駛者您應該怎麼做？',opts:['輕微的交通違規——平靜地回應鳴喇叭','憤怒駕駛者的危險行為——避免眼神接觸，不要回應，如果受到威脅撥打911','正常交通行為——匹配他們的行為以建立界限','僅當其他駕駛者造成事故時才違法'],exp:'"路怒"涉及憤怒引發的危險駕駛行為。如果遇到攻擊性駕駛者：避免眼神接觸，不要回應手勢或喇叭，非必要不要靠邊停車，如果被跟蹤則駕車到繁忙的公共場所或警察局，如果感到受威脅撥打911。'},
  es:{q:'¿Qué es la "ira al volante" y qué debe hacer si es confrontado por un conductor agresivo?',opts:['Una infracción de tráfico menor — responda con calma tocando la bocina','Comportamiento peligroso de un conductor enojado — evite el contacto visual, no responda y llame al 911 si es amenazado','Comportamiento normal en el tráfico — iguale su comportamiento para establecer límites','Ilegal solo si el otro conductor causa un accidente'],exp:'La ira al volante implica comportamiento de conducción peligroso desencadenado por el enojo. Si es confrontado por un conductor agresivo: evite el contacto visual, no responda a gestos o bocinas, no se orille a menos que sea necesario, conduzca a un lugar público concurrido o estación de policía si lo siguen y llame al 911 si se siente amenazado.'},
  ans:1
},
{
  id:230, cat:'laws',
  en:{q:'You receive a traffic ticket in California. What happens if you ignore it?',opts:['Nothing — tickets expire after 1 year','A warrant may be issued for your arrest and your license may be suspended','You will receive a warning letter first','The fine doubles but no other consequences'],exp:'Ignoring a traffic ticket in California results in serious consequences: a "Failure to Appear" (FTA) charge, a $300 civil assessment added to the fine, a hold on your DMV record preventing license renewal, and potentially a bench warrant for your arrest. Always respond to tickets by the date shown.'},
  zh:{q:'您在加州收到了交通罚单。如果您无视它会发生什么？',opts:['什么都不会——罚单1年后过期','可能对您发出逮捕令并暂停您的驾照','您会先收到警告信','罚款翻倍但没有其他后果'],exp:'无视加州交通罚单会产生严重后果："未出庭"（FTA）指控、罚款额外增加$300的民事评估、DMV记录上阻止驾照续期的限制，以及可能的逮捕传票。始终在显示的日期前回应罚单。'},
  zhTW:{q:'您在加州收到了交通罰單。如果您無視它會發生什麼？',opts:['什麼都不會——罰單1年後過期','可能對您發出逮捕令並暫停您的駕照','您會先收到警告信','罰款翻倍但沒有其他後果'],exp:'無視加州交通罰單會產生嚴重後果：「未出庭」（FTA）指控、罰款額外增加$300的民事評估、DMV記錄上阻止駕照續期的限制，以及可能的逮捕傳票。始終在顯示的日期前回應罰單。'},
  es:{q:'Recibe una multa de tráfico en California. ¿Qué sucede si la ignora?',opts:['Nada — las multas expiran después de 1 año','Se puede emitir una orden de arresto y su licencia puede suspenderse','Primero recibirá una carta de advertencia','La multa se duplica pero no hay otras consecuencias'],exp:'Ignorar una multa de tráfico en California resulta en consecuencias graves: un cargo de "No Comparecencia" (FTA), una evaluación civil de $300 agregada a la multa, un bloqueo en su expediente del DMV que impide la renovación de la licencia, y potencialmente una orden de arresto. Siempre responda a las multas antes de la fecha indicada.'},
  ans:1
},

// ── Batch 24 · Intersections & Right of Way · Q231–240 ──────────────────────
{
  id:231, cat:'rightofway',
  en:{q:'At a two-way stop, who has the right of way?',opts:['The vehicle on the right','Traffic on the through street has right of way over stopped traffic','Whoever was waiting longest','The larger vehicle'],exp:'At a two-way stop (only two sides have stop signs), traffic on the un-signed through street has the right of way. Vehicles with stop signs must yield to all traffic on the through road. This is different from a four-way stop where all must stop first.'},
  zh:{q:'在双向停车路口，谁有优先通行权？',opts:['右侧车辆','通行街道上的交通优先于停止的交通','等待时间最长的人','较大的车辆'],exp:'在双向停车路口（只有两边有停车标志），无标志通行街道上的交通有优先通行权。有停车标志的车辆必须让行通行道路上的所有交通。这与四路停车不同，四路停车时所有车辆都必须先停车。'},
  zhTW:{q:'在雙向停車路口，誰有優先通行權？',opts:['右側車輛','通行街道上的交通優先於停止的交通','等待時間最長的人','較大的車輛'],exp:'在雙向停車路口（只有兩邊有停車標誌），無標誌通行街道上的交通有優先通行權。有停車標誌的車輛必須讓行通行道路上的所有交通。這與四路停車不同，四路停車時所有車輛都必須先停車。'},
  es:{q:'En una parada de dos vías, ¿quién tiene el derecho de paso?',opts:['El vehículo de la derecha','El tráfico en la calle de paso tiene derecho de paso sobre el tráfico detenido','Quien llevaba más tiempo esperando','El vehículo más grande'],exp:'En una parada de dos vías (solo dos lados tienen señales de stop), el tráfico en la calle de paso sin señal tiene el derecho de paso. Los vehículos con señales de stop deben ceder a todo el tráfico en la carretera de paso. Esto es diferente de una parada de cuatro vías donde todos deben detenerse primero.'},
  ans:1
},
{
  id:232, cat:'rightofway',
  en:{q:'Two vehicles are facing each other, both waiting to turn left. Who goes first?',opts:['The vehicle that has been waiting longer','Either can proceed — they should turn in front of each other (front-to-front)','The vehicle on the right','Both must wait for each other indefinitely'],exp:'When two vehicles face each other both waiting to turn left, each should pass to the right of the other and complete the left turn (front-to-front turns). This is safer than turning behind each other, as it maintains visibility of oncoming traffic.'},
  zh:{q:'两辆车面对面，都在等待左转。谁先行？',opts:['等待时间更长的车辆','任何一辆都可以——它们应该互相转向（前对前）','右侧车辆','两辆必须无限期互相等待'],exp:'当两辆车面对面都等待左转时，每辆车应该在对方右侧通过并完成左转（前对前转弯）。这比在对方后面转弯更安全，因为它保持了对对向交通的能见度。'},
  zhTW:{q:'兩輛車面對面，都在等待左轉。誰先行？',opts:['等待時間更長的車輛','任何一輛都可以——它們應該互相轉向（前對前）','右側車輛','兩輛必須無限期互相等待'],exp:'當兩輛車面對面都等待左轉時，每輛車應該在對方右側通過並完成左轉（前對前轉彎）。這比在對方後面轉彎更安全，因為它保持了對對向交通的能見度。'},
  es:{q:'Dos vehículos están frente a frente, ambos esperando girar a la izquierda. ¿Quién va primero?',opts:['El vehículo que ha esperado más tiempo','Cualquiera puede proceder — deben girar frente a frente (frente-a-frente)','El vehículo de la derecha','Ambos deben esperarse indefinidamente'],exp:'Cuando dos vehículos se enfrentan ambos esperando girar a la izquierda, cada uno debe pasar a la derecha del otro y completar el giro a la izquierda (giros frente a frente). Esto es más seguro que girar detrás del otro, ya que mantiene la visibilidad del tráfico que viene en sentido contrario.'},
  ans:1
},
{
  id:233, cat:'rightofway',
  en:{q:'Who has the right of way at an uncontrolled intersection (no signs or signals)?',opts:['The vehicle on the left','The vehicle on the right','The vehicle that is going straight','The first vehicle to enter the intersection'],exp:'At an uncontrolled intersection (no signs or signals), the vehicle on the RIGHT has the right of way. This is California\'s basic right-of-way rule: yield to the vehicle approaching from your right. If you arrive at the same time, the vehicle on the right goes first.'},
  zh:{q:'在无控制路口（无标志或信号灯），谁有优先通行权？',opts:['左侧车辆','右侧车辆','直行车辆','最先进入路口的车辆'],exp:'在无控制路口（无标志或信号灯），右侧的车辆有优先通行权。这是加州基本的优先通行权规则：让行从您右侧靠近的车辆。如果同时到达，右侧的车辆先行。'},
  zhTW:{q:'在無控制路口（無標誌或信號燈），誰有優先通行權？',opts:['左側車輛','右側車輛','直行車輛','最先進入路口的車輛'],exp:'在無控制路口（無標誌或信號燈），右側的車輛有優先通行權。這是加州基本的優先通行權規則：讓行從您右側靠近的車輛。如果同時到達，右側的車輛先行。'},
  es:{q:'¿Quién tiene el derecho de paso en una intersección no controlada (sin señales o semáforos)?',opts:['El vehículo de la izquierda','El vehículo de la derecha','El vehículo que va recto','El primer vehículo en entrar a la intersección'],exp:'En una intersección no controlada (sin señales o semáforos), el vehículo de la DERECHA tiene el derecho de paso. Esta es la regla básica de derecho de paso de California: ceda al vehículo que se aproxima desde su derecha. Si llegan al mismo tiempo, el vehículo de la derecha va primero.'},
  ans:1
},
{
  id:234, cat:'rightofway',
  en:{q:'A vehicle is already in the intersection when the light turns red. What should that vehicle do?',opts:['Stop immediately in the intersection','Back out of the intersection quickly','Complete the turn or proceed through safely','Wait in the intersection until the next green light'],exp:'A vehicle that has already entered an intersection on a green or yellow light may complete its turn or proceed through safely even if the light turns red while in the intersection. Stopping in the middle of an intersection is dangerous and blocks cross traffic.'},
  zh:{q:'当灯变红时一辆车已经在路口内。那辆车应该怎么做？',opts:['立即在路口内停车','迅速倒退出路口','安全地完成转弯或继续通过','在路口内等待直到下一个绿灯'],exp:'在路口内已经在绿灯或黄灯时进入路口的车辆，即使灯在路口内变红，也可以安全地完成转弯或继续通过。在路口中间停车很危险，会阻塞横向交通。'},
  zhTW:{q:'當燈變紅時一輛車已經在路口內。那輛車應該怎麼做？',opts:['立即在路口內停車','迅速倒退出路口','安全地完成轉彎或繼續通過','在路口內等待直到下一個綠燈'],exp:'在路口內已經在綠燈或黃燈時進入路口的車輛，即使燈在路口內變紅，也可以安全地完成轉彎或繼續通過。在路口中間停車很危險，會阻塞橫向交通。'},
  es:{q:'Un vehículo ya está en la intersección cuando el semáforo se pone en rojo. ¿Qué debe hacer ese vehículo?',opts:['Detenerse inmediatamente en la intersección','Retroceder rápidamente de la intersección','Completar el giro o proceder con seguridad','Esperar en la intersección hasta el próximo semáforo verde'],exp:'Un vehículo que ya ha entrado a una intersección con semáforo verde o amarillo puede completar su giro o proceder con seguridad incluso si el semáforo se pone en rojo mientras está en la intersección. Detenerse en medio de una intersección es peligroso y bloquea el tráfico cruzado.'},
  ans:2
},
{
  id:235, cat:'rightofway',
  en:{q:'You want to turn right at a red light. When is this allowed?',opts:['Always — right on red is always legal in California','After coming to a complete stop, yielding to traffic and pedestrians, if no sign prohibits it','Whenever there is no oncoming traffic','Only when traffic is light'],exp:'You may turn right on a red light in California after making a complete stop, yielding to all traffic and pedestrians, and only when no sign prohibits the turn. Some intersections have "No Turn on Red" signs — you must obey these. Always check for pedestrians before turning.'},
  zh:{q:'您想在红灯时右转。什么时候允许这样做？',opts:['始终允许——在加州在红灯右转始终合法','完全停车后，在让行车辆和行人的情况下，如果没有标志禁止','当没有对向车辆时','只有当交通稀少时'],exp:'在加州，完全停车、让行所有车辆和行人，且没有标志禁止转弯时，您可以在红灯右转。有些路口有"红灯不得右转"标志——您必须遵守这些标志。转弯前始终检查行人。'},
  zhTW:{q:'您想在紅燈時右轉。什麼時候允許這樣做？',opts:['始終允許——在加州在紅燈右轉始終合法','完全停車後，在讓行車輛和行人的情況下，如果沒有標誌禁止','當沒有對向車輛時','只有當交通稀少時'],exp:'在加州，完全停車、讓行所有車輛和行人，且沒有標誌禁止轉彎時，您可以在紅燈右轉。有些路口有「紅燈不得右轉」標誌——您必須遵守這些標誌。轉彎前始終檢查行人。'},
  es:{q:'Quiere girar a la derecha en un semáforo en rojo. ¿Cuándo está permitido?',opts:['Siempre — girar a la derecha en rojo siempre es legal en California','Después de detenerse completamente, cediendo al tráfico y peatones, si ninguna señal lo prohíbe','Cuando no hay tráfico en sentido contrario','Solo cuando el tráfico es ligero'],exp:'Puede girar a la derecha en un semáforo en rojo en California después de hacer una parada completa, cediendo a todo el tráfico y peatones, y solo cuando ninguna señal prohíbe el giro. Algunas intersecciones tienen señales de "No Girar en Rojo" — debe obedecerlas. Siempre revise los peatones antes de girar.'},
  ans:1
},
{
  id:236, cat:'rightofway',
  en:{q:'Who has the right of way when an emergency vehicle is approaching from behind?',opts:['You do — maintain your speed','The emergency vehicle — pull to the right and stop','The vehicle ahead of you — follow their lead','Traffic signals override emergency vehicles'],exp:'Emergency vehicles with lights and sirens always have the right of way. Pull to the right side of the road and stop, regardless of which direction the emergency vehicle is coming from. Do not block intersections. Once the vehicle passes, check for additional emergency vehicles before proceeding.'},
  zh:{q:'当紧急车辆从后方靠近时，谁有优先通行权？',opts:['您——保持速度','紧急车辆——靠右停车','前方的车辆——跟随他们的行动','交通信号灯优先于紧急车辆'],exp:'有警灯和警报声的紧急车辆始终有优先通行权。无论紧急车辆从哪个方向来，都要靠右停在路边。不要阻塞路口。车辆通过后，在继续前检查是否还有其他紧急车辆。'},
  zhTW:{q:'當緊急車輛從後方靠近時，誰有優先通行權？',opts:['您——保持速度','緊急車輛——靠右停車','前方的車輛——跟隨他們的行動','交通信號燈優先於緊急車輛'],exp:'有警燈和警報聲的緊急車輛始終有優先通行權。無論緊急車輛從哪個方向來，都要靠右停在路邊。不要阻塞路口。車輛通過後，在繼續前檢查是否還有其他緊急車輛。'},
  es:{q:'¿Quién tiene el derecho de paso cuando un vehículo de emergencia se aproxima por detrás?',opts:['Usted — mantenga su velocidad','El vehículo de emergencia — orillese a la derecha y detenga','El vehículo de adelante — siga su ejemplo','Los semáforos tienen prioridad sobre los vehículos de emergencia'],exp:'Los vehículos de emergencia con luces y sirenas siempre tienen el derecho de paso. Orillese al lado derecho de la carretera y detenga, independientemente de la dirección de la que venga el vehículo de emergencia. No bloquee las intersecciones. Una vez que el vehículo pase, revise si hay vehículos de emergencia adicionales antes de proceder.'},
  ans:1
},
{
  id:237, cat:'rightofway',
  en:{q:'You are driving in a traffic circle (roundabout) and someone wants to enter. Who has the right of way?',opts:['The entering vehicle','You — vehicles inside the roundabout have the right of way','Whoever signals first','The vehicle that has been waiting longer'],exp:'In a roundabout, vehicles already circulating inside have the right of way over vehicles entering. Entering drivers must yield to all traffic in the circle. This differs from a regular intersection where different rules apply. Roundabouts flow counterclockwise in the U.S.'},
  zh:{q:'您在交通转盘（环形路口）内行驶，有人想进入。谁有优先通行权？',opts:['进入的车辆','您——环形路内的车辆有优先通行权','谁先打转向灯','等待时间更长的车辆'],exp:'在环形路口，已在内部行驶的车辆对进入的车辆享有优先通行权。进入的驾驶者必须让行环形路内的所有交通。这与不同规则适用的普通路口不同。美国的环形交叉路口逆时针流动。'},
  zhTW:{q:'您在交通轉盤（環形路口）內行駛，有人想進入。誰有優先通行權？',opts:['進入的車輛','您——環形路內的車輛有優先通行權','誰先打方向燈','等待時間更長的車輛'],exp:'在環形路口，已在內部行駛的車輛對進入的車輛享有優先通行權。進入的駕駛者必須讓行環形路內的所有交通。這與不同規則適用的普通路口不同。美國的環形交叉路口逆時針流動。'},
  es:{q:'Está conduciendo en un círculo de tráfico (rotonda) y alguien quiere entrar. ¿Quién tiene el derecho de paso?',opts:['El vehículo que entra','Usted — los vehículos dentro de la rotonda tienen el derecho de paso','Quien señalice primero','El vehículo que ha esperado más tiempo'],exp:'En una rotonda, los vehículos que ya circulan dentro tienen el derecho de paso sobre los vehículos que entran. Los conductores que entran deben ceder a todo el tráfico en el círculo. Esto difiere de una intersección regular donde aplican diferentes reglas. Las rotondas fluyen en sentido contrario a las agujas del reloj en los EE.UU.'},
  ans:1
},
{
  id:238, cat:'rightofway',
  en:{q:'A pedestrian begins crossing against the "Don\'t Walk" signal. Do you have to yield?',opts:['No — the pedestrian was wrong to cross','Yes — pedestrians always have the right of way, even if they crossed illegally','Only if they are in your lane','Only if a police officer is present'],exp:'Even if a pedestrian crosses against the signal (jaywalking), you must still yield to avoid hitting them. While the pedestrian may be at fault legally, you have a duty to avoid causing harm. This is not just a legal obligation but a moral one — the consequences of hitting a pedestrian are severe.'},
  zh:{q:'行人在"禁止通行"信号时开始过街。您必须让行吗？',opts:['不必——行人过街是错误的','是——行人始终有优先通行权，即使他们违规过街','只有当他们在您的车道时','只有当有警察在场时'],exp:'即使行人在信号灯反对下过街（闯红灯），您仍然必须让行以避免撞到他们。虽然行人在法律上可能有过错，但您有避免造成伤害的责任。这不仅是法律义务，也是道德义务——撞到行人的后果很严重。'},
  zhTW:{q:'行人在「禁止通行」信號時開始過街。您必須讓行嗎？',opts:['不必——行人過街是錯誤的','是——行人始終有優先通行權，即使他們違規過街','只有當他們在您的車道時','只有當有警察在場時'],exp:'即使行人在信號燈反對下過街（闖紅燈），您仍然必須讓行以避免撞到他們。雖然行人在法律上可能有過錯，但您有避免造成傷害的責任。這不僅是法律義務，也是道德義務——撞到行人的後果很嚴重。'},
  es:{q:'Un peatón comienza a cruzar contra la señal de "No Caminar". ¿Debe ceder?',opts:['No — el peatón se equivocó al cruzar','Sí — los peatones siempre tienen el derecho de paso, incluso si cruzaron ilegalmente','Solo si están en su carril','Solo si hay un oficial de policía presente'],exp:'Incluso si un peatón cruza contra la señal (cruce imprudente), todavía debe ceder para evitar atropellarlo. Aunque el peatón puede ser culpable legalmente, usted tiene el deber de evitar causar daño. Esto no es solo una obligación legal sino moral — las consecuencias de atropellar a un peatón son graves.'},
  ans:1
},
{
  id:239, cat:'rightofway',
  en:{q:'When must you yield to an oncoming vehicle when turning left from a one-way street?',opts:['Only when the oncoming vehicle is within 100 feet','Always — oncoming traffic has right of way over your left turn','Never — one-way streets eliminate left-turn conflicts','Only when a yield sign is posted'],exp:'Even on a one-way street, when turning left you must yield to oncoming traffic that is already in or approaching the intersection. The general rule holds: oncoming through traffic has priority over turning vehicles. Signal your intention and wait for a safe gap.'},
  zh:{q:'从单行道左转时，您何时必须让行对向车辆？',opts:['只有当对向车辆在100英尺以内时','始终——对向交通优先于您的左转','永远不用——单行道消除了左转冲突','只有当有让行标志时'],exp:'即使在单行道上，左转时也必须让行已在路口内或正在靠近路口的对向交通。一般规则适用：对向直行交通优先于转弯车辆。发出意图信号并等待安全间隙。'},
  zhTW:{q:'從單行道左轉時，您何時必須讓行對向車輛？',opts:['只有當對向車輛在100英尺以內時','始終——對向交通優先於您的左轉','永遠不用——單行道消除了左轉衝突','只有當有讓行標誌時'],exp:'即使在單行道上，左轉時也必須讓行已在路口內或正在靠近路口的對向交通。一般規則適用：對向直行交通優先於轉彎車輛。發出意圖信號並等待安全間隙。'},
  es:{q:'¿Cuándo debe ceder al tráfico que viene en sentido contrario al girar a la izquierda desde una calle de sentido único?',opts:['Solo cuando el vehículo que viene en sentido contrario está dentro de 100 pies','Siempre — el tráfico en sentido contrario tiene prioridad sobre su giro a la izquierda','Nunca — las calles de sentido único eliminan los conflictos de giro a la izquierda','Solo cuando hay una señal de ceder publicada'],exp:'Incluso en una calle de sentido único, al girar a la izquierda debe ceder al tráfico que viene en sentido contrario que ya está en la intersección o que se aproxima. La regla general se aplica: el tráfico en sentido contrario tiene prioridad sobre los vehículos que giran. Señalice su intención y espere un hueco seguro.'},
  ans:1
},
{
  id:240, cat:'rightofway',
  en:{q:'You are on a residential street and a child on a bicycle enters the road ahead of you. What should you do?',opts:['Honk to warn the child and proceed','Slow down significantly and be prepared to stop — children are unpredictable','Maintain speed — the child should yield to motor vehicles','Swerve to the opposite lane to avoid the child'],exp:'Children on bicycles are unpredictable and may swerve or stop suddenly. Slow down significantly, give the child extra space, and be ready to stop. Never assume children will behave predictably in traffic. In residential areas, assume children could be anywhere at any time.'},
  zh:{q:'您在住宅街道上行驶，一名骑自行车的儿童进入您前方的道路。您应该怎么做？',opts:['鸣喇叭警告儿童然后继续','大幅减速并准备停车——儿童是不可预测的','保持速度——儿童应该让行机动车','转向对向车道以避开儿童'],exp:'骑自行车的儿童是不可预测的，可能会突然转向或停下。大幅减速，给儿童更多空间，准备好停车。永远不要假设儿童在交通中的行为是可预测的。在住宅区，假设儿童可能随时随地出现。'},
  zhTW:{q:'您在住宅街道上行駛，一名騎自行車的兒童進入您前方的道路。您應該怎麼做？',opts:['鳴喇叭警告兒童然後繼續','大幅減速並準備停車——兒童是不可預測的','保持速度——兒童應該讓行機動車','轉向對向車道以避開兒童'],exp:'騎自行車的兒童是不可預測的，可能會突然轉向或停下。大幅減速，給兒童更多空間，準備好停車。永遠不要假設兒童在交通中的行為是可預測的。在住宅區，假設兒童可能隨時隨地出現。'},
  es:{q:'Está en una calle residencial y un niño en bicicleta entra a la carretera frente a usted. ¿Qué debe hacer?',opts:['Toque la bocina para advertir al niño y proceda','Reduzca significativamente la velocidad y prepárese para detenerse — los niños son impredecibles','Mantenga la velocidad — el niño debe ceder a los vehículos de motor','Gire hacia el carril opuesto para evitar al niño'],exp:'Los niños en bicicleta son impredecibles y pueden girar o detenerse repentinamente. Reduzca significativamente la velocidad, dele al niño espacio adicional y esté listo para detenerse. Nunca asuma que los niños se comportarán de manera predecible en el tráfico. En áreas residenciales, asuma que los niños pueden estar en cualquier lugar en cualquier momento.'},
  ans:1
},

// ── Batch 25 · Mixed Review · Q241–250 ──────────────────────────────────────
{
  id:241, cat:'safety',
  en:{q:'What is the "3-second rule" for following distance?',opts:['Keep 3 car lengths behind the vehicle ahead','Choose a fixed point — the vehicle ahead passes it, then you pass it 3 seconds later','Always maintain exactly 3 feet of space','Drive 3 mph slower than the vehicle ahead'],exp:'The 3-second rule: watch the vehicle ahead pass a fixed object (sign, tree, etc.). Count "one-one-thousand, two-one-thousand, three-one-thousand." If you pass that same object before finishing the count, you are following too closely. Increase this to 4+ seconds in bad weather or heavy traffic.'},
  zh:{q:'跟车距离的"3秒规则"是什么？',opts:['在前方车辆后保持3个车长','选择一个固定点——前方车辆经过它，然后您在3秒后经过它','始终保持正好3英尺的空间','以比前方车辆慢3英里/小时行驶'],exp:'3秒规则：观察前方车辆通过一个固定物体（标志、树等）。数"一一千、二一千、三一千"。如果您在数完之前经过那个相同的物体，您的跟车距离太近了。在恶劣天气或大交通量中将此增加到4秒以上。'},
  zhTW:{q:'跟車距離的「3秒規則」是什麼？',opts:['在前方車輛後保持3個車長','選擇一個固定點——前方車輛經過它，然後您在3秒後經過它','始終保持正好3英尺的空間','以比前方車輛慢3英里/小時行駛'],exp:'3秒規則：觀察前方車輛通過一個固定物體（標誌、樹等）。數「一一千、二一千、三一千」。如果您在數完之前經過那個相同的物體，您的跟車距離太近了。在惡劣天氣或大交通量中將此增加到4秒以上。'},
  es:{q:'¿Cuál es la "regla de los 3 segundos" para la distancia de seguimiento?',opts:['Mantenga 3 longitudes de auto detrás del vehículo de adelante','Elija un punto fijo — el vehículo de adelante lo pasa, luego usted lo pasa 3 segundos después','Siempre mantenga exactamente 3 pies de espacio','Conduzca 3 mph más lento que el vehículo de adelante'],exp:'La regla de los 3 segundos: observe el vehículo de adelante pasar un objeto fijo (señal, árbol, etc.). Cuente "uno-mil, dos-mil, tres-mil". Si pasa ese mismo objeto antes de terminar de contar, está siguiendo demasiado de cerca. Aumente esto a 4+ segundos en mal tiempo o tráfico pesado.'},
  ans:1
},
{
  id:242, cat:'signs', sign:'hov',
  en:{q:'A diamond-shaped sign with the word "HOV 2+" means:',opts:['This lane is for motorcycles only','This carpool lane requires at least 2 occupants to use it','Speed limit in this lane is 2 mph over the posted limit','This is a heavy vehicle only lane'],exp:'"HOV 2+" means High Occupancy Vehicle lane — you must have at least 2 people in the vehicle (including the driver) to use this lane. Some HOV lanes require 3+ occupants. Certain clean-air vehicles with special decals may use HOV lanes with fewer occupants. Fines for violations are steep.'},
  zh:{q:'菱形标志上写着"HOV 2+"意味着：',opts:['此车道仅限摩托车','此拼车道需要至少2名乘客才能使用','此车道的速度限制比标志限制高2英里/小时','这是仅限重型车辆的车道'],exp:'"HOV 2+"表示高载客量车辆车道——您必须在车内有至少2个人（包括驾驶者）才能使用此车道。一些HOV车道需要3人以上。具有特殊贴纸的某些清洁能源车辆可以以较少的乘客使用HOV车道。违规罚款相当高。'},
  zhTW:{q:'菱形標誌上寫著「HOV 2+」意味著：',opts:['此車道僅限摩托車','此拼車道需要至少2名乘客才能使用','此車道的速度限制比標誌限制高2英里/小時','這是僅限重型車輛的車道'],exp:'"HOV 2+"表示高載客量車輛車道——您必須在車內有至少2個人（包括駕駛者）才能使用此車道。一些HOV車道需要3人以上。具有特殊貼紙的某些清潔能源車輛可以以較少的乘客使用HOV車道。違規罰款相當高。'},
  es:{q:'Una señal en forma de diamante con las palabras "HOV 2+" significa:',opts:['Este carril es solo para motocicletas','Este carril de vehículos compartidos requiere al menos 2 ocupantes para usarlo','El límite de velocidad en este carril es 2 mph sobre el límite publicado','Este es un carril solo para vehículos pesados'],exp:'"HOV 2+" significa carril de Vehículo de Alta Ocupación — debe tener al menos 2 personas en el vehículo (incluido el conductor) para usar este carril. Algunos carriles HOV requieren 3+ ocupantes. Ciertos vehículos de aire limpio con calcomanías especiales pueden usar los carriles HOV con menos ocupantes. Las multas por infracciones son altas.'},
  ans:1
},
{
  id:243, cat:'laws',
  en:{q:'What is "distracted driving" and what are its dangers?',opts:['Only texting while driving — all other activities are safe','Any activity that takes your eyes, hands, or mind off driving — it multiplies accident risk','Only illegal if you are in a school zone','Only applies to new drivers under 18'],exp:'Distracted driving includes any non-driving activity: texting, calling, eating, adjusting radio, talking to passengers, daydreaming. At 65 mph, taking your eyes off the road for 5 seconds means traveling 480 feet (1.5 football fields) blindly. Distractions are a leading cause of accidents in California.'},
  zh:{q:'"分心驾驶"是什么，它有什么危险？',opts:['只有开车发短信——所有其他活动都是安全的','任何使您的眼睛、手或注意力离开驾驶的活动——它使事故风险倍增','只有在学校区域内才违法','只适用于18岁以下的新手驾驶者'],exp:'分心驾驶包括任何非驾驶活动：发短信、打电话、进食、调收音机、与乘客交谈、做白日梦。在65英里/小时速度下，离开道路5秒意味着盲目行驶了480英尺（1.5个足球场）。分心是加州事故的主要原因之一。'},
  zhTW:{q:'「分心駕駛」是什麼，它有什麼危險？',opts:['只有開車發短信——所有其他活動都是安全的','任何使您的眼睛、手或注意力離開駕駛的活動——它使事故風險倍增','只有在學校區域內才違法','只適用於18歲以下的新手駕駛者'],exp:'分心駕駛包括任何非駕駛活動：發短信、打電話、進食、調收音機、與乘客交談、做白日夢。在65英里/小時速度下，離開道路5秒意味著盲目行駛了480英尺（1.5個足球場）。分心是加州事故的主要原因之一。'},
  es:{q:'¿Qué es la "conducción distraída" y cuáles son sus peligros?',opts:['Solo enviar mensajes de texto mientras conduce — todas las demás actividades son seguras','Cualquier actividad que aparte sus ojos, manos o mente de la conducción — multiplica el riesgo de accidente','Solo es ilegal si está en una zona escolar','Solo aplica a conductores nuevos menores de 18'],exp:'La conducción distraída incluye cualquier actividad no relacionada con la conducción: enviar mensajes de texto, llamar, comer, ajustar la radio, hablar con pasajeros, soñar despierto. A 65 mph, apartar los ojos de la carretera durante 5 segundos significa viajar 480 pies (1.5 campos de fútbol) a ciegas. Las distracciones son una causa principal de accidentes en California.'},
  ans:1
},
{
  id:244, cat:'speed',
  en:{q:'What is the speed limit in a blind intersection (no stop signs, limited visibility)?',opts:['25 mph','15 mph','35 mph','The same as the posted limit for that road'],exp:'The prima facie speed limit when approaching a blind intersection (where you cannot see traffic for at least 100 feet in all directions due to buildings, vegetation, etc.) is 15 mph. This low limit compensates for the reduced ability to see and react to crossing traffic.'},
  zh:{q:'在盲目路口（无停车标志，能见度有限）的速度限制是多少？',opts:['25英里/小时','15英里/小时','35英里/小时','与该道路的标志限速相同'],exp:'靠近盲目路口时（由于建筑物、植被等，您无法在所有方向上看到至少100英尺的交通），初步表面速度限制为15英里/小时。这个低限制弥补了看到和应对横向交通的能力下降。'},
  zhTW:{q:'在盲目路口（無停車標誌，能見度有限）的速度限制是多少？',opts:['25英里/小時','15英里/小時','35英里/小時','與該道路的標誌限速相同'],exp:'靠近盲目路口時（由於建築物、植被等，您無法在所有方向上看到至少100英尺的交通），初步表面速度限制為15英里/小時。這個低限制彌補了看到和應對橫向交通的能力下降。'},
  es:{q:'¿Cuál es el límite de velocidad en una intersección ciega (sin señales de stop, visibilidad limitada)?',opts:['25 mph','15 mph','35 mph','Lo mismo que el límite publicado para esa carretera'],exp:'El límite de velocidad prima facie al aproximarse a una intersección ciega (donde no puede ver el tráfico durante al menos 100 pies en todas las direcciones debido a edificios, vegetación, etc.) es 15 mph. Este límite bajo compensa la reducida capacidad de ver y reaccionar al tráfico cruzado.'},
  ans:1
},
{
  id:245, cat:'safety',
  en:{q:'What should you do if your car starts to skid?',opts:['Brake hard immediately','Steer in the opposite direction of the skid and brake hard','Ease off the gas, steer in the direction the rear of the car is skidding (into the skid), and avoid braking','Accelerate out of the skid'],exp:'For a rear-wheel skid (most common): ease off the accelerator and steer in the direction the rear is sliding (if the rear slides right, turn right). Do not brake hard — this makes skids worse. For ABS-equipped vehicles, apply steady brake pressure while steering.'},
  zh:{q:'如果您的车开始打滑，您应该怎么做？',opts:['立即大力刹车','向打滑相反的方向转向并大力刹车','松开油门，向车尾打滑的方向转向（顺着滑动方向），避免刹车','加速冲出打滑'],exp:'对于后轮打滑（最常见）：松开油门，向车尾滑动的方向转向（如果车尾向右滑，向右转）。不要大力刹车——这会让打滑更严重。对于配备ABS的车辆，在转向时施加稳定的刹车压力。'},
  zhTW:{q:'如果您的車開始打滑，您應該怎麼做？',opts:['立即大力剎車','向打滑相反的方向轉向並大力剎車','鬆開油門，向車尾打滑的方向轉向（順著滑動方向），避免剎車','加速衝出打滑'],exp:'對於後輪打滑（最常見）：鬆開油門，向車尾滑動的方向轉向（如果車尾向右滑，向右轉）。不要大力剎車——這會讓打滑更嚴重。對於配備ABS的車輛，在轉向時施加穩定的剎車壓力。'},
  es:{q:'¿Qué debe hacer si su auto comienza a patinar?',opts:['Frene fuertemente de inmediato','Dirija en la dirección opuesta al patinaje y frene fuertemente','Suelte el acelerador, dirija en la dirección en que la parte trasera del auto está patinando (hacia el patinaje), y evite frenar','Acelere para salir del patinaje'],exp:'Para un patinaje de ruedas traseras (el más común): suelte el acelerador y dirija en la dirección en que se desliza la parte trasera (si la parte trasera se desliza a la derecha, gire a la derecha). No frene fuertemente — esto empeora los patinajes. Para vehículos equipados con ABS, aplique presión de freno estable mientras dirige.'},
  ans:2
},
{
  id:246, cat:'laws',
  en:{q:'What is the law regarding open containers of alcohol in a vehicle?',opts:['Passengers may drink but the driver cannot','No one in the vehicle may have an open container of alcohol in the passenger compartment','Open containers are allowed only in the trunk','Passengers over 21 may have open containers in the back seat'],exp:'California law prohibits any open container of alcohol in the passenger area of a vehicle — this applies to both drivers and passengers. Open containers must be kept in the trunk, or in a locked glove compartment if there is no trunk. Violating this law is a misdemeanor.'},
  zh:{q:'关于车辆内酒精容器开盖的法律是什么？',opts:['乘客可以喝酒但驾驶者不能','车辆内任何人都不得在乘客区有开盖的酒精容器','只有在行李箱中才允许开盖容器','21岁以上的乘客可以在后排有开盖容器'],exp:'加州法律禁止在车辆乘客区有任何开盖的酒精容器——这适用于驾驶者和乘客。开盖容器必须放在行李箱中，或者如果没有行李箱则放在上锁的手套箱中。违反这条法律是轻罪。'},
  zhTW:{q:'關於車輛內酒精容器開蓋的法律是什麼？',opts:['乘客可以喝酒但駕駛者不能','車輛內任何人都不得在乘客區有開蓋的酒精容器','只有在行李箱中才允許開蓋容器','21歲以上的乘客可以在後排有開蓋容器'],exp:'加州法律禁止在車輛乘客區有任何開蓋的酒精容器——這適用於駕駛者和乘客。開蓋容器必須放在行李箱中，或者如果沒有行李箱則放在上鎖的手套箱中。違反這條法律是輕罪。'},
  es:{q:'¿Cuál es la ley sobre contenedores abiertos de alcohol en un vehículo?',opts:['Los pasajeros pueden beber pero el conductor no','Nadie en el vehículo puede tener un recipiente abierto de alcohol en el compartimento de pasajeros','Los recipientes abiertos solo están permitidos en el maletero','Los pasajeros mayores de 21 pueden tener recipientes abiertos en el asiento trasero'],exp:'La ley de California prohíbe cualquier recipiente abierto de alcohol en el área de pasajeros de un vehículo — esto aplica tanto a conductores como a pasajeros. Los recipientes abiertos deben mantenerse en el maletero, o en la guantera cerrada con llave si no hay maletero. Violar esta ley es un delito menor.'},
  ans:1
},
{
  id:247, cat:'signs', sign:'signal-ahead',
  en:{q:'A yellow diamond-shaped sign with a traffic signal picture means:',opts:['The signal ahead is broken — proceed with caution','A traffic signal is ahead — be prepared to stop','You are entering a school zone with a signal','Signal ahead is operated by remote control'],exp:'This warning sign alerts you that a traffic signal is ahead. It is placed before signals that may not be immediately visible due to hills, curves, or other obstructions. Slow down and be prepared to stop for a red light. It is commonly seen at the top of hills or around bends.'},
  zh:{q:'带有交通信号灯图案的黄色菱形标志意味着：',opts:['前方信号灯故障——谨慎通行','前方有交通信号灯——准备停车','您正在进入有信号灯的学校区','前方信号灯由遥控器操作'],exp:'这个警告标志提醒您前方有交通信号灯。它放置在因山丘、弯道或其他障碍物而可能不立即可见的信号灯之前。减速并准备在红灯处停车。它常见于山丘顶部或弯道处。'},
  zhTW:{q:'帶有交通信號燈圖案的黃色菱形標誌意味著：',opts:['前方信號燈故障——謹慎通行','前方有交通信號燈——準備停車','您正在進入有信號燈的學校區','前方信號燈由遙控器操作'],exp:'這個警告標誌提醒您前方有交通信號燈。它放置在因山丘、彎道或其他障礙物而可能不立即可見的信號燈之前。減速並準備在紅燈處停車。它常見於山丘頂部或彎道處。'},
  es:{q:'Una señal amarilla en forma de diamante con una imagen de semáforo significa:',opts:['El semáforo de adelante está roto — proceda con precaución','Hay un semáforo adelante — prepárese para detenerse','Está entrando a una zona escolar con semáforo','El semáforo de adelante es operado por control remoto'],exp:'Esta señal de advertencia le alerta que hay un semáforo adelante. Se coloca antes de los semáforos que pueden no ser inmediatamente visibles debido a colinas, curvas u otros obstáculos. Reduzca la velocidad y prepárese para detenerse en una luz roja. Se ve comúnmente en la cima de colinas o en curvas.'},
  ans:1
},
{
  id:248, cat:'highway',
  en:{q:'What is the purpose of the deceleration lane when exiting a freeway?',opts:['To allow you to stop safely','To allow you to slow down from freeway speed before reaching the exit ramp','To allow emergency vehicles to pass','To provide space for merging traffic'],exp:'The deceleration lane (exit lane) allows you to move out of the flow of freeway traffic and reduce speed before reaching the exit ramp. You should signal early, move into the deceleration lane, THEN gradually reduce your speed — not brake hard in the main lane of traffic.'},
  zh:{q:'驶出高速公路时，减速车道的目的是什么？',opts:['允许您安全停车','允许您在到达出口匝道前从高速公路速度减速','允许紧急车辆通过','为合并交通提供空间'],exp:'减速车道（出口车道）允许您从高速公路交通流中移出并在到达出口匝道前降低速度。您应该提前打转向灯，移入减速车道，然后逐渐降低速度——不要在主行车道大力刹车。'},
  zhTW:{q:'駛出高速公路時，減速車道的目的是什麼？',opts:['允許您安全停車','允許您在到達出口匝道前從高速公路速度減速','允許緊急車輛通過','為合併交通提供空間'],exp:'減速車道（出口車道）允許您從高速公路交通流中移出並在到達出口匝道前降低速度。您應該提前打方向燈，移入減速車道，然後逐漸降低速度——不要在主行車道大力剎車。'},
  es:{q:'¿Cuál es el propósito del carril de desaceleración al salir de una autopista?',opts:['Para permitirle detenerse con seguridad','Para permitirle reducir la velocidad desde la velocidad de autopista antes de llegar a la rampa de salida','Para permitir el paso de vehículos de emergencia','Para proporcionar espacio para el tráfico que se incorpora'],exp:'El carril de desaceleración (carril de salida) le permite salir del flujo de tráfico de la autopista y reducir la velocidad antes de llegar a la rampa de salida. Debe señalizar temprano, moverse al carril de desaceleración y LUEGO reducir gradualmente su velocidad — no frene fuertemente en el carril principal de tráfico.'},
  ans:1
},
{
  id:249, cat:'safety',
  en:{q:'What should you do if your brakes feel "spongy" or less responsive?',opts:['Pump the brakes repeatedly to restore pressure','Add water to the brake fluid reservoir','Have the brakes inspected by a mechanic immediately — do not drive if unsafe','Drive slowly and avoid highways until you can get it repaired'],exp:'Spongy or soft brakes indicate air in the brake lines, low brake fluid, worn brake pads, or a failing master cylinder. This is a serious safety issue. Have the brakes inspected immediately. Do not drive the vehicle if you cannot stop safely. This is one of the most critical vehicle maintenance issues.'},
  zh:{q:'如果您的刹车感觉"松软"或反应不灵，您应该怎么做？',opts:['反复点刹以恢复压力','向刹车油液容器中加水','立即让机修工检查刹车——如果不安全不要驾驶','缓慢行驶并避免高速公路直到可以修理'],exp:'松软的刹车表明刹车管路有空气、刹车液不足、刹车片磨损或主缸失效。这是严重的安全问题。立即检查刹车。如果无法安全停车，不要驾驶车辆。这是最关键的车辆维护问题之一。'},
  zhTW:{q:'如果您的剎車感覺「鬆軟」或反應不靈，您應該怎麼做？',opts:['反復點剎以恢復壓力','向剎車油液容器中加水','立即讓機修工檢查剎車——如果不安全不要駕駛','緩慢行駛並避免高速公路直到可以修理'],exp:'鬆軟的剎車表明剎車管路有空氣、剎車液不足、剎車片磨損或主缸失效。這是嚴重的安全問題。立即檢查剎車。如果無法安全停車，不要駕駛車輛。這是最關鍵的車輛維護問題之一。'},
  es:{q:'¿Qué debe hacer si sus frenos se sienten "esponjosos" o menos sensibles?',opts:['Bombee los frenos repetidamente para restaurar la presión','Agregue agua al depósito de líquido de frenos','Haga que un mecánico inspeccione los frenos inmediatamente — no conduzca si es inseguro','Conduzca lentamente y evite las autopistas hasta que pueda repararlo'],exp:'Los frenos esponjosos o suaves indican aire en las líneas de freno, líquido de frenos bajo, pastillas de freno desgastadas o un cilindro maestro defectuoso. Este es un problema de seguridad grave. Haga que inspeccionen los frenos inmediatamente. No conduzca el vehículo si no puede detenerse con seguridad. Este es uno de los problemas de mantenimiento de vehículos más críticos.'},
  ans:2
},
{
  id:250, cat:'laws',
  en:{q:'When does California law require you to dim your headlights for an approaching vehicle?',opts:['500 feet away','300 feet away','100 feet away','1,000 feet away'],exp:'California law requires you to dim your headlights (switch from high to low beams) when you are within 500 feet of an oncoming vehicle. When following another vehicle, dim your lights when within 300 feet. Failure to dim lights can blind other drivers and cause accidents.'},
  zh:{q:'加州法律何时要求您为靠近的车辆调暗车头灯？',opts:['500英尺处','300英尺处','100英尺处','1,000英尺处'],exp:'加州法律要求您在对向车辆500英尺以内时调暗车头灯（从远光切换到近光）。跟随另一辆车时，在300英尺以内调暗灯光。不调暗灯光可能使其他驾驶者致盲并导致事故。'},
  zhTW:{q:'加州法律何時要求您為靠近的車輛調暗車頭燈？',opts:['500英尺處','300英尺處','100英尺處','1,000英尺處'],exp:'加州法律要求您在對向車輛500英尺以內時調暗車頭燈（從遠光切換到近光）。跟隨另一輛車時，在300英尺以內調暗燈光。不調暗燈光可能使其他駕駛者致盲並導致事故。'},
  es:{q:'¿Cuándo la ley de California le exige reducir sus faros para un vehículo que se aproxima?',opts:['A 500 pies de distancia','A 300 pies de distancia','A 100 pies de distancia','A 1,000 pies de distancia'],exp:'La ley de California requiere que reduzca sus faros (cambie de luces altas a bajas) cuando esté dentro de 500 pies de un vehículo que viene en sentido contrario. Al seguir a otro vehículo, reduzca sus luces cuando esté dentro de 300 pies. No reducir las luces puede cegar a otros conductores y causar accidentes.'},
  ans:0
},

// ── Batch 26 · Road Signs (Signs & Markings) · Q251–260 ─────────────────────
{
  id:251, cat:'signs', sign:'no-passing',
  en:{q:'What does a no-passing zone sign (pennant shape) on the left side of the road mean?',opts:['You are entering a one-way road','Passing is prohibited — do not pass vehicles ahead','Slow down — construction zone ahead','No parking on this side of the road'],exp:'The no-passing zone sign is a yellow pennant-shaped sign on the left side of the road. It marks the beginning of a no-passing zone where passing is prohibited. A solid yellow center line also marks these zones. Never pass in these areas due to limited visibility or other hazards.'},
  zh:{q:'道路左侧三角旗形的禁止超车标志意味着什么？',opts:['您正在进入单行道','禁止超车——不要超越前方车辆','减速——前方施工区','此路侧禁止停车'],exp:'禁止超车区标志是道路左侧的黄色三角旗形标志。它标记禁止超车区的开始，在那里超车是被禁止的。实心黄色中心线也标记这些区域。由于能见度有限或其他危险，永远不要在这些区域超车。'},
  zhTW:{q:'道路左側三角旗形的禁止超車標誌意味著什麼？',opts:['您正在進入單行道','禁止超車——不要超越前方車輛','減速——前方施工區','此路側禁止停車'],exp:'禁止超車區標誌是道路左側的黃色三角旗形標誌。它標記禁止超車區的開始，在那裡超車是被禁止的。實心黃色中心線也標記這些區域。由於能見度有限或其他危險，永遠不要在這些區域超車。'},
  es:{q:'¿Qué significa una señal de zona de no adelantamiento (forma de banderín) en el lado izquierdo de la carretera?',opts:['Está entrando a una carretera de sentido único','Adelantar está prohibido — no adelante vehículos de adelante','Reduzca la velocidad — zona de construcción adelante','No estacionarse en este lado de la carretera'],exp:'La señal de zona de no adelantamiento es una señal amarilla en forma de banderín en el lado izquierdo de la carretera. Marca el inicio de una zona de no adelantamiento donde adelantar está prohibido. Una línea central amarilla sólida también marca estas zonas. Nunca adelante en estas áreas debido a visibilidad limitada u otros peligros.'},
  ans:1
},
{
  id:252, cat:'signs',
  en:{q:'What do white pavement markings indicate?',opts:['Lanes going in the same direction','Separation between opposing traffic lanes','Bike lanes only','Construction zones'],exp:'White pavement markings separate lanes of traffic moving in the same direction. Yellow markings separate opposing directions of traffic. White lines on the edge of the road (edge lines) define the boundary of the travel lane and the shoulder.'},
  zh:{q:'白色路面标记表示什么？',opts:['同向行驶的车道','对向交通车道之间的分隔','仅限自行车道','施工区'],exp:'白色路面标记分隔同向行驶的交通车道。黄色标记分隔对向行驶的交通。路面边缘的白线（边缘线）定义行车道和路肩的边界。'},
  zhTW:{q:'白色路面標記表示什麼？',opts:['同向行駛的車道','對向交通車道之間的分隔','僅限自行車道','施工區'],exp:'白色路面標記分隔同向行駛的交通車道。黃色標記分隔對向行駛的交通。路面邊緣的白線（邊緣線）定義行車道和路肩的邊界。'},
  es:{q:'¿Qué indican las marcas de pavimento blancas?',opts:['Carriles que van en la misma dirección','Separación entre carriles de tráfico opuesto','Solo carriles de bicicletas','Zonas de construcción'],exp:'Las marcas de pavimento blancas separan los carriles de tráfico que se mueven en la misma dirección. Las marcas amarillas separan las direcciones opuestas del tráfico. Las líneas blancas en el borde de la carretera (líneas de borde) definen el límite del carril de circulación y el arcén.'},
  ans:0
},
{
  id:253, cat:'signs',
  en:{q:'What does a solid double yellow center line mean?',opts:['Passing is allowed for both directions','No passing is allowed from either direction','Only left turns are prohibited','High-speed traffic ahead'],exp:'A solid double yellow center line means no passing is allowed from either direction. This is used in areas where passing would be particularly dangerous, such as hills, curves, or near intersections. A broken yellow line allows passing when safe; solid yellow means no passing from that side.'},
  zh:{q:'实心双黄中心线意味着什么？',opts:['两个方向都允许超车','两个方向都不允许超车','只禁止左转','前方高速交通'],exp:'实心双黄中心线意味着两个方向都不允许超车。这用于超车特别危险的区域，如山丘、弯道或路口附近。虚黄线在安全时允许超车；实心黄线表示从那一侧不允许超车。'},
  zhTW:{q:'實心雙黃中心線意味著什麼？',opts:['兩個方向都允許超車','兩個方向都不允許超車','只禁止左轉','前方高速交通'],exp:'實心雙黃中心線意味著兩個方向都不允許超車。這用於超車特別危險的區域，如山丘、彎道或路口附近。虛黃線在安全時允許超車；實心黃線表示從那一側不允許超車。'},
  es:{q:'¿Qué significa una línea central doble amarilla sólida?',opts:['Adelantar está permitido en ambas direcciones','No se permite adelantar desde ninguna dirección','Solo los giros a la izquierda están prohibidos','Tráfico de alta velocidad adelante'],exp:'Una línea central doble amarilla sólida significa que no se permite adelantar desde ninguna dirección. Esto se usa en áreas donde adelantar sería particularmente peligroso, como colinas, curvas o cerca de intersecciones. Una línea amarilla discontinua permite adelantar cuando es seguro; la línea amarilla sólida significa no adelantar desde ese lado.'},
  ans:1
},
{
  id:254, cat:'signs', sign:'roundabout',
  en:{q:'A circular arrow sign with a blue and white color scheme at an intersection means:',opts:['You must make a U-turn here','A roundabout is ahead — traffic flows counterclockwise','This is a one-way road','Go around the block — no through traffic'],exp:'The roundabout sign (circular arrows) warns that there is a roundabout intersection ahead. Traffic in roundabouts flows counterclockwise. Yield to vehicles already in the roundabout and enter only when safe. Signal when exiting the roundabout.'},
  zh:{q:'路口的蓝白色圆形箭头标志意味着：',opts:['您必须在这里调头','前方有环形路口——交通逆时针流动','这是单行道','绕街区行驶——无直通交通'],exp:'环形路口标志（圆形箭头）警告前方有环形路口交叉路口。环形路口中的交通逆时针流动。让行已在环形路口内的车辆，仅在安全时进入。驶出环形路口时打转向灯。'},
  zhTW:{q:'路口的藍白色圓形箭頭標誌意味著：',opts:['您必須在這裡迴轉','前方有環形路口——交通逆時針流動','這是單行道','繞街區行駛——無直通交通'],exp:'環形路口標誌（圓形箭頭）警告前方有環形路口交叉路口。環形路口中的交通逆時針流動。讓行已在環形路口內的車輛，僅在安全時進入。駛出環形路口時打方向燈。'},
  es:{q:'Una señal de flecha circular con esquema de color azul y blanco en una intersección significa:',opts:['Debe hacer una vuelta en U aquí','Hay una rotonda adelante — el tráfico fluye en sentido contrario a las agujas del reloj','Esta es una carretera de sentido único','Rodee la manzana — sin tráfico de paso'],exp:'La señal de rotonda (flechas circulares) advierte que hay una intersección de rotonda adelante. El tráfico en las rotondas fluye en sentido contrario a las agujas del reloj. Ceda a los vehículos ya en la rotonda y entre solo cuando sea seguro. Señalice al salir de la rotonda.'},
  ans:1
},
{
  id:255, cat:'signs', sign:'narrow-bridge',
  en:{q:'This sign warns that:',opts:['A bridge with a weight limit is ahead','The road narrows to a single lane on the bridge ahead','The bridge has a height restriction','Bicycles are not allowed on the bridge'],exp:'The "Narrow Bridge" sign warns that the bridge ahead is narrower than the road you are on. This may mean less room for passing or two vehicles side by side. Slow down, stay in your lane, and be prepared for oncoming traffic that may drift toward the center.'},
  zh:{q:'这个标志警告：',opts:['前方有重量限制的桥','前方桥上道路缩窄为单车道','桥有高度限制','桥上不允许自行车'],exp:'"窄桥"标志警告前方的桥比您所在的道路窄。这可能意味着超车或两辆车并行的空间更少。减速，保持在您的车道，并准备好对向交通可能朝中央漂移。'},
  zhTW:{q:'這個標誌警告：',opts:['前方有重量限制的橋','前方橋上道路縮窄為單車道','橋有高度限制','橋上不允許自行車'],exp:'"窄橋"標誌警告前方的橋比您所在的道路窄。這可能意味著超車或兩輛車並行的空間更少。減速，保持在您的車道，並準備好對向交通可能朝中央漂移。'},
  es:{q:'Esta señal advierte que:',opts:['Hay un puente con límite de peso adelante','La carretera se estrecha a un solo carril en el puente adelante','El puente tiene una restricción de altura','Las bicicletas no están permitidas en el puente'],exp:'La señal de "Puente Angosto" advierte que el puente adelante es más estrecho que la carretera en la que está. Esto puede significar menos espacio para adelantar o dos vehículos uno al lado del otro. Reduzca la velocidad, permanezca en su carril y prepárese para el tráfico en sentido contrario que puede derivar hacia el centro.'},
  ans:1
},
{
  id:256, cat:'signs', sign:'hill',
  en:{q:'A truck on a steep downward slope sign warns you to:',opts:['A long downhill grade ahead — check brakes and use a lower gear if needed','The road ends in a cliff','Trucks are prohibited on this road','Construction vehicles are working on the hill'],exp:'The hill (steep grade) sign warns of a long downhill grade. For regular vehicles: slow down, use a lower gear to help brake, avoid riding the brakes continuously (this overheats them). For large trucks and RVs, this sign is especially important as they can lose braking control on long descents.'},
  zh:{q:'有卡车在陡坡下坡的标志警告您：',opts:['前方有长下坡——必要时检查刹车并使用低速档','道路在悬崖处结束','此道路禁止卡车通行','建筑车辆在山上工作'],exp:'坡度标志警告前方有长下坡。对于普通车辆：减速，使用低速档帮助制动，避免持续踩刹车（这会使刹车过热）。对于大型卡车和房车，这个标志尤其重要，因为它们在长下坡上可能失去制动控制。'},
  zhTW:{q:'有卡車在陡坡下坡的標誌警告您：',opts:['前方有長下坡——必要時檢查剎車並使用低速擋','道路在懸崖處結束','此道路禁止卡車通行','建築車輛在山上工作'],exp:'坡度標誌警告前方有長下坡。對於普通車輛：減速，使用低速擋幫助制動，避免持續踩剎車（這會使剎車過熱）。對於大型卡車和房車，這個標誌尤其重要，因為它們在長下坡上可能失去制動控制。'},
  es:{q:'Una señal de camión en una pendiente empinada hacia abajo le advierte que:',opts:['Hay una larga pendiente descendente adelante — revise los frenos y use una marcha más baja si es necesario','La carretera termina en un precipicio','Los camiones están prohibidos en esta carretera','Los vehículos de construcción están trabajando en la colina'],exp:'La señal de colina (pendiente pronunciada) advierte de una larga pendiente descendente. Para vehículos regulares: reduzca la velocidad, use una marcha más baja para ayudar a frenar, evite pisar los frenos continuamente (esto los sobrecalienta). Para camiones grandes y casas rodantes, esta señal es especialmente importante ya que pueden perder el control de frenado en descensos largos.'},
  ans:0
},
{
  id:257, cat:'signs', sign:'bicycle-crossing',
  en:{q:'What does a bicycle crossing sign indicate?',opts:['Bicycles are prohibited ahead','A bicycle path or lane crossing the road ahead — watch for cyclists','Bicycles have the right of way at all times here','A bicycle repair station is nearby'],exp:'A bicycle crossing sign warns that a bicycle path, lane, or trail crosses the road ahead. Be prepared to yield to cyclists crossing your path. Cyclists may be traveling at significant speed, especially downhill. Look both ways for cyclists before crossing the marked area.'},
  zh:{q:'自行车过街标志表示什么？',opts:['前方禁止自行车','前方有自行车道或自行车路过街——注意骑车者','这里自行车始终有优先通行权','附近有自行车修理站'],exp:'自行车过街标志警告前方有自行车道、自行车道或小径穿越道路。准备好让行穿越您道路的骑车者。骑车者可能以相当速度行驶，尤其是下坡时。在穿越标记区域之前，向两边查看骑车者。'},
  zhTW:{q:'自行車過街標誌表示什麼？',opts:['前方禁止自行車','前方有自行車道或自行車路過街——注意騎車者','這裡自行車始終有優先通行權','附近有自行車修理站'],exp:'自行車過街標誌警告前方有自行車道、自行車道或小徑穿越道路。準備好讓行穿越您道路的騎車者。騎車者可能以相當速度行駛，尤其是下坡時。在穿越標記區域之前，向兩邊查看騎車者。'},
  es:{q:'¿Qué indica una señal de cruce de bicicletas?',opts:['Las bicicletas están prohibidas adelante','Un camino o carril de bicicletas que cruza la carretera adelante — esté atento a los ciclistas','Las bicicletas tienen el derecho de paso en todo momento aquí','Hay una estación de reparación de bicicletas cerca'],exp:'Una señal de cruce de bicicletas advierte que un camino, carril o sendero de bicicletas cruza la carretera adelante. Prepárese para ceder a los ciclistas que cruzan su camino. Los ciclistas pueden estar viajando a una velocidad significativa, especialmente cuesta abajo. Mire en ambas direcciones en busca de ciclistas antes de cruzar el área marcada.'},
  ans:1
},
{
  id:258, cat:'signs',
  en:{q:'What does a green traffic light mean?',opts:['Proceed without checking for cross traffic','You may proceed if the intersection is clear — but you must yield to pedestrians and vehicles already in the intersection','Speed up to clear the intersection quickly','All pedestrians must stop'],exp:'A green light means you MAY proceed — it does not mean you can go without looking. You must still yield to any vehicles already in the intersection and to pedestrians crossing legally. Look both ways before entering any intersection, even on a green light.'},
  zh:{q:'绿色交通灯意味着什么？',opts:['无需查看横向交通直接通行','如果路口畅通，您可以通行——但必须让行已在路口的行人和车辆','加速迅速通过路口','所有行人必须停止'],exp:'绿灯意味着您可以通行——这不意味着您可以不查看就通行。您仍然必须让行已在路口的任何车辆和合法过街的行人。即使在绿灯下，进入任何路口之前也要向两边查看。'},
  zhTW:{q:'綠色交通燈意味著什麼？',opts:['無需查看橫向交通直接通行','如果路口暢通，您可以通行——但必須讓行已在路口的行人和車輛','加速迅速通過路口','所有行人必須停止'],exp:'綠燈意味著您可以通行——這不意味著您可以不查看就通行。您仍然必須讓行已在路口的任何車輛和合法過街的行人。即使在綠燈下，進入任何路口之前也要向兩邊查看。'},
  es:{q:'¿Qué significa un semáforo verde?',opts:['Proceda sin verificar el tráfico cruzado','Puede proceder si la intersección está despejada — pero debe ceder a los peatones y vehículos ya en la intersección','Acelere para despejar la intersección rápidamente','Todos los peatones deben detenerse'],exp:'Una luz verde significa que PUEDE proceder — no significa que puede ir sin mirar. Aún debe ceder a cualquier vehículo ya en la intersección y a los peatones que cruzan legalmente. Mire en ambas direcciones antes de entrar a cualquier intersección, incluso con luz verde.'},
  ans:1
},
{
  id:259, cat:'signs',
  en:{q:'What does a solid white line at an intersection mean?',opts:['Stop here — do not cross the line until it is safe to proceed','The lane ends here','Pedestrian priority zone begins','Bicycle lane boundary'],exp:'A solid white line (stop line) at an intersection marks where you must stop when facing a red light or stop sign. You must stop before the line, not at or beyond it. If there is a crosswalk, stop before the crosswalk. The stop line ensures you do not block pedestrians or cross traffic.'},
  zh:{q:'路口的实心白线意味着什么？',opts:['在这里停车——在安全通行之前不要越过该线','车道在这里结束','行人优先区开始','自行车道边界'],exp:'路口的实心白线（停车线）标记您在面对红灯或停车标志时必须停止的位置。您必须在线前停止，而不是在线上或线后。如果有人行横道，在人行横道前停止。停车线确保您不会阻塞行人或横向交通。'},
  zhTW:{q:'路口的實心白線意味著什麼？',opts:['在這裡停車——在安全通行之前不要越過該線','車道在這裡結束','行人優先區開始','自行車道邊界'],exp:'路口的實心白線（停車線）標記您在面對紅燈或停車標誌時必須停止的位置。您必須在線前停止，而不是在線上或線後。如果有人行橫道，在人行橫道前停止。停車線確保您不會阻塞行人或橫向交通。'},
  es:{q:'¿Qué significa una línea blanca sólida en una intersección?',opts:['Detenga aquí — no cruce la línea hasta que sea seguro proceder','El carril termina aquí','Comienza zona de prioridad para peatones','Límite del carril de bicicletas'],exp:'Una línea blanca sólida (línea de pare) en una intersección marca dónde debe detenerse cuando enfrenta un semáforo en rojo o señal de stop. Debe detenerse antes de la línea, no en ella ni más allá. Si hay un cruce peatonal, deténgase antes del cruce. La línea de pare asegura que no bloquee a los peatones ni al tráfico cruzado.'},
  ans:0
},
{
  id:260, cat:'signs', sign:'slow-vehicle',
  en:{q:'A triangular orange sign on the back of a slow-moving vehicle means:',opts:['The vehicle is a school bus','The vehicle is a construction vehicle','The vehicle travels at speeds under 25 mph and may be on the road ahead','Emergency vehicle — give way immediately'],exp:'The slow-moving vehicle emblem (orange triangle with red border) is required on any vehicle that travels at speeds under 25 mph (farm equipment, construction vehicles, horse-drawn vehicles). When you see this sign, reduce your speed, increase following distance, and prepare to pass safely when legal.'},
  zh:{q:'慢速车辆背后的橙色三角形标志意味着：',opts:['该车辆是校车','该车辆是建筑车辆','该车辆以低于25英里/小时的速度行驶，可能在前方道路上','紧急车辆——立即让路'],exp:'慢速车辆标志（带红色边框的橙色三角形）对任何以低于25英里/小时速度行驶的车辆都是必要的（农业设备、建筑车辆、马拉车辆）。看到这个标志时，减速，增加跟车距离，并在合法时准备安全超车。'},
  zhTW:{q:'慢速車輛背後的橙色三角形標誌意味著：',opts:['該車輛是校車','該車輛是建築車輛','該車輛以低於25英里/小時的速度行駛，可能在前方道路上','緊急車輛——立即讓路'],exp:'慢速車輛標誌（帶紅色邊框的橙色三角形）對任何以低於25英里/小時速度行駛的車輛都是必要的（農業設備、建築車輛、馬拉車輛）。看到這個標誌時，減速，增加跟車距離，並在合法時準備安全超車。'},
  es:{q:'Una señal triangular naranja en la parte trasera de un vehículo de movimiento lento significa:',opts:['El vehículo es un autobús escolar','El vehículo es un vehículo de construcción','El vehículo viaja a velocidades inferiores a 25 mph y puede estar en la carretera adelante','Vehículo de emergencia — ceda el paso inmediatamente'],exp:'El emblema de vehículo de movimiento lento (triángulo naranja con borde rojo) se requiere en cualquier vehículo que viaja a velocidades inferiores a 25 mph (equipos agrícolas, vehículos de construcción, vehículos tirados por caballos). Cuando vea esta señal, reduzca su velocidad, aumente la distancia de seguimiento y prepárese para adelantar de forma segura cuando sea legal.'},
  ans:2
},

// ── Batch 27 · Defensive Driving & Safety · Q261–270 ────────────────────────
{
  id:261, cat:'safety',
  en:{q:'What is "defensive driving"?',opts:['Driving very slowly at all times','Driving aggressively to protect your space on the road','Anticipating hazards and the mistakes of others, and being prepared to act safely','Only driving during daylight hours'],exp:'Defensive driving means anticipating potential hazards before they become emergencies. It involves: scanning the road ahead and around you, maintaining safe following distances, being aware of other drivers\' behaviors, having an escape route planned, and never assuming other drivers will behave predictably.'},
  zh:{q:'什么是"防御性驾驶"？',opts:['始终非常缓慢地驾驶','积极驾驶以保护您在道路上的空间','预判危险和他人的失误，并准备好安全行动','只在白天驾驶'],exp:'防御性驾驶意味着在潜在危险成为紧急情况之前预判它们。它包括：扫视前方和周围的道路，保持安全跟车距离，意识到其他驾驶者的行为，规划逃生路线，以及永远不要假设其他驾驶者的行为是可预测的。'},
  zhTW:{q:'什麼是「防禦性駕駛」？',opts:['始終非常緩慢地駕駛','積極駕駛以保護您在道路上的空間','預判危險和他人的失誤，並準備好安全行動','只在白天駕駛'],exp:'防禦性駕駛意味著在潛在危險成為緊急情況之前預判它們。它包括：掃視前方和周圍的道路，保持安全跟車距離，意識到其他駕駛者的行為，規劃逃生路線，以及永遠不要假設其他駕駛者的行為是可預測的。'},
  es:{q:'¿Qué es la "conducción defensiva"?',opts:['Conducir muy lentamente en todo momento','Conducir agresivamente para proteger su espacio en la carretera','Anticipar peligros y los errores de otros, y estar preparado para actuar con seguridad','Solo conducir durante las horas diurnas'],exp:'La conducción defensiva significa anticipar peligros potenciales antes de que se conviertan en emergencias. Implica: escanear la carretera hacia adelante y alrededor, mantener distancias de seguimiento seguras, ser consciente de los comportamientos de otros conductores, tener una ruta de escape planificada, y nunca asumir que otros conductores se comportarán de manera predecible.'},
  ans:2
},
{
  id:262, cat:'safety',
  en:{q:'What is the most dangerous time of day to drive?',opts:['Early morning (5–7 AM)','Late night (midnight–3 AM)','The "rush hour" period (7–9 AM and 4–7 PM) and late night Friday–Saturday','Noon when the sun is highest'],exp:'Rush hour has the highest volume of accidents due to traffic density, aggressive driving, and fatigue. However, late-night driving (especially Friday and Saturday nights) has the highest fatality rate per mile driven due to impaired and fatigued driving, reduced visibility, and faster speeds. Dawn and dusk are also dangerous due to sun glare.'},
  zh:{q:'一天中最危险的驾驶时间是什么时候？',opts:['清晨（早上5-7点）','深夜（午夜-凌晨3点）',"高峰期（早上7-9点和下午4-7点）和周五至周六深夜",'正午太阳最高时'],exp:'高峰期由于交通密度、攻击性驾驶和疲劳，事故数量最多。然而，深夜驾驶（尤其是周五和周六夜晚）由于受损和疲劳驾驶、能见度降低和更快的速度，每英里行驶的死亡率最高。黎明和黄昏也因阳光眩光而危险。'},
  zhTW:{q:'一天中最危險的駕駛時間是什麼時候？',opts:['清晨（早上5-7點）','深夜（午夜-凌晨3點）','高峰期（早上7-9點和下午4-7點）和週五至週六深夜','正午太陽最高時'],exp:'高峰期由於交通密度、攻擊性駕駛和疲勞，事故數量最多。然而，深夜駕駛（尤其是週五和週六夜晚）由於受損和疲勞駕駛、能見度降低和更快的速度，每英里行駛的死亡率最高。黎明和黃昏也因陽光眩光而危險。'},
  es:{q:'¿Cuál es el momento más peligroso del día para conducir?',opts:['Temprano en la mañana (5–7 AM)','Tarde en la noche (medianoche–3 AM)','El período de "hora pico" (7–9 AM y 4–7 PM) y tarde en la noche viernes–sábado','Al mediodía cuando el sol está más alto'],exp:'La hora pico tiene el mayor volumen de accidentes debido a la densidad del tráfico, la conducción agresiva y la fatiga. Sin embargo, la conducción nocturna tardía (especialmente los viernes y sábados por la noche) tiene la tasa de mortalidad más alta por milla conducida debido a la conducción deteriorada y fatigada, visibilidad reducida y velocidades más rápidas. El amanecer y el atardecer también son peligrosos por el deslumbramiento del sol.'},
  ans:2
},
{
  id:263, cat:'safety',
  en:{q:'How should you handle driving in heavy rain?',opts:['Drive at the same speed but increase following distance slightly','Turn on high-beam headlights for maximum visibility','Turn on low-beam headlights, reduce speed, increase following distance significantly, and avoid sudden braking','Pull over immediately — driving in rain is too dangerous'],exp:'In heavy rain: turn on low-beam headlights (high beams reflect off rain and reduce visibility), reduce speed, increase following distance to 4–6 seconds, avoid sudden braking (hydroplaning risk), and turn on hazard lights only if very slow or stopped. Avoid puddles — they can cause hydroplaning or damage your brakes.'},
  zh:{q:'在大雨中如何处理驾驶？',opts:['以相同速度行驶但稍微增加跟车距离','打开远光灯以获得最大能见度','打开近光灯，减速，大幅增加跟车距离，避免急刹车','立即靠边停车——在雨中驾驶太危险'],exp:'在大雨中：打开近光灯（远光灯反射雨水会降低能见度），减速，增加跟车距离到4-6秒，避免急刹车（水漂风险），只有非常慢或停车时才打开危险警告灯。避开积水——它们可能导致水漂或损坏刹车。'},
  zhTW:{q:'在大雨中如何處理駕駛？',opts:['以相同速度行駛但稍微增加跟車距離','打開遠光燈以獲得最大能見度','打開近光燈，減速，大幅增加跟車距離，避免急剎車','立即靠邊停車——在雨中駕駛太危險'],exp:'在大雨中：打開近光燈（遠光燈反射雨水會降低能見度），減速，增加跟車距離到4-6秒，避免急剎車（水漂風險），只有非常慢或停車時才打開危險警告燈。避開積水——它們可能導致水漂或損壞剎車。'},
  es:{q:'¿Cómo debe manejar la conducción en lluvia intensa?',opts:['Conduzca a la misma velocidad pero aumente ligeramente la distancia de seguimiento','Encienda los faros de luz alta para máxima visibilidad','Encienda los faros de luz baja, reduzca la velocidad, aumente significativamente la distancia de seguimiento y evite frenado repentino','Orillese inmediatamente — conducir en lluvia es demasiado peligroso'],exp:'En lluvia intensa: encienda los faros de luz baja (las luces altas se reflejan en la lluvia y reducen la visibilidad), reduzca la velocidad, aumente la distancia de seguimiento a 4–6 segundos, evite el frenado repentino (riesgo de hidroplaneo) y encienda las luces de emergencia solo si va muy lento o detenido. Evite los charcos — pueden causar hidroplaneo o dañar sus frenos.'},
  ans:2
},
{
  id:264, cat:'safety',
  en:{q:'What is hydroplaning and how can you avoid it?',opts:['A vehicle control system — not a concern for most drivers','When your tires lose contact with the road due to water between the tires and pavement — slow down and avoid sudden movements','A type of braking that occurs in cold weather','When your engine floods with water'],exp:'Hydroplaning occurs when water builds up between your tires and the road, causing the tires to lose traction and the car to "float." It can happen at speeds as low as 35 mph in heavy rain. Prevention: reduce speed in rain, maintain proper tire pressure and tread depth, avoid large puddles, and do not make sudden movements.'},
  zh:{q:'什么是水漂，如何避免？',opts:['一种车辆控制系统——对大多数驾驶者不是问题','当您的轮胎和路面之间积水导致轮胎失去与道路的接触——减速并避免突然动作','一种在寒冷天气中发生的制动类型','当您的发动机被水淹'],exp:'水漂发生在您的轮胎和道路之间积水，导致轮胎失去牵引力，汽车"漂浮"。在大雨中速度低至35英里/小时就可能发生。预防：在雨中减速，保持适当的轮胎气压和花纹深度，避开大积水，不要突然动作。'},
  zhTW:{q:'什麼是水漂，如何避免？',opts:['一種車輛控制系統——對大多數駕駛者不是問題','當您的輪胎和路面之間積水導致輪胎失去與道路的接觸——減速並避免突然動作','一種在寒冷天氣中發生的制動類型','當您的發動機被水淹'],exp:'水漂發生在您的輪胎和道路之間積水，導致輪胎失去牽引力，汽車「漂浮」。在大雨中速度低至35英里/小時就可能發生。預防：在雨中減速，保持適當的輪胎氣壓和花紋深度，避開大積水，不要突然動作。'},
  es:{q:'¿Qué es el hidroplaneo y cómo puede evitarlo?',opts:['Un sistema de control del vehículo — no es una preocupación para la mayoría de los conductores','Cuando sus neumáticos pierden contacto con la carretera debido al agua entre los neumáticos y el pavimento — reduzca la velocidad y evite movimientos repentinos','Un tipo de frenado que ocurre en clima frío','Cuando su motor se inunda de agua'],exp:'El hidroplaneo ocurre cuando el agua se acumula entre sus neumáticos y la carretera, haciendo que los neumáticos pierdan tracción y el auto "flote". Puede ocurrir a velocidades tan bajas como 35 mph en lluvia intensa. Prevención: reduzca la velocidad en lluvia, mantenga la presión correcta de neumáticos y la profundidad de la banda de rodadura, evite los charcos grandes y no haga movimientos repentinos.'},
  ans:1
},
{
  id:265, cat:'safety',
  en:{q:'What should you do if you experience a blowout (tire suddenly deflates) while driving at highway speed?',opts:['Brake hard immediately and steer to the shoulder','Do not brake suddenly — grip steering firmly, gradually ease off gas, and steer to the shoulder when stable','Accelerate briefly to regain control, then brake','Turn off the ignition immediately'],exp:'During a blowout: grip the steering wheel firmly with both hands, do NOT brake suddenly (this can cause you to lose control), gradually ease off the accelerator, let the car slow naturally, then gently apply brakes and steer to the shoulder. Sudden braking during a blowout is extremely dangerous.'},
  zh:{q:'在高速公路速度下行驶时发生爆胎（轮胎突然泄气），您应该怎么做？',opts:['立即大力刹车并转向路肩','不要突然刹车——紧握方向盘，逐渐松开油门，稳定后转向路肩','短暂加速以重新获得控制，然后刹车','立即关闭点火'],exp:'爆胎时：用双手紧握方向盘，不要突然刹车（这可能导致失控），逐渐松开油门，让车辆自然减速，然后轻轻踩刹车并转向路肩。爆胎时突然刹车极其危险。'},
  zhTW:{q:'在高速公路速度下行駛時發生爆胎（輪胎突然洩氣），您應該怎麼做？',opts:['立即大力剎車並轉向路肩','不要突然剎車——緊握方向盤，逐漸鬆開油門，穩定後轉向路肩','短暫加速以重新獲得控制，然後剎車','立即關閉點火'],exp:'爆胎時：用雙手緊握方向盤，不要突然剎車（這可能導致失控），逐漸鬆開油門，讓車輛自然減速，然後輕輕踩剎車並轉向路肩。爆胎時突然剎車極其危險。'},
  es:{q:'¿Qué debe hacer si experimenta un reventón (neumático que se desinfla repentinamente) mientras conduce a velocidad de autopista?',opts:['Frene fuertemente de inmediato y dirija hacia el arcén','No frene repentinamente — agarre el volante firmemente, gradualmente suelte el acelerador y dirija hacia el arcén cuando esté estable','Acelere brevemente para recuperar el control, luego frene','Apague el encendido inmediatamente'],exp:'Durante un reventón: agarre el volante firmemente con ambas manos, NO frene repentinamente (esto puede hacer que pierda el control), gradualmente suelte el acelerador, deje que el auto se desacelere naturalmente, luego aplique suavemente los frenos y dirija hacia el arcén. Frenar repentinamente durante un reventón es extremadamente peligroso.'},
  ans:1
},
{
  id:266, cat:'safety',
  en:{q:'At what blood alcohol content does driving ability begin to noticeably deteriorate?',opts:['0.08% — the legal limit','0.05%','0.02%','Driving ability is not affected until you exceed the legal limit'],exp:'Research shows driving ability begins to deteriorate at BAC levels as low as 0.02%. Reaction time, divided attention, and ability to track moving objects are impaired. At 0.05%, coordination and eye movement are affected. At 0.08%, all skills needed for safe driving are measurably impaired.'},
  zh:{q:'血液酒精含量达到多少时，驾驶能力开始明显下降？',opts:['0.08%——合法限制','0.05%','0.02%','驾驶能力不受影响直到超过合法限制'],exp:'研究表明驾驶能力在BAC低至0.02%时就开始下降。反应时间、分散注意力和追踪移动物体的能力受到损害。在0.05%时，协调能力和眼部运动受到影响。在0.08%时，安全驾驶所需的所有技能都明显受损。'},
  zhTW:{q:'血液酒精含量達到多少時，駕駛能力開始明顯下降？',opts:['0.08%——合法限制','0.05%','0.02%','駕駛能力不受影響直到超過合法限制'],exp:'研究表明駕駛能力在BAC低至0.02%時就開始下降。反應時間、分散注意力和追蹤移動物體的能力受到損害。在0.05%時，協調能力和眼部運動受到影響。在0.08%時，安全駕駛所需的所有技能都明顯受損。'},
  es:{q:'¿A qué contenido de alcohol en sangre comienza a deteriorarse notablemente la capacidad de conducción?',opts:['0.08% — el límite legal','0.05%','0.02%','La capacidad de conducción no se ve afectada hasta que excede el límite legal'],exp:'La investigación muestra que la capacidad de conducción comienza a deteriorarse a niveles de BAC tan bajos como 0.02%. El tiempo de reacción, la atención dividida y la capacidad de rastrear objetos en movimiento están deteriorados. A 0.05%, la coordinación y el movimiento ocular se ven afectados. A 0.08%, todas las habilidades necesarias para la conducción segura están perceptiblemente deterioradas.'},
  ans:2
},
{
  id:267, cat:'safety',
  en:{q:'What should you do if you feel sleepy while driving on the highway?',opts:['Open the window and turn up the radio to stay awake','Drink coffee and drive to the nearest exit','Pull over safely and take a 20-minute nap, then continue when alert','Drive faster to reach your destination sooner'],exp:'Drowsy driving is as dangerous as drunk driving. If you feel sleepy: pull over safely and rest. A 20-minute "power nap" is the most effective short-term remedy. Opening windows or music provides minimal benefit and gives false confidence. Do not rely on stimulants as a long-term solution.'},
  zh:{q:'在高速公路上驾驶时感到困倦，您应该怎么做？',opts:['打开车窗并调高收音机音量以保持清醒','喝咖啡并驾驶到最近出口','安全靠边并小睡20分钟，然后在清醒时继续行驶','加快速度以更快到达目的地'],exp:'困倦驾驶与酒驾同样危险。如果您感到困倦：安全靠边休息。20分钟的"能量小睡"是最有效的短期补救措施。打开车窗或音乐提供的益处最小并给人虚假的自信。不要依赖兴奋剂作为长期解决方案。'},
  zhTW:{q:'在高速公路上駕駛時感到困倦，您應該怎麼做？',opts:['打開車窗並調高收音機音量以保持清醒','喝咖啡並駕駛到最近出口','安全靠邊並小睡20分鐘，然後在清醒時繼續行駛','加快速度以更快到達目的地'],exp:'困倦駕駛與酒駕同樣危險。如果您感到困倦：安全靠邊休息。20分鐘的「能量小睡」是最有效的短期補救措施。打開車窗或音樂提供的益處最小並給人虛假的自信。不要依賴興奮劑作為長期解決方案。'},
  es:{q:'¿Qué debe hacer si se siente somnoliento mientras conduce en la autopista?',opts:['Abra la ventana y suba el volumen de la radio para mantenerse despierto','Tome café y conduzca hasta la salida más cercana','Orillese con seguridad y tome una siesta de 20 minutos, luego continúe cuando esté alerta','Conduzca más rápido para llegar a su destino antes'],exp:'La conducción somnoliente es tan peligrosa como la conducción ebria. Si se siente somnoliento: orillese con seguridad y descanse. Una "siesta rápida" de 20 minutos es el remedio a corto plazo más efectivo. Abrir ventanas o música proporciona un beneficio mínimo y da una falsa confianza. No dependa de estimulantes como solución a largo plazo.'},
  ans:2
},
{
  id:268, cat:'safety',
  en:{q:'When is a child required to use a booster seat in California?',opts:['From birth until they are 4 years old','Until they are at least 8 years old OR 57 inches (4\'9") tall','Until they are 12 years old','Until they weigh 80 pounds'],exp:'In California, a child must use a booster seat until they are at least 8 years old OR 57 inches tall (whichever comes first). A booster seat positions the seatbelt correctly across a child\'s body. Once both criteria are met, they can use an adult seatbelt, but rear-seat riding is recommended until 13.'},
  zh:{q:'在加州，孩子何时需要使用增高座椅？',opts:['从出生到4岁','至少达到8岁或57英寸（4英尺9英寸）高','直到12岁','直到体重达到80磅'],exp:'在加州，儿童必须使用增高座椅直到至少8岁或57英寸高（以先达到的为准）。增高座椅将安全带正确定位在儿童身上。一旦满足两个标准，他们就可以使用成人安全带，但建议13岁前坐后排。'},
  zhTW:{q:'在加州，孩子何時需要使用增高座椅？',opts:['從出生到4歲','至少達到8歲或57英寸（4英尺9英寸）高','直到12歲','直到體重達到80磅'],exp:'在加州，兒童必須使用增高座椅直到至少8歲或57英寸高（以先達到的為準）。增高座椅將安全帶正確定位在兒童身上。一旦滿足兩個標準，他們就可以使用成人安全帶，但建議13歲前坐後排。'},
  es:{q:'¿Cuándo se requiere que un niño use un asiento elevador en California?',opts:['Desde el nacimiento hasta los 4 años','Hasta que tenga al menos 8 años O mida 57 pulgadas (4\'9") de altura','Hasta los 12 años','Hasta que pese 80 libras'],exp:'En California, un niño debe usar un asiento elevador hasta que tenga al menos 8 años O mida 57 pulgadas de altura (lo que ocurra primero). Un asiento elevador posiciona el cinturón de seguridad correctamente sobre el cuerpo de un niño. Una vez que se cumplan ambos criterios, pueden usar un cinturón de seguridad para adultos, pero se recomienda viajar en el asiento trasero hasta los 13.'},
  ans:1
},
{
  id:269, cat:'safety',
  en:{q:'What does it mean to "cover the brake"?',opts:['Hold the brake pedal slightly pressed to alert drivers behind you','Move your foot from the accelerator to hover over the brake pedal — ready to brake quickly','Always keep one foot on the brake while driving','Put your foot on both pedals simultaneously'],exp:'"Covering the brake" means moving your right foot from the accelerator and positioning it over (but not pressing) the brake pedal. This technique reduces brake reaction time from about 1.5 seconds to 0.5 seconds. Use it when approaching intersections, behind slow traffic, or in any situation where braking may be needed soon.'},
  zh:{q:'"覆盖刹车"是什么意思？',opts:['轻踩刹车踏板以提醒后方驾驶者','将脚从油门移到刹车踏板上方盘旋——准备好快速刹车','驾驶时始终将一只脚放在刹车上','同时将脚放在两个踏板上'],exp:'"覆盖刹车"意味着将右脚从油门移开并定位在刹车踏板上方（但不按下）。这种技术将刹车反应时间从约1.5秒减少到0.5秒。在靠近路口、跟随慢速交通或任何可能很快需要刹车的情况下使用它。'},
  zhTW:{q:'「覆蓋剎車」是什麼意思？',opts:['輕踩剎車踏板以提醒後方駕駛者','將腳從油門移到剎車踏板上方盤旋——準備好快速剎車','駕駛時始終將一隻腳放在剎車上','同時將腳放在兩個踏板上'],exp:'「覆蓋剎車」意味著將右腳從油門移開並定位在剎車踏板上方（但不按下）。這種技術將剎車反應時間從約1.5秒減少到0.5秒。在靠近路口、跟隨慢速交通或任何可能很快需要剎車的情況下使用它。'},
  es:{q:'¿Qué significa "cubrir el freno"?',opts:['Mantener el pedal de freno ligeramente presionado para alertar a los conductores detrás de usted','Mover su pie del acelerador para colocarlo sobre (pero sin presionar) el pedal de freno — listo para frenar rápidamente','Mantener siempre un pie en el freno mientras conduce','Poner el pie en ambos pedales simultáneamente'],exp:'"Cubrir el freno" significa mover su pie derecho del acelerador y posicionarlo sobre (pero sin presionar) el pedal de freno. Esta técnica reduce el tiempo de reacción del freno de aproximadamente 1.5 segundos a 0.5 segundos. Úsela al aproximarse a intersecciones, detrás del tráfico lento, o en cualquier situación donde el frenado pueda necesitarse pronto.'},
  ans:1
},
{
  id:270, cat:'safety',
  en:{q:'What is a "blind spot" in driving?',opts:['A spot in the road with poor lighting','An area around your vehicle that cannot be seen in your mirrors','A type of visual impairment that disqualifies you from driving','Areas of the windshield blocked by pillars'],exp:'Blind spots are areas around your vehicle that are not visible in your mirrors. They are typically located on both sides of the rear of the vehicle (behind the doors). Always check blind spots by physically turning your head before changing lanes or merging. Side mirrors cannot fully eliminate blind spots.'},
  zh:{q:'驾驶中的"盲点"是什么？',opts:['道路上照明不良的地点','您车辆周围在后视镜中看不到的区域','使您不具备驾驶资格的视觉障碍类型','被车柱遮挡的挡风玻璃区域'],exp:'盲点是您车辆周围在后视镜中看不见的区域。它们通常位于车辆后部两侧（车门后面）。在变道或合并前，始终通过实际转头检查盲点。侧后视镜无法完全消除盲点。'},
  zhTW:{q:'駕駛中的「盲點」是什麼？',opts:['道路上照明不良的地點','您車輛周圍在後視鏡中看不到的區域','使您不具備駕駛資格的視覺障礙類型','被車柱遮擋的擋風玻璃區域'],exp:'盲點是您車輛周圍在後視鏡中看不見的區域。它們通常位於車輛後部兩側（車門後面）。在變道或合併前，始終通過實際轉頭檢查盲點。側後視鏡無法完全消除盲點。'},
  es:{q:'¿Qué es un "punto ciego" en la conducción?',opts:['Un lugar en la carretera con mala iluminación','Un área alrededor de su vehículo que no se puede ver en sus espejos','Un tipo de deterioro visual que lo descalifica para conducir','Áreas del parabrisas bloqueadas por pilares'],exp:'Los puntos ciegos son áreas alrededor de su vehículo que no son visibles en sus espejos. Típicamente se ubican en ambos lados de la parte trasera del vehículo (detrás de las puertas). Siempre revise los puntos ciegos girando físicamente la cabeza antes de cambiar de carril o fusionarse. Los espejos laterales no pueden eliminar completamente los puntos ciegos.'},
  ans:1
},

// ── Batch 28 · California-Specific Laws · Q271–280 ──────────────────────────
{
  id:271, cat:'laws',
  en:{q:'In California, what must you do if you are involved in an accident where someone is injured?',opts:['Leave the scene and call police from a safe location','Immediately call 911, stay at the scene, render aid if safe, and exchange information','Exchange insurance information and leave','Report it to the DMV within 30 days'],exp:'If you are in an accident with injuries: call 911 immediately, stay at the scene (leaving is a hit-and-run, a serious crime), render first aid if you are able and it is safe, exchange driver\'s license and insurance information with all involved parties. Leaving the scene of an injury accident is a felony in California.'},
  zh:{q:'在加州，如果您卷入有人受伤的事故，您必须怎么做？',opts:['离开现场并从安全位置呼叫警察','立即拨打911，留在现场，如果安全则提供援助，并交换信息','交换保险信息后离开','在30天内向DMV报告'],exp:'如果您在有伤亡的事故中：立即拨打911，留在现场（离开是逃逸，这是严重犯罪），如果您能且安全则提供急救，与所有涉事方交换驾驶执照和保险信息。在加州，离开有伤亡事故的现场是重罪。'},
  zhTW:{q:'在加州，如果您捲入有人受傷的事故，您必須怎麼做？',opts:['離開現場並從安全位置呼叫警察','立即撥打911，留在現場，如果安全則提供援助，並交換信息','交換保險信息後離開','在30天內向DMV報告'],exp:'如果您在有傷亡的事故中：立即撥打911，留在現場（離開是逃逸，這是嚴重犯罪），如果您能且安全則提供急救，與所有涉事方交換駕駛執照和保險信息。在加州，離開有傷亡事故的現場是重罪。'},
  es:{q:'En California, ¿qué debe hacer si está involucrado en un accidente donde alguien está lesionado?',opts:['Abandone la escena y llame a la policía desde un lugar seguro','Llame al 911 inmediatamente, quédese en la escena, brinde ayuda si es seguro e intercambie información','Intercambie información de seguro y váyase','Repórtelo al DMV dentro de 30 días'],exp:'Si está en un accidente con lesionados: llame al 911 inmediatamente, quédese en la escena (irse es fuga del lugar del accidente, un delito grave), brinde primeros auxilios si puede hacerlo y es seguro, intercambie información de licencia de conducir y seguro con todas las partes involucradas. Abandonar la escena de un accidente con lesiones es un delito grave en California.'},
  ans:1
},
{
  id:272, cat:'laws',
  en:{q:'California\'s hands-free law for cell phones requires:',opts:['Phones must be completely off while driving','You may use a phone only with a Bluetooth or speakerphone — hands must be free','Only the driver must be hands-free — passengers can text freely','All passengers over 18 may use phones normally'],exp:'California law prohibits holding or using a cell phone while driving. You must use a hands-free device (Bluetooth, earpiece, speakerphone mounted on vehicle). Texting is completely prohibited for all drivers. Drivers under 18 cannot use any wireless device even hands-free.'},
  zh:{q:'加州关于手机的免提法律要求：',opts:['驾驶时手机必须完全关机','只能使用蓝牙或扬声器使用手机——双手必须空闲','只有驾驶者必须免提——乘客可以自由发短信','所有18岁以上的乘客可以正常使用手机'],exp:'加州法律禁止在驾驶时手持或使用手机。您必须使用免提设备（蓝牙、耳机、安装在车辆上的扬声器）。所有驾驶者完全禁止发短信。18岁以下的驾驶者即使免提也不能使用任何无线设备。'},
  zhTW:{q:'加州關於手機的免提法律要求：',opts:['駕駛時手機必須完全關機','只能使用藍牙或揚聲器使用手機——雙手必須空閒','只有駕駛者必須免提——乘客可以自由發短信','所有18歲以上的乘客可以正常使用手機'],exp:'加州法律禁止在駕駛時手持或使用手機。您必須使用免提設備（藍牙、耳機、安裝在車輛上的揚聲器）。所有駕駛者完全禁止發短信。18歲以下的駕駛者即使免提也不能使用任何無線設備。'},
  es:{q:'La ley de manos libres de California para teléfonos celulares requiere:',opts:['Los teléfonos deben estar completamente apagados mientras conduce','Solo puede usar un teléfono con Bluetooth o altavoz — las manos deben estar libres','Solo el conductor debe ser manos libres — los pasajeros pueden enviar mensajes libremente','Todos los pasajeros mayores de 18 pueden usar teléfonos normalmente'],exp:'La ley de California prohíbe sostener o usar un teléfono celular mientras conduce. Debe usar un dispositivo manos libres (Bluetooth, auricular, altavoz montado en el vehículo). Los mensajes de texto están completamente prohibidos para todos los conductores. Los conductores menores de 18 no pueden usar ningún dispositivo inalámbrico incluso manos libres.'},
  ans:1
},
{
  id:273, cat:'laws',
  en:{q:'What is the "Scott\'s Law" (Move Over law) in California?',opts:['A law requiring all vehicles to stop at railroad crossings','A law requiring drivers to move over or slow down when passing stopped emergency vehicles with lights on','A law requiring drivers to yield to funeral processions','A law banning loud car stereos near schools'],exp:'Scott\'s Law (Vehicle Code 21809) requires California drivers to: (1) move over to an adjacent lane when safe, or (2) slow down to a reasonable and safe speed when approaching or passing a stopped emergency, tow truck, or Caltrans vehicle with warning lights on. Named after a tow truck driver killed while helping a motorist.'},
  zh:{q:'加州的"斯科特法"（移道法）是什么？',opts:['要求所有车辆在铁路道口停车的法律','要求驾驶者在经过有警灯的停靠紧急车辆时移道或减速的法律','要求驾驶者让行葬礼车队的法律','禁止在学校附近播放高音汽车音响的法律'],exp:'"斯科特法"（车辆法典21809）要求加州驾驶者：(1) 在安全时移到相邻车道，或(2) 靠近或通过有警告灯的停靠紧急车辆、拖车或加州公路局车辆时减速到合理安全速度。以一名在帮助驾驶者时被杀的拖车司机命名。'},
  zhTW:{q:'加州的「斯科特法」（移道法）是什麼？',opts:['要求所有車輛在鐵路道口停車的法律','要求駕駛者在經過有警燈的停靠緊急車輛時移道或減速的法律','要求駕駛者讓行葬禮車隊的法律','禁止在學校附近播放高音汽車音響的法律'],exp:'"斯科特法"（車輛法典21809）要求加州駕駛者：(1) 在安全時移到相鄰車道，或(2) 靠近或通過有警告燈的停靠緊急車輛、拖車或加州公路局車輛時減速到合理安全速度。以一名在幫助駕駛者時被殺的拖車司機命名。'},
  es:{q:'¿Qué es la "Ley de Scott" (ley de movimiento) en California?',opts:['Una ley que requiere que todos los vehículos se detengan en los cruces ferroviarios','Una ley que requiere que los conductores se muevan o reduzcan la velocidad al pasar vehículos de emergencia detenidos con luces encendidas','Una ley que requiere que los conductores cedan el paso a los cortejos fúnebres','Una ley que prohíbe los estéreos de auto ruidosos cerca de las escuelas'],exp:'La Ley de Scott (Código de Vehículos 21809) requiere que los conductores de California: (1) se muevan a un carril adyacente cuando sea seguro, o (2) reduzcan la velocidad a una velocidad razonable y segura cuando se aproximen o pasen un vehículo de emergencia, grúa o Caltrans detenido con luces de advertencia encendidas. Nombrado en honor a un conductor de grúa muerto mientras ayudaba a un motorista.'},
  ans:1
},
{
  id:274, cat:'laws',
  en:{q:'What must you do if your vehicle registration expires in California?',opts:['You may drive for up to 6 months without penalty','Renew it immediately — driving with expired registration is an infraction with fines','Simply display the old tags until you get the notice','Call the DMV and they will give you a 1-year extension'],exp:'Driving with expired registration in California is a violation. You must renew registration before it expires. The DMV typically sends a renewal notice 60 days before expiration. Late fees and penalties increase the longer you wait. A police officer can cite you for expired tags, and you may receive a fix-it ticket requiring proof of renewal.'},
  zh:{q:'如果您的车辆注册在加州过期，您必须怎么做？',opts:['您可以在没有处罚的情况下驾驶最多6个月','立即更新——驾驶过期注册车辆是违规，有罚款','只需展示旧标签直到收到通知','致电DMV，他们会给您1年延期'],exp:'在加州驾驶注册过期的车辆是违规行为。您必须在到期前更新注册。DMV通常在到期前60天发送更新通知。等待时间越长，滞纳金和罚款越高。警察可以因过期车牌引证您，您可能收到要求提供更新证明的整改传票。'},
  zhTW:{q:'如果您的車輛註冊在加州過期，您必須怎麼做？',opts:['您可以在沒有處罰的情況下駕駛最多6個月','立即更新——駕駛過期註冊車輛是違規，有罰款','只需展示舊標籤直到收到通知','致電DMV，他們會給您1年延期'],exp:'在加州駕駛註冊過期的車輛是違規行為。您必須在到期前更新註冊。DMV通常在到期前60天發送更新通知。等待時間越長，滯納金和罰款越高。警察可以因過期車牌引證您，您可能收到要求提供更新證明的整改傳票。'},
  es:{q:'¿Qué debe hacer si el registro de su vehículo vence en California?',opts:['Puede conducir hasta 6 meses sin penalidad','Renuévelo inmediatamente — conducir con registro vencido es una infracción con multas','Simplemente muestre las etiquetas viejas hasta que reciba el aviso','Llame al DMV y le darán una extensión de 1 año'],exp:'Conducir con registro vencido en California es una violación. Debe renovar el registro antes de que expire. El DMV típicamente envía un aviso de renovación 60 días antes del vencimiento. Las tarifas tardías y penalizaciones aumentan cuanto más espere. Un oficial de policía puede citarle por etiquetas vencidas y puede recibir una multa de reparación que requiere prueba de renovación.'},
  ans:1
},
{
  id:275, cat:'laws',
  en:{q:'California law requires that all vehicles maintain what minimum insurance coverage?',opts:['Comprehensive and collision coverage','Liability insurance only — 15/30/5 minimum limits','Full coverage — liability plus comprehensive and collision','Uninsured motorist coverage only'],exp:'California requires minimum liability insurance: $15,000 bodily injury per person, $30,000 total per accident, and $5,000 property damage (15/30/5). This is the legal minimum — most experts recommend much higher limits. Driving without insurance can result in license suspension and vehicle impoundment.'},
  zh:{q:'加州法律要求所有车辆维持什么最低保险保障？',opts:['综合险和碰撞险','仅责任险——15/30/5最低限额','全险——责任险加综合险和碰撞险','仅无保险驾驶者险'],exp:'加州要求最低责任保险：每人$15,000人身伤亡，每次事故$30,000总计，及$5,000财产损害（15/30/5）。这是法律最低要求——大多数专家建议更高的限额。无保险驾驶可能导致驾照暂停和车辆扣押。'},
  zhTW:{q:'加州法律要求所有車輛維持什麼最低保險保障？',opts:['綜合險和碰撞險','僅責任險——15/30/5最低限額','全險——責任險加綜合險和碰撞險','僅無保險駕駛者險'],exp:'加州要求最低責任保險：每人$15,000人身傷亡，每次事故$30,000總計，及$5,000財產損害（15/30/5）。這是法律最低要求——大多數專家建議更高的限額。無保險駕駛可能導致駕照暫停和車輛扣押。'},
  es:{q:'La ley de California requiere que todos los vehículos mantengan una cobertura de seguro mínima de:',opts:['Cobertura integral y de colisión','Solo seguro de responsabilidad civil — límites mínimos 15/30/5','Cobertura completa — responsabilidad más integral y colisión','Solo cobertura de motorista no asegurado'],exp:'California requiere seguro de responsabilidad mínimo: $15,000 por lesiones corporales por persona, $30,000 total por accidente y $5,000 de daño a la propiedad (15/30/5). Este es el mínimo legal — la mayoría de los expertos recomiendan límites mucho más altos. Conducir sin seguro puede resultar en suspensión de licencia e incautación del vehículo.'},
  ans:1
},
{
  id:276, cat:'laws',
  en:{q:'What is the difference between a "fix-it ticket" and a regular traffic citation?',opts:['A fix-it ticket has higher fines','A fix-it ticket can be dismissed if you fix the violation and get it signed off — regular tickets cannot','They are the same thing','Fix-it tickets are only issued by the DMV'],exp:'A "fix-it ticket" (correctable violation) is issued for equipment or documentation violations (broken taillight, expired registration, no proof of insurance). You can have it dismissed (or pay a reduced fee) by fixing the problem and getting a signed proof of correction. Regular moving violations cannot be dismissed this way.'},
  zh:{q:'"整改传票"和普通交通引证有什么区别？',opts:['整改传票有更高的罚款','整改传票在您修复违规并得到签字证明后可以撤销——普通传票不能','它们是一回事','整改传票只由DMV发出'],exp:'"整改传票"（可纠正违规）是针对设备或文件违规（尾灯损坏、注册过期、无保险证明）发出的。您可以通过修复问题并获得签署的纠正证明来撤销它（或支付减少的费用）。普通移动违规不能以这种方式撤销。'},
  zhTW:{q:'「整改傳票」和普通交通引證有什麼區別？',opts:['整改傳票有更高的罰款','整改傳票在您修復違規並得到簽字證明後可以撤銷——普通傳票不能','它們是一回事','整改傳票只由DMV發出'],exp:'「整改傳票」（可糾正違規）是針對設備或文件違規（尾燈損壞、註冊過期、無保險證明）發出的。您可以通過修復問題並獲得簽署的糾正證明來撤銷它（或支付減少的費用）。普通移動違規不能以這種方式撤銷。'},
  es:{q:'¿Cuál es la diferencia entre una "multa de reparación" y una citación de tráfico regular?',opts:['Una multa de reparación tiene multas más altas','Una multa de reparación puede ser desestimada si arregla la violación y obtiene una firma de aprobación — las multas regulares no pueden','Son la misma cosa','Las multas de reparación solo son emitidas por el DMV'],exp:'Una "multa de reparación" (violación corregible) se emite por violaciones de equipo o documentación (luz trasera rota, registro vencido, sin prueba de seguro). Puede desestimarse (o pagar una tarifa reducida) arreglando el problema y obteniendo una prueba de corrección firmada. Las violaciones de movimiento regulares no pueden desestimarse de esta manera.'},
  ans:1
},
{
  id:277, cat:'laws',
  en:{q:'In California, what is required when you want to change your name or address on your driver\'s license?',opts:['Nothing — you can continue using your old license','Notify the DMV within 10 days of the change','Apply for a new license immediately — the old one is invalid','Only notify the DMV if moving to a new county'],exp:'California requires you to notify the DMV of an address change within 10 days. You must update your driver\'s license with your new address. For a name change (due to marriage, court order, etc.), you must apply for a new license. Fines may apply for failing to update your information.'},
  zh:{q:'在加州，当您想更改驾驶执照上的姓名或地址时，需要什么？',opts:['什么都不用——您可以继续使用旧驾照','在变更后10天内通知DMV','立即申请新驾照——旧驾照无效','只有在搬到新县时才通知DMV'],exp:'加州要求您在地址变更后10天内通知DMV。您必须用新地址更新驾驶执照。对于姓名变更（由于婚姻、法院命令等），您必须申请新驾照。未能更新信息可能会有罚款。'},
  zhTW:{q:'在加州，當您想更改駕駛執照上的姓名或地址時，需要什麼？',opts:['什麼都不用——您可以繼續使用舊駕照','在變更後10天內通知DMV','立即申請新駕照——舊駕照無效','只有在搬到新縣時才通知DMV'],exp:'加州要求您在地址變更後10天內通知DMV。您必須用新地址更新駕駛執照。對於姓名變更（由於婚姻、法院命令等），您必須申請新駕照。未能更新信息可能會有罰款。'},
  es:{q:'En California, ¿qué se requiere cuando desea cambiar su nombre o dirección en su licencia de conducir?',opts:['Nada — puede continuar usando su licencia antigua','Notificar al DMV dentro de 10 días del cambio','Solicitar una nueva licencia inmediatamente — la antigua es inválida','Solo notificar al DMV si se muda a un nuevo condado'],exp:'California requiere que notifique al DMV de un cambio de dirección dentro de 10 días. Debe actualizar su licencia de conducir con su nueva dirección. Para un cambio de nombre (debido a matrimonio, orden judicial, etc.), debe solicitar una nueva licencia. Pueden aplicarse multas por no actualizar su información.'},
  ans:1
},
{
  id:278, cat:'laws',
  en:{q:'What is the "Graduated License" law for drivers under 18 in California?',opts:['Drivers under 18 pay reduced registration fees','New teen drivers must complete a supervised driving phase and face restrictions before getting a full license','Drivers under 18 must retake the driving test every year','Teens can only drive cars manufactured after 2010'],exp:'California\'s Graduated License program: (1) At 15½: get a learner\'s permit, must drive 50 hours supervised (10 at night). (2) At 16+: provisional license with restrictions — no driving 11PM–5AM, no passengers under 20 for first year. (3) At 18: full unrestricted license.'},
  zh:{q:'加州对18岁以下驾驶者的"分级驾照"法律是什么？',opts:['18岁以下的驾驶者支付减少的注册费','新手青少年驾驶者必须完成有监督的驾驶阶段并面临限制，才能获得完整驾照','18岁以下的驾驶者必须每年重新参加驾驶测试','青少年只能驾驶2010年后制造的汽车'],exp:'加州的分级驾照计划：(1) 15岁半时：获得学习驾照，必须在监督下驾驶50小时（其中10小时在夜间）。(2) 16岁以上：临时驾照有限制——第一年内不得在晚上11点至早上5点驾驶，不得搭载20岁以下的乘客。(3) 18岁时：完整无限制驾照。'},
  zhTW:{q:'加州對18歲以下駕駛者的「分級駕照」法律是什麼？',opts:['18歲以下的駕駛者支付減少的註冊費','新手青少年駕駛者必須完成有監督的駕駛階段並面臨限制，才能獲得完整駕照','18歲以下的駕駛者必須每年重新參加駕駛測試','青少年只能駕駛2010年後製造的汽車'],exp:'加州的分級駕照計劃：(1) 15歲半時：獲得學習駕照，必須在監督下駕駛50小時（其中10小時在夜間）。(2) 16歲以上：臨時駕照有限制——第一年內不得在晚上11點至早上5點駕駛，不得搭載20歲以下的乘客。(3) 18歲時：完整無限制駕照。'},
  es:{q:'¿Cuál es la ley de "Licencia Graduada" para conductores menores de 18 años en California?',opts:['Los conductores menores de 18 pagan tarifas de registro reducidas','Los nuevos conductores adolescentes deben completar una fase de conducción supervisada y enfrentar restricciones antes de obtener una licencia completa','Los conductores menores de 18 deben volver a tomar la prueba de conducción cada año','Los adolescentes solo pueden conducir autos fabricados después de 2010'],exp:'El programa de Licencia Graduada de California: (1) A los 15½: obtener un permiso de aprendizaje, debe conducir 50 horas supervisado (10 de noche). (2) A los 16+: licencia provisional con restricciones — sin conducir de 11PM–5AM, sin pasajeros menores de 20 durante el primer año. (3) A los 18: licencia completa sin restricciones.'},
  ans:1
},
{
  id:279, cat:'laws',
  en:{q:'What is a "points" system on a California driver\'s license?',opts:['A reward system where safe drivers earn points toward lower insurance','A system where traffic violations add points — too many points can result in license suspension','A system for tracking your total miles driven','A system to rate the difficulty of different roads'],exp:'California\'s point system adds points to your driving record for traffic violations. Minor violations = 1 point; major violations = 2 points. If you accumulate 4+ points in 12 months, 6+ in 24 months, or 8+ in 36 months, the DMV may suspend or revoke your license. DUI adds 2 points and triggers additional action.'},
  zh:{q:'加州驾驶执照的"积分"系统是什么？',opts:['安全驾驶者赚取积分以降低保险的奖励系统','交通违规添加积分的系统——积分过多可能导致驾照暂停','追踪您总驾驶里程的系统','评估不同道路难度的系统'],exp:'加州的积分系统对交通违规在您的驾驶记录上添加积分。轻微违规=1分；重大违规=2分。如果您在12个月内累积4分以上，24个月内6分以上，或36个月内8分以上，DMV可能暂停或吊销您的驾照。DUI添加2分并触发额外行动。'},
  zhTW:{q:'加州駕駛執照的「積分」系統是什麼？',opts:['安全駕駛者賺取積分以降低保險的獎勵系統','交通違規添加積分的系統——積分過多可能導致駕照暫停','追蹤您總駕駛里程的系統','評估不同道路難度的系統'],exp:'加州的積分系統對交通違規在您的駕駛記錄上添加積分。輕微違規=1分；重大違規=2分。如果您在12個月內累積4分以上，24個月內6分以上，或36個月內8分以上，DMV可能暫停或吊銷您的駕照。DUI添加2分並觸發額外行動。'},
  es:{q:'¿Qué es el sistema de "puntos" en una licencia de conducir de California?',opts:['Un sistema de recompensas donde los conductores seguros ganan puntos para seguro más bajo','Un sistema donde las infracciones de tráfico agregan puntos — demasiados puntos pueden resultar en suspensión de licencia','Un sistema para rastrear su total de millas conducidas','Un sistema para calificar la dificultad de diferentes carreteras'],exp:'El sistema de puntos de California agrega puntos a su expediente de conducción por infracciones de tráfico. Violaciones menores = 1 punto; violaciones mayores = 2 puntos. Si acumula 4+ puntos en 12 meses, 6+ en 24 meses, o 8+ en 36 meses, el DMV puede suspender o revocar su licencia. DUI agrega 2 puntos y desencadena acción adicional.'},
  ans:1
},
{
  id:280, cat:'laws',
  en:{q:'In California, at what age must you take a vision test to renew your driver\'s license?',opts:['50','60','70','Every renewal requires a vision test regardless of age'],exp:'In California, drivers aged 70 and older must renew their license in person at a DMV office and pass a vision test. Drivers under 70 can often renew online or by mail without a vision test, though the DMV may require an in-person visit based on driving record. Corrective lenses restrictions are noted on the license.'},
  zh:{q:'在加州，您必须在什么年龄进行视力测试才能更新驾驶执照？',opts:['50岁','60岁','70岁','每次更新都需要视力测试，无论年龄'],exp:'在加州，70岁及以上的驾驶者必须亲自到DMV办公室更新驾照并通过视力测试。70岁以下的驾驶者通常可以在线或邮件更新驾照而无需视力测试，但DMV可能根据驾驶记录要求亲自到场。矫正镜片限制会记录在驾照上。'},
  zhTW:{q:'在加州，您必須在什麼年齡進行視力測試才能更新駕駛執照？',opts:['50歲','60歲','70歲','每次更新都需要視力測試，無論年齡'],exp:'在加州，70歲及以上的駕駛者必須親自到DMV辦公室更新駕照並通過視力測試。70歲以下的駕駛者通常可以在線或郵件更新駕照而無需視力測試，但DMV可能根據駕駛記錄要求親自到場。矯正鏡片限制會記錄在駕照上。'},
  es:{q:'En California, ¿a qué edad debe tomar una prueba de visión para renovar su licencia de conducir?',opts:['50','60','70','Cada renovación requiere una prueba de visión independientemente de la edad'],exp:'En California, los conductores de 70 años o más deben renovar su licencia en persona en una oficina del DMV y pasar una prueba de visión. Los conductores menores de 70 a menudo pueden renovar en línea o por correo sin una prueba de visión, aunque el DMV puede requerir una visita en persona según el expediente de conducción. Las restricciones de lentes correctivos se anotan en la licencia.'},
  ans:2
},

// ── Batch 29 · Sharing the Road · Q281–290 ──────────────────────────────────
{
  id:281, cat:'safety',
  en:{q:'Where are motorcycles most difficult to see?',opts:['On freeways','In your rear-view mirror','In your blind spots and approaching from behind','At night only'],exp:'Motorcycles are hardest to see in your blind spots and when they are approaching from behind in traffic. Their small profile makes them easy to miss in mirrors. Always check blind spots by turning your head before changing lanes. Look twice before turning left — motorcycles are frequently overlooked.'},
  zh:{q:'摩托车在哪里最难被看到？',opts:['在高速公路上','在您的倒后镜中','在您的盲点中和从后方靠近时','只在夜间'],exp:'摩托车在您的盲点中和在交通中从后方靠近时最难被看到。它们的小体型使它们在后视镜中容易被忽视。在变道前始终通过转头检查盲点。左转前要看两次——摩托车经常被忽视。'},
  zhTW:{q:'摩托車在哪裡最難被看到？',opts:['在高速公路上','在您的倒後鏡中','在您的盲點中和從後方靠近時','只在夜間'],exp:'摩托車在您的盲點中和在交通中從後方靠近時最難被看到。它們的小體型使它們在後視鏡中容易被忽視。在變道前始終通過轉頭檢查盲點。左轉前要看兩次——摩托車經常被忽視。'},
  es:{q:'¿Dónde son las motocicletas más difíciles de ver?',opts:['En las autopistas','En su espejo retrovisor','En sus puntos ciegos y aproximándose desde atrás','Solo de noche'],exp:'Las motocicletas son más difíciles de ver en sus puntos ciegos y cuando se aproximan desde atrás en el tráfico. Su pequeño perfil las hace fáciles de pasar por alto en los espejos. Siempre revise los puntos ciegos girando la cabeza antes de cambiar de carril. Mire dos veces antes de girar a la izquierda — las motocicletas se pasan por alto con frecuencia.'},
  ans:2
},
{
  id:282, cat:'safety',
  en:{q:'What should you do when you see a large truck\'s turn signal on?',opts:['Speed up to pass before the truck turns','Stay back and give the truck extra space — large trucks need more room to turn','Pull alongside the truck to let it know the lane is clear','Honk to warn the truck driver that you are near'],exp:'Large trucks need much more space to turn than passenger vehicles, especially when turning right (they may swing left first). Never try to pass a turning truck or squeeze between a turning truck and the curb. Stay back and give trucks extra space. Watch for the turn signal early.'},
  zh:{q:'当您看到大型卡车的转向灯时，您应该怎么做？',opts:['加速在卡车转弯前超越','退后并给卡车更多空间——大型卡车转弯需要更多空间','并排行驶让卡车知道车道畅通','鸣喇叭提醒卡车司机您在附近'],exp:'大型卡车比乘用车需要更多转弯空间，尤其是右转时（可能先向左摆动）。永远不要试图超越正在转弯的卡车或挤到转弯卡车和路缘之间。退后并给卡车更多空间。提前注意转向灯。'},
  zhTW:{q:'當您看到大型卡車的方向燈時，您應該怎麼做？',opts:['加速在卡車轉彎前超越','退後並給卡車更多空間——大型卡車轉彎需要更多空間','並排行駛讓卡車知道車道暢通','鳴喇叭提醒卡車司機您在附近'],exp:'大型卡車比乘用車需要更多轉彎空間，尤其是右轉時（可能先向左擺動）。永遠不要試圖超越正在轉彎的卡車或擠到轉彎卡車和路緣之間。退後並給卡車更多空間。提前注意方向燈。'},
  es:{q:'¿Qué debe hacer cuando ve la señal de giro de un camión grande?',opts:['Acelere para adelantar antes de que gire el camión','Retroceda y dé al camión espacio adicional — los camiones grandes necesitan más espacio para girar','Póngase junto al camión para hacerle saber que el carril está despejado','Toque la bocina para advertir al conductor del camión que está cerca'],exp:'Los camiones grandes necesitan mucho más espacio para girar que los vehículos de pasajeros, especialmente al girar a la derecha (pueden girar a la izquierda primero). Nunca intente adelantar a un camión que está girando o meterse entre un camión que gira y la acera. Retroceda y dé a los camiones espacio adicional. Esté atento a la señal de giro con anticipación.'},
  ans:1
},
{
  id:283, cat:'safety',
  en:{q:'What are the "No-Zones" around large trucks?',opts:['Zones where trucks are prohibited from driving','Large blind spots around trucks where the driver cannot see your vehicle','Zones with lower speed limits for trucks','Areas where trucks must reduce speed'],exp:'The "No-Zones" are the large blind spots on the sides, front, and rear of large trucks where the truck driver cannot see other vehicles. The general rule: if you cannot see the truck driver\'s face in their mirror, they cannot see you. Avoid spending time in these areas — pass quickly and completely.'},
  zh:{q:'大型卡车周围的"无区"是什么？',opts:['禁止卡车行驶的区域','卡车周围的大盲点，驾驶者无法看到您的车辆','卡车速度较低的区域','卡车必须减速的区域'],exp:'"无区"是大型卡车两侧、前方和后方的大盲点，卡车驾驶者无法在那里看到其他车辆。一般规则：如果您无法在后视镜中看到卡车驾驶者的脸，他们就看不到您。避免在这些区域停留——迅速完全通过。'},
  zhTW:{q:'大型卡車周圍的「無區」是什麼？',opts:['禁止卡車行駛的區域','卡車周圍的大盲點，駕駛者無法看到您的車輛','卡車速度較低的區域','卡車必須減速的區域'],exp:'"無區"是大型卡車兩側、前方和後方的大盲點，卡車駕駛者無法在那裡看到其他車輛。一般規則：如果您無法在後視鏡中看到卡車駕駛者的臉，他們就看不到您。避免在這些區域停留——迅速完全通過。'},
  es:{q:'¿Qué son las "zonas de no-visión" alrededor de los camiones grandes?',opts:['Zonas donde los camiones tienen prohibido conducir','Grandes puntos ciegos alrededor de los camiones donde el conductor no puede ver su vehículo','Zonas con límites de velocidad más bajos para camiones','Áreas donde los camiones deben reducir la velocidad'],exp:'Las "zonas de no-visión" son los grandes puntos ciegos en los lados, frente y parte trasera de los camiones grandes donde el conductor del camión no puede ver otros vehículos. La regla general: si no puede ver la cara del conductor del camión en su espejo, ellos no pueden verlo. Evite pasar tiempo en estas áreas — adelante de forma rápida y completa.'},
  ans:1
},
{
  id:284, cat:'safety',
  en:{q:'What should you do when sharing the road with a horse or other animal-drawn vehicle?',opts:['Honk to alert the animal to your presence','Drive slowly and quietly, give wide berth, and stop if the animal is frightened','Flash your lights so the rider can see you better','Pass quickly to minimize the time near the animal'],exp:'Horses can be startled by vehicles, especially sudden sounds or movements. When near horses: slow down significantly (to 10–15 mph), pass wide and slowly, avoid sudden acceleration or braking after passing. If the horse appears frightened, stop and turn off your engine. Follow the rider\'s hand signals.'},
  zh:{q:'与马或其他动物拉动的车辆共享道路时，您应该怎么做？',opts:['鸣喇叭提醒动物您的存在','缓慢安静地行驶，留出宽裕空间，如果动物受惊则停车','闪灯让骑手更好地看到您','迅速通过以最小化在动物附近的时间'],exp:'马可能会被车辆惊吓，尤其是突然的声音或动作。在马附近时：大幅减速（到10-15英里/小时），宽距缓慢通过，通过后避免突然加速或刹车。如果马看起来受惊，停车并关闭发动机。遵循骑手的手势信号。'},
  zhTW:{q:'與馬或其他動物拉動的車輛共享道路時，您應該怎麼做？',opts:['鳴喇叭提醒動物您的存在','緩慢安靜地行駛，留出寬裕空間，如果動物受驚則停車','閃燈讓騎手更好地看到您','迅速通過以最小化在動物附近的時間'],exp:'馬可能會被車輛驚嚇，尤其是突然的聲音或動作。在馬附近時：大幅減速（到10-15英里/小時），寬距緩慢通過，通過後避免突然加速或剎車。如果馬看起來受驚，停車並關閉發動機。遵循騎手的手勢信號。'},
  es:{q:'¿Qué debe hacer cuando comparte la carretera con un caballo u otro vehículo tirado por animales?',opts:['Toque la bocina para alertar al animal de su presencia','Conduzca lento y silenciosamente, dé amplio margen y detenga si el animal se asusta','Destelle sus luces para que el jinete pueda verlo mejor','Pase rápidamente para minimizar el tiempo cerca del animal'],exp:'Los caballos pueden asustarse con los vehículos, especialmente con sonidos o movimientos repentinos. Cuando esté cerca de caballos: reduzca significativamente la velocidad (a 10–15 mph), pase con amplio margen y lentamente, evite la aceleración o el frenado repentinos después de pasar. Si el caballo parece asustado, detenga y apague su motor. Siga las señales de mano del jinete.'},
  ans:1
},
{
  id:285, cat:'safety',
  en:{q:'California law requires motorcyclists to:',opts:['Wear a helmet only if they choose to','Always wear a DOT-approved helmet while riding','Wear a helmet only on freeways','Wear a helmet only if they are under 21'],exp:'California has a universal motorcycle helmet law — ALL motorcycle riders and passengers must wear a DOT-approved helmet at all times. There are no exceptions based on age, speed, or road type. A fine is issued for not wearing a helmet. The helmet must meet federal DOT safety standards.'},
  zh:{q:'加州法律要求摩托车手：',opts:['只有选择时才戴头盔','骑行时始终戴DOT认证头盔','只在高速公路上戴头盔','只有21岁以下才戴头盔'],exp:'加州有普遍性摩托车头盔法律——所有摩托车驾驶者和乘客必须随时戴DOT认证头盔。没有基于年龄、速度或道路类型的例外。不戴头盔会被处以罚款。头盔必须符合联邦DOT安全标准。'},
  zhTW:{q:'加州法律要求摩托車手：',opts:['只有選擇時才戴頭盔','騎行時始終戴DOT認證頭盔','只在高速公路上戴頭盔','只有21歲以下才戴頭盔'],exp:'加州有普遍性摩托車頭盔法律——所有摩托車駕駛者和乘客必須隨時戴DOT認證頭盔。沒有基於年齡、速度或道路類型的例外。不戴頭盔會被處以罰款。頭盔必須符合聯邦DOT安全標準。'},
  es:{q:'La ley de California requiere que los motociclistas:',opts:['Usen casco solo si eligen hacerlo','Siempre usen un casco aprobado por DOT mientras conducen','Usen casco solo en autopistas','Usen casco solo si tienen menos de 21 años'],exp:'California tiene una ley universal de casco para motocicletas — TODOS los conductores y pasajeros de motocicletas deben usar un casco aprobado por DOT en todo momento. No hay excepciones basadas en edad, velocidad o tipo de carretera. Se emite una multa por no usar casco. El casco debe cumplir con los estándares de seguridad federales DOT.'},
  ans:1
},
{
  id:286, cat:'safety',
  en:{q:'What is "lane splitting" and is it legal in California?',opts:['Driving between lanes — it is illegal in California','Driving between lanes of slow or stopped traffic — it is legal in California when done safely','Driving in two lanes simultaneously — never legal','Passing on the right side — legal in all states'],exp:'Lane splitting (filtering) is riding a motorcycle between lanes of slow or stopped traffic. California is the only U.S. state where lane splitting is legal. However, it must be done safely and at a reasonable speed differential. Guidelines suggest lane splitting is safest at speeds under 30 mph with traffic moving under 10 mph.'},
  zh:{q:'"车道分割"是什么，在加州是否合法？',opts:['在车道之间行驶——在加州非法','在缓慢或停止的交通车道之间骑行——在加州安全进行时合法','同时在两条车道行驶——永远不合法','从右侧超车——在所有州合法'],exp:'车道分割（过滤）是指在缓慢或停止的交通车道之间骑摩托车。加州是美国唯一一个车道分割合法的州。但是，必须安全进行且速度差合理。指导方针建议在交通以低于10英里/小时移动时，以低于30英里/小时速度进行车道分割最安全。'},
  zhTW:{q:'「車道分割」是什麼，在加州是否合法？',opts:['在車道之間行駛——在加州非法','在緩慢或停止的交通車道之間騎行——在加州安全進行時合法','同時在兩條車道行駛——永遠不合法','從右側超車——在所有州合法'],exp:'車道分割（過濾）是指在緩慢或停止的交通車道之間騎摩托車。加州是美國唯一一個車道分割合法的州。但是，必須安全進行且速度差合理。指導方針建議在交通以低於10英里/小時移動時，以低於30英里/小時速度進行車道分割最安全。'},
  es:{q:'¿Qué es el "lane splitting" y es legal en California?',opts:['Conducir entre carriles — es ilegal en California','Conducir entre carriles de tráfico lento o detenido — es legal en California cuando se hace de forma segura','Conducir en dos carriles simultáneamente — nunca legal','Adelantar por el lado derecho — legal en todos los estados'],exp:'El lane splitting (filtrado) es conducir una motocicleta entre carriles de tráfico lento o detenido. California es el único estado de EE.UU. donde el lane splitting es legal. Sin embargo, debe hacerse de manera segura y con una diferencia de velocidad razonable. Las pautas sugieren que el lane splitting es más seguro a velocidades inferiores a 30 mph con el tráfico moviéndose a menos de 10 mph.'},
  ans:1
},
{
  id:287, cat:'safety',
  en:{q:'When approaching a stopped school bus with flashing red lights from the opposite direction on a divided highway, you must:',opts:['Stop — both directions must stop for school buses','Continue — only traffic behind the bus must stop on a divided highway','Slow to 15 mph and proceed with caution','Stop only if you can see children'],exp:'On a divided highway (with a raised median or barrier), only traffic BEHIND the school bus must stop when it has flashing red lights. Oncoming traffic (on the other side of the median) does not have to stop. On a two-lane road, both directions must stop.'},
  zh:{q:'在隔离公路上从反方向靠近有闪烁红灯的停靠校车时，您必须：',opts:['停车——两个方向都必须为校车停车','继续通行——在隔离公路上只有车辆后方的交通必须停车','减速到15英里/小时并谨慎通行','只有当您能看到孩子时才停车'],exp:'在隔离公路（有隆起隔离带或隔离物）上，只有校车后方的交通在其有闪烁红灯时必须停车。对向交通（隔离带另一侧）不必停车。在双车道道路上，两个方向都必须停车。'},
  zhTW:{q:'在隔離公路上從反方向靠近有閃爍紅燈的停靠校車時，您必須：',opts:['停車——兩個方向都必須為校車停車','繼續通行——在隔離公路上只有車輛後方的交通必須停車','減速到15英里/小時並謹慎通行','只有當您能看到孩子時才停車'],exp:'在隔離公路（有隆起隔離帶或隔離物）上，只有校車後方的交通在其有閃爍紅燈時必須停車。對向交通（隔離帶另一側）不必停車。在雙車道道路上，兩個方向都必須停車。'},
  es:{q:'Al aproximarse a un autobús escolar detenido con luces rojas intermitentes desde la dirección opuesta en una autopista dividida, debe:',opts:['Detenerse — ambas direcciones deben detenerse para los autobuses escolares','Continuar — solo el tráfico detrás del autobús debe detenerse en una autopista dividida','Reducir la velocidad a 15 mph y proceder con precaución','Detenerse solo si puede ver niños'],exp:'En una autopista dividida (con una mediana o barrera elevada), solo el tráfico DETRÁS del autobús escolar debe detenerse cuando tiene luces rojas intermitentes. El tráfico que viene en sentido contrario (al otro lado de la mediana) no tiene que detenerse. En una carretera de dos carriles, ambas direcciones deben detenerse.'},
  ans:1
},
{
  id:288, cat:'rightofway',
  en:{q:'When must a driver yield to a transit bus re-entering traffic from a bus stop?',opts:['Never — buses must wait for traffic','When the bus signals with its left-turn indicator and is pulling back into traffic from a designated bus pull-out','Only on streets with bus lanes','Only if a sign says "Yield to Bus"'],exp:'California law requires drivers to yield to a transit bus that is re-entering traffic from a bus stop or pull-out area when the bus has its left-turn signal on. This applies on streets with a speed limit of 25 mph or less and the bus is in a designated pull-out zone. Yield when it is safe to do so.'},
  zh:{q:'当公共交通巴士从巴士站重新驶入交通时，驾驶者必须何时让行？',opts:['永远不用——巴士必须等待交通','当巴士打左转向灯并从指定巴士停靠区驶回交通时','只在有巴士车道的街道上','只有当标志显示"让行巴士"时'],exp:'加州法律要求驾驶者在公共交通巴士打左转向灯从巴士站或停靠区重新驶入交通时让行。这适用于限速25英里/小时或更低的街道，且巴士在指定停靠区。在安全时让行。'},
  zhTW:{q:'當公共交通巴士從巴士站重新駛入交通時，駕駛者必須何時讓行？',opts:['永遠不用——巴士必須等待交通','當巴士打左方向燈並從指定巴士停靠區駛回交通時','只在有巴士車道的街道上','只有當標誌顯示「讓行巴士」時'],exp:'加州法律要求駕駛者在公共交通巴士打左方向燈從巴士站或停靠區重新駛入交通時讓行。這適用於限速25英里/小時或更低的街道，且巴士在指定停靠區。在安全時讓行。'},
  es:{q:'¿Cuándo debe un conductor ceder el paso a un autobús de tránsito que se reincorpora al tráfico desde una parada de autobús?',opts:['Nunca — los autobuses deben esperar al tráfico','Cuando el autobús señaliza con su indicador de giro izquierdo y se incorpora al tráfico desde una zona de parada designada','Solo en calles con carriles de autobús','Solo si una señal dice "Ceder al Autobús"'],exp:'La ley de California requiere que los conductores cedan el paso a un autobús de tránsito que se reincorpora al tráfico desde una parada de autobús o zona de parada cuando el autobús tiene la señal de giro izquierdo encendida. Esto aplica en calles con un límite de velocidad de 25 mph o menos y el autobús está en una zona de parada designada. Ceda cuando sea seguro hacerlo.'},
  ans:1
},
{
  id:289, cat:'safety',
  en:{q:'When driving near a large truck, where is the safest position?',opts:['Directly behind the truck — they can see you in their mirrors','Directly in front of the truck at a safe following distance','To the side where the driver has better visibility (left side, about even with the cab)','As far away from the truck as possible — move to a different lane'],exp:'The safest positions near a large truck are: in front of the truck (where you can see it), or to the left side even with the cab (where the driver can see you in their left mirror). Avoid: directly behind (large blind spot, debris risk), right side close to the cab (large blind spot), and very close in front (truck cannot stop quickly).'},
  zh:{q:'在大型卡车附近行驶时，最安全的位置是哪里？',opts:['直接在卡车后方——他们可以在后视镜中看到您','直接在卡车前方保持安全跟车距离','在驾驶者能见度更好的一侧（左侧，大约与驾驶室齐平）','尽量远离卡车——移到不同的车道'],exp:'在大型卡车附近最安全的位置是：在卡车前方（您可以看到它），或左侧与驾驶室齐平（驾驶者可以在左侧后视镜中看到您）。避免：直接在后方（大盲点，碎片风险），驾驶室附近右侧（大盲点），以及非常近的前方（卡车无法快速停车）。'},
  zhTW:{q:'在大型卡車附近行駛時，最安全的位置是哪裡？',opts:['直接在卡車後方——他們可以在後視鏡中看到您','直接在卡車前方保持安全跟車距離','在駕駛者能見度更好的一側（左側，大約與駕駛室齊平）','儘量遠離卡車——移到不同的車道'],exp:'在大型卡車附近最安全的位置是：在卡車前方（您可以看到它），或左側與駕駛室齊平（駕駛者可以在左側後視鏡中看到您）。避免：直接在後方（大盲點，碎片風險），駕駛室附近右側（大盲點），以及非常近的前方（卡車無法快速停車）。'},
  es:{q:'Al conducir cerca de un camión grande, ¿cuál es la posición más segura?',opts:['Directamente detrás del camión — pueden verlo en sus espejos','Directamente frente al camión a una distancia de seguimiento segura','Al lado donde el conductor tiene mejor visibilidad (lado izquierdo, aproximadamente al nivel de la cabina)','Lo más lejos posible del camión — moverse a un carril diferente'],exp:'Las posiciones más seguras cerca de un camión grande son: frente al camión (donde puede verlo), o al lado izquierdo al nivel de la cabina (donde el conductor puede verlo en su espejo izquierdo). Evite: directamente detrás (gran punto ciego, riesgo de escombros), lado derecho cerca de la cabina (gran punto ciego) y muy cerca al frente (el camión no puede detenerse rápidamente).'},
  ans:2
},
{
  id:290, cat:'safety',
  en:{q:'What precaution should you take when driving near children at play?',opts:['Honk frequently to warn children of your approach','Slow down significantly and cover the brake — children may dart into the road without warning','Drive at the speed limit — children should know traffic rules','Speed up to pass quickly and minimize your time near children'],exp:'Children are unpredictable. They may chase balls, pets, or friends into the street without looking. When driving in residential areas, near schools, or near playgrounds: slow well below the limit, scan continuously both sides, cover your brake, and avoid sudden maneuvers. Assume a child could appear any moment.'},
  zh:{q:'在玩耍的儿童附近驾驶时，您应该采取什么预防措施？',opts:['频繁鸣喇叭警告儿童您的靠近','大幅减速并覆盖刹车——儿童可能在没有警告的情况下冲入道路','以限制速度行驶——儿童应该懂得交通规则','加速迅速通过并最小化您在儿童附近的时间'],exp:'儿童是不可预测的。他们可能追逐球、宠物或朋友进入道路而不看。在住宅区、学校附近或游乐场附近行驶时：明显减速低于限制速度，持续扫视两侧，覆盖刹车，避免突然机动。假设儿童随时可能出现。'},
  zhTW:{q:'在玩耍的兒童附近駕駛時，您應該採取什麼預防措施？',opts:['頻繁鳴喇叭警告兒童您的靠近','大幅減速並覆蓋剎車——兒童可能在沒有警告的情況下衝入道路','以限制速度行駛——兒童應該懂得交通規則','加速迅速通過並最小化您在兒童附近的時間'],exp:'兒童是不可預測的。他們可能追逐球、寵物或朋友進入道路而不看。在住宅區、學校附近或遊樂場附近行駛時：明顯減速低於限制速度，持續掃視兩側，覆蓋剎車，避免突然機動。假設兒童隨時可能出現。'},
  es:{q:'¿Qué precaución debe tomar cuando conduce cerca de niños que juegan?',opts:['Toque la bocina con frecuencia para advertir a los niños de su aproximación','Reduzca significativamente la velocidad y cubra el freno — los niños pueden saltar a la carretera sin advertencia','Conduzca al límite de velocidad — los niños deben saber las reglas de tráfico','Acelere para pasar rápidamente y minimizar su tiempo cerca de los niños'],exp:'Los niños son impredecibles. Pueden perseguir pelotas, mascotas o amigos a la calle sin mirar. Al conducir en áreas residenciales, cerca de escuelas o cerca de parques de juegos: reduzca bien por debajo del límite, escanee continuamente ambos lados, cubra su freno y evite maniobras repentinas. Asuma que un niño podría aparecer en cualquier momento.'},
  ans:1
},

// ── Batch 30 · Mixed Review II · Q291–300 ───────────────────────────────────
{
  id:291, cat:'signs', sign:'four-way-stop',
  en:{q:'You arrive at an intersection with a "4-Way" or "All-Way" stop sign. What does this mean?',opts:['You have the right of way — proceed immediately','All approaches have stop signs — everyone must stop and yield in order of arrival','Only the cross street has a stop sign — you have the right of way','You may proceed at 15 mph without stopping'],exp:'An all-way (4-way) stop requires ALL vehicles approaching from any direction to stop completely. Then proceed in order of arrival — first to stop, first to go. If two vehicles arrive simultaneously, the one on the right goes first. Proceed only when it is your turn.'},
  zh:{q:'您到达有"4路"或"全向"停车标志的路口。这意味着什么？',opts:['您有优先通行权——立即通行','所有方向都有停车标志——所有人必须停车并按到达顺序让行','只有横向街道有停车标志——您有优先通行权','您可以不停车以15英里/小时通行'],exp:'全向（4路）停车要求所有从任何方向靠近的车辆完全停车。然后按到达顺序通行——先停先行。如果两辆车同时到达，右侧的先行。只有轮到您时才通行。'},
  zhTW:{q:'您到達有「4路」或「全向」停車標誌的路口。這意味著什麼？',opts:['您有優先通行權——立即通行','所有方向都有停車標誌——所有人必須停車並按到達順序讓行','只有橫向街道有停車標誌——您有優先通行權','您可以不停車以15英里/小時通行'],exp:'全向（4路）停車要求所有從任何方向靠近的車輛完全停車。然後按到達順序通行——先停先行。如果兩輛車同時到達，右側的先行。只有輪到您時才通行。'},
  es:{q:'Llega a una intersección con una señal de stop "4 vías" o "todas las vías". ¿Qué significa esto?',opts:['Tiene el derecho de paso — proceda inmediatamente','Todos los accesos tienen señales de stop — todos deben detenerse y ceder en orden de llegada','Solo la calle cruzada tiene señal de stop — usted tiene el derecho de paso','Puede proceder a 15 mph sin detenerse'],exp:'Una parada de todas las vías (4 vías) requiere que TODOS los vehículos que se aproximen desde cualquier dirección se detengan completamente. Luego proceda en orden de llegada — el primero en detenerse, el primero en ir. Si dos vehículos llegan simultáneamente, el de la derecha va primero. Proceda solo cuando sea su turno.'},
  ans:1
},
{
  id:292, cat:'laws',
  en:{q:'You receive a parking ticket in California. What happens if you do not pay within the time shown?',opts:['Nothing — parking tickets expire after 6 months','Late fees are added, and the DMV may place a hold on your vehicle registration renewal','Your vehicle may be towed immediately','You will be arrested'],exp:'Unpaid parking tickets in California result in increasing late fees. If you accumulate multiple unpaid tickets, the DMV can place a "hold" on your vehicle registration, preventing you from renewing until the fines are paid. Repeated non-payment can also result in your vehicle being booted or towed.'},
  zh:{q:'您在加州收到停车罚单。如果不在规定时间内付款会发生什么？',opts:['什么都没有——停车罚单6个月后过期','会添加滞纳金，DMV可能对您的车辆注册更新设置限制','您的车辆可能立即被拖走','您将被逮捕'],exp:'在加州未付停车罚款会导致滞纳金增加。如果您积累多张未付罚款，DMV可能对您的车辆注册设置"限制"，阻止您在支付罚款之前更新注册。多次不支付也可能导致您的车辆被固定夹具固定或拖走。'},
  zhTW:{q:'您在加州收到停車罰單。如果不在規定時間內付款會發生什麼？',opts:['什麼都沒有——停車罰單6個月後過期','會添加滯納金，DMV可能對您的車輛註冊更新設置限制','您的車輛可能立即被拖走','您將被逮捕'],exp:'在加州未付停車罰款會導致滯納金增加。如果您積累多張未付罰款，DMV可能對您的車輛註冊設置「限制」，阻止您在支付罰款之前更新註冊。多次不支付也可能導致您的車輛被固定夾具固定或拖走。'},
  es:{q:'Recibe una multa de estacionamiento en California. ¿Qué sucede si no paga dentro del tiempo indicado?',opts:['Nada — las multas de estacionamiento expiran después de 6 meses','Se agregan tarifas tardías y el DMV puede colocar un bloqueo en la renovación del registro de su vehículo','Su vehículo puede ser remolcado inmediatamente','Será arrestado'],exp:'Las multas de estacionamiento no pagadas en California resultan en tarifas tardías crecientes. Si acumula múltiples multas no pagadas, el DMV puede colocar un "bloqueo" en el registro de su vehículo, impidiéndole renovar hasta que se paguen las multas. El no pago repetido también puede resultar en que su vehículo sea bloqueado o remolcado.'},
  ans:1
},
{
  id:293, cat:'laws',
  en:{q:'What is required before you can legally drive after moving to California from another state?',opts:['Nothing — your out-of-state license is valid indefinitely','Exchange your out-of-state license for a California license within 10 days of becoming a resident','Take a driver education course only','Pass a written test only — no practical test is needed'],exp:'When you become a California resident, you must exchange your out-of-state license for a California driver\'s license within 10 days. You typically need to pass the written knowledge test, a vision test, and pay a fee. If you have a valid license from another state, you usually do not need to take a behind-the-wheel test.'},
  zh:{q:'从其他州搬到加州后，在合法驾驶前您需要什么？',opts:['什么都不需要——您的外州驾照无限期有效','在成为居民后10天内将外州驾照换成加州驾照','只需参加驾驶员教育课程','只需通过笔试——不需要实际考试'],exp:'当您成为加州居民时，必须在10天内将外州驾照换成加州驾驶执照。您通常需要通过书面知识测试、视力测试并支付费用。如果您持有其他州的有效驾照，通常不需要参加路考。'},
  zhTW:{q:'從其他州搬到加州後，在合法駕駛前您需要什麼？',opts:['什麼都不需要——您的外州駕照無限期有效','在成為居民後10天內將外州駕照換成加州駕照','只需參加駕駛員教育課程','只需通過筆試——不需要實際考試'],exp:'當您成為加州居民時，必須在10天內將外州駕照換成加州駕駛執照。您通常需要通過書面知識測試、視力測試並支付費用。如果您持有其他州的有效駕照，通常不需要參加路考。'},
  es:{q:'¿Qué se requiere antes de que pueda conducir legalmente después de mudarse a California desde otro estado?',opts:['Nada — su licencia de otro estado es válida indefinidamente','Intercambie su licencia de otro estado por una licencia de California dentro de 10 días de convertirse en residente','Tome solo un curso de educación para conductores','Pase solo una prueba escrita — no se necesita prueba práctica'],exp:'Cuando se convierte en residente de California, debe intercambiar su licencia de otro estado por una licencia de conducir de California dentro de 10 días. Típicamente necesita pasar la prueba de conocimientos escrita, una prueba de visión y pagar una tarifa. Si tiene una licencia válida de otro estado, generalmente no necesita tomar una prueba de manejo.'},
  ans:1
},
{
  id:294, cat:'speed',
  en:{q:'What is the speed limit in a senior center zone when posted?',opts:['15 mph','20 mph','25 mph','The same as the surrounding road'],exp:'Near senior centers, some jurisdictions post 25 mph speed limits during operating hours (similar to school zones). However, unlike school zones, senior center speed limits are not a statewide prima facie standard — they depend on local ordinances and posted signs. Always obey posted speed limits.'},
  zh:{q:'在有标志的老年人中心区域，速度限制是多少？',opts:['15英里/小时','20英里/小时','25英里/小时','与周围道路相同'],exp:'在老年人中心附近，一些司法管辖区在营业时间内标示25英里/小时的速度限制（类似于学校区）。然而，与学校区不同，老年人中心速度限制不是全州统一的初步表面标准——它们取决于地方法令和标志。始终遵守标志限速。'},
  zhTW:{q:'在有標誌的老年人中心區域，速度限制是多少？',opts:['15英里/小時','20英里/小時','25英里/小時','與周圍道路相同'],exp:'在老年人中心附近，一些司法管轄區在營業時間內標示25英里/小時的速度限制（類似於學校區）。然而，與學校區不同，老年人中心速度限制不是全州統一的初步表面標準——它們取決於地方法令和標誌。始終遵守標誌限速。'},
  es:{q:'¿Cuál es el límite de velocidad en una zona de centro para personas mayores cuando está publicado?',opts:['15 mph','20 mph','25 mph','El mismo que la carretera circundante'],exp:'Cerca de los centros para personas mayores, algunas jurisdicciones publican límites de velocidad de 25 mph durante el horario de operación (similar a las zonas escolares). Sin embargo, a diferencia de las zonas escolares, los límites de velocidad de los centros para personas mayores no son un estándar prima facie a nivel estatal — dependen de las ordenanzas locales y las señales publicadas. Siempre obedezca los límites de velocidad publicados.'},
  ans:2
},
{
  id:295, cat:'signs', sign:'railroad-crossbuck',
  en:{q:'At a railroad crossing with only a crossbuck sign (an X), with no lights or gates, what must you do?',opts:['Stop and wait 10 minutes before crossing','Slow down, look and listen in both directions, and cross only when safe','Stop completely at the tracks before crossing','Continue at normal speed — the crossbuck is only an informational sign'],exp:'A crossbuck sign (white X-shaped sign with "RAILROAD CROSSING") is a regulatory sign equivalent to a yield sign. Slow down, look and listen in both directions. If a train is approaching, stop at least 15 feet from the nearest rail and wait. Cross only when it is completely safe.'},
  zh:{q:'在只有道岔标志（X形）的铁路道口，没有灯光或栏杆，您必须怎么做？',opts:['停车等待10分钟后过道口','减速，向两个方向看和听，仅在安全时过道口','在道口前完全停车后过道口','以正常速度继续——道岔标志只是信息性标志'],exp:'道岔标志（白色X形"铁路道口"标志）是等同于让行标志的管制标志。减速，向两个方向看和听。如果火车正在靠近，在最近轨道至少15英尺处停车等待。仅在完全安全时过道口。'},
  zhTW:{q:'在只有道岔標誌（X形）的鐵路道口，沒有燈光或欄杆，您必須怎麼做？',opts:['停車等待10分鐘後過道口','減速，向兩個方向看和聽，僅在安全時過道口','在道口前完全停車後過道口','以正常速度繼續——道岔標誌只是信息性標誌'],exp:'道岔標誌（白色X形「鐵路道口」標誌）是等同於讓行標誌的管制標誌。減速，向兩個方向看和聽。如果火車正在靠近，在最近軌道至少15英尺處停車等待。僅在完全安全時過道口。'},
  es:{q:'En un cruce ferroviario con solo una señal de cruce en X, sin luces ni barreras, ¿qué debe hacer?',opts:['Detenerse y esperar 10 minutos antes de cruzar','Reducir la velocidad, mirar y escuchar en ambas direcciones, y cruzar solo cuando sea seguro','Detenerse completamente en las vías antes de cruzar','Continuar a velocidad normal — la señal de cruce es solo informativa'],exp:'Una señal de cruce (señal blanca en forma de X con "CRUCE FERROVIARIO") es una señal regulatoria equivalente a una señal de ceder el paso. Reduzca la velocidad, mire y escuche en ambas direcciones. Si se aproxima un tren, detenga al menos 15 pies del riel más cercano y espere. Cruce solo cuando esté completamente seguro.'},
  ans:1
},
{
  id:296, cat:'laws',
  en:{q:'What must drivers do at an intersection where a traffic signal light is out (not working)?',opts:['Proceed carefully without stopping','Treat it as an all-way stop','The road with more traffic has the right of way','Follow the directions of other drivers'],exp:'When a traffic signal is out or not working, treat the intersection as a four-way stop. Come to a complete stop, yield in order of arrival (vehicle on right goes first if simultaneous arrival), and proceed only when safe. This is the same rule that applies to flashing red lights.'},
  zh:{q:'在交通信号灯损坏（不工作）的路口，驾驶者必须怎么做？',opts:['不停车谨慎通行','视为全向停车','交通量更多的道路有优先通行权','遵循其他驾驶者的指示'],exp:'当交通信号灯损坏或不工作时，将路口视为四路停车。完全停车，按到达顺序让行（同时到达时右侧车辆先行），仅在安全时通行。这与适用于闪烁红灯的规则相同。'},
  zhTW:{q:'在交通信號燈損壞（不工作）的路口，駕駛者必須怎麼做？',opts:['不停車謹慎通行','視為全向停車','交通量更多的道路有優先通行權','遵循其他駕駛者的指示'],exp:'當交通信號燈損壞或不工作時，將路口視為四路停車。完全停車，按到達順序讓行（同時到達時右側車輛先行），僅在安全時通行。這與適用於閃爍紅燈的規則相同。'},
  es:{q:'¿Qué deben hacer los conductores en una intersección donde el semáforo está apagado (no funciona)?',opts:['Proceda con cuidado sin detenerse','Trátela como una parada de todas las vías','La carretera con más tráfico tiene el derecho de paso','Siga las instrucciones de otros conductores'],exp:'Cuando un semáforo está apagado o no funciona, trate la intersección como una parada de cuatro vías. Haga una parada completa, ceda en orden de llegada (el vehículo de la derecha va primero si llegaron simultáneamente) y proceda solo cuando sea seguro. Esta es la misma regla que aplica a las luces rojas intermitentes.'},
  ans:1
},
{
  id:297, cat:'safety',
  en:{q:'What does it mean when you see steam coming from your car\'s hood while driving?',opts:['This is normal — cars release steam on cold days','Your engine is overheating — pull over safely, turn off the engine, and do not open the radiator cap immediately','Your air conditioning system needs service','Your heater is working correctly'],exp:'Steam from the hood indicates your engine is overheating. Immediately: turn off the AC (reduces engine load), turn on the heater (helps dissipate heat), pull over safely, turn off the engine. Wait at least 15 minutes before opening the hood. NEVER open the radiator cap on an overheated engine — it can cause severe burns.'},
  zh:{q:'驾驶时看到您的车引擎盖冒出蒸汽意味着什么？',opts:['这是正常的——汽车在寒冷的天气会冒出蒸汽','您的发动机正在过热——安全靠边，关闭发动机，不要立即打开水箱盖','您的空调系统需要服务','您的暖气正常工作'],exp:'从引擎盖冒出的蒸汽表明发动机过热。立即：关闭空调（减少发动机负载），打开暖气（帮助散热），安全靠边，关闭发动机。在打开引擎盖之前等待至少15分钟。绝对不要打开过热发动机的水箱盖——这可能导致严重烫伤。'},
  zhTW:{q:'駕駛時看到您的車引擎蓋冒出蒸汽意味著什麼？',opts:['這是正常的——汽車在寒冷的天氣會冒出蒸汽','您的發動機正在過熱——安全靠邊，關閉發動機，不要立即打開水箱蓋','您的空調系統需要服務','您的暖氣正常工作'],exp:'從引擎蓋冒出的蒸汽表明發動機過熱。立即：關閉空調（減少發動機負載），打開暖氣（幫助散熱），安全靠邊，關閉發動機。在打開引擎蓋之前等待至少15分鐘。絕對不要打開過熱發動機的水箱蓋——這可能導致嚴重燙傷。'},
  es:{q:'¿Qué significa cuando ve vapor saliendo del capó de su auto mientras conduce?',opts:['Esto es normal — los autos liberan vapor en días fríos','Su motor se está sobrecalentando — orillese con seguridad, apague el motor y no abra la tapa del radiador inmediatamente','Su sistema de aire acondicionado necesita servicio','Su calefactor está funcionando correctamente'],exp:'El vapor del capó indica que su motor se está sobrecalentando. Inmediatamente: apague el AC (reduce la carga del motor), encienda el calefactor (ayuda a disipar el calor), orillese con seguridad, apague el motor. Espere al menos 15 minutos antes de abrir el capó. NUNCA abra la tapa del radiador en un motor sobrecalentado — puede causar quemaduras graves.'},
  ans:1
},
{
  id:298, cat:'highway',
  en:{q:'When is it appropriate to use hazard lights while driving on a freeway?',opts:['Whenever driving below 45 mph','Only when you are completely stopped on the freeway or moving very slowly due to an emergency','Whenever visibility is reduced due to rain or fog','Whenever you want to warn drivers behind you of a hazard'],exp:'Hazard lights (four-way flashers) should be used when: your vehicle is stopped on the freeway (breakdown, accident), or moving extremely slowly due to an emergency. They should NOT be used while normally driving in rain or fog (this is illegal in California) — use headlights instead. Hazard lights can confuse other drivers if misused.'},
  zh:{q:'在高速公路上行驶时，何时适合使用危险警告灯？',opts:['任何时候以低于45英里/小时行驶','只有当您在高速公路上完全停车或由于紧急情况非常缓慢移动时','任何时候由于雨天或雾天能见度降低','任何时候您想警告后方驾驶者有危险'],exp:'危险警告灯（四向闪光器）应在以下情况使用：您的车辆在高速公路上停车（故障、事故），或由于紧急情况移动极其缓慢。在正常驾驶中在雨天或雾天不应使用它们（这在加州是违法的）——改用车头灯。如果误用，危险警告灯可能会混淆其他驾驶者。'},
  zhTW:{q:'在高速公路上行駛時，何時適合使用危險警告燈？',opts:['任何時候以低於45英里/小時行駛','只有當您在高速公路上完全停車或由於緊急情況非常緩慢移動時','任何時候由於雨天或霧天能見度降低','任何時候您想警告後方駕駛者有危險'],exp:'危險警告燈（四向閃光器）應在以下情況使用：您的車輛在高速公路上停車（故障、事故），或由於緊急情況移動極其緩慢。在正常駕駛中在雨天或霧天不應使用它們（這在加州是違法的）——改用車頭燈。如果誤用，危險警告燈可能會混淆其他駕駛者。'},
  es:{q:'¿Cuándo es apropiado usar las luces de emergencia mientras conduce en una autopista?',opts:['Siempre que conduzca por debajo de 45 mph','Solo cuando está completamente detenido en la autopista o se mueve muy lentamente debido a una emergencia','Siempre que la visibilidad se reduce debido a lluvia o niebla','Siempre que quiera advertir a los conductores detrás de usted de un peligro'],exp:'Las luces de emergencia (intermitentes de cuatro vías) deben usarse cuando: su vehículo está detenido en la autopista (avería, accidente) o se mueve extremadamente lento debido a una emergencia. NO deben usarse mientras conduce normalmente en lluvia o niebla (esto es ilegal en California) — use los faros en su lugar. Las luces de emergencia pueden confundir a otros conductores si se usan mal.'},
  ans:1
},
{
  id:299, cat:'dui',
  en:{q:'A police officer asks you to perform a field sobriety test. Are you required to comply?',opts:['Yes — you must comply with all police requests','No — you can refuse field sobriety tests without legal penalty','You must comply only if you are under 21','Only breath tests are mandatory — field sobriety tests are optional'],exp:'In California, you are NOT legally required to submit to field sobriety tests (walking a line, finger-to-nose, etc.) as these are voluntary. However, refusing may be noted and used as evidence of impairment. You ARE required to submit to a chemical test (breath or blood) after a lawful DUI arrest under implied consent law.'},
  zh:{q:'警察要求您进行现场清醒测试。您必须配合吗？',opts:['是——您必须配合所有警察要求','不——您可以拒绝现场清醒测试而不受法律处罚','只有在21岁以下时才必须配合','只有呼气测试是强制性的——现场清醒测试是自愿的'],exp:'在加州，您在法律上不必须提交现场清醒测试（直线行走、手指触鼻等），因为这些是自愿的。但是，拒绝可能会被注意到并作为受损的证据。在合法的DUI逮捕后，您必须根据默示同意法律提交化学测试（呼气或血液）。'},
  zhTW:{q:'警察要求您進行現場清醒測試。您必須配合嗎？',opts:['是——您必須配合所有警察要求','不——您可以拒絕現場清醒測試而不受法律處罰','只有在21歲以下時才必須配合','只有呼氣測試是強制性的——現場清醒測試是自願的'],exp:'在加州，您在法律上不必須提交現場清醒測試（直線行走、手指觸鼻等），因為這些是自願的。但是，拒絕可能會被注意到並作為受損的證據。在合法的DUI逮捕後，您必須根據默示同意法律提交化學測試（呼氣或血液）。'},
  es:{q:'Un oficial de policía le pide que realice una prueba de sobriedad de campo. ¿Está obligado a cumplir?',opts:['Sí — debe cumplir con todas las solicitudes de la policía','No — puede rechazar las pruebas de sobriedad de campo sin penalidad legal','Debe cumplir solo si tiene menos de 21 años','Solo las pruebas de aliento son obligatorias — las pruebas de sobriedad de campo son opcionales'],exp:'En California, NO está legalmente obligado a someterse a pruebas de sobriedad de campo (caminar en línea, dedo a la nariz, etc.) ya que son voluntarias. Sin embargo, negarse puede ser anotado y usado como evidencia de deterioro. Sí está obligado a someterse a una prueba química (aliento o sangre) después de un arresto legal por DUI bajo la ley de consentimiento implícito.'},
  ans:1
},
{
  id:300, cat:'laws',
  en:{q:'What does it mean to "surrender" your driver\'s license?',opts:['Give it to a police officer for inspection','Voluntarily or involuntarily return your driver\'s license to the DMV, losing your driving privilege','Show it to another person upon request','Apply for a replacement license at the DMV'],exp:'Surrendering your license means physically turning it in to the DMV, which terminates your driving privileges. This can happen voluntarily (giving up driving) or involuntarily (ordered by court, DMV action for DUI, medical issues, too many points, etc.). Until a new license is issued, you cannot legally drive.'},
  zh:{q:'"上交"驾驶执照意味着什么？',opts:['将驾照给警察检查','自愿或非自愿地将驾驶执照归还给DMV，失去驾驶特权','应要求将其出示给另一个人','在DMV申请更换驾照'],exp:'"上交"您的驾照意味着将其实际交给DMV，这终止了您的驾驶特权。这可以是自愿的（放弃驾驶）或非自愿的（法院命令、DMV对DUI、医疗问题、积分过多等采取行动）。在发放新驾照之前，您不能合法驾驶。'},
  zhTW:{q:'「上交」駕駛執照意味著什麼？',opts:['將駕照給警察檢查','自願或非自願地將駕駛執照歸還給DMV，失去駕駛特權','應要求將其出示給另一個人','在DMV申請更換駕照'],exp:'「上交」您的駕照意味著將其實際交給DMV，這終止了您的駕駛特權。這可以是自願的（放棄駕駛）或非自願的（法院命令、DMV對DUI、醫療問題、積分過多等採取行動）。在發放新駕照之前，您不能合法駕駛。'},
  es:{q:'¿Qué significa "entregar" su licencia de conducir?',opts:['Dársela a un oficial de policía para inspección','Devolver voluntaria o involuntariamente su licencia de conducir al DMV, perdiendo su privilegio de conducir','Mostrársela a otra persona cuando se solicite','Solicitar una licencia de reemplazo en el DMV'],exp:'Entregar su licencia significa físicamente entregarla al DMV, lo que termina sus privilegios de conducción. Esto puede ocurrir voluntariamente (renunciar a conducir) o involuntariamente (ordenado por el tribunal, acción del DMV por DUI, problemas médicos, demasiados puntos, etc.). Hasta que se emita una nueva licencia, no puede conducir legalmente.'},
  ans:1
},

// ── Batch 31 · Special Driving Conditions · Q301–310 ────────────────────────
{
  id:301, cat:'safety',
  en:{q:'What should you do when driving through a flooded road?',opts:['Drive through quickly so water does not enter the engine','Test brakes after going through water by gently tapping them to dry the rotors','Always avoid flooded roads — if you must go through, drive slowly and test brakes afterward','Turn on hazard lights and drive at normal speed'],exp:'"Turn around, don\'t drown." Never drive through flooded roads — just 6 inches of water can cause loss of control, and 12 inches can carry away small vehicles. If you must drive through shallow water, go slowly and test your brakes afterward by gently tapping them to restore braking effectiveness.'},
  zh:{q:'驾车通过被洪水淹没的道路时，您应该怎么做？',opts:['快速通过以使水不进入发动机','通过水后轻轻踩刹车以测试刹车干燥转子','始终避免被洪水淹没的道路——如果必须通过，缓慢行驶并在此后测试刹车','打开危险警告灯以正常速度行驶'],exp:'"调头，不要溺水。"不要驾车通过被洪水淹没的道路——仅6英寸的水就可能导致失控，12英寸可以将小型车辆冲走。如果必须通过浅水区，缓慢行驶，然后轻轻踩刹车以恢复制动效果。'},
  zhTW:{q:'駕車通過被洪水淹沒的道路時，您應該怎麼做？',opts:['快速通過以使水不進入發動機','通過水後輕輕踩剎車以測試剎車乾燥轉子','始終避免被洪水淹沒的道路——如果必須通過，緩慢行駛並在此後測試剎車','打開危險警告燈以正常速度行駛'],exp:'「調頭，不要溺水。」不要駕車通過被洪水淹沒的道路——僅6英寸的水就可能導致失控，12英寸可以將小型車輛衝走。如果必須通過淺水區，緩慢行駛，然後輕輕踩剎車以恢復制動效果。'},
  es:{q:'¿Qué debe hacer cuando conduce a través de una carretera inundada?',opts:['Conduzca rápidamente para que el agua no entre al motor','Pruebe los frenos después de pasar por el agua tocándolos suavemente para secar los rotores','Evite siempre las carreteras inundadas — si debe pasar, conduzca lentamente y pruebe los frenos después','Encienda las luces de emergencia y conduzca a velocidad normal'],exp:'"Dé la vuelta, no se ahogue." Nunca conduzca por carreteras inundadas — solo 6 pulgadas de agua pueden causar pérdida de control, y 12 pulgadas pueden arrastrar vehículos pequeños. Si debe conducir a través de agua poco profunda, vaya despacio y pruebe sus frenos después tocándolos suavemente para restaurar la efectividad de frenado.'},
  ans:2
},
{
  id:302, cat:'safety',
  en:{q:'How do you drive safely through thick fog?',opts:['Use high-beam headlights to see farther ahead','Use low-beam headlights (fog lights if available), slow down, and increase following distance significantly','Turn on hazard lights and maintain normal speed','Pull over and wait — driving in fog is always too dangerous'],exp:'In thick fog: use low beams or fog lights (high beams reflect off fog and reduce visibility), slow down substantially, increase following distance to 4–6+ seconds, and be prepared to stop suddenly. If fog is too thick, pull off the road completely, turn off lights (to avoid rear-end hits), and wait.'},
  zh:{q:'如何在浓雾中安全驾驶？',opts:['使用远光灯以看得更远','使用近光灯（如果有雾灯），减速，大幅增加跟车距离','打开危险警告灯并保持正常速度','靠边停车等待——在雾中驾驶始终太危险'],exp:'在浓雾中：使用近光灯或雾灯（远光灯反射雾气降低能见度），大幅减速，增加跟车距离到4-6秒以上，并准备好突然停车。如果雾太浓，完全离开道路，关闭车灯（以避免追尾），等待。'},
  zhTW:{q:'如何在濃霧中安全駕駛？',opts:['使用遠光燈以看得更遠','使用近光燈（如果有霧燈），減速，大幅增加跟車距離','打開危險警告燈並保持正常速度','靠邊停車等待——在霧中駕駛始終太危險'],exp:'在濃霧中：使用近光燈或霧燈（遠光燈反射霧氣降低能見度），大幅減速，增加跟車距離到4-6秒以上，並準備好突然停車。如果霧太濃，完全離開道路，關閉車燈（以避免追尾），等待。'},
  es:{q:'¿Cómo conduce de forma segura a través de niebla espesa?',opts:['Use faros de luz alta para ver más lejos','Use faros de luz baja (luces antiniebla si están disponibles), reduzca la velocidad y aumente significativamente la distancia de seguimiento','Encienda las luces de emergencia y mantenga la velocidad normal','Orillese y espere — conducir en niebla siempre es demasiado peligroso'],exp:'En niebla espesa: use luces bajas o luces antiniebla (las luces altas se reflejan en la niebla y reducen la visibilidad), reduzca sustancialmente la velocidad, aumente la distancia de seguimiento a 4–6+ segundos y prepárese para detenerse repentinamente. Si la niebla es demasiado espesa, salga completamente de la carretera, apague las luces (para evitar colisiones traseras) y espere.'},
  ans:1
},
{
  id:303, cat:'safety',
  en:{q:'When driving at night, why should you dim your dashboard lights?',opts:['To save battery power','Bright interior lights reduce your ability to see the road ahead clearly','It has no effect — dashboard brightness does not affect driving','To signal other drivers that you are alert'],exp:'Bright dashboard lights create glare that reduces your ability to see objects outside the vehicle in the dark (your eyes adjust to interior brightness). Dimming dashboard lights allows your eyes to better adapt to darkness and see the road ahead more clearly. This is especially important on unlit roads.'},
  zh:{q:'夜间驾驶时，为什么要调暗仪表板灯光？',opts:['节省电池电量','明亮的内部灯光降低您清楚看到前方道路的能力','没有影响——仪表板亮度不影响驾驶','向其他驾驶者发出信号表示您保持警觉'],exp:'明亮的仪表板灯光会产生眩光，降低您在黑暗中看到车辆外物体的能力（您的眼睛适应内部亮度）。调暗仪表板灯光允许您的眼睛更好地适应黑暗，更清楚地看到前方道路。这在没有灯光的道路上尤其重要。'},
  zhTW:{q:'夜間駕駛時，為什麼要調暗儀表板燈光？',opts:['節省電池電量','明亮的內部燈光降低您清楚看到前方道路的能力','沒有影響——儀表板亮度不影響駕駛','向其他駕駛者發出信號表示您保持警覺'],exp:'明亮的儀表板燈光會產生眩光，降低您在黑暗中看到車輛外物體的能力（您的眼睛適應內部亮度）。調暗儀表板燈光允許您的眼睛更好地適應黑暗，更清楚地看到前方道路。這在沒有燈光的道路上尤其重要。'},
  es:{q:'Al conducir de noche, ¿por qué debe reducir las luces del tablero de instrumentos?',opts:['Para ahorrar energía de la batería','Las luces interiores brillantes reducen su capacidad de ver la carretera claramente','No tiene efecto — el brillo del tablero no afecta la conducción','Para señalizar a otros conductores que está alerta'],exp:'Las luces del tablero brillantes crean deslumbramiento que reduce su capacidad de ver objetos fuera del vehículo en la oscuridad (sus ojos se adaptan al brillo interior). Reducir las luces del tablero permite que sus ojos se adapten mejor a la oscuridad y vean la carretera más claramente. Esto es especialmente importante en carreteras sin iluminación.'},
  ans:1
},
{
  id:304, cat:'highway',
  en:{q:'What does a "Runaway Truck Ramp" sign indicate?',opts:['A ramp for trucks to enter the freeway','An emergency ramp of sand or gravel designed for trucks that have lost their brakes on a downhill grade','A special lane where trucks must slow down','A rest area specifically for truck drivers'],exp:'Runaway truck ramps (also called emergency escape ramps or arrester beds) are placed on steep downhill mountain grades. They consist of gravel or sand that helps stop a truck that has lost brake effectiveness. If your brakes fail on a mountain downhill, using the ramp is far better than the alternative.'},
  zh:{q:'"失控卡车坡道"标志表示什么？',opts:['卡车进入高速公路的坡道','在下坡坡度上刹车失效的卡车的紧急沙砾坡道','卡车必须减速的特殊车道','专门为卡车司机设置的休息区'],exp:'失控卡车坡道（也称为紧急逃生坡道或制动床）放置在陡峭的下坡山坡上。它们由砾石或沙子组成，可帮助停止刹车效果丧失的卡车。如果您在山上下坡时刹车失效，使用坡道远比其他选择好。'},
  zhTW:{q:'「失控卡車坡道」標誌表示什麼？',opts:['卡車進入高速公路的坡道','在下坡坡度上剎車失效的卡車的緊急沙礫坡道','卡車必須減速的特殊車道','專門為卡車司機設置的休息區'],exp:'失控卡車坡道（也稱為緊急逃生坡道或制動床）放置在陡峭的下坡山坡上。它們由礫石或沙子組成，可幫助停止剎車效果喪失的卡車。如果您在山上下坡時剎車失效，使用坡道遠比其他選擇好。'},
  es:{q:'¿Qué indica una señal de "Rampa para Camiones Descontrolados"?',opts:['Una rampa para que los camiones entren a la autopista','Una rampa de emergencia de arena o grava diseñada para camiones que han perdido sus frenos en una pendiente descendente','Un carril especial donde los camiones deben reducir la velocidad','Un área de descanso específicamente para conductores de camiones'],exp:'Las rampas para camiones descontrolados (también llamadas rampas de escape de emergencia o camas de arresto) se colocan en las pronunciadas pendientes descendentes de montañas. Consisten en grava o arena que ayuda a detener un camión que ha perdido la efectividad de frenado. Si sus frenos fallan en una montaña cuesta abajo, usar la rampa es mucho mejor que la alternativa.'},
  ans:1
},
{
  id:305, cat:'safety',
  en:{q:'What should you do if an earthquake occurs while you are driving?',opts:['Speed up to get away from buildings','Pull off the road as quickly as possible away from buildings, bridges, and overpasses, then stay in the vehicle','Stop in the middle of the road and crouch down','Exit the vehicle immediately and run'],exp:'If an earthquake strikes while driving: grip the steering wheel firmly, gradually slow down, pull over to the side of the road away from bridges, overpasses, trees, and buildings. Stay in the vehicle with your seatbelt on — the vehicle provides some protection. After shaking stops, proceed cautiously watching for road damage.'},
  zh:{q:'驾车时发生地震，您应该怎么做？',opts:['加速离开建筑物','尽快在远离建筑物、桥梁和立交桥的地方停车，然后留在车内','停在道路中央并蜷缩下去','立即下车并跑'],exp:'如果驾车时发生地震：紧握方向盘，逐渐减速，靠路边停车，远离桥梁、立交桥、树木和建筑物。留在车内系好安全带——车辆提供一些保护。震动停止后，谨慎行进注意道路损坏。'},
  zhTW:{q:'駕車時發生地震，您應該怎麼做？',opts:['加速離開建築物','儘快在遠離建築物、橋梁和立交橋的地方停車，然後留在車內','停在道路中央並蜷縮下去','立即下車並跑'],exp:'如果駕車時發生地震：緊握方向盤，逐漸減速，靠路邊停車，遠離橋梁、立交橋、樹木和建築物。留在車內繫好安全帶——車輛提供一些保護。震動停止後，謹慎行進注意道路損壞。'},
  es:{q:'¿Qué debe hacer si ocurre un terremoto mientras conduce?',opts:['Acelere para alejarse de los edificios','Salga de la carretera lo más rápido posible lejos de edificios, puentes y viaductos, luego permanezca en el vehículo','Detenga en el medio de la carretera y agáchese','Salga del vehículo inmediatamente y corra'],exp:'Si un terremoto ocurre mientras conduce: agarre firmemente el volante, reduzca gradualmente la velocidad, orillese alejado de puentes, viaductos, árboles y edificios. Permanezca en el vehículo con el cinturón puesto — el vehículo proporciona cierta protección. Después de que cese el movimiento, proceda con precaución vigilando los daños en la carretera.'},
  ans:1
},
{
  id:306, cat:'safety',
  en:{q:'When driving near a wildfire or through heavy smoke, what should you do?',opts:['Drive as fast as possible to escape the area','Turn on headlights, slow down, increase following distance, and follow evacuation orders','Open windows for fresh air','Nothing — continue driving normally'],exp:'During a wildfire: turn on headlights and hazard lights for visibility. Slow down due to reduced visibility and possible road debris. Increase following distance. If trapped: park off the road, turn off engine, close all windows and vents, lie on the floor, cover yourself with a blanket, and call 911. Follow all evacuation orders immediately.'},
  zh:{q:'在野火附近或穿越浓烟时，您应该怎么做？',opts:['尽可能快速驾驶以逃离该地区','打开车头灯，减速，增加跟车距离，并遵循疏散命令','打开车窗通新鲜空气','什么都不做——继续正常驾驶'],exp:'野火期间：打开车头灯和危险警告灯以提高能见度。由于能见度降低和可能的道路碎片而减速。增加跟车距离。如果被困：在路边停车，关闭发动机，关闭所有车窗和通风口，俯卧在地板上，用毯子盖住自己，拨打911。立即遵循所有疏散命令。'},
  zhTW:{q:'在野火附近或穿越濃煙時，您應該怎麼做？',opts:['儘可能快速駕駛以逃離該地區','打開車頭燈，減速，增加跟車距離，並遵循疏散命令','打開車窗通新鮮空氣','什麼都不做——繼續正常駕駛'],exp:'野火期間：打開車頭燈和危險警告燈以提高能見度。由於能見度降低和可能的道路碎片而減速。增加跟車距離。如果被困：在路邊停車，關閉發動機，關閉所有車窗和通風口，俯臥在地板上，用毯子蓋住自己，撥打911。立即遵循所有疏散命令。'},
  es:{q:'Al conducir cerca de un incendio forestal o a través de humo denso, ¿qué debe hacer?',opts:['Conduzca lo más rápido posible para escapar del área','Encienda los faros, reduzca la velocidad, aumente la distancia de seguimiento y siga las órdenes de evacuación','Abra las ventanas para obtener aire fresco','Nada — continúe conduciendo normalmente'],exp:'Durante un incendio forestal: encienda los faros y las luces de emergencia para visibilidad. Reduzca la velocidad debido a la visibilidad reducida y posibles escombros en la carretera. Aumente la distancia de seguimiento. Si queda atrapado: estacione fuera de la carretera, apague el motor, cierre todas las ventanas y ventilaciones, tiéndase en el suelo, cúbrase con una manta y llame al 911. Siga todas las órdenes de evacuación inmediatamente.'},
  ans:1
},
{
  id:307, cat:'safety',
  en:{q:'What is the correct technique for driving down a steep mountain grade?',opts:['Ride the brakes continuously to maintain speed','Coast in neutral for maximum speed control','Use a lower gear (engine braking) and apply brakes intermittently — do not ride them continuously','Use the highest gear to reduce engine stress'],exp:'On steep downgrades: select a lower gear BEFORE descending (not while going down). Use engine braking (low gear causes engine to resist movement). Apply brakes intermittently — never continuously ride them as this overheats and can cause brake failure. Signs typically advise the recommended gear for trucks.'},
  zh:{q:'驾车下陡峭山坡的正确技术是什么？',opts:['持续踩刹车以保持速度','在空档滑行以获得最大速度控制','使用低速档（发动机制动）并间歇性地踩刹车——不要持续踩它们','使用最高档以减少发动机压力'],exp:'在陡坡下行时：在下坡前（不是在下坡时）选择低速档。使用发动机制动（低速档使发动机阻止运动）。间歇性踩刹车——永远不要持续踩它们，因为这会使刹车过热并可能导致刹车失效。标志通常会为卡车建议推荐档位。'},
  zhTW:{q:'駕車下陡峭山坡的正確技術是什麼？',opts:['持續踩剎車以保持速度','在空擋滑行以獲得最大速度控制','使用低速擋（發動機制動）並間歇性地踩剎車——不要持續踩它們','使用最高擋以減少發動機壓力'],exp:'在陡坡下行時：在下坡前（不是在下坡時）選擇低速擋。使用發動機制動（低速擋使發動機阻止運動）。間歇性踩剎車——永遠不要持續踩它們，因為這會使剎車過熱並可能導致剎車失效。標誌通常會為卡車建議推薦擋位。'},
  es:{q:'¿Cuál es la técnica correcta para conducir cuesta abajo en una pendiente montañosa empinada?',opts:['Pise los frenos continuamente para mantener la velocidad','Ruede en neutro para máximo control de velocidad','Use una marcha más baja (freno motor) y aplique los frenos de forma intermitente — no los pise continuamente','Use la marcha más alta para reducir el estrés del motor'],exp:'En bajadas pronunciadas: seleccione una marcha más baja ANTES de descender (no mientras baja). Use el freno motor (la marcha baja hace que el motor resista el movimiento). Aplique los frenos de forma intermitente — nunca los pise continuamente ya que esto los sobrecalienta y puede causar falla de frenos. Las señales típicamente aconsejan la marcha recomendada para camiones.'},
  ans:2
},
{
  id:308, cat:'laws',
  en:{q:'What is the "Basic Minimum" following distance behind an emergency vehicle responding to an emergency?',opts:['100 feet','200 feet','300 feet','500 feet'],exp:'California law requires drivers to maintain at least 300 feet behind any fire engine, police vehicle, or other emergency vehicle that is responding with lights and sirens. This gives emergency vehicles room to maneuver and prevents accidents if they must stop suddenly.'},
  zh:{q:'在响应紧急情况的紧急车辆后方的"基本最小"跟车距离是多少？',opts:['100英尺','200英尺','300英尺','500英尺'],exp:'加州法律要求驾驶者在任何正在以警灯和警报声响应的消防车、警车或其他紧急车辆后至少保持300英尺的距离。这给紧急车辆机动空间，并防止他们必须突然停车时发生事故。'},
  zhTW:{q:'在響應緊急情況的緊急車輛後方的「基本最小」跟車距離是多少？',opts:['100英尺','200英尺','300英尺','500英尺'],exp:'加州法律要求駕駛者在任何正在以警燈和警報聲響應的消防車、警車或其他緊急車輛後至少保持300英尺的距離。這給緊急車輛機動空間，並防止他們必須突然停車時發生事故。'},
  es:{q:'¿Cuál es la distancia de seguimiento "mínima básica" detrás de un vehículo de emergencia que responde a una emergencia?',opts:['100 pies','200 pies','300 pies','500 pies'],exp:'La ley de California requiere que los conductores mantengan al menos 300 pies detrás de cualquier camión de bomberos, vehículo policial u otro vehículo de emergencia que responda con luces y sirenas. Esto da a los vehículos de emergencia espacio para maniobrar y previene accidentes si deben detenerse repentinamente.'},
  ans:2
},
{
  id:309, cat:'safety',
  en:{q:'What does it mean when you see a vehicle with a green flashing light?',opts:['Ambulance approaching — pull over and stop','A volunteer firefighter or physician responding to an emergency — extend courtesy but do not stop','A police vehicle — comply with all signals','Construction vehicles — slow down'],exp:'In California, a green flashing light indicates a volunteer firefighter or physician responding to an emergency in their personal vehicle. While you should extend courtesy to these vehicles, you are not legally required to pull over as you would for a true emergency vehicle with red/blue lights and a siren.'},
  zh:{q:'看到有绿色闪烁灯的车辆意味着什么？',opts:['救护车靠近——靠边停车','义务消防队员或医生在应急中响应——表示礼让但不必停车','警车——遵从所有信号','建筑车辆——减速'],exp:'在加州，绿色闪烁灯表明志愿消防队员或医生在其私人车辆中响应紧急情况。虽然您应该对这些车辆表示礼让，但您在法律上不必像对有红/蓝灯和警报声的真正紧急车辆那样靠边停车。'},
  zhTW:{q:'看到有綠色閃爍燈的車輛意味著什麼？',opts:['救護車靠近——靠邊停車','義務消防隊員或醫生在應急中響應——表示禮讓但不必停車','警車——遵從所有信號','建築車輛——減速'],exp:'在加州，綠色閃爍燈表明志願消防隊員或醫生在其私人車輛中響應緊急情況。雖然您應該對這些車輛表示禮讓，但您在法律上不必像對有紅/藍燈和警報聲的真正緊急車輛那樣靠邊停車。'},
  es:{q:'¿Qué significa cuando ve un vehículo con una luz verde intermitente?',opts:['Ambulancia aproximándose — orillese y detenga','Un bombero voluntario o médico que responde a una emergencia — extienda cortesía pero no se detenga','Un vehículo policial — cumpla con todas las señales','Vehículos de construcción — reduzca la velocidad'],exp:'En California, una luz verde intermitente indica un bombero voluntario o médico que responde a una emergencia en su vehículo personal. Aunque debe extender cortesía a estos vehículos, no está legalmente obligado a orillarse como lo haría por un verdadero vehículo de emergencia con luces rojas/azules y sirena.'},
  ans:1
},
{
  id:310, cat:'safety',
  en:{q:'What is the safest action if you are in a vehicle that starts to sink in water?',opts:['Stay calm and wait for the car to fill with water before trying to escape — then open the door','Immediately unbuckle seatbelt, open window before electric windows fail, and exit through the window','Call 911 and wait for help before trying to escape','Stay in the vehicle — it will float long enough for rescue'],exp:'If your car is sinking: act immediately, do not wait. Unbuckle seatbelt, open window (electric windows may work briefly, use a window punch tool if available), and escape while the car is still above water. Once water pressure equalizes inside and outside the car, you can push open the door to escape if needed.'},
  zh:{q:'如果您所在的车辆开始在水中下沉，最安全的行动是什么？',opts:['保持冷静，等待车辆充满水后再尝试逃脱——然后打开车门','立即解开安全带，在电动车窗失效前打开车窗，并从车窗逃出','拨打911等待帮助后再尝试逃脱','留在车内——车辆会漂浮足够长时间等待救援'],exp:'如果您的车正在下沉：立即行动，不要等待。解开安全带，打开车窗（电动车窗可能短暂工作，如果有车窗击碎工具则使用），在车辆仍在水面以上时逃脱。一旦车内外水压平衡，必要时可以推开车门逃脱。'},
  zhTW:{q:'如果您所在的車輛開始在水中下沉，最安全的行動是什麼？',opts:['保持冷靜，等待車輛充滿水後再嘗試逃脫——然後打開車門','立即解開安全帶，在電動車窗失效前打開車窗，並從車窗逃出','撥打911等待幫助後再嘗試逃脫','留在車內——車輛會漂浮足夠長時間等待救援'],exp:'如果您的車正在下沉：立即行動，不要等待。解開安全帶，打開車窗（電動車窗可能短暫工作，如果有車窗擊碎工具則使用），在車輛仍在水面以上時逃脫。一旦車內外水壓平衡，必要時可以推開車門逃脫。'},
  es:{q:'¿Cuál es la acción más segura si está en un vehículo que comienza a hundirse en el agua?',opts:['Mantenga la calma y espere a que el auto se llene de agua antes de intentar escapar — luego abra la puerta','Desabroche inmediatamente el cinturón, abra la ventana antes de que fallen las ventanas eléctricas, y salga por la ventana','Llame al 911 y espere ayuda antes de intentar escapar','Permanezca en el vehículo — flotará lo suficiente para el rescate'],exp:'Si su auto se está hundiendo: actúe inmediatamente, no espere. Desabroche el cinturón, abra la ventana (las ventanas eléctricas pueden funcionar brevemente, use una herramienta de rompe-vidrios si está disponible) y escape mientras el auto todavía está sobre el agua. Una vez que la presión del agua se iguala dentro y fuera del auto, puede empujar para abrir la puerta para escapar si es necesario.'},
  ans:1
},

// ── Batch 32 · Speed, Laws & Safety Mix · Q311–320 ──────────────────────────
{
  id:311, cat:'speed',
  en:{q:'On a residential street at night in California, you see a ball roll into the road. What should you do?',opts:['Maintain speed — balls are not hazards','Slow down significantly and cover the brake — a child may follow the ball','Honk your horn and proceed','Speed up to pass the ball before a child appears'],exp:'A ball rolling into the road is a major warning sign that a child may be right behind it. Immediately slow down and cover your brake. Be prepared to stop. Children playing near roads often do not look before chasing toys into the street. This is one of the most critical situations requiring immediate defensive action.'},
  zh:{q:'在加州住宅区夜间，您看到一个球滚入道路。您应该怎么做？',opts:['保持速度——球不是危险','大幅减速并覆盖刹车——孩子可能跟着球来','鸣喇叭然后继续','加速在孩子出现前通过球'],exp:'球滚入道路是孩子可能紧随其后的重大警告信号。立即减速并覆盖刹车。准备好停车。在道路附近玩耍的儿童经常不看就追着玩具冲入街道。这是需要立即进行防御性行动的最关键情况之一。'},
  zhTW:{q:'在加州住宅區夜間，您看到一個球滾入道路。您應該怎麼做？',opts:['保持速度——球不是危險','大幅減速並覆蓋剎車——孩子可能跟著球來','鳴喇叭然後繼續','加速在孩子出現前通過球'],exp:'球滾入道路是孩子可能緊隨其後的重大警告信號。立即減速並覆蓋剎車。準備好停車。在道路附近玩耍的兒童經常不看就追著玩具衝入街道。這是需要立即進行防禦性行動的最關鍵情況之一。'},
  es:{q:'En una calle residencial de noche en California, ve una pelota rodar hacia la carretera. ¿Qué debe hacer?',opts:['Mantenga la velocidad — las pelotas no son peligros','Reduzca significativamente la velocidad y cubra el freno — un niño puede seguir la pelota','Toque la bocina y proceda','Acelere para pasar la pelota antes de que aparezca un niño'],exp:'Una pelota que rueda hacia la carretera es una señal de advertencia importante de que un niño puede estar justo detrás de ella. Reduzca la velocidad inmediatamente y cubra su freno. Prepárese para detenerse. Los niños que juegan cerca de las carreteras a menudo no miran antes de perseguir juguetes a la calle. Esta es una de las situaciones más críticas que requieren acción defensiva inmediata.'},
  ans:1
},
{
  id:312, cat:'laws',
  en:{q:'What is the minimum age to obtain a learner\'s permit in California?',opts:['14','15½','16','17'],exp:'In California, you must be at least 15½ years old to apply for a learner\'s permit (provisional instruction permit). With the permit, you must always be accompanied by a licensed driver who is 18 or older and is in the front passenger seat. You must hold the permit for 6 months before applying for a provisional license.'},
  zh:{q:'在加州获得学习驾照的最低年龄是多少？',opts:['14岁','15岁半','16岁','17岁'],exp:'在加州，您必须至少15岁半才能申请学习驾照（临时教学许可证）。持有许可证时，您必须始终有18岁或以上的持牌驾驶者坐在前排乘客座位上陪同。您必须持有许可证6个月才能申请临时驾照。'},
  zhTW:{q:'在加州獲得學習駕照的最低年齡是多少？',opts:['14歲','15歲半','16歲','17歲'],exp:'在加州，您必須至少15歲半才能申請學習駕照（臨時教學許可證）。持有許可證時，您必須始終有18歲或以上的持牌駕駛者坐在前排乘客座位上陪同。您必須持有許可證6個月才能申請臨時駕照。'},
  es:{q:'¿Cuál es la edad mínima para obtener un permiso de aprendizaje en California?',opts:['14','15½','16','17'],exp:'En California, debe tener al menos 15½ años para solicitar un permiso de aprendizaje (permiso provisional de instrucción). Con el permiso, siempre debe estar acompañado por un conductor con licencia que tenga 18 años o más y esté en el asiento del pasajero delantero. Debe tener el permiso durante 6 meses antes de solicitar una licencia provisional.'},
  ans:1
},
{
  id:313, cat:'rightofway',
  en:{q:'You are traveling in the right lane on a multi-lane road and want to turn right. A bicyclist is riding in the bike lane to your right. Who has the right of way?',opts:['You do — vehicles always have right of way over bicyclists','The bicyclist — you must yield when merging into the bike lane to turn right','Whoever reaches the intersection first','The bicyclist only if they are traveling faster than you'],exp:'When turning right, you must yield to bicyclists in the bike lane. Before turning right, signal, check for cyclists, merge into the bike lane within 200 feet of the intersection (where it is legal), and then turn. Never cut off a bicyclist by turning sharply in front of them.'},
  zh:{q:'您在多车道道路的右侧车道行驶并想右转。一名骑车者在您右侧的自行车道骑行。谁有优先通行权？',opts:['您——车辆始终优先于骑车者','骑车者——您并入自行车道右转时必须让行','谁先到达路口','骑车者只有在行驶比您快时才有优先权'],exp:'右转时，您必须让行自行车道中的骑车者。在右转前，打转向灯，检查骑车者，在路口200英尺以内并入自行车道（合法的情况下），然后转弯。切勿在骑车者前方急转弯。'},
  zhTW:{q:'您在多車道道路的右側車道行駛並想右轉。一名騎車者在您右側的自行車道騎行。誰有優先通行權？',opts:['您——車輛始終優先於騎車者','騎車者——您並入自行車道右轉時必須讓行','誰先到達路口','騎車者只有在行駛比您快時才有優先權'],exp:'右轉時，您必須讓行自行車道中的騎車者。在右轉前，打方向燈，檢查騎車者，在路口200英尺以內並入自行車道（合法的情況下），然後轉彎。切勿在騎車者前方急轉彎。'},
  es:{q:'Viaja en el carril derecho de una carretera de múltiples carriles y quiere girar a la derecha. Un ciclista pedalea en el carril de bicicletas a su derecha. ¿Quién tiene el derecho de paso?',opts:['Usted — los vehículos siempre tienen derecho de paso sobre los ciclistas','El ciclista — debe ceder cuando se fusiona al carril de bicicletas para girar a la derecha','Quien llegue primero a la intersección','El ciclista solo si viaja más rápido que usted'],exp:'Al girar a la derecha, debe ceder a los ciclistas en el carril de bicicletas. Antes de girar a la derecha, señalice, verifique los ciclistas, fusiónese al carril de bicicletas dentro de 200 pies de la intersección (donde es legal) y luego gire. Nunca corte a un ciclista girando bruscamente frente a ellos.'},
  ans:1
},
{
  id:314, cat:'laws',
  en:{q:'In California, what is the rule for passing on a two-lane road?',opts:['You may pass at any time if the road appears clear','You may pass only when it is safe, legal (no solid yellow line on your side), and there is sufficient sight distance','You may pass only in designated passing zones marked with green stripes','You must never pass on a two-lane road'],exp:'On a two-lane road, passing is allowed only when: (1) the center line is broken/dashed yellow on your side, (2) you have sufficient sight distance to complete the pass safely, (3) there is no solid yellow line on your side, and (4) it is safe to do so. Never pass near hills, curves, or within 100 feet of an intersection.'},
  zh:{q:'在加州，在双车道道路上超车的规则是什么？',opts:['如果道路看起来畅通，您可以随时超车','只有在安全、合法（您这侧没有实心黄线）且有足够视距时才可超车','只能在用绿色条纹标记的指定超车区超车','在双车道道路上永远不能超车'],exp:'在双车道道路上，超车只有在以下情况才被允许：(1) 中心线在您这侧是虚/虚线黄线，(2) 您有足够的视距安全完成超车，(3) 您这侧没有实心黄线，以及(4) 这样做是安全的。切勿在山丘、弯道附近或路口100英尺以内超车。'},
  zhTW:{q:'在加州，在雙車道道路上超車的規則是什麼？',opts:['如果道路看起來暢通，您可以隨時超車','只有在安全、合法（您這側沒有實心黃線）且有足夠視距時才可超車','只能在用綠色條紋標記的指定超車區超車','在雙車道道路上永遠不能超車'],exp:'在雙車道道路上，超車只有在以下情況才被允許：(1) 中心線在您這側是虛/虛線黃線，(2) 您有足夠的視距安全完成超車，(3) 您這側沒有實心黃線，以及(4) 這樣做是安全的。切勿在山丘、彎道附近或路口100英尺以內超車。'},
  es:{q:'En California, ¿cuál es la regla para adelantar en una carretera de dos carriles?',opts:['Puede adelantar en cualquier momento si la carretera parece despejada','Solo puede adelantar cuando es seguro, legal (sin línea amarilla sólida de su lado) y hay suficiente distancia de visión','Solo puede adelantar en zonas de adelantamiento designadas marcadas con rayas verdes','Nunca debe adelantar en una carretera de dos carriles'],exp:'En una carretera de dos carriles, adelantar solo está permitido cuando: (1) la línea central es discontinua/punteada amarilla de su lado, (2) tiene suficiente distancia de visión para completar el adelantamiento de forma segura, (3) no hay línea amarilla sólida de su lado, y (4) es seguro hacerlo. Nunca adelante cerca de colinas, curvas o dentro de 100 pies de una intersección.'},
  ans:1
},
{
  id:315, cat:'safety',
  en:{q:'What does it mean if the oil pressure warning light comes on while you are driving?',opts:['You need an oil change soon — continue driving','Stop immediately — low oil pressure can cause catastrophic engine damage within minutes','Reduce speed and drive to the nearest service station','The oil is too hot — turn on the air conditioning'],exp:'An oil pressure warning light is a CRITICAL emergency. Stop the vehicle safely as soon as possible and turn off the engine. Continuing to drive with low oil pressure can destroy the engine within minutes. Call for help. Do not confuse this with the oil change reminder light — the oil pressure light is a genuine emergency.'},
  zh:{q:'驾车时机油压力警告灯亮起意味着什么？',opts:['您很快需要换机油——继续行驶','立即停车——低机油压力可能在几分钟内造成灾难性的发动机损坏','减速并驾车到最近的服务站','机油太热——打开空调'],exp:'机油压力警告灯是关键紧急情况。尽快安全停车并关闭发动机。在低机油压力下继续驾驶可能在几分钟内损坏发动机。呼叫帮助。不要将其与换油提示灯混淆——机油压力灯是真正的紧急情况。'},
  zhTW:{q:'駕車時機油壓力警告燈亮起意味著什麼？',opts:['您很快需要換機油——繼續行駛','立即停車——低機油壓力可能在幾分鐘內造成災難性的發動機損壞','減速並駕車到最近的服務站','機油太熱——打開空調'],exp:'機油壓力警告燈是關鍵緊急情況。儘快安全停車並關閉發動機。在低機油壓力下繼續駕駛可能在幾分鐘內損壞發動機。呼叫幫助。不要將其與換油提示燈混淆——機油壓力燈是真正的緊急情況。'},
  es:{q:'¿Qué significa si la luz de advertencia de presión de aceite se enciende mientras conduce?',opts:['Necesitará un cambio de aceite pronto — continúe conduciendo','Detenga inmediatamente — la baja presión de aceite puede causar daño catastrófico al motor en minutos','Reduzca la velocidad y conduzca hasta la estación de servicio más cercana','El aceite está demasiado caliente — encienda el aire acondicionado'],exp:'Una luz de advertencia de presión de aceite es una emergencia CRÍTICA. Detenga el vehículo de forma segura lo antes posible y apague el motor. Continuar conduciendo con baja presión de aceite puede destruir el motor en minutos. Llame para pedir ayuda. No confunda esto con la luz recordatorio de cambio de aceite — la luz de presión de aceite es una emergencia real.'},
  ans:1
},
{
  id:316, cat:'parking',
  en:{q:'Can you park next to a fire lane marked with red curbs?',opts:['Yes, if you are only stopping for 5 minutes','Yes, if your hazard lights are on','No — you can never stop, stand, or park in a fire lane','Yes, if no fire vehicles need access at that time'],exp:'Red curbs (fire lanes) are absolutely no-stopping zones at any time. You may not stop, stand, or park there even briefly, even with hazard lights on, even to pick up or drop off passengers. These areas must always be clear for emergency vehicles. Violations result in immediate towing and fines.'},
  zh:{q:'您可以在标有红色路缘的消防通道旁停车吗？',opts:['是的，如果只停5分钟','是的，如果您的危险警告灯是开着的','不——您永远不能在消防通道停车、站立或停放','是的，如果那时没有消防车辆需要通道'],exp:'红色路缘（消防通道）是任何时候的绝对禁止停车区域。您不得在那里停车、站立或停放，即使是短暂的，即使开着危险警告灯，即使是接送乘客。这些区域必须始终为紧急车辆保持畅通。违规会导致立即拖车和罚款。'},
  zhTW:{q:'您可以在標有紅色路緣的消防通道旁停車嗎？',opts:['是的，如果只停5分鐘','是的，如果您的危險警告燈是開著的','不——您永遠不能在消防通道停車、站立或停放','是的，如果那時沒有消防車輛需要通道'],exp:'紅色路緣（消防通道）是任何時候的絕對禁止停車區域。您不得在那裡停車、站立或停放，即使是短暫的，即使開著危險警告燈，即使是接送乘客。這些區域必須始終為緊急車輛保持暢通。違規會導致立即拖車和罰款。'},
  es:{q:'¿Puede estacionar junto a un carril de incendios marcado con bordillos rojos?',opts:['Sí, si solo se detiene 5 minutos','Sí, si sus luces de emergencia están encendidas','No — nunca puede detenerse, pararse o estacionar en un carril de incendios','Sí, si en ese momento no hay vehículos de incendios que necesiten acceso'],exp:'Los bordillos rojos (carriles de incendios) son zonas de prohibición de parada absoluta en cualquier momento. No puede detenerse, pararse o estacionar allí incluso brevemente, incluso con las luces de emergencia encendidas, incluso para recoger o dejar pasajeros. Estas áreas siempre deben estar despejadas para los vehículos de emergencia. Las violaciones resultan en remolque inmediato y multas.'},
  ans:2
},
{
  id:317, cat:'laws',
  en:{q:'What is the "Basic Speed Law" vs. an "Absolute Speed Limit"?',opts:['They are the same thing','The Basic Speed Law requires safe speed for conditions; Absolute limits (like school zones) cannot be exceeded even if conditions are perfect','Absolute limits apply only on freeways','The Basic Speed Law applies only in cities'],exp:'Basic Speed Law: you must not drive faster than safe for conditions — can be below the posted limit. Absolute Speed Limits (like 15 mph in school zones when children are present, or work zones) are limits you cannot exceed regardless of conditions. Even if the road is empty, 15 mph in a school zone remains the absolute maximum.'},
  zh:{q:'"基本速度法"与"绝对速度限制"有什么不同？',opts:['它们是同一回事','基本速度法要求条件下的安全速度；绝对限制（如学校区）即使条件完美也不能超过','绝对限制只适用于高速公路','基本速度法只适用于城市'],exp:'基本速度法：您不得以超过当前条件下安全速度行驶——可以低于标志限速。绝对速度限制（如有儿童时学校区的15英里/小时，或施工区）是无论条件如何都不能超过的限制。即使道路空旷，学校区的15英里/小时仍然是绝对最高速度。'},
  zhTW:{q:'「基本速度法」與「絕對速度限制」有什麼不同？',opts:['它們是同一回事','基本速度法要求條件下的安全速度；絕對限制（如學校區）即使條件完美也不能超過','絕對限制只適用於高速公路','基本速度法只適用於城市'],exp:'基本速度法：您不得以超過當前條件下安全速度行駛——可以低於標誌限速。絕對速度限制（如有兒童時學校區的15英里/小時，或施工區）是無論條件如何都不能超過的限制。即使道路空曠，學校區的15英里/小時仍然是絕對最高速度。'},
  es:{q:'¿Cuál es la diferencia entre la "Ley de Velocidad Básica" y un "Límite de Velocidad Absoluto"?',opts:['Son la misma cosa','La Ley de Velocidad Básica requiere velocidad segura para las condiciones; los límites absolutos (como las zonas escolares) no pueden excederse incluso si las condiciones son perfectas','Los límites absolutos solo aplican en autopistas','La Ley de Velocidad Básica solo aplica en ciudades'],exp:'Ley de Velocidad Básica: no debe conducir más rápido de lo que es seguro para las condiciones — puede estar por debajo del límite publicado. Límites de Velocidad Absolutos (como 15 mph en zonas escolares cuando hay niños, o zonas de trabajo) son límites que no puede exceder independientemente de las condiciones. Incluso si la carretera está vacía, 15 mph en una zona escolar sigue siendo el máximo absoluto.'},
  ans:1
},
{
  id:318, cat:'safety',
  en:{q:'What should you do if a tire goes flat while driving on the freeway?',opts:['Brake hard and pull over immediately','Grip the wheel firmly, ease off gas gradually, steer to the right shoulder, brake gently, and stop safely','Swerve to the emergency lane immediately and brake','Continue driving slowly to the next exit'],exp:'Flat tire on freeway: do not brake hard or swerve suddenly. Grip the steering wheel with both hands, gradually ease off the accelerator, steer smoothly toward the right shoulder while maintaining control, then apply light brake pressure to slow. Pull as far off the road as possible, turn on hazards, and exit from the right side.'},
  zh:{q:'在高速公路上行驶时轮胎爆裂，您应该怎么做？',opts:['大力刹车并立即靠边','紧握方向盘，逐渐松开油门，转向右侧路肩，轻轻刹车，安全停车','立即转向紧急车道并刹车','继续缓慢行驶到下一个出口'],exp:'高速公路上爆胎：不要大力刹车或突然转向。用双手紧握方向盘，逐渐松开油门，平稳地向右侧路肩转向并保持控制，然后施加轻微的刹车压力减速。尽量远离道路停车，打开危险警告灯，从右侧下车。'},
  zhTW:{q:'在高速公路上行駛時輪胎爆裂，您應該怎麼做？',opts:['大力剎車並立即靠邊','緊握方向盤，逐漸鬆開油門，轉向右側路肩，輕輕剎車，安全停車','立即轉向緊急車道並剎車','繼續緩慢行駛到下一個出口'],exp:'高速公路上爆胎：不要大力剎車或突然轉向。用雙手緊握方向盤，逐漸鬆開油門，平穩地向右側路肩轉向並保持控制，然後施加輕微的剎車壓力減速。儘量遠離道路停車，打開危險警告燈，從右側下車。'},
  es:{q:'¿Qué debe hacer si se pincha una llanta mientras conduce en la autopista?',opts:['Frene fuerte y orillese inmediatamente','Agarre el volante firmemente, suelte el acelerador gradualmente, dirija hacia el arcén derecho, frene suavemente y detenga con seguridad','Gire hacia el carril de emergencia inmediatamente y frene','Continúe conduciendo lentamente hasta la próxima salida'],exp:'Llanta pinchada en autopista: no frene fuerte ni gire repentinamente. Agarre el volante con ambas manos, gradualmente suelte el acelerador, dirija suavemente hacia el arcén derecho mientras mantiene el control, luego aplique presión de freno suave para reducir la velocidad. Salga lo más posible de la carretera, encienda las luces de emergencia y salga por el lado derecho.'},
  ans:1
},
{
  id:319, cat:'dui',
  en:{q:'What is a "wet reckless" charge in California?',opts:['A DUI charge involving a water-related incident','A plea bargain reduction from DUI to reckless driving with alcohol as a factor','A charge for reckless driving in rain','A charge for boating under the influence'],exp:'A "wet reckless" (Vehicle Code 23103.5) is a plea bargain where a DUI charge is reduced to reckless driving with a note that alcohol was involved. It carries lower penalties than DUI but still results in points on your license. However, if you are charged with DUI again within 10 years, it is treated as a prior DUI.'},
  zh:{q:'在加州，什么是"湿鲁莽"指控？',opts:['涉及水相关事件的DUI指控','从DUI减轻到以酒精为因素的鲁莽驾驶的辩诉交易','在雨中鲁莽驾驶的指控','在水上醉酒的指控'],exp:'"湿鲁莽"（车辆法典23103.5）是DUI指控减轻到鲁莽驾驶并注明有酒精参与的辩诉交易。它的处罚比DUI低，但仍会在您的驾照上添加积分。但是，如果您在10年内再次被指控DUI，它将被视为先前的DUI。'},
  zhTW:{q:'在加州，什麼是「濕魯莽」指控？',opts:['涉及水相關事件的DUI指控','從DUI減輕到以酒精為因素的魯莽駕駛的辯訴交易','在雨中魯莽駕駛的指控','在水上醉酒的指控'],exp:'"濕魯莽"（車輛法典23103.5）是DUI指控減輕到魯莽駕駛並注明有酒精參與的辯訴交易。它的處罰比DUI低，但仍會在您的駕照上添加積分。但是，如果您在10年內再次被指控DUI，它將被視為先前的DUI。'},
  es:{q:'¿Qué es un cargo de "imprudencia mojada" en California?',opts:['Un cargo de DUI que involucra un incidente relacionado con el agua','Una negociación de culpabilidad que reduce el DUI a conducción imprudente con el alcohol como factor','Un cargo por conducción imprudente bajo la lluvia','Un cargo por navegar bajo la influencia'],exp:'Una "imprudencia mojada" (Código de Vehículos 23103.5) es una negociación de culpabilidad donde un cargo de DUI se reduce a conducción imprudente con una nota de que el alcohol estuvo involucrado. Conlleva penalizaciones más bajas que el DUI pero aún resulta en puntos en su licencia. Sin embargo, si es acusado de DUI nuevamente dentro de 10 años, se trata como un DUI previo.'},
  ans:1
},
{
  id:320, cat:'laws',
  en:{q:'What is "vehicular manslaughter" in California driving law?',opts:['Any traffic accident that results in a fatality','Killing someone while driving with gross negligence or committing an unlawful act while driving','Only applies to DUI-related deaths','A misdemeanor charge for minor accidents with injury'],exp:'Vehicular manslaughter (Penal Code 192c) occurs when a driver causes the death of another person while driving with gross negligence or committing an unlawful act not amounting to a felony. It can be a misdemeanor or felony depending on the degree of negligence. DUI causing death can result in vehicular manslaughter or murder charges.'},
  zh:{q:'在加州驾驶法律中，"过失杀人罪"是什么？',opts:['任何导致死亡的交通事故','在驾驶时以严重过失或违法行为导致他人死亡','只适用于DUI相关死亡','轻微伤亡事故的轻罪指控'],exp:'过失杀人罪（刑法典192c）发生在驾驶者在驾驶时以严重过失或犯下不构成重罪的违法行为导致他人死亡时。根据过失程度，可能是轻罪或重罪。DUI导致死亡可能导致过失杀人罪或谋杀指控。'},
  zhTW:{q:'在加州駕駛法律中，「過失殺人罪」是什麼？',opts:['任何導致死亡的交通事故','在駕駛時以嚴重過失或違法行為導致他人死亡','只適用於DUI相關死亡','輕微傷亡事故的輕罪指控'],exp:'過失殺人罪（刑法典192c）發生在駕駛者在駕駛時以嚴重過失或犯下不構成重罪的違法行為導致他人死亡時。根據過失程度，可能是輕罪或重罪。DUI導致死亡可能導致過失殺人罪或謀殺指控。'},
  es:{q:'¿Qué es el "homicidio vehicular" en la ley de conducción de California?',opts:['Cualquier accidente de tráfico que resulte en una fatalidad','Matar a alguien mientras conduce con negligencia grave o cometiendo un acto ilegal mientras conduce','Solo aplica a muertes relacionadas con DUI','Un cargo de delito menor por accidentes menores con lesiones'],exp:'El homicidio vehicular (Código Penal 192c) ocurre cuando un conductor causa la muerte de otra persona mientras conduce con negligencia grave o cometiendo un acto ilegal que no constituye un delito grave. Puede ser un delito menor o grave según el grado de negligencia. El DUI que causa la muerte puede resultar en cargos de homicidio vehicular o asesinato.'},
  ans:1
},

{
  id:321, cat:'signs', sign:'do-not-enter',
  en:{q:'What does a "Do Not Enter" sign mean?',opts:['Slow down and proceed with caution','You must not enter the road or lane ahead','Yield to oncoming traffic before entering','One-way traffic ahead'],exp:'The "Do Not Enter" sign means you must not enter that roadway. It typically appears on exit ramps, one-way streets, and divided highway entrances to prevent wrong-way driving.'},
  zh:{q:'"禁止驶入"标志是什么意思？',opts:['减速并谨慎前行','不得进入前方道路或车道','进入前让行对向车辆','前方单行道'],exp:'"禁止驶入"标志意味着您不得进入该道路，通常出现在出口坡道、单行道和分隔公路入口，以防止逆向行驶。'},
  zhTW:{q:'"禁止駛入"標誌是什麼意思？',opts:['減速並謹慎前行','不得進入前方道路或車道','進入前讓行對向車輛','前方單行道'],exp:'"禁止駛入"標誌意味著您不得進入該道路，通常出現在出口坡道、單行道和分隔公路入口，以防止逆向行駛。'},
  es:{q:'¿Qué significa una señal de "No Entrar"?',opts:['Reduzca la velocidad y proceda con precaución','No debe entrar al camino o carril adelante','Ceda el paso antes de entrar','Tráfico en una sola dirección adelante'],exp:'La señal de "No Entrar" significa que no debe entrar a esa vía. Aparece en rampas de salida, calles de una vía y entradas de autopistas divididas para prevenir conducción en dirección equivocada.'},
  ans:1
},
{
  id:322, cat:'laws',
  en:{q:'A first-offense DUI in California typically results in:',opts:['Only a fine with no license action','Up to 6-month license suspension, fines, possible jail, and DUI school','Automatic 5-year license revocation','Mandatory license revocation and prison sentence'],exp:'A first DUI in California typically results in: license suspension up to 6 months, fines of $390–$1,000 plus penalty assessments (totaling several thousand dollars), up to 6 months jail, and 3–9 months of DUI school.'},
  zh:{q:'加州首次DUI通常导致：',opts:['只有罚款，不影响驾照','吊销驾照最多6个月、罚款、可能的监禁和DUI学校','自动吊销驾照5年','强制吊销驾照和监禁'],exp:'加州首次DUI通常导致：吊销驾照最多6个月，罚款$390-$1,000加附加费（合计数千美元），最多6个月监禁，以及3-9个月的DUI学校。'},
  zhTW:{q:'加州首次DUI通常導致：',opts:['只有罰款，不影響駕照','吊銷駕照最多6個月、罰款、可能的監禁和DUI學校','自動吊銷駕照5年','強制吊銷駕照和監禁'],exp:'加州首次DUI通常導致：吊銷駕照最多6個月，罰款$390-$1,000加附加費（合計數千美元），最多6個月監禁，以及3-9個月的DUI學校。'},
  es:{q:'Un primer DUI en California típicamente resulta en:',opts:['Solo una multa sin acción de licencia','Suspensión de licencia hasta 6 meses, multas, posible cárcel y escuela de DUI','Revocación automática de licencia por 5 años','Revocación obligatoria de licencia y prisión'],exp:'Un primer DUI en California típicamente resulta en: suspensión de licencia hasta 6 meses, multas de $390–$1,000 más evaluaciones de penalidad, hasta 6 meses de cárcel y 3–9 meses de escuela de DUI.'},
  ans:1
},
{
  id:323, cat:'rightofway',
  en:{q:'At an uncontrolled intersection, two cars arrive simultaneously from different roads. Who yields?',opts:['The faster car yields','The car on the left yields to the car on the right','The car on the right yields to the car on the left','Both stop until waved through by the other'],exp:'At an uncontrolled intersection when two vehicles arrive simultaneously, the vehicle on the LEFT must yield to the vehicle on the RIGHT. This "yield to the right" rule applies throughout California.'},
  zh:{q:'在无管控交叉口，两辆车同时从不同道路到达，谁应让行？',opts:['较快的车让行','左侧的车让行右侧的车','右侧的车让行左侧的车','两辆车都停车直到另一辆先行'],exp:'在无管控交叉口，两辆车同时到达时，左侧的车必须让行右侧的车。这一"向右让行"规则在加州全境适用。'},
  zhTW:{q:'在無管控交叉口，兩輛車同時從不同道路到達，誰應讓行？',opts:['較快的車讓行','左側的車讓行右側的車','右側的車讓行左側的車','兩輛車都停車直到另一輛先行'],exp:'在無管控交叉口，兩輛車同時到達時，左側的車必須讓行右側的車。這一「向右讓行」規則在加州全境適用。'},
  es:{q:'En una intersección sin control, dos autos llegan al mismo tiempo. ¿Quién cede?',opts:['El auto más rápido cede','El auto de la izquierda cede al de la derecha','El auto de la derecha cede al de la izquierda','Ambos se detienen hasta que el otro avanza'],exp:'En una intersección sin control, el vehículo a la IZQUIERDA debe ceder al de la DERECHA cuando ambos llegan simultáneamente. Esta regla aplica en todo California.'},
  ans:1
},
{
  id:324, cat:'speed',
  en:{q:'What is the speed limit in an alley in California?',opts:['15 mph','20 mph','25 mph','No posted limit applies'],exp:'The speed limit in any alley in California is 15 mph — a prima facie limit under the California Vehicle Code. Alleys are narrow roadways giving access to the rear of buildings.'},
  zh:{q:'在加州，小巷的限速是多少？',opts:['15英里/小时','20英里/小时','25英里/小时','适用无标注限速'],exp:'在加州，任何小巷的限速为15英里/小时，这是加州车辆法典下的初步（推定）限速。小巷是通向建筑物后部的狭窄道路。'},
  zhTW:{q:'在加州，小巷的限速是多少？',opts:['15英里/小時','20英里/小時','25英里/小時','適用無標注限速'],exp:'在加州，任何小巷的限速為15英里/小時，這是加州車輛法典下的初步（推定）限速。小巷是通向建築物後部的狹窄道路。'},
  es:{q:'¿Cuál es el límite de velocidad en un callejón en California?',opts:['15 mph','20 mph','25 mph','No aplica ningún límite publicado'],exp:'El límite de velocidad en cualquier callejón en California es 15 mph, un límite prima facie bajo el Código de Vehículos de California.'},
  ans:0
},
{
  id:325, cat:'safety',
  en:{q:'When driving in heavy fog, which lights should you use?',opts:['High beams for maximum visibility','Low beams or fog lights','Hazard flashers only','No lights — they reflect off fog'],exp:'Use low beams or fog lights in heavy fog. High beams reflect off fog droplets and create blinding glare. You must also slow down significantly and increase following distance.'},
  zh:{q:'在大雾中行驶时，应该使用哪种车灯？',opts:['远光灯以获得最大能见度','近光灯或雾灯','仅使用危险警示灯','不开灯——灯光会在雾中反射'],exp:'在大雾中使用近光灯或专用雾灯。远光灯会在雾滴上反射并产生眩目的眩光。还必须大幅降低速度并增加跟车距离。'},
  zhTW:{q:'在大霧中行駛時，應該使用哪種車燈？',opts:['遠光燈以獲得最大能見度','近光燈或霧燈','僅使用危險警示燈','不開燈——燈光會在霧中反射'],exp:'在大霧中使用近光燈或專用霧燈。遠光燈會在霧滴上反射並產生令人目眩的眩光。還必須大幅降低速度並增加跟車距離。'},
  es:{q:'Al conducir en niebla densa, ¿qué luces debe usar?',opts:['Luces altas para máxima visibilidad','Luces bajas o luces de niebla','Solo luces de emergencia','Sin luces — se reflejan en la niebla'],exp:'Use luces bajas o luces de niebla en niebla densa. Las luces altas se reflejan en las gotas de niebla y crean deslumbramiento cegador. También debe reducir la velocidad y aumentar la distancia de seguimiento.'},
  ans:1
},
{
  id:326, cat:'parking',
  en:{q:'How close to a stop sign may you legally park in California?',opts:['5 feet','10 feet','15 feet','20 feet'],exp:'California law prohibits parking within 15 feet of a stop sign. This ensures approaching drivers have a clear view of stopped traffic and the intersection.'},
  zh:{q:'在加州，合法停车距停车标志最近多少英尺？',opts:['5英尺','10英尺','15英尺','20英尺'],exp:'加州法律禁止在停车标志15英尺以内停车，确保接近交叉口的驾驶员能清楚看到停着的车辆和路口。'},
  zhTW:{q:'在加州，合法停車距停車標誌最近多少英尺？',opts:['5英尺','10英尺','15英尺','20英尺'],exp:'加州法律禁止在停車標誌15英尺以內停車，確保接近交叉口的駕駛員能清楚看到停著的車輛和路口。'},
  es:{q:'¿A qué distancia de una señal de alto puede estacionarse legalmente en California?',opts:['5 pies','10 pies','15 pies','20 pies'],exp:'La ley de California prohíbe estacionarse dentro de 15 pies de una señal de alto, asegurando que los conductores que se acercan tengan vista clara del tráfico detenido y la intersección.'},
  ans:2
},
{
  id:327, cat:'highway',
  en:{q:'Under CVC 22400, which of the following is illegal on California roads?',opts:['Driving 5 mph below the speed limit','Driving so slowly that you impede the normal flow of traffic','Using the right lane on a freeway','Driving exactly at the posted speed limit'],exp:'CVC 22400 prohibits driving so slowly as to impede the normal and reasonable flow of traffic, except when necessary for safe operation or legal compliance. Slow driving can cause rear-end collisions and traffic backups.'},
  zh:{q:'根据加州车辆法典22400条，以下哪项在加州道路上是违法的？',opts:['比限速低5英里/小时行驶','行驶过慢以至于阻碍正常交通流','在高速公路上使用右侧车道','以规定限速行驶'],exp:'加州车辆法典22400条禁止以极慢速度妨碍正常合理的交通流，除非安全操作或法律合规需要。缓慢驾驶可能导致追尾碰撞和交通拥堵。'},
  zhTW:{q:'根據加州車輛法典22400條，以下哪項在加州道路上是違法的？',opts:['比限速低5英里/小時行駛','行駛過慢以至於阻礙正常交通流','在高速公路上使用右側車道','以規定限速行駛'],exp:'加州車輛法典22400條禁止以極慢速度妨礙正常合理的交通流，除非安全操作或法律合規需要。緩慢駕駛可能導致追尾碰撞和交通擁堵。'},
  es:{q:'Bajo el CVC 22400, ¿cuál de los siguientes es ilegal en las carreteras de California?',opts:['Conducir 5 mph por debajo del límite','Conducir tan lento que impide el flujo normal del tráfico','Usar el carril derecho en una autopista','Conducir exactamente al límite de velocidad publicado'],exp:'El CVC 22400 prohíbe conducir tan lento como para impedir el flujo normal del tráfico, excepto cuando sea necesario para operación segura. Conducir lento puede causar colisiones traseras y congestionamiento.'},
  ans:1
},
{
  id:328, cat:'signs',
  en:{q:'A pennant-shaped yellow sign posted on the left side of the road means:',opts:['Left-turn-only lane ahead','No passing zone','Merge left ahead','Divided highway begins'],exp:'The pennant-shaped yellow sign marks a No Passing Zone. Placed on the left side facing drivers, it prohibits passing in that area. It accompanies the solid yellow "Do Not Pass" center-line marking.'},
  zh:{q:'道路左侧张贴的三角旗形黄色标志意味着：',opts:['前方只能左转车道','禁止超车区','前方向左合并','分隔公路开始'],exp:'三角旗形黄色标志标记禁止超车区。放置在左侧面向驾驶员，禁止在该区域超车。它伴随着实线黄色"禁止超车"中心线标记。'},
  zhTW:{q:'道路左側張貼的三角旗形黃色標誌意味著：',opts:['前方只能左轉車道','禁止超車區','前方向左合併','分隔公路開始'],exp:'三角旗形黃色標誌標記禁止超車區。放置在左側面向駕駛員，禁止在該區域超車。它伴隨著實線黃色「禁止超車」中心線標記。'},
  es:{q:'Una señal amarilla en forma de banderín en el lado izquierdo del camino significa:',opts:['Carril de solo giro izquierdo adelante','Zona de no rebasar','Fusión a la izquierda adelante','Comienza autopista dividida'],exp:'La señal en forma de banderín marca una Zona de No Rebasar. Colocada en el lado izquierdo frente a los conductores, prohíbe rebasar en esa área. Acompaña la línea central amarilla sólida de "No Rebasar".'},
  ans:1
},
{
  id:329, cat:'laws',
  en:{q:'When must you report a traffic accident to the California DMV?',opts:['Only when someone is killed','Within 10 days if anyone is injured/killed or property damage exceeds $1,000 to any one person','Only if you are at fault','Within 24 hours for any accident'],exp:'You must report to the DMV within 10 days if the accident results in injury, death, or property damage exceeding $1,000 to any one person. This report is separate from any police report. Failure to report can result in license suspension.'},
  zh:{q:'何时必须向加州DMV报告交通事故？',opts:['只有当有人死亡时','如果有人受伤/死亡或任何一人财产损失超过$1,000，则在10天内','只有当您有过失时','任何事故在24小时内'],exp:'如果事故造成伤亡或任何一人财产损失超过$1,000，必须在10天内向DMV报告。该报告与警察报告分开。未能报告可能导致驾照被吊销。'},
  zhTW:{q:'何時必須向加州DMV報告交通事故？',opts:['只有當有人死亡時','如果有人受傷/死亡或任何一人財產損失超過$1,000，則在10天內','只有當您有過失時','任何事故在24小時內'],exp:'如果事故造成傷亡或任何一人財產損失超過$1,000，必須在10天內向DMV報告。該報告與警察報告分開。未能報告可能導致駕照被吊銷。'},
  es:{q:'¿Cuándo debe reportar un accidente al DMV de California?',opts:['Solo cuando alguien muere','Dentro de 10 días si alguien resulta herido/muerto o el daño supera $1,000 a cualquier persona','Solo si usted tiene la culpa','Dentro de 24 horas para cualquier accidente'],exp:'Debe reportar al DMV dentro de 10 días si el accidente resulta en lesión, muerte o daño superior a $1,000 a cualquier persona. Este reporte es separado de cualquier informe policial. No reportar puede resultar en suspensión de licencia.'},
  ans:1
},
{
  id:330, cat:'safety',
  en:{q:'If your accelerator pedal sticks while driving, what is the correct action?',opts:['Slam the brakes as hard as possible immediately','Shift to neutral, apply brakes firmly, steer to safety, then turn off the engine','Turn off the ignition immediately while in motion','Pump the gas pedal rapidly to free it'],exp:'If your accelerator sticks: shift to neutral (disconnects engine power), apply brakes firmly and steer to a safe spot, then turn off the engine once stopped. Never turn off ignition while moving — you lose power steering and brake assist.'},
  zh:{q:'行驶中油门踏板卡住，正确的做法是什么？',opts:['立即尽可能用力踩刹车','换到空档，用力踩刹车，操控至安全处，然后关闭发动机','立即在行驶中关闭点火开关','快速踩踏油门踏板松开它'],exp:'油门卡住时：换到空档（断开发动机动力），用力踩刹车并驶向安全位置，安全停车后关闭发动机。绝不要在行驶中关闭点火开关——会失去助力转向和制动辅助。'},
  zhTW:{q:'行駛中油門踏板卡住，正確的做法是什麼？',opts:['立即盡可能用力踩剎車','換到空檔，用力踩剎車，操控至安全處，然後關閉發動機','立即在行駛中關閉點火開關','快速踩踏油門踏板鬆開它'],exp:'油門卡住時：換到空檔（斷開發動機動力），用力踩剎車並駛向安全位置，安全停車後關閉發動機。絕不要在行駛中關閉點火開關——會失去助力轉向和制動輔助。'},
  es:{q:'Si el pedal del acelerador se atasca mientras conduce, ¿cuál es la acción correcta?',opts:['Pise el freno tan fuerte como sea posible','Cambie a neutral, aplique frenos firmemente, dirija a un lugar seguro, luego apague el motor','Apague el encendido inmediatamente mientras está en movimiento','Bombee el pedal del gas para liberarlo'],exp:'Si el acelerador se atasca: cambie a neutral (desconecta la potencia), aplique frenos firmemente y diríjase a un lugar seguro, luego apague el motor una vez detenido. Nunca apague el encendido en movimiento — perdería la dirección asistida y la asistencia de frenado.'},
  ans:1
},

{
  id:331, cat:'dui',
  en:{q:'In California, what is the legal blood alcohol concentration (BAC) limit for drivers 21 and over?',opts:['0.05%','0.08%','0.10%','0.12%'],exp:'For drivers 21 and older, California\'s legal BAC limit is 0.08%. You can be convicted of DUI if your BAC is 0.08% or higher. You can also be convicted at lower BAC levels if your driving is impaired.'},
  zh:{q:'在加州，21岁及以上驾驶员的合法血液酒精含量（BAC）限制是多少？',opts:['0.05%','0.08%','0.10%','0.12%'],exp:'对于21岁及以上的驾驶员，加州的合法BAC限制为0.08%。如果您的BAC为0.08%或更高，可能被判定DUI。如果您的驾驶受损，即使BAC较低也可能被判定DUI。'},
  zhTW:{q:'在加州，21歲及以上駕駛員的合法血液酒精含量（BAC）限制是多少？',opts:['0.05%','0.08%','0.10%','0.12%'],exp:'對於21歲及以上的駕駛員，加州的合法BAC限制為0.08%。如果您的BAC為0.08%或更高，可能被判定DUI。如果您的駕駛受損，即使BAC較低也可能被判定DUI。'},
  es:{q:'En California, ¿cuál es el límite legal de concentración de alcohol en sangre (BAC) para conductores de 21 años o más?',opts:['0.05%','0.08%','0.10%','0.12%'],exp:'Para conductores de 21 años o más, el límite legal de BAC en California es 0.08%. Puede ser condenado por DUI si su BAC es 0.08% o más alto. También puede ser condenado con niveles de BAC más bajos si su conducción está deteriorada.'},
  ans:1
},
{
  id:332, cat:'parking',
  en:{q:'What does a blue curb indicate?',opts:['No parking at any time','Parking for disabled persons with proper placard or plate only','Short-term parking (30 minutes or less)','Commercial loading zone only'],exp:'Blue curbs designate parking spaces reserved for people with disabilities. Only vehicles displaying a valid disabled person placard or special license plate may park there. Violators face significant fines.'},
  zh:{q:'蓝色路缘代表什么？',opts:['任何时候禁止停车','仅限持有适当标牌或车牌的残障人士停车','短期停车（30分钟或更少）','仅限商业装卸区'],exp:'蓝色路缘指定为残障人士专用停车位。只有展示有效残障人士标牌或特殊车牌的车辆才可在此停车。违规者将面临重大罚款。'},
  zhTW:{q:'藍色路緣代表什麼？',opts:['任何時候禁止停車','僅限持有適當標牌或車牌的殘障人士停車','短期停車（30分鐘或更少）','僅限商業裝卸區'],exp:'藍色路緣指定為殘障人士專用停車位。只有展示有效殘障人士標牌或特殊車牌的車輛才可在此停車。違規者將面臨重大罰款。'},
  es:{q:'¿Qué indica un bordillo azul?',opts:['Sin estacionamiento en ningún momento','Estacionamiento solo para personas discapacitadas con placa o tarjeta adecuada','Estacionamiento de corto plazo (30 minutos o menos)','Solo zona de carga comercial'],exp:'Los bordillos azules designan espacios de estacionamiento reservados para personas con discapacidades. Solo los vehículos que muestren una placa de discapacitado válida o una placa de matrícula especial pueden estacionarse allí.'},
  ans:1
},
{
  id:333, cat:'highway',
  en:{q:'When merging onto a freeway, you should:',opts:['Stop at the end of the on-ramp and wait for a gap','Merge at whatever speed you are comfortable with','Accelerate in the acceleration lane to match freeway speed before merging','Always yield to freeway traffic even if it means stopping on the ramp'],exp:'Use the acceleration lane to build up speed to match freeway traffic before merging. Check mirrors and blind spots, signal, and merge smoothly. You must yield to freeway traffic, but try to match their speed to merge safely without stopping.'},
  zh:{q:'进入高速公路时，您应该：',opts:['在匝道末端停车等待空档','以您舒适的任何速度合并','在加速车道加速至与高速公路速度相符后再合并','始终让行高速公路上的车辆，即使这意味着在匝道上停车'],exp:'使用加速车道加速到与高速公路交通相符的速度后再合并。检查后视镜和盲点，打转向灯，平稳合并。您必须让行高速公路上的车辆，但尽量与其速度相符以安全合并，避免停车。'},
  zhTW:{q:'進入高速公路時，您應該：',opts:['在匝道末端停車等待空檔','以您舒適的任何速度合併','在加速車道加速至與高速公路速度相符後再合併','始終讓行高速公路上的車輛，即使這意味著在匝道上停車'],exp:'使用加速車道加速到與高速公路交通相符的速度後再合併。檢查後視鏡和盲點，打轉向燈，平穩合併。您必須讓行高速公路上的車輛，但盡量與其速度相符以安全合併，避免停車。'},
  es:{q:'Al incorporarse a una autopista, debe:',opts:['Detenerse al final de la rampa de incorporación y esperar un espacio','Incorporarse a cualquier velocidad con la que se sienta cómodo','Acelerar en el carril de aceleración para igualar la velocidad de la autopista antes de incorporarse','Siempre ceder al tráfico de la autopista aunque eso signifique detenerse en la rampa'],exp:'Use el carril de aceleración para aumentar la velocidad hasta igualar el tráfico de la autopista antes de incorporarse. Verifique espejos y puntos ciegos, señalice y fusiónese suavemente.'},
  ans:2
},
{
  id:334, cat:'laws',
  en:{q:'In California, you must use your headlights when visibility is less than:',opts:['200 feet','500 feet','1,000 feet','1,500 feet'],exp:'California law requires headlights whenever you cannot see clearly for 1,000 feet ahead — typically at night, in heavy rain, fog, or other low-visibility conditions. You must also use wipers with headlights when raining.'},
  zh:{q:'在加州，当能见度低于多少英尺时，您必须使用前灯？',opts:['200英尺','500英尺','1,000英尺','1,500英尺'],exp:'加州法律要求每当您无法清楚看到前方1,000英尺时使用前灯——通常在夜晚、大雨、大雾或其他低能见度条件下。下雨时使用雨刷也必须开前灯。'},
  zhTW:{q:'在加州，當能見度低於多少英尺時，您必須使用前燈？',opts:['200英尺','500英尺','1,000英尺','1,500英尺'],exp:'加州法律要求每當您無法清楚看到前方1,000英尺時使用前燈——通常在夜晚、大雨、大霧或其他低能見度條件下。下雨時使用雨刷也必須開前燈。'},
  es:{q:'En California, debe usar los faros cuando la visibilidad es menor de:',opts:['200 pies','500 pies','1,000 pies','1,500 pies'],exp:'La ley de California exige faros siempre que no pueda ver claramente a 1,000 pies de distancia — típicamente de noche, con lluvia intensa, niebla u otras condiciones de baja visibilidad. También debe usar faros con limpiaparabrisas cuando llueve.'},
  ans:2
},
{
  id:335, cat:'signs', sign:'railroad-crossing',
  en:{q:'When you see a round yellow sign with an "X" and the letters "RR," what does it mean?',opts:['You are approaching a rest area','A railroad crossing is ahead — be prepared to stop','No right turn on red','Road construction ahead'],exp:'The round yellow sign with a black "X" and "RR" is an advance warning sign for a railroad crossing ahead. You should slow down, look and listen for trains, and be prepared to stop. Never stop on railroad tracks.'},
  zh:{q:'当您看到带有"X"和字母"RR"的圆形黄色标志时，这意味着什么？',opts:['您正在接近休息区','前方有铁路道口——准备停车','红灯禁止右转','前方道路施工'],exp:'带有黑色"X"和"RR"的圆形黄色标志是前方铁路道口的预警标志。您应该减速，注意观察和聆听列车，并准备停车。绝不要停在铁路轨道上。'},
  zhTW:{q:'當您看到帶有「X」和字母「RR」的圓形黃色標誌時，這意味著什麼？',opts:['您正在接近休息區','前方有鐵路道口——準備停車','紅燈禁止右轉','前方道路施工'],exp:'帶有黑色「X」和「RR」的圓形黃色標誌是前方鐵路道口的預警標誌。您應該減速，注意觀察和聆聽列車，並準備停車。絕不要停在鐵路軌道上。'},
  es:{q:'Cuando ve una señal redonda amarilla con una "X" y las letras "RR", ¿qué significa?',opts:['Se está acercando a un área de descanso','Hay un cruce de ferrocarril adelante — esté listo para detenerse','No gire a la derecha en rojo','Construcción de carretera adelante'],exp:'La señal redonda amarilla con una "X" negra y "RR" es una señal de advertencia anticipada para un cruce ferroviario. Debe reducir la velocidad, mirar y escuchar trenes, y estar preparado para detenerse. Nunca se detenga en las vías del tren.'},
  ans:1
},
{
  id:336, cat:'safety',
  en:{q:'What is the "two-second rule" when following another vehicle?',opts:['You should always be at least 2 seconds behind the car ahead','You have 2 seconds to merge after signaling','You must wait 2 seconds before proceeding through an intersection','All of the above'],exp:'The two-second rule is a minimum following distance guideline. When the vehicle ahead passes a fixed object, count at least 2 seconds before you reach that same object. In poor weather or with heavy vehicles, increase to 4+ seconds.'},
  zh:{q:'跟随另一辆车时的"两秒规则"是什么？',opts:['您应该始终比前车至少落后2秒','打转向灯后有2秒时间变道','在路口行进前必须等待2秒','以上所有'],exp:'"两秒规则"是最小跟车距离指南。当前方车辆经过固定物体时，计数至少2秒后您才应到达同一物体。在恶劣天气或面对重型车辆时，应增加到4秒以上。'},
  zhTW:{q:'跟隨另一輛車時的「兩秒規則」是什麼？',opts:['您應該始終比前車至少落後2秒','打轉向燈後有2秒時間變道','在路口行進前必須等待2秒','以上所有'],exp:'"兩秒規則"是最小跟車距離指南。當前方車輛經過固定物體時，計數至少2秒後您才應到達同一物體。在惡劣天氣或面對重型車輛時，應增加到4秒以上。'},
  es:{q:'¿Qué es la "regla de los dos segundos" al seguir a otro vehículo?',opts:['Siempre debe estar al menos 2 segundos detrás del auto adelante','Tiene 2 segundos para fusionarse después de señalizar','Debe esperar 2 segundos antes de proceder en una intersección','Todo lo anterior'],exp:'La regla de los dos segundos es una guía de distancia mínima de seguimiento. Cuando el vehículo de adelante pasa un objeto fijo, cuente al menos 2 segundos antes de llegar al mismo objeto. Con mal tiempo o vehículos pesados, aumente a 4+ segundos.'},
  ans:0
},
{
  id:337, cat:'rightofway',
  en:{q:'You are making a left turn at an intersection. When do you have the right of way?',opts:['Always — left-turning vehicles have priority','When oncoming traffic has a red light or has stopped and yielded to you','Whenever you have your turn signal on','Never — you always yield when turning left'],exp:'When making a left turn, you must yield to oncoming traffic and pedestrians unless a traffic signal or officer directs otherwise. You may proceed only when oncoming traffic has stopped (red light) or has yielded to you.'},
  zh:{q:'您在路口左转。您什么时候有优先通行权？',opts:['始终——左转车辆优先','当对向车辆遇红灯或已停车让行于您时','只要您打了转向灯','从不——左转时您始终需要让行'],exp:'左转时，您必须让行对向车辆和行人，除非交通信号或执法人员另有指示。只有当对向车辆停车（红灯）或已让行于您时，您才可以前进。'},
  zhTW:{q:'您在路口左轉。您什麼時候有優先通行權？',opts:['始終——左轉車輛優先','當對向車輛遇紅燈或已停車讓行於您時','只要您打了轉向燈','從不——左轉時您始終需要讓行'],exp:'左轉時，您必須讓行對向車輛和行人，除非交通信號或執法人員另有指示。只有當對向車輛停車（紅燈）或已讓行於您時，您才可以前進。'},
  es:{q:'Está haciendo un giro a la izquierda en una intersección. ¿Cuándo tiene el derecho de paso?',opts:['Siempre — los vehículos que giran a la izquierda tienen prioridad','Cuando el tráfico que viene tiene luz roja o se ha detenido y le ha cedido el paso','Cuando tiene la señal de giro encendida','Nunca — siempre cede cuando gira a la izquierda'],exp:'Al girar a la izquierda, debe ceder el paso al tráfico que viene y a los peatones a menos que una señal de tráfico u oficial lo indique diferente. Solo puede proceder cuando el tráfico que viene se ha detenido (luz roja) o le ha cedido el paso.'},
  ans:1
},
{
  id:338, cat:'dui',
  en:{q:'Under California\'s "implied consent" law, what happens if you refuse a chemical test after being lawfully arrested for DUI?',opts:['You cannot be prosecuted for DUI without a test result','Your license will be suspended for 1 year for a first refusal, and evidence of refusal can be used against you','You will only receive a warning','The officer must obtain a court order to test you'],exp:'California\'s implied consent law (CVC 23612) means that by driving, you consent to chemical testing if lawfully arrested for DUI. Refusal results in mandatory 1-year license suspension (first offense), and the refusal itself can be used as evidence of consciousness of guilt in court.'},
  zh:{q:'根据加州的"默示同意"法律，如果您在因DUI被合法逮捕后拒绝化学测试，会发生什么？',opts:['没有测试结果就无法以DUI起诉您','您的驾照将因首次拒绝被吊销1年，拒绝证据可以对您不利','您只会收到警告','警察必须获得法院命令才能测试您'],exp:'加州的默示同意法（车辆法典23612）意味着通过驾驶，您同意在因DUI被合法逮捕时接受化学测试。拒绝将导致强制吊销驾照1年（首次违规），拒绝本身可以作为法庭上有罪意识的证据。'},
  zhTW:{q:'根據加州的「默示同意」法律，如果您在因DUI被合法逮捕後拒絕化學測試，會發生什麼？',opts:['沒有測試結果就無法以DUI起訴您','您的駕照將因首次拒絕被吊銷1年，拒絕證據可以對您不利','您只會收到警告','警察必須獲得法院命令才能測試您'],exp:'加州的默示同意法（車輛法典23612）意味著通過駕駛，您同意在因DUI被合法逮捕時接受化學測試。拒絕將導致強制吊銷駕照1年（首次違規），拒絕本身可以作為法庭上有罪意識的證據。'},
  es:{q:'Bajo la ley de "consentimiento implícito" de California, ¿qué sucede si se niega a una prueba química después de ser arrestado legalmente por DUI?',opts:['No puede ser procesado por DUI sin resultado de prueba','Su licencia será suspendida 1 año por primera negativa, y la evidencia de negativa puede usarse en su contra','Solo recibirá una advertencia','El oficial debe obtener una orden judicial para analizarlo'],exp:'La ley de consentimiento implícito de California (CVC 23612) significa que al conducir, consiente la prueba química si es arrestado legalmente por DUI. La negativa resulta en suspensión obligatoria de licencia de 1 año (primera ofensa), y la negativa puede usarse como evidencia.'},
  ans:1
},
{
  id:339, cat:'parking',
  en:{q:'What does a white curb indicate?',opts:['No parking at any time','Passenger loading and unloading only — usually limited to a few minutes','Parking for commercial vehicles only','Street cleaning zone'],exp:'White curbs mark passenger loading and unloading zones. You may stop there only for the time needed to drop off or pick up passengers. You may not park and leave your vehicle unattended in a white zone.'},
  zh:{q:'白色路缘代表什么？',opts:['任何时候禁止停车','仅供乘客上下车——通常限几分钟','仅限商业车辆停车','清扫区域'],exp:'白色路缘标记乘客上下车区域。您只能在下车或接送乘客所需的时间内停靠。不得将车停在白色区域并离开。'},
  zhTW:{q:'白色路緣代表什麼？',opts:['任何時候禁止停車','僅供乘客上下車——通常限幾分鐘','僅限商業車輛停車','清掃區域'],exp:'白色路緣標記乘客上下車區域。您只能在下車或接送乘客所需的時間內停靠。不得將車停在白色區域並離開。'},
  es:{q:'¿Qué indica un bordillo blanco?',opts:['Sin estacionamiento en ningún momento','Solo carga y descarga de pasajeros — generalmente limitado a unos minutos','Estacionamiento solo para vehículos comerciales','Zona de limpieza de calles'],exp:'Los bordillos blancos marcan zonas de carga y descarga de pasajeros. Solo puede detenerse el tiempo necesario para dejar o recoger pasajeros. No puede estacionar y dejar su vehículo desatendido en una zona blanca.'},
  ans:1
},
{
  id:340, cat:'highway',
  en:{q:'On a multi-lane freeway, which lane should you normally use for driving (not passing)?',opts:['The far left (fast) lane','Any lane you prefer','The right lane or one of the middle lanes','The center divider lane'],exp:'On multi-lane freeways, keep right except to pass. The far left lane is for passing and faster traffic. Using it as a travel lane can result in a citation for impeding traffic. After passing, move back to the right.'},
  zh:{q:'在多车道高速公路上，正常驾驶（非超车）时应使用哪条车道？',opts:['最左侧（快速）车道','您喜欢的任何车道','右侧车道或中间车道之一','中央隔离带车道'],exp:'在多车道高速公路上，除超车外保持靠右行驶。最左侧车道用于超车和快速车辆。将其用作行驶车道可能因阻碍交通而被开罚单。超车后，移回右侧车道。'},
  zhTW:{q:'在多車道高速公路上，正常駕駛（非超車）時應使用哪條車道？',opts:['最左側（快速）車道','您喜歡的任何車道','右側車道或中間車道之一','中央隔離帶車道'],exp:'在多車道高速公路上，除超車外保持靠右行駛。最左側車道用於超車和快速車輛。將其用作行駛車道可能因阻礙交通而被開罰單。超車後，移回右側車道。'},
  es:{q:'En una autopista de varios carriles, ¿qué carril debe usar normalmente para conducir (no para rebasar)?',opts:['El carril izquierdo (rápido)','Cualquier carril que prefiera','El carril derecho o uno de los carriles del medio','El carril divisor central'],exp:'En autopistas de varios carriles, manténgase a la derecha excepto para rebasar. El carril izquierdo es para rebasar y tráfico más rápido. Usarlo como carril de viaje puede resultar en una citación por impedir el tráfico. Después de rebasar, vuelva a la derecha.'},
  ans:2
},

{
  id:341, cat:'safety',
  en:{q:'What should you do if you begin to feel drowsy while driving?',opts:['Open the window and turn up the radio to stay alert','Pull off the road safely and rest or sleep','Drink coffee and keep driving','Drive faster to reach your destination sooner'],exp:'If you feel drowsy while driving, pull off the road at a safe location and rest or sleep. Drowsy driving is as dangerous as drunk driving — impaired reaction time, attention, and judgment. Caffeine is a temporary measure only and is not a substitute for sleep.'},
  zh:{q:'如果您在驾驶时开始感到困倦，您应该怎么做？',opts:['开窗并调高收音机音量以保持清醒','安全靠边停车并休息或睡觉','喝咖啡继续驾驶','加速以更快到达目的地'],exp:'如果您在驾驶时感到困倦，请在安全地点靠边停车休息或睡觉。疲劳驾驶与醉酒驾驶一样危险——反应时间、注意力和判断力都会受损。咖啡因只是临时措施，不能替代睡眠。'},
  zhTW:{q:'如果您在駕駛時開始感到困倦，您應該怎麼做？',opts:['開窗並調高收音機音量以保持清醒','安全靠邊停車並休息或睡覺','喝咖啡繼續駕駛','加速以更快到達目的地'],exp:'如果您在駕駛時感到困倦，請在安全地點靠邊停車休息或睡覺。疲勞駕駛與醉酒駕駛一樣危險——反應時間、注意力和判斷力都會受損。咖啡因只是臨時措施，不能替代睡眠。'},
  es:{q:'¿Qué debe hacer si comienza a sentirse somnoliento mientras conduce?',opts:['Abra la ventana y suba el radio para mantenerse alerta','Orillese de forma segura y descanse o duerma','Tome café y siga conduciendo','Conduzca más rápido para llegar antes a su destino'],exp:'Si se siente somnoliento al conducir, orillese en un lugar seguro y descanse o duerma. Conducir con sueño es tan peligroso como conducir borracho — tiempo de reacción, atención y juicio deteriorados. La cafeína es solo una medida temporal.'},
  ans:1
},
{
  id:342, cat:'laws',
  en:{q:'In California, when may you legally make a U-turn in a business district?',opts:['Never — U-turns are illegal in business districts','Only at intersections or at places where an opening is provided in the dividing section of divided highways','Anywhere on the block as long as you have a clear view','Only when a sign specifically permits it'],exp:'In a business district, U-turns are only legal at intersections (unless posted "No U-Turn") or at specially designated openings in divided highways. In residential areas, U-turns are allowed at most intersections if there is adequate visibility.'},
  zh:{q:'在加州，在商业区合法进行U形转弯的情况是什么？',opts:['从不——商业区禁止U形转弯','只能在交叉口或分隔高速公路的分隔段开口处','只要视野清晰，在街区任何地方','只有当标志明确允许时'],exp:'在商业区，U形转弯只在交叉口（除非标有"禁止U转"）或分隔高速公路的专用开口处合法。在住宅区，如果能见度足够，大多数交叉口允许U形转弯。'},
  zhTW:{q:'在加州，在商業區合法進行U形轉彎的情況是什麼？',opts:['從不——商業區禁止U形轉彎','只能在交叉口或分隔高速公路的分隔段開口處','只要視野清晰，在街區任何地方','只有當標誌明確允許時'],exp:'在商業區，U形轉彎只在交叉口（除非標有「禁止U轉」）或分隔高速公路的專用開口處合法。在住宅區，如果能見度足夠，大多數交叉口允許U形轉彎。'},
  es:{q:'En California, ¿cuándo puede hacer legalmente una vuelta en U en un distrito comercial?',opts:['Nunca — las vueltas en U son ilegales en distritos comerciales','Solo en intersecciones o donde hay una abertura en la sección divisora de autopistas divididas','En cualquier lugar del bloque con vista despejada','Solo cuando una señal lo permita específicamente'],exp:'En un distrito comercial, las vueltas en U solo son legales en intersecciones (a menos que haya una señal de "No Vuelta en U") o en aberturas designadas en autopistas divididas. En áreas residenciales, las vueltas en U están permitidas en la mayoría de intersecciones con visibilidad adecuada.'},
  ans:1
},
{
  id:343, cat:'signs', sign:'yield',
  en:{q:'What must you do when you see a yield sign?',opts:['Come to a complete stop, then proceed when safe','Slow down and be prepared to stop; yield to traffic and pedestrians in or approaching the intersection','Maintain speed — yield signs are advisory only','Flash your headlights to warn other drivers'],exp:'A yield sign requires you to slow down and be prepared to stop if necessary. You must give the right of way to vehicles and pedestrians already in the intersection or approaching closely. If the way is clear, you may proceed without stopping.'},
  zh:{q:'看到让行标志时，您必须怎么做？',opts:['完全停车，然后在安全时前进','减速并准备停车；让行已在路口或正在接近路口的车辆和行人','保持速度——让行标志只是建议性的','闪烁前灯警告其他驾驶员'],exp:'让行标志要求您减速并在必要时准备停车。您必须让行已在路口或正在接近的车辆和行人。如果道路畅通，可以不停车直接通过。'},
  zhTW:{q:'看到讓行標誌時，您必須怎麼做？',opts:['完全停車，然後在安全時前進','減速並準備停車；讓行已在路口或正在接近路口的車輛和行人','保持速度——讓行標誌只是建議性的','閃爍前燈警告其他駕駛員'],exp:'讓行標誌要求您減速並在必要時準備停車。您必須讓行已在路口或正在接近的車輛和行人。如果道路暢通，可以不停車直接通過。'},
  es:{q:'¿Qué debe hacer cuando ve una señal de ceda el paso?',opts:['Haga una parada completa, luego proceda cuando sea seguro','Reduzca la velocidad y esté preparado para detenerse; ceda el paso a vehículos y peatones en o cerca de la intersección','Mantenga la velocidad — las señales de ceda son solo de aviso','Destelle los faros para advertir a otros conductores'],exp:'Una señal de ceda el paso requiere que reduzca la velocidad y esté preparado para detenerse si es necesario. Debe dar el derecho de paso a vehículos y peatones que ya están en la intersección o se acercan. Si el camino está despejado, puede proceder sin detenerse.'},
  ans:1
},
{
  id:344, cat:'rightofway',
  en:{q:'A funeral procession is moving through an intersection. What should you do?',opts:['Proceed normally — you have the right of way with a green light','Yield to the entire procession until it clears the intersection','Only the lead hearse has right of way — you may cut in after it passes','Honk to alert the procession of your presence'],exp:'In California, you must yield to a funeral procession. The procession has the right of way through intersections — even against a red light — as long as the lead vehicle entered legally. Never cut into or interfere with a funeral procession.'},
  zh:{q:'一支葬礼队伍正在通过路口，您应该怎么做？',opts:['正常前进——绿灯时您有优先通行权','让整个队伍通过路口','只有排头灵车有优先权——之后可以插入','鸣喇叭提醒队伍您的存在'],exp:'在加州，您必须让行葬礼队伍。葬礼队伍有权通过路口——即使遇到红灯——只要领头车辆是合法进入的。绝不要插入或干扰葬礼队伍。'},
  zhTW:{q:'一支葬禮隊伍正在通過路口，您應該怎麼做？',opts:['正常前進——綠燈時您有優先通行權','讓整個隊伍通過路口','只有排頭靈車有優先權——之後可以插入','鳴喇叭提醒隊伍您的存在'],exp:'在加州，您必須讓行葬禮隊伍。葬禮隊伍有權通過路口——即使遇到紅燈——只要領頭車輛是合法進入的。絕不要插入或干擾葬禮隊伍。'},
  es:{q:'Un cortejo fúnebre está pasando por una intersección. ¿Qué debe hacer?',opts:['Proceda normalmente — tiene el derecho de paso con luz verde','Ceda el paso a todo el cortejo hasta que despeje la intersección','Solo el carro fúnebre líder tiene derecho de paso — puede incorporarse después','Toque la bocina para alertar al cortejo'],exp:'En California, debe ceder el paso a un cortejo fúnebre. El cortejo tiene derecho de paso a través de intersecciones — incluso contra una luz roja — siempre que el vehículo principal haya entrado legalmente. Nunca se interponga en un cortejo fúnebre.'},
  ans:1
},
{
  id:345, cat:'speed',
  en:{q:'On a two-lane undivided highway, what is the default speed limit if no sign is posted?',opts:['45 mph','55 mph','65 mph','70 mph'],exp:'The default (prima facie) speed limit on a two-lane undivided highway in California is 55 mph unless otherwise posted. Other prima facie limits apply in different zones (e.g., 25 mph in business/residential areas, 15 mph in alleys and school zones).'},
  zh:{q:'在双车道无隔离高速公路上，如果没有张贴标志，默认限速是多少？',opts:['45英里/小时','55英里/小时','65英里/小时','70英里/小时'],exp:'在加州，双车道无隔离高速公路的默认（初步）限速为55英里/小时，除非另有标注。其他初步限速适用于不同区域（例如，商业/住宅区25英里/小时，小巷和学校区域15英里/小时）。'},
  zhTW:{q:'在雙車道無隔離高速公路上，如果沒有張貼標誌，默認限速是多少？',opts:['45英里/小時','55英里/小時','65英里/小時','70英里/小時'],exp:'在加州，雙車道無隔離高速公路的默認（初步）限速為55英里/小時，除非另有標注。其他初步限速適用於不同區域（例如，商業/住宅區25英里/小時，小巷和學校區域15英里/小時）。'},
  es:{q:'En una carretera de dos carriles sin dividir, ¿cuál es el límite de velocidad predeterminado si no hay señal publicada?',opts:['45 mph','55 mph','65 mph','70 mph'],exp:'El límite de velocidad predeterminado (prima facie) en una carretera de dos carriles sin dividir en California es 55 mph a menos que se indique lo contrario. Otros límites prima facie aplican en diferentes zonas (por ejemplo, 25 mph en áreas comerciales/residenciales, 15 mph en callejones y zonas escolares).'},
  ans:1
},
{
  id:346, cat:'dui',
  en:{q:'What is the BAC limit for commercial vehicle drivers in California?',opts:['0.08%','0.04%','0.02%','0.01%'],exp:'Commercial vehicle drivers in California are subject to a stricter BAC limit of 0.04%. This applies when operating any commercial vehicle. If driving a commercial vehicle with a BAC of 0.04% or higher, you can be charged with DUI.'},
  zh:{q:'在加州，商业车辆驾驶员的血液酒精含量限制是多少？',opts:['0.08%','0.04%','0.02%','0.01%'],exp:'加州商业车辆驾驶员须遵守更严格的0.04% BAC限制。这适用于驾驶任何商业车辆时。如果驾驶商业车辆时BAC达到0.04%或更高，可能被指控DUI。'},
  zhTW:{q:'在加州，商業車輛駕駛員的血液酒精含量限制是多少？',opts:['0.08%','0.04%','0.02%','0.01%'],exp:'加州商業車輛駕駛員須遵守更嚴格的0.04% BAC限制。這適用於駕駛任何商業車輛時。如果駕駛商業車輛時BAC達到0.04%或更高，可能被指控DUI。'},
  es:{q:'¿Cuál es el límite de BAC para conductores de vehículos comerciales en California?',opts:['0.08%','0.04%','0.02%','0.01%'],exp:'Los conductores de vehículos comerciales en California están sujetos a un límite de BAC más estricto de 0.04%. Esto aplica cuando se opera cualquier vehículo comercial. Con un BAC de 0.04% o más alto en un vehículo comercial, puede ser acusado de DUI.'},
  ans:1
},
{
  id:347, cat:'parking',
  en:{q:'You want to park on a hill with no curb. Which way should you turn your wheels?',opts:['Straight ahead — do not turn the wheels','Turn wheels toward the edge of the road (downhill) for both uphill and downhill parking','Turn wheels toward the center of the road (uphill) for both uphill and downhill parking','It does not matter as long as you set the parking brake'],exp:'When parking on a hill without a curb, always turn your wheels toward the edge of the road (to the right). If the car rolls, it will move away from traffic. This applies whether facing uphill or downhill.'},
  zh:{q:'您想在没有路缘的山坡上停车，方向盘应转向哪边？',opts:['向前——不转动方向盘','对于上坡和下坡停车，都将方向盘转向道路边缘（下坡方向）','对于上坡和下坡停车，都将方向盘转向道路中心（上坡方向）','只要拉手刹，方向没有关系'],exp:'在没有路缘的山坡上停车时，始终将方向盘转向道路边缘（向右）。如果车辆滑动，它会远离交通方向移动。无论面朝上坡还是下坡，这条规则都适用。'},
  zhTW:{q:'您想在沒有路緣的山坡上停車，方向盤應轉向哪邊？',opts:['向前——不轉動方向盤','對於上坡和下坡停車，都將方向盤轉向道路邊緣（下坡方向）','對於上坡和下坡停車，都將方向盤轉向道路中心（上坡方向）','只要拉手剎，方向沒有關係'],exp:'在沒有路緣的山坡上停車時，始終將方向盤轉向道路邊緣（向右）。如果車輛滑動，它會遠離交通方向移動。無論面朝上坡還是下坡，這條規則都適用。'},
  es:{q:'Quiere estacionar en una colina sin bordillo. ¿Hacia dónde debe girar sus ruedas?',opts:['Recto — no gire las ruedas','Gire las ruedas hacia el borde del camino (cuesta abajo) tanto en subida como en bajada','Gire las ruedas hacia el centro del camino (cuesta arriba) tanto en subida como en bajada','No importa siempre que active el freno de estacionamiento'],exp:'Al estacionar en una colina sin bordillo, siempre gire las ruedas hacia el borde del camino (a la derecha). Si el auto rueda, se moverá lejos del tráfico. Esto aplica ya sea mirando cuesta arriba o cuesta abajo.'},
  ans:1
},
{
  id:348, cat:'highway',
  en:{q:'What should you do if you miss your freeway exit?',opts:['Stop on the shoulder and back up to the exit','Make a U-turn on the freeway','Continue to the next exit and use surface streets to return','Cross the center divider to get back to the exit'],exp:'If you miss a freeway exit, continue to the next exit. Do not stop on the shoulder, back up, or make a U-turn on the freeway — these are extremely dangerous and illegal. Take the next exit and use surface streets or on-ramps to return.'},
  zh:{q:'如果您错过了高速公路出口，您应该怎么做？',opts:['在肩道停车并倒退到出口','在高速公路上掉头','继续到下一个出口，然后使用地面道路返回','穿越中央隔离带回到出口'],exp:'如果您错过了高速公路出口，继续到下一个出口。不要在肩道停车、倒退或在高速公路上掉头——这些行为极其危险且违法。在下一个出口下高速，然后使用地面道路或上匝道返回。'},
  zhTW:{q:'如果您錯過了高速公路出口，您應該怎麼做？',opts:['在肩道停車並倒退到出口','在高速公路上掉頭','繼續到下一個出口，然後使用地面道路返回','穿越中央隔離帶回到出口'],exp:'如果您錯過了高速公路出口，繼續到下一個出口。不要在肩道停車、倒退或在高速公路上掉頭——這些行為極其危險且違法。在下一個出口下高速，然後使用地面道路或上匝道返回。'},
  es:{q:'¿Qué debe hacer si se pasa su salida de la autopista?',opts:['Deténgase en el arcén y retroceda hasta la salida','Haga una vuelta en U en la autopista','Continúe hasta la próxima salida y use calles locales para regresar','Cruce el divisor central para volver a la salida'],exp:'Si se pasa una salida de autopista, continúe hasta la próxima salida. No se detenga en el arcén, retroceda ni haga una vuelta en U en la autopista — esto es extremadamente peligroso e ilegal. Tome la próxima salida y use calles locales para regresar.'},
  ans:2
},
{
  id:349, cat:'laws',
  en:{q:'What does it mean when a school bus has its red lights flashing and the stop arm is extended?',opts:['The bus is about to move — proceed with caution','All vehicles on both sides of the road must stop — you may not pass until the lights stop and arm retracts','Only traffic behind the bus must stop','You may pass carefully on a divided highway with a physical barrier'],exp:'When a school bus displays flashing red lights and extends its stop arm, all vehicles — on both sides of an undivided road — must stop and remain stopped. On divided highways (separated by a physical barrier), only traffic behind the bus must stop. Passing a stopped school bus is a serious offense.'},
  zh:{q:'当校车亮起红色闪烁灯且停车臂伸出时，意味着什么？',opts:['校车即将移动——谨慎前行','道路两侧的所有车辆都必须停车——直到灯停止闪烁且停车臂收回后才可通行','只有校车后面的车辆必须停车','在有实体隔离带的分隔高速公路上，可以谨慎通过'],exp:'当校车亮起红色闪烁灯并伸出停车臂时，所有车辆——在无分隔道路两侧——都必须停车并保持停车状态。在分隔高速公路（有实体隔离带）上，只有校车后面的车辆必须停车。超过停止的校车是严重违规行为。'},
  zhTW:{q:'當校車亮起紅色閃爍燈且停車臂伸出時，意味著什麼？',opts:['校車即將移動——謹慎前行','道路兩側的所有車輛都必須停車——直到燈停止閃爍且停車臂收回後才可通行','只有校車後面的車輛必須停車','在有實體隔離帶的分隔高速公路上，可以謹慎通過'],exp:'當校車亮起紅色閃爍燈並伸出停車臂時，所有車輛——在無分隔道路兩側——都必須停車並保持停車狀態。在分隔高速公路（有實體隔離帶）上，只有校車後面的車輛必須停車。超過停止的校車是嚴重違規行為。'},
  es:{q:'¿Qué significa cuando un autobús escolar tiene luces rojas parpadeando y el brazo de parada extendido?',opts:['El autobús está a punto de moverse — proceda con precaución','Todos los vehículos en ambos lados del camino deben detenerse — no puede pasar hasta que las luces se apaguen y el brazo se retraiga','Solo el tráfico detrás del autobús debe detenerse','Puede pasar con cuidado en una autopista dividida con barrera física'],exp:'Cuando un autobús escolar muestra luces rojas parpadeantes y extiende el brazo de parada, todos los vehículos en ambos lados de una carretera no dividida deben detenerse. En autopistas divididas (separadas por barrera física), solo el tráfico detrás del autobús debe detenerse. Pasar un autobús escolar detenido es una infracción grave.'},
  ans:1
},
{
  id:350, cat:'safety',
  en:{q:'What is the safest way to back your vehicle out of a driveway onto a street?',opts:['Back out quickly before traffic arrives','Walk around the vehicle first to check for hazards, then back out slowly while checking all mirrors and blind spots','Honk your horn before backing out, then proceed at normal speed','Only look out the rear window — mirrors are unnecessary'],exp:'Before backing out, walk around the vehicle to check for children, pets, or obstacles in your path. Then back out slowly, using all mirrors and checking blind spots. For added safety, back into your driveway when parking so you can pull out facing forward.'},
  zh:{q:'将车辆从车道倒出到街道上的最安全方式是什么？',opts:['在交通到来前迅速倒出','先绕车检查障碍物，然后缓慢倒退同时检查所有后视镜和盲点','倒车前按喇叭，然后以正常速度前进','只看后窗——后视镜是不必要的'],exp:'倒车前，绕车走一圈检查路径中是否有儿童、宠物或障碍物。然后缓慢倒退，使用所有后视镜并检查盲点。为了额外安全，停车时倒入车道，这样可以向前驶出。'},
  zhTW:{q:'將車輛從車道倒出到街道上的最安全方式是什麼？',opts:['在交通到來前迅速倒出','先繞車檢查障礙物，然後緩慢倒退同時檢查所有後視鏡和盲點','倒車前按喇叭，然後以正常速度前進','只看後窗——後視鏡是不必要的'],exp:'倒車前，繞車走一圈檢查路徑中是否有兒童、寵物或障礙物。然後緩慢倒退，使用所有後視鏡並檢查盲點。為了額外安全，停車時倒入車道，這樣可以向前駛出。'},
  es:{q:'¿Cuál es la forma más segura de sacar su vehículo marcha atrás de un camino de entrada a la calle?',opts:['Salga rápidamente antes de que llegue el tráfico','Camine alrededor del vehículo primero para verificar peligros, luego salga lentamente revisando todos los espejos y puntos ciegos','Toque la bocina antes de salir, luego proceda a velocidad normal','Solo mire por la ventana trasera — los espejos son innecesarios'],exp:'Antes de salir en reversa, camine alrededor del vehículo para verificar niños, mascotas u obstáculos. Luego salga lentamente usando todos los espejos y revisando puntos ciegos. Para mayor seguridad, entre en reversa a su cochera al estacionar para poder salir hacia adelante.'},
  ans:1
},

{
  id:351, cat:'signs', sign:'school-zone',
  en:{q:'What does a pentagonal (five-sided) sign indicate?',opts:['Railroad crossing ahead','You are entering a school zone','No parking at any time','Begin divided highway'],exp:'A five-sided (pentagonal) sign always indicates a school zone or school crossing. These signs are yellow with black lettering. When driving near schools, watch for children and be ready to slow to 25 mph (or the posted school-zone speed).'},
  zh:{q:'五边形（五角形）标志表示什么？',opts:['前方铁路道口','您正在进入学校区','任何时候禁止停车','开始分隔公路'],exp:'五边形标志始终表示学校区或学校过道。这些标志是黄色底黑色文字。在学校附近行驶时，注意儿童，准备减速至25英里/小时（或标注的学校区速度）。'},
  zhTW:{q:'五邊形（五角形）標誌表示什麼？',opts:['前方鐵路道口','您正在進入學校區','任何時候禁止停車','開始分隔公路'],exp:'五邊形標誌始終表示學校區或學校過道。這些標誌是黃色底黑色文字。在學校附近行駛時，注意兒童，準備減速至25英里/小時（或標注的學校區速度）。'},
  es:{q:'¿Qué indica una señal pentagonal (de cinco lados)?',opts:['Cruce de ferrocarril adelante','Está entrando a una zona escolar','Sin estacionamiento en ningún momento','Comienza autopista dividida'],exp:'Una señal de cinco lados (pentagonal) siempre indica una zona escolar o cruce escolar. Estas señales son amarillas con letras negras. Al conducir cerca de escuelas, esté atento a los niños y listo para reducir la velocidad a 25 mph.'},
  ans:1
},
{
  id:352, cat:'laws',
  en:{q:'Under California law, when passing a stationary emergency vehicle with lights flashing on a freeway, you must:',opts:['Maintain your speed and stay in your lane','Move over one lane away from the emergency vehicle, or slow to 20 mph below the speed limit if you cannot move over','Only slow down if an officer waves you to do so','Use your hazard lights but maintain speed'],exp:'"Move Over" law (CVC 21809): when approaching a stationary emergency, tow, or utility vehicle with warning lights on a freeway, you must move over one lane if safe, or slow to 20 mph below the posted speed limit. This applies to police, fire, ambulance, caltrans, and tow trucks.'},
  zh:{q:'根据加州法律，在高速公路上超越停着且闪烁警示灯的紧急车辆时，您必须：',opts:['保持速度并留在您的车道','向远离紧急车辆的方向变换一条车道，或在无法变换时减速至低于限速20英里/小时','只有在警察示意时才减速','使用危险警示灯但保持速度'],exp:'"让行"法（车辆法典21809）：在高速公路上接近停着并开着警示灯的紧急、拖车或公用设施车辆时，您必须在安全时向远处变换一条车道，或减速至低于限速20英里/小时。这适用于警察、消防、救护车、交通运输部和拖车。'},
  zhTW:{q:'根據加州法律，在高速公路上超越停著且閃爍警示燈的緊急車輛時，您必須：',opts:['保持速度並留在您的車道','向遠離緊急車輛的方向變換一條車道，或在無法變換時減速至低於限速20英里/小時','只有在警察示意時才減速','使用危險警示燈但保持速度'],exp:'"讓行"法（車輛法典21809）：在高速公路上接近停著並開著警示燈的緊急、拖車或公用設施車輛時，您必須在安全時向遠處變換一條車道，或減速至低於限速20英里/小時。這適用於警察、消防、救護車、交通運輸部和拖車。'},
  es:{q:'Bajo la ley de California, al pasar un vehículo de emergencia estacionario con luces parpadeando en una autopista, debe:',opts:['Mantener su velocidad y permanecer en su carril','Cambiar un carril lejos del vehículo de emergencia, o reducir a 20 mph por debajo del límite si no puede cambiar','Solo reducir si un oficial le indica que lo haga','Usar luces de emergencia pero mantener velocidad'],exp:'Ley de "Ceder el Paso" (CVC 21809): al acercarse a un vehículo de emergencia, grúa o utilitario estacionario con luces de advertencia, debe cambiar de carril si es seguro, o reducir la velocidad a 20 mph por debajo del límite publicado.'},
  ans:1
},
{
  id:353, cat:'rightofway',
  en:{q:'You are at a four-way stop. You and the driver across from you arrive at exactly the same time. You both want to go straight. Who goes first?',opts:['You have the right of way because you arrived first','Either driver may go — wave to each other to decide','Either driver may proceed since no conflict exists when both go straight simultaneously','The driver on the left yields to the driver on the right'],exp:'When two cars at a four-way stop face each other and both want to go straight, there is no conflict — both may proceed at the same time because their paths do not cross. If one is turning left, they yield to the one going straight.'},
  zh:{q:'您在四向停车标志处。您和对面的驾驶员同时到达，都想直行。谁先走？',opts:['您先到所以有优先权','任何一方都可以走——互相打招呼决定','任何一方都可以前进，因为两车同时直行不会发生冲突','左侧的驾驶员让行右侧的驾驶员'],exp:'当四向停车处两辆对面的车都想直行时，没有冲突——两辆车可以同时前进，因为它们的路径不会交叉。如果一辆要左转，则让行直行车辆。'},
  zhTW:{q:'您在四向停車標誌處。您和對面的駕駛員同時到達，都想直行。誰先走？',opts:['您先到所以有優先權','任何一方都可以走——互相打招呼決定','任何一方都可以前進，因為兩車同時直行不會發生衝突','左側的駕駛員讓行右側的駕駛員'],exp:'當四向停車處兩輛對面的車都想直行時，沒有衝突——兩輛車可以同時前進，因為它們的路徑不會交叉。如果一輛要左轉，則讓行直行車輛。'},
  es:{q:'Está en una parada de cuatro vías. Usted y el conductor de enfrente llegan al mismo tiempo. Ambos quieren ir derecho. ¿Quién va primero?',opts:['Usted tiene el derecho de paso porque llegó primero','Cualquiera puede ir — háganse señas para decidir','Cualquiera puede proceder ya que no hay conflicto cuando ambos van recto simultáneamente','El conductor de la izquierda cede al de la derecha'],exp:'Cuando dos autos en una parada de cuatro vías se enfrentan y ambos quieren ir recto, no hay conflicto — ambos pueden proceder al mismo tiempo porque sus rutas no se cruzan. Si uno gira a la izquierda, cede al que va recto.'},
  ans:2
},
{
  id:354, cat:'speed',
  en:{q:'You are driving on a road where the speed limit is 65 mph. It is raining heavily and visibility is poor. What speed should you drive?',opts:['65 mph — the posted speed limit is the maximum, but also the minimum','Whatever speed is reasonable and safe given the conditions, even if below the posted limit','55 mph — always reduce by 10 mph in rain','At least 45 mph to keep up with traffic'],exp:'The Basic Speed Law requires you to drive at a speed that is reasonable and prudent for existing conditions — regardless of the posted limit. In heavy rain with poor visibility, you must slow below the posted limit to a speed where you can stop safely within your sight distance.'},
  zh:{q:'您在限速65英里/小时的道路上行驶。大雨能见度差。您应该以什么速度驾驶？',opts:['65英里/小时——限速是最高值，也是最低值','根据条件合理安全的任何速度，即使低于限速','55英里/小时——下雨时始终减速10英里/小时','至少45英里/小时以跟上交通'],exp:'基本速度法要求您以适合现有条件合理谨慎的速度驾驶——无论限速是多少。在能见度差的大雨中，您必须减速到低于限速，以一个能在您的视线范围内安全停车的速度。'},
  zhTW:{q:'您在限速65英里/小時的道路上行駛。大雨能見度差。您應該以什麼速度駕駛？',opts:['65英里/小時——限速是最高值，也是最低值','根據條件合理安全的任何速度，即使低於限速','55英里/小時——下雨時始終減速10英里/小時','至少45英里/小時以跟上交通'],exp:'基本速度法要求您以適合現有條件合理謹慎的速度駕駛——無論限速是多少。在能見度差的大雨中，您必須減速到低於限速，以一個能在您的視線範圍內安全停車的速度。'},
  es:{q:'Conduce en un camino con límite de 65 mph. Llueve fuerte y la visibilidad es pobre. ¿A qué velocidad debe conducir?',opts:['65 mph — el límite publicado es tanto el máximo como el mínimo','La velocidad que sea razonable y segura dadas las condiciones, incluso si es inferior al límite','55 mph — siempre reduzca 10 mph en lluvia','Al menos 45 mph para mantenerse con el tráfico'],exp:'La Ley de Velocidad Básica requiere conducir a una velocidad razonable y prudente para las condiciones existentes, independientemente del límite publicado. Con lluvia intensa y visibilidad pobre, debe reducir por debajo del límite a una velocidad que le permita detenerse dentro de su distancia de visión.'},
  ans:1
},
{
  id:355, cat:'dui',
  en:{q:'How many drinks does it typically take for a 160-pound person to reach a BAC of 0.08%?',opts:['1 drink','2 drinks','3–4 drinks','8 or more drinks'],exp:'Approximately 3–4 standard drinks in one hour can bring a 160-pound person to about 0.08% BAC, though this varies by gender, body composition, food intake, and individual metabolism. A "standard drink" is 12 oz beer, 5 oz wine, or 1.5 oz liquor.'},
  zh:{q:'一个160磅的人通常需要喝多少杯才能达到0.08%的BAC？',opts:['1杯','2杯','3-4杯','8杯或更多'],exp:'一个160磅的人在一小时内喝约3-4标准杯可能达到约0.08%的BAC，但这取决于性别、体型、食物摄入和个人代谢。"标准杯"是12盎司啤酒、5盎司葡萄酒或1.5盎司烈酒。'},
  zhTW:{q:'一個160磅的人通常需要喝多少杯才能達到0.08%的BAC？',opts:['1杯','2杯','3-4杯','8杯或更多'],exp:'一個160磅的人在一小時內喝約3-4標準杯可能達到約0.08%的BAC，但這取決於性別、體型、食物攝入和個人代謝。「標準杯」是12盎司啤酒、5盎司葡萄酒或1.5盎司烈酒。'},
  es:{q:'¿Cuántas bebidas suele tomar una persona de 160 libras para alcanzar un BAC de 0.08%?',opts:['1 bebida','2 bebidas','3-4 bebidas','8 o más bebidas'],exp:'Aproximadamente 3-4 bebidas estándar en una hora pueden llevar a una persona de 160 libras a un BAC de aproximadamente 0.08%, aunque esto varía según el género, composición corporal, ingesta de alimentos y metabolismo individual.'},
  ans:2
},
{
  id:356, cat:'parking',
  en:{q:'You are parking parallel on a level street. How far from the curb should your right wheels be?',opts:['No more than 6 inches from the curb','No more than 12 inches from the curb','No more than 18 inches from the curb','No more than 24 inches from the curb'],exp:'California law requires your vehicle\'s right-side wheels to be within 18 inches of the right curb when parking parallel. Parking too far from the curb can block traffic lanes or make it difficult for other vehicles to park.'},
  zh:{q:'您在平坦街道上平行停车。右侧车轮距路缘应多远？',opts:['距路缘不超过6英寸','距路缘不超过12英寸','距路缘不超过18英寸','距路缘不超过24英寸'],exp:'加州法律要求平行停车时，车辆右侧车轮距右侧路缘不超过18英寸。停车距路缘太远可能阻塞交通车道或使其他车辆难以停车。'},
  zhTW:{q:'您在平坦街道上平行停車。右側車輪距路緣應多遠？',opts:['距路緣不超過6英寸','距路緣不超過12英寸','距路緣不超過18英寸','距路緣不超過24英寸'],exp:'加州法律要求平行停車時，車輛右側車輪距右側路緣不超過18英寸。停車距路緣太遠可能阻塞交通車道或使其他車輛難以停車。'},
  es:{q:'Está estacionando en paralelo en una calle nivelada. ¿A qué distancia del bordillo deben estar sus ruedas derechas?',opts:['No más de 6 pulgadas del bordillo','No más de 12 pulgadas del bordillo','No más de 18 pulgadas del bordillo','No más de 24 pulgadas del bordillo'],exp:'La ley de California requiere que las ruedas del lado derecho de su vehículo estén dentro de 18 pulgadas del bordillo derecho al estacionar en paralelo. Estacionar demasiado lejos del bordillo puede bloquear carriles de tráfico.'},
  ans:2
},
{
  id:357, cat:'highway',
  en:{q:'What is a "weave lane" on a freeway?',opts:['A lane reserved for high-occupancy vehicles','A short section where an on-ramp and an off-ramp share the same lane, requiring entering and exiting traffic to cross paths','A lane where the speed limit is higher','A special lane for trucks and buses only'],exp:'A weave lane is a short, shared lane where merging traffic (entering the freeway) and exiting traffic (leaving the freeway) must cross each other\'s paths in a short distance. Extra caution is needed — enter and exit decisively, watch for gaps, and adjust speed to merge safely.'},
  zh:{q:'高速公路上的"交织车道"是什么？',opts:['高乘载率车辆专用车道','上匝道和下匝道共用同一车道的短路段，进出交通需交叉通行','速度限制较高的车道','仅限卡车和公共汽车的专用车道'],exp:'"交织车道"是一个短暂的共用车道，进入高速公路的车辆和离开高速公路的车辆必须在短距离内交叉通行。需要特别谨慎——果断进出，寻找空隙，调整速度以安全合并。'},
  zhTW:{q:'高速公路上的「交織車道」是什麼？',opts:['高乘載率車輛專用車道','上匝道和下匝道共用同一車道的短路段，進出交通需交叉通行','速度限制較高的車道','僅限卡車和公共汽車的專用車道'],exp:'「交織車道」是一個短暫的共用車道，進入高速公路的車輛和離開高速公路的車輛必須在短距離內交叉通行。需要特別謹慎——果斷進出，尋找空隙，調整速度以安全合併。'},
  es:{q:'¿Qué es un "carril de entretejido" en una autopista?',opts:['Un carril reservado para vehículos de alta ocupación','Una sección corta donde una rampa de entrada y una de salida comparten el mismo carril, requiriendo que el tráfico se cruce','Un carril donde el límite de velocidad es más alto','Un carril especial solo para camiones y autobuses'],exp:'Un carril de entretejido es un carril compartido corto donde el tráfico que entra y el que sale de la autopista deben cruzarse en una distancia corta. Se necesita precaución extra — entre y salga decisivamente, busque espacios y ajuste la velocidad para fusionarse de manera segura.'},
  ans:1
},
{
  id:358, cat:'safety',
  en:{q:'When driving at night, you should be able to stop your vehicle within:',opts:['The distance covered in one second of travel','The distance of your headlight beam','Any distance — night driving requires no special adjustments','Twice the distance of your headlight beam'],exp:'"Overdriving your headlights" means going so fast that you cannot stop within the distance illuminated by your headlights. At night, you should always be able to stop within the lit area ahead of your car — typically about 350 feet for high beams and 160 feet for low beams.'},
  zh:{q:'夜间驾驶时，您应该能在多远距离内停车？',opts:['一秒钟行驶的距离','您前灯光束照射的距离','任何距离——夜间驾驶不需要特别调整','您前灯光束照射距离的两倍'],exp:'"超越前灯"意味着行驶速度过快，无法在前灯照射的距离内停车。夜间，您应该始终能在车前方照明区域内停车——远光灯通常约350英尺，近光灯约160英尺。'},
  zhTW:{q:'夜間駕駛時，您應該能在多遠距離內停車？',opts:['一秒鐘行駛的距離','您前燈光束照射的距離','任何距離——夜間駕駛不需要特別調整','您前燈光束照射距離的兩倍'],exp:'"超越前燈"意味著行駛速度過快，無法在前燈照射的距離內停車。夜間，您應該始終能在車前方照明區域內停車——遠光燈通常約350英尺，近光燈約160英尺。'},
  es:{q:'Al conducir de noche, debe poder detener su vehículo dentro de:',opts:['La distancia recorrida en un segundo de viaje','La distancia del haz de sus faros','Cualquier distancia — conducir de noche no requiere ajustes especiales','El doble de la distancia del haz de sus faros'],exp:'"Conducir más allá de sus faros" significa ir tan rápido que no puede detenerse dentro de la distancia iluminada por sus faros. De noche, siempre debe poder detenerse dentro del área iluminada frente a su auto — típicamente unos 350 pies para luces altas y 160 pies para luces bajas.'},
  ans:1
},
{
  id:359, cat:'laws',
  en:{q:'In California, you may not make a right turn at a red light if:',opts:['You have not signaled for 100 feet','A sign prohibits the turn, or pedestrians are crossing in your path','There is no bicycle lane present','The road is wider than two lanes'],exp:'You may not make a right turn on red when: a sign specifically prohibits it (common near schools and busy intersections), pedestrians have the walk signal and are crossing, or a bicyclist is in the bike lane proceeding through the intersection.'},
  zh:{q:'在加州，以下情况您不得在红灯时右转：',opts:['您没有提前100英尺打转向灯','标志禁止转弯，或行人正在您的路径上穿行','没有自行车道','道路超过两条车道'],exp:'当出现以下情况时，不得在红灯时右转：标志明确禁止（常见于学校和繁忙路口附近）、行人有行走信号正在穿越，或骑行者在自行车道上通过路口。'},
  zhTW:{q:'在加州，以下情況您不得在紅燈時右轉：',opts:['您沒有提前100英尺打轉向燈','標誌禁止轉彎，或行人正在您的路徑上穿行','沒有自行車道','道路超過兩條車道'],exp:'當出現以下情況時，不得在紅燈時右轉：標誌明確禁止（常見於學校和繁忙路口附近）、行人有行走信號正在穿越，或騎行者在自行車道上通過路口。'},
  es:{q:'En California, no puede girar a la derecha en un semáforo rojo si:',opts:['No ha señalizado durante 100 pies','Una señal prohíbe el giro, o los peatones cruzan en su camino','No hay carril para bicicletas','La carretera tiene más de dos carriles'],exp:'No puede girar a la derecha en rojo cuando: una señal lo prohíbe específicamente (común cerca de escuelas e intersecciones concurridas), los peatones tienen señal de cruce y están cruzando, o un ciclista está en el carril de bicicletas pasando por la intersección.'},
  ans:1
},
{
  id:360, cat:'safety',
  en:{q:'What is the leading cause of death for teens in the United States?',opts:['Drug overdose','Motor vehicle crashes','Drowning','Homicide'],exp:'Motor vehicle crashes are the leading cause of death for teenagers in the United States. Factors include inexperience, distracted driving (especially phone use), speeding, not wearing seat belts, and impaired driving. California has Graduated Driver Licensing (GDL) laws to address these risks.'},
  zh:{q:'美国青少年死亡的主要原因是什么？',opts:['药物过量','机动车事故','溺水','凶杀'],exp:'机动车事故是美国青少年死亡的主要原因。因素包括缺乏经验、分心驾驶（尤其是使用手机）、超速、不系安全带和酒后驾驶。加州有渐进式驾照（GDL）法律来应对这些风险。'},
  zhTW:{q:'美國青少年死亡的主要原因是什麼？',opts:['藥物過量','機動車事故','溺水','凶殺'],exp:'機動車事故是美國青少年死亡的主要原因。因素包括缺乏經驗、分心駕駛（尤其是使用手機）、超速、不繫安全帶和酒後駕駛。加州有漸進式駕照（GDL）法律來應對這些風險。'},
  es:{q:'¿Cuál es la principal causa de muerte para adolescentes en los Estados Unidos?',opts:['Sobredosis de drogas','Accidentes de vehículos motorizados','Ahogamiento','Homicidio'],exp:'Los accidentes de vehículos motorizados son la principal causa de muerte para adolescentes en los Estados Unidos. Los factores incluyen inexperiencia, conducción distraída (especialmente uso del teléfono), exceso de velocidad, no usar cinturón de seguridad y conducción deteriorada.'},
  ans:1
},

{
  id:361, cat:'laws',
  en:{q:'What is the penalty for texting while driving in California?',opts:['Only a verbal warning for first offense','A base fine of $20 for first offense and $50 for subsequent offenses, plus penalty assessments','A $500 fine and license suspension','A fine of $1,000 and mandatory traffic school'],exp:'The base fine for a first handheld device violation in California is $20, and $50 for subsequent offenses. However, penalty assessments raise the total to approximately $160 for a first offense and $280+ for subsequent offenses. Handheld phone use while driving is prohibited for all drivers.'},
  zh:{q:'在加州，开车时发短信的处罚是什么？',opts:['首次违规只是口头警告','首次违规罚款$20，后续违规$50，加上附加处罚','$500罚款和吊销驾照','$1,000罚款和强制交通学校'],exp:'在加州，首次手持设备违规的基本罚款为$20，后续违规为$50。但是，附加处罚将总额提高到首次违规约$160，后续违规$280以上。所有驾驶员禁止在驾驶时手持使用手机。'},
  zhTW:{q:'在加州，開車時發短信的處罰是什麼？',opts:['首次違規只是口頭警告','首次違規罰款$20，後續違規$50，加上附加處罰','$500罰款和吊銷駕照','$1,000罰款和強制交通學校'],exp:'在加州，首次手持設備違規的基本罰款為$20，後續違規為$50。但是，附加處罰將總額提高到首次違規約$160，後續違規$280以上。所有駕駛員禁止在駕駛時手持使用手機。'},
  es:{q:'¿Cuál es la penalidad por enviar mensajes de texto mientras conduce en California?',opts:['Solo una advertencia verbal por primera ofensa','Multa base de $20 por primera ofensa y $50 por subsiguientes, más evaluaciones de penalidad','Multa de $500 y suspensión de licencia','Multa de $1,000 y escuela de tráfico obligatoria'],exp:'La multa base por una primera infracción de dispositivo de mano en California es $20, y $50 para infracciones subsiguientes. Sin embargo, las evaluaciones de penalidad elevan el total a aproximadamente $160 para una primera ofensa y $280+ para infracciones subsiguientes.'},
  ans:1
},
{
  id:362, cat:'signs', sign:'no-u-turn',
  en:{q:'What does a "No U-Turn" sign look like and what does it mean?',opts:['A red circle with a U-arrow crossed out — U-turns are prohibited at that location','A yellow diamond with a U symbol — slow down when making U-turns','A green circle with a U symbol — U-turns are permitted','A blue rectangle with a U symbol — U-turns are suggested'],exp:'A "No U-Turn" sign has a red circle with a diagonal red line crossing a U-turn arrow (black). It means U-turns are strictly prohibited at that location. Making an illegal U-turn can result in a fine and is dangerous at locations where visibility is limited.'},
  zh:{q:'"禁止U形转弯"标志是什么样子，它意味着什么？',opts:['一个带有被划掉的U形箭头的红色圆圈——该位置禁止U形转弯','一个带有U形符号的黄色菱形——进行U形转弯时减速','一个带有U形符号的绿色圆圈——允许U形转弯','一个带有U形符号的蓝色矩形——建议U形转弯'],exp:'"禁止U形转弯"标志有一个红色圆圈，上面有一条红色斜线穿过U形转弯箭头（黑色）。这意味着在该位置严格禁止U形转弯。非法U形转弯可能导致罚款，并且在能见度有限的地方很危险。'},
  zhTW:{q:'"禁止U形轉彎"標誌是什麼樣子，它意味著什麼？',opts:['一個帶有被劃掉的U形箭頭的紅色圓圈——該位置禁止U形轉彎','一個帶有U形符號的黃色菱形——進行U形轉彎時減速','一個帶有U形符號的綠色圓圈——允許U形轉彎','一個帶有U形符號的藍色矩形——建議U形轉彎'],exp:'"禁止U形轉彎"標誌有一個紅色圓圈，上面有一條紅色斜線穿過U形轉彎箭頭（黑色）。這意味著在該位置嚴格禁止U形轉彎。非法U形轉彎可能導致罰款，並且在能見度有限的地方很危險。'},
  es:{q:'¿Cómo se ve una señal de "No Vuelta en U" y qué significa?',opts:['Un círculo rojo con una flecha U tachada — las vueltas en U están prohibidas en ese lugar','Un diamante amarillo con un símbolo U — reduzca al hacer vueltas en U','Un círculo verde con un símbolo U — las vueltas en U están permitidas','Un rectángulo azul con un símbolo U — se sugieren vueltas en U'],exp:'Una señal de "No Vuelta en U" tiene un círculo rojo con una línea diagonal cruzando una flecha de vuelta en U. Significa que las vueltas en U están estrictamente prohibidas en ese lugar.'},
  ans:0
},
{
  id:363, cat:'rightofway',
  en:{q:'A blind pedestrian with a white cane is waiting at a crosswalk. What must you do?',opts:['Honk to alert them and proceed slowly','Stop and yield the entire crosswalk to the pedestrian before proceeding','Slow down but may proceed if they are on the sidewalk','Only stop if they have started crossing'],exp:'In California, drivers must stop and yield to a blind pedestrian using a white cane or guide dog at any crosswalk or intersection. You must wait until the pedestrian has completely crossed before proceeding. Failing to yield to a blind pedestrian is a serious offense.'},
  zh:{q:'一名持有白色手杖的盲人正在人行横道等候。您必须怎么做？',opts:['鸣喇叭提醒他们，然后缓慢前进','在前进前完全停车并让整个人行横道给行人通过','如果他们在人行道上可以减速通过','只有当他们开始穿越时才停车'],exp:'在加州，驾驶员必须在任何人行横道或路口停车，让使用白色手杖或导盲犬的盲人行人通过。您必须等到行人完全穿越后才能前进。未让行盲人行人是严重违规行为。'},
  zhTW:{q:'一名持有白色手杖的盲人正在人行橫道等候。您必須怎麼做？',opts:['鳴喇叭提醒他們，然後緩慢前進','在前進前完全停車並讓整個人行橫道給行人通過','如果他們在人行道上可以減速通過','只有當他們開始穿越時才停車'],exp:'在加州，駕駛員必須在任何人行橫道或路口停車，讓使用白色手杖或導盲犬的盲人行人通過。您必須等到行人完全穿越後才能前進。未讓行盲人行人是嚴重違規行為。'},
  es:{q:'Un peatón ciego con un bastón blanco está esperando en un cruce de peatones. ¿Qué debe hacer?',opts:['Toque la bocina para alertarle y proceda lentamente','Deténgase y ceda todo el cruce al peatón antes de proceder','Reduzca la velocidad pero puede proceder si están en la acera','Solo deténgase si han comenzado a cruzar'],exp:'En California, los conductores deben detenerse y ceder el paso a un peatón ciego que usa bastón blanco o perro guía en cualquier cruce o intersección. Debe esperar hasta que el peatón haya cruzado completamente antes de proceder.'},
  ans:1
},
{
  id:364, cat:'safety',
  en:{q:'If your vehicle starts to skid, what should you generally do?',opts:['Steer in the opposite direction of the skid and brake hard','Ease off the gas or brake, steer in the direction you want the front of the vehicle to go','Accelerate to regain traction quickly','Turn the steering wheel sharply in any direction'],exp:'To recover from a skid: ease off the gas or brake (do not brake hard as it worsens the skid), then steer in the direction you want the front wheels to go — this is "steering into the skid." For rear-wheel skids, steer in the direction the rear is sliding. Stay calm and use smooth, controlled inputs.'},
  zh:{q:'如果您的车辆开始打滑，一般应该怎么做？',opts:['向打滑相反方向转向并用力刹车','松开油门或刹车，向您希望车辆前部前进的方向转向','加速以快速恢复牵引力','向任何方向猛打方向盘'],exp:'从打滑中恢复：松开油门或刹车（不要猛刹车，这会加重打滑），然后向您希望前轮朝向的方向转向——这就是"转向打滑方向"。对于后轮打滑，向后轮滑动的方向转向。保持冷静，使用平稳、有控制的操作。'},
  zhTW:{q:'如果您的車輛開始打滑，一般應該怎麼做？',opts:['向打滑相反方向轉向並用力剎車','鬆開油門或剎車，向您希望車輛前部前進的方向轉向','加速以快速恢復牽引力','向任何方向猛打方向盤'],exp:'從打滑中恢復：鬆開油門或剎車（不要猛剎車，這會加重打滑），然後向您希望前輪朝向的方向轉向——這就是「轉向打滑方向」。對於後輪打滑，向後輪滑動的方向轉向。保持冷靜，使用平穩、有控制的操作。'},
  es:{q:'Si su vehículo comienza a patinar, ¿qué debe hacer generalmente?',opts:['Dirija en la dirección opuesta al patinaje y frene fuerte','Suelte el gas o el freno, dirija en la dirección en que quiere que vaya la parte delantera del vehículo','Acelere para recuperar tracción rápidamente','Gire el volante bruscamente en cualquier dirección'],exp:'Para recuperarse de un patinaje: suelte el gas o el freno (no frene fuerte ya que empeora el patinaje), luego dirija en la dirección en que quiere que vayan las ruedas delanteras — esto es "dirigir hacia el patinaje". Para patinajes de ruedas traseras, dirija en la dirección en que se deslizan las ruedas traseras.'},
  ans:1
},
{
  id:365, cat:'speed',
  en:{q:'What is the maximum speed limit on most California interstate highways?',opts:['55 mph','65 mph','70 mph','75 mph'],exp:'Most California interstate highways have a maximum speed limit of 65 mph, though some rural sections allow 70 mph where posted. The speed limit for trucks (over 3 tons) and vehicles pulling trailers is 55 mph on all freeways, regardless of the posted car limit.'},
  zh:{q:'加州大多数州际高速公路的最高限速是多少？',opts:['55英里/小时','65英里/小时','70英里/小时','75英里/小时'],exp:'加州大多数州际高速公路的最高限速为65英里/小时，但某些农村路段允许标注的70英里/小时。卡车（超过3吨）和拖车的速度限制在所有高速公路上为55英里/小时，无论标注的轿车限速如何。'},
  zhTW:{q:'加州大多數州際高速公路的最高限速是多少？',opts:['55英里/小時','65英里/小時','70英里/小時','75英里/小時'],exp:'加州大多數州際高速公路的最高限速為65英里/小時，但某些農村路段允許標注的70英里/小時。卡車（超過3噸）和拖車的速度限制在所有高速公路上為55英里/小時，無論標注的轎車限速如何。'},
  es:{q:'¿Cuál es el límite de velocidad máximo en la mayoría de las autopistas interestatales de California?',opts:['55 mph','65 mph','70 mph','75 mph'],exp:'La mayoría de las autopistas interestatales de California tienen un límite máximo de velocidad de 65 mph, aunque algunas secciones rurales permiten 70 mph donde está publicado. El límite de velocidad para camiones (más de 3 toneladas) y vehículos que jalan remolques es de 55 mph en todas las autopistas.'},
  ans:1
},
{
  id:366, cat:'dui',
  en:{q:'A driver under 21 is stopped and tests at a BAC of 0.02%. What happens?',opts:['Nothing — 0.02% is below the legal limit for all drivers','The officer must observe the driver for 15 minutes and re-test','License suspension under the Zero Tolerance law — 0.01% BAC or higher is illegal for under-21 drivers','Only a verbal warning for such a low BAC'],exp:'California\'s Zero Tolerance law (CVC 23136) makes it illegal for anyone under 21 to drive with a BAC of 0.01% or higher. A first offense results in a 1-year license suspension. This is stricter than the 0.08% limit for adults because young drivers are at greater risk.'},
  zh:{q:'一名21岁以下的驾驶员被拦截，测试BAC为0.02%。会发生什么？',opts:['没什么——0.02%低于所有驾驶员的法定限制','执法人员必须观察驾驶员15分钟并重新测试','根据零容忍法吊销驾照——21岁以下驾驶员BAC达到0.01%或更高均违法','如此低的BAC只会收到口头警告'],exp:'加州零容忍法（车辆法典23136）规定21岁以下任何人以0.01%或更高的BAC驾驶均违法。首次违规导致驾照被吊销1年。这比成年人的0.08%限制更严格，因为年轻驾驶员面临更大风险。'},
  zhTW:{q:'一名21歲以下的駕駛員被攔截，測試BAC為0.02%。會發生什麼？',opts:['沒什麼——0.02%低於所有駕駛員的法定限制','執法人員必須觀察駕駛員15分鐘並重新測試','根據零容忍法吊銷駕照——21歲以下駕駛員BAC達到0.01%或更高均違法','如此低的BAC只會收到口頭警告'],exp:'加州零容忍法（車輛法典23136）規定21歲以下任何人以0.01%或更高的BAC駕駛均違法。首次違規導致駕照被吊銷1年。這比成年人的0.08%限制更嚴格，因為年輕駕駛員面臨更大風險。'},
  es:{q:'Un conductor menor de 21 años es detenido y prueba con un BAC de 0.02%. ¿Qué sucede?',opts:['Nada — 0.02% está por debajo del límite legal para todos los conductores','El oficial debe observar al conductor por 15 minutos y volver a probar','Suspensión de licencia bajo la ley de Tolerancia Cero — BAC de 0.01% o más es ilegal para menores de 21','Solo una advertencia verbal por un BAC tan bajo'],exp:'La ley de Tolerancia Cero de California (CVC 23136) hace ilegal que cualquier persona menor de 21 años conduzca con un BAC de 0.01% o más. Una primera ofensa resulta en suspensión de licencia de 1 año.'},
  ans:2
},
{
  id:367, cat:'parking',
  en:{q:'You are parking uphill with a curb. Which way should you turn your wheels?',opts:['Turn wheels away from the curb (to the left/uphill)','Turn wheels into the curb (to the right/downhill)','Keep wheels straight','It does not matter which way you turn the wheels'],exp:'When parking uphill with a curb: turn your front wheels AWAY from the curb (to the left). If the car rolls backward, the wheel will catch the curb and stop the car. When parking downhill with a curb: turn wheels INTO the curb (right). Without a curb, always turn toward the road edge.'},
  zh:{q:'您在有路缘的上坡处停车，方向盘应转向哪边？',opts:['将方向盘转离路缘（向左/向上坡方向）','将方向盘转向路缘（向右/向下坡方向）','保持方向盘直行','方向盘转向哪边都没关系'],exp:'在有路缘的上坡处停车：将前轮转离路缘（向左）。如果车辆向后滚动，车轮会卡住路缘并停车。在有路缘的下坡处停车：将车轮转向路缘（向右）。没有路缘时，始终转向道路边缘。'},
  zhTW:{q:'您在有路緣的上坡處停車，方向盤應轉向哪邊？',opts:['將方向盤轉離路緣（向左/向上坡方向）','將方向盤轉向路緣（向右/向下坡方向）','保持方向盤直行','方向盤轉向哪邊都沒關係'],exp:'在有路緣的上坡處停車：將前輪轉離路緣（向左）。如果車輛向後滾動，車輪會卡住路緣並停車。在有路緣的下坡處停車：將車輪轉向路緣（向右）。沒有路緣時，始終轉向道路邊緣。'},
  es:{q:'Está estacionando cuesta arriba con bordillo. ¿Hacia dónde debe girar sus ruedas?',opts:['Gire las ruedas lejos del bordillo (a la izquierda/cuesta arriba)','Gire las ruedas hacia el bordillo (a la derecha/cuesta abajo)','Mantenga las ruedas rectas','No importa hacia dónde gire las ruedas'],exp:'Al estacionar cuesta arriba con bordillo: gire las ruedas LEJOS del bordillo (a la izquierda). Si el auto rueda hacia atrás, la rueda se enganchará al bordillo y detendrá el auto. Al estacionar cuesta abajo con bordillo: gire las ruedas HACIA el bordillo (a la derecha).'},
  ans:0
},
{
  id:368, cat:'highway',
  en:{q:'When driving on the freeway at night, when should you switch from high beams to low beams?',opts:['Never — use high beams at all times on the freeway','When you are within 500 feet of an oncoming vehicle or within 300 feet behind another vehicle','Only in fog or rain','When instructed by a freeway sign'],exp:'California law requires you to dim your high beams to low beams when: within 500 feet of an oncoming vehicle (so you don\'t blind them) or within 300 feet behind another vehicle (to avoid blinding the driver in their mirrors).'},
  zh:{q:'在高速公路上夜间驾驶时，何时应该从远光灯切换到近光灯？',opts:['从不——在高速公路上始终使用远光灯','当您与对向车辆距离500英尺以内，或跟在另一辆车300英尺以内时','仅在雾或雨中','当高速公路标志指示时'],exp:'加州法律要求您在以下情况下将远光灯调暗为近光灯：与对向车辆距离500英尺以内（以免使其目盲）或在另一辆车300英尺以内（以避免通过后视镜使驾驶员目盲）。'},
  zhTW:{q:'在高速公路上夜間駕駛時，何時應該從遠光燈切換到近光燈？',opts:['從不——在高速公路上始終使用遠光燈','當您與對向車輛距離500英尺以內，或跟在另一輛車300英尺以內時','僅在霧或雨中','當高速公路標誌指示時'],exp:'加州法律要求您在以下情況下將遠光燈調暗為近光燈：與對向車輛距離500英尺以內（以免使其目盲）或在另一輛車300英尺以內（以避免通過後視鏡使駕駛員目盲）。'},
  es:{q:'Al conducir en la autopista de noche, ¿cuándo debe cambiar de luces altas a luces bajas?',opts:['Nunca — use luces altas en todo momento en la autopista','Cuando está a 500 pies de un vehículo que viene o a 300 pies detrás de otro vehículo','Solo en niebla o lluvia','Cuando una señal de autopista lo indique'],exp:'La ley de California requiere que atenúe las luces altas a bajas cuando: está a 500 pies de un vehículo que viene (para no cegarlo) o a 300 pies detrás de otro vehículo (para evitar cegar al conductor en sus espejos).'},
  ans:1
},
{
  id:369, cat:'signs',
  en:{q:'What does an orange construction sign indicate?',opts:['A permanent road hazard','Temporary traffic control in a work zone — workers and equipment may be present','A detour to the nearest freeway','An area where speeds are permanently lowered'],exp:'Orange signs indicate construction or work zones with temporary traffic control measures. These areas typically have reduced speed limits and workers present. In California, fines are doubled in work zones when workers are present. Pay close attention to flaggers and temporary signs.'},
  zh:{q:'橙色施工标志表示什么？',opts:['永久性道路危险','施工区的临时交通控制——工人和设备可能在场','绕道至最近的高速公路','永久降低速度的区域'],exp:'橙色标志表示有临时交通控制措施的施工区或工作区。这些区域通常速度限制降低且有工人在场。在加州，当工人在场时，施工区的罚款翻倍。密切注意旗手和临时标志。'},
  zhTW:{q:'橙色施工標誌表示什麼？',opts:['永久性道路危險','施工區的臨時交通控制——工人和設備可能在場','繞道至最近的高速公路','永久降低速度的區域'],exp:'橙色標誌表示有臨時交通控制措施的施工區或工作區。這些區域通常速度限制降低且有工人在場。在加州，當工人在場時，施工區的罰款翻倍。密切注意旗手和臨時標誌。'},
  es:{q:'¿Qué indica una señal de construcción naranja?',opts:['Un peligro permanente en la carretera','Control de tráfico temporal en una zona de trabajo — pueden haber trabajadores y equipos','Un desvío hacia la autopista más cercana','Un área donde las velocidades se reducen permanentemente'],exp:'Las señales naranjas indican zonas de construcción o trabajo con medidas temporales de control de tráfico. Estas áreas típicamente tienen límites de velocidad reducidos y trabajadores presentes. En California, las multas se duplican en zonas de trabajo cuando hay trabajadores.'},
  ans:1
},
{
  id:370, cat:'laws',
  en:{q:'How long must you signal before making a turn in California?',opts:['At least 50 feet before the turn','At least 100 feet before the turn on surface streets; 200+ feet on freeways','At least 25 feet before the turn','Signaling is recommended but not legally required'],exp:'California law requires signaling at least 100 feet before turning on surface streets. On freeways and highways, you should signal well in advance — typically at least 200 feet or 5 seconds before your lane change or exit. Failing to signal is a traffic infraction.'},
  zh:{q:'在加州，转弯前必须提前多远打转向灯？',opts:['转弯前至少50英尺','地面道路上转弯前至少100英尺；高速公路上至少200英尺以上','转弯前至少25英尺','打转向灯是建议但非法律要求'],exp:'加州法律要求在地面道路上转弯前至少提前100英尺打转向灯。在高速公路上，应提前充足时间打转向灯——通常在变道或出口前至少200英尺或5秒。未打转向灯是交通违规。'},
  zhTW:{q:'在加州，轉彎前必須提前多遠打轉向燈？',opts:['轉彎前至少50英尺','地面道路上轉彎前至少100英尺；高速公路上至少200英尺以上','轉彎前至少25英尺','打轉向燈是建議但非法律要求'],exp:'加州法律要求在地面道路上轉彎前至少提前100英尺打轉向燈。在高速公路上，應提前充足時間打轉向燈——通常在變道或出口前至少200英尺或5秒。未打轉向燈是交通違規。'},
  es:{q:'¿Con cuánta anticipación debe señalizar antes de girar en California?',opts:['Al menos 50 pies antes del giro','Al menos 100 pies antes en calles locales; 200+ pies en autopistas','Al menos 25 pies antes del giro','Señalizar es recomendado pero no legalmente requerido'],exp:'La ley de California requiere señalizar al menos 100 pies antes de girar en calles locales. En autopistas, debe señalizar con suficiente anticipación — típicamente al menos 200 pies o 5 segundos antes de su cambio de carril o salida. No señalizar es una infracción de tráfico.'},
  ans:1
},

{
  id:371, cat:'safety',
  en:{q:'What should you do if your brakes fail while driving?',opts:['Immediately turn off the ignition','Pump the brakes rapidly, downshift, and use the emergency/parking brake gradually — steer toward a safe area','Swerve into the nearest barrier to slow down','Hold the brake pedal to the floor and wait'],exp:'If brakes fail: 1) Pump the brakes rapidly — this can restore hydraulic pressure. 2) Downshift to use engine braking. 3) Apply the emergency/parking brake gradually (not all at once or you may skid). 4) Look for a safe escape route — uphill ramps, open fields, or brush. Honk and use hazard lights.'},
  zh:{q:'行驶中刹车失灵，您应该怎么做？',opts:['立即关闭点火开关','快速踩刹车，降档，逐渐使用驻车制动——向安全区域驾驶','朝最近的障碍物偏转以减速','将刹车踏板踩到底等待'],exp:'刹车失灵时：1）快速踩踏刹车——这可以恢复液压。2）降档使用发动机制动。3）逐渐施加驻车制动（不要一次用力，否则可能打滑）。4）寻找安全逃生路线——上坡道、开阔地或灌木丛。鸣喇叭并使用危险警示灯。'},
  zhTW:{q:'行駛中剎車失靈，您應該怎麼做？',opts:['立即關閉點火開關','快速踩剎車，降檔，逐漸使用駐車制動——向安全區域駕駛','朝最近的障礙物偏轉以減速','將剎車踏板踩到底等待'],exp:'剎車失靈時：1）快速踩踏剎車——這可以恢復液壓。2）降檔使用發動機制動。3）逐漸施加駐車制動（不要一次用力，否則可能打滑）。4）尋找安全逃生路線——上坡道、開闊地或灌木叢。鳴喇叭並使用危險警示燈。'},
  es:{q:'¿Qué debe hacer si los frenos fallan mientras conduce?',opts:['Apague el encendido inmediatamente','Bombee los frenos rápidamente, reduzca la marcha y use el freno de emergencia gradualmente — dirija hacia un área segura','Gire hacia la barrera más cercana para frenar','Mantenga el pedal del freno al piso y espere'],exp:'Si los frenos fallan: 1) Bombee los frenos rápidamente — esto puede restaurar la presión hidráulica. 2) Reduzca la marcha para usar el freno del motor. 3) Aplique el freno de emergencia gradualmente. 4) Busque una ruta de escape segura. Toque la bocina y use luces de emergencia.'},
  ans:1
},
{
  id:372, cat:'laws',
  en:{q:'In California, children under what age must ride in an approved child safety seat in the rear seat?',opts:['Under 4 years old and under 40 pounds','Under 8 years old OR under 4 feet 9 inches tall','Under 6 years old','Under 5 years old or under 60 pounds'],exp:'California law requires children under 8 years old OR under 4 feet 9 inches tall to ride in an appropriate child safety seat in the back seat. Infants must be in rear-facing seats until age 2 (unless the child exceeds the seat\'s height/weight limits). Violations carry significant fines.'},
  zh:{q:'在加州，多大以下的儿童必须坐在后座的经批准儿童安全座椅中？',opts:['4岁以下且体重低于40磅','8岁以下或身高低于4英尺9英寸','6岁以下','5岁以下或体重低于60磅'],exp:'加州法律要求8岁以下或身高低于4英尺9英寸的儿童坐在后座的适当儿童安全座椅中。婴儿必须使用后向座椅直到2岁（除非儿童超过座椅的身高/重量限制）。违规将面临重大罚款。'},
  zhTW:{q:'在加州，多大以下的兒童必須坐在後座的經批准兒童安全座椅中？',opts:['4歲以下且體重低於40磅','8歲以下或身高低於4英尺9英寸','6歲以下','5歲以下或體重低於60磅'],exp:'加州法律要求8歲以下或身高低於4英尺9英寸的兒童坐在後座的適當兒童安全座椅中。嬰兒必須使用後向座椅直到2歲（除非兒童超過座椅的身高/重量限制）。違規將面臨重大罰款。'},
  es:{q:'En California, ¿los niños menores de qué edad deben viajar en una silla de seguridad para niños aprobada en el asiento trasero?',opts:['Menores de 4 años y menos de 40 libras','Menores de 8 años O menores de 4 pies 9 pulgadas de altura','Menores de 6 años','Menores de 5 años o menos de 60 libras'],exp:'La ley de California requiere que los niños menores de 8 años O menores de 4 pies 9 pulgadas de altura viajen en una silla de seguridad apropiada en el asiento trasero. Los bebés deben estar en asientos orientados hacia atrás hasta los 2 años.'},
  ans:1
},
{
  id:373, cat:'rightofway',
  en:{q:'You are driving on a road and see a fire truck approaching from behind with lights and sirens on. What must you do?',opts:['Speed up to clear the road ahead','Immediately pull to the right edge of the road and stop','Slow down to 25 mph and keep moving','Pull to the left if there is more room'],exp:'When an emergency vehicle with lights/sirens approaches from any direction, you must pull to the right edge of the road and stop, unless you are in an intersection (move through it first, then pull right and stop). Remain stopped until the emergency vehicle passes.'},
  zh:{q:'您在道路上行驶，看到消防车从后方带着灯光和警报声驶来。您必须怎么做？',opts:['加速清空前方道路','立即靠到道路右侧边缘停车','减速至25英里/小时并继续移动','如果左侧空间更大则靠左行驶'],exp:'当带有灯光/警报声的紧急车辆从任何方向驶来时，您必须靠到道路右侧边缘停车，除非您在路口（先通过路口，然后靠右停车）。保持停车直到紧急车辆通过。'},
  zhTW:{q:'您在道路上行駛，看到消防車從後方帶著燈光和警報聲駛來。您必須怎麼做？',opts:['加速清空前方道路','立即靠到道路右側邊緣停車','減速至25英里/小時並繼續移動','如果左側空間更大則靠左行駛'],exp:'當帶有燈光/警報聲的緊急車輛從任何方向駛來時，您必須靠到道路右側邊緣停車，除非您在路口（先通過路口，然後靠右停車）。保持停車直到緊急車輛通過。'},
  es:{q:'Conduce en una carretera y ve una ambulancia acercándose desde atrás con luces y sirenas. ¿Qué debe hacer?',opts:['Acelere para despejar el camino adelante','Orillese inmediatamente al lado derecho del camino y deténgase','Reduzca a 25 mph y siga moviéndose','Diríjase a la izquierda si hay más espacio'],exp:'Cuando un vehículo de emergencia con luces/sirenas se acerca desde cualquier dirección, debe orillarse al lado derecho del camino y detenerse, a menos que esté en una intersección (pásela primero, luego oríllese y deténgase). Permanezca detenido hasta que el vehículo de emergencia pase.'},
  ans:1
},
{
  id:374, cat:'signs',
  en:{q:'What does a green traffic signal mean?',opts:['You have the absolute right of way and may proceed without checking','You may proceed if the intersection is clear, but you must still yield to pedestrians and other vehicles already in the intersection','Speed up to get through before the light changes','Only trucks and large vehicles must stop'],exp:'A green light means you may proceed, but you must still yield to pedestrians crossing legally and to any vehicles already in the intersection. Green does not grant absolute right of way — you must make sure the intersection is clear before entering.'},
  zh:{q:'绿色交通信号灯意味着什么？',opts:['您有绝对优先权，可以不检查就前行','如果路口畅通，您可以前行，但仍须让行正在穿越的行人和已在路口的其他车辆','加速以在灯变之前通过','只有卡车和大型车辆必须停车'],exp:'绿灯意味着您可以前行，但仍须让行合法穿越的行人和已在路口的任何车辆。绿灯不给予绝对优先权——进入路口前必须确保路口畅通。'},
  zhTW:{q:'綠色交通信號燈意味著什麼？',opts:['您有絕對優先權，可以不檢查就前行','如果路口暢通，您可以前行，但仍須讓行正在穿越的行人和已在路口的其他車輛','加速以在燈變之前通過','只有卡車和大型車輛必須停車'],exp:'綠燈意味著您可以前行，但仍須讓行合法穿越的行人和已在路口的任何車輛。綠燈不給予絕對優先權——進入路口前必須確保路口暢通。'},
  es:{q:'¿Qué significa una señal de tráfico verde?',opts:['Tiene el derecho de paso absoluto y puede proceder sin verificar','Puede proceder si la intersección está despejada, pero aún debe ceder a los peatones y otros vehículos ya en la intersección','Acelere para cruzar antes de que cambie la luz','Solo los camiones y vehículos grandes deben detenerse'],exp:'Una luz verde significa que puede proceder, pero aún debe ceder el paso a los peatones que cruzan legalmente y a cualquier vehículo ya en la intersección. La luz verde no otorga derecho de paso absoluto — debe asegurarse de que la intersección esté despejada antes de entrar.'},
  ans:1
},
{
  id:375, cat:'speed',
  en:{q:'What is the speed limit in a school zone when children are present?',opts:['10 mph','15 mph','25 mph','35 mph'],exp:'The prima facie speed limit in a school zone in California is 25 mph when children are present or during school hours. Some school zones may have lower posted limits. Watch for crossing guards and school buses, and be prepared to stop.'},
  zh:{q:'当有儿童在场时，学校区的限速是多少？',opts:['10英里/小时','15英里/小时','25英里/小时','35英里/小时'],exp:'加州学校区在有儿童在场或上学时间的初步限速为25英里/小时。某些学校区可能有更低的标注限速。注意过路守卫和校车，准备停车。'},
  zhTW:{q:'當有兒童在場時，學校區的限速是多少？',opts:['10英里/小時','15英里/小時','25英里/小時','35英里/小時'],exp:'加州學校區在有兒童在場或上學時間的初步限速為25英里/小時。某些學校區可能有更低的標注限速。注意過路守衛和校車，準備停車。'},
  es:{q:'¿Cuál es el límite de velocidad en una zona escolar cuando hay niños presentes?',opts:['10 mph','15 mph','25 mph','35 mph'],exp:'El límite de velocidad prima facie en una zona escolar en California es 25 mph cuando hay niños presentes o durante el horario escolar. Algunas zonas escolares pueden tener límites más bajos publicados. Esté atento a los guardias de cruce y autobuses escolares.'},
  ans:2
},
{
  id:376, cat:'dui',
  en:{q:'Which of the following can impair your driving as much as alcohol?',opts:['Eating while driving','Prescription medications, over-the-counter drugs, or marijuana','Listening to music','Adjusting air conditioning'],exp:'Many prescription and over-the-counter medications can impair driving just as much as alcohol — including antihistamines, sleep aids, pain medications, and anxiety drugs. Marijuana also impairs driving, even when used medicinally. It is illegal to drive under the influence of any substance that impairs your driving.'},
  zh:{q:'以下哪项可以像酒精一样损害您的驾驶能力？',opts:['边开车边吃东西','处方药、非处方药或大麻','听音乐','调节空调'],exp:'许多处方药和非处方药可以像酒精一样损害驾驶——包括抗组胺药、安眠药、止痛药和抗焦虑药。大麻也会损害驾驶，即使是医疗用途。在任何损害驾驶能力的物质影响下驾驶都是违法的。'},
  zhTW:{q:'以下哪項可以像酒精一樣損害您的駕駛能力？',opts:['邊開車邊吃東西','處方藥、非處方藥或大麻','聽音樂','調節空調'],exp:'許多處方藥和非處方藥可以像酒精一樣損害駕駛——包括抗組胺藥、安眠藥、止痛藥和抗焦慮藥。大麻也會損害駕駛，即使是醫療用途。在任何損害駕駛能力的物質影響下駕駛都是違法的。'},
  es:{q:'¿Cuál de los siguientes puede deteriorar su conducción tanto como el alcohol?',opts:['Comer mientras conduce','Medicamentos recetados, de venta libre, o marihuana','Escuchar música','Ajustar el aire acondicionado'],exp:'Muchos medicamentos recetados y de venta libre pueden deteriorar la conducción tanto como el alcohol — incluyendo antihistamínicos, somníferos, analgésicos y medicamentos para la ansiedad. La marihuana también deteriora la conducción, incluso cuando se usa medicinalmente.'},
  ans:1
},
{
  id:377, cat:'parking',
  en:{q:'You are parked on a level street and want to leave. You are parallel parked between two cars. Which way do you pull out?',opts:['Accelerate forward quickly to avoid traffic','Turn wheels to the right and back up first, then turn left and pull out when safe','Always pull forward first, then reverse to straighten','It does not matter — either direction is equally safe'],exp:'When pulling out of a parallel parking space, first check for traffic and signal. Typically, back up close to the car behind (turning wheels right), then turn left and pull forward when there is a safe gap. Always check your blind spots and mirrors before moving.'},
  zh:{q:'您停在平坦街道上，想要离开。您被平行停在两辆车之间，如何驶出？',opts:['迅速向前加速以避开交通','将方向盘向右转先倒车，然后向左转在安全时驶出','先向前行驶，然后倒车调整','方向无所谓——两个方向同样安全'],exp:'从平行停车位驶出时，先检查交通并打转向灯。通常，向后靠近后车（将方向盘向右转），然后在有安全间隙时向左转并向前驶出。移动前始终检查盲点和后视镜。'},
  zhTW:{q:'您停在平坦街道上，想要離開。您被平行停在兩輛車之間，如何駛出？',opts:['迅速向前加速以避開交通','將方向盤向右轉先倒車，然後向左轉在安全時駛出','先向前行駛，然後倒車調整','方向無所謂——兩個方向同樣安全'],exp:'從平行停車位駛出時，先檢查交通並打轉向燈。通常，向後靠近後車（將方向盤向右轉），然後在有安全間隙時向左轉並向前駛出。移動前始終檢查盲點和後視鏡。'},
  es:{q:'Está estacionado en una calle nivelada y quiere salir. Está estacionado en paralelo entre dos autos. ¿Hacia dónde sale?',opts:['Acelere hacia adelante rápidamente para evitar el tráfico','Gire las ruedas a la derecha y retroceda primero, luego gire a la izquierda y salga cuando sea seguro','Siempre avance primero, luego retroceda para enderezar','No importa — cualquier dirección es igualmente segura'],exp:'Al salir de un espacio de estacionamiento en paralelo, primero verifique el tráfico y señalice. Típicamente, retroceda hacia el auto de atrás (girando las ruedas a la derecha), luego gire a la izquierda y avance cuando haya un espacio seguro.'},
  ans:1
},
{
  id:378, cat:'highway',
  en:{q:'What does "HOV lane" stand for and who may use it?',opts:['High-Output Vehicle — any vehicle with a large engine','High-Occupancy Vehicle — vehicles with 2 or more persons (or as posted), plus certain clean-air vehicles','Hazardous or Oversized Vehicle — trucks and wide loads','High-Override Vehicle — emergency vehicles only'],exp:'HOV stands for High-Occupancy Vehicle. California HOV lanes (also called "carpool" or "diamond" lanes) typically require 2 or more occupants unless otherwise posted. Some HOV lanes require 3 persons during peak hours. Certain clean-air vehicles with a special DMV sticker may also use HOV lanes.'},
  zh:{q:'"HOV车道"代表什么，谁可以使用它？',opts:['高输出车辆——任何大发动机车辆','高乘载率车辆——乘坐2人或以上的车辆（或按标注），加上某些清洁能源车辆','危险或超尺寸车辆——卡车和宽载','高优先级车辆——仅限紧急车辆'],exp:'HOV代表高乘载率车辆。加州HOV车道（也称为"拼车"或"钻石"车道）通常要求2名或以上乘客，除非另有标注。某些HOV车道在高峰时段要求3人。拥有特殊DMV贴纸的某些清洁能源车辆也可以使用HOV车道。'},
  zhTW:{q:'"HOV車道"代表什麼，誰可以使用它？',opts:['高輸出車輛——任何大發動機車輛','高乘載率車輛——乘坐2人或以上的車輛（或按標注），加上某些清潔能源車輛','危險或超尺寸車輛——卡車和寬載','高優先級車輛——僅限緊急車輛'],exp:'HOV代表高乘載率車輛。加州HOV車道（也稱為「拼車」或「鑽石」車道）通常要求2名或以上乘客，除非另有標注。某些HOV車道在高峰時段要求3人。擁有特殊DMV貼紙的某些清潔能源車輛也可以使用HOV車道。'},
  es:{q:'¿Qué significa "carril HOV" y quién puede usarlo?',opts:['Vehículo de Alto Rendimiento — cualquier vehículo con motor grande','Vehículo de Alta Ocupación — vehículos con 2 o más personas (o según lo publicado), más ciertos vehículos de aire limpio','Vehículo Peligroso o Sobredimensionado — camiones y cargas anchas','Vehículo de Alta Prioridad — solo vehículos de emergencia'],exp:'HOV significa Vehículo de Alta Ocupación. Los carriles HOV de California (también llamados carriles de "carpool" o "diamante") típicamente requieren 2 o más ocupantes a menos que se indique lo contrario. Ciertos vehículos de aire limpio con una calcomanía especial del DMV también pueden usar los carriles HOV.'},
  ans:1
},
{
  id:379, cat:'laws',
  en:{q:'If you are involved in a collision and there is no other party present (e.g., you hit a parked car), what must you do?',opts:['Drive away — there is no one to report to','Leave a note with your name, address, and phone number in a visible place on the damaged vehicle','Only report to police — you do not need to leave a note','Call DMV and wait for instructions'],exp:'If you hit an unattended vehicle, you must leave a note with your name, address, and phone number in a visible place (such as under the windshield wiper). You must also report the accident to police if property damage exceeds $1,000. Leaving the scene of an accident is a crime.'},
  zh:{q:'如果您卷入碰撞事故且没有其他当事人在场（例如，您撞了一辆停着的车），您必须怎么做？',opts:['开车离开——没有人需要向其报告','在受损车辆显眼位置留下含有您姓名、地址和电话号码的便条','只需向警察报告——您不需要留便条','致电DMV并等待指示'],exp:'如果您撞了一辆无人看管的车辆，您必须在显眼位置（如挡风玻璃刮水器下）留下含有您姓名、地址和电话号码的便条。如果财产损失超过$1,000，还必须向警察报告事故。逃离事故现场是犯罪行为。'},
  zhTW:{q:'如果您捲入碰撞事故且沒有其他當事人在場（例如，您撞了一輛停著的車），您必須怎麼做？',opts:['開車離開——沒有人需要向其報告','在受損車輛顯眼位置留下含有您姓名、地址和電話號碼的便條','只需向警察報告——您不需要留便條','致電DMV並等待指示'],exp:'如果您撞了一輛無人看管的車輛，您必須在顯眼位置（如擋風玻璃刮水器下）留下含有您姓名、地址和電話號碼的便條。如果財產損失超過$1,000，還必須向警察報告事故。逃離事故現場是犯罪行為。'},
  es:{q:'Si está involucrado en una colisión y no hay otra parte presente (por ejemplo, golpeó un auto estacionado), ¿qué debe hacer?',opts:['Manejarse — no hay nadie a quien reportar','Dejar una nota con su nombre, dirección y número de teléfono en un lugar visible del vehículo dañado','Solo reportar a la policía — no necesita dejar nota','Llamar al DMV y esperar instrucciones'],exp:'Si golpea un vehículo desatendido, debe dejar una nota con su nombre, dirección y número de teléfono en un lugar visible (como bajo el limpiaparabrisas). También debe reportar el accidente a la policía si el daño a la propiedad supera $1,000. Abandonar la escena de un accidente es un delito.'},
  ans:1
},
{
  id:380, cat:'safety',
  en:{q:'What is the safest headrest position to reduce whiplash injury in a rear-end collision?',opts:['Tilted back as far as possible','Centered directly behind your head with the top level with the top of your head','Pushed forward to the minimum position','Removed entirely for better visibility'],exp:'The headrest should be adjusted so the center is level with the top of your ears (approximately the top of your head), and the headrest should be as close to the back of your head as possible without touching it. This position minimizes whiplash (neck hyperextension) in rear-end collisions.'},
  zh:{q:'减少追尾碰撞中挥鞭伤的最安全头枕位置是什么？',opts:['尽可能向后倾斜','中心直接在您头部后方，顶部与您头顶齐平','推到最前位置','完全移除以改善视野'],exp:'头枕应调整到中心与您耳顶（大约头顶）齐平，并且头枕应尽可能靠近头部后方但不接触。这个位置可最小化追尾碰撞中的挥鞭伤（颈部过度伸展）。'},
  zhTW:{q:'減少追尾碰撞中揮鞭傷的最安全頭枕位置是什麼？',opts:['盡可能向後傾斜','中心直接在您頭部後方，頂部與您頭頂齊平','推到最前位置','完全移除以改善視野'],exp:'頭枕應調整到中心與您耳頂（大約頭頂）齊平，並且頭枕應盡可能靠近頭部後方但不接觸。這個位置可最小化追尾碰撞中的揮鞭傷（頸部過度伸展）。'},
  es:{q:'¿Cuál es la posición más segura del reposacabezas para reducir la lesión por latigazo en una colisión trasera?',opts:['Inclinado hacia atrás lo más posible','Centrado directamente detrás de su cabeza con la parte superior al nivel de la cima de su cabeza','Empujado hacia adelante a la posición mínima','Removido por completo para mejor visibilidad'],exp:'El reposacabezas debe ajustarse para que el centro esté al nivel de la parte superior de sus orejas (aproximadamente la cima de su cabeza), y el reposacabezas debe estar lo más cerca posible de la parte posterior de su cabeza sin tocarla. Esta posición minimiza el latigazo en colisiones traseras.'},
  ans:1
},

{
  id:381, cat:'laws',
  en:{q:'What does California\'s "move over" law require when you pass a stopped tow truck with amber lights flashing on a freeway?',opts:['Only slow down by 5 mph','Move over one lane away or slow to 20 mph below the posted speed limit','No action required for tow trucks — only emergency vehicles','Use hazard lights and maintain speed'],exp:'California\'s Move Over law (CVC 21809) applies to ALL vehicles with warning lights on the freeway shoulder: police, fire, ambulance, CHP, Caltrans, AND tow trucks. You must move over one lane (if safe) or reduce speed by 20 mph below the limit.'},
  zh:{q:'当您在高速公路上经过一辆停着并闪烁琥珀色灯光的拖车时，加州的"让行"法律要求您怎么做？',opts:['只需减速5英里/小时','向远处变换一条车道或减速至低于限速20英里/小时','拖车不需要采取行动——只有紧急车辆才需要','使用危险警示灯并保持速度'],exp:'加州让行法（车辆法典21809）适用于高速公路肩道上所有带警示灯的车辆：警察、消防、救护车、加州公路巡逻队、加州交通运输局和拖车。您必须变换一条车道（如果安全）或减速低于限速20英里/小时。'},
  zhTW:{q:'當您在高速公路上經過一輛停著並閃爍琥珀色燈光的拖車時，加州的「讓行」法律要求您怎麼做？',opts:['只需減速5英里/小時','向遠處變換一條車道或減速至低於限速20英里/小時','拖車不需要採取行動——只有緊急車輛才需要','使用危險警示燈並保持速度'],exp:'加州讓行法（車輛法典21809）適用於高速公路肩道上所有帶警示燈的車輛：警察、消防、救護車、加州公路巡邏隊、加州交通運輸局和拖車。您必須變換一條車道（如果安全）或減速低於限速20英里/小時。'},
  es:{q:'¿Qué requiere la ley de "ceder el paso" de California cuando pasa una grúa detenida con luces ámbar parpadeando en una autopista?',opts:['Solo reduzca 5 mph','Cámbiese un carril o reduzca a 20 mph por debajo del límite publicado','No se requiere acción para grúas — solo vehículos de emergencia','Use luces de emergencia y mantenga la velocidad'],exp:'La ley Ceder el Paso de California (CVC 21809) aplica a TODOS los vehículos con luces de advertencia en el arcén de la autopista: policía, bomberos, ambulancias, CHP, Caltrans Y grúas. Debe cambiarse un carril (si es seguro) o reducir la velocidad en 20 mph.'},
  ans:1
},
{
  id:382, cat:'signs',
  en:{q:'What does a rectangular white sign with black lettering typically indicate?',opts:['Warning of a hazard ahead','Regulatory information — a rule you must follow (e.g., speed limit, turn restrictions)','Information about services ahead','A recommended route'],exp:'Rectangular white signs with black lettering are regulatory signs — they tell you the rules you must follow, such as speed limits, turn restrictions, lane-use rules, and parking restrictions. Failing to obey a regulatory sign is a traffic violation.'},
  zh:{q:'白色底黑色文字的矩形标志通常表示什么？',opts:['前方有危险警告','法规信息——您必须遵守的规则（例如，限速、转弯限制）','前方服务信息','建议路线'],exp:'白色底黑色文字的矩形标志是法规标志——它们告诉您必须遵守的规则，如限速、转弯限制、车道使用规则和停车限制。不服从法规标志是交通违规。'},
  zhTW:{q:'白色底黑色文字的矩形標誌通常表示什麼？',opts:['前方有危險警告','法規信息——您必須遵守的規則（例如，限速、轉彎限制）','前方服務信息','建議路線'],exp:'白色底黑色文字的矩形標誌是法規標誌——它們告訴您必須遵守的規則，如限速、轉彎限制、車道使用規則和停車限制。不服從法規標誌是交通違規。'},
  es:{q:'¿Qué indica típicamente una señal rectangular blanca con letras negras?',opts:['Advertencia de un peligro adelante','Información regulatoria — una regla que debe seguir (por ejemplo, límite de velocidad, restricciones de giro)','Información sobre servicios adelante','Una ruta recomendada'],exp:'Las señales rectangulares blancas con letras negras son señales regulatorias — le dicen las reglas que debe seguir, como límites de velocidad, restricciones de giro, reglas de uso de carriles y restricciones de estacionamiento.'},
  ans:1
},
{
  id:383, cat:'rightofway',
  en:{q:'You are waiting to turn left. Oncoming traffic is heavy. When may you proceed?',opts:['When you can make the turn quickly enough','When you have waited 30 seconds','Only when there is a gap in traffic large enough to complete the turn safely, or when oncoming traffic stops','Whenever the car behind you honks'],exp:'You must yield to oncoming traffic when turning left. Only proceed when there is a sufficient gap in traffic to complete the turn safely without requiring oncoming vehicles to slow down or swerve. Never turn left in front of an oncoming vehicle just because you are impatient.'},
  zh:{q:'您在等候左转。对向交通繁忙。什么时候可以前进？',opts:['当您能足够快地完成转弯时','等候30秒后','只有当交通中有足够大的空隙可以安全完成转弯时，或对向交通停止时','每当后面的车鸣喇叭时'],exp:'左转时必须让行对向车辆。只有当交通中有足够空隙可以安全完成转弯而无需对向车辆减速或转向时才可前进。不要仅因为不耐烦就在对向车辆前面左转。'},
  zhTW:{q:'您在等候左轉。對向交通繁忙。什麼時候可以前進？',opts:['當您能足夠快地完成轉彎時','等候30秒後','只有當交通中有足夠大的空隙可以安全完成轉彎時，或對向交通停止時','每當後面的車鳴喇叭時'],exp:'左轉時必須讓行對向車輛。只有當交通中有足夠空隙可以安全完成轉彎而無需對向車輛減速或轉向時才可前進。不要僅因為不耐煩就在對向車輛前面左轉。'},
  es:{q:'Espera para girar a la izquierda. El tráfico que viene es intenso. ¿Cuándo puede proceder?',opts:['Cuando puede completar el giro lo suficientemente rápido','Después de esperar 30 segundos','Solo cuando hay un espacio en el tráfico lo suficientemente grande para completar el giro de manera segura, o cuando el tráfico que viene se detiene','Cuando el auto detrás toca la bocina'],exp:'Debe ceder el paso al tráfico que viene al girar a la izquierda. Solo proceda cuando haya un espacio suficiente en el tráfico para completar el giro de manera segura sin requerir que los vehículos que vienen reduzcan la velocidad o se desvíen.'},
  ans:2
},
{
  id:384, cat:'safety',
  en:{q:'At what blood alcohol level does driving ability begin to be impaired for most people?',opts:['0.08%','0.05%','0.02%','Any amount of alcohol can begin to affect driving'],exp:'Research shows that driving ability begins to decline at any level of alcohol consumption. Even below 0.08%, reaction time slows, judgment worsens, and multitasking ability decreases. This is why California law can charge DUI even below 0.08% if driving is actually impaired.'},
  zh:{q:'对于大多数人来说，在什么血液酒精水平下驾驶能力开始受损？',opts:['0.08%','0.05%','0.02%','任何量的酒精都可能开始影响驾驶'],exp:'研究表明，任何量的饮酒都会导致驾驶能力下降。即使低于0.08%，反应时间减慢、判断力变差，多任务处理能力下降。这就是为什么加州法律即使BAC低于0.08%，如果驾驶实际上受损，也可以指控DUI。'},
  zhTW:{q:'對於大多數人來說，在什麼血液酒精水平下駕駛能力開始受損？',opts:['0.08%','0.05%','0.02%','任何量的酒精都可能開始影響駕駛'],exp:'研究表明，任何量的飲酒都會導致駕駛能力下降。即使低於0.08%，反應時間減慢、判斷力變差，多任務處理能力下降。這就是為什麼加州法律即使BAC低於0.08%，如果駕駛實際上受損，也可以指控DUI。'},
  es:{q:'¿A qué nivel de alcohol en sangre comienza a deteriorarse la capacidad de conducción para la mayoría de las personas?',opts:['0.08%','0.05%','0.02%','Cualquier cantidad de alcohol puede comenzar a afectar la conducción'],exp:'La investigación muestra que la capacidad de conducción comienza a disminuir con cualquier nivel de consumo de alcohol. Incluso por debajo de 0.08%, el tiempo de reacción se ralentiza, el juicio empeora y la capacidad multitarea disminuye.'},
  ans:3
},
{
  id:385, cat:'speed',
  en:{q:'What is the prima facie speed limit near a senior center or blind persons\' facility when children or seniors are present?',opts:['15 mph','20 mph','25 mph','35 mph'],exp:'The prima facie speed limit near a senior center or facility for the blind is 25 mph when seniors or blind persons are present and the road is within 500–1,000 feet of the facility. This is similar to the school zone speed limit and requires similar caution.'},
  zh:{q:'当有老人或视障人士在场时，在老人中心或视障人士设施附近的初步限速是多少？',opts:['15英里/小时','20英里/小时','25英里/小时','35英里/小时'],exp:'当老人或视障人士在场且道路在设施500-1,000英尺范围内时，在老人中心或视障人士设施附近的初步限速为25英里/小时。这类似于学校区限速，需要同样的谨慎。'},
  zhTW:{q:'當有老人或視障人士在場時，在老人中心或視障人士設施附近的初步限速是多少？',opts:['15英里/小時','20英里/小時','25英里/小時','35英里/小時'],exp:'當老人或視障人士在場且道路在設施500-1,000英尺範圍內時，在老人中心或視障人士設施附近的初步限速為25英里/小時。這類似於學校區限速，需要同樣的謹慎。'},
  es:{q:'¿Cuál es el límite de velocidad prima facie cerca de un centro para personas mayores o instalación para personas ciegas cuando hay personas mayores o ciegas presentes?',opts:['15 mph','20 mph','25 mph','35 mph'],exp:'El límite de velocidad prima facie cerca de un centro para personas mayores o instalación para ciegos es 25 mph cuando hay personas mayores o ciegas presentes y la carretera está dentro de 500–1,000 pies de la instalación.'},
  ans:2
},
{
  id:386, cat:'parking',
  en:{q:'You want to park next to a yellow curb. What does a yellow curb mean?',opts:['No parking at any time','Commercial vehicle loading and unloading only, during posted hours — drivers must stay with the vehicle','Parking for disabled persons only','30-minute parking limit'],exp:'A yellow curb designates a loading zone for commercial vehicles during posted hours. The driver must remain with the vehicle (or be actively loading/unloading). In some areas, yellow curbs also apply to passenger vehicles for brief loading/unloading. Check posted signs for time limits.'},
  zh:{q:'您想停在黄色路缘旁边。黄色路缘意味着什么？',opts:['任何时候禁止停车','仅限在标注时间内商业车辆装卸，司机必须留在车辆旁','仅限残障人士停车','30分钟停车限制'],exp:'黄色路缘在标注时间内指定商业车辆装卸区。司机必须留在车辆旁（或正在积极装卸）。在某些地区，黄色路缘也适用于乘用车的短暂装卸。检查标注标志了解时间限制。'},
  zhTW:{q:'您想停在黃色路緣旁邊。黃色路緣意味著什麼？',opts:['任何時候禁止停車','僅限在標注時間內商業車輛裝卸，司機必須留在車輛旁','僅限殘障人士停車','30分鐘停車限制'],exp:'黃色路緣在標注時間內指定商業車輛裝卸區。司機必須留在車輛旁（或正在積極裝卸）。在某些地區，黃色路緣也適用於乘用車的短暫裝卸。檢查標注標誌了解時間限制。'},
  es:{q:'Quiere estacionar junto a un bordillo amarillo. ¿Qué significa un bordillo amarillo?',opts:['Sin estacionamiento en ningún momento','Carga y descarga de vehículos comerciales solamente, durante horas publicadas — los conductores deben quedarse con el vehículo','Estacionamiento solo para personas discapacitadas','Límite de estacionamiento de 30 minutos'],exp:'Un bordillo amarillo designa una zona de carga para vehículos comerciales durante las horas publicadas. El conductor debe permanecer con el vehículo (o estar cargando/descargando activamente). En algunas áreas, los bordillos amarillos también aplican a vehículos de pasajeros para carga/descarga breve.'},
  ans:1
},
{
  id:387, cat:'highway',
  en:{q:'When approaching a freeway exit, what should you do?',opts:['Begin slowing down on the freeway, then exit and slow further on the ramp if needed','Exit first, then brake hard on the ramp to slow to local street speed','It does not matter when you slow down','Only signal and slow down in the last 50 feet before the exit'],exp:'When taking a freeway exit: 1) Signal early, 2) Move to the right lane in advance, 3) Stay at freeway speed until you reach the deceleration lane or ramp, 4) Then reduce speed on the ramp to match local street speed. Braking hard on the freeway itself causes rear-end risks.'},
  zh:{q:'接近高速公路出口时，您应该怎么做？',opts:['在高速公路上开始减速，然后在需要时在匝道上进一步减速','先驶出，然后在匝道上猛刹车以减速到地面道路速度','减速时机无关紧要','只在出口前50英尺内打信号灯并减速'],exp:'下高速公路出口时：1）提前打信号灯，2）提前移至右侧车道，3）在高速公路上保持高速公路速度直到到达减速车道或匝道，4）然后在匝道上降速至地面道路速度。在高速公路本身猛刹车会造成追尾风险。'},
  zhTW:{q:'接近高速公路出口時，您應該怎麼做？',opts:['在高速公路上開始減速，然後在需要時在匝道上進一步減速','先駛出，然後在匝道上猛剎車以減速到地面道路速度','減速時機無關緊要','只在出口前50英尺內打信號燈並減速'],exp:'下高速公路出口時：1）提前打信號燈，2）提前移至右側車道，3）在高速公路上保持高速公路速度直到到達減速車道或匝道，4）然後在匝道上降速至地面道路速度。在高速公路本身猛剎車會造成追尾風險。'},
  es:{q:'Al acercarse a una salida de autopista, ¿qué debe hacer?',opts:['Comience a reducir la velocidad en la autopista, luego salga y siga reduciendo en la rampa si es necesario','Salga primero, luego frene fuerte en la rampa para reducir a la velocidad de la calle local','No importa cuándo reduce la velocidad','Solo señalice y reduzca en los últimos 50 pies antes de la salida'],exp:'Al tomar una salida de autopista: 1) Señalice temprano, 2) Muévase al carril derecho con anticipación, 3) Mantenga la velocidad de la autopista hasta el carril de desaceleración o la rampa, 4) Luego reduzca la velocidad en la rampa. Frenar fuerte en la autopista causa riesgos de colisión trasera.'},
  ans:0
},
{
  id:388, cat:'dui',
  en:{q:'You are pulled over and suspected of DUI. The officer asks you to take a preliminary alcohol screening (PAS) test. Are you required to take it?',opts:['Yes — all drivers must take it if asked','Only if you are over 21 and not on probation for DUI — you may refuse the PAS before arrest, but must take a chemical test after arrest','No — the PAS is always optional regardless of circumstances','Yes, but only if the officer has a warrant'],exp:'The PAS (preliminary alcohol screening) test is OPTIONAL for drivers over 21 who are not on DUI probation — you may legally refuse it before arrest. However, once arrested for DUI, you MUST submit to a chemical test (blood or breath) under implied consent law. Refusing after arrest results in mandatory license suspension.'},
  zh:{q:'您被拦截并怀疑DUI。执法官要求您进行初步酒精筛查（PAS）测试。您必须接受吗？',opts:['是的——所有驾驶员被要求时必须接受','只有当您年满21岁且不在DUI缓刑期间——您可以在被捕前拒绝PAS，但被捕后必须接受化学测试','不——无论情况如何，PAS始终是可选的','是的，但只有当执法官有逮捕令时'],exp:'对于年满21岁且不在DUI缓刑期间的驾驶员，PAS（初步酒精筛查）测试是可选的——您可以在被捕前合法拒绝。但是，一旦因DUI被捕，根据默示同意法，您必须接受化学测试（血液或呼气）。被捕后拒绝将导致强制吊销驾照。'},
  zhTW:{q:'您被攔截並懷疑DUI。執法官要求您進行初步酒精篩查（PAS）測試。您必須接受嗎？',opts:['是的——所有駕駛員被要求時必須接受','只有當您年滿21歲且不在DUI緩刑期間——您可以在被捕前拒絕PAS，但被捕後必須接受化學測試','不——無論情況如何，PAS始終是可選的','是的，但只有當執法官有逮捕令時'],exp:'對於年滿21歲且不在DUI緩刑期間的駕駛員，PAS（初步酒精篩查）測試是可選的——您可以在被捕前合法拒絕。但是，一旦因DUI被捕，根據默示同意法，您必須接受化學測試（血液或呼氣）。被捕後拒絕將導致強制吊銷駕照。'},
  es:{q:'Lo detienen y sospechan DUI. El oficial le pide que tome una prueba preliminar de alcohol (PAS). ¿Está obligado a tomarla?',opts:['Sí — todos los conductores deben tomarla si se les pide','Solo si tiene más de 21 años y no está en libertad condicional por DUI — puede rechazar la PAS antes del arresto, pero debe tomar una prueba química después del arresto','No — la PAS siempre es opcional independientemente de las circunstancias','Sí, pero solo si el oficial tiene una orden judicial'],exp:'La prueba PAS es OPCIONAL para conductores mayores de 21 años que no están en libertad condicional por DUI — puede negarla legalmente antes del arresto. Sin embargo, una vez arrestado por DUI, DEBE someterse a una prueba química (sangre o aliento) bajo la ley de consentimiento implícito.'},
  ans:1
},
{
  id:389, cat:'laws',
  en:{q:'What must you do when you see or hear an emergency vehicle approaching while you are in an intersection?',opts:['Stop immediately in the intersection','Clear the intersection first, then pull to the right and stop','Speed through the intersection to clear it faster','Stay in the intersection until the emergency vehicle passes'],exp:'If you are already in an intersection when an emergency vehicle approaches, do NOT stop there — you will block the emergency vehicle. Instead, proceed through the intersection, then immediately pull to the right edge of the road and stop. Remain stopped until the vehicle passes.'},
  zh:{q:'当您在路口时看到或听到紧急车辆驶来，您应该怎么做？',opts:['立即在路口停车','先通过路口，然后靠右停车','加速通过路口以更快清空它','在路口等候直到紧急车辆通过'],exp:'如果您已经在路口时紧急车辆驶来，不要在那里停车——您会阻挡紧急车辆。应先通过路口，然后立即靠到道路右侧边缘停车。保持停车直到车辆通过。'},
  zhTW:{q:'當您在路口時看到或聽到緊急車輛駛來，您應該怎麼做？',opts:['立即在路口停車','先通過路口，然後靠右停車','加速通過路口以更快清空它','在路口等候直到緊急車輛通過'],exp:'如果您已經在路口時緊急車輛駛來，不要在那裡停車——您會阻擋緊急車輛。應先通過路口，然後立即靠到道路右側邊緣停車。保持停車直到車輛通過。'},
  es:{q:'¿Qué debe hacer cuando ve u oye un vehículo de emergencia acercándose mientras está en una intersección?',opts:['Deténgase inmediatamente en la intersección','Despeje la intersección primero, luego orillese a la derecha y deténgase','Acelere a través de la intersección para despejarla más rápido','Quédese en la intersección hasta que pase el vehículo de emergencia'],exp:'Si ya está en una intersección cuando se acerca un vehículo de emergencia, NO se detenga allí — bloqueará el vehículo. En cambio, proceda a través de la intersección, luego orillese inmediatamente al lado derecho del camino y deténgase.'},
  ans:1
},
{
  id:390, cat:'safety',
  en:{q:'How should you adjust your driving when roads are wet after rain?',opts:['Maintain your normal speed — wet roads have minimal effect on modern vehicles','Increase following distance, reduce speed, and avoid sudden braking or sharp turns','Only adjust if there is standing water','Wet roads require no change from dry-road driving techniques'],exp:'Wet roads reduce tire traction dramatically. You should: reduce speed (especially on first rain — oil residue makes roads extra slippery), increase following distance to 4+ seconds, avoid sudden braking, acceleration, or sharp turns. Allow more time to stop — wet roads can double your stopping distance.'},
  zh:{q:'下雨后道路湿滑时，您应该如何调整驾驶？',opts:['保持正常速度——潮湿道路对现代车辆影响最小','增加跟车距离，降低速度，避免突然刹车或急转','只有在有积水时才调整','潮湿道路不需要改变干燥道路的驾驶技术'],exp:'潮湿道路大大降低轮胎抓地力。您应该：降低速度（尤其是第一场雨——油污残留使道路格外滑），将跟车距离增加到4秒以上，避免突然刹车、加速或急转。留出更多制动时间——潮湿道路可以使制动距离翻倍。'},
  zhTW:{q:'下雨後道路濕滑時，您應該如何調整駕駛？',opts:['保持正常速度——潮濕道路對現代車輛影響最小','增加跟車距離，降低速度，避免突然剎車或急轉','只有在有積水時才調整','潮濕道路不需要改變乾燥道路的駕駛技術'],exp:'潮濕道路大大降低輪胎抓地力。您應該：降低速度（尤其是第一場雨——油污殘留使道路格外滑），將跟車距離增加到4秒以上，避免突然剎車、加速或急轉。留出更多制動時間——潮濕道路可以使制動距離翻倍。'},
  es:{q:'¿Cómo debe ajustar su conducción cuando las carreteras están mojadas después de la lluvia?',opts:['Mantenga su velocidad normal — las carreteras mojadas tienen un efecto mínimo en los vehículos modernos','Aumente la distancia de seguimiento, reduzca la velocidad y evite el frenado repentino o giros bruscos','Solo ajuste si hay agua estancada','Las carreteras mojadas no requieren cambios respecto a las técnicas en carretera seca'],exp:'Las carreteras mojadas reducen dramáticamente la tracción de los neumáticos. Debe: reducir la velocidad, aumentar la distancia de seguimiento a 4+ segundos, evitar el frenado repentino, la aceleración o los giros bruscos. Las carreteras mojadas pueden duplicar la distancia de frenado.'},
  ans:1
},

{
  id:391, cat:'signs', sign:'stop',
  en:{q:'When you come to a stop sign with a white line painted on the road, where should you stop?',opts:['At the stop sign itself','At the white stop line, or if no line, before the crosswalk, or before the intersection','Anywhere within 10 feet of the sign','You may roll through if no traffic is present'],exp:'You must come to a complete stop at the white limit line (stop line) if one is painted. If there is no stop line, stop before the crosswalk. If there is no crosswalk, stop before the intersection where you can see clearly in all directions.'},
  zh:{q:'当您到达有白色停车线的停车标志处，应该在哪里停车？',opts:['在停车标志本身','在白色停车线处，如无停车线，则在人行横道前，或在路口前','在标志10英尺以内任何地方','如果没有车辆，可以慢慢通过'],exp:'如果有白色停车线（停止线），必须在该线处完全停车。如果没有停止线，在人行横道前停车。如果没有人行横道，在路口前能够清楚看到各方向的地方停车。'},
  zhTW:{q:'當您到達有白色停車線的停車標誌處，應該在哪裡停車？',opts:['在停車標誌本身','在白色停車線處，如無停車線，則在人行橫道前，或在路口前','在標誌10英尺以內任何地方','如果沒有車輛，可以慢慢通過'],exp:'如果有白色停車線（停止線），必須在該線處完全停車。如果沒有停止線，在人行橫道前停車。如果沒有人行橫道，在路口前能夠清楚看到各方向的地方停車。'},
  es:{q:'Cuando llega a una señal de alto con una línea blanca pintada en la carretera, ¿dónde debe detenerse?',opts:['En la señal de alto misma','En la línea de parada blanca, o si no hay línea, antes del cruce peatonal, o antes de la intersección','En cualquier lugar dentro de 10 pies de la señal','Puede pasar lentamente si no hay tráfico'],exp:'Debe detenerse completamente en la línea de límite blanca (línea de parada) si hay una pintada. Si no hay línea de parada, deténgase antes del cruce peatonal. Si no hay cruce peatonal, deténgase antes de la intersección donde pueda ver claramente en todas direcciones.'},
  ans:1
},
{
  id:392, cat:'laws',
  en:{q:'What is the consequence of getting 4 points on your California driving record within 12 months?',opts:['Only a warning letter from the DMV','License may be suspended as a negligent operator','Mandatory court appearance','Automatic license revocation'],exp:'California uses a point system. Accumulating 4 points in 12 months (or 6 in 24 months, or 8 in 36 months) can result in being declared a negligent operator, leading to license probation, suspension, or revocation. Moving violations typically add 1 point; more serious violations add 2 points.'},
  zh:{q:'在加州，12个月内在驾驶记录上积累4分有什么后果？',opts:['只有DMV发出的警告信','驾照可能因粗心驾驶员身份被吊销','强制出庭','自动吊销驾照'],exp:'加州使用积分制度。在12个月内积累4分（或24个月内6分，或36个月内8分）可能导致被认定为粗心驾驶员，导致驾照缓刑、吊销或撤销。交通违规通常添加1分；更严重的违规添加2分。'},
  zhTW:{q:'在加州，12個月內在駕駛記錄上積累4分有什麼後果？',opts:['只有DMV發出的警告信','駕照可能因粗心駕駛員身份被吊銷','強制出庭','自動吊銷駕照'],exp:'加州使用積分制度。在12個月內積累4分（或24個月內6分，或36個月內8分）可能導致被認定為粗心駕駛員，導致駕照緩刑、吊銷或撤銷。交通違規通常添加1分；更嚴重的違規添加2分。'},
  es:{q:'¿Cuál es la consecuencia de obtener 4 puntos en su historial de conducción de California dentro de 12 meses?',opts:['Solo una carta de advertencia del DMV','La licencia puede suspenderse como operador negligente','Comparecencia obligatoria ante el tribunal','Revocación automática de licencia'],exp:'California usa un sistema de puntos. Acumular 4 puntos en 12 meses (o 6 en 24 meses, o 8 en 36 meses) puede resultar en ser declarado operador negligente, llevando a libertad condicional, suspensión o revocación de la licencia.'},
  ans:1
},
{
  id:393, cat:'rightofway',
  en:{q:'A pedestrian is crossing at a marked crosswalk without a signal. Do they have the right of way?',opts:['Only if they are in the far lane','Yes — vehicles must yield to pedestrians in any crosswalk, marked or unmarked','Only if a crossing guard is present','No — pedestrians must wait for a gap in traffic'],exp:'In California, vehicles must yield to pedestrians crossing at marked crosswalks and also at unmarked crosswalks (at intersections). It is illegal to overtake and pass a vehicle that has stopped to let a pedestrian cross. Failing to yield to pedestrians in a crosswalk carries significant fines.'},
  zh:{q:'一名行人在没有信号的标记人行横道上穿越。他们有优先通行权吗？',opts:['只有当他们在最远车道时','是的——车辆必须在任何人行横道（无论是否标记）让行行人','只有当有过路守卫时','不——行人必须等待交通空隙'],exp:'在加州，车辆必须在标记的人行横道以及未标记的人行横道（在路口）让行行人。超越和通过已停车让行人通过的车辆是违法的。未能在人行横道让行行人将面临重大罚款。'},
  zhTW:{q:'一名行人在沒有信號的標記人行橫道上穿越。他們有優先通行權嗎？',opts:['只有當他們在最遠車道時','是的——車輛必須在任何人行橫道（無論是否標記）讓行行人','只有當有過路守衛時','不——行人必須等待交通空隙'],exp:'在加州，車輛必須在標記的人行橫道以及未標記的人行橫道（在路口）讓行行人。超越和通過已停車讓行人通過的車輛是違法的。未能在人行橫道讓行行人將面臨重大罰款。'},
  es:{q:'Un peatón cruza en un cruce peatonal marcado sin señal. ¿Tienen el derecho de paso?',opts:['Solo si están en el carril más lejano','Sí — los vehículos deben ceder el paso a los peatones en cualquier cruce, marcado o no marcado','Solo si hay un guardia de cruce','No — los peatones deben esperar un espacio en el tráfico'],exp:'En California, los vehículos deben ceder el paso a los peatones que cruzan en cruces peatonales marcados y también en cruces no marcados (en intersecciones). Es ilegal adelantar y pasar un vehículo que se ha detenido para dejar cruzar a un peatón.'},
  ans:1
},
{
  id:394, cat:'safety',
  en:{q:'What does it mean if the ABS (anti-lock braking system) light stays on while you are driving?',opts:['The ABS is actively preventing wheel lockup','There may be a malfunction — ABS may not function properly; have it inspected soon','ABS is disabled during normal driving','The brake fluid is low'],exp:'If the ABS warning light stays on while driving, it indicates a potential malfunction in the ABS system. The regular brakes will still work, but the anti-lock feature may not function. This means you could experience wheel lockup during hard braking. Have the system inspected promptly.'},
  zh:{q:'如果ABS（防抱死制动系统）警示灯在行驶时持续亮起，这意味着什么？',opts:['ABS正在积极防止车轮锁死','可能存在故障——ABS可能无法正常运行；尽快检查','ABS在正常驾驶时被禁用','刹车液不足'],exp:'如果ABS警示灯在行驶时持续亮起，表明ABS系统可能存在故障。普通刹车仍然有效，但防抱死功能可能无法正常运行。这意味着在猛刹车时可能发生车轮锁死。尽快检查系统。'},
  zhTW:{q:'如果ABS（防抱死制動系統）警示燈在行駛時持續亮起，這意味著什麼？',opts:['ABS正在積極防止車輪鎖死','可能存在故障——ABS可能無法正常運行；盡快檢查','ABS在正常駕駛時被禁用','剎車液不足'],exp:'如果ABS警示燈在行駛時持續亮起，表明ABS系統可能存在故障。普通剎車仍然有效，但防抱死功能可能無法正常運行。這意味著在猛剎車時可能發生車輪鎖死。盡快檢查系統。'},
  es:{q:'¿Qué significa si la luz de ABS (sistema antibloqueo de frenos) permanece encendida mientras conduce?',opts:['El ABS está previniendo activamente el bloqueo de ruedas','Puede haber un mal funcionamiento — el ABS puede no funcionar correctamente; inspecciónelo pronto','El ABS está desactivado durante la conducción normal','El líquido de frenos está bajo'],exp:'Si la luz de advertencia del ABS permanece encendida mientras conduce, indica un posible mal funcionamiento en el sistema ABS. Los frenos regulares seguirán funcionando, pero la función antibloqueo puede no operar. Esto significa que podría experimentar bloqueo de ruedas durante el frenado fuerte.'},
  ans:1
},
{
  id:395, cat:'speed',
  en:{q:'You are driving at 55 mph on a dry road. Approximately how many feet does it take to stop your car?',opts:['About 50 feet','About 130 feet','About 250 feet','About 400 feet'],exp:'At 55 mph on dry pavement, stopping distance is roughly 250 feet — about 80 feet of reaction distance (at 1.5 seconds) plus about 170 feet of braking distance. This is why the two-second following rule is important: you need enough space to react and stop safely.'},
  zh:{q:'您在干燥道路上以55英里/小时行驶。大约需要多少英尺才能停车？',opts:['约50英尺','约130英尺','约250英尺','约400英尺'],exp:'在干燥路面以55英里/小时行驶，制动距离约为250英尺——约80英尺的反应距离（1.5秒）加上约170英尺的制动距离。这就是两秒跟车规则重要的原因：您需要足够的空间来反应并安全停车。'},
  zhTW:{q:'您在乾燥道路上以55英里/小時行駛。大約需要多少英尺才能停車？',opts:['約50英尺','約130英尺','約250英尺','約400英尺'],exp:'在乾燥路面以55英里/小時行駛，制動距離約為250英尺——約80英尺的反應距離（1.5秒）加上約170英尺的制動距離。這就是兩秒跟車規則重要的原因：您需要足夠的空間來反應並安全停車。'},
  es:{q:'Conduce a 55 mph en una carretera seca. ¿Aproximadamente cuántos pies necesita para detener su auto?',opts:['Unos 50 pies','Unos 130 pies','Unos 250 pies','Unos 400 pies'],exp:'A 55 mph en pavimento seco, la distancia de parada es aproximadamente 250 pies — unos 80 pies de distancia de reacción (a 1.5 segundos) más aproximadamente 170 pies de distancia de frenado. Por eso la regla de seguimiento de dos segundos es importante.'},
  ans:2
},
{
  id:396, cat:'dui',
  en:{q:'After consuming alcohol, which activity is the most effective way to sober up quickly?',opts:['Drinking coffee','Taking a cold shower','Eating food','Time — only time reduces BAC'],exp:'Only time reduces blood alcohol concentration. The liver processes about one standard drink per hour regardless of any other actions. Coffee, cold showers, food, exercise, or fresh air do NOT speed up alcohol metabolism — they may make you feel more alert but your BAC remains unchanged.'},
  zh:{q:'饮酒后，哪种活动是快速清醒的最有效方法？',opts:['喝咖啡','洗冷水澡','吃东西','时间——只有时间能降低BAC'],exp:'只有时间能降低血液酒精浓度。肝脏每小时处理约一标准杯，无论采取什么其他措施。咖啡、冷水澡、食物、运动或新鲜空气都无法加速酒精代谢——它们可能让您感觉更清醒，但BAC保持不变。'},
  zhTW:{q:'飲酒後，哪種活動是快速清醒的最有效方法？',opts:['喝咖啡','洗冷水澡','吃東西','時間——只有時間能降低BAC'],exp:'只有時間能降低血液酒精濃度。肝臟每小時處理約一標準杯，無論採取什麼其他措施。咖啡、冷水澡、食物、運動或新鮮空氣都無法加速酒精代謝——它們可能讓您感覺更清醒，但BAC保持不變。'},
  es:{q:'Después de consumir alcohol, ¿cuál actividad es la más efectiva para recuperarse rápidamente?',opts:['Tomar café','Tomar una ducha fría','Comer comida','El tiempo — solo el tiempo reduce el BAC'],exp:'Solo el tiempo reduce la concentración de alcohol en sangre. El hígado procesa aproximadamente una bebida estándar por hora independientemente de otras acciones. El café, duchas frías, comida, ejercicio o aire fresco NO aceleran el metabolismo del alcohol.'},
  ans:3
},
{
  id:397, cat:'parking',
  en:{q:'You are driving and see a green curb. What does it mean?',opts:['No parking — fire lane','Short-term parking — usually 10 or 15 minutes as posted','Parking for disabled persons only','Commercial loading zone'],exp:'A green curb indicates short-term parking, usually 10 or 15 minutes as posted by a sign. Check the posted sign for the exact time limit. Green zones are often found near post offices, libraries, or businesses to encourage quick errands.'},
  zh:{q:'您在行驶中看到绿色路缘。这意味着什么？',opts:['禁止停车——消防通道','短期停车——通常如标志所示为10或15分钟','仅限残障人士停车','商业装卸区'],exp:'绿色路缘表示短期停车，通常如标志所示为10或15分钟。检查标注标志了解确切时间限制。绿色区域通常位于邮局、图书馆或商业场所附近，以鼓励快速办理事务。'},
  zhTW:{q:'您在行駛中看到綠色路緣。這意味著什麼？',opts:['禁止停車——消防通道','短期停車——通常如標誌所示為10或15分鐘','僅限殘障人士停車','商業裝卸區'],exp:'綠色路緣表示短期停車，通常如標誌所示為10或15分鐘。檢查標注標誌了解確切時間限制。綠色區域通常位於郵局、圖書館或商業場所附近，以鼓勵快速辦理事務。'},
  es:{q:'Conduce y ve un bordillo verde. ¿Qué significa?',opts:['Sin estacionamiento — carril de bomberos','Estacionamiento de corto plazo — generalmente 10 o 15 minutos según lo publicado','Estacionamiento solo para personas discapacitadas','Zona de carga comercial'],exp:'Un bordillo verde indica estacionamiento de corto plazo, generalmente 10 o 15 minutos según la señal publicada. Verifique la señal publicada para el límite de tiempo exacto. Las zonas verdes se encuentran frecuentemente cerca de correos, bibliotecas o negocios.'},
  ans:1
},
{
  id:398, cat:'highway',
  en:{q:'What should you do if you have a blowout (tire failure) on the freeway?',opts:['Brake hard to stop quickly','Grip the steering wheel firmly, ease off the gas gradually, do not brake suddenly, steer straight, then carefully pull to the right and stop','Turn on hazard lights and accelerate to reach the next exit','Immediately swerve to the shoulder'],exp:'During a blowout: 1) Grip the wheel firmly — the car may pull to one side, 2) Do NOT brake suddenly — this can cause a spinout, 3) Ease off the accelerator gradually, 4) Steer straight and maintain control, 5) Gently coast to the right shoulder and stop safely. Turn on hazard lights.'},
  zh:{q:'如果您在高速公路上爆胎，您应该怎么做？',opts:['猛刹车以快速停车','紧握方向盘，逐渐松油门，不要突然刹车，保持直行，然后小心靠右停车','开启危险警示灯并加速到达下一个出口','立即转向肩道'],exp:'爆胎时：1）紧握方向盘——车辆可能向一侧偏转，2）不要突然刹车——这可能导致甩尾，3）逐渐松开油门，4）保持直行维持控制，5）轻轻滑行至右侧肩道并安全停车。开启危险警示灯。'},
  zhTW:{q:'如果您在高速公路上爆胎，您應該怎麼做？',opts:['猛剎車以快速停車','緊握方向盤，逐漸鬆油門，不要突然剎車，保持直行，然後小心靠右停車','開啟危險警示燈並加速到達下一個出口','立即轉向肩道'],exp:'爆胎時：1）緊握方向盤——車輛可能向一側偏轉，2）不要突然剎車——這可能導致甩尾，3）逐漸鬆開油門，4）保持直行維持控制，5）輕輕滑行至右側肩道並安全停車。開啟危險警示燈。'},
  es:{q:'¿Qué debe hacer si sufre una explosión de neumático (fallo de llanta) en la autopista?',opts:['Frene fuerte para detenerse rápidamente','Sujete firmemente el volante, suelte el gas gradualmente, no frene repentinamente, dirija recto, luego orillese cuidadosamente a la derecha y deténgase','Encienda las luces de emergencia y acelere hacia la próxima salida','Gire inmediatamente hacia el arcén'],exp:'Durante una explosión de neumático: 1) Sujete el volante firmemente, 2) NO frene repentinamente — puede causar un giro incontrolado, 3) Suelte el acelerador gradualmente, 4) Dirija recto y mantenga el control, 5) Deslícese suavemente hacia el arcén derecho y deténgase. Encienda las luces de emergencia.'},
  ans:1
},
{
  id:399, cat:'laws',
  en:{q:'What is the "basic speed law" in California?',opts:['You must always drive at the posted speed limit, no more and no less','You must never drive at a speed greater than what is reasonable and safe for current conditions, regardless of posted limit','You may exceed the speed limit by 10% if it is safe to do so','The posted limit is the minimum safe speed'],exp:'The Basic Speed Law (CVC 22350) states that you must never drive faster than is safe for current conditions — regardless of the posted speed limit. Even if the limit is 65 mph, if conditions (fog, rain, heavy traffic, poor road) make that speed unsafe, you must slow down.'},
  zh:{q:'加州的"基本速度法"是什么？',opts:['您必须始终以限速行驶，不多不少','您绝不能以超过当前条件下合理安全的速度行驶，无论限速如何','如果安全，可以超速10%','限速是最低安全速度'],exp:'基本速度法（车辆法典22350）规定，无论限速如何，您绝不能以超过当前条件下合理安全的速度行驶。即使限速为65英里/小时，如果条件（大雾、大雨、繁重交通、路况差）使该速度不安全，您必须减速。'},
  zhTW:{q:'加州的「基本速度法」是什麼？',opts:['您必須始終以限速行駛，不多不少','您絕不能以超過當前條件下合理安全的速度行駛，無論限速如何','如果安全，可以超速10%','限速是最低安全速度'],exp:'基本速度法（車輛法典22350）規定，無論限速如何，您絕不能以超過當前條件下合理安全的速度行駛。即使限速為65英里/小時，如果條件（大霧、大雨、繁重交通、路況差）使該速度不安全，您必須減速。'},
  es:{q:'¿Cuál es la "ley de velocidad básica" en California?',opts:['Siempre debe conducir al límite de velocidad publicado, ni más ni menos','Nunca debe conducir a una velocidad mayor de lo que es razonable y seguro para las condiciones actuales, independientemente del límite publicado','Puede exceder el límite de velocidad en un 10% si es seguro','El límite publicado es la velocidad mínima segura'],exp:'La Ley de Velocidad Básica (CVC 22350) establece que nunca debe conducir más rápido de lo que sea seguro para las condiciones actuales, independientemente del límite de velocidad publicado. Incluso si el límite es 65 mph, si las condiciones hacen que esa velocidad no sea segura, debe reducir la velocidad.'},
  ans:1
},
{
  id:400, cat:'safety',
  en:{q:'You are driving and a large truck is following very closely behind you (tailgating). What is the safest response?',opts:['Brake suddenly to show the driver to back off','Speed up to increase the distance between you','Gradually move to another lane or let the truck pass; do not slow down abruptly','Flash your brake lights repeatedly to warn the truck driver'],exp:'When being tailgated by a large truck: do not brake suddenly (the truck needs much more stopping distance than a car), do not engage the driver. The safest response is to gradually move to another lane when safe to let them pass, or gently reduce speed to increase the gap and give them room.'},
  zh:{q:'您正在行驶，一辆大卡车在您后面紧跟（逼车）。最安全的应对方式是什么？',opts:['突然刹车以提醒驾驶员后退','加速以增加您们之间的距离','逐渐移至另一车道或让卡车通过；不要突然减速','反复闪刹车灯警告卡车司机'],exp:'当大卡车尾随时：不要突然刹车（卡车比轿车需要更长的制动距离），不要与司机对抗。最安全的应对方式是在安全时逐渐移至另一车道让其通过，或轻轻减速以增加间距给予其空间。'},
  zhTW:{q:'您正在行駛，一輛大卡車在您後面緊跟（逼車）。最安全的應對方式是什麼？',opts:['突然剎車以提醒駕駛員後退','加速以增加您們之間的距離','逐漸移至另一車道或讓卡車通過；不要突然減速','反復閃剎車燈警告卡車司機'],exp:'當大卡車尾隨時：不要突然剎車（卡車比轎車需要更長的制動距離），不要與司機對抗。最安全的應對方式是在安全時逐漸移至另一車道讓其通過，或輕輕減速以增加間距給予其空間。'},
  es:{q:'Conduce y un camión grande le sigue muy de cerca (hostigamiento). ¿Cuál es la respuesta más segura?',opts:['Frene repentinamente para mostrarle al conductor que se retire','Acelere para aumentar la distancia entre ustedes','Muévase gradualmente a otro carril o deje pasar al camión; no reduzca la velocidad abruptamente','Destelle las luces de freno repetidamente para advertir al conductor del camión'],exp:'Cuando un camión grande le siga: no frene repentinamente (el camión necesita mucha más distancia de frenado que un auto), no se enfrente al conductor. La respuesta más segura es moverse gradualmente a otro carril cuando sea seguro para dejarlo pasar, o reducir suavemente la velocidad para aumentar el espacio.'},
  ans:2
},

{
  id:401, cat:'signs',
  en:{q:'What does a flashing yellow light at an intersection mean?',opts:['Stop and wait for a green light','Slow down and proceed with caution','Yield to all traffic before entering','The light is broken — treat as a four-way stop'],exp:'A flashing yellow light means slow down and proceed with caution. You do not need to stop, but you should look carefully for cross traffic before entering the intersection. It is often used at less-busy intersections or during off-peak hours.'},
  zh:{q:'路口闪烁的黄色灯光意味着什么？',opts:['停车等待绿灯','减速并谨慎前行','进入前让行所有车辆','灯损坏了——按四向停车处理'],exp:'闪烁的黄色灯光意味着减速并谨慎前行。您不需要停车，但在进入路口前应仔细观察横向交通。它通常用于较不繁忙的路口或非高峰时段。'},
  zhTW:{q:'路口閃爍的黃色燈光意味著什麼？',opts:['停車等待綠燈','減速並謹慎前行','進入前讓行所有車輛','燈損壞了——按四向停車處理'],exp:'閃爍的黃色燈光意味著減速並謹慎前行。您不需要停車，但在進入路口前應仔細觀察橫向交通。它通常用於較不繁忙的路口或非高峰時段。'},
  es:{q:'¿Qué significa una luz amarilla parpadeante en una intersección?',opts:['Deténgase y espere la luz verde','Reduzca la velocidad y proceda con precaución','Ceda el paso a todo el tráfico antes de entrar','La luz está rota — trátela como una parada de cuatro vías'],exp:'Una luz amarilla parpadeante significa reducir la velocidad y proceder con precaución. No necesita detenerse, pero debe mirar con cuidado el tráfico cruzado antes de entrar a la intersección.'},
  ans:1
},
{
  id:402, cat:'laws',
  en:{q:'When must you turn on your headlights in California while driving?',opts:['Only after complete darkness','30 minutes after sunset and until 30 minutes before sunrise; also in poor visibility conditions','Only when the speedometer exceeds 45 mph','Headlights are optional during daytime'],exp:'California law requires headlights from 30 minutes after sunset to 30 minutes before sunrise. Also required any time visibility is less than 1,000 feet (fog, heavy rain, dust), when using windshield wipers due to weather, and in tunnels. Daytime running lights do not satisfy this requirement.'},
  zh:{q:'在加州驾驶时，什么情况下必须开启前灯？',opts:['只有在完全黑暗后','日落后30分钟至日出前30分钟；以及能见度差的条件下','只有当速度超过45英里/小时时','白天前灯是可选的'],exp:'加州法律要求在日落后30分钟至日出前30分钟开启前灯。能见度低于1,000英尺（大雾、大雨、尘埃）时、因天气使用雨刷时，以及在隧道中也需要。日间行车灯不满足此要求。'},
  zhTW:{q:'在加州駕駛時，什麼情況下必須開啟前燈？',opts:['只有在完全黑暗後','日落後30分鐘至日出前30分鐘；以及能見度差的條件下','只有當速度超過45英里/小時時','白天前燈是可選的'],exp:'加州法律要求在日落後30分鐘至日出前30分鐘開啟前燈。能見度低於1,000英尺（大霧、大雨、塵埃）時、因天氣使用雨刷時，以及在隧道中也需要。日間行車燈不滿足此要求。'},
  es:{q:'¿Cuándo debe encender los faros en California mientras conduce?',opts:['Solo después de la oscuridad completa','30 minutos después del atardecer y hasta 30 minutos antes del amanecer; también en condiciones de visibilidad deficiente','Solo cuando el velocímetro supera las 45 mph','Los faros son opcionales durante el día'],exp:'La ley de California requiere faros desde 30 minutos después del atardecer hasta 30 minutos antes del amanecer. También requeridos cuando la visibilidad es menor de 1,000 pies, cuando usa limpiaparabrisas por clima, y en túneles.'},
  ans:1
},
{
  id:403, cat:'rightofway',
  en:{q:'A streetcar (light rail) is stopped and its doors are open. What must you do?',opts:['Pass on the left side quickly','Stop behind the rear door of the streetcar and wait until it moves and doors are closed before passing','Honk and proceed if pedestrians are not visible','Only stop if a sign instructs you to'],exp:'When a streetcar or light-rail vehicle stops and opens its doors, you must stop behind the rear doors of the vehicle and wait until all passengers have boarded or exited and the doors are closed before passing. Pedestrians crossing to/from the streetcar have the right of way.'},
  zh:{q:'一辆有轨电车（轻轨）停下来且门已打开。您必须怎么做？',opts:['从左侧快速通过','停在电车后门后方等候，直到电车移动且门关闭后再通过','如果看不到行人则鸣喇叭通过','只有当标志指示时才停车'],exp:'当有轨电车或轻轨停车并开门时，您必须停在车辆后门后方等候，直到所有乘客上下车且门关闭后再通过。穿越至/从有轨电车的行人有优先通行权。'},
  zhTW:{q:'一輛有軌電車（輕軌）停下來且門已打開。您必須怎麼做？',opts:['從左側快速通過','停在電車後門後方等候，直到電車移動且門關閉後再通過','如果看不到行人則鳴喇叭通過','只有當標誌指示時才停車'],exp:'當有軌電車或輕軌停車並開門時，您必須停在車輛後門後方等候，直到所有乘客上下車且門關閉後再通過。穿越至/從有軌電車的行人有優先通行權。'},
  es:{q:'Un tranvía (tren ligero) se detiene y sus puertas están abiertas. ¿Qué debe hacer?',opts:['Pase por el lado izquierdo rápidamente','Deténgase detrás de la puerta trasera del tranvía y espere hasta que se mueva y las puertas estén cerradas antes de pasar','Toque la bocina y proceda si no hay peatones visibles','Solo deténgase si una señal lo indica'],exp:'Cuando un tranvía o tren ligero se detiene y abre sus puertas, debe detenerse detrás de las puertas traseras del vehículo y esperar hasta que todos los pasajeros hayan abordado o descendido y las puertas estén cerradas. Los peatones que cruzan tienen derecho de paso.'},
  ans:1
},
{
  id:404, cat:'safety',
  en:{q:'What should you do if you are involved in a collision and someone is injured?',opts:['Leave the scene to find a phone','Do not move injured persons unless they are in immediate danger; call 911 and provide first aid if trained','Move all injured persons to the sidewalk immediately','Try to take injured persons to the hospital yourself rather than calling 911'],exp:'After a collision with injuries: 1) Call 911 immediately, 2) Do NOT move injured persons unless they are in immediate danger (moving can worsen spinal injuries), 3) Provide first aid if trained, 4) Stay at the scene — leaving is a crime. Render reasonable assistance.'},
  zh:{q:'如果您卷入碰撞事故且有人受伤，您应该怎么做？',opts:['离开现场去找电话','除非受伤者处于即时危险中，否则不要移动他们；拨打911并在接受过培训的情况下提供急救','立即将所有受伤者移至人行道','尝试自己将受伤者送往医院而不是拨打911'],exp:'碰撞事故造成伤亡后：1）立即拨打911，2）不要移动受伤者，除非他们处于即时危险中（移动可能加重脊髓损伤），3）如接受过培训则提供急救，4）留在现场——离开是犯罪行为。提供合理援助。'},
  zhTW:{q:'如果您捲入碰撞事故且有人受傷，您應該怎麼做？',opts:['離開現場去找電話','除非受傷者處於即時危險中，否則不要移動他們；撥打911並在接受過培訓的情況下提供急救','立即將所有受傷者移至人行道','嘗試自己將受傷者送往醫院而不是撥打911'],exp:'碰撞事故造成傷亡後：1）立即撥打911，2）不要移動受傷者，除非他們處於即時危險中（移動可能加重脊髓損傷），3）如接受過培訓則提供急救，4）留在現場——離開是犯罪行為。提供合理援助。'},
  es:{q:'¿Qué debe hacer si está involucrado en una colisión y alguien resulta herido?',opts:['Abandone la escena para encontrar un teléfono','No mueva a los heridos a menos que estén en peligro inmediato; llame al 911 y brinde primeros auxilios si está capacitado','Mueva a todos los heridos a la acera inmediatamente','Lleve a los heridos al hospital usted mismo en lugar de llamar al 911'],exp:'Después de una colisión con heridos: 1) Llame al 911 inmediatamente, 2) NO mueva a los heridos a menos que estén en peligro inmediato, 3) Brinde primeros auxilios si está capacitado, 4) Permanezca en la escena — abandonarla es un delito.'},
  ans:1
},
{
  id:405, cat:'speed',
  en:{q:'What is the maximum speed limit for vehicles towing trailers on California freeways?',opts:['65 mph','60 mph','55 mph','50 mph'],exp:'Vehicles towing trailers (and trucks over 3 tons) are limited to 55 mph on all California freeways, regardless of the posted speed limit for other vehicles. This applies even if the freeway posts 65 or 70 mph for regular vehicles.'},
  zh:{q:'在加州高速公路上，拖挂拖车的车辆最高限速是多少？',opts:['65英里/小时','60英里/小时','55英里/小时','50英里/小时'],exp:'拖挂拖车的车辆（以及超过3吨的卡车）在加州所有高速公路上限速55英里/小时，无论其他车辆的限速如何。即使高速公路对普通车辆标注65或70英里/小时，这也适用。'},
  zhTW:{q:'在加州高速公路上，拖掛拖車的車輛最高限速是多少？',opts:['65英里/小時','60英里/小時','55英里/小時','50英里/小時'],exp:'拖掛拖車的車輛（以及超過3噸的卡車）在加州所有高速公路上限速55英里/小時，無論其他車輛的限速如何。即使高速公路對普通車輛標注65或70英里/小時，這也適用。'},
  es:{q:'¿Cuál es el límite máximo de velocidad para vehículos que remolcan tráileres en las autopistas de California?',opts:['65 mph','60 mph','55 mph','50 mph'],exp:'Los vehículos que remolcan tráileres (y camiones de más de 3 toneladas) están limitados a 55 mph en todas las autopistas de California, independientemente del límite de velocidad publicado para otros vehículos.'},
  ans:2
},
{
  id:406, cat:'dui',
  en:{q:'How long does a DUI conviction stay on your California driving record?',opts:['3 years','5 years','7 years','10 years'],exp:'A DUI conviction stays on your California DMV driving record for 10 years. During this period, any subsequent DUI is counted as a repeat offense with much harsher penalties. After 10 years it may be removed from the DMV record, though it may remain on criminal records longer.'},
  zh:{q:'在加州，DUI定罪在您的驾驶记录上保留多久？',opts:['3年','5年','7年','10年'],exp:'DUI定罪在加州DMV驾驶记录上保留10年。在此期间，任何后续DUI都被视为重复违规，处罚更为严厉。10年后可能从DMV记录中删除，但在犯罪记录上可能保留更长时间。'},
  zhTW:{q:'在加州，DUI定罪在您的駕駛記錄上保留多久？',opts:['3年','5年','7年','10年'],exp:'DUI定罪在加州DMV駕駛記錄上保留10年。在此期間，任何後續DUI都被視為重複違規，處罰更為嚴厲。10年後可能從DMV記錄中刪除，但在犯罪記錄上可能保留更長時間。'},
  es:{q:'¿Cuánto tiempo permanece una condena por DUI en su historial de conducción de California?',opts:['3 años','5 años','7 años','10 años'],exp:'Una condena por DUI permanece en su historial de conducción del DMV de California durante 10 años. Durante este período, cualquier DUI subsiguiente se cuenta como una ofensa repetida con penalidades mucho más severas.'},
  ans:3
},
{
  id:407, cat:'parking',
  en:{q:'You see a fire hydrant on the sidewalk. How close to it may you park?',opts:['10 feet','15 feet','20 feet','25 feet'],exp:'California law prohibits parking within 15 feet of a fire hydrant. This ensures firefighters can quickly access the hydrant in an emergency. Even if there are no markings on the curb, parking within 15 feet is illegal.'},
  zh:{q:'您看到人行道上有消防栓。您可以停在距其多近的地方？',opts:['10英尺','15英尺','20英尺','25英尺'],exp:'加州法律禁止停车在消防栓15英尺以内。这确保消防员在紧急情况下能够快速使用消防栓。即使路缘上没有标记，在15英尺以内停车也是违法的。'},
  zhTW:{q:'您看到人行道上有消防栓。您可以停在距其多近的地方？',opts:['10英尺','15英尺','20英尺','25英尺'],exp:'加州法律禁止停車在消防栓15英尺以內。這確保消防員在緊急情況下能夠快速使用消防栓。即使路緣上沒有標記，在15英尺以內停車也是違法的。'},
  es:{q:'Ve una boca de incendios en la acera. ¿A qué distancia puede estacionarse?',opts:['10 pies','15 pies','20 pies','25 pies'],exp:'La ley de California prohíbe estacionarse dentro de 15 pies de una boca de incendios. Esto asegura que los bomberos puedan acceder rápidamente a la boca en una emergencia. Incluso sin marcas en el bordillo, estacionarse dentro de 15 pies es ilegal.'},
  ans:1
},
{
  id:408, cat:'highway',
  en:{q:'What is a "transition lane" or "buffer zone" on a California freeway?',opts:['A lane exclusively for emergency vehicles','A short lane that connects two parallel roads to allow gradual speed adjustment','A lane reserved for carpooling during rush hour','A lane with lower speed limits for trucks'],exp:'A transition lane (buffer or acceleration/deceleration lane) is a short additional lane added where roads join or diverge. It allows vehicles to accelerate to freeway speed before merging, or decelerate after exiting, without abruptly entering or leaving the main traffic flow.'},
  zh:{q:'加州高速公路上的"过渡车道"或"缓冲区"是什么？',opts:['专为紧急车辆的车道','连接两条平行道路以逐渐调整速度的短车道','高峰时段专供拼车的车道','限速较低供卡车使用的车道'],exp:'"过渡车道"（缓冲区或加/减速车道）是在道路交汇或分叉处增加的短辅助车道。它允许车辆在合并前加速至高速公路速度，或在驶出后减速，而不会突然进入或离开主交通流。'},
  zhTW:{q:'加州高速公路上的「過渡車道」或「緩衝區」是什麼？',opts:['專為緊急車輛的車道','連接兩條平行道路以逐漸調整速度的短車道','高峰時段專供拼車的車道','限速較低供卡車使用的車道'],exp:'「過渡車道」（緩衝區或加/減速車道）是在道路交匯或分叉處增加的短輔助車道。它允許車輛在合併前加速至高速公路速度，或在駛出後減速，而不會突然進入或離開主交通流。'},
  es:{q:'¿Qué es un "carril de transición" o "zona de amortiguamiento" en una autopista de California?',opts:['Un carril exclusivamente para vehículos de emergencia','Un carril corto que conecta dos carreteras paralelas para permitir el ajuste gradual de velocidad','Un carril reservado para viajes compartidos durante las horas pico','Un carril con límites de velocidad más bajos para camiones'],exp:'Un carril de transición (zona de amortiguamiento o carril de aceleración/desaceleración) es un carril adicional corto donde las carreteras se unen o divergen. Permite a los vehículos acelerar a la velocidad de la autopista antes de fusionarse, o desacelerar después de salir.'},
  ans:1
},
{
  id:409, cat:'laws',
  en:{q:'Under California law, at what age can a person get a provisional (probationary) driver\'s license?',opts:['15 years old','16 years old','17 years old','18 years old'],exp:'In California, you can get a provisional driver\'s license at 16 years old, after holding an instruction permit for at least 6 months, completing 50 hours of supervised driving (10 at night), and passing the driving test. The provisional license has restrictions on passengers and night driving.'},
  zh:{q:'根据加州法律，一个人在多大年龄可以获得临时（试用期）驾驶执照？',opts:['15岁','16岁','17岁','18岁'],exp:'在加州，持有学员许可证至少6个月、完成50小时有监督驾驶（其中10小时夜间）并通过驾驶考试后，可以在16岁时获得临时驾驶执照。临时驾照对乘客和夜间驾驶有限制。'},
  zhTW:{q:'根據加州法律，一個人在多大年齡可以獲得臨時（試用期）駕駛執照？',opts:['15歲','16歲','17歲','18歲'],exp:'在加州，持有學員許可證至少6個月、完成50小時有監督駕駛（其中10小時夜間）並通過駕駛考試後，可以在16歲時獲得臨時駕駛執照。臨時駕照對乘客和夜間駕駛有限制。'},
  es:{q:'Bajo la ley de California, ¿a qué edad puede una persona obtener una licencia de conducir provisional (de prueba)?',opts:['15 años','16 años','17 años','18 años'],exp:'En California, puede obtener una licencia de conducir provisional a los 16 años, después de tener un permiso de instrucción durante al menos 6 meses, completar 50 horas de conducción supervisada (10 de noche) y aprobar el examen de manejo. La licencia provisional tiene restricciones sobre pasajeros y conducción nocturna.'},
  ans:1
},
{
  id:410, cat:'safety',
  en:{q:'What is hydroplaning, and how can you prevent it?',opts:['A car overheating on wet roads — prevent it by keeping coolant full','When tires lose contact with wet road surface and ride on water — prevent by slowing down and keeping tires properly inflated','When brakes overheat from driving through puddles — use engine braking','When windshield wipers fail in rain — always carry spare wipers'],exp:'Hydroplaning occurs when your tires travel on a film of water rather than gripping the road surface, causing loss of steering and braking control. To prevent: slow down in rain (especially on standing water), ensure tires have adequate tread depth, keep tires properly inflated, and avoid sudden steering or braking.'},
  zh:{q:'什么是水漂（hydroplaning），如何预防？',opts:['汽车在湿润道路上过热——通过保持冷却液充足来预防','轮胎失去与湿润路面的接触并在水面上滑行——通过减速并保持轮胎气压适当来预防','刹车在穿越水坑时过热——使用发动机制动','雨天挡风玻璃雨刷失效——始终携带备用雨刷'],exp:'水漂发生在轮胎在水膜上行驶而不是抓住路面时，导致失去转向和制动控制。预防方法：在雨中减速（尤其是积水处），确保轮胎有足够胎纹深度，保持轮胎气压适当，避免突然转向或刹车。'},
  zhTW:{q:'什麼是水漂（hydroplaning），如何預防？',opts:['汽車在濕潤道路上過熱——通過保持冷卻液充足來預防','輪胎失去與濕潤路面的接觸並在水面上滑行——通過減速並保持輪胎氣壓適當來預防','剎車在穿越水坑時過熱——使用發動機制動','雨天擋風玻璃雨刷失效——始終攜帶備用雨刷'],exp:'水漂發生在輪胎在水膜上行駛而不是抓住路面時，導致失去轉向和制動控制。預防方法：在雨中減速（尤其是積水處），確保輪胎有足夠胎紋深度，保持輪胎氣壓適當，避免突然轉向或剎車。'},
  es:{q:'¿Qué es el aquaplaning y cómo puede prevenirlo?',opts:['Un auto que se sobrecalienta en carreteras mojadas — prevenirlo manteniendo el refrigerante lleno','Cuando los neumáticos pierden contacto con la superficie mojada y se deslizan sobre el agua — prevenirlo reduciendo la velocidad y manteniendo los neumáticos bien inflados','Cuando los frenos se sobrecalientan al pasar por charcos — use el freno del motor','Cuando los limpiaparabrisas fallan bajo la lluvia — siempre lleve repuestos'],exp:'El aquaplaning ocurre cuando los neumáticos viajan sobre una película de agua en lugar de agarrar la superficie del camino, causando pérdida de control de dirección y frenado. Para prevenir: reduzca la velocidad bajo la lluvia, asegure profundidad de banda de rodadura adecuada, mantenga los neumáticos bien inflados y evite maniobras bruscas.'},
  ans:1
},

,
{
  id:411, cat:'signs',
  en:{q:'What does a pennant-shaped (triangular) sign on the left side of the road mean?',opts:['Yield to oncoming traffic','No passing zone begins here','Merge left ahead','Slow down — curve ahead'],exp:'A pennant-shaped sign (a yellow triangle pointing to the right) posted on the left side of the road marks the beginning of a no-passing zone. You must not overtake or pass other vehicles in this section of road.'},
  zh:{q:'道路左侧的三角形（旗帜形）标志意味着什么？',opts:['让行对向来车','禁止超车区从此开始','前方向左合并','减速——前方有弯道'],exp:'道路左侧的三角形（黄色向右三角形）标志标记禁止超车区的开始。在这段路上不得超越其他车辆。'},
  zhTW:{q:'道路左側的三角形（旗幟形）標誌意味著什麼？',opts:['讓行對向來車','禁止超車區從此開始','前方向左合併','減速——前方有彎道'],exp:'道路左側的三角形（黃色向右三角形）標誌標記禁止超車區的開始。在這段路上不得超越其他車輛。'},
  es:{q:'¿Qué significa un letrero en forma de banderín (triangular) en el lado izquierdo de la carretera?',opts:['Ceda el paso al tráfico en sentido contrario','Comienza zona de no adelantamiento','Fusión a la izquierda adelante','Reduzca la velocidad — curva adelante'],exp:'Un letrero en forma de banderín (triángulo amarillo apuntando a la derecha) colocado en el lado izquierdo de la carretera marca el inicio de una zona de no adelantamiento. No puede adelantar otros vehículos en esta sección.'},
  ans:1
},
{
  id:412, cat:'rightofway',
  en:{q:'A blind pedestrian with a white cane or guide dog is crossing the street. What must you do?',opts:['Slow down and pass carefully if the path is clear','Yield completely — stop and wait until they have crossed the lane','Honk briefly to alert them and continue','Wait only if they are in a marked crosswalk'],exp:'California law requires you to yield the right-of-way to a blind person using a white cane or guide dog at any intersection or crosswalk — marked or unmarked. You must stop and wait until they have fully crossed your lane before proceeding.'},
  zh:{q:'一位持白色手杖或导盲犬的盲人正在过街。你必须怎么做？',opts:['减速，如果路径清晰可小心通过','完全让行——停下来等待直到他们穿越车道','简短鸣笛提醒他们并继续','只在有标记人行横道时才等待'],exp:'加州法律要求在任何路口或人行横道（有标记或无标记），你必须让行给使用白色手杖或导盲犬的盲人。必须停下来等待他们完全穿越你的车道后再继续行驶。'},
  zhTW:{q:'一位持白色手杖或導盲犬的盲人正在過街。你必須怎麼做？',opts:['減速，如果路徑清晰可小心通過','完全讓行——停下來等待直到他們穿越車道','簡短鳴笛提醒他們並繼續','只在有標記人行橫道時才等待'],exp:'加州法律要求在任何路口或人行橫道（有標記或無標記），你必須讓行給使用白色手杖或導盲犬的盲人。必須停下來等待他們完全穿越你的車道後再繼續行駛。'},
  es:{q:'Un peatón ciego con bastón blanco o perro guía está cruzando la calle. ¿Qué debe hacer?',opts:['Disminuya y pase con cuidado si el camino está despejado','Ceda completamente — deténgase y espere hasta que hayan cruzado el carril','Toque brevemente el claxon para alertarlos y continúe','Espere solo si están en un cruce marcado'],exp:'La ley de California requiere que ceda el paso a una persona ciega usando bastón blanco o perro guía en cualquier intersección o cruce — marcado o no marcado. Debe detenerse y esperar hasta que hayan cruzado completamente su carril.'},
  ans:1
},
{
  id:413, cat:'speed',
  en:{q:'What is the prima facie speed limit in a residential district in California?',opts:['20 mph','25 mph','30 mph','35 mph'],exp:'The prima facie (assumed) speed limit in a residence district in California is 25 mph unless otherwise posted. This applies even if no sign is present. A residence district is defined as an area where buildings are used primarily for dwelling purposes along the highway.'},
  zh:{q:'加州住宅区的法定速度限制是多少？',opts:['20英里/小时','25英里/小时','30英里/小时','35英里/小时'],exp:'加州住宅区的法定（推定）速度限制为25英里/小时，除非另有标志。即使没有标志也适用。住宅区定义为沿公路建筑物主要用于居住目的的区域。'},
  zhTW:{q:'加州住宅區的法定速度限制是多少？',opts:['20英里/小時','25英里/小時','30英里/小時','35英里/小時'],exp:'加州住宅區的法定（推定）速度限制為25英里/小時，除非另有標誌。即使沒有標誌也適用。住宅區定義為沿公路建築物主要用於居住目的的區域。'},
  es:{q:'¿Cuál es el límite de velocidad prima facie en un distrito residencial en California?',opts:['20 mph','25 mph','30 mph','35 mph'],exp:'El límite de velocidad prima facie (asumido) en un distrito residencial en California es 25 mph a menos que se indique lo contrario. Aplica incluso si no hay letrero. Un distrito residencial se define como un área donde los edificios se usan principalmente para vivienda a lo largo de la carretera.'},
  ans:1
},
{
  id:414, cat:'parking',
  en:{q:'When parallel parking downhill with a curb, which direction should your front wheels be turned?',opts:['Straight ahead','Away from the curb (left, toward traffic)','Toward the curb (right)','It does not matter — just set the parking brake'],exp:'When parking downhill next to a curb, turn your front wheels toward the curb (to the right). If the vehicle rolls forward, the curb will stop it. When parking downhill without a curb, turn wheels away from traffic. When parking uphill with a curb, turn wheels away from the curb so they catch on the curb if the vehicle rolls back.'},
  zh:{q:'在有路缘石的下坡路段平行停车时，前轮应该朝哪个方向转？',opts:['直行方向','远离路缘石（向左，朝向交通流）','朝向路缘石（向右）','无所谓——只需拉手刹'],exp:'在有路缘石的下坡路段停车时，将前轮朝向路缘石（向右）。如果车辆向前滚动，路缘石会阻止它。在无路缘石的下坡路段停车时，轮胎远离交通方向。在有路缘石的上坡路段停车时，轮胎远离路缘石，这样如果车辆向后滚动，路缘石会挡住轮胎。'},
  zhTW:{q:'在有路緣石的下坡路段平行停車時，前輪應該朝哪個方向轉？',opts:['直行方向','遠離路緣石（向左，朝向交通流）','朝向路緣石（向右）','無所謂——只需拉手剎'],exp:'在有路緣石的下坡路段停車時，將前輪朝向路緣石（向右）。如果車輛向前滾動，路緣石會阻止它。在無路緣石的下坡路段停車時，輪胎遠離交通方向。在有路緣石的上坡路段停車時，輪胎遠離路緣石，這樣如果車輛向後滾動，路緣石會擋住輪胎。'},
  es:{q:'Al estacionar en paralelo cuesta abajo con bordillo, ¿en qué dirección deben girar sus ruedas delanteras?',opts:['Recto hacia adelante','Lejos del bordillo (izquierda, hacia el tráfico)','Hacia el bordillo (derecha)','No importa — solo ponga el freno de mano'],exp:'Al estacionar cuesta abajo junto a un bordillo, gire las ruedas delanteras hacia el bordillo (a la derecha). Si el vehículo rueda hacia adelante, el bordillo lo detendrá. Al estacionar cuesta abajo sin bordillo, gire las ruedas lejos del tráfico. Al estacionar cuesta arriba con bordillo, gire las ruedas lejos del bordillo para que lo detengan si el vehículo rueda hacia atrás.'},
  ans:2
},
{
  id:415, cat:'laws',
  en:{q:'In California, when are you required to use your headlights?',opts:['Only after dark (sunset to sunrise)','Whenever visibility is less than 1,000 feet, including when using windshield wipers in rain or snow','Only in tunnels and at night','Whenever driving on a freeway'],exp:'California law requires headlights from 30 minutes after sunset to 30 minutes before sunrise, and any time visibility is less than 1,000 feet. Importantly, you must also use headlights any time you use your windshield wipers due to weather conditions (rain, snow, fog), not just when it is dark.'},
  zh:{q:'在加州，什么情况下必须开车头灯？',opts:['只在天黑后（日落到日出）','任何能见度低于1,000英尺时，包括因雨雪使用雨刷时','只在隧道和夜间','在高速公路行驶时'],exp:'加州法律要求在日落后30分钟到日出前30分钟，以及任何能见度低于1,000英尺时开大灯。重要的是，每当因天气状况（雨、雪、雾）使用挡风玻璃雨刷时，也必须开车头灯，不仅限于夜间。'},
  zhTW:{q:'在加州，什麼情況下必須開車頭燈？',opts:['只在天黑後（日落到日出）','任何能見度低於1,000英尺時，包括因雨雪使用雨刷時','只在隧道和夜間','在高速公路行駛時'],exp:'加州法律要求在日落後30分鐘到日出前30分鐘，以及任何能見度低於1,000英尺時開大燈。重要的是，每當因天氣狀況（雨、雪、霧）使用擋風玻璃雨刷時，也必須開車頭燈，不僅限於夜間。'},
  es:{q:'En California, ¿cuándo está obligado a usar los faros delanteros?',opts:['Solo después del anochecer (de puesta a salida del sol)','Cuando la visibilidad es menor de 1,000 pies, incluso cuando usa los limpiaparabrisas por lluvia o nieve','Solo en túneles y de noche','Cuando conduce en una autopista'],exp:'La ley de California requiere faros desde 30 minutos después del atardecer hasta 30 minutos antes del amanecer, y cuando la visibilidad es inferior a 1,000 pies. Importante: también debe usar los faros cuando use los limpiaparabrisas por condiciones climáticas (lluvia, nieve, niebla), no solo cuando está oscuro.'},
  ans:1
},
{
  id:416, cat:'dui',
  en:{q:'If you refuse to take a chemical test (breath, blood, or urine) when suspected of DUI in California, what happens?',opts:['Nothing — you have the right to refuse any test','Your license is automatically suspended for 1 year for a first offense, and refusal can be used as evidence against you','You are arrested but face no additional penalties','You must take a field sobriety test instead'],exp:'Under California\'s implied consent law, driving on California roads means you have implicitly agreed to chemical testing when lawfully arrested for DUI. Refusing the test results in automatic license suspension: 1 year for a first offense, 2 years for a second, and 3 years for a third. The refusal itself can also be used as evidence of guilt in court.'},
  zh:{q:'在加州，如果你在涉嫌DUI时拒绝接受化学测试（呼气、血液或尿液），会发生什么？',opts:['什么都不会——你有权拒绝任何测试','驾照自动暂停1年（首次），拒绝可被用作对你不利的证据','你会被逮捕但没有额外惩罚','你必须改为接受现场清醒测试'],exp:'根据加州的隐含同意法，在加州道路上驾驶意味着你已隐含地同意在合法逮捕DUI时接受化学测试。拒绝测试会导致驾照自动暂停：首次1年，第二次2年，第三次3年。拒绝本身也可在法庭上作为有罪证据使用。'},
  zhTW:{q:'在加州，如果你在涉嫌DUI時拒絕接受化學測試（呼氣、血液或尿液），會發生什麼？',opts:['什麼都不會——你有權拒絕任何測試','駕照自動暫停1年（首次），拒絕可被用作對你不利的證據','你會被逮捕但沒有額外懲罰','你必須改為接受現場清醒測試'],exp:'根據加州的隱含同意法，在加州道路上駕駛意味著你已隱含地同意在合法逮捕DUI時接受化學測試。拒絕測試會導致駕照自動暫停：首次1年，第二次2年，第三次3年。拒絕本身也可在法庭上作為有罪證據使用。'},
  es:{q:'Si se niega a tomar una prueba química (aliento, sangre u orina) cuando se sospecha de DUI en California, ¿qué sucede?',opts:['Nada — tiene derecho a rechazar cualquier prueba','Su licencia es suspendida automáticamente por 1 año (primera infracción), y la negativa puede usarse como evidencia en su contra','Es arrestado pero sin penalidades adicionales','Debe tomar una prueba de sobriedad de campo en su lugar'],exp:'Bajo la ley de consentimiento implícito de California, conducir en carreteras de California significa que ha acordado implícitamente las pruebas químicas al ser legalmente arrestado por DUI. Negarse resulta en suspensión automática: 1 año primera infracción, 2 años segunda, 3 años tercera. La negativa también puede usarse como evidencia de culpabilidad en el tribunal.'},
  ans:1
},
{
  id:417, cat:'highway',
  en:{q:'What is the correct procedure when you miss your exit on a freeway?',opts:['Stop and back up to the exit','Make a U-turn at the nearest median opening','Continue to the next exit, get off, and find a way back','Cross over the painted gore area (striped triangular area) to catch the exit'],exp:'If you miss a freeway exit, never stop, back up, or cross the painted gore area (the striped triangular area between the freeway and off-ramp). These actions are illegal and extremely dangerous. Simply continue driving to the next exit, exit the freeway, and find a route back. Plan ahead by watching for exit signs 1 mile and ½ mile in advance.'},
  zh:{q:'在高速公路上错过出口后应该怎么做？',opts:['停车并倒车到出口','在最近的中央分隔带开口处掉头','继续开到下一个出口，下高速，找路返回','越过油漆喇叭区（条纹三角形区域）赶上出口'],exp:'如果错过高速公路出口，切勿停车、倒车或越过油漆喇叭区（高速公路与出口匝道之间的条纹三角形区域）。这些行为是违法且极其危险的。只需继续驾驶到下一个出口，下高速，找路返回。提前注意1英里和半英里处的出口指示牌。'},
  zhTW:{q:'在高速公路上錯過出口後應該怎麼做？',opts:['停車並倒車到出口','在最近的中央分隔帶開口處掉頭','繼續開到下一個出口，下高速，找路返回','越過油漆喇叭區（條紋三角形區域）趕上出口'],exp:'如果錯過高速公路出口，切勿停車、倒車或越過油漆喇叭區（高速公路與出口匝道之間的條紋三角形區域）。這些行為是違法且極其危險的。只需繼續駕駛到下一個出口，下高速，找路返回。提前注意1英里和半英里處的出口指示牌。'},
  es:{q:'¿Cuál es el procedimiento correcto cuando se pierde una salida en la autopista?',opts:['Detenerse y retroceder hasta la salida','Hacer un giro en U en la abertura de mediana más cercana','Continuar hasta la próxima salida, salir y encontrar un camino de regreso','Cruzar la zona pintada de gore (área triangular rayada) para alcanzar la salida'],exp:'Si se pierde una salida de autopista, nunca se detenga, retroceda, ni cruce la zona gore pintada (área triangular rayada entre la autopista y la rampa de salida). Estas acciones son ilegales y extremadamente peligrosas. Simplemente continúe hasta la próxima salida, salga de la autopista y encuentre una ruta de regreso.'},
  ans:2
},
{
  id:418, cat:'safety',
  en:{q:'What should you do if your brakes fail while driving?',opts:['Immediately turn off the engine and coast to a stop','Pump the brakes rapidly to build pressure, shift to a lower gear, use the parking brake gradually, and steer toward a safe area','Steer sharply to the side of the road and open the door to slow down','Swerve back and forth to create friction and slow the car'],exp:'If your brakes fail: first try pumping the brake pedal rapidly to build hydraulic pressure. Downshift to use engine braking. Apply the parking/emergency brake gradually (not suddenly, to avoid spinning). Steer toward a safe area — use a runaway truck ramp, open space, or soft surface to slow down. Turn on hazard lights and honk to warn others.'},
  zh:{q:'如果行驶中刹车失灵，应该怎么做？',opts:['立即关闭发动机并滑行停车','快速踩踏刹车以建立压力，换低挡，逐渐使用驻车刹车，并转向安全区域','猛地转向路边并打开车门减速','左右蛇行产生摩擦来减速'],exp:'如果刹车失灵：首先快速踩踏刹车踏板以建立液压压力。降挡使用发动机制动。逐渐（而非突然）施加驻车/紧急刹车以避免打滑。转向安全区域——使用失控卡车匝道、开阔空间或软质地面减速。打开危险警告灯并鸣笛警告他人。'},
  zhTW:{q:'如果行駛中剎車失靈，應該怎麼做？',opts:['立即關閉發動機並滑行停車','快速踩踏剎車以建立壓力，換低檔，逐漸使用駐車剎車，並轉向安全區域','猛地轉向路邊並打開車門減速','左右蛇行產生摩擦來減速'],exp:'如果剎車失靈：首先快速踩踏剎車踏板以建立液壓壓力。降檔使用發動機制動。逐漸（而非突然）施加駐車/緊急剎車以避免打滑。轉向安全區域——使用失控卡車匝道、開闊空間或軟質地面減速。打開危險警告燈並鳴笛警告他人。'},
  es:{q:'¿Qué debe hacer si los frenos fallan mientras conduce?',opts:['Apague el motor inmediatamente y ruede hasta detenerse','Bombee los frenos rápidamente para generar presión, cambie a una marcha más baja, use el freno de mano gradualmente y dirija hacia un área segura','Gire bruscamente hacia el lado de la carretera y abra la puerta para reducir velocidad','Zigzaguee para crear fricción y reducir la velocidad del carro'],exp:'Si fallan los frenos: primero intente bombear el pedal del freno rápidamente para construir presión hidráulica. Baje a una marcha más baja para usar el freno del motor. Aplique el freno de estacionamiento/emergencia gradualmente (no de golpe, para evitar derrapar). Dirija hacia un área segura — use una rampa de camiones desbocados, espacio abierto o superficie suave para reducir velocidad.'},
  ans:1
},
{
  id:419, cat:'signs',
  en:{q:'What does a blue rectangular sign on a highway indicate?',opts:['A rest area or viewpoint ahead','Motorist services ahead — such as gas, food, or lodging','A toll booth is ahead','Hospital or medical services only'],exp:'Blue rectangular signs on highways indicate motorist services. They show that services such as gasoline stations, restaurants, lodging (hotels/motels), and camping are available at the upcoming exit or nearby. These signs help drivers plan stops without having to exit to discover what services are available.'},
  zh:{q:'高速公路上的蓝色矩形标志表示什么？',opts:['前方有休息区或观景点','前方有驾驶员服务——如加油站、餐厅或住宿','前方有收费站','仅限医院或医疗服务'],exp:'高速公路上的蓝色矩形标志表示驾驶员服务。它们显示即将到来的出口或附近有加油站、餐厅、住宿（酒店/汽车旅馆）和露营地等服务。这些标志帮助驾驶员计划停靠，而无需先下出口查看有哪些服务。'},
  zhTW:{q:'高速公路上的藍色矩形標誌表示什麼？',opts:['前方有休息區或觀景點','前方有駕駛員服務——如加油站、餐廳或住宿','前方有收費站','僅限醫院或醫療服務'],exp:'高速公路上的藍色矩形標誌表示駕駛員服務。它們顯示即將到來的出口或附近有加油站、餐廳、住宿（酒店/汽車旅館）和露營地等服務。這些標誌幫助駕駛員計劃停靠，而無需先下出口查看有哪些服務。'},
  es:{q:'¿Qué indica un letrero rectangular azul en una autopista?',opts:['Hay un área de descanso o mirador adelante','Servicios para automovilistas adelante — como gasolina, comida u hospedaje','Hay una caseta de peaje adelante','Solo hospital o servicios médicos'],exp:'Los letreros rectangulares azules en autopistas indican servicios para automovilistas. Muestran que hay gasolineras, restaurantes, hospedaje (hoteles/moteles) y campamentos disponibles en la próxima salida o cerca. Estos letreros ayudan a los conductores a planificar paradas sin tener que salir para descubrir qué servicios hay.'},
  ans:1
},
{
  id:420, cat:'laws',
  en:{q:'What is the "basic speed law" in California?',opts:['You must always drive at or below the posted speed limit','You must never drive faster than is safe for current road, weather, and traffic conditions — even if below the posted limit','You must maintain the minimum speed limit at all times on freeways','The speed limit is always 65 mph on state highways unless otherwise posted'],exp:'California\'s basic speed law states that no person shall drive a vehicle at a speed greater than is reasonable or prudent, given weather, visibility, traffic, and road surface conditions. Even if you are driving below the posted speed limit, you can be cited if your speed is unsafe for conditions — for example, driving 55 mph during dense fog.'},
  zh:{q:'加州的"基本速度法则"是什么？',opts:['必须始终在限速或以下行驶','永远不得以超过当前道路、天气和交通状况安全速度行驶——即使低于限速','在高速公路上必须始终保持最低限速','除非另有标志，州立公路限速始终为65英里/小时'],exp:'加州基本速度法则规定，考虑到天气、能见度、交通和路面状况，任何人不得以超过合理或谨慎的速度驾驶车辆。即使低于限速行驶，如果速度对当前状况不安全，也可能被罚款——例如在浓雾中以55英里/小时行驶。'},
  zhTW:{q:'加州的"基本速度法則"是什麼？',opts:['必須始終在限速或以下行駛','永遠不得以超過當前道路、天氣和交通狀況安全速度行駛——即使低於限速','在高速公路上必須始終保持最低限速','除非另有標誌，州立公路限速始終為65英里/小時'],exp:'加州基本速度法則規定，考慮到天氣、能見度、交通和路面狀況，任何人不得以超過合理或謹慎的速度駕駛車輛。即使低於限速行駛，如果速度對當前狀況不安全，也可能被罰款——例如在濃霧中以55英里/小時行駛。'},
  es:{q:'¿Cuál es la "ley de velocidad básica" en California?',opts:['Siempre debe conducir al límite de velocidad o por debajo','Nunca debe conducir más rápido de lo que sea seguro para las condiciones actuales de carretera, clima y tráfico — incluso si está por debajo del límite','Debe mantener la velocidad mínima en autopistas en todo momento','El límite de velocidad siempre es 65 mph en carreteras estatales a menos que se indique lo contrario'],exp:'La ley de velocidad básica de California establece que nadie debe conducir a una velocidad mayor de lo que sea razonable o prudente dado el clima, visibilidad, tráfico y condiciones de la superficie vial. Incluso si conduce por debajo del límite, puede ser multado si su velocidad es insegura para las condiciones — por ejemplo, conduciendo 55 mph en niebla densa.'},
  ans:1
},

,
{
  id:421, cat:'signs',
  en:{q:'What does an orange sign with black lettering mean when seen in a work zone?',opts:['Stop — construction workers are present','Warning of road construction or maintenance ahead — slow down and be alert','Detour — follow the orange signs','End of work zone — normal speed resumes'],exp:'Orange signs are used exclusively in construction and maintenance work zones. They warn drivers of changing road conditions, workers, equipment, and altered traffic patterns ahead. Speeding fines are doubled in active work zones. Always slow down and stay alert when you see orange signs.'},
  zh:{q:'在施工区见到黑字橙色标志意味着什么？',opts:['停车——有施工工人','前方道路施工或维修警告——减速并保持警惕','绕道——跟随橙色标志','施工区结束——恢复正常速度'],exp:'橙色标志专门用于施工和维护工作区。它们警告驾驶员前方道路条件变化、工人、设备和改变的交通模式。在活跃施工区超速罚款翻倍。看到橙色标志时始终减速并保持警惕。'},
  zhTW:{q:'在施工區見到黑字橙色標誌意味著什麼？',opts:['停車——有施工工人','前方道路施工或維修警告——減速並保持警惕','繞道——跟隨橙色標誌','施工區結束——恢復正常速度'],exp:'橙色標誌專門用於施工和維護工作區。它們警告駕駛員前方道路條件變化、工人、設備和改變的交通模式。在活躍施工區超速罰款翻倍。看到橙色標誌時始終減速並保持警惕。'},
  es:{q:'¿Qué significa un letrero naranja con letras negras en una zona de obras?',opts:['Alto — hay trabajadores de construcción presentes','Advertencia de construcción o mantenimiento de carretera adelante — reduzca velocidad y esté alerta','Desvío — siga los letreros naranjas','Fin de zona de obras — la velocidad normal se reanuda'],exp:'Los letreros naranjas se usan exclusivamente en zonas de construcción y mantenimiento. Advierten a los conductores sobre cambios en las condiciones viales, trabajadores, equipo y patrones de tráfico alterados. Las multas por exceso de velocidad se duplican en zonas de obras activas. Siempre reduzca la velocidad cuando vea letreros naranjas.'},
  ans:1
},
{
  id:422, cat:'rightofway',
  en:{q:'You are driving on a road and a funeral procession is crossing your path at an intersection. What should you do?',opts:['Proceed normally — funeral processions must yield to regular traffic','Yield to the entire procession — it is illegal to cut through or interfere with a funeral procession','Honk to alert the procession to move faster','Only yield if the lead vehicle has a green flag'],exp:'In California, it is illegal to drive through, cut into, or interfere with a funeral procession. You must yield to all vehicles in the procession. Funeral vehicles often have their headlights on and may have a special purple or orange flag. Cutting through a funeral procession is both disrespectful and a traffic violation.'},
  zh:{q:'你在驾车，在路口一支葬礼车队穿越你的路线。你应该怎么做？',opts:['正常通行——葬礼车队必须让行正常交通','让整个车队先行——穿越或干扰葬礼车队是违法的','鸣笛催促车队加快速度','只有当领头车辆有绿旗时才让行'],exp:'在加州，穿越、插入或干扰葬礼车队是违法的。你必须让所有车队车辆先行。葬礼车辆通常亮着大灯，可能有特殊的紫色或橙色旗帜。穿越葬礼车队既不尊重又是交通违规。'},
  zhTW:{q:'你在駕車，在路口一支葬禮車隊穿越你的路線。你應該怎麼做？',opts:['正常通行——葬禮車隊必須讓行正常交通','讓整個車隊先行——穿越或干擾葬禮車隊是違法的','鳴笛催促車隊加快速度','只有當領頭車輛有綠旗時才讓行'],exp:'在加州，穿越、插入或干擾葬禮車隊是違法的。你必須讓所有車隊車輛先行。葬禮車輛通常亮著大燈，可能有特殊的紫色或橙色旗幟。穿越葬禮車隊既不尊重又是交通違規。'},
  es:{q:'Está conduciendo y una procesión fúnebre cruza su camino en una intersección. ¿Qué debe hacer?',opts:['Proceda normalmente — las procesiones fúnebres deben ceder ante el tráfico regular','Ceda el paso a toda la procesión — es ilegal cortar o interferir con una procesión fúnebre','Toque el claxon para alertar a la procesión que avance más rápido','Solo ceda si el vehículo líder tiene una bandera verde'],exp:'En California, es ilegal conducir a través, meterse, o interferir con una procesión fúnebre. Debe ceder el paso a todos los vehículos de la procesión. Los vehículos fúnebres generalmente tienen los faros encendidos y pueden tener una bandera especial. Cortar una procesión fúnebre es tanto irrespetuoso como una infracción de tráfico.'},
  ans:1
},
{
  id:423, cat:'safety',
  en:{q:'You are driving on the freeway at 65 mph. How much space (in seconds) should you maintain between you and the car ahead?',opts:['At least 1 second','At least 2 seconds','At least 3 seconds','At least 5 seconds'],exp:'California DMV recommends a minimum 3-second following distance under normal conditions on a freeway. To measure: when the car ahead passes a fixed point, count "one-thousand-one, one-thousand-two, one-thousand-three" — you should not reach that point until you reach three. In rain or bad conditions, double to 6 seconds. For trucks and motorcycles, additional distance is needed.'},
  zh:{q:'你在高速公路上以65英里/小时行驶。你和前车之间应该保持多少距离（秒）？',opts:['至少1秒','至少2秒','至少3秒','至少5秒'],exp:'加州DMV建议在高速公路正常情况下保持至少3秒的跟车距离。测量方法：当前车经过一个固定点时，数"一千零一，一千零二，一千零三"——你不应在数到三之前到达该点。雨天或恶劣条件下，加倍至6秒。对于卡车和摩托车，需要额外的距离。'},
  zhTW:{q:'你在高速公路上以65英里/小時行駛。你和前車之間應該保持多少距離（秒）？',opts:['至少1秒','至少2秒','至少3秒','至少5秒'],exp:'加州DMV建議在高速公路正常情況下保持至少3秒的跟車距離。測量方法：當前車經過一個固定點時，數"一千零一，一千零二，一千零三"——你不應在數到三之前到達該點。雨天或惡劣條件下，加倍至6秒。對於卡車和摩托車，需要額外的距離。'},
  es:{q:'Está conduciendo en la autopista a 65 mph. ¿Cuánto espacio (en segundos) debe mantener entre usted y el auto de adelante?',opts:['Al menos 1 segundo','Al menos 2 segundos','Al menos 3 segundos','Al menos 5 segundos'],exp:'El DMV de California recomienda una distancia mínima de seguimiento de 3 segundos en condiciones normales en autopista. Para medir: cuando el auto adelante pasa un punto fijo, cuente "mil uno, mil dos, mil tres" — no debe llegar a ese punto antes de tres. En lluvia o malas condiciones, duplique a 6 segundos.'},
  ans:2
},
{
  id:424, cat:'laws',
  en:{q:'You are driving and your cell phone rings. What does California law allow?',opts:['Answer it briefly if traffic is light','Use it hands-free with a Bluetooth or speakerphone mount — but not held in hand while driving','Use it freely at red lights and stop signs','Use it only if you are over 18'],exp:'California law prohibits holding and using a handheld cell phone while driving for all drivers. You may use a phone in hands-free mode (Bluetooth earpiece, speakerphone mounted on the dash, or hands-free kit). Even at red lights, holding a phone is illegal. Drivers under 18 are prohibited from using ANY wireless device while driving, including hands-free.'},
  zh:{q:'你在驾车时手机响了。加州法律允许什么？',opts:['如果交通不拥挤可以简短接听','使用蓝牙或车载扬声器免提方式——但驾驶时不得手持','在红灯和停车标志处可以自由使用','只有18岁以上才能使用'],exp:'加州法律禁止所有驾驶员在驾车时手持使用手机。你可以免提方式使用手机（蓝牙耳机、安装在仪表板上的免提扬声器或免提套件）。即使在红灯处，手持手机也是违法的。18岁以下驾驶员禁止在驾车时使用任何无线设备，包括免提。'},
  zhTW:{q:'你在駕車時手機響了。加州法律允許什麼？',opts:['如果交通不擁擠可以簡短接聽','使用藍牙或車載揚聲器免提方式——但駕駛時不得手持','在紅燈和停車標誌處可以自由使用','只有18歲以上才能使用'],exp:'加州法律禁止所有駕駛員在駕車時手持使用手機。你可以免提方式使用手機（藍牙耳機、安裝在儀表板上的免提揚聲器或免提套件）。即使在紅燈處，手持手機也是違法的。18歲以下駕駛員禁止在駕車時使用任何無線設備，包括免提。'},
  es:{q:'Está conduciendo y su teléfono celular suena. ¿Qué permite la ley de California?',opts:['Contestar brevemente si el tráfico es ligero','Usarlo manos libres con Bluetooth o altavoz montado — pero no sosteniéndolo mientras conduce','Usarlo libremente en semáforos y señales de alto','Usarlo solo si tiene más de 18 años'],exp:'La ley de California prohíbe sostener y usar un teléfono celular mientras conduce para todos los conductores. Puede usar el teléfono en modo manos libres (auricular Bluetooth, altavoz montado en el tablero, o kit manos libres). Incluso en semáforos en rojo, sostener el teléfono es ilegal. Los conductores menores de 18 tienen prohibido usar CUALQUIER dispositivo inalámbrico mientras conducen.'},
  ans:1
},
{
  id:425, cat:'parking',
  en:{q:'You want to park next to a yellow-painted curb. What does this mean?',opts:['No parking at any time','Parking allowed for 15 minutes for loading/unloading — usually during posted hours','Emergency vehicles only','No parking from 7 AM to 6 PM'],exp:'A yellow curb means the area is restricted for loading and unloading only. Typically you may stop for a limited time (often 5–10 minutes) to load or unload passengers or freight. The hours of restriction are often posted on nearby signs. Commercial vehicles may have additional time, but personal vehicles must only briefly stop to load or unload.'},
  zh:{q:'你想在黄色涂漆路缘石旁停车。这意味着什么？',opts:['任何时候都不能停车','仅限装卸——通常在规定时间内停车最多15分钟','仅限紧急车辆','上午7时至下午6时不能停车'],exp:'黄色路缘石表示该区域仅限装卸。通常你可以停短暂时间（通常5-10分钟）装卸乘客或货物。限制时间通常在附近标志上注明。商用车辆可能有额外时间，但私人车辆只能短暂停车装卸。'},
  zhTW:{q:'你想在黃色塗漆路緣石旁停車。這意味著什麼？',opts:['任何時候都不能停車','僅限裝卸——通常在規定時間內停車最多15分鐘','僅限緊急車輛','上午7時至下午6時不能停車'],exp:'黃色路緣石表示該區域僅限裝卸。通常你可以停短暫時間（通常5-10分鐘）裝卸乘客或貨物。限制時間通常在附近標誌上注明。商用車輛可能有額外時間，但私人車輛只能短暫停車裝卸。'},
  es:{q:'Quiere estacionar junto a un bordillo pintado de amarillo. ¿Qué significa esto?',opts:['Prohibido estacionarse en cualquier momento','Solo para carga y descarga — generalmente puede detenerse hasta 15 minutos durante las horas indicadas','Solo vehículos de emergencia','No estacionar de 7 AM a 6 PM'],exp:'Un bordillo amarillo significa que el área está restringida solo para carga y descarga. Generalmente puede detenerse por tiempo limitado (a menudo 5-10 minutos) para cargar o descargar pasajeros o carga. Los horarios de restricción generalmente se publican en letreros cercanos. Los vehículos comerciales pueden tener tiempo adicional, pero los vehículos personales solo deben detenerse brevemente.'},
  ans:1
},
{
  id:426, cat:'highway',
  en:{q:'What should you do when approaching a highway on-ramp to merge onto a freeway?',opts:['Stop at the end of the on-ramp and wait for a large gap','Accelerate in the acceleration lane to match freeway speed, then merge smoothly when safe','Merge immediately as soon as you enter the on-ramp','Slow down and signal, then force your way into traffic'],exp:'When entering a freeway via an on-ramp, use the acceleration lane to build up your speed to match the speed of freeway traffic. Check mirrors and blind spots, signal, and merge smoothly into a safe gap. Never stop at the end of an on-ramp unless absolutely necessary (such as extremely heavy traffic). Freeway drivers should also cooperate by adjusting speed to help merging vehicles.'},
  zh:{q:'接近高速公路入口匝道并入高速时应该怎么做？',opts:['在入口匝道末端停车等待大的空隙','在加速车道中加速以匹配高速公路速度，然后在安全时平稳并入','进入入口匝道后立即并入','减速并打转向灯，然后强行并入交通流'],exp:'通过入口匝道进入高速公路时，使用加速车道将速度提高到与高速公路交通速度匹配。检查后视镜和盲点，打转向灯，然后平稳并入安全空隙。除非绝对必要（如极度拥堵），否则不要在入口匝道末端停车。高速公路上的驾驶员也应该通过调整速度来帮助并入的车辆。'},
  zhTW:{q:'接近高速公路入口匝道並入高速時應該怎麼做？',opts:['在入口匝道末端停車等待大的空隙','在加速車道中加速以匹配高速公路速度，然後在安全時平穩並入','進入入口匝道後立即並入','減速並打轉向燈，然後強行並入交通流'],exp:'通過入口匝道進入高速公路時，使用加速車道將速度提高到與高速公路交通速度匹配。檢查後視鏡和盲點，打轉向燈，然後平穩並入安全空隙。除非絕對必要（如極度擁堵），否則不要在入口匝道末端停車。高速公路上的駕駛員也應該通過調整速度來幫助並入的車輛。'},
  es:{q:'¿Qué debe hacer al acercarse a una rampa de entrada para incorporarse a una autopista?',opts:['Detenerse al final de la rampa y esperar un espacio grande','Acelerar en el carril de aceleración para igualar la velocidad de la autopista, luego incorporarse suavemente cuando sea seguro','Incorporarse inmediatamente al entrar en la rampa','Desacelerar y señalar, luego forzar su entrada al tráfico'],exp:'Al entrar a una autopista por una rampa, use el carril de aceleración para aumentar su velocidad para igualar la del tráfico en la autopista. Revise espejos y puntos ciegos, señale e incorpórese suavemente en un espacio seguro. Nunca se detenga al final de una rampa a menos que sea absolutamente necesario. Los conductores de la autopista también deben cooperar ajustando la velocidad.'},
  ans:1
},
{
  id:427, cat:'dui',
  en:{q:'What is the legal BAC limit for a commercial driver operating a commercial vehicle in California?',opts:['0.08%','0.04%','0.01%','0.02%'],exp:'Commercial drivers operating a commercial motor vehicle (CMV) in California are held to a stricter standard: a BAC of 0.04% or higher is considered DUI. For regular non-commercial drivers, the limit is 0.08%. Drivers under 21 are subject to the 0.01% limit regardless of whether the vehicle is commercial or not.'},
  zh:{q:'在加州，驾驶商业车辆的商业驾驶员的合法血液酒精含量（BAC）限制是多少？',opts:['0.08%','0.04%','0.01%','0.02%'],exp:'在加州驾驶商业机动车辆（CMV）的商业驾驶员受到更严格的标准约束：BAC达到0.04%或以上即为DUI。普通非商业驾驶员的限制是0.08%。21岁以下驾驶员无论是否驾驶商业车辆，均适用0.01%的限制。'},
  zhTW:{q:'在加州，駕駛商業車輛的商業駕駛員的合法血液酒精含量（BAC）限制是多少？',opts:['0.08%','0.04%','0.01%','0.02%'],exp:'在加州駕駛商業機動車輛（CMV）的商業駕駛員受到更嚴格的標準約束：BAC達到0.04%或以上即為DUI。普通非商業駕駛員的限制是0.08%。21歲以下駕駛員無論是否駕駛商業車輛，均適用0.01%的限制。'},
  es:{q:'¿Cuál es el límite legal de BAC para un conductor comercial que opera un vehículo comercial en California?',opts:['0.08%','0.04%','0.01%','0.02%'],exp:'Los conductores comerciales que operan un vehículo motor comercial (CMV) en California están sujetos a un estándar más estricto: un BAC de 0.04% o más se considera DUI. Para conductores regulares no comerciales, el límite es 0.08%. Los conductores menores de 21 están sujetos al límite de 0.01% independientemente de si el vehículo es comercial o no.'},
  ans:1
},
{
  id:428, cat:'signs',
  en:{q:'What does a round (circular) black and yellow sign mean?',opts:['School zone — slow down','Railroad crossing ahead — be prepared to stop','No passing zone','One-way road ahead'],exp:'A round (circular) black-on-yellow sign warns of a railroad crossing ahead. The round shape is used specifically for railroad warning signs so drivers can recognize them from a distance. When you see this sign, slow down, look and listen for trains, and be prepared to stop. Never race a train to a crossing.'},
  zh:{q:'黑黄圆形（圆形）标志意味着什么？',opts:['学区——减速','前方铁路道口——准备停车','禁止超车区','前方单行道'],exp:'黑黄色圆形标志警告前方有铁路道口。圆形形状专门用于铁路警告标志，以便驾驶员可以从远处识别。看到此标志时，减速，查看和聆听是否有火车，并准备停车。永远不要与火车赛跑穿越道口。'},
  zhTW:{q:'黑黃圓形（圓形）標誌意味著什麼？',opts:['學區——減速','前方鐵路道口——準備停車','禁止超車區','前方單行道'],exp:'黑黃色圓形標誌警告前方有鐵路道口。圓形形狀專門用於鐵路警告標誌，以便駕駛員可以從遠處識別。看到此標誌時，減速，查看和聆聽是否有火車，並準備停車。永遠不要與火車賽跑穿越道口。'},
  es:{q:'¿Qué significa un letrero redondo (circular) negro y amarillo?',opts:['Zona escolar — reduzca la velocidad','Cruce de ferrocarril adelante — esté preparado para detenerse','Zona de no adelantamiento','Carretera de un sentido adelante'],exp:'Un letrero circular amarillo con negro advierte de un cruce de ferrocarril adelante. La forma redonda se usa específicamente para señales de advertencia de ferrocarril para que los conductores puedan reconocerlas desde lejos. Al ver esta señal, desacelere, mire y escuche si hay trenes, y esté preparado para detenerse. Nunca compita con un tren en un cruce.'},
  ans:1
},
{
  id:429, cat:'speed',
  en:{q:'What is the speed limit in an alley in California?',opts:['10 mph','15 mph','20 mph','25 mph'],exp:'The prima facie (assumed) speed limit in an alley in California is 15 mph. An alley is a narrow road usually located behind or between buildings. Because alleys are narrow with limited visibility and pedestrians may be present, the 15 mph limit is required by law even if no speed sign is posted.'},
  zh:{q:'加州巷道的速度限制是多少？',opts:['10英里/小时','15英里/小时','20英里/小时','25英里/小时'],exp:'加州巷道的法定（推定）速度限制为15英里/小时。巷道是通常位于建筑物后面或之间的狭窄道路。由于巷道狭窄、能见度有限且可能有行人，即使没有速度标志，法律也要求15英里/小时的限制。'},
  zhTW:{q:'加州巷道的速度限制是多少？',opts:['10英里/小時','15英里/小時','20英里/小時','25英里/小時'],exp:'加州巷道的法定（推定）速度限制為15英里/小時。巷道是通常位於建築物後面或之間的狹窄道路。由於巷道狹窄、能見度有限且可能有行人，即使沒有速度標誌，法律也要求15英里/小時的限制。'},
  es:{q:'¿Cuál es el límite de velocidad en un callejón en California?',opts:['10 mph','15 mph','20 mph','25 mph'],exp:'El límite de velocidad prima facie (asumido) en un callejón en California es 15 mph. Un callejón es una carretera estrecha generalmente ubicada detrás o entre edificios. Como los callejones son estrechos, con visibilidad limitada y pueden haber peatones, el límite de 15 mph es requerido por ley incluso si no hay señal de velocidad.'},
  ans:1
},
{
  id:430, cat:'safety',
  en:{q:'You are driving in heavy rain and your car begins to skid. What should you do?',opts:['Slam on the brakes immediately to stop','Steer into the skid (turn the wheel in the direction the rear is sliding) and ease off the gas — do not brake hard','Turn the wheel sharply in the opposite direction of the skid','Accelerate to regain traction'],exp:'If your car skids, steer gently in the direction you want the front of the car to go (which is the same direction the rear is sliding — "into the skid"). Ease off the accelerator gradually. Avoid braking hard, as this can worsen the skid. With ABS, you can apply steady brake pressure. Without ABS, pump the brakes gently. Stay calm and keep your eyes on where you want to go.'},
  zh:{q:'你在大雨中驾车时汽车开始打滑。应该怎么做？',opts:['立即猛踩刹车停车','转向打滑方向（将方向盘朝车尾滑动的方向转）并松开油门——不要猛刹车','将方向盘猛地朝打滑的相反方向转','加速以恢复牵引力'],exp:'如果汽车打滑，轻柔地将方向盘朝你想让车头前进的方向（即车尾滑动的相同方向——"顺着打滑方向"）转。逐渐松开油门。避免猛刹车，因为这会加剧打滑。有ABS时，可以施加稳定的刹车压力。没有ABS时，轻轻点踩刹车。保持冷静，眼睛盯着你想去的方向。'},
  zhTW:{q:'你在大雨中駕車時汽車開始打滑。應該怎麼做？',opts:['立即猛踩剎車停車','轉向打滑方向（將方向盤朝車尾滑動的方向轉）並松開油門——不要猛剎車','將方向盤猛地朝打滑的相反方向轉','加速以恢復牽引力'],exp:'如果汽車打滑，輕柔地將方向盤朝你想讓車頭前進的方向（即車尾滑動的相同方向——"順著打滑方向"）轉。逐漸松開油門。避免猛剎車，因為這會加劇打滑。有ABS時，可以施加穩定的剎車壓力。沒有ABS時，輕輕點踩剎車。保持冷靜，眼睛盯著你想去的方向。'},
  es:{q:'Está conduciendo bajo lluvia intensa y su auto comienza a deslizarse. ¿Qué debe hacer?',opts:['Frene inmediatamente a fondo para detenerse','Dirija hacia el derrape (gire el volante en la dirección que se desliza la parte trasera) y suelte el acelerador gradualmente — no frene fuerte','Gire el volante bruscamente en la dirección opuesta al derrape','Acelere para recuperar tracción'],exp:'Si su auto derrapa, dirija suavemente en la dirección que quiere que vaya el frente del auto (que es la misma dirección que se desliza la parte trasera — "hacia el derrape"). Suelte el acelerador gradualmente. Evite frenar fuerte, ya que puede empeorar el derrape. Con ABS, puede aplicar presión constante en el freno. Sin ABS, bombee suavemente los frenos.'},
  ans:1
},

,
{
  id:431, cat:'laws',
  en:{q:'When is it legal to drive in a bike lane in California?',opts:['Never — bike lanes are exclusively for cyclists','Only when turning right — you may merge into the bike lane up to 200 feet before an intersection','When traffic is backed up and the bike lane is empty','When passing a slow-moving vehicle'],exp:'Drivers may enter a bike lane only when making a right turn and only within 200 feet of the intersection. You must yield to cyclists already in the lane. At all other times, driving, parking, or stopping in a bike lane is illegal. Some locations also allow driving in a bike lane when entering or exiting a driveway.'},
  zh:{q:'在加州，什么情况下可以合法地在自行车道行驶？',opts:['永远不——自行车道专属于骑行者','只有右转时——可以在路口前200英尺内并入自行车道','当交通堵塞且自行车道空着时','超过慢速行驶车辆时'],exp:'驾驶员只有在右转时才可以进入自行车道，且只能在路口前200英尺内。必须让已在车道内的骑行者先行。在其他任何情况下，在自行车道行驶、停车或停靠都是违法的。某些地点在进出私家车道时也允许驶入自行车道。'},
  zhTW:{q:'在加州，什麼情況下可以合法地在自行車道行駛？',opts:['永遠不——自行車道專屬於騎行者','只有右轉時——可以在路口前200英尺內並入自行車道','當交通堵塞且自行車道空著時','超過慢速行駛車輛時'],exp:'駕駛員只有在右轉時才可以進入自行車道，且只能在路口前200英尺內。必須讓已在車道內的騎行者先行。在其他任何情況下，在自行車道行駛、停車或停靠都是違法的。某些地點在進出私家車道時也允許駛入自行車道。'},
  es:{q:'¿Cuándo es legal conducir en un carril para bicicletas en California?',opts:['Nunca — los carriles para bicicletas son exclusivamente para ciclistas','Solo al girar a la derecha — puede incorporarse al carril de bicicletas hasta 200 pies antes de una intersección','Cuando el tráfico está congestionado y el carril de bicicletas está vacío','Al pasar un vehículo de movimiento lento'],exp:'Los conductores solo pueden entrar en un carril de bicicletas al girar a la derecha y solo dentro de 200 pies de la intersección. Debe ceder el paso a los ciclistas que ya están en el carril. En todos los demás casos, conducir, estacionar o detenerse en un carril de bicicletas es ilegal.'},
  ans:1
},
{
  id:432, cat:'signs',
  en:{q:'What does a green traffic light arrow pointing left mean?',opts:['Yield to oncoming traffic before turning left','You may turn left — oncoming traffic is stopped by a red signal, giving you a protected turn','You must turn left immediately','U-turns are permitted in this direction'],exp:'A green left-turn arrow (protected green arrow) means you have the right-of-way to turn left. Oncoming traffic in the opposite direction is stopped by a red signal. This is a "protected" left turn — you do not need to yield to oncoming vehicles. However, you must still yield to any pedestrians legally crossing.'},
  zh:{q:'朝左的绿色交通信号箭头意味着什么？',opts:['在左转前让行对向来车','你可以左转——对向来车被红灯拦截，给你提供保护性左转','你必须立即左转','此方向允许掉头'],exp:'绿色左转箭头（保护性绿色箭头）意味着你有权利左转。对方向的对向来车被红灯拦截。这是"保护性"左转——你不需要让行对向车辆。但是，你仍然必须让行合法穿越路口的行人。'},
  zhTW:{q:'朝左的綠色交通信號箭頭意味著什麼？',opts:['在左轉前讓行對向來車','你可以左轉——對向來車被紅燈攔截，給你提供保護性左轉','你必須立即左轉','此方向允許掉頭'],exp:'綠色左轉箭頭（保護性綠色箭頭）意味著你有權利左轉。對方向的對向來車被紅燈攔截。這是"保護性"左轉——你不需要讓行對向車輛。但是，你仍然必須讓行合法穿越路口的行人。'},
  es:{q:'¿Qué significa una flecha verde de semáforo apuntando a la izquierda?',opts:['Ceda el paso al tráfico en sentido contrario antes de girar a la izquierda','Puede girar a la izquierda — el tráfico en sentido contrario está detenido por una señal roja, dándole un giro protegido','Debe girar a la izquierda inmediatamente','Se permiten giros en U en esta dirección'],exp:'Una flecha verde de giro a la izquierda (flecha verde protegida) significa que tiene el derecho de paso para girar a la izquierda. El tráfico en sentido contrario está detenido por una señal roja. Este es un giro a la izquierda "protegido" — no necesita ceder el paso a los vehículos que vienen en sentido contrario. Sin embargo, debe ceder el paso a los peatones que cruzan legalmente.'},
  ans:1
},
{
  id:433, cat:'rightofway',
  en:{q:'You approach a T-intersection. The road you are on ends. Who has the right-of-way?',opts:['You do, because you arrived at the intersection first','Vehicles on the through (continuing) road have the right-of-way','You must yield only if there is a yield sign','Whoever is going straight has priority over those turning'],exp:'At a T-intersection, vehicles on the terminating road (the road that ends) must yield to all vehicles on the through road (the road that continues). Even if there is no sign, this is the default rule. The through road has the right-of-way. If you are on the road that ends, stop or slow down and yield before proceeding.'},
  zh:{q:'你来到一个T形路口。你所在的道路在这里结束。谁有通行权？',opts:['你有，因为你先到达路口','直行（继续）道路上的车辆有通行权','只有在有让行标志时才需要让行','直行的人比转弯的人有优先权'],exp:'在T形路口，终止道路（结束的道路）上的车辆必须让行直行道路（继续的道路）上的所有车辆。即使没有标志，这也是默认规则。直行道路有通行权。如果你在结束的道路上，在继续前停车或减速让行。'},
  zhTW:{q:'你來到一個T形路口。你所在的道路在這裡結束。誰有通行權？',opts:['你有，因為你先到達路口','直行（繼續）道路上的車輛有通行權','只有在有讓行標誌時才需要讓行','直行的人比轉彎的人有優先權'],exp:'在T形路口，終止道路（結束的道路）上的車輛必須讓行直行道路（繼續的道路）上的所有車輛。即使沒有標誌，這也是默認規則。直行道路有通行權。如果你在結束的道路上，在繼續前停車或減速讓行。'},
  es:{q:'Se acerca a una intersección en T. La carretera en la que está termina. ¿Quién tiene el derecho de paso?',opts:['Usted, porque llegó primero a la intersección','Los vehículos en la carretera continua (que continúa) tienen el derecho de paso','Debe ceder solo si hay una señal de ceda el paso','Quien va recto tiene prioridad sobre quienes giran'],exp:'En una intersección en T, los vehículos en la carretera que termina deben ceder el paso a todos los vehículos en la carretera continua. Incluso si no hay señal, esta es la regla predeterminada. La carretera continua tiene el derecho de paso. Si está en la carretera que termina, deténgase o desacelere y ceda el paso antes de continuar.'},
  ans:1
},
{
  id:434, cat:'speed',
  en:{q:'What is the speed limit within 500 feet of a school while children are outside?',opts:['15 mph','25 mph','20 mph','10 mph'],exp:'When driving within 500 to 1,000 feet of a school while children are going to or leaving school, or while children are outside, the speed limit is 25 mph. Many school zones post a reduced limit of 25 mph with the qualifier "when children are present." Always be alert for children near schools and crosswalks.'},
  zh:{q:'在儿童在校外活动时，学校500英尺范围内的速度限制是多少？',opts:['15英里/小时','25英里/小时','20英里/小时','10英里/小时'],exp:'在儿童上下学或在校外活动时，在学校500至1,000英尺范围内驾驶时，限速为25英里/小时。许多学区设置了25英里/小时的限速，并附带"有儿童在场时"的条件。在学校和人行横道附近要时刻注意儿童。'},
  zhTW:{q:'在兒童在校外活動時，學校500英尺範圍內的速度限制是多少？',opts:['15英里/小時','25英里/小時','20英里/小時','10英里/小時'],exp:'在兒童上下學或在校外活動時，在學校500至1,000英尺範圍內駕駛時，限速為25英里/小時。許多學區設置了25英里/小時的限速，並附帶"有兒童在場時"的條件。在學校和人行橫道附近要時刻注意兒童。'},
  es:{q:'¿Cuál es el límite de velocidad dentro de 500 pies de una escuela mientras los niños están afuera?',opts:['15 mph','25 mph','20 mph','10 mph'],exp:'Al conducir dentro de 500 a 1,000 pies de una escuela mientras los niños van o regresan de la escuela, o mientras los niños están afuera, el límite de velocidad es 25 mph. Muchas zonas escolares publican un límite reducido de 25 mph con la condición "cuando hay niños presentes." Siempre esté alerta a los niños cerca de escuelas y cruces peatonales.'},
  ans:1
},
{
  id:435, cat:'parking',
  en:{q:'How close to a railroad crossing may you legally park in California?',opts:['Within 10 feet','Within 15 feet','Within 7.5 feet (1 car length)','Within 50 feet'],exp:'In California, you may not park within 7.5 feet (one car width) of a railroad crossing. Parking too close to railroad tracks can obstruct a train\'s view and create dangerous conditions. Additionally, you should never park so that any part of your vehicle is on or over the railroad tracks.'},
  zh:{q:'在加州，你可以合法地停在铁路道口多近的地方？',opts:['10英尺以内','15英尺以内','7.5英尺以内（一个车身宽度）','50英尺以内'],exp:'在加州，不得在铁路道口7.5英尺（一个车宽）以内停车。在铁轨附近停车太近可能会阻碍火车的视线并造成危险情况。此外，永远不要将车辆的任何部分停在铁轨上或跨越铁轨。'},
  zhTW:{q:'在加州，你可以合法地停在鐵路道口多近的地方？',opts:['10英尺以內','15英尺以內','7.5英尺以內（一個車身寬度）','50英尺以內'],exp:'在加州，不得在鐵路道口7.5英尺（一個車寬）以內停車。在鐵軌附近停車太近可能會阻礙火車的視線並造成危險情況。此外，永遠不要將車輛的任何部分停在鐵軌上或跨越鐵軌。'},
  es:{q:'¿A qué distancia de un cruce ferroviario puede estacionar legalmente en California?',opts:['Dentro de 10 pies','Dentro de 15 pies','Dentro de 7.5 pies (1 ancho de automóvil)','Dentro de 50 pies'],exp:'En California, no puede estacionar a menos de 7.5 pies (un ancho de automóvil) de un cruce ferroviario. Estacionar demasiado cerca de las vías puede obstruir la visión de un tren y crear condiciones peligrosas. Además, nunca debe estacionar de modo que alguna parte de su vehículo esté sobre o cruzando las vías del ferrocarril.'},
  ans:2
},
{
  id:436, cat:'highway',
  en:{q:'What is a "turnout" on a mountain road, and when should you use it?',opts:['A designated parking spot for scenic views — use it when tired','A paved widened section at the edge of the road — use it to let faster vehicles behind you pass safely','An emergency escape ramp for runaway vehicles — use it only in braking emergencies','A marked area where U-turns are allowed on mountain highways'],exp:'A turnout is a designated paved widened area on the shoulder of a mountain road. California law requires you to pull into a turnout and let vehicles behind you pass if five or more vehicles are stacked up behind you when traveling at a reduced speed. Using turnouts helps reduce dangerous passing on narrow mountain roads.'},
  zh:{q:'山路上的"避让区"（turnout）是什么，应该何时使用？',opts:['观景用的指定停车点——疲劳时使用','道路边缘的铺装加宽路段——当后方较快车辆需要超越时使用','失控车辆的紧急逃生坡道——只在制动紧急情况下使用','山路上允许掉头的标记区域'],exp:'避让区是山路肩部的指定铺装加宽区域。加州法律要求，如果你在低速行驶时后方有5辆或以上车辆排队，你必须驶入避让区让他们超越。使用避让区有助于减少在狭窄山路上的危险超车行为。'},
  zhTW:{q:'山路上的"避讓區"（turnout）是什麼，應該何時使用？',opts:['觀景用的指定停車點——疲勞時使用','道路邊緣的鋪裝加寬路段——當後方較快車輛需要超越時使用','失控車輛的緊急逃生坡道——只在制動緊急情況下使用','山路上允許掉頭的標記區域'],exp:'避讓區是山路肩部的指定鋪裝加寬區域。加州法律要求，如果你在低速行駛時後方有5輛或以上車輛排隊，你必須駛入避讓區讓他們超越。使用避讓區有助於減少在狹窄山路上的危險超車行為。'},
  es:{q:'¿Qué es un "apartadero" en una carretera de montaña y cuándo debe usarlo?',opts:['Un estacionamiento designado para vistas panorámicas — úselo cuando esté cansado','Una sección pavimentada ensanchada al borde de la carretera — úsela para dejar pasar a vehículos más rápidos que vienen detrás','Una rampa de escape de emergencia para vehículos desbocados — úsela solo en emergencias de frenado','Un área marcada donde se permiten giros en U en carreteras de montaña'],exp:'Un apartadero es un área ensanchada pavimentada designada en el hombro de una carretera de montaña. La ley de California requiere que se detenga en un apartadero y deje pasar a los vehículos detrás si cinco o más vehículos están acumulados detrás de usted cuando viaja a velocidad reducida. Usar apartaderos ayuda a reducir adelantamientos peligrosos.'},
  ans:1
},
{
  id:437, cat:'dui',
  en:{q:'Which of the following best describes "driving under the influence" (DUI) in California?',opts:['Only applies to alcohol impairment','Applies to alcohol, illegal drugs, prescription medications, or any combination that impairs your ability to drive safely','Only applies if your BAC is 0.08% or more','Applies only when driving on a public freeway'],exp:'California\'s DUI law applies to any substance — including alcohol, illegal drugs, marijuana (even with a medical card), prescription drugs, or over-the-counter medications — that impairs your ability to drive safely. You can be convicted of DUI even if your BAC is below 0.08% if drugs have impaired your driving. The standard is whether your driving ability is impaired.'},
  zh:{q:'以下哪项最准确地描述了加州的"醉驾"（DUI）？',opts:['仅适用于酒精损伤','适用于酒精、违禁药物、处方药或任何使你无法安全驾驶的组合','只有当你的BAC达到0.08%或以上时才适用','只有在公共高速公路上驾驶时才适用'],exp:'加州DUI法律适用于任何物质——包括酒精、非法药物、大麻（即使有医疗卡）、处方药或非处方药——使你无法安全驾驶。即使你的BAC低于0.08%，如果药物损害了你的驾驶能力，你也可能被判DUI。标准是你的驾驶能力是否受损。'},
  zhTW:{q:'以下哪項最準確地描述了加州的"醉駕"（DUI）？',opts:['僅適用於酒精損傷','適用於酒精、違禁藥物、處方藥或任何使你無法安全駕駛的組合','只有當你的BAC達到0.08%或以上時才適用','只有在公共高速公路上駕駛時才適用'],exp:'加州DUI法律適用於任何物質——包括酒精、非法藥物、大麻（即使有醫療卡）、處方藥或非處方藥——使你無法安全駕駛。即使你的BAC低於0.08%，如果藥物損害了你的駕駛能力，你也可能被判DUI。標準是你的駕駛能力是否受損。'},
  es:{q:'¿Cuál de las siguientes opciones describe mejor "conducir bajo la influencia" (DUI) en California?',opts:['Solo aplica al deterioro por alcohol','Aplica al alcohol, drogas ilegales, medicamentos recetados, o cualquier combinación que deteriore su capacidad de conducir con seguridad','Solo aplica si su BAC es 0.08% o más','Solo aplica cuando conduce en una autopista pública'],exp:'La ley DUI de California aplica a cualquier sustancia — incluyendo alcohol, drogas ilegales, marihuana (incluso con tarjeta médica), medicamentos recetados, o medicamentos de venta libre — que deteriore su capacidad de conducir con seguridad. Puede ser condenado por DUI incluso si su BAC está por debajo de 0.08% si las drogas han deteriorado su conducción.'},
  ans:1
},
{
  id:438, cat:'safety',
  en:{q:'What should you do when you are driving and a tire suddenly blows out?',opts:['Immediately slam on the brakes and steer to the shoulder','Grip the steering wheel firmly, ease off the gas gradually, and gently steer to the shoulder — do not brake hard','Accelerate briefly to maintain control, then pull over','Turn the steering wheel sharply to the blown-out tire side'],exp:'If a tire blows out: grip the wheel firmly with both hands (the car may pull toward the blown tire). Ease off the gas — do not brake hard. Let the vehicle slow naturally while keeping it straight. Signal and gently steer to the shoulder. Only apply gentle braking once you have regained control at a lower speed. Hard braking during a blowout can cause the car to spin.'},
  zh:{q:'当你在驾车时轮胎突然爆胎，应该怎么做？',opts:['立即猛踩刹车并转向路肩','牢牢握住方向盘，逐渐松开油门，轻轻转向路肩——不要猛刹车','短暂加速以保持控制，然后靠边停车','将方向盘猛地朝爆胎的轮胎方向转'],exp:'如果轮胎爆胎：双手牢牢握住方向盘（车辆可能会朝爆胎方向偏转）。松开油门——不要猛刹车。让车辆自然减速，同时保持直行。打转向灯并轻轻转向路肩。只有在以较低速度重新控制后，才轻轻踩刹车。爆胎期间猛刹车可能导致汽车打转。'},
  zhTW:{q:'當你在駕車時輪胎突然爆胎，應該怎麼做？',opts:['立即猛踩剎車並轉向路肩','牢牢握住方向盤，逐漸松開油門，輕輕轉向路肩——不要猛剎車','短暫加速以保持控制，然後靠邊停車','將方向盤猛地朝爆胎的輪胎方向轉'],exp:'如果輪胎爆胎：雙手牢牢握住方向盤（車輛可能會朝爆胎方向偏轉）。松開油門——不要猛剎車。讓車輛自然減速，同時保持直行。打轉向燈並輕輕轉向路肩。只有在以較低速度重新控制後，才輕輕踩剎車。爆胎期間猛剎車可能導致汽車打轉。'},
  es:{q:'¿Qué debe hacer cuando está conduciendo y un neumático revienta repentinamente?',opts:['Frene inmediatamente a fondo y diríjase al hombro','Sujete firmemente el volante, suelte el acelerador gradualmente y diríjase suavemente al hombro — no frene fuerte','Acelere brevemente para mantener el control, luego deténgase','Gire el volante bruscamente hacia el lado del neumático reventado'],exp:'Si un neumático revienta: sujete el volante firmemente con ambas manos (el auto puede jalar hacia el neumático reventado). Suelte el acelerador — no frene fuerte. Deje que el vehículo reduzca velocidad naturalmente manteniéndolo recto. Señale y diríjase suavemente al hombro. Solo aplique frenado suave una vez que haya recuperado el control a menor velocidad.'},
  ans:1
},
{
  id:439, cat:'signs',
  en:{q:'What does a white sign with "WRONG WAY" in red letters mean?',opts:['Slow down — dangerous curve ahead','You are heading in the wrong direction on a one-way or divided road — stop and turn around immediately','Pedestrian crossing ahead — yield','No entry during rush hour'],exp:'A "WRONG WAY" sign means you are traveling against the flow of traffic — you have entered a one-way street or a divided highway going the wrong direction. Stop immediately! Turn your hazard lights on, back up if safe, or pull over and wait for traffic to clear, then turn around. Wrong-way driving causes head-on collisions and is extremely dangerous.'},
  zh:{q:'红色字体写着"WRONG WAY"（逆行）的白色标志意味着什么？',opts:['减速——前方有危险弯道','你在单行道或分隔公路上逆行——立即停车并掉头','前方行人过街——让行','高峰时间禁止进入'],exp:'"WRONG WAY"（逆行）标志意味着你正在逆交通流方向行驶——你进入了一条单行道或分隔公路但方向错误。立即停车！打开危险警告灯，如果安全可以倒车，或靠边停车等待交通通过，然后掉头。逆向行驶会导致迎头碰撞，极其危险。'},
  zhTW:{q:'紅色字體寫著"WRONG WAY"（逆行）的白色標誌意味著什麼？',opts:['減速——前方有危險彎道','你在單行道或分隔公路上逆行——立即停車並掉頭','前方行人過街——讓行','高峰時間禁止進入'],exp:'"WRONG WAY"（逆行）標誌意味著你正在逆交通流方向行駛——你進入了一條單行道或分隔公路但方向錯誤。立即停車！打開危險警告燈，如果安全可以倒車，或靠邊停車等待交通通過，然後掉頭。逆向行駛會導致迎頭碰撞，極其危險。'},
  es:{q:'¿Qué significa un letrero blanco con "WRONG WAY" (sentido incorrecto) en letras rojas?',opts:['Reduzca la velocidad — curva peligrosa adelante','Va en la dirección incorrecta en una calle de un solo sentido o carretera dividida — deténgase y dé vuelta inmediatamente','Cruce peatonal adelante — ceda el paso','No entrar durante horas pico'],exp:'Un letrero "WRONG WAY" significa que viaja contra el flujo del tráfico — ha entrado en una calle de un solo sentido o carretera dividida en la dirección incorrecta. ¡Deténgase inmediatamente! Encienda las luces de emergencia, retroceda si es seguro, o deténgase al lado y espere a que el tráfico se despeje, luego dé vuelta. Conducir en sentido contrario causa colisiones frontales.'},
  ans:1
},
{
  id:440, cat:'laws',
  en:{q:'In California, what is the "Move Over" law?',opts:['You must move over one lane when passing a bicyclist','When approaching a stationary emergency or tow vehicle with lights flashing on the side of the road, you must move over one lane away or slow to a safe speed','You must move over to the right whenever a faster vehicle approaches from behind','You must move over when a vehicle in front of you signals a lane change'],exp:'California\'s Move Over law requires drivers to move over one lane away from a stationary emergency vehicle, tow truck, or other authorized vehicle with flashing lights on the roadside. If it is not safe or possible to change lanes, you must slow down to a speed that is safe for conditions. Violating this law is a moving violation and can result in fines.'},
  zh:{q:'加州的"让路"法律是什么？',opts:['超过骑行者时必须让开一个车道','当接近路边停靠的闪灯紧急或拖车车辆时，必须向左让开一个车道或减速至安全速度','当后方有更快的车辆接近时必须向右让路','当前方车辆发出变道信号时必须让路'],exp:'加州的"让路"法律要求驾驶员在接近路边停靠的闪灯紧急车辆、拖车或其他授权车辆时，向左移动一个车道。如果不能安全或无法变道，必须减速至适合当前状况的安全速度。违反此法律属于行驶违规，可能导致罚款。'},
  zhTW:{q:'加州的"讓路"法律是什麼？',opts:['超過騎行者時必須讓開一個車道','當接近路邊停靠的閃燈緊急或拖車車輛時，必須向左讓開一個車道或減速至安全速度','當後方有更快的車輛接近時必須向右讓路','當前方車輛發出變道信號時必須讓路'],exp:'加州的"讓路"法律要求駕駛員在接近路邊停靠的閃燈緊急車輛、拖車或其他授權車輛時，向左移動一個車道。如果不能安全或無法變道，必須減速至適合當前狀況的安全速度。違反此法律屬於行駛違規，可能導致罰款。'},
  es:{q:'¿Cuál es la ley "Move Over" (Ceda el Paso) en California?',opts:['Debe cambiar de carril al pasar a un ciclista','Al acercarse a un vehículo de emergencia o grúa estacionado con luces encendidas en la orilla de la carretera, debe moverse un carril o reducir a una velocidad segura','Debe moverse a la derecha cuando un vehículo más rápido se aproxima desde atrás','Debe moverse cuando el vehículo de adelante señala un cambio de carril'],exp:'La ley Move Over de California requiere que los conductores cambien un carril al alejarse de un vehículo de emergencia, grúa u otro vehículo autorizado estacionado con luces intermitentes en la orilla. Si no es seguro o posible cambiar de carril, debe reducir la velocidad a una velocidad segura para las condiciones. Violar esta ley es una infracción de tráfico.'},
  ans:1
},

,
{
  id:441, cat:'signs',
  en:{q:'What does a sign showing a truck on a downgrade (sloped symbol) mean?',opts:['No trucks allowed on this road','Steep hill ahead — trucks should use lower gear to control speed','Trucks must use the right lane only','Runaway truck ramp ahead'],exp:'A sign showing a truck on a downgrade warns of a steep downhill grade ahead. Trucks (and drivers of any heavy vehicle) should downshift to a lower gear before the descent to use engine braking and maintain control. This prevents brake overheating and runaway vehicle situations. These signs are especially common on mountain roads.'},
  zh:{q:'显示卡车在下坡行驶（斜坡符号）的标志意味着什么？',opts:['此路禁止卡车通行','前方有陡峭下坡——卡车应使用低挡控制速度','卡车必须只使用右侧车道','前方有失控卡车紧急匝道'],exp:'显示卡车在下坡行驶的标志警告前方有陡峭下坡路段。卡车（以及任何重型车辆的驾驶员）在下坡前应换入低挡，以使用发动机制动并保持控制。这可以防止刹车过热和车辆失控的情况。这些标志在山路上尤为常见。'},
  zhTW:{q:'顯示卡車在下坡行駛（斜坡符號）的標誌意味著什麼？',opts:['此路禁止卡車通行','前方有陡峭下坡——卡車應使用低檔控制速度','卡車必須只使用右側車道','前方有失控卡車緊急匝道'],exp:'顯示卡車在下坡行駛的標誌警告前方有陡峭下坡路段。卡車（以及任何重型車輛的駕駛員）在下坡前應換入低檔，以使用發動機制動並保持控制。這可以防止剎車過熱和車輛失控的情況。這些標誌在山路上尤為常見。'},
  es:{q:'¿Qué significa un letrero que muestra un camión en una bajada (símbolo inclinado)?',opts:['No se permiten camiones en esta carretera','Pendiente pronunciada adelante — los camiones deben usar marchas bajas para controlar la velocidad','Los camiones deben usar solo el carril derecho','Rampa de escape para camiones adelante'],exp:'Un letrero que muestra un camión en una bajada advierte de una pendiente pronunciada cuesta abajo. Los camiones (y los conductores de cualquier vehículo pesado) deben cambiar a una marcha más baja antes del descenso para usar el freno del motor y mantener el control. Esto previene el sobrecalentamiento de frenos y situaciones de vehículos desbocados.'},
  ans:1
},
{
  id:442, cat:'rightofway',
  en:{q:'You are already in a traffic circle (roundabout). Another vehicle wants to enter. Who has the right-of-way?',opts:['The entering vehicle, because they arrived at the intersection','Vehicles already in the roundabout — entering drivers must yield','Whoever is going straight through the circle','The vehicle on the right always goes first'],exp:'In a roundabout (traffic circle), vehicles already inside the circle always have the right-of-way. Entering vehicles must yield to circulating traffic. Enter when there is a safe gap in traffic. Roundabouts are designed to reduce high-speed conflicts; traffic moves counter-clockwise in the US. Do not stop inside the roundabout unless necessary.'},
  zh:{q:'你已经在交通环岛内行驶。另一辆车想要进入。谁有通行权？',opts:['进入的车辆，因为它先到达路口','已在环岛内的车辆——进入的驾驶员必须让行','直行穿越环岛的人','右边的车辆总是先行'],exp:'在环岛（交通环岛）内，已在环岛内行驶的车辆总是有通行权。进入的车辆必须让行环行交通。在交通中有安全空隙时进入。环岛设计用来减少高速冲突；在美国，交通逆时针方向行驶。除非必要，不要在环岛内停车。'},
  zhTW:{q:'你已經在交通環島內行駛。另一輛車想要進入。誰有通行權？',opts:['進入的車輛，因為它先到達路口','已在環島內的車輛——進入的駕駛員必須讓行','直行穿越環島的人','右邊的車輛總是先行'],exp:'在環島（交通環島）內，已在環島內行駛的車輛總是有通行權。進入的車輛必須讓行環行交通。在交通中有安全空隙時進入。環島設計用來減少高速衝突；在美國，交通逆時針方向行駛。除非必要，不要在環島內停車。'},
  es:{q:'Ya está dentro de una rotonda (glorieta). Otro vehículo quiere entrar. ¿Quién tiene el derecho de paso?',opts:['El vehículo entrante, porque llegó primero a la intersección','Los vehículos que ya están en la rotonda — los conductores que entran deben ceder el paso','Quien va recto a través del círculo','El vehículo a la derecha siempre va primero'],exp:'En una rotonda, los vehículos que ya están dentro del círculo siempre tienen el derecho de paso. Los vehículos que entran deben ceder el paso al tráfico en circulación. Entre cuando haya un espacio seguro en el tráfico. Las rotondas están diseñadas para reducir conflictos a alta velocidad; el tráfico se mueve en sentido antihorario en EE.UU.'},
  ans:1
},
{
  id:443, cat:'laws',
  en:{q:'What are the requirements for a child passenger restraint in California?',opts:['Children under 4 must be in a car seat','Children under 8 must be in a car seat or booster seat AND must ride in the back seat','Children under 6 or weighing less than 60 lbs must use a child restraint','All children under 18 must sit in the back seat'],exp:'California law requires children under 8 years old to be secured in a car seat or booster seat in the back seat. Children under 2 years or less than 40 lbs must ride in a rear-facing seat. Once a child is 8 years or older, they may use a seat belt, but must still meet size requirements. Never place a rear-facing car seat in front of an active airbag.'},
  zh:{q:'加州对儿童乘客安全约束有什么要求？',opts:['4岁以下儿童必须坐儿童座椅','8岁以下儿童必须坐儿童座椅或增高坐垫，并且必须坐在后座','6岁以下或体重不足60磅的儿童必须使用儿童约束装置','18岁以下的所有儿童必须坐在后座'],exp:'加州法律要求8岁以下的儿童在后座使用儿童座椅或增高坐垫固定。2岁以下或体重不足40磅的儿童必须使用后向安全座椅。一旦儿童年满8岁，可以使用安全带，但仍需符合身材要求。永远不要将后向安全座椅放在有气囊的前排座位前。'},
  zhTW:{q:'加州對兒童乘客安全約束有什麼要求？',opts:['4歲以下兒童必須坐兒童座椅','8歲以下兒童必須坐兒童座椅或增高坐墊，並且必須坐在後座','6歲以下或體重不足60磅的兒童必須使用兒童約束裝置','18歲以下的所有兒童必須坐在後座'],exp:'加州法律要求8歲以下的兒童在後座使用兒童座椅或增高坐墊固定。2歲以下或體重不足40磅的兒童必須使用後向安全座椅。一旦兒童年滿8歲，可以使用安全帶，但仍需符合身材要求。永遠不要將後向安全座椅放在有氣囊的前排座位前。'},
  es:{q:'¿Cuáles son los requisitos para el sistema de retención de pasajeros infantiles en California?',opts:['Los niños menores de 4 años deben ir en silla de auto','Los niños menores de 8 años deben ir en silla de auto o asiento elevador Y deben ir en el asiento trasero','Los niños menores de 6 años o que pesen menos de 60 libras deben usar un sistema de retención infantil','Todos los niños menores de 18 años deben sentarse en el asiento trasero'],exp:'La ley de California requiere que los niños menores de 8 años estén asegurados en una silla de auto o asiento elevador en el asiento trasero. Los niños menores de 2 años o que pesen menos de 40 libras deben ir en un asiento orientado hacia atrás. Una vez que el niño tiene 8 años o más, puede usar cinturón de seguridad. Nunca coloque una silla orientada hacia atrás frente a una bolsa de aire activa.'},
  ans:1
},
{
  id:444, cat:'speed',
  en:{q:'Under the basic speed law, what is a reasonable speed to drive during heavy fog?',opts:['The posted speed limit — signs determine safe speed','Whatever speed lets you stop within the distance you can see clearly','50% of the posted limit','35 mph at all times during reduced visibility'],exp:'The basic speed law requires you to drive at a speed where you can stop safely within the distance you can clearly see ahead. In heavy fog, if you can only see 100 feet ahead, you must be traveling at a speed where you can stop within 100 feet. This may be far below the posted limit. Use low-beam headlights in fog (high beams reflect back and reduce visibility further).'},
  zh:{q:'根据基本速度法则，在浓雾中合理的行驶速度是什么？',opts:['限速——标志决定安全速度','任何能让你在可清晰看到的距离内停车的速度','限速的50%','能见度降低时始终35英里/小时'],exp:'基本速度法则要求你以能在清晰可见范围内安全停车的速度行驶。在浓雾中，如果你只能看到前方100英尺，你的行驶速度必须能在100英尺内停车。这可能远低于限速。在雾中使用近光灯（远光灯会反射回来，进一步降低能见度）。'},
  zhTW:{q:'根據基本速度法則，在濃霧中合理的行駛速度是什麼？',opts:['限速——標誌決定安全速度','任何能讓你在可清晰看到的距離內停車的速度','限速的50%','能見度降低時始終35英里/小時'],exp:'基本速度法則要求你以能在清晰可見範圍內安全停車的速度行駛。在濃霧中，如果你只能看到前方100英尺，你的行駛速度必須能在100英尺內停車。這可能遠低於限速。在霧中使用近光燈（遠光燈會反射回來，進一步降低能見度）。'},
  es:{q:'Bajo la ley de velocidad básica, ¿cuál es una velocidad razonable para conducir durante niebla densa?',opts:['El límite de velocidad publicado — los letreros determinan la velocidad segura','Cualquier velocidad que le permita detenerse dentro de la distancia que puede ver claramente','El 50% del límite publicado','35 mph en todo momento durante visibilidad reducida'],exp:'La ley de velocidad básica requiere conducir a una velocidad donde pueda detenerse con seguridad dentro de la distancia que puede ver claramente. En niebla densa, si solo puede ver 100 pies, debe viajar a una velocidad donde pueda detenerse dentro de 100 pies. Esto puede ser muy por debajo del límite. Use luces bajas en la niebla (las luces altas reflejan y reducen aún más la visibilidad).'},
  ans:1
},
{
  id:445, cat:'parking',
  en:{q:'Which of the following is NOT a valid reason to park in a disabled (handicap) parking space?',opts:['Your vehicle displays a valid disabled person placard (DP placard)','The space is empty and you will only be parked for 2 minutes','You are transporting a disabled person who displays a valid placard','Your vehicle has disabled person license plates'],exp:'You may only park in a disabled parking space if the vehicle displays a valid Disabled Person (DP) placard or disabled person license plates. Simply being quick or claiming you are picking someone up does not matter — the placard or plate must be displayed. Unauthorized parking in a disabled space is subject to a substantial fine (typically $250–$1,000 in California) and possible towing.'},
  zh:{q:'以下哪项不是在残疾人停车位停车的有效理由？',opts:['你的车辆显示有效的残疾人标牌（DP牌）','停车位是空的，你只会停2分钟','你正在运送一位显示有效标牌的残疾人','你的车辆有残疾人车牌'],exp:'只有当车辆显示有效的残疾人（DP）标牌或残疾人车牌时，才能在残疾人停车位停车。仅仅是停车时间短或声称正在接送某人都不行——必须显示标牌或车牌。未经授权在残疾人停车位停车将受到大额罚款（加州通常为250-1000美元）和可能的拖车处理。'},
  zhTW:{q:'以下哪項不是在殘疾人停車位停車的有效理由？',opts:['你的車輛顯示有效的殘疾人標牌（DP牌）','停車位是空的，你只會停2分鐘','你正在運送一位顯示有效標牌的殘疾人','你的車輛有殘疾人車牌'],exp:'只有當車輛顯示有效的殘疾人（DP）標牌或殘疾人車牌時，才能在殘疾人停車位停車。僅僅是停車時間短或聲稱正在接送某人都不行——必須顯示標牌或車牌。未經授權在殘疾人停車位停車將受到大額罰款（加州通常為250-1000美元）和可能的拖車處理。'},
  es:{q:'¿Cuál de las siguientes NO es una razón válida para estacionar en un espacio para discapacitados?',opts:['Su vehículo muestra una placa de persona discapacitada (DP) válida','El espacio está vacío y solo estará estacionado 2 minutos','Está transportando a una persona discapacitada con placa válida','Su vehículo tiene placas de persona discapacitada'],exp:'Solo puede estacionar en un espacio para discapacitados si el vehículo muestra una placa de Persona Discapacitada (DP) válida o placas de persona discapacitada. Simplemente ser rápido o afirmar que está recogiendo a alguien no importa — la placa debe estar visible. El estacionamiento no autorizado en un espacio para discapacitados está sujeto a una multa sustancial (típicamente $250-$1,000 en California).'},
  ans:1
},
{
  id:446, cat:'highway',
  en:{q:'What is the purpose of the "zipper merge" technique in highway construction zones?',opts:['To allow emergency vehicles to pass through construction zones faster','Drivers stay in their lane until the merge point, then take turns alternating — reducing overall traffic backup','To guide drivers into a single file well before the lane ends','To prevent heavy trucks from merging too late'],exp:'The zipper merge is a technique where drivers use both lanes until the lane closure point, then merge alternately, one car at a time, like a zipper. Studies show this reduces overall backup length by up to 40% and creates more even traffic flow. It feels counterintuitive but is safer and more efficient than early merging. California encourages zipper merging in construction zones.'},
  zh:{q:'"拉链合并"技术在高速公路施工区的目的是什么？',opts:['让紧急车辆更快通过施工区','驾驶员在各自车道行驶至合并点，然后交替行驶，像拉链一样——减少整体交通积压','在车道结束前很早就引导驾驶员排成单列','防止重型卡车太晚合并'],exp:'"拉链合并"是一种技术，驾驶员使用两个车道直到车道关闭点，然后像拉链一样交替合并，每次一辆车。研究表明，这可以将整体积压长度减少多达40%，并创建更均匀的交通流。感觉违反直觉，但比提前合并更安全、更高效。加州鼓励在施工区进行拉链合并。'},
  zhTW:{q:'"拉鏈合並"技術在高速公路施工區的目的是什麼？',opts:['讓緊急車輛更快通過施工區','駕駛員在各自車道行駛至合並點，然後交替行駛，像拉鏈一樣——減少整體交通積壓','在車道結束前很早就引導駕駛員排成單列','防止重型卡車太晚合並'],exp:'"拉鏈合並"是一種技術，駕駛員使用兩個車道直到車道關閉點，然後像拉鏈一樣交替合並，每次一輛車。研究表明，這可以將整體積壓長度減少多達40%，並創建更均勻的交通流。感覺違反直覺，但比提前合並更安全、更高效。加州鼓勵在施工區進行拉鏈合並。'},
  es:{q:'¿Cuál es el propósito de la técnica de "fusión cremallera" en zonas de construcción de autopistas?',opts:['Permitir que los vehículos de emergencia pasen por zonas de construcción más rápido','Los conductores permanecen en su carril hasta el punto de fusión, luego se alternan — reduciendo el respaldo de tráfico general','Guiar a los conductores a una fila única mucho antes de que termine el carril','Evitar que los camiones pesados se fusionen demasiado tarde'],exp:'La fusión cremallera es una técnica donde los conductores usan ambos carriles hasta el punto de cierre de carril, luego se fusionan alternadamente, un auto a la vez, como un cierre. Los estudios muestran que esto reduce la longitud del respaldo hasta en un 40% y crea un flujo de tráfico más uniforme. Parece contraintuitivo pero es más seguro y eficiente que fusionarse temprano.'},
  ans:1
},
{
  id:447, cat:'dui',
  en:{q:'Approximately how long does it take the body to eliminate one standard drink (0.6 oz of pure alcohol)?',opts:['15 minutes','30 minutes','About 1 hour','2 to 3 hours'],exp:'The body eliminates alcohol at a rate of approximately one standard drink per hour — regardless of gender, body size, coffee, food, or exercise. A standard drink is 12 oz beer (5%), 5 oz wine (12%), or 1.5 oz spirits (40%). Only time eliminates alcohol. Cold showers, coffee, and food do not speed up the process. Planning ahead is the only safe choice.'},
  zh:{q:'身体大约需要多长时间才能消除一杯标准饮品（0.6盎司纯酒精）？',opts:['15分钟','30分钟','大约1小时','2至3小时'],exp:'无论性别、体型、咖啡、食物或运动，身体消除酒精的速度约为每小时一杯标准饮品。一杯标准饮品是12盎司啤酒（5%）、5盎司葡萄酒（12%）或1.5盎司烈酒（40%）。只有时间才能消除酒精。冷水澡、咖啡和食物不会加速这一过程。提前计划是唯一安全的选择。'},
  zhTW:{q:'身體大約需要多長時間才能消除一杯標準飲品（0.6盎司純酒精）？',opts:['15分鐘','30分鐘','大約1小時','2至3小時'],exp:'無論性別、體型、咖啡、食物或運動，身體消除酒精的速度約為每小時一杯標準飲品。一杯標準飲品是12盎司啤酒（5%）、5盎司葡萄酒（12%）或1.5盎司烈酒（40%）。只有時間才能消除酒精。冷水澡、咖啡和食物不會加速這一過程。提前計劃是唯一安全的選擇。'},
  es:{q:'¿Aproximadamente cuánto tiempo tarda el cuerpo en eliminar una bebida estándar (0.6 oz de alcohol puro)?',opts:['15 minutos','30 minutos','Aproximadamente 1 hora','2 a 3 horas'],exp:'El cuerpo elimina el alcohol a una tasa de aproximadamente una bebida estándar por hora, independientemente del género, tamaño corporal, café, comida o ejercicio. Una bebida estándar es 12 oz de cerveza (5%), 5 oz de vino (12%) o 1.5 oz de licor (40%). Solo el tiempo elimina el alcohol. Las duchas frías, el café y la comida no aceleran el proceso.'},
  ans:2
},
{
  id:448, cat:'safety',
  en:{q:'You are driving behind a large truck on the highway. Why is it dangerous to follow too closely (tailgating a truck)?',opts:['Trucks have higher speed limits, so they can accelerate away from you','Following too closely creates a "no zone" (blind spot) where the truck driver cannot see your car, and you cannot see ahead','Trucks create wind turbulence that can damage your car','Trucks are allowed to brake check other drivers'],exp:'Large trucks have significant "no zones" — blind spots directly in front, directly behind, and along both sides. If you cannot see the truck\'s mirrors, the truck driver cannot see you. Additionally, tailgating means you have no view of the road ahead and inadequate stopping distance if the truck brakes. The front and rear blind spots are especially large. Stay out of no zones.'},
  zh:{q:'你在高速公路上跟在一辆大卡车后面。为什么跟车太近（顶车）会很危险？',opts:['卡车的速度限制更高，所以它们可以加速远离你','跟车太近会产生"盲区"，卡车司机看不到你的车，你也看不到前方','卡车产生的气流会损坏你的车','卡车被允许急刹来检查其他驾驶员'],exp:'大型卡车有明显的"盲区"——直接在前方、直接在后方和两侧。如果你看不到卡车的后视镜，卡车司机就看不到你。此外，跟车太近意味着你对前方道路没有视野，如果卡车刹车，停车距离也不足。前后盲区尤其大。不要进入盲区。'},
  zhTW:{q:'你在高速公路上跟在一輛大卡車後面。為什麼跟車太近（頂車）會很危險？',opts:['卡車的速度限制更高，所以它們可以加速遠離你','跟車太近會產生"盲區"，卡車司機看不到你的車，你也看不到前方','卡車產生的氣流會損壞你的車','卡車被允許急剎來檢查其他駕駛員'],exp:'大型卡車有明顯的"盲區"——直接在前方、直接在後方和兩側。如果你看不到卡車的後視鏡，卡車司機就看不到你。此外，跟車太近意味著你對前方道路沒有視野，如果卡車剎車，停車距離也不足。前後盲區尤其大。不要進入盲區。'},
  es:{q:'Está conduciendo detrás de un camión grande en la autopista. ¿Por qué es peligroso seguir demasiado de cerca (tailgating a un camión)?',opts:['Los camiones tienen límites de velocidad más altos, así que pueden alejarse acelerando','Seguir demasiado de cerca crea una "zona ciega" donde el conductor del camión no puede ver su auto, y usted no puede ver hacia adelante','Los camiones crean turbulencia de viento que puede dañar su auto','Los camiones pueden frenar bruscamente para revisar a otros conductores'],exp:'Los camiones grandes tienen "zonas ciegas" significativas: directamente al frente, directamente atrás y a ambos lados. Si no puede ver los espejos del camión, el conductor del camión no puede verlo. Además, el tailgating significa que no tiene vista de la carretera adelante y distancia de frenado inadecuada. Las zonas ciegas frontales y traseras son especialmente grandes.'},
  ans:1
},
{
  id:449, cat:'signs',
  en:{q:'What does a sign with a white "X" and the letters "RR" mean?',opts:['No right turn ahead','Railroad crossing ahead — stop if a train is approaching','Rest area ahead','Road reconstruction zone'],exp:'A sign with "RR" crossed by an "X" means railroad crossing. You should slow down, look and listen for trains in both directions, and be prepared to stop. Never stop on train tracks even if traffic is backed up ahead. Never race a train to a crossing — a train traveling at 55 mph needs about one mile to stop. Never drive around lowered crossing gates.'},
  zh:{q:'带有白色"X"和字母"RR"的标志意味着什么？',opts:['前方禁止右转','前方铁路道口——如果火车接近则停车','前方有休息区','道路重建区'],exp:'带有"RR"并被"X"穿过的标志意味着铁路道口。你应该减速，在两个方向查看并聆听是否有火车，并准备停车。即使前方交通堵塞，也不要停在铁轨上。不要与火车赛跑穿越道口——以55英里/小时行驶的火车需要大约一英里才能停下来。不要绕过降下的道口栏杆行驶。'},
  zhTW:{q:'帶有白色"X"和字母"RR"的標誌意味著什麼？',opts:['前方禁止右轉','前方鐵路道口——如果火車接近則停車','前方有休息區','道路重建區'],exp:'帶有"RR"並被"X"穿過的標誌意味著鐵路道口。你應該減速，在兩個方向查看並聆聽是否有火車，並準備停車。即使前方交通堵塞，也不要停在鐵軌上。不要與火車賽跑穿越道口——以55英里/小時行駛的火車需要大約一英里才能停下來。不要繞過降下的道口欄桿行駛。'},
  es:{q:'¿Qué significa un letrero con una "X" blanca y las letras "RR"?',opts:['No girar a la derecha adelante','Cruce de ferrocarril adelante — deténgase si se acerca un tren','Área de descanso adelante','Zona de reconstrucción de carretera'],exp:'Un letrero con "RR" cruzado por una "X" significa cruce de ferrocarril. Debe disminuir la velocidad, mirar y escuchar si hay trenes en ambas direcciones, y estar preparado para detenerse. Nunca se detenga en las vías del tren incluso si el tráfico está congestionado adelante. Nunca compita con un tren en un cruce — un tren a 55 mph necesita aproximadamente una milla para detenerse.'},
  ans:1
},
{
  id:450, cat:'laws',
  en:{q:'In California, when is it legal to make a U-turn?',opts:['Whenever there is no oncoming traffic','At any intersection unless a sign prohibits it, and only when it can be made safely without affecting other traffic','Only in designated U-turn areas with a sign','Only on divided highways with a median'],exp:'In California, U-turns are legal at intersections unless prohibited by a sign, and only when you can complete the turn safely without posing a hazard. U-turns are prohibited: in business districts except at intersections, where a "No U-Turn" sign is posted, on curves or hills where you cannot be seen, near fire stations driveways, and when traffic prevents a safe turn. Always check local ordinances.'},
  zh:{q:'在加州，什么时候U形掉头是合法的？',opts:['只要没有对向来车','在任何路口，除非有标志禁止，且只有在不影响其他交通的情况下可以安全完成时','只在有标志的指定掉头区域','只在有中央分隔带的分隔公路上'],exp:'在加州，在路口掉头是合法的，除非标志禁止，且只有在能安全完成且不构成危险时。以下情况禁止掉头：在商业区（除路口外）、有"禁止掉头"标志处、在无法被看见的弯道或山坡上、在消防站车道附近，以及当交通阻止安全掉头时。始终检查当地法规。'},
  zhTW:{q:'在加州，什麼時候U形掉頭是合法的？',opts:['只要沒有對向來車','在任何路口，除非有標誌禁止，且只有在不影響其他交通的情況下可以安全完成時','只在有標誌的指定掉頭區域','只在有中央分隔帶的分隔公路上'],exp:'在加州，在路口掉頭是合法的，除非標誌禁止，且只有在能安全完成且不構成危險時。以下情況禁止掉頭：在商業區（除路口外）、有"禁止掉頭"標誌處、在無法被看見的彎道或山坡上、在消防站車道附近，以及當交通阻止安全掉頭時。始終檢查當地法規。'},
  es:{q:'En California, ¿cuándo es legal hacer un giro en U?',opts:['Siempre que no haya tráfico en sentido contrario','En cualquier intersección a menos que un letrero lo prohíba, y solo cuando se pueda hacer de forma segura sin afectar a otro tráfico','Solo en áreas designadas de giro en U con letrero','Solo en autopistas divididas con mediana'],exp:'En California, los giros en U son legales en intersecciones a menos que lo prohíba un letrero, y solo cuando puede completar el giro de forma segura sin crear un peligro. Los giros en U están prohibidos: en distritos comerciales excepto en intersecciones, donde haya un letrero "No U-Turn", en curvas o colinas donde no puede ser visto, cerca de entradas de estaciones de bomberos.'},
  ans:1
},

,
{
  id:451, cat:'signs',
  en:{q:'A yellow diamond sign shows a deer. What does this mean?',opts:['Deer hunting is permitted in the area','Watch for deer crossing the road — animals may appear suddenly','A wildlife reserve is ahead — no vehicles allowed','Deer crossing only permitted at designated crossings'],exp:'Yellow diamond warning signs with animal silhouettes (deer, elk, cattle, etc.) alert drivers that these animals are common in the area and may cross the road unexpectedly. Slow down, especially at dawn and dusk when animals are most active. If you see one deer, expect more — they travel in groups. Do not swerve drastically; reduce speed and use your horn.'},
  zh:{q:'黄色菱形标志显示一只鹿。这意味着什么？',opts:['该地区允许猎鹿','注意鹿穿越道路——动物可能突然出现','前方是野生动物保护区——禁止车辆进入','鹿只能在指定穿越处过路'],exp:'带有动物轮廓（鹿、麋鹿、牛等）的黄色菱形警告标志提醒驾驶员这些动物在该地区很常见，可能意外穿越道路。减速行驶，尤其是在黎明和黄昏时分，因为动物在此时最活跃。如果你看到一只鹿，要预期还有更多——它们成群行动。不要猛打方向盘；减速并使用喇叭。'},
  zhTW:{q:'黃色菱形標誌顯示一隻鹿。這意味著什麼？',opts:['該地區允許獵鹿','注意鹿穿越道路——動物可能突然出現','前方是野生動物保護區——禁止車輛進入','鹿只能在指定穿越處過路'],exp:'帶有動物輪廓（鹿、麋鹿、牛等）的黃色菱形警告標誌提醒駕駛員這些動物在該地區很常見，可能意外穿越道路。減速行駛，尤其是在黎明和黃昏時分，因為動物在此時最活躍。如果你看到一隻鹿，要預期還有更多——它們成群行動。不要猛打方向盤；減速並使用喇叭。'},
  es:{q:'Un letrero de diamante amarillo muestra un venado. ¿Qué significa esto?',opts:['La caza de venados está permitida en el área','Tenga cuidado con los venados cruzando la carretera — los animales pueden aparecer de repente','Hay una reserva de vida silvestre adelante — no se permiten vehículos','El cruce de venados solo está permitido en cruces designados'],exp:'Los letreros de advertencia de diamante amarillo con siluetas de animales (venados, alces, ganado, etc.) alertan a los conductores de que estos animales son comunes en el área y pueden cruzar la carretera inesperadamente. Reduzca la velocidad, especialmente al amanecer y al anochecer cuando los animales son más activos. Si ve un venado, espere más — viajan en grupos.'},
  ans:1
},
{
  id:452, cat:'laws',
  en:{q:'What must you do when your driver\'s license address changes in California?',opts:['Nothing — the DMV automatically updates your address','Notify the DMV within 10 days of moving','Notify the DMV within 5 days of moving','Apply for a new license within 30 days'],exp:'California law requires you to notify the DMV of a change of address within 10 days of moving. You can do this online, by mail, or in person at a DMV office. Failure to update your address can result in missing important DMV correspondence such as registration renewals, license renewal notices, or traffic tickets sent to your old address.'},
  zh:{q:'在加州，当你的驾驶执照地址发生变化时，你必须做什么？',opts:['什么都不用做——DMV会自动更新你的地址','在搬家后10天内通知DMV','在搬家后5天内通知DMV','在30天内申请新驾照'],exp:'加州法律要求你在搬家后10天内向DMV通知地址变更。你可以在线、邮件或亲自到DMV办公室办理。不更新地址可能会导致错过重要的DMV通信，如注册更新、驾照更新通知或发送到旧地址的交通罚单。'},
  zhTW:{q:'在加州，當你的駕駛執照地址發生變化時，你必須做什麼？',opts:['什麼都不用做——DMV會自動更新你的地址','在搬家後10天內通知DMV','在搬家後5天內通知DMV','在30天內申請新駕照'],exp:'加州法律要求你在搬家後10天內向DMV通知地址變更。你可以在線、郵件或親自到DMV辦公室辦理。不更新地址可能會導致錯過重要的DMV通信，如注冊更新、駕照更新通知或發送到舊地址的交通罰單。'},
  es:{q:'¿Qué debe hacer cuando cambia la dirección de su licencia de conducir en California?',opts:['Nada — el DMV actualiza su dirección automáticamente','Notificar al DMV dentro de 10 días de mudarse','Notificar al DMV dentro de 5 días de mudarse','Solicitar una nueva licencia dentro de 30 días'],exp:'La ley de California requiere que notifique al DMV un cambio de dirección dentro de 10 días de mudarse. Puede hacerlo en línea, por correo o en persona en una oficina del DMV. No actualizar su dirección puede resultar en perder correspondencia importante del DMV como renovaciones de registro, avisos de renovación de licencia o multas de tráfico enviadas a su dirección anterior.'},
  ans:1
},
{
  id:453, cat:'rightofway',
  en:{q:'You are making a left turn at an intersection with a solid green light. Who must you yield to?',opts:['No one — the green light gives you the right-of-way','Oncoming vehicles going straight or turning right, and any pedestrians in the crosswalk','Only vehicles that arrived at the intersection before you','Only emergency vehicles'],exp:'When making an unprotected left turn on a green light, you must yield to all oncoming traffic traveling straight or turning right, as well as any pedestrians crossing the street you are turning into. Oncoming vehicles have the right-of-way. Wait for a clear and safe gap before turning. Only a green arrow gives you a protected turn without having to yield.'},
  zh:{q:'在有纯绿灯的路口左转时，你必须让行谁？',opts:['没有人——绿灯给你通行权','直行或右转的对向车辆，以及任何在人行横道内的行人','只有在你之前到达路口的车辆','只有紧急车辆'],exp:'在绿灯处进行无保护左转时，你必须让行所有直行或右转的对向交通，以及任何穿越你转入街道的行人。对向车辆有通行权。等到有清晰安全的空隙再转弯。只有绿色箭头才能给你提供无需让行的保护性转弯。'},
  zhTW:{q:'在有純綠燈的路口左轉時，你必須讓行誰？',opts:['沒有人——綠燈給你通行權','直行或右轉的對向車輛，以及任何在人行橫道內的行人','只有在你之前到達路口的車輛','只有緊急車輛'],exp:'在綠燈處進行無保護左轉時，你必須讓行所有直行或右轉的對向交通，以及任何穿越你轉入街道的行人。對向車輛有通行權。等到有清晰安全的空隙再轉彎。只有綠色箭頭才能給你提供無需讓行的保護性轉彎。'},
  es:{q:'Está girando a la izquierda en una intersección con semáforo verde sólido. ¿A quién debe ceder el paso?',opts:['A nadie — el semáforo verde le da el derecho de paso','Vehículos en sentido contrario que van recto o giran a la derecha, y cualquier peatón en el cruce','Solo los vehículos que llegaron a la intersección antes que usted','Solo los vehículos de emergencia'],exp:'Al hacer un giro a la izquierda no protegido con semáforo verde, debe ceder el paso a todo el tráfico en sentido contrario que va recto o gira a la derecha, así como a cualquier peatón cruzando la calle a la que gira. Los vehículos que vienen de frente tienen el derecho de paso. Espere un espacio seguro antes de girar. Solo una flecha verde le da un giro protegido sin tener que ceder el paso.'},
  ans:1
},
{
  id:454, cat:'speed',
  en:{q:'What is the maximum speed limit on a two-lane undivided highway in California unless otherwise posted?',opts:['55 mph','65 mph','45 mph','70 mph'],exp:'The maximum speed limit on a two-lane undivided highway in California is 55 mph unless a different speed is posted. This is a prima facie speed limit. On a two-lane road, extra caution is needed because vehicles travel in opposite directions with only a painted centerline as separation. Always adjust speed for road conditions, curves, and visibility.'},
  zh:{q:'在加州，两车道未分隔公路的最高速度限制是多少（除非另有标志）？',opts:['55英里/小时','65英里/小时','45英里/小时','70英里/小时'],exp:'在加州，两车道未分隔公路的最高速度限制为55英里/小时，除非有不同的速度标志。这是法定速度限制。在两车道道路上，需要格外小心，因为车辆在相反方向行驶，只有一条涂漆中心线作为分隔。始终根据道路状况、弯道和能见度调整速度。'},
  zhTW:{q:'在加州，兩車道未分隔公路的最高速度限制是多少（除非另有標誌）？',opts:['55英里/小時','65英里/小時','45英里/小時','70英里/小時'],exp:'在加州，兩車道未分隔公路的最高速度限制為55英里/小時，除非有不同的速度標誌。這是法定速度限制。在兩車道道路上，需要格外小心，因為車輛在相反方向行駛，只有一條塗漆中心線作為分隔。始終根據道路狀況、彎道和能見度調整速度。'},
  es:{q:'¿Cuál es el límite de velocidad máximo en una carretera de dos carriles no dividida en California a menos que se indique lo contrario?',opts:['55 mph','65 mph','45 mph','70 mph'],exp:'El límite de velocidad máximo en una carretera de dos carriles no dividida en California es 55 mph a menos que se publique una velocidad diferente. Este es un límite de velocidad prima facie. En una carretera de dos carriles, se necesita precaución adicional porque los vehículos viajan en direcciones opuestas con solo una línea central pintada como separación.'},
  ans:0
},
{
  id:455, cat:'parking',
  en:{q:'When may you park in front of a driveway in California?',opts:['For up to 10 minutes when picking someone up','Never — parking in front of any driveway is always illegal','Only if you have the owner\'s permission and they live there','Only if no "no parking" sign is posted'],exp:'Parking in front of a driveway is always illegal in California, even your own or a neighbor\'s. You may not block a driveway, even briefly. If you park blocking someone\'s driveway, your vehicle may be ticketed and towed at the owner\'s request. The only exception is briefly stopping (not parking) to load or unload.'},
  zh:{q:'在加州，什么时候可以停在车道入口前面？',opts:['接送人时最多10分钟','永远不——在任何车道入口前停车都是违法的','只有在得到业主同意且他们住在那里的情况下','只有在没有"禁止停车"标志的情况下'],exp:'在加州，在车道入口前停车始终是违法的，即使是你自己的或邻居的。你不能阻塞车道入口，即使是短暂的。如果你停车阻塞了别人的车道入口，你的车可能会被贴罚单并应业主要求拖走。唯一例外是短暂停靠（不是停车）进行装卸。'},
  zhTW:{q:'在加州，什麼時候可以停在車道入口前面？',opts:['接送人時最多10分鐘','永遠不——在任何車道入口前停車都是違法的','只有在得到業主同意且他們住在那裡的情況下','只有在沒有"禁止停車"標誌的情況下'],exp:'在加州，在車道入口前停車始終是違法的，即使是你自己的或鄰居的。你不能阻塞車道入口，即使是短暫的。如果你停車阻塞了別人的車道入口，你的車可能會被貼罰單並應業主要求拖走。唯一例外是短暫停靠（不是停車）進行裝卸。'},
  es:{q:'¿Cuándo puede estacionar frente a una entrada de vehículos en California?',opts:['Por hasta 10 minutos cuando recoge a alguien','Nunca — estacionar frente a cualquier entrada de vehículos es siempre ilegal','Solo si tiene el permiso del propietario y vive allí','Solo si no hay letrero de "no estacionar"'],exp:'Estacionar frente a una entrada de vehículos es siempre ilegal en California, incluso la suya propia o la de un vecino. No puede bloquear una entrada, ni siquiera brevemente. Si estaciona bloqueando la entrada de alguien, su vehículo puede ser multado y remolcado a pedido del propietario. La única excepción es detenerse brevemente (no estacionar) para cargar o descargar.'},
  ans:1
},
{
  id:456, cat:'highway',
  en:{q:'What does a yellow dashed center line on a two-lane road indicate?',opts:['No passing is allowed in either direction','Passing is allowed from your side when it is safe to do so','Passing is allowed only for large vehicles','This is a HOV (carpool) lane'],exp:'Yellow dashed (broken) center lines on a two-lane road indicate that passing is permitted from either side when it is safe to do so. You may pass on your side when the dashed line is next to your lane, you can see clearly, and it is safe. A solid yellow line on your side means no passing for you — even if there is a dashed line on the other side.'},
  zh:{q:'两车道道路上的黄色虚线中心线表示什么？',opts:['两个方向都不允许超车','在安全时允许从你这侧超车','只允许大型车辆超车','这是HOV（拼车）车道'],exp:'两车道道路上的黄色虚线中心线表示在安全时两侧都允许超车。当虚线在你的车道旁边、你可以清晰看到前方且安全时，你可以从你这侧超车。你这侧的实黄线意味着你不能超车——即使另一侧有虚线也一样。'},
  zhTW:{q:'兩車道道路上的黃色虛線中心線表示什麼？',opts:['兩個方向都不允許超車','在安全時允許從你這側超車','只允許大型車輛超車','這是HOV（拼車）車道'],exp:'兩車道道路上的黃色虛線中心線表示在安全時兩側都允許超車。當虛線在你的車道旁邊、你可以清晰看到前方且安全時，你可以從你這側超車。你這側的實黃線意味著你不能超車——即使另一側有虛線也一樣。'},
  es:{q:'¿Qué indica una línea central amarilla discontinua en una carretera de dos carriles?',opts:['No se permite adelantar en ninguna dirección','Se permite adelantar desde su lado cuando es seguro hacerlo','Solo los vehículos grandes pueden adelantar','Es un carril HOV (para compartir el auto)'],exp:'Las líneas centrales amarillas discontinuas (punteadas) en una carretera de dos carriles indican que está permitido adelantar desde cualquiera de los dos lados cuando sea seguro hacerlo. Puede adelantar cuando la línea discontinua está junto a su carril, puede ver claramente y es seguro. Una línea amarilla sólida en su lado significa que no puede adelantar — incluso si hay una línea discontinua en el otro lado.'},
  ans:1
},
{
  id:457, cat:'dui',
  en:{q:'Which statement about marijuana and driving is true in California?',opts:['Marijuana is legal in California, so driving after using it is legal','Driving under the influence of marijuana is illegal and can result in a DUI conviction, regardless of whether you have a medical or recreational use card','You can legally drive if you used marijuana more than 4 hours ago','Marijuana affects reaction time less than alcohol, so it is safer'],exp:'Although recreational marijuana is legal in California, driving under its influence is illegal and is treated the same as alcohol DUI. Marijuana impairs judgment, reaction time, and coordination. There is no legal BAC-style threshold — any level of impairment from marijuana while driving can result in a DUI. Law enforcement officers are trained to detect marijuana impairment.'},
  zh:{q:'以下关于大麻和驾驶的哪项陈述在加州是正确的？',opts:['大麻在加州是合法的，所以使用后驾驶也是合法的','在大麻影响下驾驶是非法的，可能导致DUI定罪，无论你是否有医疗或娱乐使用卡','如果你4小时前使用了大麻，你可以合法驾驶','大麻对反应时间的影响比酒精少，所以更安全'],exp:'虽然娱乐性大麻在加州是合法的，但在其影响下驾驶是非法的，与酒精DUI一样处理。大麻会损害判断力、反应时间和协调能力。没有类似BAC的法定阈值——任何因大麻导致的驾驶能力损伤都可能导致DUI。执法人员经过培训可以检测大麻损伤。'},
  zhTW:{q:'以下關於大麻和駕駛的哪項陳述在加州是正確的？',opts:['大麻在加州是合法的，所以使用後駕駛也是合法的','在大麻影響下駕駛是非法的，可能導致DUI定罪，無論你是否有醫療或娛樂使用卡','如果你4小時前使用了大麻，你可以合法駕駛','大麻對反應時間的影響比酒精少，所以更安全'],exp:'雖然娛樂性大麻在加州是合法的，但在其影響下駕駛是非法的，與酒精DUI一樣處理。大麻會損害判斷力、反應時間和協調能力。沒有類似BAC的法定閾值——任何因大麻導致的駕駛能力損傷都可能導致DUI。執法人員經過培訓可以檢測大麻損傷。'},
  es:{q:'¿Cuál afirmación sobre la marihuana y la conducción es verdadera en California?',opts:['La marihuana es legal en California, por lo que conducir después de usarla es legal','Conducir bajo la influencia de marihuana es ilegal y puede resultar en una condena por DUI, independientemente de si tiene tarjeta médica o de uso recreativo','Puede conducir legalmente si usó marihuana hace más de 4 horas','La marihuana afecta el tiempo de reacción menos que el alcohol, por lo que es más seguro'],exp:'Aunque la marihuana recreativa es legal en California, conducir bajo su influencia es ilegal y se trata igual que el DUI de alcohol. La marihuana deteriora el juicio, el tiempo de reacción y la coordinación. No hay un umbral estilo BAC — cualquier nivel de deterioro por marihuana al conducir puede resultar en DUI.'},
  ans:1
},
{
  id:458, cat:'safety',
  en:{q:'When is it appropriate to use your vehicle\'s horn?',opts:['To alert other drivers that you are angry or frustrated with them','To warn others of an immediate danger, or to alert another driver who might not see you','Whenever approaching an intersection as a warning to pedestrians','To signal to a parked car\'s driver that they are taking too long'],exp:'Your horn should only be used to warn others of a hazard or to prevent an accident — not to express anger, frustration, or impatience. Honking to intimidate, annoy, or communicate displeasure is a noise ordinance violation in most California cities. Use your horn when someone is about to merge into your lane without seeing you, or when a vehicle is about to back into you.'},
  zh:{q:'什么时候适合使用喇叭？',opts:['当对其他驾驶员感到愤怒或沮丧时提醒他们','警告他人即将发生的危险，或提醒可能没看到你的驾驶员','在接近路口时随时鸣笛警告行人','提示停靠车辆的驾驶员他们停了太久'],exp:'喇叭只应在警告他人危险或预防事故时使用——不是为了表达愤怒、沮丧或不耐烦。在大多数加州城市，鸣笛恐吓、骚扰或表达不满是违反噪音法规的行为。当有人在没有看到你的情况下将并入你的车道，或车辆即将倒车撞向你时，使用喇叭。'},
  zhTW:{q:'什麼時候適合使用喇叭？',opts:['當對其他駕駛員感到憤怒或沮喪時提醒他們','警告他人即將發生的危險，或提醒可能沒看到你的駕駛員','在接近路口時隨時鳴笛警告行人','提示停靠車輛的駕駛員他們停了太久'],exp:'喇叭只應在警告他人危險或預防事故時使用——不是為了表達憤怒、沮喪或不耐煩。在大多數加州城市，鳴笛恐嚇、騷擾或表達不滿是違反噪音法規的行為。當有人在沒有看到你的情況下將並入你的車道，或車輛即將倒車撞向你時，使用喇叭。'},
  es:{q:'¿Cuándo es apropiado usar el claxon de su vehículo?',opts:['Para alertar a otros conductores de que está enojado o frustrado con ellos','Para advertir a otros de un peligro inmediato, o para alertar a otro conductor que quizás no lo ve','Siempre que se acerque a una intersección como advertencia a los peatones','Para indicar al conductor de un auto estacionado que está tardando demasiado'],exp:'El claxon solo debe usarse para advertir a otros de un peligro o para prevenir un accidente — no para expresar enojo, frustración o impaciencia. Tocar el claxon para intimidar, molestar o comunicar desagrado es una violación de ordenanzas de ruido en la mayoría de ciudades de California. Use el claxon cuando alguien está a punto de cambiar a su carril sin verlo.'},
  ans:1
},
{
  id:459, cat:'signs',
  en:{q:'What does a white sign with black letters saying "DO NOT PASS" mean?',opts:['You cannot pass on this road at any time','This is a temporary sign — only applies when workers are present','Trucks and buses may not pass, but cars can','No passing in this specific location, even if the road appears clear'],exp:'"DO NOT PASS" signs are regulatory signs (white with black text) that prohibit passing at that specific location. Unlike yellow warning signs that suggest caution, white regulatory signs have the force of law. You may not pass even if the road appears clear. These signs are typically placed where sight lines, curves, or road width make passing hazardous.'},
  zh:{q:'黑字白色标志"DO NOT PASS"（禁止超车）意味着什么？',opts:['你在这条路上任何时候都不能超车','这是临时标志——只有在有工人时才适用','卡车和公共汽车不能超车，但汽车可以','在这个特定位置禁止超车，即使道路看起来畅通'],exp:'"DO NOT PASS"标志是监管标志（白色黑字），禁止在该特定位置超车。与建议谨慎的黄色警告标志不同，白色监管标志具有法律效力。即使道路看起来畅通，你也不能超车。这些标志通常放置在视线、弯道或道路宽度使超车危险的地方。'},
  zhTW:{q:'黑字白色標誌"DO NOT PASS"（禁止超車）意味著什麼？',opts:['你在這條路上任何時候都不能超車','這是臨時標誌——只有在有工人時才適用','卡車和公共汽車不能超車，但汽車可以','在這個特定位置禁止超車，即使道路看起來暢通'],exp:'"DO NOT PASS"標誌是監管標誌（白色黑字），禁止在該特定位置超車。與建議謹慎的黃色警告標誌不同，白色監管標誌具有法律效力。即使道路看起來暢通，你也不能超車。這些標誌通常放置在視線、彎道或道路寬度使超車危險的地方。'},
  es:{q:'¿Qué significa un letrero blanco con letras negras que dice "DO NOT PASS" (No adelantar)?',opts:['No puede adelantar en esta carretera en ningún momento','Es un letrero temporal — solo aplica cuando hay trabajadores presentes','Los camiones y autobuses no pueden adelantar, pero los autos sí','No adelantar en esta ubicación específica, incluso si la carretera parece despejada'],exp:'Los letreros "DO NOT PASS" son letreros reguladores (blancos con texto negro) que prohíben adelantar en esa ubicación específica. A diferencia de los letreros de advertencia amarillos que sugieren precaución, los letreros reguladores blancos tienen fuerza de ley. No puede adelantar incluso si la carretera parece despejada. Estos letreros se colocan donde las líneas de visión, curvas o el ancho de la carretera hacen peligroso adelantar.'},
  ans:3
},
{
  id:460, cat:'laws',
  en:{q:'In California, you must stop and yield to pedestrians in a crosswalk. This applies to:',opts:['Only marked crosswalks with painted lines','Both marked crosswalks and unmarked crosswalks (the implied crossing at any intersection)','Only when a pedestrian signal shows "WALK"','Only when children or elderly people are crossing'],exp:'California law requires drivers to stop and yield to pedestrians in both marked and unmarked crosswalks. An unmarked crosswalk exists at virtually every intersection, even without painted lines — it is the implied right-angle extension of the sidewalks. Pedestrians have the right-of-way in crosswalks at all times, whether marked or unmarked.'},
  zh:{q:'在加州，你必须停车并让行人行横道内的行人通行。这适用于：',opts:['只有有涂漆线的有标记人行横道','有标记和无标记的人行横道（任何路口的隐含过街处）','只有在行人信号显示"行走"时','只有当儿童或老人过街时'],exp:'加州法律要求驾驶员在有标记和无标记的人行横道内停车让行人通行。无标记人行横道实际上存在于每个路口，即使没有涂漆线——它是人行道的隐含直角延伸。行人在任何时候在人行横道内都有通行权，无论是有标记的还是无标记的。'},
  zhTW:{q:'在加州，你必須停車並讓行人行橫道內的行人通行。這適用於：',opts:['只有有塗漆線的有標記人行橫道','有標記和無標記的人行橫道（任何路口的隱含過街處）','只有在行人信號顯示"行走"時','只有當兒童或老人過街時'],exp:'加州法律要求駕駛員在有標記和無標記的人行橫道內停車讓行人通行。無標記人行橫道實際上存在於每個路口，即使沒有塗漆線——它是人行道的隱含直角延伸。行人在任何時候在人行橫道內都有通行權，無論是有標記的還是無標記的。'},
  es:{q:'En California, debe detenerse y ceder el paso a los peatones en un cruce peatonal. Esto aplica a:',opts:['Solo cruces peatonales marcados con líneas pintadas','Tanto cruces peatonales marcados como no marcados (el cruce implícito en cualquier intersección)','Solo cuando la señal peatonal muestra "CAMINAR"','Solo cuando cruzan niños o personas mayores'],exp:'La ley de California requiere que los conductores se detengan y cedan el paso a los peatones en cruces peatonales marcados y no marcados. Un cruce peatonal no marcado existe virtualmente en cada intersección, incluso sin líneas pintadas — es la extensión en ángulo recto implícita de las aceras. Los peatones tienen el derecho de paso en los cruces en todo momento.'},
  ans:1
},

,
{
  id:461, cat:'signs',
  en:{q:'What does a sign with "SPEED LIMIT 65" mean on a California freeway?',opts:['65 mph is the recommended speed for good conditions','The maximum legal speed is 65 mph — you cannot lawfully drive faster','You may drive up to 70 mph if traffic is light','65 mph is the minimum speed — slower traffic must move to the right'],exp:'A "SPEED LIMIT 65" sign means the maximum legal speed at that location is 65 mph. You cannot legally exceed this speed under any circumstances, including good weather, light traffic, or late hours. Some vehicles (trucks, buses, vehicles towing trailers) have lower maximum speeds. Always drive at or below the posted speed limit, and adjust lower for conditions.'},
  zh:{q:'加州高速公路上"SPEED LIMIT 65"（限速65）标志意味着什么？',opts:['65英里/小时是良好状况下的建议速度','最高合法速度为65英里/小时——你不能合法地超速行驶','如果交通量少，你可以行驶至70英里/小时','65英里/小时是最低速度——较慢的交通必须靠右行驶'],exp:'"SPEED LIMIT 65"标志意味着该位置的最高合法速度为65英里/小时。无论什么情况——包括良好天气、少量交通或深夜——你都不能合法地超过这个速度。某些车辆（卡车、公共汽车、拖拽拖车的车辆）有更低的最高速度。始终在限速或以下行驶，并根据路况降低速度。'},
  zhTW:{q:'加州高速公路上"SPEED LIMIT 65"（限速65）標誌意味著什麼？',opts:['65英里/小時是良好狀況下的建議速度','最高合法速度為65英里/小時——你不能合法地超速行駛','如果交通量少，你可以行駛至70英里/小時','65英里/小時是最低速度——較慢的交通必須靠右行駛'],exp:'"SPEED LIMIT 65"標誌意味著該位置的最高合法速度為65英里/小時。無論什麼情況——包括良好天氣、少量交通或深夜——你都不能合法地超過這個速度。某些車輛（卡車、公共汽車、拖拽拖車的車輛）有更低的最高速度。始終在限速或以下行駛，並根據路況降低速度。'},
  es:{q:'¿Qué significa un letrero "SPEED LIMIT 65" en una autopista de California?',opts:['65 mph es la velocidad recomendada para buenas condiciones','La velocidad legal máxima es 65 mph — no puede conducir legalmente más rápido','Puede conducir hasta 70 mph si el tráfico es ligero','65 mph es la velocidad mínima — el tráfico más lento debe moverse a la derecha'],exp:'Un letrero "SPEED LIMIT 65" significa que la velocidad legal máxima en esa ubicación es 65 mph. No puede exceder legalmente esta velocidad bajo ninguna circunstancia, incluyendo buen clima, tráfico ligero, u horas tardías. Algunos vehículos (camiones, autobuses, vehículos con remolques) tienen velocidades máximas más bajas. Siempre conduzca al límite o por debajo.'},
  ans:1
},
{
  id:462, cat:'rightofway',
  en:{q:'An emergency vehicle (police car, ambulance, fire truck) with lights and siren is approaching from behind while you are driving on a multi-lane road. What should you do?',opts:['Speed up to clear the lane ahead','Pull over to the right edge of the road and stop, or as far right as possible','Stay in your lane and let the emergency vehicle go around you','Move to the left lane to let the vehicle pass on the right'],exp:'When an emergency vehicle is approaching with lights and siren on, you must pull to the right side of the road and stop until the emergency vehicle has passed. On a multi-lane road, move to the right as safely as possible. Do not stop in an intersection — clear it first. If on a one-way street, pull to the nearest curb. Failure to yield to emergency vehicles is a serious traffic violation.'},
  zh:{q:'一辆紧急车辆（警车、救护车、消防车）亮着灯鸣着笛从后方接近，当你正在多车道道路上行驶时。你应该怎么做？',opts:['加速以清空前方车道','靠右行至路缘并停车，或尽可能靠右','留在你的车道上让紧急车辆从旁边通过','移至左车道让车辆从右侧通过'],exp:'当紧急车辆亮灯鸣笛接近时，你必须靠右行至路边停车，直到紧急车辆通过。在多车道道路上，尽可能安全地向右移动。不要在路口停车——先通过路口。在单行道上，靠近最近的路缘停车。不给紧急车辆让路是严重的交通违规。'},
  zhTW:{q:'一輛緊急車輛（警車、救護車、消防車）亮著燈鳴著笛從後方接近，當你正在多車道道路上行駛時。你應該怎麼做？',opts:['加速以清空前方車道','靠右行至路緣並停車，或盡可能靠右','留在你的車道上讓緊急車輛從旁邊通過','移至左車道讓車輛從右側通過'],exp:'當緊急車輛亮燈鳴笛接近時，你必須靠右行至路邊停車，直到緊急車輛通過。在多車道道路上，盡可能安全地向右移動。不要在路口停車——先通過路口。在單行道上，靠近最近的路緣停車。不給緊急車輛讓路是嚴重的交通違規。'},
  es:{q:'Un vehículo de emergencia (patrulla, ambulancia, camión de bomberos) con luces y sirena se acerca por detrás mientras conduce en una carretera de múltiples carriles. ¿Qué debe hacer?',opts:['Acelere para despejar el carril de adelante','Orillese al borde derecho de la carretera y deténgase, o tan a la derecha como sea posible','Permanezca en su carril y deje que el vehículo de emergencia lo rodee','Muévase al carril izquierdo para dejar pasar el vehículo por la derecha'],exp:'Cuando un vehículo de emergencia se aproxima con luces y sirena, debe orillarse al lado derecho de la carretera y detenerse hasta que el vehículo de emergencia haya pasado. En una carretera de múltiples carriles, muévase a la derecha de forma segura. No se detenga en una intersección — despéjela primero. No ceder el paso a vehículos de emergencia es una violación grave.'},
  ans:1
},
{
  id:463, cat:'laws',
  en:{q:'How long must you signal before making a turn or changing lanes in California?',opts:['At least 50 feet before the turn or lane change','At least 100 feet in a residential area and 300 feet on a freeway or highway','At least 3 seconds before the maneuver','As soon as you decide to turn'],exp:'California law requires you to signal at least 100 feet before making a turn in a business or residential district, and at least 300 feet before turning on a freeway, highway, or rural road. Always check mirrors and blind spots before signaling and changing lanes. Signal continuously until you complete the maneuver, then cancel the signal.'},
  zh:{q:'在加州，在转弯或变道前，你必须打多长时间的转向灯？',opts:['转弯或变道前至少50英尺','在住宅区至少100英尺，在高速公路上至少300英尺','在动作前至少3秒','一旦你决定转弯就立即打'],exp:'加州法律要求在商业区或住宅区转弯前至少100英尺打转向灯，在高速公路、公路或农村道路上转弯前至少300英尺打转向灯。在打转向灯和变道前始终检查后视镜和盲点。持续打转向灯直到完成动作，然后取消转向灯。'},
  zhTW:{q:'在加州，在轉彎或變道前，你必須打多長時間的轉向燈？',opts:['轉彎或變道前至少50英尺','在住宅區至少100英尺，在高速公路上至少300英尺','在動作前至少3秒','一旦你決定轉彎就立即打'],exp:'加州法律要求在商業區或住宅區轉彎前至少100英尺打轉向燈，在高速公路、公路或農村道路上轉彎前至少300英尺打轉向燈。在打轉向燈和變道前始終檢查後視鏡和盲點。持續打轉向燈直到完成動作，然後取消轉向燈。'},
  es:{q:'¿Cuánto tiempo debe señalizar antes de girar o cambiar de carril en California?',opts:['Al menos 50 pies antes del giro o cambio de carril','Al menos 100 pies en un área residencial y 300 pies en una autopista o carretera','Al menos 3 segundos antes de la maniobra','Tan pronto como decida girar'],exp:'La ley de California requiere señalizar al menos 100 pies antes de girar en un distrito comercial o residencial, y al menos 300 pies antes de girar en una autopista, carretera o camino rural. Siempre revise los espejos y los puntos ciegos antes de señalizar y cambiar de carril. Señalice continuamente hasta completar la maniobra, luego cancele la señal.'},
  ans:1
},
{
  id:464, cat:'speed',
  en:{q:'You are driving on a highway in California and the posted speed limit is 65 mph. You are in the far left lane, driving 65 mph. The driver behind you is tailgating and flashing their headlights. What should you do?',opts:['Continue at 65 mph — you have the right to drive in any lane at the speed limit','Gradually move to the right to allow faster vehicles to pass','Speed up to accommodate the vehicle behind you','Brake suddenly to signal your displeasure'],exp:'In California, the left lane (fast lane) on a multilane highway is intended for passing and faster-moving traffic. Even if you are driving at the posted speed limit, if you are impeding traffic behind you, you should move to the right to allow faster vehicles to pass. California law prohibits driving in the far left lane at a speed that impedes traffic. Never brake-check or escalate the situation.'},
  zh:{q:'你在加州高速公路上行驶，限速为65英里/小时。你在最左车道以65英里/小时行驶。后方驾驶员正在跟车太近并闪烁大灯。你应该怎么做？',opts:['继续以65英里/小时行驶——你有权以任何车道的限速行驶','逐渐向右移动以让更快的车辆通过','加速以配合后方车辆','突然刹车以表达你的不满'],exp:'在加州，多车道高速公路的最左车道（快车道）用于超车和快速行驶的交通。即使你在限速行驶，如果你阻碍了后方的交通，你应该向右移动让更快的车辆通过。加州法律禁止在最左车道以阻碍交通的速度行驶。永远不要急刹车或升级情况。'},
  zhTW:{q:'你在加州高速公路上行駛，限速為65英里/小時。你在最左車道以65英里/小時行駛。後方駕駛員正在跟車太近並閃爍大燈。你應該怎麼做？',opts:['繼續以65英里/小時行駛——你有權以任何車道的限速行駛','逐漸向右移動以讓更快的車輛通過','加速以配合後方車輛','突然剎車以表達你的不滿'],exp:'在加州，多車道高速公路的最左車道（快車道）用於超車和快速行駛的交通。即使你在限速行駛，如果你阻礙了後方的交通，你應該向右移動讓更快的車輛通過。加州法律禁止在最左車道以阻礙交通的速度行駛。永遠不要急剎車或升級情況。'},
  es:{q:'Está conduciendo en una autopista de California y el límite de velocidad es 65 mph. Está en el carril más a la izquierda, conduciendo a 65 mph. El conductor detrás de usted está siguiéndole de cerca y destellando los faros. ¿Qué debe hacer?',opts:['Continúe a 65 mph — tiene derecho a conducir en cualquier carril al límite de velocidad','Gradualmente muévase a la derecha para permitir que los vehículos más rápidos pasen','Acelere para acomodar el vehículo detrás de usted','Frene de repente para señalar su desagrado'],exp:'En California, el carril izquierdo (carril rápido) en una autopista de múltiples carriles está destinado para adelantar y tráfico más rápido. Incluso si conduce al límite, si está obstaculizando el tráfico detrás, debe moverse a la derecha para permitir que los vehículos más rápidos pasen. La ley de California prohíbe conducir en el carril más a la izquierda a una velocidad que obstruya el tráfico.'},
  ans:1
},
{
  id:465, cat:'parking',
  en:{q:'What does a green painted curb indicate?',opts:['Parking is always free here','Limited-time parking — usually 10 or 15 minutes — check for posted signs','Emergency vehicles only','No parking on weekdays'],exp:'A green curb indicates limited-time parking. The time limit is usually posted on a nearby sign (commonly 10, 15, or 20 minutes). Green zones are typically found in business districts to allow quick stops for pick-ups, deliveries, and short errands. After the posted time, you must move your vehicle. The time limit may vary by city.'},
  zh:{q:'绿色涂漆路缘石表示什么？',opts:['这里停车始终免费','限时停车——通常10或15分钟——查看张贴的标志','仅限紧急车辆','平日不能停车'],exp:'绿色路缘石表示限时停车。时间限制通常在附近的标志上注明（通常为10、15或20分钟）。绿色区域通常位于商业区，供接送、送货和短暂办事用。超过规定时间后，你必须移动你的车辆。时间限制可能因城市而异。'},
  zhTW:{q:'綠色塗漆路緣石表示什麼？',opts:['這裡停車始終免費','限時停車——通常10或15分鐘——查看張貼的標誌','僅限緊急車輛','平日不能停車'],exp:'綠色路緣石表示限時停車。時間限制通常在附近的標誌上注明（通常為10、15或20分鐘）。綠色區域通常位於商業區，供接送、送貨和短暫辦事用。超過規定時間後，你必須移動你的車輛。時間限制可能因城市而異。'},
  es:{q:'¿Qué indica un bordillo pintado de verde?',opts:['El estacionamiento siempre es gratuito aquí','Estacionamiento de tiempo limitado — generalmente 10 o 15 minutos — revise los letreros publicados','Solo vehículos de emergencia','Sin estacionamiento en días de semana'],exp:'Un bordillo verde indica estacionamiento de tiempo limitado. El límite de tiempo generalmente se publica en un letrero cercano (comúnmente 10, 15 o 20 minutos). Las zonas verdes generalmente se encuentran en distritos comerciales para permitir paradas rápidas para recogidas, entregas y diligencias cortas. Después del tiempo publicado, debe mover su vehículo.'},
  ans:1
},
{
  id:466, cat:'highway',
  en:{q:'What should you do if you must stop on a freeway due to a breakdown?',opts:['Leave the car in the middle lane with hazard lights on','Pull off to the right shoulder as far as possible, turn on hazard lights, raise the hood, and stay away from the vehicle','Stay in your vehicle and wait in the travel lanes','Turn on just the right turn signal to warn other drivers'],exp:'If you break down on a freeway: pull as far to the right onto the shoulder as possible. Turn on hazard lights immediately. Exit the vehicle safely and move away from the car — ideally behind a guard rail or up the embankment, away from traffic. Raise the hood to signal distress. Call for help. Never stand between your vehicle and moving traffic. Place reflective triangles or flares if available.'},
  zh:{q:'如果你因故障必须在高速公路上停车，应该怎么做？',opts:['将车留在中间车道，打开危险警告灯','尽可能靠右行至路肩，打开危险警告灯，抬起引擎盖，并远离车辆','留在车内在行驶车道上等待','只打开右转向灯警告其他驾驶员'],exp:'如果在高速公路上抛锚：尽可能靠右行至路肩。立即打开危险警告灯。安全地从车辆中出来，远离汽车——最好在护栏后面或堤坝上，远离交通。抬起引擎盖作为求救信号。打电话求助。永远不要站在你的车辆和行驶中的交通之间。如果有反光三角形或信号弹，放置它们。'},
  zhTW:{q:'如果你因故障必須在高速公路上停車，應該怎麼做？',opts:['將車留在中間車道，打開危險警告燈','盡可能靠右行至路肩，打開危險警告燈，抬起引擎蓋，並遠離車輛','留在車內在行駛車道上等待','只打開右轉向燈警告其他駕駛員'],exp:'如果在高速公路上拋錨：盡可能靠右行至路肩。立即打開危險警告燈。安全地從車輛中出來，遠離汽車——最好在護欄後面或堤壩上，遠離交通。抬起引擎蓋作為求救信號。打電話求助。永遠不要站在你的車輛和行駛中的交通之間。如果有反光三角形或信號彈，放置它們。'},
  es:{q:'¿Qué debe hacer si debe detenerse en una autopista debido a una avería?',opts:['Deje el auto en el carril del medio con las luces de emergencia encendidas','Orillese al hombro derecho lo más posible, encienda las luces de emergencia, levante el capó y aléjese del vehículo','Permanezca en su vehículo y espere en los carriles de tráfico','Encienda solo la señal de giro derecho para advertir a otros conductores'],exp:'Si se avería en una autopista: orillese lo más posible al hombro derecho. Encienda las luces de emergencia inmediatamente. Salga del vehículo de forma segura y aléjese del auto — idealmente detrás de una barrera o en el terraplén, lejos del tráfico. Levante el capó para señalar angustia. Llame pidiendo ayuda. Nunca se pare entre su vehículo y el tráfico en movimiento.'},
  ans:1
},
{
  id:467, cat:'dui',
  en:{q:'After being convicted of DUI in California for the first time, what is the minimum license suspension period?',opts:['30 days','4 months','6 months','1 year'],exp:'A first-time DUI conviction in California results in a mandatory 6-month driver\'s license suspension by the DMV. Additionally, the court may impose a separate suspension period. After the suspension, you may need to complete a DUI program, install an ignition interlock device (IID), pay fines, and provide proof of financial responsibility (SR-22). Total consequences can last 3–5 years.'},
  zh:{q:'在加州第一次被判DUI定罪后，最短驾照暂停期是多少？',opts:['30天','4个月','6个月','1年'],exp:'在加州第一次DUI定罪会导致DMV强制暂停驾照6个月。此外，法院可能会另外规定暂停期。暂停后，你可能需要完成DUI课程、安装点火联锁装置（IID）、支付罚款，并提供财务责任证明（SR-22）。总体后果可能持续3-5年。'},
  zhTW:{q:'在加州第一次被判DUI定罪後，最短駕照暫停期是多少？',opts:['30天','4個月','6個月','1年'],exp:'在加州第一次DUI定罪會導致DMV強制暫停駕照6個月。此外，法院可能會另外規定暫停期。暫停後，你可能需要完成DUI課程、安裝點火聯鎖裝置（IID）、支付罰款，並提供財務責任證明（SR-22）。總體後果可能持續3-5年。'},
  es:{q:'Después de ser condenado por DUI en California por primera vez, ¿cuál es el período mínimo de suspensión de licencia?',opts:['30 días','4 meses','6 meses','1 año'],exp:'Una primera condena por DUI en California resulta en una suspensión obligatoria de la licencia de conducir por 6 meses por el DMV. Además, el tribunal puede imponer un período de suspensión separado. Después de la suspensión, puede necesitar completar un programa de DUI, instalar un dispositivo de interbloqueo de encendido (IID), pagar multas y proporcionar prueba de responsabilidad financiera (SR-22).'},
  ans:2
},
{
  id:468, cat:'safety',
  en:{q:'What is the safest way to back out of a driveway onto a street?',opts:['Back out quickly to minimize exposure to traffic','Signal, then back out slowly while watching for pedestrians and traffic in both directions','Sound your horn and back out at a normal speed','It is safer to drive forward out of a driveway whenever possible — avoid backing into traffic'],exp:'Whenever possible, avoid backing out of a driveway onto a busy street. Instead, back into your driveway (when you arrive) and pull forward to leave. If you must back out, signal, check mirrors and physically look in both directions, back out slowly, and yield to all pedestrians and traffic. Children and small objects may be hidden below sight lines — walk around the car before backing.'},
  zh:{q:'从私家车道倒车驶入街道的最安全方式是什么？',opts:['快速倒出以减少接触交通的时间','打转向灯，然后缓慢倒车，同时观察两个方向的行人和交通','鸣笛并以正常速度倒出','尽可能选择向前驶出私家车道——避免倒车进入交通'],exp:'尽可能避免从私家车道倒入繁忙街道。相反，在到达时倒车进入车道，离开时向前驶出。如果必须倒出，打转向灯，检查后视镜并实际向两个方向查看，缓慢倒出，并让行所有行人和交通。儿童和小物品可能藏在视线以下——在倒车前绕车走一圈。'},
  zhTW:{q:'從私家車道倒車駛入街道的最安全方式是什麼？',opts:['快速倒出以減少接觸交通的時間','打轉向燈，然後緩慢倒車，同時觀察兩個方向的行人和交通','鳴笛並以正常速度倒出','盡可能選擇向前駛出私家車道——避免倒車進入交通'],exp:'盡可能避免從私家車道倒入繁忙街道。相反，在到達時倒車進入車道，離開時向前駛出。如果必須倒出，打轉向燈，檢查後視鏡並實際向兩個方向查看，緩慢倒出，並讓行所有行人和交通。兒童和小物品可能藏在視線以下——在倒車前繞車走一圈。'},
  es:{q:'¿Cuál es la forma más segura de salir marcha atrás de una entrada de vehículos hacia una calle?',opts:['Salga marcha atrás rápidamente para minimizar la exposición al tráfico','Señalice, luego salga marcha atrás lentamente mientras observa peatones y tráfico en ambas direcciones','Toque el claxon y salga marcha atrás a velocidad normal','Es más seguro salir hacia adelante de una entrada siempre que sea posible — evite retroceder hacia el tráfico'],exp:'Siempre que sea posible, evite salir marcha atrás de una entrada hacia una calle concurrida. En cambio, entre de retroceso a su entrada (cuando llegue) y salga hacia adelante. Si debe salir de retroceso, señalice, revise espejos y mire físicamente en ambas direcciones, salga lentamente y ceda el paso a todos los peatones y tráfico.'},
  ans:3
},
{
  id:469, cat:'signs',
  en:{q:'What does a red circle with a line through it over a symbol mean on a traffic sign?',opts:['The action shown is required','The action shown is prohibited — you must not do it','This is a warning sign for the action shown','Caution: the action shown is restricted to certain times'],exp:'A red circle with a diagonal line through it (the international "no" symbol) over a symbol means the action depicted is prohibited. For example, a red circle with a line through a left-turn arrow means no left turns are permitted. These are regulatory signs (round or rectangular white with red and black) that have the force of law.'},
  zh:{q:'交通标志上符号上方的带斜线红圈意味着什么？',opts:['所示动作是必须执行的','所示动作是被禁止的——你不得这样做','这是所示动作的警告标志','注意：所示动作在特定时间受限制'],exp:'符号上的带斜线红圈（国际"禁止"符号）意味着所描绘的动作是被禁止的。例如，带斜线覆盖左转箭头的红圈意味着禁止左转。这些是有法律效力的监管标志（圆形或矩形白色带红色和黑色）。'},
  zhTW:{q:'交通標誌上符號上方的帶斜線紅圈意味著什麼？',opts:['所示動作是必須執行的','所示動作是被禁止的——你不得這樣做','這是所示動作的警告標誌','注意：所示動作在特定時間受限制'],exp:'符號上的帶斜線紅圈（國際"禁止"符號）意味著所描繪的動作是被禁止的。例如，帶斜線覆蓋左轉箭頭的紅圈意味著禁止左轉。這些是有法律效力的監管標誌（圓形或矩形白色帶紅色和黑色）。'},
  es:{q:'¿Qué significa un círculo rojo con una línea a través de un símbolo en una señal de tráfico?',opts:['La acción mostrada es requerida','La acción mostrada está prohibida — no debe hacerla','Esta es una señal de advertencia para la acción mostrada','Precaución: la acción mostrada está restringida a ciertos horarios'],exp:'Un círculo rojo con una línea diagonal a través de él (el símbolo internacional de "no") sobre un símbolo significa que la acción representada está prohibida. Por ejemplo, un círculo rojo con una línea sobre una flecha de giro a la izquierda significa que no se permiten giros a la izquierda. Estas son señales reguladoras (redondas o rectangulares blancas con rojo y negro) que tienen fuerza de ley.'},
  ans:1
},
{
  id:470, cat:'laws',
  en:{q:'What must a California driver do when involved in a traffic accident resulting in injury, death, or property damage over $1,000?',opts:['Nothing if the other driver was at fault','Exchange insurance and contact information with all involved parties, and report the accident to the DMV within 10 days','Only call police if there is an injury','Only notify the DMV if someone was killed'],exp:'When involved in an accident with injury, death, or property damage exceeding $1,000, California drivers must: stop immediately, render aid to injured persons, exchange driver\'s license, registration, and insurance info with others involved, call law enforcement if required, and file a Report of Traffic Accident Occurring in California (SR 1) with the DMV within 10 days.'},
  zh:{q:'当加州驾驶员卷入导致伤亡或超过1,000美元财产损失的交通事故时，必须做什么？',opts:['如果是另一方驾驶员的过错，则什么都不用做','与所有相关方交换保险和联系信息，并在10天内向DMV报告事故','只有在有伤亡时才打电话报警','只有在有人死亡时才通知DMV'],exp:'当发生有伤亡或财产损失超过1,000美元的事故时，加州驾驶员必须：立即停车，对伤者提供援助，与相关人员交换驾照、注册和保险信息，必要时联系执法机构，并在10天内向DMV提交加州交通事故报告（SR 1）。'},
  zhTW:{q:'當加州駕駛員捲入導致傷亡或超過1,000美元財產損失的交通事故時，必須做什麼？',opts:['如果是另一方駕駛員的過錯，則什麼都不用做','與所有相關方交換保險和聯繫信息，並在10天內向DMV報告事故','只有在有傷亡時才打電話報警','只有在有人死亡時才通知DMV'],exp:'當發生有傷亡或財產損失超過1,000美元的事故時，加州駕駛員必須：立即停車，對傷者提供援助，與相關人員交換駕照、注冊和保險信息，必要時聯繫執法機構，並在10天內向DMV提交加州交通事故報告（SR 1）。'},
  es:{q:'¿Qué debe hacer un conductor de California cuando está involucrado en un accidente de tráfico que resulta en lesiones, muerte o daños materiales superiores a $1,000?',opts:['Nada si el otro conductor tuvo la culpa','Intercambiar información de seguro y contacto con todas las partes involucradas, y reportar el accidente al DMV dentro de 10 días','Solo llamar a la policía si hay una lesión','Solo notificar al DMV si alguien murió'],exp:'Cuando está involucrado en un accidente con lesiones, muerte o daños materiales superiores a $1,000, los conductores de California deben: detenerse inmediatamente, prestar ayuda a los heridos, intercambiar información de licencia, registro y seguro, llamar a las fuerzas del orden si es necesario, y presentar un Informe de Accidente de Tráfico (SR 1) al DMV dentro de 10 días.'},
  ans:1
},

,
{
  id:471, cat:'signs',
  en:{q:'A sign shows a pedestrian silhouette inside a triangle with the word "PED XING." What does this mean?',opts:['Pedestrians must stop and wait for traffic','Pedestrian crossing ahead — yield to pedestrians in and approaching the crosswalk','School children only crossing — no adult pedestrians','Pedestrians are prohibited from crossing here'],exp:'"PED XING" (short for Pedestrian Crossing) signs warn drivers that a crosswalk is nearby and pedestrians may be crossing. Slow down and be prepared to stop. Yield to all pedestrians in the crosswalk or who appear about to enter it. These signs are placed before marked crosswalks, especially in locations with high pedestrian activity.'},
  zh:{q:'标志显示三角形内的行人轮廓并带有"PED XING"字样。这意味着什么？',opts:['行人必须停下来等待交通','前方行人过街——让行在人行横道内及即将进入的行人','仅限学童过街——成人行人禁止','禁止行人在此过街'],exp:'"PED XING"（行人过街的缩写）标志警告驾驶员附近有人行横道，行人可能正在过街。减速并准备停车。让行所有在人行横道内或即将进入人行横道的行人。这些标志放置在有标记的人行横道前，特别是在行人活动较多的地点。'},
  zhTW:{q:'標誌顯示三角形內的行人輪廓並帶有"PED XING"字樣。這意味著什麼？',opts:['行人必須停下來等待交通','前方行人過街——讓行在人行橫道內及即將進入的行人','僅限學童過街——成人行人禁止','禁止行人在此過街'],exp:'"PED XING"（行人過街的縮寫）標誌警告駕駛員附近有人行橫道，行人可能正在過街。減速並準備停車。讓行所有在人行橫道內或即將進入人行橫道的行人。這些標誌放置在有標記的人行橫道前，特別是在行人活動較多的地點。'},
  es:{q:'Un letrero muestra una silueta de peatón dentro de un triángulo con las palabras "PED XING." ¿Qué significa esto?',opts:['Los peatones deben detenerse y esperar el tráfico','Cruce peatonal adelante — ceda el paso a los peatones en el cruce y los que se aproximan','Solo niños en edad escolar cruzando — no adultos peatones','Los peatones tienen prohibido cruzar aquí'],exp:'"PED XING" (abreviatura de Cruce Peatonal) advierte a los conductores que hay un cruce peatonal cercano y los peatones pueden estar cruzando. Reduzca la velocidad y esté preparado para detenerse. Ceda el paso a todos los peatones en el cruce o que parezcan a punto de entrar en él. Estas señales se colocan antes de los cruces marcados, especialmente en lugares con alta actividad peatonal.'},
  ans:1
},
{
  id:472, cat:'laws',
  en:{q:'What is the legal penalty in California for driving without a valid driver\'s license?',opts:['Just a verbal warning for first-time offenders','A misdemeanor — fines, potential vehicle impoundment, and possible jail time','Only a small fine — similar to a parking ticket','Your license is automatically suspended for 1 year'],exp:'Driving without a valid California driver\'s license is a misdemeanor offense. Penalties can include fines of $100 to $1,000, your vehicle being impounded for up to 30 days, and possibly court appearance or jail time. Driving with a suspended or revoked license carries even heavier penalties, including mandatory jail time in some cases.'},
  zh:{q:'在加州，无有效驾驶执照驾车的法律处罚是什么？',opts:['对于初犯只是口头警告','轻罪——罚款、可能没收车辆，以及可能的监禁','只是一张小罚单——类似停车罚单','你的驾照会自动暂停1年'],exp:'在加州无有效驾驶执照驾车是轻罪。处罚可包括100至1,000美元的罚款、车辆被扣押最长30天，以及可能出庭或监禁。在暂停或吊销驾照的情况下驾车会有更重的处罚，某些情况下包括强制监禁。'},
  zhTW:{q:'在加州，無有效駕駛執照駕車的法律處罰是什麼？',opts:['對於初犯只是口頭警告','輕罪——罰款、可能沒收車輛，以及可能的監禁','只是一張小罰單——類似停車罰單','你的駕照會自動暫停1年'],exp:'在加州無有效駕駛執照駕車是輕罪。處罰可包括100至1,000美元的罰款、車輛被扣押最長30天，以及可能出庭或監禁。在暫停或吊銷駕照的情況下駕車會有更重的處罰，某些情況下包括強制監禁。'},
  es:{q:'¿Cuál es la penalidad legal en California por conducir sin una licencia de conducir válida?',opts:['Solo una advertencia verbal para infractores por primera vez','Un delito menor — multas, posible incautación del vehículo y posible tiempo en la cárcel','Solo una multa pequeña — similar a una multa de estacionamiento','Su licencia se suspende automáticamente por 1 año'],exp:'Conducir sin una licencia de conducir válida de California es un delito menor. Las penalidades pueden incluir multas de $100 a $1,000, su vehículo puede ser incautado hasta por 30 días, y posiblemente una comparecencia en el tribunal o tiempo en la cárcel. Conducir con una licencia suspendida o revocada conlleva penalidades aún más severas.'},
  ans:1
},
{
  id:473, cat:'rightofway',
  en:{q:'Who has the right-of-way when two vehicles arrive at a four-way stop simultaneously from perpendicular directions?',opts:['The vehicle that is larger','The vehicle on the right has the right-of-way','The vehicle going straight over the one turning','Whichever vehicle honks first'],exp:'When two vehicles arrive at a four-way stop at the same time from perpendicular (at a right angle) directions, the vehicle on the right has the right-of-way. This is the standard rule when a tie cannot be broken by arrival time. If you are to the left of the other vehicle, yield to it. If you both arrive from opposite directions, the vehicle going straight or turning right yields to a left turn — but a coin flip is your safest bet if you both go straight.'},
  zh:{q:'当两辆车同时从垂直方向到达四向停车路口时，谁有通行权？',opts:['较大的车辆','右边的车辆有通行权','直行车辆优先于转弯车辆','先鸣笛的车辆'],exp:'当两辆车同时从垂直（直角）方向到达四向停车路口时，右边的车辆有通行权。这是当无法通过到达时间打破平局时的标准规则。如果你在另一辆车的左边，让它先行。如果你们从相对方向同时到达，直行或右转车辆让左转车辆先行——但如果都直行，最安全的做法是谦让。'},
  zhTW:{q:'當兩輛車同時從垂直方向到達四向停車路口時，誰有通行權？',opts:['較大的車輛','右邊的車輛有通行權','直行車輛優先於轉彎車輛','先鳴笛的車輛'],exp:'當兩輛車同時從垂直（直角）方向到達四向停車路口時，右邊的車輛有通行權。這是當無法通過到達時間打破平局時的標準規則。如果你在另一輛車的左邊，讓它先行。如果你們從相對方向同時到達，直行或右轉車輛讓左轉車輛先行——但如果都直行，最安全的做法是謙讓。'},
  es:{q:'¿Quién tiene el derecho de paso cuando dos vehículos llegan a un alto de cuatro vías simultáneamente desde direcciones perpendiculares?',opts:['El vehículo más grande','El vehículo a la derecha tiene el derecho de paso','El vehículo que va recto sobre el que gira','Cualquier vehículo que toque el claxon primero'],exp:'Cuando dos vehículos llegan a un alto de cuatro vías al mismo tiempo desde direcciones perpendiculares (en ángulo recto), el vehículo a la derecha tiene el derecho de paso. Esta es la regla estándar cuando no se puede resolver el empate por tiempo de llegada. Si está a la izquierda del otro vehículo, ceda el paso. Si llegan desde direcciones opuestas, el que va recto cede al que gira a la izquierda.'},
  ans:1
},
{
  id:474, cat:'speed',
  en:{q:'On a California freeway, trucks and vehicles towing trailers have a maximum speed limit of:',opts:['65 mph — same as passenger cars','55 mph, regardless of the posted limit for passenger vehicles','60 mph on all freeways','50 mph when carrying hazardous materials'],exp:'In California, trucks (over 3 axles), buses, and vehicles towing trailers have a maximum speed limit of 55 mph on all freeways and two-lane undivided highways — even on freeways where the posted limit for passenger cars is 65 mph. This is a statutory maximum, not just an advisory recommendation. Violating this limit can result in a traffic citation.'},
  zh:{q:'在加州高速公路上，卡车和拖拽拖车的车辆的最高速度限制是：',opts:['65英里/小时——与乘用车相同','55英里/小时，不管对乘用车的限速是多少','在所有高速公路上60英里/小时','运输危险品时50英里/小时'],exp:'在加州，卡车（超过3轴）、公共汽车和拖拽拖车的车辆在所有高速公路和两车道未分隔公路上的最高速度限制为55英里/小时——即使在对乘用车限速为65英里/小时的高速公路上也是如此。这是法定最高速度，不仅仅是建议。违反此限制可能导致交通罚款。'},
  zhTW:{q:'在加州高速公路上，卡車和拖拽拖車的車輛的最高速度限制是：',opts:['65英里/小時——與乘用車相同','55英里/小時，不管對乘用車的限速是多少','在所有高速公路上60英里/小時','運輸危險品時50英里/小時'],exp:'在加州，卡車（超過3軸）、公共汽車和拖拽拖車的車輛在所有高速公路和兩車道未分隔公路上的最高速度限制為55英里/小時——即使在對乘用車限速為65英里/小時的高速公路上也是如此。這是法定最高速度，不僅僅是建議。違反此限制可能導致交通罰款。'},
  es:{q:'En una autopista de California, los camiones y vehículos con remolques tienen un límite de velocidad máximo de:',opts:['65 mph — igual que los autos de pasajeros','55 mph, independientemente del límite publicado para vehículos de pasajeros','60 mph en todas las autopistas','50 mph cuando transportan materiales peligrosos'],exp:'En California, los camiones (de más de 3 ejes), autobuses y vehículos con remolques tienen un límite de velocidad máximo de 55 mph en todas las autopistas y carreteras de dos carriles no divididas — incluso en autopistas donde el límite para los autos de pasajeros es 65 mph. Esta es una velocidad máxima estatutaria, no solo una recomendación. Violar este límite puede resultar en una infracción de tráfico.'},
  ans:1
},
{
  id:475, cat:'parking',
  en:{q:'A white-painted curb at a bus stop indicates:',opts:['Free short-term parking for any driver','Passenger loading and unloading only — usually limited to buses or very brief stops','Emergency vehicle parking only','No stopping at any time'],exp:'White curbs indicate a passenger loading zone — drivers may stop briefly to pick up or drop off passengers but may not park. At bus stops, the white curb is reserved for buses. Other vehicles may stop very briefly (while the driver stays) to load/unload passengers, but only when not blocking a bus. Check local signs for any time restrictions.'},
  zh:{q:'公共汽车站的白色涂漆路缘石表示：',opts:['任何驾驶员免费短期停车','仅限乘客上下车——通常仅限公共汽车或非常短暂的停靠','仅限紧急车辆停车','任何时候都不能停车'],exp:'白色路缘石表示乘客上下车区——驾驶员可以短暂停靠接送乘客，但不能停车。在公共汽车站，白色路缘石保留给公共汽车。其他车辆只能在不阻塞公共汽车的情况下，非常短暂地（驾驶员留在车上）停靠接送乘客。查看当地标志了解任何时间限制。'},
  zhTW:{q:'公共汽車站的白色塗漆路緣石表示：',opts:['任何駕駛員免費短期停車','僅限乘客上下車——通常僅限公共汽車或非常短暫的停靠','僅限緊急車輛停車','任何時候都不能停車'],exp:'白色路緣石表示乘客上下車區——駕駛員可以短暫停靠接送乘客，但不能停車。在公共汽車站，白色路緣石保留給公共汽車。其他車輛只能在不阻塞公共汽車的情況下，非常短暫地（駕駛員留在車上）停靠接送乘客。查看當地標誌了解任何時間限制。'},
  es:{q:'Un bordillo pintado de blanco en una parada de autobús indica:',opts:['Estacionamiento gratuito de corta duración para cualquier conductor','Solo carga y descarga de pasajeros — generalmente limitado a autobuses o paradas muy breves','Solo estacionamiento de vehículos de emergencia','No detenerse en ningún momento'],exp:'Los bordillos blancos indican zona de carga de pasajeros — los conductores pueden detenerse brevemente para recoger o dejar pasajeros, pero no pueden estacionar. En las paradas de autobús, el bordillo blanco está reservado para los autobuses. Otros vehículos pueden detenerse muy brevemente (mientras el conductor permanece) para cargar/descargar pasajeros, pero solo cuando no bloquean un autobús.'},
  ans:1
},
{
  id:476, cat:'highway',
  en:{q:'What is an "express lane" (also called an HOT lane) on a California freeway?',opts:['A lane reserved for vehicles traveling faster than 65 mph','A lane that allows solo drivers to pay a toll to use an otherwise HOV-restricted lane, in addition to carpools and transit','A lane for emergency vehicles only','A lane designated for trucks and commercial vehicles'],exp:'Express lanes (High-Occupancy Toll lanes or HOT lanes) on California freeways are reserved for carpools (typically 2+ occupants) and clean-air vehicles for free, but also allow solo drivers to pay a variable toll based on congestion levels. The toll rate changes in real time to maintain traffic flow. Look for an FasTrak transponder requirement and entrance signs. Do not cross a double solid white line to enter or exit.'},
  zh:{q:'加州高速公路上的"快速车道"（也称为HOT车道）是什么？',opts:['专为时速超过65英里/小时车辆保留的车道','允许单独驾驶员支付通行费使用否则受HOV限制的车道，除了拼车和公共交通','仅限紧急车辆的车道','为卡车和商业车辆指定的车道'],exp:'加州高速公路上的快速车道（高占用率收费车道或HOT车道）保留给拼车车辆（通常2人或以上）和清洁能源车辆免费使用，但也允许单独驾驶员根据拥堵程度支付可变通行费。通行费率实时变化以维持交通流量。注意FasTrak转发器要求和入口标志。不要越过双实白线进入或离开。'},
  zhTW:{q:'加州高速公路上的"快速車道"（也稱為HOT車道）是什麼？',opts:['專為時速超過65英里/小時車輛保留的車道','允許單獨駕駛員支付通行費使用否則受HOV限制的車道，除了拼車和公共交通','僅限緊急車輛的車道','為卡車和商業車輛指定的車道'],exp:'加州高速公路上的快速車道（高占用率收費車道或HOT車道）保留給拼車車輛（通常2人或以上）和清潔能源車輛免費使用，但也允許單獨駕駛員根據擁堵程度支付可變通行費。通行費率實時變化以維持交通流量。注意FasTrak轉發器要求和入口標誌。不要越過雙實白線進入或離開。'},
  es:{q:'¿Qué es un "carril express" (también llamado carril HOT) en una autopista de California?',opts:['Un carril reservado para vehículos que viajan más rápido de 65 mph','Un carril que permite a conductores solos pagar un peaje para usar un carril de otro modo restringido a HOV, además de carpools y transporte','Un carril solo para vehículos de emergencia','Un carril designado para camiones y vehículos comerciales'],exp:'Los carriles express (carriles de Peaje de Alta Ocupación u HOT) en las autopistas de California están reservados para carpools (típicamente 2+ ocupantes) y vehículos de aire limpio de forma gratuita, pero también permiten a conductores solos pagar un peaje variable según los niveles de congestión. La tarifa del peaje cambia en tiempo real para mantener el flujo del tráfico.'},
  ans:1
},
{
  id:477, cat:'dui',
  en:{q:'What does "implied consent" mean for California drivers?',opts:['Passengers in your car consent to be searched by police','By driving on California roads, you have implicitly agreed to submit to a chemical test if lawfully arrested for DUI','You consent to traffic stops without cause','All drivers agree to be drug tested once per year'],exp:'California\'s implied consent law (Vehicle Code 23612) means that anyone who drives a motor vehicle in California has implicitly agreed to submit to chemical testing (breath, blood, or urine) if lawfully arrested for DUI. Refusing the test results in automatic license suspension, even if you are ultimately not convicted of DUI. You do not need to sign anything — driving is the implied consent.'},
  zh:{q:'"隐含同意"对加州驾驶员意味着什么？',opts:['你车上的乘客同意被警察搜查','通过在加州道路上驾车，你已隐含地同意在被合法逮捕DUI时接受化学测试','你同意在没有原因的情况下被交通拦截','所有驾驶员同意每年接受一次药物测试'],exp:'加州的隐含同意法（车辆法典23612）意味着任何在加州驾驶机动车辆的人已隐含地同意在被合法逮捕DUI时接受化学测试（呼气、血液或尿液）。拒绝测试会导致驾照自动暂停，即使你最终没有被判DUI定罪。你不需要签署任何东西——驾驶就是隐含的同意。'},
  zhTW:{q:'"隱含同意"對加州駕駛員意味著什麼？',opts:['你車上的乘客同意被警察搜查','通過在加州道路上駕車，你已隱含地同意在被合法逮捕DUI時接受化學測試','你同意在沒有原因的情況下被交通攔截','所有駕駛員同意每年接受一次藥物測試'],exp:'加州的隱含同意法（車輛法典23612）意味著任何在加州駕駛機動車輛的人已隱含地同意在被合法逮捕DUI時接受化學測試（呼氣、血液或尿液）。拒絕測試會導致駕照自動暫停，即使你最終沒有被判DUI定罪。你不需要簽署任何東西——駕駛就是隱含的同意。'},
  es:{q:'¿Qué significa "consentimiento implícito" para los conductores de California?',opts:['Los pasajeros en su auto consienten ser registrados por la policía','Al conducir en las carreteras de California, ha acordado implícitamente someterse a una prueba química si es legalmente arrestado por DUI','Usted consiente a paradas de tráfico sin causa','Todos los conductores acuerdan ser probados con drogas una vez al año'],exp:'La ley de consentimiento implícito de California (Código de Vehículos 23612) significa que cualquier persona que conduzca un vehículo en California ha acordado implícitamente someterse a pruebas químicas (aliento, sangre u orina) si es legalmente arrestado por DUI. Negarse resulta en suspensión automática de la licencia, incluso si no es condenado por DUI. No necesita firmar nada — conducir es el consentimiento implícito.'},
  ans:1
},
{
  id:478, cat:'safety',
  en:{q:'What is the safest action to take when you begin to feel drowsy while driving on a long trip?',opts:['Open the windows and turn on the radio to stay alert','Roll down the window and splash cold water on your face','Stop at a safe location and take a short nap (15–20 minutes), and drink coffee before sleeping (the caffeine will kick in when you wake)','Increase your speed to reach your destination sooner'],exp:'When drowsy, the only truly safe option is to stop driving. Pull off at a rest area, parking lot, or safe location. A 15–20 minute nap is the most effective remedy for drowsiness. Caffeine can provide temporary relief but is not a substitute for sleep. Opening windows and loud music are temporary fixes that do not address the underlying problem. Drowsy driving is as dangerous as drunk driving.'},
  zh:{q:'在长途旅行中开始感到困倦时，最安全的行动是什么？',opts:['打开车窗和打开收音机以保持清醒','摇下车窗，将冷水泼在脸上','在安全地点停车，小睡15-20分钟，睡前喝咖啡（咖啡因会在你醒来时生效）','加快速度以更快到达目的地'],exp:'困倦时，唯一真正安全的选择是停止驾驶。靠近休息区、停车场或安全地点。15-20分钟的小睡是解决困倦最有效的方法。咖啡因可以提供暂时的缓解，但不能替代睡眠。打开车窗和大声音乐只是临时解决方案，无法解决根本问题。疲劳驾驶与醉酒驾驶一样危险。'},
  zhTW:{q:'在長途旅行中開始感到困倦時，最安全的行動是什麼？',opts:['打開車窗和打開收音機以保持清醒','搖下車窗，將冷水潑在臉上','在安全地點停車，小睡15-20分鐘，睡前喝咖啡（咖啡因會在你醒來時生效）','加快速度以更快到達目的地'],exp:'困倦時，唯一真正安全的選擇是停止駕駛。靠近休息區、停車場或安全地點。15-20分鐘的小睡是解決困倦最有效的方法。咖啡因可以提供暫時的緩解，但不能替代睡眠。打開車窗和大聲音樂只是臨時解決方案，無法解決根本問題。疲勞駕駛與醉酒駕駛一樣危險。'},
  es:{q:'¿Cuál es la acción más segura cuando comienza a sentirse somnoliento mientras conduce en un viaje largo?',opts:['Abrir las ventanas y encender la radio para mantenerse alerta','Bajar la ventana y salpicar agua fría en su cara','Detenerse en un lugar seguro y tomar una siesta corta (15-20 minutos), y beber café antes de dormir (la cafeína hará efecto cuando se despierte)','Aumentar la velocidad para llegar a su destino más pronto'],exp:'Cuando está somnoliento, la única opción verdaderamente segura es dejar de conducir. Deténgase en un área de descanso, estacionamiento o lugar seguro. Una siesta de 15-20 minutos es el remedio más efectivo para la somnolencia. La cafeína puede proporcionar alivio temporal pero no es sustituto del sueño. Abrir ventanas y música fuerte son soluciones temporales que no abordan el problema subyacente.'},
  ans:2
},
{
  id:479, cat:'signs',
  en:{q:'What does a triangular yield sign mean?',opts:['Stop completely, then proceed','Slow down and be prepared to stop — let traffic already on the road go first','Drive through only if the road is clear','Merge left immediately'],exp:'A yield sign (downward-pointing red triangle with the word YIELD) means slow down and give the right-of-way to traffic on the road you are entering or crossing. You do not have to stop if no other vehicles are approaching, but you must be prepared to stop if necessary. Failing to yield when required can cause serious accidents. Yield signs are typically found at freeway ramps and certain intersections.'},
  zh:{q:'三角形让行标志意味着什么？',opts:['完全停车，然后继续','减速并准备停车——让已在道路上的交通先行','只有当道路畅通时才通过','立即向左合并'],exp:'让行标志（带有"YIELD"字样的向下红色三角形）意味着减速并让行你正在进入或穿越的道路上的交通。如果没有其他车辆接近，你不必停车，但你必须在必要时准备停车。在需要时不让行可能会导致严重事故。让行标志通常出现在高速公路匝道和某些路口。'},
  zhTW:{q:'三角形讓行標誌意味著什麼？',opts:['完全停車，然後繼續','減速並準備停車——讓已在道路上的交通先行','只有當道路暢通時才通過','立即向左合並'],exp:'讓行標誌（帶有"YIELD"字樣的向下紅色三角形）意味著減速並讓行你正在進入或穿越的道路上的交通。如果沒有其他車輛接近，你不必停車，但你必須在必要時準備停車。在需要時不讓行可能會導致嚴重事故。讓行標誌通常出現在高速公路匝道和某些路口。'},
  es:{q:'¿Qué significa un letrero triangular de ceda el paso?',opts:['Deténgase completamente, luego continúe','Reduzca la velocidad y esté preparado para detenerse — deje pasar primero al tráfico ya en la carretera','Avance solo si la carretera está despejada','Fusiónese a la izquierda inmediatamente'],exp:'Un letrero de ceda el paso (triángulo rojo apuntando hacia abajo con la palabra YIELD) significa que reduzca la velocidad y ceda el paso al tráfico en la carretera que está entrando o cruzando. No tiene que detenerse si no se acercan otros vehículos, pero debe estar preparado para detenerse si es necesario. No ceder el paso puede causar accidentes graves. Los letreros de ceda el paso se encuentran típicamente en rampas de autopista y ciertas intersecciones.'},
  ans:1
},
{
  id:480, cat:'laws',
  en:{q:'In California, which of the following passengers is NOT required to wear a seat belt?',opts:['A passenger in the back seat who is 16 years old','A passenger who is 8 years old in the front seat','A driver who has a medical exemption from a licensed physician','All vehicle occupants must wear a seat belt — there are no exemptions'],exp:'California\'s mandatory seat belt law requires all vehicle occupants to wear a seat belt. The driver is responsible for ensuring all passengers under 16 wear seat belts. Passengers 16 and older are responsible for buckling themselves. Medical exemptions can be issued by a licensed physician. Failure to wear a seat belt results in a fine. Rear seat belt laws apply equally to all occupants.'},
  zh:{q:'在加州，以下哪位乘客不需要系安全带？',opts:['16岁的后座乘客','前排座位的8岁乘客','持有执照医生出具医疗豁免的驾驶员','所有车辆乘客都必须系安全带——没有豁免'],exp:'加州强制安全带法要求所有车辆乘客系安全带。驾驶员有责任确保16岁以下的所有乘客系安全带。16岁及以上的乘客自己负责系好安全带。有执照的医生可以出具医疗豁免。不系安全带会导致罚款。后座安全带法律同样适用于所有乘客。'},
  zhTW:{q:'在加州，以下哪位乘客不需要系安全帶？',opts:['16歲的後座乘客','前排座位的8歲乘客','持有執照醫生出具醫療豁免的駕駛員','所有車輛乘客都必須系安全帶——沒有豁免'],exp:'加州強制安全帶法要求所有車輛乘客系安全帶。駕駛員有責任確保16歲以下的所有乘客系安全帶。16歲及以上的乘客自己負責系好安全帶。有執照的醫生可以出具醫療豁免。不系安全帶會導致罰款。後座安全帶法律同樣適用於所有乘客。'},
  es:{q:'En California, ¿cuál de los siguientes pasajeros NO está obligado a usar cinturón de seguridad?',opts:['Un pasajero en el asiento trasero que tiene 16 años','Un pasajero de 8 años en el asiento delantero','Un conductor que tiene una exención médica de un médico con licencia','Todos los ocupantes del vehículo deben usar cinturón de seguridad — no hay exenciones'],exp:'La ley obligatoria de cinturón de seguridad de California requiere que todos los ocupantes del vehículo usen cinturón de seguridad. El conductor es responsable de asegurar que todos los pasajeros menores de 16 años usen cinturones. Los pasajeros de 16 años o más son responsables de abrocharse ellos mismos. Las exenciones médicas pueden ser emitidas por un médico con licencia.'},
  ans:2
},

,
{
  id:481, cat:'signs',
  en:{q:'A sign reads "BEGIN RIGHT TURN LANE MUST TURN RIGHT." What does this mean?',opts:['All vehicles entering from the right must turn right','Only vehicles in the right turn lane must turn right — vehicles in other lanes can go straight','All vehicles on this road must turn right ahead','Turning right is optional for vehicles already in the right lane'],exp:'This sign means that a dedicated right-turn-only lane is beginning. Vehicles that enter and drive in this right turn lane MUST turn right — they cannot go straight or turn left. Vehicles in other lanes may continue straight or turn. This sign helps drivers understand that the right lane is a mandatory turn lane, not a through lane.'},
  zh:{q:'标志写着"BEGIN RIGHT TURN LANE MUST TURN RIGHT"（右转专用车道开始，必须右转）。这意味着什么？',opts:['从右侧进入的所有车辆必须右转','只有右转车道的车辆必须右转——其他车道的车辆可以直行','此路上的所有车辆都必须在前方右转','对于已在右侧车道的车辆，右转是可选的'],exp:'这个标志意味着专用右转车道正在开始。进入并在这条右转车道行驶的车辆必须右转——它们不能直行或左转。其他车道的车辆可以继续直行或转弯。这个标志帮助驾驶员了解右车道是强制转弯车道，而不是直行车道。'},
  zhTW:{q:'標誌寫著"BEGIN RIGHT TURN LANE MUST TURN RIGHT"（右轉專用車道開始，必須右轉）。這意味著什麼？',opts:['從右側進入的所有車輛必須右轉','只有右轉車道的車輛必須右轉——其他車道的車輛可以直行','此路上的所有車輛都必須在前方右轉','對於已在右側車道的車輛，右轉是可選的'],exp:'這個標誌意味著專用右轉車道正在開始。進入並在這條右轉車道行駛的車輛必須右轉——它們不能直行或左轉。其他車道的車輛可以繼續直行或轉彎。這個標誌幫助駕駛員了解右車道是強制轉彎車道，而不是直行車道。'},
  es:{q:'Un letrero dice "BEGIN RIGHT TURN LANE MUST TURN RIGHT" (Comienza carril de giro a la derecha - debe girar a la derecha). ¿Qué significa esto?',opts:['Todos los vehículos que entran desde la derecha deben girar a la derecha','Solo los vehículos en el carril de giro a la derecha deben girar — los vehículos en otros carriles pueden ir recto','Todos los vehículos en esta carretera deben girar a la derecha adelante','Girar a la derecha es opcional para los vehículos ya en el carril derecho'],exp:'Este letrero significa que comienza un carril exclusivo de giro a la derecha. Los vehículos que entren y conduzcan en este carril de giro a la derecha DEBEN girar a la derecha — no pueden ir recto ni girar a la izquierda. Los vehículos en otros carriles pueden continuar recto o girar. Este letrero ayuda a los conductores a entender que el carril derecho es un carril de giro obligatorio.'},
  ans:1
},
{
  id:482, cat:'rightofway',
  en:{q:'You are on a private road approaching a public street. Who has the right-of-way?',opts:['You do, because you arrived first','Traffic on the public street has the right-of-way — you must yield','Whoever is traveling faster','The vehicle going straight on the public road only if it has a green light'],exp:'Vehicles entering a public street from a private road, driveway, alley, or parking lot must yield to all traffic on the public street. The public street always has the right-of-way over private roads and driveways. This also applies to vehicles entering from gas stations, parking lots, or any other private property. Stop and yield before entering the public roadway.'},
  zh:{q:'你在私家道路上，正在接近一条公共街道。谁有通行权？',opts:['你有，因为你先到达','公共街道上的交通有通行权——你必须让行','速度较快的那一方','只有公共道路上直行的车辆有绿灯时'],exp:'从私家道路、私家车道、小巷或停车场进入公共街道的车辆必须让行公共街道上的所有交通。公共街道始终对私家道路和车道有通行权。这同样适用于从加油站、停车场或任何其他私人财产进入的车辆。在进入公共道路前停车让行。'},
  zhTW:{q:'你在私家道路上，正在接近一條公共街道。誰有通行權？',opts:['你有，因為你先到達','公共街道上的交通有通行權——你必須讓行','速度較快的那一方','只有公共道路上直行的車輛有綠燈時'],exp:'從私家道路、私家車道、小巷或停車場進入公共街道的車輛必須讓行公共街道上的所有交通。公共街道始終對私家道路和車道有通行權。這同樣適用於從加油站、停車場或任何其他私人財產進入的車輛。在進入公共道路前停車讓行。'},
  es:{q:'Está en una carretera privada acercándose a una calle pública. ¿Quién tiene el derecho de paso?',opts:['Usted, porque llegó primero','El tráfico en la calle pública tiene el derecho de paso — debe ceder','El que viaja más rápido','El vehículo que va recto en la calle pública solo si tiene luz verde'],exp:'Los vehículos que entran a una calle pública desde una carretera privada, entrada de vehículos, callejón o estacionamiento deben ceder el paso a todo el tráfico en la calle pública. La calle pública siempre tiene el derecho de paso sobre las carreteras privadas y entradas. Esto también aplica a vehículos que entran desde gasolineras, estacionamientos o cualquier otra propiedad privada.'},
  ans:1
},
{
  id:483, cat:'laws',
  en:{q:'When is it legal to cross double solid yellow lines in California?',opts:['When making a left turn into a driveway or private road','Never — it is always illegal','When passing a slow-moving vehicle in a rural area','When the road is clear for 500 feet ahead'],exp:'Double solid yellow lines indicate that passing or crossing is prohibited in both directions. However, you may cross double solid yellow lines to make a left turn into a driveway, private road, or an alley — but only if it is safe to do so and no sign prohibits the turn. You may not use double yellow lines to make a U-turn unless a sign specifically permits it.'},
  zh:{q:'在加州，什么时候可以合法地越过双实黄线？',opts:['在左转进入私家车道或私家道路时','永远不——始终是违法的','在农村地区超过慢速行驶车辆时','当前方500英尺的道路畅通时'],exp:'双实黄线表示两个方向都禁止超车或越线。但是，你可以越过双实黄线左转进入私家车道、私家道路或小巷——但只有在安全的情况下，且没有标志禁止该转弯。除非标志特别允许，否则不能利用双黄线掉头。'},
  zhTW:{q:'在加州，什麼時候可以合法地越過雙實黃線？',opts:['在左轉進入私家車道或私家道路時','永遠不——始終是違法的','在農村地區超過慢速行駛車輛時','當前方500英尺的道路暢通時'],exp:'雙實黃線表示兩個方向都禁止超車或越線。但是，你可以越過雙實黃線左轉進入私家車道、私家道路或小巷——但只有在安全的情況下，且沒有標誌禁止該轉彎。除非標誌特別允許，否則不能利用雙黃線掉頭。'},
  es:{q:'¿Cuándo es legal cruzar líneas amarillas dobles sólidas en California?',opts:['Al girar a la izquierda hacia una entrada de vehículos o carretera privada','Nunca — siempre es ilegal','Al pasar un vehículo de movimiento lento en un área rural','Cuando la carretera está despejada por 500 pies adelante'],exp:'Las líneas amarillas dobles sólidas indican que está prohibido adelantar o cruzar en ambas direcciones. Sin embargo, puede cruzar líneas amarillas dobles sólidas para girar a la izquierda hacia una entrada de vehículos, carretera privada o callejón — pero solo si es seguro hacerlo y ningún letrero prohíbe el giro. No puede usar líneas amarillas dobles para hacer un giro en U a menos que un letrero lo permita específicamente.'},
  ans:0
},
{
  id:484, cat:'speed',
  en:{q:'You are driving in a business district in California. What is the prima facie speed limit if no limit is posted?',opts:['20 mph','25 mph','30 mph','35 mph'],exp:'The prima facie (assumed) speed limit in a business district in California is 25 mph unless a different speed is posted. A business district is an area where 50% or more of the frontage on either side of a 300-foot stretch has business uses (shops, offices, etc.). This is the same as the residential district limit. Always look for posted speed signs.'},
  zh:{q:'你在加州的商业区行驶。如果没有限速标志，法定速度限制是多少？',opts:['20英里/小时','25英里/小时','30英里/小时','35英里/小时'],exp:'如果没有不同的速度标志，加州商业区的法定（推定）速度限制为25英里/小时。商业区是指300英尺路段的任一侧超过50%的临街面有商业用途（商店、办公室等）的区域。这与住宅区限制相同。始终注意张贴的速度标志。'},
  zhTW:{q:'你在加州的商業區行駛。如果沒有限速標誌，法定速度限制是多少？',opts:['20英里/小時','25英里/小時','30英里/小時','35英里/小時'],exp:'如果沒有不同的速度標誌，加州商業區的法定（推定）速度限制為25英里/小時。商業區是指300英尺路段的任一側超過50%的臨街面有商業用途（商店、辦公室等）的區域。這與住宅區限制相同。始終注意張貼的速度標誌。'},
  es:{q:'Está conduciendo en un distrito comercial en California. ¿Cuál es el límite de velocidad prima facie si no hay límite publicado?',opts:['20 mph','25 mph','30 mph','35 mph'],exp:'El límite de velocidad prima facie (asumido) en un distrito comercial en California es 25 mph a menos que se publique una velocidad diferente. Un distrito comercial es un área donde el 50% o más del frente en cualquier lado de un tramo de 300 pies tiene usos comerciales (tiendas, oficinas, etc.). Este es el mismo límite que el distrito residencial. Siempre busque letreros de velocidad publicados.'},
  ans:1
},
{
  id:485, cat:'parking',
  en:{q:'What does a purple-painted curb mean?',opts:['Loading zone for commercial vehicles','Time-limited parking controlled by a digital pay station — may vary by city','No stopping at any time — emergency zone','Accessible parking for people with disabilities only'],exp:'Purple curbs are a relatively new addition used by some California cities (such as Los Angeles) to indicate time-limited parking that is enforced digitally — often using smart parking meters or pay-by-app systems rather than traditional painted time restriction signs. The meaning can vary by jurisdiction, so always check nearby signs or meters to understand the specific restrictions.'},
  zh:{q:'紫色涂漆路缘石意味着什么？',opts:['商用车辆装卸区','由数字付款站控制的限时停车——可能因城市而异','任何时候都不能停车——紧急区域','仅限残疾人无障碍停车'],exp:'紫色路缘石是一种相对较新的颜色，一些加州城市（如洛杉矶）使用它来表示通过数字方式强制执行的限时停车——通常使用智能停车计时器或手机付费应用系统，而不是传统的涂漆时间限制标志。含义可能因管辖区而异，所以始终检查附近的标志或计时器以了解具体限制。'},
  zhTW:{q:'紫色塗漆路緣石意味著什麼？',opts:['商用車輛裝卸區','由數字付款站控制的限時停車——可能因城市而異','任何時候都不能停車——緊急區域','僅限殘疾人無障礙停車'],exp:'紫色路緣石是一種相對較新的顏色，一些加州城市（如洛杉磯）使用它來表示通過數字方式強制執行的限時停車——通常使用智能停車計時器或手機付費應用系統，而不是傳統的塗漆時間限制標誌。含義可能因管轄區而異，所以始終檢查附近的標誌或計時器以了解具體限制。'},
  es:{q:'¿Qué significa un bordillo pintado de morado?',opts:['Zona de carga para vehículos comerciales','Estacionamiento de tiempo limitado controlado por una estación de pago digital — puede variar por ciudad','No detenerse en ningún momento — zona de emergencia','Solo estacionamiento accesible para personas con discapacidades'],exp:'Los bordillos morados son una adición relativamente nueva usada por algunas ciudades de California (como Los Ángeles) para indicar estacionamiento de tiempo limitado que se aplica digitalmente — a menudo usando parquímetros inteligentes o sistemas de pago por aplicación en lugar de señales de restricción de tiempo pintadas tradicionales. El significado puede variar por jurisdicción, así que siempre verifique los letreros o parquímetros cercanos.'},
  ans:1
},
{
  id:486, cat:'highway',
  en:{q:'When driving in the left lane of a two-lane freeway, when should you move to the right lane?',opts:['Only when the speed limit changes','When you have completed your passing maneuver — California law requires returning to the right after passing','When you notice another vehicle behind you','Only when instructed by road signs'],exp:'California Vehicle Code requires that after passing a vehicle on a multilane highway, you should move back to the right lane when it is safe to do so. The left lane is for passing — not for extended cruising. Additionally, California has a "keep right" law: if you are driving slower than the normal speed of traffic in the left lane and are not passing, you must move to the right lane.'},
  zh:{q:'在两车道高速公路的左车道行驶时，什么时候应该移至右车道？',opts:['只有当限速变化时','完成超车动作后——加州法律要求超车后返回右侧','当你注意到身后有其他车辆时','只有在道路标志指示时'],exp:'加州车辆法典要求在多车道高速公路超车后，应在安全时移回右车道。左车道用于超车——而不是长时间巡航。此外，加州有"靠右行驶"法律：如果你在左车道行驶的速度慢于正常交通速度，且未在超车，则必须移至右车道。'},
  zhTW:{q:'在兩車道高速公路的左車道行駛時，什麼時候應該移至右車道？',opts:['只有當限速變化時','完成超車動作後——加州法律要求超車後返回右側','當你注意到身後有其他車輛時','只有在道路標誌指示時'],exp:'加州車輛法典要求在多車道高速公路超車後，應在安全時移回右車道。左車道用於超車——而不是長時間巡航。此外，加州有"靠右行駛"法律：如果你在左車道行駛的速度慢於正常交通速度，且未在超車，則必須移至右車道。'},
  es:{q:'Al conducir en el carril izquierdo de una autopista de dos carriles, ¿cuándo debe moverse al carril derecho?',opts:['Solo cuando cambia el límite de velocidad','Cuando haya completado su maniobra de adelantamiento — la ley de California requiere regresar a la derecha después de adelantar','Cuando nota otro vehículo detrás de usted','Solo cuando lo indican las señales viales'],exp:'El Código de Vehículos de California requiere que después de pasar un vehículo en una autopista de múltiples carriles, regrese al carril derecho cuando sea seguro hacerlo. El carril izquierdo es para adelantar — no para cruzar extendido. Además, California tiene una ley de "mantenerse a la derecha": si conduce más lento que la velocidad normal del tráfico en el carril izquierdo y no está adelantando, debe moverse al carril derecho.'},
  ans:1
},
{
  id:487, cat:'dui',
  en:{q:'In California, what is the minimum jail time for a third DUI conviction within 10 years?',opts:['No mandatory jail time — fines and probation only','120 days in jail','At least 120 days (up to 1 year) in county jail, or 30 days mandatory with the balance on probation depending on the court','Only community service hours'],exp:'A third DUI conviction in California within 10 years carries mandatory jail time of at least 120 days in county jail (up to 1 year), a fine of $2,500–$3,000 (plus penalty assessments), license revocation for 3 years, mandatory DUI program (30 months), and probation of 3–5 years. The vehicle can also be impounded, and the driver may be classified as a habitual traffic offender.'},
  zh:{q:'在加州，10年内第三次DUI定罪的最短监禁时间是多少？',opts:['没有强制监禁时间——只有罚款和缓刑','120天监禁','至少120天（最多1年）县监狱，或根据法院决定，强制30天加上缓刑期','只有社区服务时间'],exp:'在加州，10年内第三次DUI定罪需要至少120天（最多1年）的县监狱强制监禁、2,500至3,000美元罚款（加上罚款评估）、驾照吊销3年、强制DUI课程（30个月）和3至5年缓刑。车辆也可能被扣押，驾驶员可能被列为惯犯交通违规者。'},
  zhTW:{q:'在加州，10年內第三次DUI定罪的最短監禁時間是多少？',opts:['沒有強制監禁時間——只有罰款和緩刑','120天監禁','至少120天（最多1年）縣監獄，或根據法院決定，強制30天加上緩刑期','只有社區服務時間'],exp:'在加州，10年內第三次DUI定罪需要至少120天（最多1年）的縣監獄強制監禁、2,500至3,000美元罰款（加上罰款評估）、駕照吊銷3年、強制DUI課程（30個月）和3至5年緩刑。車輛也可能被扣押，駕駛員可能被列為慣犯交通違規者。'},
  es:{q:'En California, ¿cuál es el tiempo mínimo de cárcel para una tercera condena por DUI dentro de 10 años?',opts:['Sin tiempo de cárcel obligatorio — solo multas y libertad condicional','120 días de cárcel','Al menos 120 días (hasta 1 año) en cárcel del condado, o 30 días obligatorios con el resto en libertad condicional dependiendo del tribunal','Solo horas de servicio comunitario'],exp:'Una tercera condena por DUI en California dentro de 10 años conlleva tiempo de cárcel obligatorio de al menos 120 días en la cárcel del condado (hasta 1 año), una multa de $2,500-$3,000, revocación de licencia por 3 años, programa de DUI obligatorio (30 meses) y libertad condicional de 3-5 años.'},
  ans:2
},
{
  id:488, cat:'safety',
  en:{q:'When should you check your mirrors while driving?',opts:['Only when planning to change lanes or turn','Approximately every 5–8 seconds to maintain awareness of traffic around you, plus before any lane change, turn, or stop','Only when you hear another vehicle nearby','Only at intersections and stop signs'],exp:'Safe drivers should check their mirrors every 5–8 seconds to maintain a complete picture of the traffic situation around them. Additionally, always check mirrors before changing lanes, turning, stopping, merging, entering or exiting the freeway, and before backing up. However, do not fixate on mirrors — most of your focus (about 90%) should be looking ahead through the windshield.'},
  zh:{q:'驾车时应该什么时候检查后视镜？',opts:['只有在计划变道或转弯时','大约每5-8秒一次以保持对周围交通的意识，加上在任何变道、转弯或停车前','只有当你听到附近有其他车辆时','只在路口和停车标志处'],exp:'安全驾驶员应该每5-8秒检查后视镜，以保持对周围交通状况的完整了解。此外，在变道、转弯、停车、合并、进入或离开高速公路之前，以及倒车之前，始终检查后视镜。但是，不要盯着后视镜——你的大部分注意力（约90%）应该集中在向前通过挡风玻璃的道路上。'},
  zhTW:{q:'駕車時應該什麼時候檢查後視鏡？',opts:['只有在計劃變道或轉彎時','大約每5-8秒一次以保持對周圍交通的意識，加上在任何變道、轉彎或停車前','只有當你聽到附近有其他車輛時','只在路口和停車標誌處'],exp:'安全駕駛員應該每5-8秒檢查後視鏡，以保持對周圍交通狀況的完整了解。此外，在變道、轉彎、停車、合並、進入或離開高速公路之前，以及倒車之前，始終檢查後視鏡。但是，不要盯著後視鏡——你的大部分注意力（約90%）應該集中在向前通過擋風玻璃的道路上。'},
  es:{q:'¿Cuándo debe revisar sus espejos mientras conduce?',opts:['Solo cuando planea cambiar de carril o girar','Aproximadamente cada 5-8 segundos para mantener conciencia del tráfico a su alrededor, más antes de cualquier cambio de carril, giro o parada','Solo cuando escucha un vehículo cercano','Solo en intersecciones y señales de alto'],exp:'Los conductores seguros deben revisar sus espejos cada 5-8 segundos para mantener un panorama completo de la situación del tráfico a su alrededor. Además, siempre revise los espejos antes de cambiar de carril, girar, detenerse, fusionarse, entrar o salir de la autopista, y antes de retroceder. Sin embargo, no se fije en los espejos — la mayor parte de su atención (alrededor del 90%) debe estar mirando hacia adelante.'},
  ans:1
},
{
  id:489, cat:'signs',
  en:{q:'What does a sign that shows a car with wavy lines underneath it mean?',opts:['Slippery when wet — reduced traction likely on this road surface','Flood zone — road may be impassable after heavy rain','Car wash ahead','Rough road surface — reduce speed'],exp:'A sign showing a car with wavy lines beneath it warns that the road surface ahead may be slippery — especially when wet. This sign is placed where road conditions such as loose gravel, sand, ice, painted stripes, or smooth surfaces exist. Reduce speed, avoid sudden braking or steering, and exercise extra caution. When wet, even roads that are normally safe can become hazardous.'},
  zh:{q:'显示汽车下方有波浪线的标志意味着什么？',opts:['潮湿时路滑——这段路面可能牵引力不足','洪水区——大雨后道路可能不通行','前方有洗车处','路面崎岖——减速'],exp:'显示汽车下方有波浪线的标志警告前方路面可能很滑——尤其是在潮湿时。这种标志放置在存在碎石、沙子、冰、涂漆条纹或光滑路面等道路条件的地方。减速、避免突然刹车或转向，并格外小心。在潮湿时，即使通常安全的道路也可能变得危险。'},
  zhTW:{q:'顯示汽車下方有波浪線的標誌意味著什麼？',opts:['潮濕時路滑——這段路面可能牽引力不足','洪水區——大雨後道路可能不通行','前方有洗車處','路面崎嶇——減速'],exp:'顯示汽車下方有波浪線的標誌警告前方路面可能很滑——尤其是在潮濕時。這種標誌放置在存在碎石、沙子、冰、塗漆條紋或光滑路面等道路條件的地方。減速、避免突然剎車或轉向，並格外小心。在潮濕時，即使通常安全的道路也可能變得危險。'},
  es:{q:'¿Qué significa un letrero que muestra un auto con líneas onduladas debajo?',opts:['Resbaladizo cuando está mojado — es probable que haya poca tracción en esta superficie vial','Zona de inundación — la carretera puede ser intransitable después de lluvias fuertes','Lavado de autos adelante','Superficie de carretera rugosa — reduzca la velocidad'],exp:'Un letrero que muestra un auto con líneas onduladas debajo advierte que la superficie de la carretera puede ser resbaladiza — especialmente cuando está mojada. Esta señal se coloca donde existen condiciones como grava suelta, arena, hielo, franjas pintadas o superficies lisas. Reduzca la velocidad, evite frenados o direccionamiento bruscos, y tenga precaución adicional.'},
  ans:0
},
{
  id:490, cat:'laws',
  en:{q:'What does California\'s "3-foot rule" for cyclists require of drivers?',opts:['Cyclists must stay 3 feet from the edge of the road','Drivers must give cyclists at least 3 feet of clearance when passing them','Cyclists must maintain a 3-foot gap from parked cars','Drivers must slow to 3 mph when passing a cyclist'],exp:'California\'s Three Feet for Safety Act (Vehicle Code 21760) requires drivers to give bicyclists a minimum of 3 feet (about one meter) of clearance when passing them. If the driver cannot safely provide 3 feet of clearance, they must slow down to a safe speed and only pass when it is safe to do so. Violating this law can result in a $35 fine ($220 if it causes a collision).'},
  zh:{q:'加州对骑自行车者的"3英尺规则"对驾驶员有什么要求？',opts:['骑行者必须距路边至少3英尺','驾驶员超越骑行者时必须给予至少3英尺的通行间隙','骑行者必须与停靠的汽车保持3英尺的距离','驾驶员在超越骑行者时必须减速至3英里/小时'],exp:'加州的《三英尺安全法》（车辆法典21760）要求驾驶员超越骑行者时给予至少3英尺（约1米）的通行间隙。如果驾驶员无法安全提供3英尺的间隙，必须减速至安全速度，并只有在安全时才超越。违反此法律可能导致35美元罚款（如果导致碰撞则为220美元）。'},
  zhTW:{q:'加州對騎自行車者的"3英尺規則"對駕駛員有什麼要求？',opts:['騎行者必須距路邊至少3英尺','駕駛員超越騎行者時必須給予至少3英尺的通行間隙','騎行者必須與停靠的汽車保持3英尺的距離','駕駛員在超越騎行者時必須減速至3英里/小時'],exp:'加州的《三英尺安全法》（車輛法典21760）要求駕駛員超越騎行者時給予至少3英尺（約1米）的通行間隙。如果駕駛員無法安全提供3英尺的間隙，必須減速至安全速度，並只有在安全時才超越。違反此法律可能導致35美元罰款（如果導致碰撞則為220美元）。'},
  es:{q:'¿Qué requiere la "regla de 3 pies" de California para ciclistas a los conductores?',opts:['Los ciclistas deben mantenerse a 3 pies del borde de la carretera','Los conductores deben dar a los ciclistas al menos 3 pies de espacio al pasarlos','Los ciclistas deben mantener un espacio de 3 pies de los autos estacionados','Los conductores deben reducir a 3 mph al pasar a un ciclista'],exp:'La Ley de Tres Pies para Seguridad de California (Código de Vehículos 21760) requiere que los conductores den a los ciclistas un mínimo de 3 pies (aproximadamente un metro) de espacio al pasarlos. Si el conductor no puede proporcionar de forma segura 3 pies de espacio, debe reducir la velocidad a una velocidad segura y solo pasar cuando sea seguro. Violar esta ley puede resultar en una multa de $35 ($220 si causa una colisión).'},
  ans:1
},

,
{
  id:491, cat:'signs',
  en:{q:'What does a "NO STANDING" sign at the side of the road mean?',opts:['You may stop briefly to drop off or pick up a passenger, but you may not wait','You may not stop at all — not even briefly','You may park here for up to 5 minutes','Only buses may stop here'],exp:'A "NO STANDING" sign means you may not stop your vehicle except to immediately pick up or discharge passengers, as long as you remain in the vehicle and are ready to move at any moment. You may not wait for someone who has gone inside a building. "No Standing" is more restrictive than "No Parking" (which allows brief stops to load/unload) but less restrictive than "No Stopping" (which prohibits all stops).'},
  zh:{q:'路边的"NO STANDING"（禁止停靠）标志意味着什么？',opts:['你可以短暂停车接送乘客，但不能等待','你完全不能停车——即使是短暂的','你可以在这里停车最多5分钟','只有公共汽车可以在这里停靠'],exp:'"NO STANDING"标志意味着你不能停车，除非立即接载或下送乘客，且你留在车内随时准备移动。你不能等待已进入建筑物内的人。"禁止停靠"比"禁止停车"（允许短暂停靠装卸）限制更多，但比"禁止停车"（禁止所有停靠）限制较少。'},
  zhTW:{q:'路邊的"NO STANDING"（禁止停靠）標誌意味著什麼？',opts:['你可以短暫停車接送乘客，但不能等待','你完全不能停車——即使是短暫的','你可以在這裡停車最多5分鐘','只有公共汽車可以在這裡停靠'],exp:'"NO STANDING"標誌意味著你不能停車，除非立即接載或下送乘客，且你留在車內隨時準備移動。你不能等待已進入建築物內的人。"禁止停靠"比"禁止停車"（允許短暫停靠裝卸）限制更多，但比"禁止停車"（禁止所有停靠）限制較少。'},
  es:{q:'¿Qué significa un letrero "NO STANDING" (No Permanecer) al lado de la carretera?',opts:['Puede detenerse brevemente para dejar o recoger un pasajero, pero no puede esperar','No puede detenerse en absoluto — ni siquiera brevemente','Puede estacionar aquí hasta 5 minutos','Solo los autobuses pueden detenerse aquí'],exp:'Un letrero "NO STANDING" significa que no puede detener su vehículo excepto para recoger o dejar pasajeros inmediatamente, siempre que permanezca en el vehículo y esté listo para moverse en cualquier momento. No puede esperar a alguien que ha entrado a un edificio. "No Permanecer" es más restrictivo que "No Estacionar" pero menos restrictivo que "No Parar".'},
  ans:0
},
{
  id:492, cat:'rightofway',
  en:{q:'You are stopped at a red light. The light turns green, but a pedestrian is still finishing crossing the intersection. What should you do?',opts:['Honk to signal the pedestrian to hurry up, then proceed','Wait for the pedestrian to finish crossing before proceeding','Proceed slowly — the green light gives you the right-of-way over pedestrians','Pull forward gradually to encourage the pedestrian to move faster'],exp:'Even when the light turns green, you must wait for any pedestrians already in the crosswalk to finish crossing before you proceed. Pedestrians in a crosswalk always have the right-of-way, regardless of the traffic signal. A green light allows you to go when it is safe to do so — it does not eliminate your responsibility to yield to pedestrians in your path.'},
  zh:{q:'你在红灯前停下。灯变绿，但一个行人还在过路口。你应该怎么做？',opts:['鸣笛催促行人加快，然后通行','等行人完全过完马路再通行','缓慢前行——绿灯给你对行人的通行权','逐渐向前以鼓励行人更快移动'],exp:'即使灯变绿，你也必须等路口内的任何行人过完马路再通行。无论交通信号如何，路口内的行人始终有通行权。绿灯允许你在安全时通行——它不消除你对路上行人让行的责任。'},
  zhTW:{q:'你在紅燈前停下。燈變綠，但一個行人還在過路口。你應該怎麼做？',opts:['鳴笛催促行人加快，然後通行','等行人完全過完馬路再通行','緩慢前行——綠燈給你對行人的通行權','逐漸向前以鼓勵行人更快移動'],exp:'即使燈變綠，你也必須等路口內的任何行人過完馬路再通行。無論交通信號如何，路口內的行人始終有通行權。綠燈允許你在安全時通行——它不消除你對路上行人讓行的責任。'},
  es:{q:'Está detenido en un semáforo en rojo. La luz cambia a verde, pero un peatón todavía está terminando de cruzar la intersección. ¿Qué debe hacer?',opts:['Toque el claxon para indicarle al peatón que se apure, luego continúe','Espere a que el peatón termine de cruzar antes de continuar','Continúe lentamente — el semáforo verde le da el derecho de paso sobre los peatones','Avance gradualmente para animar al peatón a moverse más rápido'],exp:'Incluso cuando la luz cambia a verde, debe esperar a que cualquier peatón que ya esté en el cruce termine de cruzar antes de continuar. Los peatones en un cruce siempre tienen el derecho de paso, independientemente de la señal de tráfico. Un semáforo verde le permite avanzar cuando es seguro — no elimina su responsabilidad de ceder el paso a los peatones en su camino.'},
  ans:1
},
{
  id:493, cat:'laws',
  en:{q:'What must California drivers do at a flashing red traffic light?',opts:['Slow down and proceed with caution','Stop completely, yield to all cross traffic and pedestrians, then proceed when safe — treat it like a stop sign','The signal is broken — yield only if cross traffic is present','Flash your headlights and proceed carefully'],exp:'A flashing red light must be treated exactly like a stop sign. You must come to a complete stop at the marked stop line (or before the crosswalk, or before the intersection). Then yield to all cross-traffic and pedestrians, and proceed when it is safe to do so. A flashing yellow light means slow down and proceed with caution, but you do not need to stop.'},
  zh:{q:'加州驾驶员在闪烁红灯前必须怎么做？',opts:['减速并谨慎通行','完全停车，让行所有横向交通和行人，然后在安全时通行——将其视为停车标志','信号灯坏了——只有在有横向交通时才让行','闪大灯并谨慎通行'],exp:'闪烁红灯必须完全像停车标志一样对待。你必须在标记的停车线（或人行横道前，或路口前）完全停车。然后让行所有横向交通和行人，在安全时继续通行。闪烁黄灯意味着减速并谨慎通行，但不需要停车。'},
  zhTW:{q:'加州駕駛員在閃爍紅燈前必須怎麼做？',opts:['減速並謹慎通行','完全停車，讓行所有橫向交通和行人，然後在安全時通行——將其視為停車標誌','信號燈壞了——只有在有橫向交通時才讓行','閃大燈並謹慎通行'],exp:'閃爍紅燈必須完全像停車標誌一樣對待。你必須在標記的停車線（或人行橫道前，或路口前）完全停車。然後讓行所有橫向交通和行人，在安全時繼續通行。閃爍黃燈意味著減速並謹慎通行，但不需要停車。'},
  es:{q:'¿Qué deben hacer los conductores de California ante un semáforo rojo intermitente?',opts:['Reducir la velocidad y continuar con precaución','Detenerse completamente, ceder el paso a todo el tráfico cruzado y peatones, luego continuar cuando sea seguro — trátelo como una señal de alto','La señal está descompuesta — ceda el paso solo si hay tráfico cruzado','Destelle los faros y continúe con cuidado'],exp:'Un semáforo rojo intermitente debe tratarse exactamente como una señal de alto. Debe detenerse completamente en la línea de alto marcada (o antes del cruce, o antes de la intersección). Luego ceda el paso a todo el tráfico cruzado y los peatones, y continúe cuando sea seguro. Un semáforo amarillo intermitente significa reducir la velocidad y continuar con precaución, pero no necesita detenerse.'},
  ans:1
},
{
  id:494, cat:'speed',
  en:{q:'What is the maximum speed limit on any California highway or freeway?',opts:['65 mph','70 mph','75 mph','60 mph'],exp:'The maximum speed limit on any California highway or freeway is 70 mph, and this only applies on specific freeways where the 70 mph limit is posted. The standard maximum is 65 mph on most freeways. On two-lane undivided highways, the maximum is 55 mph. Some roads post lower limits. Trucks, buses, and vehicles towing trailers are always limited to 55 mph on freeways.'},
  zh:{q:'加州任何公路或高速公路的最高速度限制是多少？',opts:['65英里/小时','70英里/小时','75英里/小时','60英里/小时'],exp:'加州任何公路或高速公路的最高速度限制为70英里/小时，这只适用于标有70英里/小时限制的特定高速公路。大多数高速公路的标准最高限速为65英里/小时。在两车道未分隔公路上，最高限速为55英里/小时。部分道路设有更低的限速。卡车、公共汽车和拖拽拖车的车辆在高速公路上始终限速55英里/小时。'},
  zhTW:{q:'加州任何公路或高速公路的最高速度限制是多少？',opts:['65英里/小時','70英里/小時','75英里/小時','60英里/小時'],exp:'加州任何公路或高速公路的最高速度限制為70英里/小時，這只適用於標有70英里/小時限制的特定高速公路。大多數高速公路的標準最高限速為65英里/小時。在兩車道未分隔公路上，最高限速為55英里/小時。部分道路設有更低的限速。卡車、公共汽車和拖拽拖車的車輛在高速公路上始終限速55英里/小時。'},
  es:{q:'¿Cuál es el límite de velocidad máximo en cualquier carretera o autopista de California?',opts:['65 mph','70 mph','75 mph','60 mph'],exp:'El límite de velocidad máximo en cualquier carretera o autopista de California es 70 mph, y esto solo aplica en autopistas específicas donde se publica el límite de 70 mph. El máximo estándar es 65 mph en la mayoría de las autopistas. En carreteras de dos carriles no divididas, el máximo es 55 mph. Camiones, autobuses y vehículos con remolques siempre están limitados a 55 mph en autopistas.'},
  ans:1
},
{
  id:495, cat:'parking',
  en:{q:'It is nighttime. You must park on a road with no street lights. What light(s) must you leave on?',opts:['No lights are required if you set the parking brake','Parking lights (side marker lights) or hazard lights','High-beam headlights to maximize visibility','Low-beam headlights only'],exp:'When parking on a road at night without adequate lighting, California law requires you to leave your parking lights (also called side marker lights or clearance lights) on. These are the amber/red lights visible from the front and rear sides of the vehicle. Hazard lights may also be used. Leaving headlights on will drain the battery, so parking lights are the appropriate choice.'},
  zh:{q:'夜间，你必须将车停在没有路灯的道路上。你必须保留哪些灯？',opts:['如果你拉了手刹则不需要灯','停车灯（侧标志灯）或危险警告灯','远光灯以最大化可见度','只有近光灯'],exp:'在夜间将车停在没有充足照明的道路上时，加州法律要求你保持停车灯（也称为侧标志灯或示廓灯）亮着。这些是车辆前后侧可见的琥珀色/红色灯。也可以使用危险警告灯。保持大灯亮着会耗尽电池，所以停车灯是合适的选择。'},
  zhTW:{q:'夜間，你必須將車停在沒有路燈的道路上。你必須保留哪些燈？',opts:['如果你拉了手剎則不需要燈','停車燈（側標誌燈）或危險警告燈','遠光燈以最大化可見度','只有近光燈'],exp:'在夜間將車停在沒有充足照明的道路上時，加州法律要求你保持停車燈（也稱為側標誌燈或示廓燈）亮著。這些是車輛前後側可見的琥珀色/紅色燈。也可以使用危險警告燈。保持大燈亮著會耗盡電池，所以停車燈是合適的選擇。'},
  es:{q:'Es de noche. Debe estacionar en una carretera sin luces de calle. ¿Qué luz(es) debe dejar encendidas?',opts:['No se requieren luces si aplica el freno de estacionamiento','Luces de estacionamiento (luces laterales marcadoras) o luces de emergencia','Faros de luz alta para maximizar la visibilidad','Solo faros de luz baja'],exp:'Al estacionar en una carretera de noche sin iluminación adecuada, la ley de California requiere dejar encendidas las luces de estacionamiento (también llamadas luces laterales o luces de posición). Estas son las luces ámbar/rojas visibles desde los lados delanteros y traseros del vehículo. También se pueden usar las luces de emergencia. Dejar los faros encendidos agotará la batería, por lo que las luces de estacionamiento son la opción apropiada.'},
  ans:1
},
{
  id:496, cat:'highway',
  en:{q:'What is the purpose of a rumble strip on the edge of a highway?',opts:['To mark the boundary between the travel lane and a bicycle lane','To alert drowsy or distracted drivers that they are drifting off the road by creating a vibration and loud noise when tires cross them','To slow down vehicles entering a rest area','To mark the boundary of a school zone'],exp:'Rumble strips are rows of grooves or raised pavement markers on the edge or center of a road. When tires roll over them, they produce a loud rumbling noise and vibration that alerts the driver that they are drifting out of their lane or off the road. They are particularly effective for drowsy driving prevention and have been shown to significantly reduce run-off-road crashes on highways.'},
  zh:{q:'公路边缘隆声带的目的是什么？',opts:['标记行车道与自行车道之间的边界','当轮胎经过时产生震动和噪音，警告疲倦或分心的驾驶员他们正在偏离道路','减慢进入休息区的车辆','标记学区的边界'],exp:'隆声带是道路边缘或中央的一排凹槽或凸起的路面标记。当轮胎滚过它们时，会产生嗡嗡的噪音和振动，提醒驾驶员他们正在偏出车道或道路。它们对于防止疲劳驾驶特别有效，已被证明能显著减少高速公路上的跑偏事故。'},
  zhTW:{q:'公路邊緣隆聲帶的目的是什麼？',opts:['標記行車道與自行車道之間的邊界','當輪胎經過時產生震動和噪音，警告疲倦或分心的駕駛員他們正在偏離道路','減慢進入休息區的車輛','標記學區的邊界'],exp:'隆聲帶是道路邊緣或中央的一排凹槽或凸起的路面標記。當輪胎滾過它們時，會產生嗡嗡的噪音和振動，提醒駕駛員他們正在偏出車道或道路。它們對於防止疲勞駕駛特別有效，已被證明能顯著減少高速公路上的跑偏事故。'},
  es:{q:'¿Cuál es el propósito de una franja sonora en el borde de una autopista?',opts:['Marcar el límite entre el carril de tráfico y un carril para bicicletas','Alertar a los conductores somnolientos o distraídos de que se están desviando de la carretera creando una vibración y ruido fuerte cuando los neumáticos los cruzan','Reducir la velocidad de los vehículos que entran a un área de descanso','Marcar el límite de una zona escolar'],exp:'Las franjas sonoras son filas de ranuras o marcadores de pavimento elevados en el borde o centro de una carretera. Cuando los neumáticos ruedan sobre ellos, producen un ruido de vibración y sacudida que alerta al conductor de que se está desviando de su carril o de la carretera. Son particularmente efectivos para la prevención de la conducción somnolienta y han demostrado reducir significativamente los accidentes de salida de carretera.'},
  ans:1
},
{
  id:497, cat:'dui',
  en:{q:'How can alcohol affect your driving ability?',opts:['It improves confidence, which improves driving performance','It impairs judgment, slows reaction time, reduces coordination, and causes tunnel vision — all of which increase crash risk','It only affects driving ability if consumed within the last 30 minutes','It primarily affects driving in cold weather'],exp:'Alcohol impairs driving ability in multiple ways: it reduces reaction time, impairs judgment and decision-making, decreases coordination and muscle control, narrows field of vision (tunnel vision), reduces ability to track moving objects, and increases risk-taking behavior. These effects occur even at low BAC levels — below the 0.08% legal limit — making any amount of alcohol before driving potentially dangerous.'},
  zh:{q:'酒精如何影响你的驾驶能力？',opts:['它提高了自信心，从而改善了驾驶表现','它损害判断力、减慢反应时间、降低协调能力，并导致管状视野——所有这些都会增加碰撞风险','只有在最近30分钟内饮酒才会影响驾驶能力','它主要在寒冷天气中影响驾驶'],exp:'酒精以多种方式损害驾驶能力：减慢反应时间、损害判断力和决策能力、降低协调性和肌肉控制、缩小视野（管状视野）、降低跟踪移动物体的能力，以及增加冒险行为。即使在低BAC水平下——低于0.08%的法定限制——这些影响也会发生，使得驾驶前任何量的酒精都可能危险。'},
  zhTW:{q:'酒精如何影響你的駕駛能力？',opts:['它提高了自信心，從而改善了駕駛表現','它損害判斷力、減慢反應時間、降低協調能力，並導致管狀視野——所有這些都會增加碰撞風險','只有在最近30分鐘內飲酒才會影響駕駛能力','它主要在寒冷天氣中影響駕駛'],exp:'酒精以多種方式損害駕駛能力：減慢反應時間、損害判斷力和決策能力、降低協調性和肌肉控制、縮小視野（管狀視野）、降低跟蹤移動物體的能力，以及增加冒險行為。即使在低BAC水平下——低於0.08%的法定限制——這些影響也會發生，使得駕駛前任何量的酒精都可能危險。'},
  es:{q:'¿Cómo puede el alcohol afectar su capacidad de conducción?',opts:['Mejora la confianza, lo que mejora el rendimiento de conducción','Deteriora el juicio, ralentiza el tiempo de reacción, reduce la coordinación y causa visión de túnel — todo lo cual aumenta el riesgo de colisión','Solo afecta la conducción si se consume en los últimos 30 minutos','Principalmente afecta la conducción en clima frío'],exp:'El alcohol deteriora la capacidad de conducción de múltiples maneras: reduce el tiempo de reacción, deteriora el juicio y la toma de decisiones, disminuye la coordinación y el control muscular, estrecha el campo de visión (visión de túnel), reduce la capacidad de seguir objetos en movimiento y aumenta el comportamiento de toma de riesgos. Estos efectos ocurren incluso a niveles bajos de BAC — por debajo del límite legal de 0.08%.'},
  ans:1
},
{
  id:498, cat:'safety',
  en:{q:'What should you do when driving through a flooded road where you cannot see the bottom?',opts:['Drive through slowly with your windows down in case you need to exit','Turn around — never drive through flood water of unknown depth','Drive through at normal speed to cross quickly before water rises higher','Honk your horn and wait for emergency services'],exp:'"Turn Around, Don\'t Drown" is a key safety message. Just 6 inches of moving water can knock a person off their feet, and 12 inches can sweep a small vehicle away. 2 feet of water can float most vehicles, including SUVs and pickup trucks. Never drive into flooded roads — you cannot judge depth or current strength from inside a vehicle. If your car stalls in flood water, abandon it immediately and move to higher ground.'},
  zh:{q:'当穿越看不到底部的积水道路时，应该怎么做？',opts:['慢慢开过，窗户打开以防需要逃出','掉头——永远不要在未知深度的洪水中行驶','以正常速度穿越，在水位进一步上涨前快速通过','鸣笛等待紧急服务'],exp:'"掉头，不要淹没"是一个关键安全信息。仅仅6英寸的流动水就能将人打倒，12英寸可以将小型车辆冲走。2英尺的水可以使大多数车辆（包括SUV和皮卡）漂浮。永远不要驾车进入积水道路——你无法从车内判断深度或水流强度。如果你的车在洪水中熄火，立即弃车并转移到高处。'},
  zhTW:{q:'當穿越看不到底部的積水道路時，應該怎麼做？',opts:['慢慢開過，窗戶打開以防需要逃出','掉頭——永遠不要在未知深度的洪水中行駛','以正常速度穿越，在水位進一步上漲前快速通過','鳴笛等待緊急服務'],exp:'"掉頭，不要淹沒"是一個關鍵安全信息。僅僅6英寸的流動水就能將人打倒，12英寸可以將小型車輛衝走。2英尺的水可以使大多數車輛（包括SUV和皮卡）漂浮。永遠不要駕車進入積水道路——你無法從車內判斷深度或水流強度。如果你的車在洪水中熄火，立即棄車並轉移到高處。'},
  es:{q:'¿Qué debe hacer al conducir por una carretera inundada donde no puede ver el fondo?',opts:['Conduzca lentamente con las ventanas abiertas en caso de que necesite salir','Dé la vuelta — nunca conduzca a través de agua de inundación de profundidad desconocida','Conduzca a velocidad normal para cruzar rápidamente antes de que el agua suba más','Toque el claxon y espere los servicios de emergencia'],exp:'"Dé la Vuelta, No Se Ahogue" es un mensaje clave de seguridad. Solo 6 pulgadas de agua en movimiento pueden derribar a una persona, y 12 pulgadas pueden arrastrar un vehículo pequeño. 2 pies de agua pueden hacer flotar la mayoría de los vehículos. Nunca conduzca hacia carreteras inundadas — no puede juzgar la profundidad o la fuerza de la corriente desde dentro de un vehículo.'},
  ans:1
},
{
  id:499, cat:'signs',
  en:{q:'What does a green highway sign typically indicate?',opts:['Warning — hazard ahead','Directional and distance information for destinations and interchanges','Services available at the next exit','Construction zone ahead'],exp:'Green highway signs provide directional and distance information, including route numbers, city names, distances to destinations, and interchange information. They guide drivers to their destinations. Green is used because it is the most neutral color associated with permitted actions and directions, as opposed to red (stop/prohibitions), yellow (warnings), or orange (construction).'},
  zh:{q:'绿色高速公路标志通常表示什么？',opts:['警告——前方有危险','目的地和交叉口的方向和距离信息','下一个出口有服务','前方有施工区'],exp:'绿色高速公路标志提供方向和距离信息，包括路线号码、城市名称、到目的地的距离和交叉口信息。它们引导驾驶员到达目的地。使用绿色是因为它是与允许行动和方向相关联的最中性颜色，与红色（停止/禁止）、黄色（警告）或橙色（施工）相对。'},
  zhTW:{q:'綠色高速公路標誌通常表示什麼？',opts:['警告——前方有危險','目的地和交叉口的方向和距離信息','下一個出口有服務','前方有施工區'],exp:'綠色高速公路標誌提供方向和距離信息，包括路線號碼、城市名稱、到目的地的距離和交叉口信息。它們引導駕駛員到達目的地。使用綠色是因為它是與允許行動和方向相關聯的最中性顏色，與紅色（停止/禁止）、黃色（警告）或橙色（施工）相對。'},
  es:{q:'¿Qué indica típicamente un letrero verde de autopista?',opts:['Advertencia — peligro adelante','Información de dirección y distancia para destinos e intercambios','Servicios disponibles en la próxima salida','Zona de construcción adelante'],exp:'Los letreros verdes de autopista proporcionan información de dirección y distancia, incluyendo números de ruta, nombres de ciudades, distancias a destinos e información de intercambios. Guían a los conductores a sus destinos. El verde se usa porque es el color más neutral asociado con acciones permitidas y direcciones, en contraposición al rojo (alto/prohibiciones), amarillo (advertencias) o naranja (construcción).'},
  ans:1
},
{
  id:500, cat:'safety',
  en:{q:'What is the single most effective safety device in a vehicle for preventing death or serious injury in a crash?',opts:['Airbags','Anti-lock brakes (ABS)','The seat belt','Electronic stability control (ESC)'],exp:'The seat belt is the single most effective vehicle safety device. The National Highway Traffic Safety Administration (NHTSA) estimates that seat belts save over 15,000 lives per year in the U.S. Seat belts prevent occupants from being ejected during a crash and distribute crash forces across the strongest parts of the body. Airbags are a supplement to seat belts, not a replacement — an airbag deploying without a seat belt can itself cause serious injury. Always buckle up every ride.'},
  zh:{q:'车辆中防止碰撞死亡或重伤最有效的单一安全装置是什么？',opts:['安全气囊','防抱死制动系统（ABS）','安全带','电子稳定控制系统（ESC）'],exp:'安全带是单一最有效的车辆安全装置。美国国家公路交通安全管理局（NHTSA）估计，安全带每年在美国挽救超过15,000条生命。安全带防止乘客在碰撞时被甩出，并将碰撞力分散到身体最强部位。安全气囊是安全带的补充，而不是替代——没有安全带的情况下安全气囊展开本身可能造成严重伤害。每次行驶都系好安全带。'},
  zhTW:{q:'車輛中防止碰撞死亡或重傷最有效的單一安全裝置是什麼？',opts:['安全氣囊','防抱死制動系統（ABS）','安全帶','電子穩定控制系統（ESC）'],exp:'安全帶是單一最有效的車輛安全裝置。美國國家公路交通安全管理局（NHTSA）估計，安全帶每年在美國挽救超過15,000條生命。安全帶防止乘客在碰撞時被甩出，並將碰撞力分散到身體最強部位。安全氣囊是安全帶的補充，而不是替代——沒有安全帶的情況下安全氣囊展開本身可能造成嚴重傷害。每次行駛都系好安全帶。'},
  es:{q:'¿Cuál es el único dispositivo de seguridad más efectivo en un vehículo para prevenir la muerte o lesiones graves en un accidente?',opts:['Bolsas de aire','Frenos antibloqueo (ABS)','El cinturón de seguridad','Control electrónico de estabilidad (ESC)'],exp:'El cinturón de seguridad es el dispositivo de seguridad vehicular más efectivo. La NHTSA estima que los cinturones de seguridad salvan más de 15,000 vidas por año en EE.UU. Los cinturones previenen que los ocupantes sean expulsados durante un accidente y distribuyen las fuerzas del impacto en las partes más fuertes del cuerpo. Las bolsas de aire complementan los cinturones — una bolsa de aire que se despliega sin cinturón puede causar lesiones graves. Siempre abróchese en cada viaje.'},
  ans:2
},

] // end — 500 questions complete
