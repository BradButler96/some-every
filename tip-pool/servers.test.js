describe('submitServerInfo()', function() {
    it('should add new servers to allServers on submitServerInfo()', function () {
        serverNameInput.value = 'Alice';
            submitServerInfo();
            expect(Object.keys(allServers).length).toEqual(1);
            expect(allServers['server' + serverId].serverName).toEqual('Alice');

        serverNameInput.value = 'Brad';
            submitServerInfo();
            expect(Object.keys(allServers).length).toEqual(2);
            expect(allServers['server' + serverId].serverName).toEqual('Brad');

        serverNameInput.value = 'Daniele';
            submitServerInfo();
            expect(Object.keys(allServers).length).toEqual(3);
            expect(allServers['server' + serverId].serverName).toEqual('Daniele');
      });
      afterEach(function() {
            allServers = {};
      });
});

describe('updateServerTable()', function() {
    it ('should measure serverTable length before and after function to verify new length', function () {
        updateServerTable()
        let serverRows = document.getElementById('serverTable').children[1].children;

        expect(serverRows.length).toEqual(0);

        serverNameInput.value = 'New Name';
        submitServerInfo()

        expect(serverRows.length).toEqual(1);
    });

    afterEach(function() {
        allServers = {};
    });
});

