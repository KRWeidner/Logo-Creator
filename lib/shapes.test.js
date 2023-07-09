const Validate = require('../validate');

describe('Validate', () => {
    it('should render a triangle successfully with color', () => {
      const validate = new Validate();
      const color = "purple";
      const result = validate.renderTriangle(color);
      expect(result).toEqual(`<polygon points="150, 5 244, 182 56, 182" fill="${color}" />`);
    });
    
    it('should render a square successfully with color', () => {
      const validate = new Validate();
      const color = "red";
      const result = validate.renderSquare(color);
      expect(result).toEqual(`<polygon points="245, 42 245, 245 42, 245 42, 42" fill="${color}" />`);
    });
  
    it('should render a circle successfully with color', () => {
      const validate = new Validate();
      const color = "#6495ed";
      const result = validate.renderCircle(color);
      expect(result).toEqual(`<circle cx="150" cy="115" r="85" fill="${color}" />`);
    });
  });
