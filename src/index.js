function concat(str, str2) {
	str && (str += ' ');
	return str + str2;
}

function toVal(mix) {
	var k, y, str='';
	if (mix) {
		if (typeof mix === 'object') {
			for (k in mix) {
				if (mix[k] && (y = toVal(!!mix.push ? mix[k] : k))) {
					str = concat(str, y);
				}
			}
		} else if (typeof mix !== 'boolean') {
			str = concat(str, mix);
		}
	}
	return str;
}

export default function () {
	var i=0, x, str='';
	while (i < arguments.length) {
		if (x = toVal(arguments[i++])) {
			str = concat(str, x);
		}
	}
	return str;
}
