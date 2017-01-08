const parse_ms_string = function(msstring) {

    if (!msstring) {
        return 0;
    }

    switch (msstring.length) {
        case 0:  return 0; break;
        case 1:  return parseInt(msstring, 10) * 100; break;
        case 2:  return parseInt(msstring, 10) * 10; break;
        default: return parseInt(msstring.substr(0, 3), 10); break;
    }
};

const parse = function(timestring) {
    timestring = timestring.trim();

    const pattern_seconds =                 /^(\d+)(?:\.(\d+))?$/;
    const pattern_minutes =         /^(\d+):(\d\d?)(?:\.(\d+))?$/;
    const pattern_hours   = /^(\d+):(\d\d?):(\d\d?)(?:\.(\d+))?$/;

    var matches;
    var ms = sec = min = hr = 0;

    if (matches = timestring.match(pattern_seconds)) {
        ms  = parse_ms_string(matches[2]);
        sec = matches[1] ? parseInt(matches[1], 10) : 0;
    } else if (matches = timestring.match(pattern_minutes)) {
        ms  = parse_ms_string(matches[3]);
        sec = matches[2] ? parseInt(matches[2], 10) : 0;
        min = matches[1] ? parseInt(matches[1], 10) : 0;
    } else if (matches = timestring.match(pattern_hours)) {
        ms  = parse_ms_string(matches[4]);
        sec = matches[3] ? parseInt(matches[3], 10) : 0;
        min = matches[2] ? parseInt(matches[2], 10) : 0;
        hr  = matches[1] ? parseInt(matches[1], 10) : 0;
    } else {
        return null;
    }

    return ((hr * 60 + min) * 60 + sec) * 1000 + ms;
}

module.exports = {
    parse: parse
};
