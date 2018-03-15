(function (translator) {
	translator.translations["es"] = {
		// javascript alerts or messages
		"testneteditionactivated": "Testnet se activa",
		"paperlabelbitcoinaddress": "Dirección $PAC:",
		"paperlabelprivatekey": "Clave privada:",
		"paperlabelencryptedkey": "Clave privada cifrada (contraseña necesaria)",
		"bulkgeneratingaddresses": "Generación de direcciones... ",
		"brainalertpassphrasetooshort": "La contraseña introducida es demasiado corta.\n\n",
		"brainalertpassphrasewarning": "Aviso: Es importante escoger una contraseña fuerte para evitar ataques de fuerza bruta a fin de adivinarla y robar tus $PAC.",
		"brainalertpassphrasedoesnotmatch": "Las contraseñas no coinciden.",
		"detailalertnotvalidprivatekey": "El texto que has introducido no es una clave privada válida",
		"detailconfirmsha256": "El texto que has introducido no es una clave privada válida\n\n¿Quieres usar ese texto como si fuera una contraseña y generar una clave privada usando un hash SHA256 de tal contraseña?\n\nAviso: Es importante escoger una contraseña fuerte para evitar ataques de fuerza bruta a fin de adivinarla y robar tus $PAC.",
		"bip38alertincorrectpassphrase": "Incorrect passphrase for this encrypted private key.", //TODO: please translate
		"bip38alertpassphraserequired": "Passphrase required for BIP38 key", //TODO: please translate
		"vanityinvalidinputcouldnotcombinekeys": "Entrada no válida. No se puede combinar llaves.",
		"vanityalertinvalidinputpublickeysmatch": "Entrada no válida. La clave pública de ambos coincidan entradas. Debe introducir dos claves diferentes.",
		"vanityalertinvalidinputcannotmultiple": "Entrada no válida. No se puede multiplicar dos claves públicas. Seleccione 'Añadir' para agregar dos claves públicas para obtener una dirección $PAC.",
		"vanityprivatekeyonlyavailable": "Sólo está disponible cuando se combinan dos claves privadas",
		"vanityalertinvalidinputprivatekeysmatch": "Entrada no válida. La clave privada de ambos coincidan entradas. Debe introducir dos claves diferentes.",

		// header and menu html
		"tagline": "Generador de carteras $PAC de código abierto en lado de cliente con Javascript",
		"generatelabelbitcoinaddress": "Generando dirección $PAC...",
		"generatelabelmovemouse": "Mueve un poco el ratón para crear entropía...",
		"generatelabelkeypress": "OR type some random characters into this textbox", //TODO: please translate
		"singlewallet": "Una sola cartera",
		"paperwallet": "Cartera en papel",
		"bulkwallet": "Direcciones en masa",
		"brainwallet": "Cartera mental",
		"vanitywallet": "Cartera personalizada",
		"splitwallet": "Split Wallet", //TODO: please translate
		"detailwallet": "Detalles de la cartera",

		// footer html
		"footerlabeldonations": "Donaciones:",
		"footerlabeltranslatedby": "Traducción: <b>12345</b>Vypv2QSmuRXcciT5oEB27mPbWGeva",
		"footerlabelpgp": "PGP",
		"footerlabelversion": "Histórico de versiones",
		"footerlabelgithub": "Repositorio GitHub",
		"footerlabelgithubzip": "zip",
		"footerlabelsig": "sig",
		"footerlabelcopyright1": "Copyright bitaddress.org.",
		"footerlabelcopyright2": "Copyright del código JavaScript: en el fuente.",
		"footerlabelnowarranty": "Sin garantía.",

		// status html
		"statuslabelcryptogood": "&#10004; Good!", //TODO: please translate
		"statuslabelcryptogood1": "Your browser can generate cryptographically random keys using window.crypto.getRandomValues", //TODO: please translate
		"statusokcryptogood": "OK", //TODO: please translate
		"statuslabelcryptobad": "&times; Oh no!", //TODO: please translate
		"statuslabelcryptobad1": "Your browser does NOT support window.crypto.getRandomValues. You should use a more modern browser with this generator to increase the security of the keys generated.",
		"statusokcryptobad": "OK", //TODO: please translate
		"statuslabelunittestsgood": "&#10004; Good!", //TODO: please translate
		"statuslabelunittestsgood1": "All synchronous unit tests passed.", //TODO: please translate
		"statusokunittestsgood": "OK", //TODO: please translate
		"statuslabelunittestsbad": "&times; Oh no!", //TODO: please translate
		"statuslabelunittestsbad1": "Some synchronous unit tests DID NOT pass. You should find another browser to use with this generator.", //TODO: please translate
		"statusokunittestsbad": "OK", //TODO: please translate
		"statuslabelprotocolgood": "&#10004; Good!", //TODO: please translate
		"statuslabelprotocolgood1": "You are running this generator from your local computer. <br />Tip: Double check you are offline by trying ", //TODO: please translate
		"statusokprotocolgood": "OK", //TODO: please translate
		"statuslabelprotocolbad": "&#9888; Think twice!", //TODO: please translate
		"statuslabelprotocolbad1": "You appear to be running this generator online from a live website. For valuable wallets it is recommended to", //TODO: please translate
		"statuslabelprotocolbad2": "download", //TODO: please translate
		"statuslabelprotocolbad3": "the zip file from GitHub and run this generator offline as a local html file.", //TODO: please translate
		"statusokprotocolbad": "OK", //TODO: please translate
		"statuslabelkeypool1": "This is a log of all the $PAC Addresses and Private Keys you generated during your current session. Reloading the page will create a new session.", //TODO: please translate
		"statuskeypoolrefresh": "Refresh", //TODO: please translate
		"statusokkeypool": "OK", //TODO: please translate

		// single wallet html
		"newaddress": "Generar dirección",
		"singleprint": "Imprimir",
		"singlelabelbitcoinaddress": "Dirección $PAC",
		"singlelabelprivatekey": "Clave privada (formato para importar):",
		"singletip1": "<b>Una cartera de $PAC</b> es tan simple como un emparejamiento simple de una dirección $PAC con su correspondiente clave privada. Tal cartera ha sido generada para usted en su navegador web y se muestra arriba.", //TODO: please translate
		"singletip2": "<b>Para proteger esta cartera</b>debe imprimir o guardar la dirección $PAC y la clave privada.  Es importante hacer una copia de seguridad de la clave privada y almacenarla en un lugar seguro.  Este sitio no tiene conocimiento de su clave privada. Si abandona / actualiza el sitio o presiona el botón Generar nueva dirección, se generará una nueva clave privada y no se podrá recuperar la clave privada que se mostró anteriormente. Su clave privada de $ Pac debe mantenerse en secreto. Quien comparte la clave privada tiene acceso para gastar todos los $PAC asociados con esa dirección.  Si imprime su cartera, guárdela en una bolsa con cierre hermético para mantenerla a salvo del agua. Trate una cartera de papel como efectivo.", //TODO: please translate
		"singletip3": "<b>Agregue fondos </ b> a este monedero instruyendo a otros a enviar $PAC a su dirección de $PAC.", //TODO: please translate
		"singletip4": "<b>Verifica tu balance</b> introduciendo tu direccion de $PAC en http://usa.pacblockexplorer.com:3002/ <br><br><b>Uso: </b>", //TODO: please translate
		"singletip5": "También puede gastar sus fondos descargando uno de los populares clientes de $PAC p2p e importando su clave privada al monedero de cliente p2p. Tenga en cuenta que cuando importe su clave individual a un cliente bitcoin p2p y gaste fondos, su clave se incluirá con otras claves privadas en la cartera del cliente p2p. Cuando realiza una transacción, su cambio se enviará a otra dirección de $PAC dentro del monedero de cliente p2p. A continuación, debe hacer una copia de seguridad del monedero del cliente p2p y mantenerlo a salvo ya que sus $PAC restantes se almacenarán allí. Satoshi aconsejó que nunca se debe eliminar una cartera.", //TODO: please translate
		"singleshare": "PÚBLICA",
		"singlesecret": "SECRETA",

		// paper wallet html
		"paperlabelhideart": "Ocultar diseño",
		"paperlabeladdressesperpage": "Direcciones por página:",
		"paperlabeladdressestogenerate": "Direcciones en total:",
		"papergenerate": "Generar",
		"paperprint": "Imprimir",
		"paperlabelBIPpassphrase": "Passphrase:", //TODO: please translate
		"paperlabelencrypt": "BIP38 Encrypt?", //TODO: please translate
		"pwlabelq1" : "Que es un 'Paper Wallet'",
		//"pwa1" : "Respuesta 1",
		"pwlabelq2" : "Como usar su 'Paper Wallet'",
		//"pwa2": "Respuesta 2",

		// bulk wallet html
		"bulklabelstartindex": "Empezar en:",
		"bulklabelrowstogenerate": "Filas a generar:",
		"bulklabelcompressed": "Compressed addresses?", //TODO: please translate
		"bulkgenerate": "Generar",
		"bulkprint": "Imprimir",
		"bulklabelcsv": "Valores separados por coma:",
		"bulklabelformat": "Índice,Dirección,Clave privada (formato para importar)",
		"bulklabelq1": "¿Por qué debo usar \"Direcciones en masa\" para aceptar $PACs en mi web?",
		"bulka1": "La forma tradicional de aceptar $PAC en tu web requiere tener instalado el cliente oficial de $PAC (\"paccoind\"). Sin embargo muchos servicios de hosting no permiten instalar dicho cliente. Además, ejecutar el cliente en tu servidor supone que las claves privadas están también en el servidor y podrían ser comprometidas en caso de intrusión. Al usar este mecanismo, puedes subir al servidor sólo las dirección de $PAC y no las claves privadas. De esta forma no te tienes que preocupar de que alguien robe la cartera si se cuelan en el servidor.",
		"bulklabelq2": "¿Cómo uso \"Direcciones en masa\" para aceptar $PAC en mi web?",
		"bulklabela2li1": "Usa el tab \"Direcciones en masa\" para generar por anticipado muchas direcciones (más de 10000). Copia y pega la lista de valores separados por comas (CSV) a un archivo de texto seguro (cifrado) en tu ordenador. Guarda una copia de seguridad en algún lugar seguro.",
		"bulklabela2li2": "Importa las direcciones en la base de datos de tu servidor. No subas la cartera ni las claves públicas, o de lo contrario te lo pueden robar. Sube sólo las direcciones, ya que es lo que se va a mostrar a los clientes.",
		"bulklabela2li3": "Ofrece una alternativa en el carro de la compra de tu web para que los clientes paguen con $PAC. Cuando el cliente elija pagar con $PAC, les muestras una de las direcciones de la base de datos como su \"dirección de pago\" y guardas esto junto con el pedido.",
		"bulklabela2li4": "Para comprobar a mano si has recibido un pago, puedes usar Block Explorer: reemplaza DIRECCION a continuación por la dirección que estés comprobando. La transacción puede tardar entre 10 minutos y una hora en ser confirmada. <br />http://usa.pacblockexplorer.com:3002/DIRECCION<br /><br />Puedes ver las transacciones sin confirmar en: http://usa.pacblockexplorer.com:3002/ <br />Las transacciones sin confirmar suelen aparecer ahí en unos 30 segundos.",
		"bulklabela2li5": "Las $PAC que recibas se almacenarán de forma segura en la cadena de bloques. Usa la cartera original que generaste en el paso 1 para usarlas.",

		// brain wallet html
		"brainlabelenterpassphrase": "Contraseña:",
		"brainlabelshow": "Mostrar",
		"brainprint": "Imprimir",
		"brainlabelconfirm": "Confirmar contraseña:",
		"brainview": "Ver",
		"brainalgorithm": "Algoritmo: SHA256(contraseña)",
		"brainlabelbitcoinaddress": "Dirección $PAC:",
		"brainlabelprivatekey": "Clave privada (formato para importar):",

		// vanity wallet html
		"vanitylabelstep1": "Paso 1 - Genera tu par de claves",
		"vanitynewkeypair": "Generar",
		"vanitylabelstep1publickey": "Clave pública:",
		"vanitylabelstep1pubnotes": "Copia y pega la línea de arriba en el campo \"Your-Part-Public-Key\" de la web de Vanity Pool.",
		"vanitylabelstep1privatekey": "Clave privada:",
		"vanitylabelstep1privnotes": "Copia y pega la clave privada de arriba en un archivo de texto. Es mejor que lo almacenes en un volumen cifrado. Lo necesitarás para recuperar la clave privada una vez Vanity Pool haya encontrado tu prefijo.",
		"vanitylabelstep2calculateyourvanitywallet": "Paso 2 - Calcula tu cartera personalizada",
		"vanitylabelenteryourpart": "Introduce la clave privada generada en el paso 1, y que has guardado:",
		"vanitylabelenteryourpoolpart": "Introduce la clave privada obtenida de la Vanity Pool:",
		"vanitylabelnote1": "[NOTA: esta casilla de entrada puede aceptar una clave pública o clave privada]",
		"vanitylabelnote2": "[NOTA: esta casilla de entrada puede aceptar una clave pública o clave privada]",
		"vanitylabelradioadd": "Añadir",
		"vanitylabelradiomultiply": "Multiplicar",
		"vanitycalc": "Calcular cartera personalizada",
		"vanitylabelbitcoinaddress": "Dirección $PAC personalizada:",
		"vanitylabelnotesbitcoinaddress": "Esta es tu nueva dirección, que debería tener el prefijo deseado.",
		"vanitylabelpublickeyhex": "Clave pública personalizada (HEX):",
		"vanitylabelnotespublickeyhex": "Lo anterior es la clave pública en formato hexadecimal.",
		"vanitylabelprivatekey": "Clave privada personalizada (formato para importar):",
		"vanitylabelnotesprivatekey": "Esto es la clave privada para introducir en tu cartera.",

		// detail wallet html
		"detaillabelenterprivatekey": "Introduce la clave privada",
		"detailkeyformats": "Key Formats: WIF, WIFC, HEX, B64, B6, MINI, BIP38",
		"detailview": "Ver detalles",
		"detailprint": "Imprimir",
		"detaillabelnote1": "Tu clave privada es un número secreto, único, que sólo tú conoces. Se puede expresar en varios formatos. Aquí abajo mostramos la dirección y la clave pública que se corresponden con tu clave privada, así como la clave privada en los formatos más conocidos (para importar, hex, base64 y mini).",
		"detaillabelnote2": "$PAC v0.6+ almacena las claves públicas comprimidas. El cliente también soporta importar/exportar claves privadas usando importprivkey/dumpprivkey. El formato de las claves privadas exportadas depende de si la dirección se generó en una cartera antigua o nueva.",
		"detaillabelbitcoinaddress": "Dirección $PAC:",
		"detaillabelbitcoinaddresscomp": "Dirección $PAC (comprimida):",
		"detaillabelpublickey": "Clave pública (130 caracteres [0-9A-F]):",
		"detaillabelpublickeycomp": "Clave pública (comprimida, 66 caracteres [0-9A-F]):",
		"detaillabelprivwif": "Clave privada para importar (51 caracteres en base58, empieza con un",
		"detaillabelprivwifcomp": "Clave privada para importar (comprimida, 52 caracteres en base58, empieza con",
		"detailcompwifprefix": "'K' o 'L'",
		"detaillabelprivhex": "Clave privada en formato hexadecimal (64 caracteres [0-9A-F]):",
		"detaillabelprivb64": "Clave privada en base64 (44 caracteres):",
		"detaillabelprivmini": "Clave privada en formato mini (22, 26 o 30 caracteres, empieza por 'S'):",
		"detaillabelpassphrase": "BIP38 Passphrase", //TODO: please translate
		"detailbip38decryptbutton": "Decrypt BIP38", //TODO: please translate
		"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
		"detaillabelq1": "¿Cómo hago una billetera usando dados? Qué es B6?", //TODO: please translate
		"detaila1": "Una parte importante de la creación de una billetera $ PAC es garantizar que los números aleatorios utilizados para crear la billetera sean verdaderamente aleatorios. La aleatoriedad física es mejor que la pseudoaleatoriedad generada por computadora. La forma más fácil de generar aleatoriedad física es con dados. Para crear una clave privada $ PAC, solo necesita un dado de seis caras que se tira 99 veces. Detener cada vez para registrar el valor del dado. Al registrar los valores, siga estas reglas: 1 = 1, 2 = 2, 3 = 3, 4 = 4, 5 = 5, 6 = 0. Al hacer esto, está grabando el gran número aleatorio, su clave privada, en formato B6 o base 6. Luego puede ingresar la clave privada de la base 6 de 99 caracteres en el campo de texto de arriba y hacer clic en Ver detalles. Luego verá la dirección $ PAC asociada con su clave privada. También debe tomar nota de su clave privada en formato WIF ya que es más ampliamente utilizada." //TODO: please translate
	};
})(ninja.translator);