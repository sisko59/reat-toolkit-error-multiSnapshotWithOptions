import {
  Accordion,
  Button,
  CollapseCard,
  CollapseCardBase,
} from '@axa-fr/react-toolkit-all';
import React from 'react';

const RegionsComponent = () => {

  return (
    <>
      <label>Data center/Entity</label>
      <div className="row mb-4">
        <div className="col-md-8">
          <Accordion onlyOne>
              <CollapseCardBase
                classModifier="arrow-left"
                className="af-accordion"
                key={`datacenter`}
                id={`datacenter`}
                title="datacenter"
                isOpen={true}
              >
                <CollapseCard.Header key='header'>
                  <div className="row">
                    <div>AA</div>
                  </div>
                </CollapseCard.Header>
                <CollapseCard.Body key='body'>
                  <div className="row">
                    <div className="col-md-6">
                      <Button
                        id={`selectAll`}
                      >
                        <span className="af-btn__text">Select All</span>
                      </Button>
                      <Button
                        id={`unselectAll`}
                      >
                        <span className="af-btn__text">Unselect All</span>
                      </Button>
                    </div>
                  </div>
                </CollapseCard.Body>
              </CollapseCardBase>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default RegionsComponent;
