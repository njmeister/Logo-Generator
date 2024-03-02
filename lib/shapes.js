class Shape {
  constructor(text, textColor, color) {
    this.text = text;
    this.textColor = textColor;
    this.color = color;
    this.container = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    this.textElement = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    this.colorKeywords = [
        'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure',
        'beige', 'bisque', 'black', 'blanchedalmond', 'blue',
        'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse',
        'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson',
        'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray',
        'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen',
        'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen',
        'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet',
        'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue',
        'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro',
        'ghostwhite', 'gold', 'goldenrod', 'gray', 'green',
        'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred',
        'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush',
        'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan',
        'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink',
        'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey',
        'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen',
        'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid',
        'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise',
        'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin',
        'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab',
        'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen',
        'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru',
        'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple',
        'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon',
        'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver',
        'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow',
        'springgreen', 'steelblue', 'tan', 'teal', 'thistle',
        'tomato', 'turquoise', 'violet', 'wheat', 'white',
        'whitesmoke', 'yellow', 'yellowgreen'
    ];
    this.hexCode = /^#[a-fA-F0-9]{6}$/
  }

  checkText(text) {
    if (text.length < 4 && text.length > 0) {
      return true;
    } else {
      return false
    }
  }

  checkColor(color) {
    if(this.colorKeywords.includes(color) || this.hexCode.test(color)) {
        return true;
    } else {
        return false;
    }
  }
}

class Circle extends Shape {
  constructor(text, textColor, color, shape) {
    super(text, textColor, color);
    this.shape = shape;
  }
    render() {
        return `${this.container}<circle cx="150" cy="100" r="80" fill="${this.color}" />${this.textElement}</svg>`;
    }
}

class Square extends Shape {
  constructor(text, textColor, color, shape) {
    super(text, textColor, color);
    this.shape = shape;
  }
    render() {
        return `${this.container}<rect x="85" y="35" width="130" height="130" fill="${this.color}" />${this.textElement}</svg>`;
    }
}

class Triangle extends Shape {
  constructor(text, textColor, color, shape) {
    super(text, textColor, color);
    this.shape = shape;
  }
    render() {
        return `${this.container}<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />${this.textElement}</svg>`;
    }
}



module.exports = { Shape, Circle, Square, Triangle };