import { Droplets, Wind, Shield, Zap, Sparkles, Home } from "lucide-react";

const HardwoodDryingInfo = () => {
    return (
        <section id="hardwood-drying-info" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Advanced Hardwood Water Extraction in Litchfield Park, Arizona
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Litchfield Park's arid climate creates a high-stakes environment for water-damaged wood. When water gets under your hardwood, the sudden shift in moisture content Can cause permanent warping, cupping, and buckling within hours. Our specialized drying systems are designed to save your floors without the need for total replacement.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Droplets className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Sub-Floor Suction Extraction
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We use industrial vacuum mats that seal directly to your hardwood, pulling moisture out of the planks and the subfloor beneath. This high-pressure extraction often eliminates the need to tear up expensive flooring after a leak or flood.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-cyan-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-cyan-100 p-3 rounded-lg">
                                    <Wind className="w-8 h-8 text-cyan-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Directed Heat Drying
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Controlled heat is essential for opening the wood grain and releasing trapped water molecules. Our Litchfield Park team uses specialized drying trailers that pump dry, heated air into the affected space, speeding up the evaporation process significantly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-slate-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-slate-100 p-3 rounded-lg">
                                    <Shield className="w-8 h-8 text-slate-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Invasive Moisture Mapping
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Visible dryness is deceptive. We use penetrating moisture meters and thermal imaging cameras to track water as it travels behind baseboards and under cabinets, ensuring every drop is accounted for and dried.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-amber-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-amber-100 p-3 rounded-lg">
                                    <Zap className="w-8 h-8 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Structural Dehumidification
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        While the Arizona air is dry, a flood creates a micro-climate of high humidity in your home. Our LGR (Low Grain Refrigerant) dehumidifiers pull gallons of water per day out of the atmosphere to protect your home's structural integrity.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-emerald-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-emerald-100 p-3 rounded-lg">
                                    <Sparkles className="w-8 h-8 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Anti-Microbial Treatment
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Water damage often brings dormant mold spores to life. We apply hospital-grade, plant-based anti-microbials beneath the floorboards to prevent mold growth during and after the drying process, keeping your Litchfield Park home healthy.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-indigo-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-indigo-100 p-3 rounded-lg">
                                    <Home className="w-8 h-8 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Floor Buckling Repair
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        If your floors have already started to cup or 'tent', don't panic. Our structural drying techniques can often pull those boards back down to the subfloor as the moisture levels equalize, restoring the beauty of your Arizona residence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HardwoodDryingInfo;
