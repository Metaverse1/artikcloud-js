(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ArtikCloud) {
      root.ArtikCloud = {};
    }
    root.ArtikCloud.DeviceSharing = factory(root.ArtikCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DeviceSharing model module.
   * @module model/DeviceSharing
   * @version 2.0.6
   */

  /**
   * Constructs a new <code>DeviceSharing</code>.
   * 
   * @alias module:model/DeviceSharing
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>DeviceSharing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceSharing} obj Optional instance to populate.
   * @return {module:model/DeviceSharing} The populated <code>DeviceSharing</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('sharedOn')) {
        obj['sharedOn'] = ApiClient.convertToType(data['sharedOn'], 'Number');
      }
    }
    return obj;
  }


  /**
   * Share ID
   * @member String id
   */
  exports.prototype['id'] = undefined;

  /**
   * Email
   * @member String email
   */
  exports.prototype['email'] = undefined;

  /**
   * Status
   * @member String status
   */
  exports.prototype['status'] = undefined;

  /**
   * Shared on
   * @member Number sharedOn
   */
  exports.prototype['sharedOn'] = undefined;




  return exports;
}));
