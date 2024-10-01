const a0_0x311be8 = a0_0x25ce;
(function (_0x2144eb, _0x2a8805) {
  const _0x27ea60 = a0_0x25ce,
    _0x313513 = _0x2144eb();
  while (!![]) {
    try {
      const _0x52c144 =
        (parseInt(_0x27ea60(0x6e)) / 0x1) *
          (-parseInt(_0x27ea60(0x79)) / 0x2) +
        (-parseInt(_0x27ea60(0x92)) / 0x3) *
          (-parseInt(_0x27ea60(0x6b)) / 0x4) +
        (-parseInt(_0x27ea60(0x75)) / 0x5) *
          (-parseInt(_0x27ea60(0x70)) / 0x6) +
        -parseInt(_0x27ea60(0x7c)) / 0x7 +
        -parseInt(_0x27ea60(0x76)) / 0x8 +
        (parseInt(_0x27ea60(0x9c)) / 0x9) *
          (-parseInt(_0x27ea60(0x6f)) / 0xa) +
        parseInt(_0x27ea60(0x9e)) / 0xb;
      if (_0x52c144 === _0x2a8805) break;
      else _0x313513["push"](_0x313513["shift"]());
    } catch (_0x39e5de) {
      _0x313513["push"](_0x313513["shift"]());
    }
  }
})(a0_0x4f5e, 0xbe8c4);
const axios = require(a0_0x311be8(0x83)),
  { URL, URLSearchParams } = require(a0_0x311be8(0x93)),
  readline = require("readline"),
  { Buffer } = require(a0_0x311be8(0x87));
function timeConvert(_0x455802) {
  const _0x378106 = a0_0x311be8;
  let _0x4c553e = Math[_0x378106(0x7b)](_0x455802 / 0x3c),
    _0x2fdd33 = _0x455802 % 0x3c;
  return (
    _0x4c553e +
    _0x378106(0x8a) +
    _0x2fdd33 +
    _0x378106(0x8c)
  );
}
app[a0_0x311be8(0x69)](
  (_0x5bd068, _0x340b3b, _0xc6ec45) => {
    const _0x3af900 = a0_0x311be8;
    (_0x5bd068[_0x3af900(0x9a)][_0x3af900(0x77)] =
      _0x3af900(0x7e)),
      _0xc6ec45();
  }
);
const headers = {
  "User-Agent": req[a0_0x311be8(0x9a)][a0_0x311be8(0x77)],
  Referer: "https://api-gateway.platoboost.com/",
  Accept: a0_0x311be8(0x6d),
  "Accept-Language": a0_0x311be8(0x7d),
  "Accept-Encoding": a0_0x311be8(0x8f),
};
async function sendDiscordWebhook(_0x81a4a1, _0x12ff7d) {
  const _0x5b4d28 = a0_0x311be8,
    _0x262166 = {
      embeds: [
        {
          title: _0x5b4d28(0x97),
          description:
            "**Please\x20solve\x20the\x20Captcha**:\x20[Open](" +
            _0x12ff7d +
            ")",
          color: 0x57f287,
        },
      ],
    };
  try {
    const _0x11e1cf = await axios["post"](
      _0x81a4a1,
      _0x262166
    );
    console["log"](_0x5b4d28(0x74));
  } catch (_0x347458) {
    console[_0x5b4d28(0x9b)](_0x5b4d28(0x80), _0x347458);
  }
}
function sleep(_0x18d9a2) {
  return new Promise((_0x114a93) =>
    setTimeout(_0x114a93, _0x18d9a2)
  );
}
function a0_0x25ce(_0x1e1b81, _0x2eb19b) {
  const _0x4f5e76 = a0_0x4f5e();
  return (
    (a0_0x25ce = function (_0x25ce26, _0x512344) {
      _0x25ce26 = _0x25ce26 - 0x68;
      let _0x583ef0 = _0x4f5e76[_0x25ce26];
      return _0x583ef0;
    }),
    a0_0x25ce(_0x1e1b81, _0x2eb19b)
  );
}
async function getTurnstileResponse() {
  const _0xc643f = a0_0x311be8;
  return await sleep(0x3e8), _0xc643f(0x86);
}
async function delta(_0x2dbd34) {
  const _0x1347f5 = a0_0x311be8,
    _0x2fe372 = Date["now"]();
  try {
    const _0x11fc41 = new URL(_0x2dbd34),
      _0x3954a5 = new URLSearchParams(
        _0x11fc41[_0x1347f5(0x99)]
      ),
      _0x386ad9 = _0x3954a5[_0x1347f5(0x8e)]("id");
    if (!_0x386ad9) throw new Error(_0x1347f5(0x96));
    const _0x47907e = await axios[_0x1347f5(0x8e)](
        _0x1347f5(0x88) + _0x386ad9,
        { headers: headers }
      ),
      _0x46ca70 = _0x47907e["data"];
    if (_0x1347f5(0x72) in _0x46ca70) {
      const _0x13035f = timeConvert(
        _0x46ca70[_0x1347f5(0x9d)]
      );
      return (
        console["log"](
          _0x1347f5(0x71) +
            _0x13035f +
            _0x1347f5(0x68) +
            _0x46ca70[_0x1347f5(0x72)] +
            _0x1347f5(0x89)
        ),
        {
          status: _0x1347f5(0x94),
          key: _0x46ca70[_0x1347f5(0x72)],
          time_left: _0x13035f,
        }
      );
    }
    const _0x34685c = _0x46ca70["captcha"];
    let _0x60c6cc;
    if (_0x34685c) {
      console[_0x1347f5(0x91)](_0x1347f5(0x73));
      const _0x17acf9 = await getTurnstileResponse();
      _0x60c6cc = await axios[_0x1347f5(0x6c)](
        _0x1347f5(0x90) + _0x386ad9,
        { captcha: _0x17acf9, type: _0x1347f5(0x95) },
        { headers: headers }
      );
    } else
      _0x60c6cc = await axios[_0x1347f5(0x6c)](
        _0x1347f5(0x90) + _0x386ad9,
        { headers: headers }
      );
    if (_0x60c6cc["status"] !== 0xc8) {
      const _0x266def = "" + platoboost + _0x386ad9;
      await sendDiscordWebhook(_0x1347f5(0x78), _0x266def);
      throw new Error(_0x1347f5(0x6a));
    }
    const _0xe2d9bd = _0x60c6cc[_0x1347f5(0x8b)];
    await sleep(0x3e8);
    const _0x1138fb = decodeURIComponent(
        _0xe2d9bd[_0x1347f5(0x8d)]
      ),
      _0xf0b8e4 = new URL(_0x1138fb),
      _0x557590 = new URLSearchParams(
        _0xf0b8e4[_0x1347f5(0x99)]
      )[_0x1347f5(0x8e)]("r"),
      _0x540039 = Buffer["from"](
        _0x557590,
        _0x1347f5(0x84)
      )[_0x1347f5(0x85)](_0x1347f5(0x7f)),
      _0x2754c2 = new URLSearchParams(
        new URL(_0x540039)["search"]
      )[_0x1347f5(0x8e)]("tk");
    await sleep(0x1388),
      await axios[_0x1347f5(0x81)](
        _0x1347f5(0x90) + _0x386ad9 + "/" + _0x2754c2,
        { headers: headers }
      );
    const _0x492b23 = await axios[_0x1347f5(0x8e)](
        _0x1347f5(0x88) + _0x386ad9,
        { headers: headers }
      ),
      _0x5058ac = _0x492b23["data"];
    if (_0x1347f5(0x72) in _0x5058ac) {
      const _0x4a2f01 = timeConvert(
          _0x5058ac[_0x1347f5(0x9d)]
        ),
        _0x4f921b =
          (Date[_0x1347f5(0x7a)]() - _0x2fe372) / 0x3e8;
      return (
        console[_0x1347f5(0x91)](
          _0x1347f5(0x71) +
            _0x4a2f01 +
            "\x1b[0m\x20-\x20KEY:\x20\x1b[32m" +
            _0x5058ac[_0x1347f5(0x72)] +
            "\x1b[0m"
        ),
        {
          "before\x20url": _0x2dbd34,
          status: _0x1347f5(0x94),
          key: _0x5058ac[_0x1347f5(0x72)],
          "time\x20taken":
            _0x4f921b["toFixed"](0x2) + _0x1347f5(0x82),
        }
      );
    }
  } catch (_0x32ca6a) {
    console[_0x1347f5(0x9b)](
      "\x1b[31m\x20ERROR\x20\x1b[0m\x20Error:",
      _0x32ca6a
    );
    const _0x11329d =
      (Date[_0x1347f5(0x7a)]() - _0x2fe372) / 0x3e8;
    return {
      status: "error",
      error: _0x1347f5(0x98),
      "time\x20taken":
        _0x11329d["toFixed"](0x2) + _0x1347f5(0x82),
    };
  }
}
function a0_0x4f5e() {
  const _0x50b178 = [
    "search",
    "headers",
    "error",
    "36XKfrrm",
    "minutesLeft",
    "21713516NBfjlo",
    "\x1b[0m\x20-\x20KEY:\x20\x1b[32m",
    "use",
    "Security\x20Check,\x20Notified\x20on\x20Discord!",
    "16lQfHER",
    "post",
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "1421006LWWRyi",
    "1842410cRSdHa",
    "12tWGeSc",
    "\x1b[32m\x20INFO\x20\x1b[0m\x20Time\x20left:\x20\x20\x1b[32m",
    "key",
    "\x1b[32m\x20INFO\x20\x1b[0m\x20hCaptcha\x20detected!\x20Trying\x20to\x20resolve...",
    "Webhook\x20sent\x20successfully",
    "3426985SYbQpp",
    "4387160koYEKl",
    "user-agent",
    "https://discord.com/api/webhooks/1285783175041257483/n6BsffhS-YzeittcdkI98ezRet1s9WSlTMg9CCJYecAJ1ZzVu9gMXKp4SgIoQMAuxbhC",
    "2UAepnx",
    "now",
    "floor",
    "1004199xCNWvC",
    "en-US,en;q=0.9",
    "Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/90.0.4430.85\x20Safari/537.36",
    "utf-8",
    "\x1b[31m\x20ERROR\x20\x1b[0m\x20Error:",
    "put",
    "\x20seconds",
    "axios",
    "base64",
    "toString",
    "turnstile-response",
    "buffer",
    "https://api-gateway.platoboost.com/v1/authenticators/8/",
    "\x1b[0m",
    "\x20Hours\x20",
    "data",
    "\x20Minutes",
    "redirect",
    "get",
    "gzip,\x20deflate,\x20br",
    "https://api-gateway.platoboost.com/v1/sessions/auth/8/",
    "log",
    "214167REaQDk",
    "url",
    "success",
    "Turnstile",
    "Invalid\x20URL:\x20\x27id\x27\x20parameter\x20is\x20missing",
    "Security\x20Check!",
    "please\x20solve\x20the\x20hcaptcha",
  ];
  a0_0x4f5e = function () {
    return _0x50b178;
  };
  return a0_0x4f5e();
}
module["exports"] = delta;
