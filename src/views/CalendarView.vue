<template>
  <main class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
    <!-- Animated background dots -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-8 md:py-12">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">Daily Summary</h1>
            <p class="text-gray-400 mb-2">Rekap hasil entry GOLD by : Team Trader Gen - Z periode Desember 2025</p>
            <div class="flex items-center gap-4 mt-4">
              <span class="text-xl font-semibold text-white">December 2025</span>
            </div>
          </div>
          <div class="mt-4 md:mt-0 flex items-center gap-4">
            <div class="text-right">
              <div class="text-sm text-gray-400">PnL</div>
              <div class="text-2xl font-bold text-green-400">+{{ netProfit.toLocaleString() }} PIPS</div>
              <div class="text-sm text-gray-400">Days: {{ tradingDays }}</div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Calendar -->
          <div class="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
            <!-- Info Text -->
            <div class="mb-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <p class="text-sm text-blue-300 text-center">
                <svg class="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.596 9.7l2.714-.902M12.003 5.688l2.99 2.99M15.302 7.302l1.093 3.839M17.001 13.999l-3.84-1.092M19.761 16.812l-2.897-.777M12.002 19.002l-2.99-2.99M8.698 16.698l-1.093-3.839M6.999 10.001l3.84 1.092M4.239 7.188l2.897.777M11.998 4.998l2.99 2.99" />
                </svg>
                Klik tanggal untuk melihat history trade
              </p>
            </div>
            <!-- Days of Week Header -->
            <div class="grid grid-cols-7 gap-2 mb-4">
              <div v-for="day in daysOfWeek" :key="day" class="text-center text-sm font-semibold text-gray-400 py-2">
                {{ day }}
              </div>
            </div>

            <!-- Calendar Grid -->
            <div class="grid grid-cols-7 gap-2">
              <!-- Empty cells for days before month starts -->
              <div v-for="n in firstDayOfWeek" :key="'empty-' + n" class="aspect-square"></div>
              
              <!-- Calendar days -->
              <div 
                v-for="day in daysInMonth" 
                :key="day"
                @click="selectDay(day)"
                :class="[
                  'aspect-square rounded-lg border-2 p-1 md:p-2 cursor-pointer transition-all hover:scale-105',
                  isToday(day) ? 'border-blue-500 bg-blue-500/20' : 
                  hasTradingData(day) ? 
                    (getDayProfit(day) >= 0 ? 'border-green-500 bg-green-500/20' : 'border-red-500 bg-red-500/20') :
                    'border-slate-700 bg-slate-700/30',
                  selectedDay === day ? 'ring-2 ring-amber-400' : ''
                ]">
                <div class="flex flex-col h-full relative overflow-hidden">
                  <!-- Date Number - Top Left -->
                  <div :class="['text-xs md:text-sm font-bold absolute top-0 left-1', isToday(day) ? 'text-white' : 'text-gray-300']">
                    {{ day }}
                  </div>
                  
                  <!-- Trading Data - Bottom Center -->
                  <div v-if="hasTradingData(day)" class="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end pb-0.5">
                    <div class="flex items-center justify-center gap-0.5 mb-0.5">
                      <span class="text-[9px] md:text-[10px] font-semibold text-white">{{ getDayTradesCount(day) }}</span>
                      <svg 
                        v-if="getDayProfit(day) >= 0"
                        class="w-2 h-2 md:w-2.5 md:h-2.5 text-green-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                      </svg>
                      <svg 
                        v-else
                        class="w-2 h-2 md:w-2.5 md:h-2.5 text-red-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div :class="['text-[8px] md:text-[9px] font-bold leading-none text-center', getDayProfit(day) >= 0 ? 'text-green-400' : 'text-red-400']">
                      <div class="whitespace-nowrap">{{ getDayProfit(day) >= 0 ? '+' : '' }}{{ getDayProfit(day).toLocaleString() }}</div>
                      <div class="text-[7px] md:text-[8px] opacity-90">PIPS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Weekly Summary -->
          <div class="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
            <h2 class="text-xl font-bold text-white mb-4">Weekly Summary</h2>
            <div class="space-y-3">
              <div 
                v-for="week in weeklySummary" 
                :key="week.week"
                class="p-3 rounded-lg"
                :class="week.hasTrades ? 'bg-slate-700/50' : 'bg-slate-700/20'">
                <div class="font-semibold text-white text-sm mb-1">{{ week.week }}</div>
                <div class="text-xs text-gray-400 mb-1">{{ week.dateRange }}</div>
                <div v-if="week.hasTrades" class="text-sm">
                  <span :class="week.pnl >= 0 ? 'text-green-400' : 'text-red-400'">
                    PnL: {{ week.pnl >= 0 ? '+' : '' }}{{ week.pnl.toLocaleString() }} PIPS
                  </span>
                  <span class="text-gray-400 ml-2">Days: {{ week.days }}</span>
                </div>
                <div v-else class="text-xs text-gray-500">No trades</div>
              </div>
            </div>
          </div>
        </div>

        <!-- KPI Cards -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          <div class="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-4 text-center">
            <div class="text-sm text-gray-400 mb-1">Number of days</div>
            <div class="text-2xl font-bold text-white">{{ tradingDays }}</div>
          </div>
          <div class="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-4 text-center">
            <div class="text-sm text-gray-400 mb-1">Total Trades Taken</div>
            <div class="text-2xl font-bold text-white">{{ totalTrades }}</div>
          </div>
          <div class="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-4 text-center">
            <div class="text-sm text-gray-400 mb-1">Total Profit</div>
            <div class="text-2xl font-bold text-green-400">+{{ totalProfit }} PIPS</div>
          </div>
          <div class="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-4 text-center">
            <div class="text-sm text-gray-400 mb-1">Biggest Win</div>
            <div class="text-2xl font-bold text-green-400">+{{ biggestWin }} PIPS</div>
          </div>
          <div class="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-4 text-center">
            <div class="text-sm text-gray-400 mb-1">Biggest Loss</div>
            <div class="text-2xl font-bold text-red-400">{{ biggestLoss }} PIPS</div>
          </div>
        </div>

        <!-- Add New Signal Form -->
        <div class="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 mt-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-white">➕ Tambah Signal Baru</h3>
            <button
              @click="showAddForm = !showAddForm"
              class="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all text-sm font-medium"
            >
              {{ showAddForm ? 'Tutup Form' : 'Buka Form' }}
            </button>
          </div>

          <div v-if="showAddForm" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <!-- Date -->
              <div>
                <label class="block text-white text-sm font-medium mb-2">📅 Tanggal</label>
                <input
                  type="date"
                  v-model="newSignal.date"
                  class="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <!-- Action -->
              <div>
                <label class="block text-white text-sm font-medium mb-2">🎯 Action</label>
                <select
                  v-model="newSignal.action"
                  class="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Pilih Action</option>
                  <option value="BUY">BUY</option>
                  <option value="SELL">SELL</option>
                </select>
              </div>

              <!-- Price -->
              <div>
                <label class="block text-white text-sm font-medium mb-2">💰 Price</label>
                <input
                  type="text"
                  v-model="newSignal.price"
                  placeholder="4.450 atau 4.450 - 4.452"
                  class="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <!-- Profit/Loss -->
              <div>
                <label class="block text-white text-sm font-medium mb-2">📈 Profit/Loss (PIPS)</label>
                <input
                  type="number"
                  v-model.number="newSignal.profit"
                  placeholder="Contoh: 50 atau -30"
                  class="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <!-- Status -->
              <div>
                <label class="block text-white text-sm font-medium mb-2">✅ Status</label>
                <select
                  v-model="newSignal.status"
                  class="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Pilih Status</option>
                  <option value="win">Win (Profit)</option>
                  <option value="loss">Loss</option>
                  <option value="cancel">Cancel</option>
                  <option value="hold">Hold</option>
                </select>
              </div>
            </div>

            <div class="flex gap-3">
              <button
                @click="addSignal"
                class="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all flex items-center space-x-2 text-sm font-medium"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                <span>Tambah Signal</span>
              </button>
              <button
                @click="clearSignalForm"
                class="px-6 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-all text-sm font-medium"
              >
                Reset Form
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Popup for Transaction History -->
      <div 
        v-if="showModal && selectedDayData"
        @click.self="closeModal"
        class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div class="bg-slate-800 rounded-2xl border border-slate-700 max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-6 border-b border-slate-700">
            <div>
              <h2 class="text-2xl font-bold text-white">Transaction History</h2>
              <p class="text-gray-400 text-sm mt-1">
                {{ formatDate(selectedDay) }} December 2025
              </p>
            </div>
            <button 
              @click="closeModal"
              class="text-gray-400 hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Modal Content -->
          <div class="flex-1 overflow-y-auto p-6">
            <!-- Summary -->
            <div class="grid grid-cols-3 gap-4 mb-6">
              <div class="bg-slate-700/50 rounded-lg p-4 text-center">
                <div class="text-sm text-gray-400 mb-1">Total Trades</div>
                <div class="text-xl font-bold text-white">{{ selectedDayData.trades }}</div>
              </div>
              <div class="bg-slate-700/50 rounded-lg p-4 text-center">
                <div class="text-sm text-gray-400 mb-1">Total Profit</div>
                <div :class="['text-xl font-bold', selectedDayData.profit >= 0 ? 'text-green-400' : 'text-red-400']">
                  {{ selectedDayData.profit >= 0 ? '+' : '' }}{{ selectedDayData.profit.toLocaleString() }} PIPS
                </div>
              </div>
              <div class="bg-slate-700/50 rounded-lg p-4 text-center">
                <div class="text-sm text-gray-400 mb-1">Win Rate</div>
                <div class="text-xl font-bold text-blue-400">
                  {{ getDayWinRate() }}%
                </div>
              </div>
            </div>

            <!-- Transaction List -->
            <div class="space-y-3">
              <div 
                v-for="(signal, index) in selectedDayData.signals" 
                :key="index"
                :class="[
                  'bg-slate-700/30 rounded-lg border p-4',
                  signal.status === 'win' ? 'border-green-500/30' : 
                  signal.status === 'loss' ? 'border-red-500/30' : 
                  signal.status === 'cancel' ? 'border-yellow-500/30' : 
                  'border-blue-500/30'
                ]">
                <div class="flex items-start justify-between gap-4">
                  <div class="flex-1">
                    <div class="flex items-center gap-3 mb-2">
                      <span class="text-xs font-semibold text-gray-400">#{{ index + 1 }}</span>
                      <span 
                        :class="[
                          'px-2 py-1 rounded text-xs font-bold',
                          signal.action === 'BUY' ? 'bg-blue-500/20 text-blue-300' : 'bg-red-500/20 text-red-300'
                        ]">
                        {{ signal.action }}
                      </span>
                      <span class="text-sm text-gray-300">{{ signal.price }}</span>
                    </div>
                    <div 
                      :class="[
                        'text-sm font-semibold mb-1',
                        signal.profit >= 0 ? 'text-green-400' : 'text-red-400'
                      ]">
                      {{ signal.profit >= 0 ? 'Profit' : 'Loss' }} {{ Math.abs(signal.profit) }} PIPS
                    </div>
                    <div 
                      :class="[
                        'text-xs px-2 py-1 rounded inline-block',
                        signal.status === 'win' ? 'bg-green-500/20 text-green-300' : 
                        signal.status === 'loss' ? 'bg-red-500/20 text-red-300' : 
                        signal.status === 'cancel' ? 'bg-yellow-500/20 text-yellow-300' : 
                        'bg-blue-500/20 text-blue-300'
                      ]">
                      {{ getStatusText(signal) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'CalendarView',
  data() {
    return {
      currentDate: new Date(2025, 11, 1), // December 2025 - fixed to December only
      selectedDay: null,
      showModal: false,
      daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      tradingData: {},
      showAddForm: false,
      newSignal: {
        date: '',
        action: '',
        price: '',
        profit: 0,
        status: ''
      },
      signals: [
        { date: '05/12/25', action: 'BUY', price: '4.181', profit: 1000, status: 'win' },
        { date: '12/12/25', action: 'BUY', price: '4.330', profit: 200, status: 'win' },
        { date: '12/12/25', action: 'SELL', price: '4.344', profit: 700, status: 'win' },
        { date: '12/12/25', action: 'BUY', price: '4.266 - 4.280', profit: 800, status: 'hold' },
        { date: '15/12/25', action: 'BUY', price: '4.310 - 4.313', profit: 100, status: 'win' },
        { date: '15/12/25', action: 'SELL', price: '4.348 - 4.350', profit: 0, status: 'cancel' },
        { date: '15/12/25', action: 'SELL', price: '4.342 - 4.343', profit: 40, status: 'win' },
        { date: '15/12/25', action: 'SELL', price: '4.335 - 4.336', profit: 120, status: 'win' },
        { date: '16/12/25', action: 'BUY', price: '4.301', profit: -30, status: 'loss' },
        { date: '16/12/25', action: 'BUY', price: '4.280', profit: 70, status: 'win' },
        { date: '16/12/25', action: 'BUY', price: '4.274', profit: 180, status: 'win' },
        { date: '16/12/25', action: 'SELL', price: '4.311', profit: 100, status: 'win' },
        { date: '17/12/25', action: 'BUY', price: '4.325', profit: -30, status: 'loss' },
        { date: '17/12/25', action: 'BUY', price: '4.313', profit: -30, status: 'loss' },
        { date: '17/12/25', action: 'BUY', price: '4.313', profit: 100, status: 'win' },
        { date: '17/12/25', action: 'BUY', price: '4.328', profit: 50, status: 'win' },
        { date: '17/12/25', action: 'SELL', price: '4.347', profit: 200, status: 'win' },
        { date: '18/12/25', action: 'BUY', price: '4.320 - 4.325', profit: 30, status: 'win' },
        { date: '18/12/25', action: 'BUY', price: '4.325', profit: 30, status: 'win' },
        { date: '18/12/25', action: 'BUY', price: '4.325', profit: 30, status: 'win' },
        { date: '18/12/25', action: 'BUY', price: '4.325', profit: 30, status: 'win' },
        { date: '18/12/25', action: 'BUY', price: '4.325', profit: 100, status: 'win' },
        { date: '18/12/25', action: 'BUY', price: '4.325 - 4.322', profit: 0, status: 'win' },
        { date: '18/12/25', action: 'SELL', price: '4.325', profit: -30, status: 'loss' },
        { date: '18/12/25', action: 'SELL', price: '4.323', profit: 70, status: 'win' },
        { date: '18/12/25', action: 'SELL', price: '4.323', profit: 80, status: 'win' },
        { date: '18/12/25', action: 'BUY', price: '4.321', profit: 490, status: 'win' },
        { date: '18/12/25', action: 'SELL', price: '4.370 - 4.369', profit: 130, status: 'win' },
        { date: '19/12/25', action: 'BUY', price: '4.325', profit: 150, status: 'win' },
        { date: '19/12/25', action: 'BUY', price: '4.325', profit: 50, status: 'win' },
        // Recap 23/12/2025 - WIN: 9, LOSS: 1, PROFIT: 820 PIPS, LOSS: 30 PIPS
        { date: '23/12/25', action: 'SELL', price: '4.484 - 4.486', profit: 30, status: 'win' },
        { date: '23/12/25', action: 'SELL', price: '4.489', profit: 50, status: 'win' },
        { date: '23/12/25', action: 'BUY', price: '4.487', profit: 50, status: 'win' },
        { date: '23/12/25', action: 'BUY', price: '4.475', profit: 50, status: 'win' },
        { date: '23/12/25', action: 'SELL', price: '4.475', profit: 230, status: 'win' },
        { date: '23/12/25', action: 'BUY', price: '4.461', profit: 100, status: 'win' },
        { date: '23/12/25', action: 'BUY', price: '4.470', profit: -30, status: 'loss' },
        { date: '23/12/25', action: 'SELL', price: '4.450', profit: 200, status: 'win' },
        { date: '23/12/25', action: 'SELL', price: '4.450', profit: 100, status: 'win' },
        { date: '23/12/25', action: 'SELL', price: '4.445', profit: 50, status: 'win' },
        // Recap 24/12/2025 - WIN: 10, LOSS: 3, PROFIT: 760 PIPS, LOSS: 90 PIPS
        { date: '24/12/25', action: 'BUY', price: '4.484', profit: 60, status: 'win' },
        { date: '24/12/25', action: 'BUY', price: '4.481', profit: 80, status: 'win' },
        { date: '24/12/25', action: 'SELL', price: '4.484', profit: -30, status: 'loss' },
        { date: '24/12/25', action: 'BUY', price: '4.460', profit: 140, status: 'win' },
        { date: '24/12/25', action: 'BUY', price: '4.495', profit: -30, status: 'loss' },
        { date: '24/12/25', action: 'BUY', price: '4.490', profit: -30, status: 'loss' },
        { date: '24/12/25', action: 'BUY', price: '4.490', profit: 50, status: 'win' },
        { date: '24/12/25', action: 'SELL', price: '4.996', profit: 50, status: 'win' },
        { date: '24/12/25', action: 'SELL', price: '4.995', profit: 100, status: 'win' },
        { date: '24/12/25', action: 'BUY', price: '4.485', profit: 50, status: 'win' },
        { date: '24/12/25', action: 'SELL', price: '4.489', profit: 80, status: 'win' },
        { date: '24/12/25', action: 'SELL', price: '4.491', profit: 100, status: 'win' }
      ]
    };
  },
  computed: {
    currentMonthYear() {
      return this.currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    },
    firstDayOfWeek() {
      const firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
      return firstDay.getDay();
    },
    daysInMonth() {
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();
      const days = new Date(year, month + 1, 0).getDate();
      return Array.from({ length: days }, (_, i) => i + 1);
    },
    tradingDays() {
      return Object.keys(this.tradingData).length;
    },
    totalTrades() {
      return this.signals.length; // All signals including cancel
    },
    totalProfit() {
      // Only count positive profits, exclude cancel
      return this.signals
        .filter(s => s.status !== 'cancel' && s.profit > 0)
        .reduce((sum, s) => sum + s.profit, 0);
    },
    totalLoss() {
      // Only count negative profits (losses)
      return Math.abs(this.signals
        .filter(s => s.profit < 0)
        .reduce((sum, s) => sum + s.profit, 0));
    },
    biggestWin() {
      return Math.max(...this.signals.map(s => s.profit > 0 ? s.profit : 0));
    },
    biggestLoss() {
      const losses = this.signals.filter(s => s.profit < 0).map(s => Math.abs(s.profit));
      return losses.length > 0 ? Math.max(...losses) : 0;
    },
    netProfit() {
      return this.totalProfit - this.totalLoss;
    },
    selectedDayData() {
      if (!this.selectedDay) return null;
      const dayStr = this.selectedDay.toString();
      return this.tradingData[dayStr] || null;
    },
    weeklySummary() {
      // Calculate weekly data from trading data
      const week1Days = [1, 2, 3, 4, 5, 6];
      const week2Days = [7, 8, 9, 10, 11, 12, 13];
      const week3Days = [14, 15, 16, 17, 18, 19, 20];
      const week4Days = [21, 22, 23, 24, 25, 26, 27];
      const week5Days = [28, 29, 30, 31];
      
      const calculateWeekPnL = (days) => {
        let pnl = 0;
        let tradeDays = 0;
        days.forEach(day => {
          if (this.tradingData[day]) {
            pnl += this.tradingData[day].profit;
            tradeDays++;
          }
        });
        return { pnl, tradeDays, hasTrades: tradeDays > 0 };
      };
      
      const week1 = calculateWeekPnL(week1Days);
      const week2 = calculateWeekPnL(week2Days);
      const week3 = calculateWeekPnL(week3Days);
      const week4 = calculateWeekPnL(week4Days);
      const week5 = calculateWeekPnL(week5Days);
      
      return [
        { week: 'Week One', dateRange: 'Dec 1 - Dec 6', hasTrades: week1.hasTrades, pnl: week1.pnl, days: week1.tradeDays },
        { week: 'Week Two', dateRange: 'Dec 7 - Dec 13', hasTrades: week2.hasTrades, pnl: week2.pnl, days: week2.tradeDays },
        { week: 'Week Three', dateRange: 'Dec 14 - Dec 20', hasTrades: week3.hasTrades, pnl: week3.pnl, days: week3.tradeDays },
        { week: 'Week Four', dateRange: 'Dec 21 - Dec 27', hasTrades: week4.hasTrades, pnl: week4.pnl, days: week4.tradeDays },
        { week: 'Week Five', dateRange: 'Dec 28 - Dec 31', hasTrades: week5.hasTrades, pnl: week5.pnl, days: week5.tradeDays }
      ];
    }
  },
  methods: {
    previousMonth() {
      // Disabled - only December 2025
    },
    nextMonth() {
      // Disabled - only December 2025
    },
    goToToday() {
      // Keep December 2025
      this.currentDate = new Date(2025, 11, 1);
    },
    isToday(day) {
      const today = new Date();
      return today.getDate() === day && 
             today.getMonth() === this.currentDate.getMonth() && 
             today.getFullYear() === this.currentDate.getFullYear();
    },
    hasTradingData(day) {
      return Object.prototype.hasOwnProperty.call(this.tradingData, day.toString());
    },
    getDayTradesCount(day) {
      const dayStr = day.toString();
      if (this.tradingData[dayStr]) {
        return this.tradingData[dayStr].trades;
      }
      return 0;
    },
    getDayProfit(day) {
      const dayStr = day.toString();
      if (this.tradingData[dayStr]) {
        return this.tradingData[dayStr].profit;
      }
      return 0;
    },
    formatProfit(profit) {
      if (profit >= 0) {
        return `+${profit.toLocaleString()} PIPS`;
      }
      return `${profit.toLocaleString()} PIPS`;
    },
    selectDay(day) {
      if (this.hasTradingData(day)) {
        this.selectedDay = day;
        this.showModal = true;
      }
    },
    closeModal() {
      this.showModal = false;
      this.selectedDay = null;
    },
    formatDate(day) {
      if (!day) return '';
      const date = new Date(2025, 11, day);
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return `${days[date.getDay()]}, ${day}`;
    },
    getDayWinRate() {
      if (!this.selectedDayData) return 0;
      const wins = this.selectedDayData.signals.filter(s => s.status === 'win').length;
      const validTrades = this.selectedDayData.signals.filter(s => s.status !== 'cancel').length;
      if (validTrades === 0) return 0;
      return Math.round((wins / validTrades) * 100);
    },
    getStatusText(signal) {
      if (signal.status === 'win') {
        if (signal.profit >= 1000) return 'HIT TP✅';
        if (signal.profit >= 100) return 'INSTAN HIT TP✅';
        if (signal.profit === 0) return 'HIT BREAK EVEN✅';
        return 'HIT TP✅';
      }
      if (signal.status === 'loss') return 'HIT SL❌';
      if (signal.status === 'cancel') return 'CANCEL SIGNAL TIDAK TERJEMPUT';
      if (signal.status === 'hold') return 'MASIH HOLD BUY | VALIDATION✅';
      return 'VALIDATION✅';
    },
    // Trading Signals Methods
    saveTradingSignals() {
      const savedSignals = localStorage.getItem('tradingSignals');
      let allSignals = [];
      if (savedSignals) {
        try {
          allSignals = JSON.parse(savedSignals);
        } catch (e) {
          console.error('Error parsing saved signals:', e);
        }
      }
      localStorage.setItem('tradingSignals', JSON.stringify(allSignals));
    },
    addSignal() {
      // Validation
      if (!this.newSignal.date) {
        alert("⚠️ Tanggal harus diisi!");
        return;
      }
      if (!this.newSignal.action) {
        alert("⚠️ Action (BUY/SELL) harus dipilih!");
        return;
      }
      if (!this.newSignal.price) {
        alert("⚠️ Price harus diisi!");
        return;
      }
      if (!this.newSignal.status) {
        alert("⚠️ Status harus dipilih!");
        return;
      }

      // Convert date to DD/MM/YY format
      const dateObj = new Date(this.newSignal.date);
      const day = String(dateObj.getDate()).padStart(2, '0');
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      const year = String(dateObj.getFullYear()).slice(-2);
      const formattedDate = `${day}/${month}/${year}`;

      // Create signal object
      const signal = {
        date: formattedDate,
        action: this.newSignal.action,
        price: this.newSignal.price,
        profit: this.newSignal.profit || 0,
        status: this.newSignal.status
      };

      // Get current saved signals
      const savedSignals = localStorage.getItem('tradingSignals');
      let allSignals = [];
      if (savedSignals) {
        try {
          allSignals = JSON.parse(savedSignals);
        } catch (e) {
          console.error('Error parsing saved signals:', e);
        }
      }

      // Add new signal
      allSignals.push(signal);
      localStorage.setItem('tradingSignals', JSON.stringify(allSignals));

      // Add to current view
      this.signals.push(signal);

      // Reprocess trading data
      this.tradingData = {};
      this.signals.forEach(s => {
        const dateParts = s.date.split('/');
        const d = parseInt(dateParts[0]);
        const m = parseInt(dateParts[1]);
        
        if (m === 12) {
          const dayKey = d.toString();
          if (!this.tradingData[dayKey]) {
            this.tradingData[dayKey] = { trades: 0, profit: 0, signals: [] };
          }
          this.tradingData[dayKey].trades++;
          if (s.status !== 'cancel') {
            this.tradingData[dayKey].profit += s.profit;
          }
          this.tradingData[dayKey].signals.push(s);
        }
      });

      this.$forceUpdate();
      
      alert(`✅ Signal trading berhasil ditambahkan!\n\n📅 Tanggal: ${formattedDate}\n🎯 ${signal.action} ${signal.price}\n💰 ${signal.profit >= 0 ? '+' : ''}${signal.profit} PIPS`);
      
      this.clearSignalForm();
      this.showAddForm = false;
    },
    clearSignalForm() {
      this.newSignal = {
        date: '',
        action: '',
        price: '',
        profit: 0,
        status: ''
      };
    }
  },
  mounted() {
    // Load dynamic signals from localStorage
    const savedSignals = localStorage.getItem('tradingSignals');
    if (savedSignals) {
      try {
        const dynamicSignals = JSON.parse(savedSignals);
        // Merge with hardcoded signals
        this.signals = [...this.signals, ...dynamicSignals];
      } catch (e) {
        console.error('Error loading signals from localStorage:', e);
      }
    }

    // Process signals to populate tradingData
    this.signals.forEach(signal => {
      const dateParts = signal.date.split('/');
      const day = parseInt(dateParts[0]);
      const month = parseInt(dateParts[1]);
      
      // Only process December 2025 signals
      if (month === 12) {
        const dayKey = day.toString();
        if (!this.tradingData[dayKey]) {
          this.tradingData[dayKey] = { trades: 0, profit: 0, signals: [] };
        }
        // Count all trades including cancel
        this.tradingData[dayKey].trades++;
        // Only add profit if not cancel (cancel has profit 0 and status cancel)
        if (signal.status !== 'cancel') {
          this.tradingData[dayKey].profit += signal.profit;
        }
        this.tradingData[dayKey].signals.push(signal);
      }
    });
    
    // Set reactive
    this.$forceUpdate();

    // Listen for storage changes (when new signals are added from Admin Panel)
    window.addEventListener('storage', () => {
      location.reload(); // Reload page to show new signals
    });
  }
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>

